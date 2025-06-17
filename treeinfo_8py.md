---
title: packman/packmanlib/treeinfo.py

---

# packman/packmanlib/treeinfo.py



## Namespaces

| Name           |
| -------------- |
| **[packmanlib::treeinfo](namespacepackmanlib_1_1treeinfo.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[packmanlib::treeinfo::VOSTreeInfo](classpackmanlib_1_1treeinfo_1_1_v_o_s_tree_info.md)**  |
| class | **[packmanlib::treeinfo::VOS3TreeInfo](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info.md)**  |
| class | **[packmanlib::treeinfo::VOS3TreeInfo::UserBundleFinder](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_user_bundle_finder.md)**  |
| class | **[packmanlib::treeinfo::VOS3TreeInfo::BundleCounter](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_bundle_counter.md)**  |
| class | **[packmanlib::treeinfo::VOS3TreeInfo::UPFileCounter](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_u_p_file_counter.md)**  |
| class | **[packmanlib::treeinfo::TreeInfo](classpackmanlib_1_1treeinfo_1_1_tree_info.md)**  |




## Source code

```python
import json
import re

from packmanlib.treewalk import Observer, TreeWalker
from packmanlib.vosconstants import ADK_VERSION_RE, OS_VERSION_RE, BLACKLISTS_SOURCE_RE, OS_PRESENT_RE, LLAYERS_RE, \
    TARGET_PATH, VOS3_ADK_VERSION_RE


class VOSTreeInfo:
    def __init__(self, dlfile):
        self.dlfile = dlfile
        self.blacklists = None
        self.full_device_list = None

    def get_adk_version(self):
        """!
        Retrieve ADK version
        @return adk version string or empty string if not found
        """
        adk_version = ""
        adk_version_node = self.dlfile.find_re(ADK_VERSION_RE)
        if adk_version_node:
            adk_version_node = adk_version_node[0]
            adk_version = adk_version_node.file_content.get_value_str().splitlines()[0]
        return adk_version

    def get_os_version(self):
        """!
        Retrieve OS version
        @return adk version string or empty string if not found
        """
        os_version = ""
        os_version_node = self.dlfile.find_re(OS_VERSION_RE)
        if os_version_node:
            os_version_node = os_version_node[0]
            os_version = os_version_node.file_content.get_value_str().splitlines()[0]
        return os_version

    def has_os(self):
        """!
        Check if contains an OS
        @return True if contains OS, False if not
        """
        return self.dlfile.find_re(OS_PRESENT_RE) is not None

    def has_blacklists(self):
        """!
        Check if contains blacklists
        @return True if contains blacklists, False if not
        """
        return self.dlfile.find_re(BLACKLISTS_SOURCE_RE) is not None

    def get_blacklists(self):
        """!
        Returns dictionary such as dict[device] = set(blacklisted bundles,...)
        @return return blacklists dictionary
        """
        # avoid rebuilding
        if not self.blacklists:
            self.blacklists = {}
            # Creates a dictionary of sets
            source_blacklists = self.dlfile.find_re(BLACKLISTS_SOURCE_RE)
            if source_blacklists:
                self.blacklists = {}
                for blacklist in source_blacklists:
                    device_name = blacklist.name.replace("_blacklist", "")
                    self.blacklists[device_name] = set()
                    content = blacklist.file_content.get_value_str()
                    for bundle_prefix in content.splitlines():
                        self.blacklists[device_name].add(bundle_prefix)
        return self.blacklists.copy()

    def get_full_device_list(self):
        """!
        Return sorted list of devices. Dlfile must contain an OS.
        Looks for devices in blacklists, then by llayer bundle names
        @return sorted list of devices
        """
        # avoid rebuilding
        if not self.full_device_list:
            self.full_device_list = []
            if self.has_os():
                if self.has_blacklists():
                    self.full_device_list.extend(self.get_blacklists().keys())
                else:
                    llayers = self.dlfile.find_re(LLAYERS_RE)
                    if llayers:
                        for llayer in llayers:
                            match = re.search(r"OS\.llayer-(.*)[_-][0-9.]*\.tgz", llayer.name)
                            if match:
                                device_name = match.group(1)
                                if device_name == 'release':
                                    self.full_device_list.clear()
                                    break
                                elif device_name == 'common':
                                    continue
                                else:
                                    self.full_device_list.append(device_name)
            self.full_device_list = sorted(self.full_device_list)
        return self.full_device_list.copy()

    def get_bundle_device_list(self, bundle):
        """!
        Returns sorted list of all products on which this bundle can be installed.
        This takes into account blacklisting and targeting
        :param bundle: bundle node
        @return sorted list of supported devices for this bundle
        """
        supported_devices = self.get_full_device_list().copy()
        if self.has_blacklists():
            for device_name, bundle_set in self.get_blacklists().items():
                for bundle_prefix in bundle_set:
                    if bundle.name.startswith(bundle_prefix):
                        supported_devices.remove(device_name)
                        break
        target_node = bundle.find(TARGET_PATH)
        if target_node:
            for line in target_node.file_content.get_value_str().splitlines():
                if '=' in line:
                    parts = line.split('=')
                    key = parts[0].strip()
                    values = [value.strip() for value in parts[1].split(',')]
                    # Combine blacklist filter with dt_name targeting
                    if key == 'dt_name' and supported_devices:
                        candidates = supported_devices
                        supported_devices = []
                        for value in values:
                            # Replace secure installer patterns with regex
                            value = value.replace('.', r'\.').replace('*', '.*').replace('?', '.')
                            for device_name in candidates:
                                if re.match(value, device_name):
                                    supported_devices.append(device_name)
                    else:
                        supported_devices = values
        return sorted(supported_devices)


class VOS3TreeInfo:
    class UserBundleFinder(Observer):
        def __init__(self):
            self.user_present = False

        def found_inf_cb(self, inf):
            if self.user_present:
                return
            user = inf.manifest_node.dict["user"]
            if user.startswith('usr'):
                self.user_present = True

        def has_user(self):
            return self.user_present

    class BundleCounter(Observer):
        def __init__(self):
            self.bundles = 0

        def found_inf_cb(self, inf):
            self.bundles += 1

        def get_nb_bundles(self):
            return self.bundles

    class UPFileCounter(Observer):
        def __init__(self):
            self.upfiles = 0

        def found_upfile_cb(self, upfile):
            self.upfiles += 1

        def get_nb_upfiles(self):
            return self.upfiles

    def __init__(self, dlfile):
        self.dlfile = dlfile

    def get_adk_version(self):
        """!
        Retrieve ADK version
        @return adk version string or empty string if not found
        """
        adk_version = ""
        adk_version_node = self.dlfile.find_re(VOS3_ADK_VERSION_RE)
        if adk_version_node:
            adk_version_node = adk_version_node[0]
            json_content = json.loads(adk_version_node.file_content.get_value_str())
            if 'info' in json_content and 'version' in json_content["info"]:
                adk_version = json_content["info"]['version']
        return adk_version

    def has_adk(self):
        """!
        Check if contains an ADK
        @return True if contains ADK, False if not
        """
        return self.get_adk_version() != ""

    def has_user_bundle(self):
        finder = self.UserBundleFinder()
        TreeWalker.walk(self.dlfile, [finder])
        return finder.has_user()

    def nb_bundles(self):
        counter = self.BundleCounter()
        TreeWalker.walk(self.dlfile, [counter])
        return counter.get_nb_bundles()

    def nb_upfiles(self):
        counter = self.UPFileCounter()
        TreeWalker.walk(self.dlfile, [counter])
        return counter.get_nb_upfiles()


class TreeInfo:
    @staticmethod
    def get_treeinfo(dlfile):
        platform = dlfile.get_platform()
        if platform.is_vos3():
            return VOS3TreeInfo(dlfile)
        return VOSTreeInfo(dlfile)
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
