---
title: packman/packmanlib/platform.py

---

# packman/packmanlib/platform.py



## Namespaces

| Name           |
| -------------- |
| **[packmanlib::platform](namespacepackmanlib_1_1platform.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[packmanlib::platform::Platform](classpackmanlib_1_1platform_1_1_platform.md)**  |




## Source code

```python
from pathlib import PurePosixPath
import sys

from packmanlib import PackmanError
from packmanlib.vosconstants import P7S_EXT, CMS_EXT, USR_USERS, VOS3_USER_SYS_PREFIX, USER_ROOT, VALID_USERS

PLATFORM_VOS1 = "vos1"
PLATFORM_VOS2 = "vos2"
PLATFORM_VOS3 = "vos3"
PLATFORM_VAOS = "vaos"

MODE_OSDEV = "osdev"
MODE_APPDEV = "appdev"
MODE_PROD = "prod"
MODE_ANY = "any"

class Platform:
    ALL = [PLATFORM_VOS1, PLATFORM_VOS2, PLATFORM_VOS3, PLATFORM_VAOS]
    UI_SUPPORTED = [PLATFORM_VOS1, PLATFORM_VOS2, PLATFORM_VOS3]
    MODES = [MODE_OSDEV, MODE_APPDEV, MODE_PROD]

    def __init__(self, name):
        # default values are for 'vos2'
        self.name = name
        self.dlfile_compressed = True
        self.package_compressed = True
        self.naming = True
        self.filelist_optim = True
        self.blacklist_optim = True
        self.order_optim = True
        self.sig_ext = P7S_EXT
        self.signature_count = 1
        self.mode = MODE_ANY

        # command line actionable
        self.vfi_nocheck = False
        self.vfi_noumask = False
        self.collapse_fixed_issues = True
        self.windows_force_permissions = False
        # force vfi_internal when running automated tests
        self.vfi_internal = 'pytest' in sys.modules

        # vhq force information
        self.vhq_force_info = {
            'models': None,
            'name': None,
            'tags': None,
            'type': None,
            'version': None
        }

    def is_vos1(self) -> bool:
        return self.name == PLATFORM_VOS1

    def is_vos2(self) -> bool:
        return self.name == PLATFORM_VOS2

    def is_vos3(self) -> bool:
        return self.name == PLATFORM_VOS3

    def is_vaos(self) -> bool:
        return self.name == PLATFORM_VAOS

    @staticmethod
    def get(name: str):
        """!
        Retrieve platform instance by name
        @param name: name of platform (one of PLATFORM_XXX)
        @return Platform instance
        """
        if name not in Platform.ALL:
            raise PackmanError(f"{name} is not a supported platform in {Platform.ALL}")
        platform = Platform(name)
        # filter out some properties depending on platform
        if name == PLATFORM_VOS1:
            platform.package_compressed = False
            platform.filelist_optim = False
            platform.blacklist_optim = False
            platform.order_optim = False
        elif name == PLATFORM_VOS3:
            platform.dlfile_compressed = False
            platform.package_compressed = False
            platform.filelist_optim = False
            platform.blacklist_optim = False
            platform.order_optim = True
            platform.sig_ext = CMS_EXT
            platform.signature_count = 2
        return platform

    def get_signature_names(self, base_name):
        """!
        Creates list of names using base_name + signature extensions
        @return list of signature names
        """
        if self.signature_count == 1:
            return [base_name + self.sig_ext]
        else:
            return [f"{base_name}.{i+1}{self.sig_ext}" for i in range(self.signature_count)]

    def get_signature_strindex(self, name):
        if self.signature_count == 1:
            return '1'
        else:
            return name.split('.')[-2]

    def get_signed_node_name(self, sig_name):
        """!
        Get signed node name from signature name
        @return signed node name
        """
        stem = PurePosixPath(sig_name).stem
        if self.signature_count == 1:
            return stem
        else:
            return PurePosixPath(stem).stem

    def get_mode(self):
        return self.mode

    def user_is_valid(self, user):
        if self.is_vos3():
            if user not in USR_USERS and not user.startswith(VOS3_USER_SYS_PREFIX) and user != USER_ROOT:
                return False
        else:
            if user not in VALID_USERS:
                return False
        return True

    def user_type(self, user):
        user_type = ''
        if user == 'root':
            user_type = 'root'
        elif user.startswith('usr'):
            user_type = 'usr'
        elif user.startswith('sys'):
            user_type = 'sys'
        return user_type

    def can_remove(self, user, user_to_remove):
        if user == user_to_remove or self.user_type(user) == 'root':
            return True
        return False 
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
