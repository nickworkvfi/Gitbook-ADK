---
title: sdi/src/filesystem.cpp

---

# sdi/src/filesystem.cpp



## Namespaces

| Name           |
| -------------- |
| **[sdi](namespacesdi.md)**  |
| **[sdi::filesystem](namespacesdi_1_1filesystem.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[sdi::filesystem::UpdateFiles](structsdi_1_1filesystem_1_1_update_files.md)**  |




## Source code

```cpp

#include "filesystem.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <pwd.h>
#ifdef _STM32
  #include <sys/syslimits.h>
  #include "secins.h"
  #include "sdi-pal.h"
  #include "pal/update.h"
#else
  #include <limits.h>
#endif
#include <errno.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <grp.h>
#include "pathutil.h"
#include "_logf.h"
#include "crypt.h"
#include "hexutil.h"
#include "directory.h"
#include "ipc/jsobject.h"
#include "sys.h"
#include "util.h"
#include "cardranges.h"
#include "madk_pp_protocol.h" // includes PP_PROT_TLS_CA_PEM_FILE for factory_reset()
#ifndef HEADLESS
  #include "ui_mode.h"
#endif

// required for run_actions() (before/after config update)
#include "emv/EMV_CT_Interface.h"
#include "emv/EMV_CTLS_Interface.h"
#include "data.h"
#include "cardranges.h"
#include "filterconfig.h"
#include "epp/counterTop.h"
/* minitar required for install_emv_config_package(),
 * install_configuration() and remove_configuration() */
#ifdef _STM32
  // on Titus minitar is part of libfw_tz
  #include "utils/minitar.h"
#else
  // use local SDI implementation
  #include "tar/minitar.h"
#endif

// X86, ANDROID & Co.
#if !defined (_VOS) && !defined (_VOS3)
  // required for install_user_configuration() and install_sdi_plugins() only
  #include "loadplugin.h"
  #include "sec/libsec.h"
  using namespace com_verifone_seccmd;
  using namespace com_adksec_cmd;
#endif

#ifdef _STM32
  #define STM32_SDI_HOME "/sdi"
#endif

using namespace std;
using namespace vfiipc;


namespace sdi
{
  namespace filesystem
  {


    /* declare common prototype, since used by common factory_reset(),
     * but implementation is provided below at twice, one for VOS/VOS2/VOS3
     * and one for Android/Titus platform.
     * \param[out] files list user config files */
    static void get_user_config_files(vector<string> &files);

#ifdef _STM32
  /* declare prototype, since used by factory_reset() implemented above
  * \param[out] files list system config files */
  static void get_system_config_files(vector<string> &files);
#endif

#if defined (_VOS) || defined (_VOS3) || defined (_STM32)
  /* declare common prototype, since used by factory_reset() and init(),
  * but implementation is provided below at twice, one for VOS/VOS2/VOS3
  * and one for Titus platform.
  * \param[in] recover set to true to recover files from persist folder on Titus
  *                    (used by function factory_reset()). This parameter is
  *                    ignored on VOS/VOS2/VOS3.
  *                    Default: false (installation, not recovery) */
  static void check_config_update(bool recover = false);
#endif

    static void check_home()
    {
      // for x86 debugging
#if defined _x86 && defined _DEBUG
      string cwd;
      current_dir(cwd);

      if (setenv("HOME", cwd.c_str(), 1) == 0)
      {
        _LOGF_INFO("HOME set to CWD: %s", cwd.c_str());
      }
      else
      {
        _LOGF_ERROR("Unable to set HOME environment variable");
      }

#else
      char *home = getenv("HOME");

      if (home)
      {
        _LOGF_TRACE("HOME: %s", home);
      }
      else
      {
#ifdef _STM32
        const char *newhome = STM32_SDI_HOME;
        // create SDI home folder (if it does not exist)
        make_dir(STM32_SDI_HOME);
#else
        string cwd;
        current_dir(cwd);
        const char *newhome = cwd.c_str();
#endif

        // set environment variable
        if (setenv("HOME", newhome, 0) == 0)
        {
          _LOGF_INFO("HOME set to %s", newhome);
        }
        else
        {
          _LOGF_ERROR("Unable to set HOME environment variable");
        }
      }

#endif
    }

#ifndef _STM32 // so far not required on Titus, since provided by STM32_SDI_HOME
    static void home_dir(string &path)
    {
      const char *home = getenv("HOME");

      if (home)
      {
        path = home;
      }
      else
      {
        current_dir(path);
      }
    }
#endif

    static void handle_old_version_files()
    {
#if defined _VOS3 || defined _STM32
      // no previous SDI version to convert data for, done.
      return;
#else // others: VOS/VOS2, Android

#ifdef _VOS

      // not possible to take over files form usr1 to sys8
      if (vos_sys8())
      {
        return;
      }

#endif

      // setup flash folder of old SDI version
      string home_path, home_flash;
      home_dir(home_path);
      /* previous SDI server versions on Android use
         $HOME as location for all files */
#ifdef __ANDROID__
      home_flash = home_path;
#else
      home_flash = pathcat(home_path, "flash");
#endif

      struct filedef
      {
        const char *file;       // filename to take over from old folder "flash" to new "flash/sdi"
        const char *src_prefix; // source file prefix used in folder "flash" (old SDI version)
        const char *dst_prefix; // destination file prefix used in folder "flash/sdi" (recent version)
      };
      // files to take over to recent version
      const struct filedef files[] =
      {
        { COM_IF_CONFIG_FILE, 0, COM_PREFIX },
#ifdef _VOS
        { CCP_DATABASE_FILE, "adk-com", COM_PREFIX },
#endif
        { SDI_TRX_DATA_FILE, 0, 0          },
        { STATUS_CFG_FILE, 0, 0          },
        { IDLETEXT_CFG_FILE, 0, 0          }
      };

      for (unsigned i = 0; i < (sizeof(files) / sizeof(files[0])); i++)
      {
        // setup name of source file
        string src = home_flash;

        if (files[i].src_prefix)
        {
          src = pathcat(src, files[i].src_prefix);
        }

        src = pathcat(src, files[i].file);
        struct stat s;

        // we're done, if the old source file does not exist
        if (stat(src.c_str(), &s) != 0 || !S_ISREG(s.st_mode))
        {
          continue;
        }

        // setup name of destination file
        string dst = home_flash_dir();

        if (files[i].dst_prefix)
        {
          dst = pathcat(dst, files[i].dst_prefix);
          // create missing subfolders
          make_dir(dst);
        }

        dst = pathcat(dst, files[i].file);

        // copy to new destination, if the file does not already exist
        if (stat(dst.c_str(), &s) != 0)
        {
          if (copy_file(src, dst))
          {
            _LOGF_INFO("%s: copied old file '%s' to new '%s'",
                       __FUNCTION__, src.c_str(), dst.c_str());
          }
          else
          {
            _LOGF_ERROR("%s: failed to copy old '%s' to new '%s'",
                        __FUNCTION__, src.c_str(), dst.c_str());
          }
        }
        else
        {
          _LOGF_INFO("%s: don't copy old file '%s' to already existing file '%s'",
                     __FUNCTION__, src.c_str(), dst.c_str());
        }

        // remove the old source file
        if (remove(src.c_str()) == 0)
        {
          _LOGF_INFO("%s: removed old file '%s'", __FUNCTION__, src.c_str());
        }
        else
        {
          _LOGF_ERROR("%s: failed to remove old file '%s'", __FUNCTION__, src.c_str());
        }
      }

      /******************************************************************
       * house keeping -> remove old SDI server files, which location   *
       * hase changed in newer SDI versions and are not longer required *
       ******************************************************************/

      vector<string> file_list;
      int cnt;

      /* remove old EMV configuration files from home flash folder, which
       * are provided by user configuration package in newer SDI versions
       * PWMADK-2281: Keep EMV configuration files under HOME on Fusion and Engage,
       * so that application using native EMV APIs may coexist with SDI server */
#if !defined (_VOS) && !defined (_VOS3)  // __ANDROID__ and _x86 only
      // check for writeable EMV configuration files
      cnt = get_dir_files(home_flash.c_str(), &file_list, "EMV_.*\\.[Xx][Mm][Ll]$");

      if (cnt > 0)
      {
        /* emv-desired.xml located under home (working direcotry) also in newer version,
         * only delete emv-desired.xml, if writeable EMV config was removed */
        vector<string> emv_readonly;
        cnt = get_dir_files(home_flash.c_str(), &emv_readonly, "emv-.*\\.[Xx][Mm][Ll]$");

        if (cnt > 0)
        {
          file_list.insert(file_list.end(), emv_readonly.begin(), emv_readonly.end());
        }

        cnt = remove_files(file_list, FM_NoAbort | FM_Quiet);
        _LOGF_INFO("%s: removed %d old EMV file(s) from folder '%s'",
                   __FUNCTION__, cnt, home_flash.c_str());
      }

      file_list.clear();
#endif

      /* remove files from home flash folder, which are provided
       * by new installation package or by user configuration package
       * in newer SDI versions */
      const char *flash_files[] = {WHITELIST_FILE, SENSITIVE_TAGS_FILE, CARD_RANGES_FILE, LOCAL_NET_BT_PAN_FILE};

      for (unsigned i = 0; i < (sizeof(flash_files) / sizeof(flash_files[0])); i++)
      {
        file_list.push_back(pathcat(home_flash, flash_files[i]));
      }

      /* On Android (or if not already removed by removal package on V/OS),
       * remove files from home folder, which are provided by new installation
       * package or by user configuration package in newer SDI versions */
      const char *home_files[] = {ADKSEC_CONFIG_FILE, EPP_CONFIG_FILE};

      for (unsigned i = 0; i < (sizeof(home_files) / sizeof(home_files[0])); i++)
      {
        file_list.push_back(pathcat(home_path, home_files[i]));
      }

      // remove the files
      cnt = remove_files(file_list, FM_NoAbort | FM_Quiet);

      if (cnt > 0)
      {
        _LOGF_INFO("%s: %d old file(s) removed", __FUNCTION__, cnt);
      }

      /* other files e.g. COM profiles are removed by removal package on VOS
       * and, so far, not used on Android in previous SDI server versions. */
#endif
    }

    enum Location
    {
      LOC_None,             
      LOC_SdiFlashDir,      
      LOC_SdiConfigDir,     
      LOC_SdiExtConfigDir,  
      LOC_EmvFlashDir,      
      LOC_EmvConfigDir,     
      LOC_LogConfigDir,     
      LOC_NfcFlashDir,      
      LOC_SdiExtFontsDir    
    };

    static const char *getLocation(Location l)
    {
      switch (l)
      {
        case LOC_None:
        default:
          break;

        case LOC_SdiFlashDir:
          return home_flash_dir();

        case LOC_SdiConfigDir:
          return home_config_dir();

        case LOC_SdiExtConfigDir:
          return ext_config_dir();

        case LOC_EmvFlashDir:
          return emv_flash_dir();

        case LOC_EmvConfigDir:
          return emv_config_dir();

        case LOC_LogConfigDir:
          return log_config_dir();

        case LOC_NfcFlashDir:
          return nfc_flash_dir();

        case LOC_SdiExtFontsDir:
          return ext_font_dir();
      }

      return "";
    }

#if defined _VOS || defined _VOS3

    static void vos_check_recovery()
    {
      // COM_IF.CFG recently supported for platforms with UI mode support only
#ifndef HEADLESS
      // PWMADK-3313: check COM_IF.CFG in flash folder, which might get broken by reboot during SDI startup
      string com_if_file = sdi::filesystem::home_flash_file(COM_PREFIX COM_IF_CONFIG_FILE);
      struct stat s;

      if (stat(com_if_file.c_str(), &s) == 0 && S_ISREG(s.st_mode))
      {
        // check file is valid
        if (!comcfg_file_valid(com_if_file))
        {
          // remove it and let check_config_update() recover it afterwards
          if (remove(com_if_file.c_str()) == 0)
          {
            _LOGF_WARN("%s: flash file '%s' is invalid and needs recovery, removed file.",
                       __FUNCTION__, com_if_file.c_str());
          }
          else
          {
            _LOGF_ERROR("%s: flash file '%s' is invalid and needs recovery, failed to remove file.",
                        __FUNCTION__, com_if_file.c_str());
          }
        }
        else
        {
          _LOGF_INFO("%s: flash file '%s' is valid, no recovery needed.",
                     __FUNCTION__, com_if_file.c_str());
        }
      }

#endif
    }

    struct group_info : public group
    {
      private:
        // disable copy constructor and assign operator
        group_info(const group_info&);
        group_info& operator=(const group_info&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
        group_info(const group_info&&);
        group_info& operator=(group_info&&);
#endif

      public:

        std::vector<char> m_mem; 
        group_info()
        {
          reset();
        }
        virtual ~group_info() {};

        void reset()
        {
          gr_name = 0;
          gr_passwd = 0;
          gr_gid = 0;
          gr_mem = 0;
          m_mem.resize(0);
        }
    };

    static bool get_group_info(const char *gname, gid_t gid, group_info &info)
    {
      struct group *grpres = 0;
      info.m_mem.resize(1024);

      while (1)
      {
        int r;

        if (gname)
        {
          r = getgrnam_r(gname, &info, &info.m_mem[0], info.m_mem.size(), &grpres);
        }
        else
        {
          r = getgrgid_r(gid, &info, &info.m_mem[0], info.m_mem.size(), &grpres);
        }

        if (r)
        {
          if (errno == ERANGE)
          {
            info.m_mem.resize(info.m_mem.size() * 2);
            continue;
          }

          grpres = 0;
        }

        break;
      }

      if (!grpres)
      {
        info.reset();
        return false;
      }

      return true;
    }

    static bool set_emv_flash_permissions(const char *emv_dir)
    {
      if (!emv_dir)
      {
        _LOGF_ERROR("%s: invalid parameter for EMV directory", __FUNCTION__);
        return false;
      }

      struct stat s;

      if (stat(emv_dir, &s) != 0 || !S_ISDIR(s.st_mode))
      {
        _LOGF_ERROR("%s: stat() failed on EMV directory: %s",
                    __FUNCTION__, emv_dir);
        return false;
      }

      gid_t emv_group_id = s.st_gid;

      bool ret = true;
      std::vector<string> emv_files;

      if (get_dir_files(emv_dir, &emv_files, EMV_FLASH_CONFIG_FILES) > 0)
      {
        for (unsigned i = 0; i < emv_files.size(); i++)
        {
          // as ADKEMV does for new files: take over group from EMV parent folder (and set to UID of the process)
          if (stat(emv_files[i].c_str(), &s) == 0 && s.st_gid != emv_group_id)
          {
            group_info gi;
            (void)get_group_info(0, emv_group_id, gi);

            if (chown(emv_files[i].c_str(), -1, emv_group_id) == 0)
            {
              _LOGF_INFO("%s: updated file '%s' to group '%s'",
                         __FUNCTION__, emv_files[i].c_str(), gi.gr_name ? gi.gr_name : "");

              // do same ADKEMV does for new files: set rw for user and group, set r for others
              if (chmod(emv_files[i].c_str(), S_IRUSR | S_IWUSR | S_IRGRP | S_IWGRP  | S_IROTH) == 0)
              {
                _LOGF_INFO("%s: updated file '%s' to permissions 'rw-rw-r--'",
                           __FUNCTION__, emv_files[i].c_str());
              }
              else
              {
                _LOGF_ERROR("%s: chmod() with permissions 'rw-rw-r--' failed on file '%s': %d",
                            __FUNCTION__, emv_files[i].c_str(), errno);
                ret = false;
              }
            }
            else
            {
              _LOGF_ERROR("%s: chown() with group '%s' failed on file '%s': %d",
                          __FUNCTION__, gi.gr_name ? gi.gr_name : "", emv_files[i].c_str(), errno);
              ret = false;
            }
          }
        }
      }

      return ret;
    }

    enum OptionFlags
    {
      OF_None           = 0, 
      OF_Vos2Android    = 1, 
      OF_NotVos2Android = 2, 
      OF_EmvFlashPerm   = 4  
    };

    /* structure to handle synchronization of r/w configurations files */
    struct rw_file_def
    {
      const char *file;    
      bool regex;          
      const char *srcpfx;  
      enum Location src;   
      const char *destpfx; 
      enum Location dest;  
      const char *defpfx;  
      enum Location def;   
      unsigned oflags;     
    };

    /* List of writeable configuration files, which must be synchronized in flash with user config packages coming
     * from /etc/config/sdi (VOS/VOS2) or /home/usr<X>/sdi (VOS3).
     * This is used by check_config_update() to restore writeable configuration files from user configuration folder
     * or internal default config. */
    static const rw_file_def rw_files[] =
    {
      // file/file pattern      regex  src prefix  src file ext.        dest prefix dest file flash  def prefix   default file      option flags
      { COM_IF_CONFIG_FILE,     false, COM_PREFIX, LOC_SdiExtConfigDir, COM_PREFIX, LOC_SdiFlashDir, COM_PREFIX,  LOC_SdiConfigDir, OF_NotVos2Android},
      { COM_IF_CONFIG_FILE,     false, COM_PREFIX, LOC_SdiExtConfigDir, COM_PREFIX, LOC_SdiFlashDir, COM_ANDROID, LOC_SdiConfigDir, OF_Vos2Android},
      { SENSITIVE_TAGS_FILE,    false, "",         LOC_SdiExtConfigDir, "",         LOC_SdiFlashDir, "",          LOC_None,         OF_None},
      { WHITELIST_FILE,         false, "",         LOC_SdiExtConfigDir, "",         LOC_SdiFlashDir, "",          LOC_None,         OF_None},
      { CARD_RANGES_FILE,       false, "",         LOC_SdiExtConfigDir, "",         LOC_SdiFlashDir, "",          LOC_None,         OF_None},
      { CONNECT_BT_FILE,        false, COM_PREFIX, LOC_SdiExtConfigDir, COM_PREFIX, LOC_SdiFlashDir, COM_PREFIX,  LOC_SdiConfigDir, OF_None},
      { EMV_FLASH_CONFIG_FILES, true,  "",         LOC_EmvConfigDir,    "",         LOC_EmvFlashDir, "",          LOC_None,         OF_EmvFlashPerm},
      { NFC_WKY_FILES,          true,  NFC_PREFIX, LOC_SdiExtConfigDir, "",         LOC_NfcFlashDir, "",          LOC_None,         OF_None}
    };

    static void get_user_config_files(vector<string> &files)
    {
      for (unsigned i = 0; i < (sizeof(rw_files) / sizeof(rw_files[0])); i++)
      {
        // check flags specifying that entry is intented for this device
        if (rw_files[i].oflags != OF_None)
        {
          if ((rw_files[i].oflags & OF_Vos2Android) && !sys_internal_android())
          {
            continue;
          }

          if ((rw_files[i].oflags & OF_NotVos2Android) && sys_internal_android())
          {
            continue;
          }
        }

        // destination location (flash)
        string dest_dir = getLocation(rw_files[i].dest);

        if (rw_files[i].destpfx[0])
        {
          dest_dir = pathcat(dest_dir, rw_files[i].destpfx);
        }

        if (rw_files[i].regex)
        {
          vector<string> list;

          if (get_dir_files(dest_dir.c_str(), &list, rw_files[i].file) > 0)
          {
            files.insert(files.end(), list.begin(), list.end());
          }
        }
        else
        {
          files.push_back(pathcat(dest_dir, rw_files[i].file));
        }
      }
    }

    /* Check for configuration update at startup
     * If a user config file is not installed or was removed by package, the internal SDI default configuration file
     * (if any) is restored and used. In addition, writeable configuration files and the checksum files are deleted
     * from flash with factory reset so that check_config_update() will restore all files from user configuration
     * folder or internal default config.
     * \param[in] recover (unused on this platform) */
    static void check_config_update(bool recover)
    {
      (void) recover; // unused
      JSObject checksums;
      string cs_file = home_flash_file(FS_CHECKSUMS_FILE);
      bool update_cs_file = false;

      string file;

      // load the md5 checksum file
      if (read_file(cs_file.c_str(), file))
      {
        checksums.load(file);
      }

      // process writable configuration files
      for (unsigned i = 0; i < (sizeof(rw_files) / sizeof(rw_files[0])); i++)
      {
        /* shouldn't happen, if nobody adds an invalid entry to rw_files:
         * Source and destination folder of configuration files must be specified. */
        if (rw_files[i].src == LOC_None || rw_files[i].dest == LOC_None)
        {
          _LOGF_ERROR("%s: No source or destination folder specified, skip invalid entry (rw_files[%d] with file/pattern '%s')",
                      __FUNCTION__, i, rw_files[i].file);
          continue;
        }

        // check some option flags before file synchronization
        if (rw_files[i].oflags != OF_None)
        {
          if ((rw_files[i].oflags & OF_Vos2Android) && !sys_internal_android())
          {
            _LOGF_INFO("%s: Only for Engage with internal Android (CM5, M424 and M440 etc.), skip entry (rw_files[%d] with file/pattern '%s')",
                       __FUNCTION__, i, rw_files[i].file);
            continue;
          }

          if ((rw_files[i].oflags & OF_NotVos2Android) && sys_internal_android())
          {
            _LOGF_INFO("%s: Not for Engage with internal Android (CM5, M424 and M440 etc.), skip entry (rw_files[%d] with file/pattern '%s')",
                       __FUNCTION__, i, rw_files[i].file);
            continue;
          }
        }

        // source location (external user configuration folder)
        string src_dir = getLocation(rw_files[i].src);

        if (rw_files[i].srcpfx[0])
        {
          src_dir = pathcat(src_dir, rw_files[i].srcpfx);
        }

        // destination location (flash)
        string dest_dir = getLocation(rw_files[i].dest);

        if (rw_files[i].destpfx[0])
        {
          dest_dir = pathcat(dest_dir, rw_files[i].destpfx);
        }

        // create the flash destination directory (if not existing yet)
        make_dir(dest_dir);

        string def_dir = getLocation(rw_files[i].def);

        if (!def_dir.empty())
        {
          if (rw_files[i].defpfx[0])
          {
            def_dir = pathcat(def_dir, rw_files[i].defpfx);
          }
        }

        /* step 1: lookup checksum file for existing entries and check if an user config package was
         *         removed for which source file(s) no longer exist. Then the entry in checksum file
         *         must be deleted and the related destination file in flash must be removed. */
        // files listed in checksum file to be removed (first:: user config file, second: destination flash file)
        vector< pair<string, string> > cs_rm_files;
        // create the regex file pattern (add prefix if any)
        string pattern;
        // if required, escape filename for regex pattern use
        string file_regex = rw_files[i].regex ? rw_files[i].file : escapeRegex(rw_files[i].file);

        if (rw_files[i].srcpfx[0])
        {
          // escape prefix for regex use
          pattern = escapeRegex(rw_files[i].srcpfx);
        }

        pattern += file_regex;

        // check, which entries in checksum file matches the file pattern
        JSObject::iterator it;

        for (it = checksums.begin(); it != checksums.end(); ++it)
        {
          if (matchRegex(it->first.c_str(), pattern.c_str()))
          {
            // take over filename for dest file, since regex pattern could be used, which is no valid file name
            string dest = filename_from_path(it->first);
            dest = pathcat(dest_dir, dest);

            struct stat s;

            // check existance of flash file (destination file)
            if (stat(dest.c_str(), &s) != 0 || !S_ISREG(s.st_mode))
            {
              dest.clear(); // destination flash file does not exist (e.g. removed by vos_check_recovery())
            }

            // check existance of user user config file (source file)
            if (!dest.empty() && stat(it->first.c_str(), &s) == 0 && S_ISREG(s.st_mode))
            {
              // both destination file and user config file still exists -> keep checksum entry and flash file
              continue;
            }

            // add to list to remove related checksum entry (and flash file, if exist)
            pair<string, string> entry(it->first, dest);
            cs_rm_files.push_back(entry);
          }
        }

        // process found files in checksum file, which shall be removed
        for (unsigned j = 0; j < cs_rm_files.size(); j++)
        {
          // remove existing timestamp for this file
          checksums.erase(cs_rm_files[j].first);
          update_cs_file = true;

          // remove the related configuration file from flash (if exist)
          string &dest = cs_rm_files[j].second;

          if (!dest.empty())
          {
            if (remove(dest.c_str()) == 0)
            {
              _LOGF_INFO("%s: removed flash file '%s' (rw_files[%d] with file/pattern '%s')",
                         __FUNCTION__, dest.c_str(), i, rw_files[i].file);
            }
            else
            {
              _LOGF_ERROR("%s: failed to remove flash file '%s' (rw_files[%d] with file/pattern '%s')",
                          __FUNCTION__, dest.c_str(), i, rw_files[i].file);
            }
          }
        }

        /* step 2: lookup all existing files from external user configuration folder,
         *         which match the file pattern. If no files are found, SDI restores
         *         internal default configuration files to flash folder for writing. */
        vector<std::string> src_files;

        if (get_dir_files(src_dir.c_str(), &src_files, file_regex.c_str()) <= 0)
        {
          _LOGF_INFO("%s: no user config file(s) found in '%s' (rw_files[%d] with file/pattern '%s')",
                     __FUNCTION__, src_dir.c_str(), i, rw_files[i].file);

          /* Restore default file(s) (if any). Note: In case of multiple default files for this entry exist, SDI restores
           * them if no user configuration files are installed, which match the pattern. Otherwise, this would
           * lead to a mix if internal default files and external user configuration files. Finally, at least
           * one installed user configuration file will remove all default file(s) for this entry (see below). */
          if (def_dir.empty())
          {
            _LOGF_INFO("%s: no default file(s) to restore, skip entry (rw_files[%d] with file/pattern '%s')",
                       __FUNCTION__, i, rw_files[i].file);
            continue;
          }

          // lookup default file(s) from internal SDI configuration folder (installed by base package)
          vector<string> def_files;

          if (get_dir_files(def_dir.c_str(), &def_files, file_regex.c_str()) <= 0)
          {
            _LOGF_INFO("%s: no default file(s) found in folder '%s' to restore, skip entry (rw_files[%d] with file/pattern '%s')",
                       __FUNCTION__, def_dir.c_str(), i, rw_files[i].file);
            continue;
          }

          // if not already done, copy default file to flash folder
          for (unsigned j = 0; j < def_files.size(); j++)
          {
            // take over filename for dest file, since a regex could be used, which is no valid file name
            string dest = filename_from_path(def_files[j]);
            dest = pathcat(dest_dir, dest);
            // check if config file in flash folder already exists
            struct stat s;

            if (stat(dest.c_str(), &s) == 0 && S_ISREG(s.st_mode))
            {
              continue; // don't overwrite already existing file
            }

            // copy default file
            if (!copy_file(def_files[j], dest))
            {
              _LOGF_ERROR("%s: failed to copy default file '%s' to '%s' (rw_files[%d] with file/pattern '%s')",
                          __FUNCTION__, def_files[j].c_str(), dest.c_str(), i, rw_files[i].file);
              continue;
            }

            _LOGF_INFO("%s: copied default file '%s' to '%s' (rw_files[%d] with file/pattern '%s')",
                       __FUNCTION__, def_files[j].c_str(), dest.c_str(), i, rw_files[i].file);
          }

          // no user configuration files for this entry, proceed with next table entry
          continue;
        }

        /* step 3: User configuration file(s) found for pattern of this table entry. As next
         *         calculate checksum for each source file and check it against the entry
         *         of the checksum file. If all checksums exist and still valid, we skip
         *         installation of the files (step 4). In case there is at least one checksum
         *         missing or invalid, we take over all source files for this pattern. This
         *         means ALL files are overwritten again, even only one file was updated.
         *         New/modified files will add/update the entry in the checksum file. */
        bool update_config = false;

        for (unsigned j = 0; j < src_files.size(); j++)
        {
          unsigned char md5[16];

          if (!calculate_MD5(src_files[j].c_str(), md5))
          {
            _LOGF_ERROR("%s: failed to calculate MD5 from file '%s'",
                        __FUNCTION__, src_files[j].c_str());
            continue;
          }

          string md5dump;
          sdi::bintohexstring(md5dump, md5, 16);

          // if the checksum for this file does not exist or has changed, file was added or updated
          bool cs_exists = checksums.exists(src_files[j]);

          if (!cs_exists || !checksums(src_files[j]).isString() || checksums(src_files[j]).getString() != md5dump)
          {
            if (!cs_exists) // new user config file
            {
              _LOGF_INFO("%s: new user config file '%s' with checksum '%s' found, update needed...  (rw_files[%d] with file/pattern '%s')",
                         __FUNCTION__, src_files[j].c_str(), md5dump.c_str(), i, rw_files[i].file);
            }
            else // modified user config file
            {
              _LOGF_INFO("%s: modified user config file '%s' with new checksum '%s' (old: '%s'), update needed... (rw_files[%d] with file/pattern '%s')",
                         __FUNCTION__, src_files[j].c_str(), md5dump.c_str(), checksums(src_files[j]).getString().c_str(), i, rw_files[i].file);
            }

            // update/add checksum
            checksums(src_files[j]) = md5dump;
            update_config = update_cs_file = true;
          }
        }

        /* step 4: At least one user configuration file was updated. Now take over all file(s)
         *         for this pattern to destination flash folder, where SDI has write access.
         *         First, identify related file(s) in destination flash folder by pattern and
         *         remove them. This means, a new configuration will replace all existing
         *         files, which match the pattern. */
        if (update_config)
        {
          int cnt;
          // remove the related configuration file(s) from flash
          vector<string> dest_files;

          if (get_dir_files(dest_dir.c_str(), &dest_files, file_regex.c_str()) > 0)
          {
            cnt = remove_files(dest_files, FM_NoAbort);

            if (cnt != (int)dest_files.size())
            {
              _LOGF_ERROR("%s: failed to remove all file(s) from folder '%s', only %d from %d (rw_files[%d] with file/pattern '%s')",
                          __FUNCTION__, dest_dir.c_str(), cnt, dest_files.size(), i, rw_files[i].file);
              continue;
            }

            _LOGF_INFO("%s: removed %d file%s from folder '%s' (rw_files[%d] with file/pattern '%s')",
                       __FUNCTION__, cnt, cnt > 1 ? "s" : "", dest_dir.c_str(), i, rw_files[i].file);
          }

          // take over new file(s) to flash directory
          cnt = copy_files(src_files, dest_dir.c_str(), FM_NoAbort | FM_Quiet);

          if (cnt != (int)src_files.size())
          {
            _LOGF_ERROR("%s: failed to copy all file(s) to folder '%s', only %d from %d (rw_files[%d] with file/pattern '%s')",
                        __FUNCTION__, dest_dir.c_str(), cnt, src_files.size(), i, rw_files[i].file);
            continue;
          }

          if (_LOG_LEVEL_ENABLED(LOGAPI_INFO))
          {
            for (unsigned j = 0; j < src_files.size(); j++)
            {
              _LOGF_INFO("%s: copied user config file '%s' with checksum '%s' to folder '%s' (rw_files[%d] with file/pattern '%s')",
                         __FUNCTION__, src_files[j].c_str(), checksums(src_files[j]).getString().c_str(),
                         dest_dir.c_str(), i, rw_files[i].file);
            }
          }

          /* PWMADK-2370: If EMV flash configuration files were provided, adjust group
           *              and permissions of EMV flash config files to parent directory */
          if (rw_files[i].oflags & OF_EmvFlashPerm)
          {
            if (!set_emv_flash_permissions(dest_dir.c_str()))
            {
              _LOGF_ERROR("%s: set_emv_flash_permissions() failed on EMV flash folder: %s",
                          __FUNCTION__, dest_dir.c_str());
              continue;
            }
          }
        }
        else
        {
          if (_LOG_LEVEL_ENABLED(LOGAPI_INFO))
          {
            for (unsigned j = 0; j < src_files.size(); j++)
            {
              _LOGF_INFO("%s: user config file '%s' with checksum '%s' already installed (rw_files[%d] with file/pattern '%s')",
                         __FUNCTION__, src_files[j].c_str(), checksums(src_files[j]).getString().c_str(), i, rw_files[i].file);
            }
          }
        }
      }

      // configuration files were updated, now modified/update checksum file
      if (update_cs_file)
      {
        file = checksums.dump();

        if (!write_file(cs_file.c_str(), file))
        {
          _LOGF_ERROR("%s: failed to store '%s'", __FUNCTION__, cs_file.c_str());
        }
      }
    }
#endif // #ifdef _VOS || _VOS3

#ifdef _VOS
    static void vos_wait_for_sdicleaner()
    {
      static int installed = -1; // init

      if (installed < 0)
      {
        installed = checkBundleInstalled(".*sdicleaner") ? 1 : 0;
      }

      // if installed wait maximal 15 seconds for sdi_cleaner has finished its work
      if (installed == 1)
      {
        const unsigned WAIT_TIME = 15;
        unsigned tout;
        _LOGF_INFO("%s: sdicleaner is installed, check for termination...", __FUNCTION__);

        for (tout = WAIT_TIME; tout > 0; tout--)
        {
          struct stat s;

          if (stat(SDI_CLEANUP_DONE_FILE, &s) == 0 && S_ISREG(s.st_mode))
          {
            _LOGF_INFO("%s: sdicleaner terminated, continue.", __FUNCTION__);
            break;
          }

          if (tout - 1 > 0)
          {
            _LOGF_INFO("%s: sdicleaner still running, wait 1 sec for termination (timeout in %u sec)...", __FUNCTION__, tout);
            sleep(1);
          }
          else
          {
            _LOGF_ERROR("%s: sdicleaner still running, timeout.", __FUNCTION__);
          }
        }
      }
    }
#endif

    void factory_reset()
    {
      /* External factory reset triggered by command 20-22 requires to restore SDI mode,
      *  since SDI might not reboot and continue runtime. Internal factory reset triggered
      *  by SDI mode change will overwrite SDI mode afterwards (see init()). */
      enum config::SdiSysConfig::SDIMode sdi_mode = config::SdiSysConfig::instance().getSDIMode();

      vector<string> rm_files; // files to remove

      /* 1. step: add all files for deletion, which are created/modified
       *          by SDI server and not part of user config packages */
      rm_files.push_back(home_flash_file(FS_CHECKSUMS_FILE)); // checksum file
      rm_files.push_back(home_flash_file(COM_PREFIX LOCAL_NET_BT_PAN_FILE)); // BT PAN network profile in flash (with BT address)
      const char *ccp_db_dir = ccp_database_dir();

      if (ccp_db_dir)
      {
        rm_files.push_back(pathcat(ccp_db_dir, CCP_DATABASE_FILE));  // CCP database file
      }

      rm_files.push_back(home_flash_file(SDI_TRX_DATA_FILE)); // transaction data file
      rm_files.push_back(home_flash_file(STATUS_CFG_FILE)); // status config file
      rm_files.push_back(home_flash_file(IDLETEXT_CFG_FILE)); // idle text file
#ifdef PP_PROT_TLS_CA_PEM_FILE
      rm_files.push_back(pathcat(sdi_certstore_dir(), PP_PROT_TLS_CA_PEM_FILE)); // TLS CA PEM file created by mADK_PP_Prot library
#endif
#ifdef EPP_CA_PEM_FILE
      rm_files.push_back(pathcat(sdi_certstore_dir(), EPP_CA_PEM_FILE)); // EPP CA PEM file created by Countertop::connect()
#endif

      /* 2. step: add all files for deletion, which were installed by user config package(s)
       *          and must be considered for the reset. These files are recovered
       *          by origin files of base config package or user config package. */
      get_user_config_files(rm_files);
#ifdef _STM32
      /* On Titus, SDI must support installation of system signed configuration files, since there is no installer
       * (as on VOS or Android), which supports installation default configuration files with SDI binary. */
      get_system_config_files(rm_files);
#endif

      /* 3. step: move all files of the list (don't abort, if a file does not exist) */
      int cnt = remove_files(rm_files, FM_NoAbort);

      if (cnt > 0)
      {
        _LOGF_INFO("%s: removed %d file%s successfully", __FUNCTION__, cnt, cnt > 1 ? "s" : "");
      }
      else
      {
        _LOGF_ERROR("%s: couldn't remove any files", __FUNCTION__);
      }

      /* 4. step: restore defaults of other files (e.g. STATUS.CFG) and recover
                  previous SDI mode and set persistent for next startup */
      _LOGF_INFO("%s: create %s with defaults...", __FUNCTION__, STATUS_CFG_FILE);
      config::SdiSysConfig::instance().read(); // create new STATUS.CFG with defaults
      const char *mstr = (sdi_mode == config::SdiSysConfig::SDIMode_Headless ? "headless" : "standard");
      _LOGF_INFO("%s: recover SDI mode %s to %s...", __FUNCTION__, mstr, STATUS_CFG_FILE);
      config::SdiSysConfig::instance().setSdiMode(sdi_mode);

      /* 5. step: recover installed configuration files */
#if defined _VOS || defined _VOS3 || defined _STM32
      // VOS/VOS2/VOS3: use check_config_update() to recover writable user configuration files (parameter recover ignored)
      // Titus: use check_config_update() to recover user/system configuration files
      check_config_update(true); // recover=true
#else // __ANDROID__, x86, etc.
      unsigned short ret;
      ret = install_user_configuration(true); // recover=true

      if (ret != 0x9000)
      {
        _LOGF_ERROR("%s: user configuration recovery failed, install_user_configuration() returned 0x%04hX",
                    __FUNCTION__, ret);
      }

#ifndef _STM32 // no plugin support on Titus
      // recover installed SDI plugins
      ret = install_sdi_plugins(true); // recover

      if (ret != 0x9000)
      {
        _LOGF_ERROR("%s: SDI plugin recovery failed, install_sdi_plugins() returned 0x%04hX",
                    __FUNCTION__, ret);
      }

#endif // #ifndef _STM32

#endif // if defined _VOS || defined _VOS3
      _LOGF_INFO("%s: finished restoring defaults.", __FUNCTION__);
    }

    void init(enum config::SdiSysConfig::SDIMode sdi_mode)
    {
      // step 1: sets $HOME to working directory, if the variable is not provided by the system
      check_home();
#ifdef _VOS
      // step 2: wait for running SDI cleaner (installed with SDI removal package)
      vos_wait_for_sdicleaner();
#endif
      // step 3: take over internal files of previous SDI server installations to new SDI flash folder
      handle_old_version_files();

      /* step 4: create subfolders in flash folder
       * - com: SDI will create COM_IF.CFG at first startup (standard mode) */
      make_dir(pathcat(home_flash_dir(), COM_PREFIX));

      // step 5 (PWMADK-3313): check for validity of files and recover them (if required)
#if defined _VOS || defined _VOS3
      vos_check_recovery();
#endif

      // step 6: read system configuration from STATUS.CFG (create file with defaults, if not exist)
      config::SdiSysConfig::instance().read();

      // step 7 (PWMADK-3034): trigger internal factory reset, if SDI mode since last startup has changed
      const char *mstr = (sdi_mode == config::SdiSysConfig::SDIMode_Headless ? "headless" : "standard");
      enum config::SdiSysConfig::SDIMode last_mode = config::SdiSysConfig::instance().getSDIMode();

      if (sdi_mode != last_mode)
      {
        /* do factory set, but not for first startup or a previous
         * SDI server was installed not providing last SDI mode */
        if (last_mode != config::SdiSysConfig::SDIMode_None)
        {
          const char *lmstr = (last_mode == config::SdiSysConfig::SDIMode_Headless ? "headless" : "standard");
          _LOGF_INFO("%s: SDI mode switched from '%s' to '%s', trigger factory reset now...",
                     __FUNCTION__, lmstr, mstr);
          factory_reset(); // calls check_config_update()
        }

        // set new SDI mode persistent for next startup
        _LOGF_INFO("%s: write new SDI mode %s to %s...", __FUNCTION__, mstr, STATUS_CFG_FILE);
        config::SdiSysConfig::instance().setSdiMode(sdi_mode);
      }

      _LOGF_INFO("%s: SDI server runs in %s mode", __FUNCTION__, mstr);

#if defined _VOS || defined _VOS3 || defined _STM32

      // step 8: invoke vos_config_sync(), if not already done by factory_reset()
      if (sdi_mode == last_mode || last_mode == config::SdiSysConfig::SDIMode_None)
      {
        // VOS/VOS2/VOS3: take over user configuration files (requiring write access) to home flash directory
        // Titus: use check_config_update() to install user/system configuration files
        check_config_update();
      }

#endif

      /* step 9: wipe the software upload folder, even on V/OS platform,
       * upload files will be located in flash with newer OS versions. */
      vector<string> files;

      if (get_dir_files(upload_install_dir(), &files) > 0)
      {
        int cnt = remove_files(files, FM_NoAbort);

        if (cnt != (int)files.size())
        {
          _LOGF_ERROR("%s: Couldn't remove all files in upload folder '%s' (%d of %d removed)",
                      __FUNCTION__, upload_install_dir(), cnt, (int)files.size());
        }
      }
    }

    bool read_file(const char *file, string &data)
    {
      data.clear();

      if (!file)
      {
        return false;
      }

      FILE *fp = fopen(file, "rb");

      if (!fp)
      {
        return false;
      }

      int r;
      char buffer[4096];

      do
      {
        r = fread(buffer, 1, 4096, fp);

        if (r > 0)
        {
          data.append(buffer, buffer + r);
        }
      }
      while (r == sizeof(buffer));

      fclose(fp);
      return true;
    }

    bool write_file(const char *file, const string &data)
    {
      if (!file)
      {
        return false;
      }

      FILE *fp = fopen(file, "wb");

      if (!fp)
      {
        return false;
      }

      bool ret = (fwrite(data.c_str(), data.length(), 1, fp) == 1);

      // PWMADK-3316: enable file sync
      fflush(fp);
      fsync(fileno(fp));
      fclose(fp);
      return ret;
    }

    bool copy_file(const string &src, const string &dest)
    {
      // copy file
      FILE *s = fopen(src.c_str(), "rb");

      if (!s)
      {
        _LOGF_ERROR("copy_file(): cannot open/access source file '%s'", src.c_str());
        return false;
      }

      FILE *d = fopen(dest.c_str(), "wb");

      if (!d)
      {
        _LOGF_ERROR("copy_file(): cannot open/create destination file '%s'", dest.c_str());
        fclose(s);
        return false;
      }

      char buf[4096];
      size_t size;
      bool ret = true;

      while ((size = fread(buf, 1, sizeof(buf), s)) > 0)
      {
        if (fwrite(buf, size, 1, d) != 1)
        {
          ret = false;
          break;
        }
      }

      fclose(s);
      // PWMADK-3316: enable file sync
      fflush(d);
      fsync(fileno(d));
      fclose(d);
      return ret;
    }

    bool move_file(const string &src, const string &dst)
    {
      bool ret = true;
      errno = 0;

      if (rename(src.c_str(), dst.c_str()))
      {
        if (errno == EXDEV) // cross-device move
        {
          ret = copy_file(src, dst);

          if (ret)
          {
            if (remove(src.c_str()))
            {
              _LOGF_ERROR("%s: failed to remove %s", __FUNCTION__, src.c_str());
            }
          }
        }
        else
        {
          _LOGF_ERROR("%s: failed to move from %s to %s", __FUNCTION__, src.c_str(), dst.c_str());
          ret = false;
        }
      }

      return ret;
    }

    int get_dir_files(const char *dir, vector<string> *files, const char *regex)
    {
      Directory d;

      if (files)
      {
        files->clear();
      }

      if (!dir || !d.open(dir))
      {
        return -1;
      }

      Directory::Entry entry;
      int cnt = 0;

      while (d.readEntry(entry))
      {
        if (entry.type != Directory::File)
        {
          continue;
        }

        if (regex && !matchRegex(entry.name.c_str(), regex))
        {
          continue;
        }

        if (files)
        {
          files->push_back(entry.name);
        }

        cnt++;
      }

      return cnt;
    }

    int copy_files(const vector<string> &files, const char *dst_dir, unsigned modes)
    {
      int cnt = 0;

      for (unsigned i = 0; i < files.size(); i++)
      {
        struct stat s;

        if (stat(files[i].c_str(), &s) != 0 || !S_ISREG(s.st_mode))
        {
          if (!(modes & FM_NoAbort))
          {
            cnt = -1;
            break;
          }
        }

        string filename = filename_from_path(files[i]);
        string dst_file = pathcat(dst_dir, filename);

        if (copy_file(files[i], dst_file))
        {
          cnt++;

          if (!(modes & FM_Quiet))
          {
            _LOGF_INFO("%s: copied file from '%s' to '%s'",
                       __FUNCTION__, files[i].c_str(), dst_file.c_str());
          }
        }
        else
        {
          _LOGF_ERROR("%s: failed to copy file from '%s' to '%s'",
                      __FUNCTION__, files[i].c_str(), dst_file.c_str());

          if (!(modes & FM_NoAbort))
          {
            cnt = -1;
            break;
          }
        }
      }

      return cnt;
    }

    int remove_dir(const string &path, unsigned modes)
    {
      int cnt = 0;
      struct stat s;

      if (stat(path.c_str(), &s) == -1)
      {
        _LOGF_ERROR("%s: directory/file '%s' does not exist",
                    __FUNCTION__, path.c_str());

        if (!(modes & FM_NoAbort))
        {
          return -1;
        }

        return 0;
      }

      if (!S_ISDIR(s.st_mode))
      {
        // remove the file/link
        int err = remove(path.c_str());

        if (err)
        {
          _LOGF_ERROR("%s: failed to remove file '%s' (errno=%d)",
                      __FUNCTION__, path.c_str(), errno);

          if (!(modes & FM_NoAbort))
          {
            return -1;
          }
        }
        else
        {
          cnt++;

          if (!(modes & FM_Quiet))
          {
            _LOGF_INFO("%s: removed file '%s'", __FUNCTION__, path.c_str());
          }
        }

        return cnt;
      }

      Directory dir;
      vector<string> content;

      if (dir.open(path))
      {
        Directory::Entry e;

        while (dir.readEntry(e))
        {
          if (e.filename == "." || e.filename == "..")
          {
            continue;
          }

          content.push_back(e.name);
        }
      }
      else
      {
        _LOGF_ERROR("%s: failed to read directory '%s'", __FUNCTION__, path.c_str());
      }

      dir.close();

      for (unsigned i = 0; i < content.size(); i++)
      {
        string &name = content[i];
        // remove file/directory (pass modes w/o FM_KeepTopDir, which is intended for top level directory only)
        int ret = remove_dir(name, (modes & ~FM_KeepTopDir));

        if (ret < 0)
        {
          return -1;
        }

        cnt += ret;
      }

      // remove top level directory, if not disabled explicitly
      if (!(modes & FM_KeepTopDir))
      {
        int err = remove(path.c_str());

        if (err)
        {
          _LOGF_ERROR("%s: failed to remove directory '%s' (errno=%d)\n",
                      __FUNCTION__, path.c_str(), errno);

          if (!(modes & FM_NoAbort))
          {
            return -1;
          }
        }
        else
        {
          cnt++;

          if (!(modes & FM_Quiet))
          {
            _LOGF_INFO("%s: removed directory '%s'", __FUNCTION__, path.c_str());
          }
        }
      }

      return cnt;
    }

    int remove_files(const vector<string> &files, unsigned modes)
    {
      int cnt = 0;

      for (unsigned i = 0; i < files.size(); i++)
      {
        struct stat s;

        if (stat(files[i].c_str(), &s) != 0 || !S_ISREG(s.st_mode))
        {
          if (!(modes & FM_NoAbort))
          {
            cnt = -1;
            break;
          }

          if (!(modes & FM_Quiet))
          {
            _LOGF_INFO("%s: file '%s' does not exist", __FUNCTION__, files[i].c_str());
          }

          continue;
        }

        // remove the file
        if (remove(files[i].c_str()) == 0)
        {
          cnt++;

          if (!(modes & FM_Quiet))
          {
            _LOGF_INFO("%s: removed file '%s'", __FUNCTION__, files[i].c_str());
          }
        }
        else
        {
          _LOGF_ERROR("%s: failed to remove file '%s'", __FUNCTION__, files[i].c_str());

          if (!(modes & FM_NoAbort))
          {
            cnt = -1;
            break;
          }
        }
      }

      return cnt;
    }

    const char* binary_dir()
    {
#ifdef _STM32
      return "";
#else
      static char path[PATH_MAX] = {0};

      if (!path[0])
      {
        int ret = readlink("/proc/self/exe", path, sizeof(path) - 1);

        if (ret == -1)
        {
          strncpy(path, ".", sizeof(path) - 1);
        }
        else
        {
          path[ret] = 0;
        }

        // strip last component of path
        char *p = strrchr(path, '/');

        if (p)
        {
          *p = 0;
        }
      }

      return path;
#endif
    }

    string home_flash_file(const string &file)
    {
      return pathcat(home_flash_dir(), file);
    }

    string home_config_file(const string &file)
    {
      return pathcat(home_config_dir(), file);
    }

    string lookup_config_file(const string &file)
    {
      // // prefer file from external user configuration folder
      string filepath = pathcat(ext_config_dir(), file);
      struct stat s;

      if (stat(filepath.c_str(), &s) != 0 || !S_ISREG(s.st_mode))
      {
        // use default from home configuration folder
        filepath = pathcat(home_config_dir(), file);

        if (stat(filepath.c_str(), &s) != 0 || !S_ISREG(s.st_mode))
        {
          return "";
        }
      }

      return filepath;
    }

    const char* plugin_config_dir()
    {
      static string path; // $HOME/sdi/plugincfg (VOS3/Android)

      // $HOME/share/sdi/plugincfg (VOS/VOS2)
      if (path.empty())
      {
        path = pathcat(home_config_dir(), "plugincfg");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
    }

    enum Action
    {
      ACT_None            =        0, 
      ACT_SecInit         = (1 << 0), 
      ACT_DisableEpp      = (1 << 1), 
      ACT_EmvExit         = (1 << 2), 
      ACT_EmvExitComplete = (1 << 3), 
      ACT_EmvFlashPerm    = (1 << 4), 
      ACT_EmvInitInfo     = (1 << 5), 
      ACT_LogInit         = (1 << 6), 
      ACT_CardRanges      = (1 << 7), 
      ACT_WhitelistFile   = (1 << 8), 
      ACT_AclInit         = (1 << 9)  
    };

    enum ActionSource
    {
      ASRC_Default    =        0,  
      ASRC_Removal    = (1 << 0),  
      ASRC_PostAction = (1 << 1)   
    };

    static unsigned short run_actions(unsigned long actions, unsigned long source = ASRC_Default)
    {
#ifdef _STM32

      (void) source;

      // only ACT_LogInit supported on Titus
      if (actions & ACT_LogInit)
      {
        LogAPI_ReconfigNotification();
        _LOGF_INFO("%s: Action ACT_LogInit with LogAPI_ReconfigNotification() done!", __func__);

        actions &= ~ACT_LogInit;
      }

#else // Android, x86 & Co.

      if (actions & ACT_SecInit)
      {
        /* reload of ADKSEC configuration by calling
         * secInit() is only supported on Android platform */
#ifdef __ANDROID__
        secError_t  errCode = secInit();

        if (errCode != EsecOK)
        {
          _LOGF_ERROR("%s: Action ACT_SecInit with secInit() failed with error 0x%x. Please provide valid ADKSEC configuration!",
                      __func__, errCode);
          return 0x64FB; // invalid file content
        }

        _LOGF_INFO("%s: Action ACT_SecInit with secInit() successful!", __func__);
#endif

        actions &= ~ACT_SecInit;
      }


      if (actions & ACT_DisableEpp)
      {
        vfiepm::CounterTop& ctp = vfiepm::CounterTop::getInstance();

        if (ctp.isEpp())
        {
          _LOGF_ERROR("%s: Action ACT_DisableEpp failed, not allowed on EPP!", __func__);
          return 0x64F9; // Command not allowed
        }

        ctp.disableEpp();
        _LOGF_INFO("%s: Action ACT_DisableEpp with CounterTop::disableEpp() done!", __func__);
        actions &= ~ACT_DisableEpp;
      }


      if (actions & ACT_EmvExit)
      {
        // note: we may use EMV functions during update (even by side connection, since other connections are blocked)
        EMV_CT_Exit_Framework();
        EMV_CTLS_Exit_Framework();
        _LOGF_INFO("%s: Action ACT_EmvExit with EMV_CT_Exit_Framework() and EMV_CTLS_Exit_Framework() done!", __func__);

        actions &= ~ACT_EmvExit;
      }

      if (actions & ACT_EmvExitComplete)
      {
        // note: we may use EMV functions during update (even by side connection, since other connections are blocked)
        EMV_CT_Exit_Framework_extended(EXIT_CT_COMPLETE);
        EMV_CTLS_Exit_Framework_extended(EXIT_CTLS_COMPLETE);
        _LOGF_INFO("%s: Action ACT_EmvExitComplete with EMV_CT_Exit_Framework_extended(EXIT_CT_COMPLETE) and EMV_CTLS_Exit_Framework_extended(EXIT_CTLS_COMPLETE) done!", __func__);
        actions &= ~ACT_EmvExitComplete;
      }

#if defined _VOS || defined _VOS3

      if (actions & ACT_EmvFlashPerm) // do before ACT_EmvInitInfo, which does EMV CT/CTLS Init Framework
      {
        if (!set_emv_flash_permissions(emv_flash_dir()))
        {
          _LOGF_ERROR("%s: Action ACT_EmvFlashPerm with set_emv_flash_permissions(%s) failed!",
                      __FUNCTION__, emv_flash_dir());
          return 0x64FC; // file access error
        }

        _LOGF_INFO("%s: Action ACT_EmvFlashPerm with set_emv_flash_permissions(%s) done!",
                   __func__, emv_flash_dir());

        actions &= ~ACT_EmvFlashPerm;
      }

#endif

      if (actions & ACT_EmvInitInfo)
      {
        initEmvInfo(); // initialize the EMV cache
        _LOGF_INFO("%s: Action ACT_EmvInitInfo with initEmvInfo() done!", __func__);

        actions &= ~ACT_EmvInitInfo;
      }

      if (actions & ACT_LogInit)
      {
        LogAPI_ReconfigNotification();
        _LOGF_INFO("%s: Action ACT_LogInit with LogAPI_ReconfigNotification() done!", __func__);

        actions &= ~ACT_LogInit;
      }

      if (actions & ACT_CardRanges)
      {
        // rebuild cache for card ranges configuration
        CardRanges &cr = CardRanges::getInstance();
        string filename = sdi::filesystem::home_flash_file(CARD_RANGES_FILE);
        CardRanges::Error status = cr.load(filename.c_str());

        // removal post-action -> file was removed before
        if ((source & (ASRC_Removal | ASRC_PostAction)) == (ASRC_Removal | ASRC_PostAction))
        {
          // ERR_FILE signals that cache was cleared and file was successfully removed
          if (status != CardRanges::ERR_FILE)
          {
            _LOGF_ERROR("%s: Action ACT_CardRanges with CardRanges::load() returned unexpected status=%d! (not ERR_FILE)",
                        __func__, status);
            return 0x64FD; // logic error (previous file removal expected)
          }
        }
        else // just assume an available list file (e.g. installation post-action)
        {
          if (status != CardRanges::ERR_NONE)
          {
            _LOGF_ERROR("%s: Action ACT_CardRanges with CardRanges::load() failed with status=%d!", __func__, status);

            if (status == CardRanges::ERR_FILE)
            {
              return 0x64FC;  // file access error
            }

            return 0x64FB; // invalid file content
          }
        }

        _LOGF_INFO("%s: Action ACT_CardRanges with CardRanges::load() done!", __func__);
        actions &= ~ACT_CardRanges;
      }

      if (actions & ACT_WhitelistFile)
      {
        // rebuild cache for whitelist configuration
        Whitelist &wl = Whitelist::getInstance();
        string filename = sdi::filesystem::home_flash_file(WHITELIST_FILE);
        Whitelist::Error status = wl.load(filename.c_str());

        // removal post-action -> file was removed before
        if ((source & (ASRC_Removal | ASRC_PostAction)) == (ASRC_Removal | ASRC_PostAction))
        {
          // ERR_FILE signals that cache was cleared and file was successfully removed
          if (status != Whitelist::ERR_FILE)
          {
            _LOGF_ERROR("%s: Action ACT_WhitelistFile with Whitelist::load() returned unexpected status=%d! (not ERR_FILE)",
                        __func__, status);
            return 0x64FD; // logic error (previous file removal expected)
          }
        }
        else // just assume an available list file (e.g. installation post-action)
        {
          if (status != Whitelist::ERR_NONE)
          {
            _LOGF_ERROR("%s: Action ACT_WhitelistFile with Whitelist::load() failed with status=%d!", __func__, status);

            if (status == Whitelist::ERR_FILE)
            {
              return 0x64FC;  // file access error
            }

            return 0x64FB; // invalid file content
          }
        }

        _LOGF_INFO("%s: Action ACT_WhitelistFile with Whitelist::load() done!", __func__);
        actions &= ~ACT_WhitelistFile;
      }

      if (actions & ACT_AclInit)
      {
        // reload access control list configuration
        mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

        if (!proto->loadAcl())
        {
          _LOGF_ERROR("%s: Action ACT_AclInit with mADK_PP_Prot::loadAcl() failed. Please provide valid ACL file!", __func__);
          return 0x64FB; // invalid file content
        }

        _LOGF_INFO("%s: Action ACT_AclInit with mADK_PP_Prot::loadAcl() done!", __func__);

        actions &= ~ACT_AclInit;
      }

#endif // ! _STM32

      if (actions != ACT_None)
      {
        // invalid action, shouldn't happen
        _LOGF_ERROR("%s: Internal logic error, action(s) '0x%lx' not supported for this platfrom", __func__, actions);
        return 0x64FD; // logic error
      }

      return 0x9000; // action successfully or no action executed
    }

    static bool write_file_from_tar(FILE *tar, const TarEntry &entry, const char *outdir)
    {
      if (!outdir)
      {
        _LOGF_ERROR("%s: Invalid parameter (no outdir)", __FUNCTION__);
        return false;
      }

      if (!S_ISREG(entry.st_mode))
      {
        _LOGF_ERROR("%s: Invalid parameter (TAR entry is not a regular file)", __FUNCTION__);
        return false;
      }

      if (fseeko(tar, entry.st_offset, SEEK_SET) == -1)
      {
        _LOGF_ERROR("%s: Invalid offset %lu for file '%s'",
                    __FUNCTION__, entry.st_offset, entry.st_name.c_str());
        return false;
      }

      string outfile = pathcat(outdir, entry.st_name);
      // create the subdirectory first, if it does not exist yet
      string dir = dirname(outfile);

      if (!dir.empty() && dir != ".")
      {
        if (!make_dir(dir))
        {
          _LOGF_ERROR("%s: Couldn't create directory '%s' for file '%s'",
                      __FUNCTION__, dir.c_str(), entry.st_name.c_str());
          return false;
        }
      }

      FILE *fd = fopen(outfile.c_str(), "wb");

      if (!fd)
      {
        _LOGF_ERROR("%s: Couldn't create output file '%s'", __FUNCTION__, outfile.c_str());
        return false;
      }

      char buf[4096];
      size_t bytes_to_read = entry.st_size;
      size_t size;

      while (bytes_to_read > 0 && (size = fread(buf, 1, (sizeof(buf) < bytes_to_read ? sizeof(buf) : bytes_to_read), tar)) > 0)
      {
        if (fwrite(buf, size, 1, fd) != 1)
        {
          _LOGF_ERROR("%s: Couldn't write to output file '%s'", __FUNCTION__, outfile.c_str());
          fclose(fd);
          return false;
        }

        bytes_to_read -= size;
      }

      // PWMADK-3316: enable file sync
      fflush(fd);
      fsync(fileno(fd));
      fclose(fd);

      if (bytes_to_read > 0)
      {
        _LOGF_ERROR("%s: Couldn't read all data for file '%s'", __FUNCTION__, entry.st_name.c_str());
        return false;
      }

      return true;
    }

    int extract_tar(const string &tarfile, const string &destdir, const char *regex)
    {
      int cnt = 0;
      std::vector<TarEntry> entries;
      enum TarResult r = tarRead(entries, tarfile.c_str());

      if (r != TAR_Ok) // couldn't read TAR file
      {
        _LOGF_ERROR("%s: tarRead(%s) failed with error %d", __FUNCTION__, tarfile.c_str(), r);
        return -1;
      }

      if (entries.size() == 0) // no content files in nested TAR archive
      {
        _LOGF_ERROR("%s: tar file '%s' is empty", __FUNCTION__, tarfile.c_str());
        return -1;
      }

      // open tar file to access files
      FILE *tf = fopen(tarfile.c_str(), "rb");

      if (!tf)
      {
        _LOGF_ERROR("%s: cannot open tar file '%s'", __FUNCTION__, tarfile.c_str());
        return -1;
      }

      // iterate tar entries
      for (unsigned i = 0; i < entries.size(); i++)
      {
        if (regex && !matchRegex(entries[i].st_name.c_str(), regex))
        {
          _LOGF_INFO("%s: tar entry '%s' not matching regex '%s', ignore it.",
                     __FUNCTION__, entries[i].st_name.c_str(), regex);
          continue;
        }

        // check for directory
        if (S_ISDIR(entries[i].st_mode))
        {
          /* ignore, since write_file_from_tar() will create subfolders,
           * finally, we avoid that empty folders are being extracted */
          continue;
        }

        // check for regular file
        if (S_ISREG(entries[i].st_mode))
        {
          // create the file (including missing subfolders below destdir)
          if (!write_file_from_tar(tf, entries[i], destdir.c_str()))
          {
            _LOGF_ERROR("%s: cannot create/write file '%s' of tar file '%s' into directory '%s'",
                        __FUNCTION__, entries[i].st_name.c_str(), tarfile.c_str(), destdir.c_str());
            break;
          }

          cnt++;

          _LOGF_INFO("%s: extracted file '%s' from tar file '%s' into directory '%s'",
                     __FUNCTION__, entries[i].st_name.c_str(), tarfile.c_str(), destdir.c_str());
          continue;
        }

        // invalid file tpye (e.g. symblic link not permitted)
        _LOGF_INFO("%s: tar entry '%s' in tar file '%s' has unknown file mode 0x%x', ignore it.",
                   __FUNCTION__, entries[i].st_name.c_str(), tarfile.c_str(), entries[i].st_mode);
      }

      fclose(tf);

      return cnt;
    }

#ifndef _STM32 // no installation of EMV config package on Titus
    unsigned short install_emv_config_package(const string &emv_config_pkg)
    {
      std::vector<TarEntry> entries;
      enum TarResult r = tarRead(entries, emv_config_pkg.c_str());

      switch (r)
      {
        case TAR_Ok:
          break;

        case TAR_ErrOpen:
          _LOGF_ERROR("%s: Update of EMV configuration failed, tarRead() couldn't open tar file: %s",
                      __FUNCTION__, emv_config_pkg.c_str());
          return 0x64FC; // file access error

        default:
        case TAR_ErrRead:
          _LOGF_ERROR("%s: Update of EMV configuration failed, tarRead() returned read error on tar file: %s",
                      __FUNCTION__, emv_config_pkg.c_str());
          return 0x64FB; // invalid file content

        case TAR_ErrCorrupt:
          _LOGF_ERROR("%s: Update of EMV configuration failed, tarRead() returned checksum error on tar file: %s",
                      __FUNCTION__, emv_config_pkg.c_str());
          return 0x64FB; // invalid file content
      }

      if (entries.size() == 0)
      {
        _LOGF_ERROR("%s: Update of EMV configuration failed, EMV config package is empty", __FUNCTION__);
        return 0x64FB; // invalid file content
      }

      /**** ITERATE OVER TARBALL CONTENTS AND VALIDATE FILES ALLOWED FOR UPDATE ****/

      // setup the regex: Only EMV files on top level are considered
      string regex = "^";
      regex += EMV_FLASH_CONFIG_FILES;
      regex += "$";

      for (unsigned i = 0; i < entries.size(); i++)
      {
        // check for regular file
        if (!S_ISREG(entries[i].st_mode))
        {
          _LOGF_ERROR("%s: Update of EMV configuration failed, entry '%s' in EVM config package is not a regular file.",
                      __FUNCTION__, entries[i].st_name.c_str());
          return 0x64FB; // invalid file content
        }

        if (!matchRegex(entries[i].st_name.c_str(), regex.c_str()))
        {
          _LOGF_ERROR("%s: Update of EMV configuration failed, file '%s' in EVM config package is not allowed for update.",
                      __FUNCTION__, entries[i].st_name.c_str());
          return 0x64FB; // invalid file content
        }

        _LOGF_INFO("%s: Configuration file '%s' in EMV config package is allowed for update.",
                   __FUNCTION__, entries[i].st_name.c_str());
      }

      /**** RUN PRE-ACTION: EXIT EMV CT/CTLS FRAMEWORK ****/
      unsigned long actions = ACT_None;

      actions |= ACT_DisableEpp; // disable attached EPP (if enabled as Countertop)
      actions |= ACT_EmvExit;    // exit EMV CT/CTLS Framework
      _LOGF_INFO("%s: Run pre-actions before update...", __FUNCTION__);
      unsigned short ret = run_actions(actions); // installation, pre-action

      if (ret != 0x9000)
      {
        _LOGF_ERROR("%s: Running of pre-actions before update failed: 0x%hx", __FUNCTION__, ret);
        return ret;
      }

      /**** TAKE OVER FILES FROM EMV CONFIG PACKAGE TO DESTINATION ****/
      FILE *ft = fopen(emv_config_pkg.c_str(), "rb");

      if (!ft)
      {
        _LOGF_ERROR("%s: Update of EMV configuration failed, couldn't open tar file: %s",
                    __FUNCTION__, emv_config_pkg.c_str());
        return 0x64FC; // file access error
      }

      for (unsigned i = 0; i < entries.size(); i++)
      {
        if (!write_file_from_tar(ft, entries[i], emv_flash_dir()))
        {
          fclose(ft);
          _LOGF_ERROR("%s: Update of EMV configuration failed, write_file_from_tar() couldn't store file %s to directory %s",
                      __FUNCTION__, entries[i].st_name.c_str(), emv_flash_dir());
          return 0x64FC; // file access error
        }

        _LOGF_INFO("%s: Configuration file '%s' of EMV config package successfully written to %s",
                   __FUNCTION__, entries[i].st_name.c_str(), emv_flash_dir());
      }

      fclose(ft);

      _LOGF_INFO("%s: Update of EMV configuration successful, %zu file%s updated",
                 __FUNCTION__, entries.size(), entries.size() > 1 ? "s" : "");

      /**** RUN POST-ACTIONS: (SET EMV FILE PERMISSIONS,) INITIALIZE EMV INFO CACHE ****/
      actions = ACT_None; // re-use for post actions
#if defined (_VOS) || defined (_VOS3)
      // set EMV config file permission (executed at before ACT_EmvInitInfo, see run_actions())
      actions |= ACT_EmvFlashPerm; // shared EMV flash folder on VOS/VOS2/VOS3 only
#endif
      actions |= ACT_EmvInitInfo; // initialize EMV info cache (does an Init EMV Framework CT/CTLS)
      _LOGF_INFO("%s: Run post-actions after update...", __FUNCTION__);
      // execute the post actions (if any), which are required for new configuration files
      ret = run_actions(actions, ASRC_PostAction); // installation, post-action

      if (ret != 0x9000)
      {
        _LOGF_ERROR("%s: Running of post-actions after update failed: 0x%hx", __FUNCTION__, ret);
        return ret;
      }

      return 0x9000;
    }
#endif // #ifndef _STM32

#if defined _VOS || defined _VOS3

    const char* home_flash_dir()
    {
      static string path; // $HOME/flash/sdi

      if (path.empty())
      {
        home_dir(path);
        path = pathcat(path, "flash/sdi");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
    }

    const char* home_config_dir()
    {
      static string path; // $HOME/share/sdi

      if (path.empty())
      {
        home_dir(path);
#ifdef _VOS3
        path = pathcat(path, "sdi");
#else
        path = pathcat(path, "share/sdi");
#endif
      }

      return path.c_str();
    }

    const char* ext_config_dir()
    {
#ifdef _VOS3
      static string path; // /home/usrX/sdi or /home/sys_sdi/flash/ext_dir_dummy

      if (path.empty())
      {
        for (unsigned i = 1; i <= 16; i++)
        {
          char p[32];
          sprintf(p, "/home/usr%u/sdi", i);
          struct stat s;

          if (stat(p, &s) == 0 && S_ISDIR(s.st_mode))
          {
            path = p;
            break;
          }
        }

        /* even if it does not exist, we use /home/usr1/sdi in the same manner as /etc/config/sdi
         * on VOS/VOS2, which would not exist in case no user config package are installed. Thus,
         * SDI will print to logs, which location is expected this configuration. */
        if (path.empty())
        {
          path = "/home/usr1/sdi";
        }
      }

      return path.c_str();
#else
      return "/etc/config/sdi";
#endif
    }

    const char* home_lib_dir()
    {
      static string path; // $HOME/lib

      if (path.empty())
      {
        home_dir(path);
        path = pathcat(path, "lib");
      }

      return path.c_str();
    }

    const char* ext_plugin_dir()
    {
      /* no external plugin folder on VOS,
       * since plugins are installed to $HOME/lib
       * provided by home_lib_dir() */
      return "";
    }

    const char* ext_font_dir()
    {
      /* fonts are installed as SI font package to system
       * folder. Even this function is un-used on VOS,
       * we provide the correct font path here. */
      return "/usr/share/fonts";
    }

    const char* emv_flash_dir()
    {
#ifdef _VOS3
      const char *emv_fdir  = "/mnt/appdata/versioned/globalshare/sdi/emv";
      const char *emv_parent_dir = "/mnt/appdata/versioned/globalshare/sdi";
#else
      const char *emv_fdir = "/mnt/flash/etc/config/adkemv";
#endif

      /* run code below at once
       * note: this is thread-safe, since emv_flash_dir() is
       *       early called at SDI startup by the main thread */
      static bool inited = false;

      if (inited)
      {
        return emv_fdir;
      }

      inited = true;

      struct stat s;

      // create the folder, if it does not exist
      if (stat(emv_fdir, &s) != 0 || !S_ISDIR(s.st_mode))
      {
        if (!make_dir(emv_fdir, S_IRWXU | S_IRWXG | S_IROTH | S_IXOTH))
        {
          _LOGF_ERROR("%s: failed to create folder '%s' (errno=%d)\n", __FUNCTION__, emv_fdir, errno);
          return emv_fdir;
        }

        if (stat(emv_fdir, &s) != 0 || !S_ISDIR(s.st_mode))
        {
          _LOGF_ERROR("%s: stat() failed on folder '%s' (errno=%d)\n", __FUNCTION__, emv_fdir, errno);
          return emv_fdir;
        }
      }

      int emv_group_id = s.st_gid;

      if (getuid() == s.st_uid)
      {
        int new_group_id = -1;

#ifdef _VOS

        /* PWMADK-2370: if SDI is owner of the folder, take over group ID from EMV config directory,
         * which contains source files for flash. Otherwise keep group of existing folder. */
        if (stat(emv_config_dir(), &s) == 0 && S_ISDIR(s.st_mode))
        {
          new_group_id = s.st_gid;
        }
        else
#endif  // else or for other platforms (e.g. VOS3) set group to "share")
        {
          // do same as ADKEMV: use group "share" as default
          group_info gi;

          if (get_group_info("share", 0, gi))
          {
            new_group_id = gi.gr_gid;
          }
          else
          {
            _LOGF_ERROR("%s: cannot obtain ID for default group 'share'", __FUNCTION__);
          }
        }

        if (new_group_id >= 0 && emv_group_id != new_group_id)
        {
          if (chown(emv_fdir, -1, new_group_id) == 0)
          {
#ifdef _VOS3

            // additionally apply group to parent folder "sdi" (only used on VOS3)
            if (chown(emv_parent_dir, -1, new_group_id) != 0)
            {
              int err = errno; // shoudn't happen
              group_info gi;
              (void)get_group_info(0, (gid_t)new_group_id, gi);
              _LOGF_ERROR("%s: chown() with group '%s' failed on parent folder '%s': %d",
                          __FUNCTION__, emv_parent_dir, gi.gr_name ? gi.gr_name : "", err);
            }

#endif
          }
          else
          {
            int err = errno;
            group_info gi;
            (void)get_group_info(0, (gid_t)new_group_id, gi);
            _LOGF_ERROR("%s: chown() with group '%s' failed on folder '%s': %d",
                        __FUNCTION__, emv_fdir, gi.gr_name ? gi.gr_name : "", err);
          }
        }
      }

      return emv_fdir;
    }

    const char* emv_config_dir()
    {
#ifdef _VOS3
      static string path;

      if (path.empty())
      {
        path = pathcat(ext_config_dir(), "emv");
      }

      return path.c_str();
#else
      return "/etc/config/adkemv";
#endif
    }

    const char* log_config_dir()
    {
#ifdef _VOS3
      return "/mnt/appdata/versioned/globalshare/etc/config/adk-log";
#else
      return "/mnt/flash/etc/config/adk-log";
#endif
    }

    const char* nfc_flash_dir()
    {
      static string path; // $HOME/flash

      if (path.empty())
      {
        home_dir(path);
        path = pathcat(path, "flash");
      }

      return path.c_str();
    }

    const char* tmp_dir()
    {
      return "/tmp";
    }

    const char* upload_install_dir(bool flash)
    {
#ifdef _VOS3
      (void) flash;
#else

      if (!flash)
      {
        return "/mnt/flash/install/dl";
      }

#endif
      static string path; // $HOME/flash/sdi/install

      if (path.empty())
      {
        path = pathcat(home_flash_dir(), "install");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
    }

    // no support for command "Check for update (20-1D)" on this platform
    const char *sys_remove_sponsor_dir()
    {
      return "";
    }

    const char* ccp_resource_dir()
    {
      // CCP is installed under sys13/sys_com, but resources are shared
      static const char *www_ccp_dir = 0;

      if (!www_ccp_dir)
      {
        struct stat s;
        static string path;
        // prefer resources from user configuration folder
        path = pathcat(ext_config_dir(), "ccp/www");
        www_ccp_dir = path.c_str();

        if (stat(www_ccp_dir, &s) != 0 || !S_ISDIR(s.st_mode))
        {
          home_dir(path);
          path = pathcat(path, "www/ccp");

          if (stat(path.c_str(), &s) != 0 || !S_ISDIR(s.st_mode))
          {
            path.clear(); // check folder at once and map to 0 below
          }

          www_ccp_dir = path.c_str();
        }
      }

      if (www_ccp_dir && !strlen(www_ccp_dir))
      {
        return 0;
      }

      return www_ccp_dir;
    }

    const char* ccp_database_dir()
    {
      static const char *db_ccp_dir = 0;

      if (!db_ccp_dir)
      {
        struct stat s;
        static string path = pathcat(home_flash_dir(), COM_PREFIX);

        if (stat(path.c_str(), &s) != 0 || !S_ISDIR(s.st_mode))
        {
          if (!make_dir(path))
          {
            _LOGF_ERROR("ccp_database_dir: failed to create folder '%s'\n", path.c_str());
            path.clear(); // check folder at once and map to 0 below
          }
        }

        db_ccp_dir = path.c_str();
      }

      if (db_ccp_dir && !strlen(db_ccp_dir))
      {
        return 0;
      }

      return db_ccp_dir;
    }

    // no support for command "Check for update (20-1D)" on this platform
    const char* sdi_update_dir()
    {
      return "";
    }

    // no support for persist partition on this platform
    const char* sdi_persist_dir(bool system)
    {
      (void) system; // unused
      return "";
    }

    const char* sdi_certstore_dir()
    {
      static string path;

      if (path.empty())
      {
        path = pathcat(home_flash_dir(), "certstore");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
    }

#else

    const char* home_flash_dir()
    {
#ifdef _STM32
      // $HOME/flash
      const char *path = 0;

      if (!path)
      {
        // don't waste RAM and use code section for path
        path = STM32_SDI_HOME "/flash";
        // create not existing subfolders
        make_dir(path);
      }

      return path;
#else // ANDROID, x86
      static string path; // $HOME/flash/sdi

      if (path.empty())
      {
        home_dir(path);
        path = pathcat(path, "flash/sdi");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
#endif
    }

    const char* home_config_dir()
    {
#ifdef _STM32 // don't waste RAM and use code section for path
      // $HOME, already created by check_home()
      return STM32_SDI_HOME;
#else // ANDROID, x86
      static string path; // $HOME/sdi

      if (path.empty())
      {
        home_dir(path);
        path = pathcat(path, "sdi");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
#endif
    }

    const char* ext_config_dir()
    {
#ifdef _STM32
      // $HOME/ext
      static const char *path = 0;

      if (!path)
      {
        // don't waste RAM and use code section for path
        path = STM32_SDI_HOME "/ext";
        // create not existing subfolders
        make_dir(path);
      }

      return path;
#else // ANDROID, x86
      static string path; // $HOME/sdi_ext

      if (path.empty())
      {
        home_dir(path);
        path = pathcat(path, "sdi_ext");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
#endif
    }

    const char* emv_flash_dir()
    {
#ifdef _STM32
      // $HOME/flash/adkemv
      static const char *path = 0;

      if (!path)
      {
        // don't waste RAM and use code section for path
        path = STM32_SDI_HOME "/flash/adkemv";
        // create not existing subfolders
        make_dir(path);
      }

      return path;
#else // ANDROID, x86
      static string path; // $HOME/flash/adkemv

      if (path.empty())
      {
        home_dir(path);
        path = pathcat(path, "flash/adkemv");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
#endif
    }

    const char* emv_config_dir()
    {
#ifdef _STM32
      // folder for EMV r/o files, usually emv-desired.xml is taken from there, which is not supported on Titus
      // $HOME (as on Android)
      return STM32_SDI_HOME; // already created by check_home()
#else // ANDROID, x86
      static string path; // $HOME

      if (path.empty())
      {
        home_dir(path);
      }

      return path.c_str();
#endif
    }

    const char* log_config_dir()
    {
      static string path; // $HOME

      if (path.empty())
      {
#ifdef _STM32
        /* once we support ADKLOG config, this should be
         * located in subfolder of external config directory */
        path = pathcat(ext_config_dir(), "adk-log");
        // create not existing subfolders
        make_dir(path);
#elif defined __ANDROID__
        path = "/sdcard/config/adk-log/";
#else // x86
        home_dir(path);
#endif
      }

      return path.c_str();
    }

    const char* nfc_flash_dir()
    {
#ifdef _STM32
      // NFC not supported on Titus, use $HOME as long as not implemented
      // $HOME (as on Android)
      return STM32_SDI_HOME; // already created by check_home()
#else // ANDROID, x86
      static string path; // $HOME

      if (path.empty())
      {
        home_dir(path);
      }

      return path.c_str();
#endif
    }

    const char* home_lib_dir()
    {
#ifdef _STM32
      // $HOME, no libraries supported on Titus
      return STM32_SDI_HOME; // already created by check_home()
#else // ANDROID, x86
      static string path; // $HOME/lib

      if (path.empty())
      {
        home_dir(path);
        path = pathcat(path, "lib");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
#endif
    }

    const char* ext_plugin_dir()
    {
#ifdef _STM32
      // external plugins not supported on Titus,
      return "";
#else // ANDROID, x86
      static string path; // $HOME/plugins

      if (path.empty())
      {
        home_dir(path);
        path = pathcat(path, "plugins");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
#endif
    }

    const char* ext_font_dir()
    {
      static string path;

      if (path.empty())
      {
#ifdef _STM32
        // $HOME/ext/fonts, even so far no font support on Titus
        path = pathcat(ext_config_dir(), "fonts");
#else // ANDROID, x86
        // $HOME/fonts/sdi_ext
        home_dir(path);
        path = pathcat(path, "fonts/sdi_ext");
#endif
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
    }

    const char* tmp_dir()
    {
#ifdef _STM32
      // $HOME/tmp, so far not used, but behave as on other platforms
      static const char *path = 0;

      if (!path)
      {
        // don't waste RAM and use code section for path
        path = STM32_SDI_HOME "/tmp";
        // create not existing subfolders
        make_dir(path);
      }

      return path;
#else // ANDROID, x86
      static string path; // $HOME/tmp

      if (path.empty())
      {
        home_dir(path);
        path = pathcat(path, "tmp");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
#endif
    }

    const char* upload_install_dir(bool flash)
    {
      // "flash" parameter ignored, since relevant for V/OS platforms only
      (void) flash;

#ifdef _STM32
      // $HOME/install
      static const char *path = 0;

      if (!path)
      {
        // don't waste RAM and use code section for path
        path = STM32_SDI_HOME "/install";
        // create not existing subfolders
        make_dir(path);
      }

      return path;

#else // ANDROID, x86
      static string path; // $HOME/install

      if (path.empty())
      {
        home_dir(path);
        path = pathcat(path, "install");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
#endif
    }

    const char *sys_remove_sponsor_dir()
    {
#ifdef __ANDROID__
      return "/data/secure/sponsor";
#else
      return "";  // not supported on x86 and Titus
#endif
    }

    // no CCP support on this platform
    const char* ccp_resource_dir()
    {
      return 0;
    }
    const char* ccp_database_dir()
    {
      return 0;
    }

    const char* sdi_update_dir()
    {
#ifdef _STM32
      // $HOME/update
      static const char *path = 0;

      if (!path)
      {
        // don't waste RAM and use code section for path
        path = STM32_SDI_HOME "/update";
        // create not existing subfolders
        make_dir(path);
      }

      return path;
#elif defined __ANDROID__
      return "/data/secure/sdi";
#else
      static string path; // $HOME/update

      if (path.empty())
      {
        home_dir(path);
        path = pathcat(path, "update");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
#endif
    }

    const char* sdi_persist_dir(bool system)
    {
#ifdef _STM32
      // $HOME/persist
      static const char *syspath = 0;
      static const char *usrpath = 0;

      if (system && !syspath)
      {
        // don't waste RAM and use code section for path
        syspath = STM32_SDI_HOME "/persist/sys";
        // create not existing subfolders
        make_dir(syspath);
      }

      if (!system && !usrpath)
      {
        // don't waste RAM and use code section for path
        usrpath = STM32_SDI_HOME "/persist/usr";
        // create not existing subfolders
        make_dir(usrpath);
      }

      return system ? syspath : usrpath;
#else // ANDROID, x86
      (void) system; // unused
      static string path;

      if (path.empty())
      {
#ifdef __ANDROID__
        path = "/persist/appdata/sdi";
#else
        home_dir(path);
        path = pathcat(path, "persist");
#endif
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
#endif
    }

    const char* sdi_certstore_dir()
    {
#ifdef _STM32
      // $HOME/certstore, might be required for P100 later
      static const char *path = 0;

      if (!path)
      {
        // don't waste RAM and use code section for path
        path = STM32_SDI_HOME "/certstore";
        // create not existing subfolders
        make_dir(path);
      }

      return path;
#else
      static string path;

      if (path.empty())
      {
        home_dir(path);
        path = pathcat(path, "certstore");
        // create not existing subfolders
        make_dir(path);
      }

      return path.c_str();
#endif
    }

    /**************** Android/Titus/x86: install/remove user config packages and SDI plugins ********************/

    struct UpdateFiles
    {
      const char *prefix;         
      const char *file;           
      bool regex;                 
      enum Location dest;         
      const char *dest_prefix;    
#ifdef _STM32
      bool read_only;             
#else
      /* On Titus, device is always rebooted to invoke install_configuration() and remove_configuration() very early at SDI startup.
       * Therefore, ADK subcomponents are initialized with SDI startup normally and we don't need to implement pre_actions and the most
       * post_actions to stop and start ADK subcomponents. Exception is ACT_LogInit, since SDI and PAL already invokes LOGAPI_INIT, before
       * the installation at startup is done. Thus, ACT_LogInit is implemented as Post-Action to resolve this hen-and-egg-problem. */
      unsigned long pre_actions;  
#endif
      unsigned long post_actions; 
    };

    const struct UpdateFiles allowed_usr_files[] =
    {
#ifndef _STM32  // Android, x86
      { EMV_PREFIX, EMV_FLASH_CONFIG_FILES, true,  LOC_EmvFlashDir,     "", (ACT_DisableEpp | ACT_EmvExit), ACT_EmvInitInfo },       // ADKEMV: Flash config files, e.g. EMV_*.xml etc.
      { EMV_PREFIX, EMV_DESIRED_FILE,       false, LOC_EmvConfigDir,    "", (ACT_DisableEpp | ACT_EmvExitComplete), ACT_EmvInitInfo },       // ADKEMV: emv-desired.xml (read-only)
      { SEC_PREFIX, ADKSEC_CONFIG_FILE,     false, LOC_SdiExtConfigDir, SEC_PREFIX, ACT_None, ACT_SecInit       }, // ADKSEC: sec/sccfg.json (read-only)
      { "", SDI_CONFIG_FILE,                false, LOC_SdiExtConfigDir, "",         ACT_None, ACT_None          }, // SDI:    config.json (read-only)
      { "", SDI_ACL_FILE,                   false, LOC_SdiExtConfigDir, "",         ACT_None, ACT_AclInit       }, // SDI:    acl.json (read-only)
      { "", WHITELIST_FILE,                 false, LOC_SdiFlashDir,     "",         ACT_None, ACT_WhitelistFile }, // SDI:    whitelist.json
      { "", SENSITIVE_TAGS_FILE,            false, LOC_SdiFlashDir,     "",         ACT_None, ACT_None          }, // SDI:    sensitivetags.json
      { "", CARD_RANGES_FILE,               false, LOC_SdiFlashDir,     "",         ACT_None, ACT_CardRanges    }, // SDI:    cardranges.json
      { "", UPDATE_REMOVE_FILE,             false, LOC_None,            "",         ACT_None, ACT_None          }, // SDI:    remove.json (ignored for installation)
      { LOG_PREFIX, LOG_CONFIG_FILES,       true,  LOC_LogConfigDir,    "",         ACT_None, ACT_LogInit       }, // ADKLOG: *_log.conf
      { NFC_PREFIX, NFC_WKY_FILES,          true,  LOC_NfcFlashDir,     "",         ACT_None, ACT_None          }, // ADKNFC: *.wky
      { FONT_PREFIX, FONT_FILES,            true,  LOC_SdiExtFontsDir,  "",         ACT_None, ACT_None          }  // SDI fonts: *.ttf, *.otf etc.
#else // Titus
      { EMV_PREFIX, EMV_FLASH_CONFIG_FILES, true,  LOC_EmvFlashDir,     "",         false, ACT_None    }, // ADKEMV: Flash config files, e.g. EMV_*.xml etc. (writable)
      { SEC_PREFIX, ADKSEC_CONFIG_FILE,     false, LOC_SdiExtConfigDir, SEC_PREFIX, true,  ACT_None    }, // ADKSEC: sec/sccfg.json (read-only)
      { "", SDI_CONFIG_FILE,                false, LOC_SdiExtConfigDir, "",         true,  ACT_None    }, // SDI:    config.json (read-only)
      { "", UPDATE_REMOVE_FILE,             false, LOC_None,            "",         true,  ACT_None    }, // SDI:    remove.json (ignored for installation)
      { LOG_PREFIX, LOG_CONFIG_FILES,       true,  LOC_LogConfigDir,    "",         true,  ACT_LogInit }  // ADKLOG: *_log.conf (read-only)
#endif
    };
    const unsigned allowed_usr_files_size = (sizeof(allowed_usr_files) / sizeof(allowed_usr_files[0]));

    static void get_user_config_files(vector<string> &files)
    {

      for (unsigned i = 0; i < allowed_usr_files_size; i++)
      {
#ifdef _STM32

        // optimize on Titus: keep read-only files
        if (allowed_usr_files[i].read_only)
        {
          continue;
        }

#endif
        // destination location (flash)
        string dest_dir = getLocation(allowed_usr_files[i].dest);

        if (allowed_usr_files[i].dest_prefix[0])
        {
          dest_dir = pathcat(dest_dir, allowed_usr_files[i].dest_prefix);
        }

        if (allowed_usr_files[i].regex)
        {
          vector<string> list;

          if (get_dir_files(dest_dir.c_str(), &list, allowed_usr_files[i].file) > 0)
          {
            files.insert(files.end(), list.begin(), list.end());
          }
        }
        else
        {
          files.push_back(pathcat(dest_dir, allowed_usr_files[i].file));
        }
      }
    }

#ifdef _STM32

    const struct UpdateFiles allowed_sys_files[] =
    {
      { SEC_PREFIX, ADKSEC_CONFIG_FILE, false, LOC_SdiConfigDir, SEC_PREFIX, true, ACT_None }, // ADKSEC: sec/sccfg.json (read-only)
      { "", UPDATE_REMOVE_FILE,         false, LOC_None,         "",         true, ACT_None }  // SDI:    remove.json
    };
    const unsigned allowed_sys_files_size = (sizeof(allowed_sys_files) / sizeof(allowed_sys_files[0]));

    static void get_system_config_files(vector<string> &files)
    {
      for (unsigned i = 0; i < allowed_sys_files_size; i++)
      {
        // optimize on Titus: keep read-only files
        if (allowed_usr_files[i].read_only)
        {
          continue;
        }

        // destination location
        string dest_dir = getLocation(allowed_sys_files[i].dest);

        if (allowed_sys_files[i].dest_prefix[0])
        {
          dest_dir = pathcat(dest_dir, allowed_sys_files[i].dest_prefix);
        }

        if (allowed_sys_files[i].regex)
        {
          vector<string> list;

          if (get_dir_files(dest_dir.c_str(), &list, allowed_sys_files[i].file) > 0)
          {
            files.insert(files.end(), list.begin(), list.end());
          }
        }
        else
        {
          files.push_back(pathcat(dest_dir, allowed_sys_files[i].file));
        }
      }
    }

#endif // #ifdef _STM32

    static unsigned short readRemovalFile(const string &remove_file, vector<string> &files)
    {
      /***********************************************************
       *             READ AND VALIDATE REMOVAL FILE              *
       ***********************************************************/
      string data;

      if (!read_file(remove_file.c_str(), data))
      {
        _LOGF_ERROR("%s: No removal file '%s' found", __func__, remove_file.c_str());
        return 0x64FC; // file access error
      }

      JSObject json;

      if (!json.load(data))
      {
        _LOGF_ERROR("%s: JSON format of removal file '%s' is invalid", __func__, remove_file.c_str());
        return 0x64FB; // invalid file content
      }

      if (!json.exists("files") || !json("files").isArray())
      {
        _LOGF_ERROR("%s: JSON format of removal file '%s' is invalid: array 'files' is missing",
                    __func__, remove_file.c_str());
        return 0x64FB; // invalid file content
      }

      JSObject &filelist = json("files");

      for (unsigned i = 0; i < filelist.size(); i++)
      {
        if (!filelist[i].isString() || filelist[i].getString().empty())
        {
          _LOGF_ERROR("%s: JSON format of removal file '%s' is invalid: 'files[%u]' is not a valid string",
                      __func__, remove_file.c_str(), i);
          return 0x64FB; // invalid file content
        }

        files.push_back(filelist[i].getString());
      }

      if (files.size() == 0)
      {
        _LOGF_ERROR("%s: No files found in removal file '%s'", __func__, remove_file.c_str());
        return 0x64FB; // invalid file content
      }

      return 0x9000;
    }

    static unsigned short install_configuration(bool recover, bool system = false)
    {
      int cnt;
      string src_dir;
      vector<string> all_files;

#ifdef _STM32 // Titus supports installation of system and user configuration files
      const char *sys_usr = (system ? "system" : "user");
      const struct UpdateFiles *allowed_files = (system ? allowed_sys_files : allowed_usr_files);
      const unsigned allowed_files_size = (system ? allowed_sys_files_size : allowed_usr_files_size);
#else // Android, x86

      if (system)
      {
        _LOGF_ERROR("%s (system): Parameter error (installation of system config not allowed)", __func__);
        return 0x64FE; // parameter error, shouldn't happen, since function is not invoked for user config only
      }

      const char *sys_usr = "user";
      const struct UpdateFiles *allowed_files = allowed_usr_files;
      const unsigned allowed_files_size = allowed_usr_files_size;
#endif

      /* Set source location directory:
       * For command "CheckForUpdate" SDI server will lookup the files from update folder of
       * Android Secure Installer. For command "FactoryReset" SDI server will set recover flag
       * to true, so that installed update files are recovered from persistent partition. */
      src_dir = recover ? sdi_persist_dir(system) : sdi_update_dir();

      /***********************************************************
       *             LOOKUP SDI CONFIGURATION FILES              *
       ***********************************************************/
      set<string> all_dirs; // set search folders under src_dir (subfolders specified by prefix)
      all_dirs.insert(src_dir); // SDI config base directory

      // subfolders using a prefix
      for (unsigned i = 0; i < allowed_files_size; i++)
      {
        if (!allowed_files[i].prefix[0])
        {
          continue;
        }

        // add subfolder
        all_dirs.insert(pathcat(src_dir, allowed_files[i].prefix));
      }

      // get configuration files for all folders (including subfolders)
      for (set<string>::const_iterator it = all_dirs.begin(); it != all_dirs.end(); ++it)
      {
        /* get configuration files for this folder */
        vector<string> files;
        cnt = get_dir_files(it->c_str(), &files);

        if (cnt <= 0)
        {
          _LOGF_INFO("%s (%s): No configuration files found in folder '%s'",
                     __func__, sys_usr, it->c_str());
          continue;
        }

        all_files.insert(all_files.end(), files.begin(), files.end());
        _LOGF_INFO("%s (%s): %d configuration file(s) found in folder '%s'",
                   __func__, sys_usr, cnt, it->c_str());
      }

      /***********************************************************
       *           CHECK IF FILES ARE ALLOWED FOR UPDATE         *
       ***********************************************************/

      if (all_files.size() == 0)
      {
        _LOGF_ERROR("%s (%s): No valid files found in configuration update package",
                    __func__, sys_usr);
        return 0x64FB; // invalid file content
      }

      // vector storing indizes to table allowed_files for each file
      vector<unsigned> allowed_idx;

      for (unsigned i = 0; i < all_files.size(); i++)
      {
        if (all_files[i].length() <= src_dir.length() + 1)
        {
          _LOGF_ERROR("%s (%s): Internal logic error (wrong file prefix length)",
                      __func__, sys_usr);
          return 0x64FD; // logic error, shouldn't happen, since all files must have prefix src_dir
        }

        // relative path of current update file (as provided in user configruation package)
        string curr_file = all_files[i].substr(src_dir.length() + 1); // +1 to include '/'
        unsigned j;

        for (j = 0; j < allowed_files_size; j++)
        {
          string regex = "^";
          // escape prefix for regex use
          regex += escapeRegex(allowed_files[j].prefix);
          // if required, escape filename for regex pattern use
          regex += allowed_files[j].regex ? allowed_files[j].file : escapeRegex(allowed_files[j].file);
          regex += "$";

          if (matchRegex(curr_file.c_str(), regex.c_str()))
          {
            allowed_idx.push_back(j);
            _LOGF_INFO("%s (%s): Configuration file '%s' in update package is allowed for update.",
                       __func__, sys_usr, curr_file.c_str());
            break;
          }
        }

        if (j >= allowed_files_size)
        {
          _LOGF_ERROR("%s (%s): Update of configuration files failed, file '%s' in update package is not allowed for update.",
                      __func__, sys_usr, curr_file.c_str());
          return 0x64FB; // invalid file content
        }
      }

      if (all_files.size() != allowed_idx.size())
      {
        // logic error, shouldn't happen, since for all files one index of the table was added
        _LOGF_ERROR("%s (%s): Internal logic error (not all files have a table index)", __func__, sys_usr);
        return 0x64FD;
      }

      /***********************************************************
       *             RUN PRE-ACTIONS BEFORE UPDATE               *
       ***********************************************************/
      unsigned long actions = ACT_None; // stores pre actions to execute before update

#ifndef _STM32 // no pre actions on Titus

      for (unsigned i = 0; i < all_files.size(); i++)
      {
        // add pre action (if any)
        if (allowed_files[allowed_idx[i]].pre_actions != ACT_None)
        {
          actions |= allowed_files[allowed_idx[i]].pre_actions;
        }
      }

      if (actions != ACT_None)
      {
        _LOGF_INFO("%s (%s): Run pre-actions before update...", __func__, sys_usr);
        unsigned short ret = run_actions(actions); // installation, pre-action

        if (ret != 0x9000)
        {
          _LOGF_ERROR("%s (%s): Running of pre-actions before update failed: 0x%hx", __func__, sys_usr, ret);
          return ret;
        }
      }

      actions = ACT_None; // re-use for post actions after update
#endif

      /***********************************************************
       *             UPDATE SDI CONFIGURATION FILES              *
       ***********************************************************/

      cnt = 0;

      for (unsigned i = 0; i < all_files.size(); i++)
      {
        // get destination folder
        string dest = getLocation(allowed_files[allowed_idx[i]].dest);

        if (!dest.empty())
        {
          if (allowed_files[allowed_idx[i]].dest_prefix[0])  // has a dest path prefix?
          {
            dest = pathcat(dest, allowed_files[allowed_idx[i]].dest_prefix);
            // create missing subfolder (if not exist)
            make_dir(dest);
          }

          // add the file name
          dest = pathcat(dest, filename_from_path(all_files[i]));

          // update the file
          if (!copy_file(all_files[i], dest))
          {
            _LOGF_ERROR("%s (%s): Failed to copy update file '%s' to '%s'",
                        __func__, sys_usr, all_files[i].c_str(), dest.c_str());
            return 0x64FC; // file access error
          }

          _LOGF_INFO("%s (%s): Copied update file '%s' to '%s'",
                     __func__, sys_usr, all_files[i].c_str(), dest.c_str());
          cnt++;

          /* store copy of installed configuration files to persistent
           * partition/folder to make it recoverable for factory reset. */
#ifdef _STM32
          // on Titus, do not store read-only files to persist folder
          bool store_presist = (!recover && !allowed_files[allowed_idx[i]].read_only);
#else
          // On Android, all files are stored to persist partition
          bool store_presist = !recover;
#endif

          if (store_presist)
          {
            dest = sdi_persist_dir(system);

            // use same prefix as used in update packages
            if (allowed_files[allowed_idx[i]].prefix[0])
            {
              dest = pathcat(dest, allowed_files[allowed_idx[i]].prefix);
              // create missing subfolder (if not exist)
              make_dir(dest);
            }

            // add the file name
            dest = pathcat(dest, filename_from_path(all_files[i]));

            /* move the file (instead copy) due to performance
             * and to wipe file from sdi_update_dir() */
            if (!move_file(all_files[i], dest))
            {
              _LOGF_ERROR("%s (%s): Failed to move update file '%s' to '%s'",
                          __func__, sys_usr, all_files[i].c_str(), dest.c_str());
              return 0x64FC; // file access error
            }
          }
        }
        else
        {
          _LOGF_INFO("%s (%s): Update file '%s' is ignored for the update",
                     __func__, sys_usr, all_files[i].c_str());
        }

        // add post action (if any)
        if (allowed_files[allowed_idx[i]].post_actions != ACT_None)
        {
          actions |= allowed_files[allowed_idx[i]].post_actions;
        }

      }

      if (cnt > 0)
      {
        _LOGF_INFO("%s (%s): %d file%s successfully updated",
                   __func__, sys_usr, cnt, cnt > 1 ? "s" : "");
      }

      /***********************************************************
       *             RUN POST ACTIONS AFTER UPDATE               *
       ***********************************************************/
      if (actions != ACT_None)
      {
        _LOGF_INFO("%s (%s): Run post-actions after update...", __func__, sys_usr);
        // execute the post actions (if any), which are required for new configuration files
        unsigned short ret = run_actions(actions, ASRC_PostAction); // installation, post-action

        if (ret != 0x9000)
        {
          _LOGF_ERROR("%s (%s): Running of post-actions after update failed: 0x%hx", __func__, sys_usr, ret);
          return ret;
        }
      }

      return 0x9000; // success
    }

    static unsigned short remove_configuration(bool system = false)
    {
#ifdef _STM32 // Titus supports removal of system and user configuration files
      const char *sys_usr = (system ? "system" : "user");
      const struct UpdateFiles *allowed_files = (system ? allowed_sys_files : allowed_usr_files);
      const unsigned allowed_files_size = (system ? allowed_sys_files_size : allowed_usr_files_size);
#else // Android, x86

      if (system)
      {
        _LOGF_ERROR("%s (system): Parameter error (removal of system config not allowed)", __func__);
        return 0x64FE; // parameter error, shouldn't happen, since function is not invoked to remove user config only
      }

      const char *sys_usr = "user";
      const struct UpdateFiles *allowed_files = allowed_usr_files;
      const unsigned allowed_files_size = allowed_usr_files_size;
#endif

      /***********************************************************
       *             READ AND VALIDATE REMOVAL FILE              *
       ***********************************************************/

      vector<string> files;
      string remove_file = pathcat(sdi_update_dir(), UPDATE_REMOVE_FILE);
      unsigned short ret = readRemovalFile(remove_file, files);
      /* wipe removal file from sdi_update_dir(), once it
       * was read despite of removal will succeed or not */
      remove(remove_file.c_str());

      if (ret != 0x9000)
      {
        _LOGF_ERROR("%s (%s): Failed to read removal file '%s' (ret=%hu)",
                    __func__, sys_usr, remove_file.c_str(), ret);
        return ret;
      }

      /***********************************************************
       *       GENERATE LIST OF FILES ALLOWED TO BE REMOVED      *
       ***********************************************************/

      vector<string> remove_list; // list of files to be removed
#ifndef _STM32 // no pre actions on Titus
      unsigned long pre_actions = ACT_None;    // pre actions to execute before removal
#endif
      unsigned long post_actions = ACT_None;   // post actions to execute after removal

      // check for each file, if it exists in application folder and on persistent partition
      for (unsigned i = 0; i < allowed_files_size * 2; i++)
      {
        unsigned idx = i / 2;
        string dir;

        if (i % 2) // application folder
        {
          // get destination folder
          dir = getLocation(allowed_files[idx].dest);

          if (dir.empty())
          {
            // ignored for removal, if empty
            continue;
          }

          // has a dest path prefix?
          if (allowed_files[idx].dest_prefix[0])
          {
            dir = pathcat(dir, allowed_files[idx].dest_prefix);
          }
        }
        else // persistent partition/folder
        {
#ifdef _STM32

          // on Titus there is no shadow file in persist folder for read-only files
          if (allowed_files[idx].read_only)
          {
            continue;
          }

#endif
          dir = sdi_persist_dir(system);

          // use same prefix as used in update packages
          if (allowed_files[idx].prefix[0])
          {
            dir = pathcat(dir, allowed_files[idx].prefix);
          }
        }

        vector<string> list;

        // if required, escape filename for regex pattern use
        string regex = "^.*/";
        regex += allowed_files[idx].regex ? allowed_files[idx].file : escapeRegex(allowed_files[idx].file);
        regex += "$";

        if (get_dir_files(dir.c_str(), &list, regex.c_str()) <= 0)
        {
          // no files exist
          continue;
        }

        for (unsigned j = 0; j < list.size(); j++)
        {
          string file = filename_from_path(list[j]);

          if (allowed_files[idx].prefix[0])
          {
            file = pathcat(allowed_files[idx].prefix, file);
          }

          for (unsigned k = 0; k < files.size(); k++)
          {
            // files[] read from remove.json already expected as regular expression
            if (matchRegex(file.c_str(), files[k].c_str()))
            {
              remove_list.push_back(list[j]);
              _LOGF_INFO("%s (%s): Entry files[%u]='%s' in file '%s' matches existing file '%s', add to remove list",
                         __func__, sys_usr, k, files[k].c_str(), remove_file.c_str(), list[j].c_str());


              // for application file, add pre/post action (if any)
              if ((i % 2))
              {
#ifndef _STM32 // no pre actions on Titus

                if (allowed_files[idx].pre_actions != ACT_None)
                {
                  pre_actions |= allowed_files[idx].pre_actions;
                }

#endif

                if (allowed_files[idx].post_actions != ACT_None)
                {
                  post_actions |= allowed_files[idx].post_actions;
                }
              }
            }
          }
        }
      }

#ifndef _STM32 // no pre actions on Titus

      /***********************************************************
       *             RUN PRE ACTIONS BEFORE REMOVAL              *
       ***********************************************************/
      if (pre_actions != ACT_None)
      {
        _LOGF_INFO("%s (%s): Run pre-actions before removal...", __func__, sys_usr);
        // execute the post actions (if any), which are required for removed configuration files
        unsigned short ret = run_actions(pre_actions, ASRC_Removal); // removal, pre-action

        if (ret != 0x9000)
        {
          _LOGF_ERROR("%s (%s): Running of pre-actions before removal failed: 0x%hx",
                      __func__, sys_usr, ret);
          return ret;
        }
      }

#endif

      /***********************************************************
       *              REMOVE THE CONFIGURATION FILES             *
       ***********************************************************/

      if (remove_list.size() == 0)
      {
        _LOGF_INFO("%s (%s): No files found to be removed", __func__, sys_usr);
        return 0x9000; // no files found to be removed
      }

      int cnt = remove_files(remove_list, FM_NoAbort);

      if (cnt != (int)remove_list.size())
      {
        _LOGF_ERROR("%s (%s): File access error, couldn't remove all files (%d of %d removed)",
                    __func__, sys_usr, cnt, (int)remove_list.size());
        return 0x64FC; // file access error
      }

      _LOGF_INFO("%s (%s): %d file%s successfully removed",
                 __func__, sys_usr, cnt, cnt > 1 ? "s" : "");

      /***********************************************************
       *             RUN POST ACTIONS AFTER REMOVAL              *
       ***********************************************************/
      if (post_actions != ACT_None)
      {
        _LOGF_INFO("%s (%s): Run post-actions after removal...", __func__, sys_usr);
        // execute the post actions (if any), which are required for removed configuration files
        unsigned short ret = run_actions(post_actions, ASRC_Removal | ASRC_PostAction); // removal, post-action

        if (ret != 0x9000)
        {
          _LOGF_ERROR("%s (%s): Running of post-actions after removal failed: 0x%hx",
                      __func__, sys_usr, ret);
          return ret;
        }
      }

      return 0x9000; // success
    }

#ifdef _STM32

    /* Check for configuration update at startup and intall
     * user and system configuration files on Titus platform.
     * \param[in] recover set to true to recover files from persist
     *                    folder on Titus. This parameter is used
     *                    by function factory_reset(). */
    static void check_config_update(bool recover)
    {
      if (recover)
      {
        // recover system configuration
        unsigned short ret = install_configuration(true, true);

        if (ret != 0x9000)
        {
          _LOGF_ERROR("%s: install_configuration() failed with 0x%hx (system config recovery)", __FUNCTION__, ret);
        }

        // recover user configuration
        ret = install_configuration(true);

        if (ret != 0x9000)
        {
          _LOGF_ERROR("%s: install_configuration() failed with 0x%hx (user config recovery)", __FUNCTION__, ret);
        }

        return;
      }

      const char *inst_files[] = {USR_CONFIG_FILE, SYS_CONFIG_FILE};

      for (unsigned i = 0; i < (sizeof(inst_files) / sizeof(inst_files[0])); i++)
      {
        // open update file
        FILE *f = fopen(inst_files[i], "rb");
        bool system = (inst_files[i] == (const char *)SYS_CONFIG_FILE ? true : false);
        const char *sys_usr = (system ? "system" : "user");

        if (!f)
        {
          _LOGF_INFO("%s: %s config update skipped, file '%s' not found",
                     __FUNCTION__, sys_usr, inst_files[i]);
          continue;
        }

        _LOGF_INFO("%s: found file '%s' for %s config update...", __FUNCTION__, inst_files[i], sys_usr);
        struct fs_install_hdr dl_sys_info;   // content of SYS_CONFIG_FILE
        struct fs_usrconfig_hdr dl_usr_info; // content of USR_CONFIG_FILE, fs_install_hdr plus user data (sponsor ID)

        // init with dl_sys_info, switch dl_usr_info below
        struct fs_install_hdr *dl_info = &dl_sys_info;
        size_t size = sizeof(dl_sys_info);

        if (!system)
        {
          // note: This cast is possible, since fs_install_hdr is first member base in struct dl_usr_info
          dl_info = (struct fs_install_hdr *)&dl_usr_info;
          size = sizeof(dl_usr_info);
        }

        if (fread(dl_info, 1, size, f) != size)
        {
          _LOGF_ERROR("%s: %s config update failed, couldn't read file '%s'",
                      __FUNCTION__, sys_usr, inst_files[i]);
          fclose(f);
          remove(inst_files[i]);
          continue;
        }

        fclose(f);

        /* Note: First check data of struct fs_install_hdr (in case of dl_usr_info, this is first member base) */

        // check header length of struct fs_install_hdr
        if (dl_info->hdr_len != sizeof(struct fs_install_hdr))
        {
          _LOGF_ERROR("%s: %s config update failed, file '%s' has unexpected fs_install_hdr header size (%lu!=%u)",
                      __FUNCTION__, sys_usr, inst_files[i], dl_info->hdr_len, sizeof(struct fs_install_hdr));
          remove(inst_files[i]);
          continue;
        }

        // sanity check of dl filename, if it was created by SDI with a previos upload
        unsigned nlen;

        for (nlen = 0; nlen < sizeof(dl_info->dl_fn) && dl_info->dl_fn[nlen]; nlen++);

        if (nlen >= sizeof(dl_info->dl_fn))
        {
          dl_info->dl_fn[sizeof(dl_info->dl_fn) - 1] = 0;
        }

        struct stat s;

        if (stat(dl_info->dl_fn, &s) != 0 || !S_ISREG(s.st_mode))
        {
          _LOGF_ERROR("%s: %s config update failed, file '%s' contains upload file '%s', which does not exist.",
                      __FUNCTION__, sys_usr, inst_files[i], dl_info->dl_fn);
          remove(inst_files[i]);
          continue;
        }

        string expected = pathcat(upload_install_dir(), STM32_DL_FILENAME);

        if (expected.compare(dl_info->dl_fn) != 0)
        {
          _LOGF_ERROR("%s: %s config update failed, file '%s' contains invalid upload file '%s' (expected: '%s').",
                      __FUNCTION__, sys_usr, inst_files[i], dl_info->dl_fn, expected.c_str());
          remove(inst_files[i]);
          remove(dl_info->dl_fn); // remove unexpected upload file
          continue;
        }

        /* Note: From this point, calling init() will care about removing dl_info->dl_fn, since
         *       it will wipe folder upload_install_dir() after check_config_update() returns. */

        // check specific data in case of dl_usr_info
        std::string sponsor_id; // sponsor to be set after installation

        if (!system)
        {
          // check header length
          if (dl_usr_info.hdr_len != sizeof(dl_usr_info))
          {
            _LOGF_ERROR("%s: user config update failed, file '%s' has unexpected dl_usr_info header size (%lu!=%u)",
                        __FUNCTION__, inst_files[i], dl_usr_info.hdr_len, sizeof(dl_usr_info));
            remove(inst_files[i]);
            continue;
          }

          // check header length
          if (strlen(dl_usr_info.sponsor_id) == 0)
          {
            _LOGF_ERROR("%s: user config update failed, dl file '%s' is missing sponsor ID", __FUNCTION__, dl_info->dl_fn);
            remove(inst_files[i]);
            continue;
          }

          // check sponsor against exsisting
          enum pal_ReturnCodes result = pal::update::getSponsor(sponsor_id);

          if (result == PAL_OK)
          {
            if (sponsor_id.compare(dl_usr_info.sponsor_id) != 0)
            {
              // shouldn't happen, since already checked by preinstall_package() before reboot
              _LOGF_ERROR("%s: user config update failed, sponsor ID '%s' of dl file '%s' doesn't match existing sponsor ID '%s'", __FUNCTION__, sponsor_id.c_str(), dl_info->dl_fn, dl_usr_info.sponsor_id);
              remove(inst_files[i]);
              continue;
            }

            sponsor_id.clear(); // don't set sponser after installation, since already matching
          }
          else
          {
            if (result != PAL_SPONSOR_MISSING)
            {
              _LOGF_ERROR("%s: user config update failed, pal::update::getSponsor() returned error %d", __FUNCTION__, result);
              remove(inst_files[i]);
              continue;
            }

            // PAL_SPONSOR_MISSING: assign new sponsor after installation
            sponsor_id.assign(dl_usr_info.sponsor_id);
          }
        }

        // access nested tar config package from the tar download package
        std::vector<TarEntry> entries;
        enum TarResult r = tarRead(entries, dl_info->dl_fn, dl_info->updtf_off, dl_info->updtf_len);

        if (r != TAR_Ok) // content file is not a TAR archive
        {
          _LOGF_ERROR("%s: %s config update failed, tarRead() on dl file '%s' (with offset=%lu, len=%lu) returned %d",
                      __FUNCTION__, sys_usr, dl_info->dl_fn, dl_info->updtf_off, dl_info->updtf_len, r);
          remove(inst_files[i]);
          continue;
        }

        if (entries.size() == 0) // no content files in nested TAR archive
        {
          _LOGF_ERROR("%s: %s config update failed, nested tar archive in dl file '%s' (with offset=%lu, len=%lu) is empty",
                      __FUNCTION__, sys_usr, dl_info->dl_fn, dl_info->updtf_off, dl_info->updtf_len);
          remove(inst_files[i]);
          continue;
        }

        // open dl file to access files of nested TAR archive
        FILE *tf = fopen(dl_info->dl_fn, "rb");

        if (!tf)
        {
          _LOGF_ERROR("%s: %s config update failed, cannot open dl file '%s'",
                      __FUNCTION__, sys_usr, dl_info->dl_fn);
          remove(inst_files[i]);
          continue;
        }

        // wipe SDI update directory
        remove_dir(sdi_update_dir(), FM_KeepTopDir);

        // extract files of config package (nested TAR archive) to SDI update directory
        int files = 0;

        for (unsigned j = 0; j < entries.size(); j++)
        {
#if 0 // enable to output TAR entry details
          _LOGF_INFO("%s: process entry '%s' (mode=0x%x, offset=%lu, len=%lu) from dl file '%s' (%s config)",
                     __FUNCTION__, entries[j].st_name.c_str(), entries[j].st_mode, entries[j].st_offset,
                     entries[j]. st_size, dl_info->dl_fn, sys_usr);
#endif

          // check for directory
          if (S_ISDIR(entries[j].st_mode))
          {
            /* ignore, since write_file_from_tar() will create
             * subfolders for files in SDI update directory */
            continue;
          }

          // check for regular file
          if (S_ISREG(entries[j].st_mode))
          {
            // create the file (including missing subfolders below sdi_update_dir())
            if (!write_file_from_tar(tf, entries[j], sdi_update_dir()))
            {
              _LOGF_ERROR("%s: %s config update failed, cannot create/write file '%s' of dl file '%s' into directory '%s'",
                          __FUNCTION__, sys_usr, entries[j].st_name.c_str(), dl_info->dl_fn, sdi_update_dir());
              files = -1; // error
              break;
            }

            files++;
            _LOGF_INFO("%s: extracted file '%s' from dl file '%s' into directory '%s' for pending %s config update",
                       __FUNCTION__, entries[j].st_name.c_str(), dl_info->dl_fn, sdi_update_dir(), sys_usr);
            continue;
          }

          // invalid file tpye (e.g. symblic link not permitted)
          _LOGF_ERROR("%s: %s config update failed, unknown file mode 0x%x for entry '%s' of dl file '%s'",
                      __FUNCTION__, sys_usr, entries[j].st_mode, entries[j].st_name.c_str(), dl_info->dl_fn);
          files = -1; // error
          break;
        }

        fclose(tf);

        // extraction successful and complete, proceed with installation
        if (files > 0)
        {
          unsigned short ret = 0; // no removal
          /* 1. step: remove user/system configuration */
          string remove_file = pathcat(sdi_update_dir(), UPDATE_REMOVE_FILE);

          // check existance of removal file
          if (stat(remove_file.c_str(), &s) == 0 && S_ISREG(s.st_mode))
          {
            ret = remove_configuration(system);

            if (ret == 0x9000)
            {
              _LOGF_INFO("%s: %s config removal with dl file '%s' successful",
                         __FUNCTION__, sys_usr, dl_info->dl_fn);
            }
            else
            {
              _LOGF_ERROR("%s: %s config removal with dl file '%s' failed, remove_configuration() returned 0x%hx",
                          __FUNCTION__, sys_usr, dl_info->dl_fn, ret);
            }

            files--; // UPDATE_REMOVE_FILE ignored for installation
          }

          /* 2. install user/system configuration, only if
                 a) files are left for installation (not removal only)
                 b) no removal was done or removal was successful. If removal failed, we
                    skip installation, since installation might depend on previos removal */
          if (files > 0)
          {
            if (ret == 0 || ret == 0x9000)
            {
              ret = install_configuration(false, system);

              if (ret == 0x9000)
              {
                _LOGF_INFO("%s: %s config installation with dl file '%s' successful",
                           __FUNCTION__, sys_usr, dl_info->dl_fn);

                // set the sponsor ID, if not done before
                if (!system && !sponsor_id.empty())
                {
                  enum pal_ReturnCodes result = pal::update::setSponsor(sponsor_id);

                  if (result != PAL_OK)
                  {
                    _LOGF_ERROR("%s: pal::update::setSponsor() with sponsor ID '%s' failed with error %d after installation of user config package '%s'",
                                __FUNCTION__, sponsor_id.c_str(), result, dl_info->dl_fn);
                  }
                }
              }
              else
              {
                _LOGF_ERROR("%s: %s config installation with dl file '%s' failed, install_configuration() returned 0x%hx",
                            __FUNCTION__, sys_usr, dl_info->dl_fn, ret);
              }
            }
            else
            {
              _LOGF_ERROR("%s: %s config update failed, skip installation due to previous removal failure",
                          __FUNCTION__, sys_usr);
            }
          }
        }
        else
        {
          if (files == -1) // extraction incomplete/failed
          {
            _LOGF_ERROR("%s: %s config update failed, extraction of dl file '%s' incomplete/failed",
                        __FUNCTION__, sys_usr, dl_info->dl_fn);
          }
          else // files == 0
          {
            _LOGF_ERROR("%s: %s config update failed, no files found in dl file '%s'",
                        __FUNCTION__, sys_usr, dl_info->dl_fn);
          }
        }

        // cleanup after update
        remove(inst_files[i]);
        // wipe SDI update directory
        remove_dir(sdi_update_dir(), FM_KeepTopDir);
      }
    }

#else // !_STM32 (Android, x86): functions to support command "Check for update (20-1D)"

    unsigned short install_user_configuration(bool recover)
    {
      return install_configuration(recover);
    }

    unsigned short remove_user_configuration()
    {
      return remove_configuration();
    }

    unsigned short install_sdi_plugins(bool recover)
    {
      string pdir = ext_plugin_dir();
      string cfgdir = plugin_config_dir();

      if (pdir.empty() || cfgdir.empty())  // shouldn't happen
      {
        _LOGF_ERROR("%s: No SDI plugin %sdirectory available", __func__, pdir.empty() ? "" : "config ");
        return 0x64FD; // logic error
      }

      /* Set source location directory:
       * For command "CheckForUpdate" SDI server will lookup the files from update folder
       * of Android Secure Installer. For command "FactoryReset" SDI server will set recover flag
       * to true, so that installed update files are recovered from persistent partition. */
      string src_dir = recover ? sdi_persist_dir() : sdi_update_dir();

      // plugins use path prefx
      src_dir = pathcat(src_dir, PLUGIN_PREFIX);

      /* get all plugins from source directory */
      vector<string> plugin_cfgs; // SDI plugin configuration files
      vector<string> plugins; // SDI plugins
      vector<string> kernels; // EMV CTLS kernels (there could be multiple versions)
      int plgcfg_cnt = get_dir_files(src_dir.c_str(), &plugin_cfgs, PLUGIN_CONFIG_PATTERN);
      int plugin_cnt = get_dir_files(src_dir.c_str(), &plugins, PLUGIN_PATTERN);
      int kernel_cnt = get_dir_files(src_dir.c_str(), &kernels, GCKERNEL_PATTERN);

      if (plgcfg_cnt <= 0 && plugin_cnt <= 0 && kernel_cnt <= 0)
      {
        /* don't issue an error for factory reset recovery, if no plugins were installed */
        if (recover)
        {
          _LOGF_INFO("%s: No installed plugins or plugin configuration files found in '%s'", __func__, src_dir.c_str());
          return 0x9000;
        }

        _LOGF_ERROR("%s: No files found in plugin update package", __func__);
        return 0x64FB; // invalid file content
      }

      // install plugin configuration files
      set<string> plugins_to_reload; // set storing plugins to reload after related configuration was applied

      for (unsigned i = 0; i < plugin_cfgs.size(); i++)
      {
        string fname = filename_from_path(plugin_cfgs[i]);
        string path = pathcat(cfgdir, fname);

        if (!copy_file(plugin_cfgs[i], path))
        {
          _LOGF_ERROR("%s: Failed to copy plugin configuration file '%s' to '%s'", __func__, plugin_cfgs[i].c_str(), path.c_str());
          return 0x64FC; // file access error
        }

        if (!recover)
        {
          string ppath = pathcat(sdi_persist_dir(), PLUGIN_PREFIX);
          make_dir(ppath); // create subfolder (if not exist yet)
          ppath = pathcat(ppath, fname);

          /* move the file (instead copy) due to performance
           * and to wipe file from sdi_update_dir() */
          if (!move_file(plugin_cfgs[i], ppath))
          {
            _LOGF_ERROR("%s: Failed to move plugin configuration file '%s' to '%s'",
                        __func__, plugin_cfgs[i].c_str(), ppath.c_str());
            return 0x64FC; // file access error
          }
        }

        _LOGF_INFO("%s: Plugin configuration file successfully installed to '%s'",
                   __func__, path.c_str());

        // replace extension .cfg/json by .so to get related plugin file
        string plugin = fname;
        size_t pos = plugin.find_last_of(".");

        if (pos != string::npos)
        {
          plugin.erase(pos);
        }

        plugin += PLUGIN_EXT;

        /* If the plugin is installed with this package, we do nothing, since it will be
         * replaced and loaded with installation (see below). If not, we reload the plugin
         * so that the plugin will/can apply new configuration. */
        unsigned j;

        for (j = 0; j < plugins.size(); j++)
        {
          if (filename_from_path(plugins[j]) == plugin)
          {
            break;
          }
        }

        if (j < plugins.size())
        {
          _LOGF_INFO("%s: Related plugin '%s' (for config '%s') is part of this package and will be updated/reloaded.",
                     __func__, plugin.c_str(), fname.c_str());
          continue;
        }

        // check, if SDI plugin is already installed and consider it for reload to apply configuration
        path = pathcat(pdir, plugin);
        // we're done, if the old source file does not exist
        struct stat s;

        if (stat(path.c_str(), &s) != 0 || !S_ISREG(s.st_mode))
        {
          _LOGF_INFO("%s: Related plugin %s (for config %s) is not part of the package and not installed yet (no reload required).",
                     __func__, plugin.c_str(), fname.c_str());
          continue;
        }

        plugins_to_reload.insert(path);
        _LOGF_INFO("%s: Related plugin '%s' (for config '%s') is not part of the package, but already installed and considered for reload.",
                   __func__, plugin.c_str(), fname.c_str());
      }

      // reload already installed plugins for which a new configuration was installed
      for (set<string>::iterator it = plugins_to_reload.begin(); it != plugins_to_reload.end(); ++it)
      {
        string plugin = filename_from_path(*it);

        // unregister/unload the already installed plugin
        SDIPluginCtx *old = unregisterPlugin(plugin);

        if (old)
        {
          _LOGF_INFO("%s: Installed plugin '%s' successfully unloaded, reload for new config now...",
                     __func__, old->getFile().c_str());
          delete old; // unload old plugin and free resources
        }
        else
        {
          _LOGF_WARN("%s: Installed plugin '%s' not loaded yet, try reload for new config now...",
                     __func__, plugin.c_str());
        }

        // load the plugin
        SDIPluginCtx *p = new SDIPluginCtx(*it);

        if (!p->loaded())
        {
          delete p;
          _LOGF_ERROR("%s: Failed to reload already installed plugin '%s'", __func__, it->c_str());
          return 0x64FC; // file access error
        }

        // register the plugin for usage in SDI server
        registerPlugin(p);
        _LOGF_INFO("%s: Already installed plugin '%s' successfully reloaded", __func__, it->c_str());
      }


      // install/update/load the new plugins
      for (unsigned i = 0; i < plugins.size(); i++)
      {
        string plugin = filename_from_path(plugins[i]);

        // if the same plugin with was already registered, unregister/unload previous one
        SDIPluginCtx *old = unregisterPlugin(plugin);

        if (old)
        {
          _LOGF_INFO("%s: unload plugin '%s' and replace it with plugin '%s'",
                     __func__, old->getFile().c_str(), plugins[i].c_str());
          delete old; // unload old plugin and free resources
        }

        // copy the plugin to SDI plugins directory
        plugin = pathcat(pdir, plugin);

        if (!copy_file(plugins[i], plugin))
        {
          _LOGF_ERROR("%s: Failed to copy plugin '%s' to '%s'", __func__, plugins[i].c_str(), plugin.c_str());
          return 0x64FC; // file access error
        }

        // load the plugin
        SDIPluginCtx *p = new SDIPluginCtx(plugin);

        if (!p->loaded())
        {
          delete p;
          _LOGF_ERROR("%s: Failed to load installed plugin '%s'", __func__, plugin.c_str());
          return 0x64FC; // file access error
        }

        // register the plugin for usage in SDI server
        registerPlugin(p);

        /* store copy of installed configuration file to persistent
         * partition to make it recoverable for factory reset */
        if (!recover)
        {
          string ppath = pathcat(sdi_persist_dir(), PLUGIN_PREFIX);
          make_dir(ppath); // create subfolder (if not exist yet)
          ppath = pathcat(ppath, filename_from_path(plugins[i]));

          /* move the file (instead copy) due to performance
           * and to wipe file from sdi_update_dir() */
          if (!move_file(plugins[i], ppath))
          {
            _LOGF_ERROR("%s: Failed to move plugin '%s' to '%s'", __func__, plugins[i].c_str(), ppath.c_str());
            return 0x64FC; // file access error
          }
        }

        _LOGF_INFO("%s: Installed plugin '%s' successfully loaded", __func__, plugin.c_str());
      }

      // output the list of loaded plugins
      if (_LOG_LEVEL_ENABLED(LOGAPI_INFO))
      {
        const std::vector<SDIPluginCtx *> &list = getLoadedPlugins();
        string loaded_plugins;

        for (unsigned i = 0; i < list.size(); i++)
        {
          loaded_plugins += list[i]->getFile();

          if (i + 1 < list.size())
          {
            loaded_plugins += "\n";
          }
        }

        if (loaded_plugins.empty())
        {
          _LOGF_INFO("%s: No plugins loaded.", __func__);
        }
        else
        {
          _LOGF_INFO("%s: %zu plugins loaded:\n%s", __func__, list.size(), loaded_plugins.c_str());
        }
      }

      // install EMV CTLS kernels
      if (kernels.size() > 0)
      {
        // Changing a running library causes a crash on next use - unload it
        _LOGF_INFO("%s: Exit CTLS framework (complete mode) before installing kernels", __func__);
        EMV_CTLS_Exit_Framework_extended(EXIT_CTLS_COMPLETE);
      }

      for (unsigned i = 0; i < kernels.size(); i++)
      {
        string fname = filename_from_path(kernels[i]);
        string path = pathcat(pdir, fname);

        if (!copy_file(kernels[i], path))
        {
          _LOGF_ERROR("%s: Failed to copy kernel '%s' to '%s'", __func__, kernels[i].c_str(), path.c_str());
          return 0x64FC; // file access error
        }

        if (!recover)
        {
          string ppath = pathcat(sdi_persist_dir(), PLUGIN_PREFIX);
          make_dir(ppath); // create subfolder (if not exist yet)
          ppath = pathcat(ppath, fname);

          /* move the file (instead copy) due to performance
           * and to wipe file from sdi_update_dir() */
          if (!move_file(kernels[i], ppath))
          {
            _LOGF_ERROR("%s: Failed to move kernel '%s' to '%s'", __func__, kernels[i].c_str(), ppath.c_str());
            return 0x64FC; // file access error
          }
        }

        _LOGF_INFO("%s: EMV CTLS kernel successfully installed to '%s'", __func__, path.c_str());
      }

      return 0x9000; // success
    }

    unsigned short remove_sdi_plugins()
    {
      /***********************************************************
       *             READ AND VALIDATE REMOVAL FILE              *
       ***********************************************************/

      vector<string> files;
      string remove_file = pathcat(sdi_update_dir(), PLUGIN_PREFIX UPDATE_REMOVE_FILE);
      unsigned short ret = readRemovalFile(remove_file, files);
      /* wipe removal file from sdi_update_dir(), once it
       * was read despite of removal will succeed or not. */
      remove(remove_file.c_str());

      if (ret != 0x9000)
      {
        _LOGF_ERROR("%s: Failed to read removal file '%s' (ret=%hu)", __func__, remove_file.c_str(), ret);
        return ret;
      }

      // all files to be removed (SDI plugins, plugin configuration files, EMV CTLS kernels)
      vector<string> remove_list;
      // lookup folder used for different files
      string dir;

      /***********************************************************
       *  GENERATE LIST OF PLUGINS TO BE REMOVED AND UNLOAD THEM *
       ***********************************************************/

      vector<string> plugins; // list of all installed plugins
      dir = ext_plugin_dir();

      if (dir.empty() || get_dir_files(dir.c_str(), &plugins, PLUGIN_PATTERN) < 0)
      {
        _LOGF_ERROR("%s: Internal error, list of installed plugins in folder '%s' cannot be generated",
                    __func__, dir.c_str());
        return 0x64FC; // file access error
      }

      if (plugins.size() > 0)
      {
        for (unsigned i = 0; i < plugins.size(); i++)
        {
          string file = filename_from_path(plugins[i]);

          for (unsigned j = 0; j < files.size(); j++)
          {
            // files[] read from remove.json already expected as regular expression
            if (matchRegex(file.c_str(), files[j].c_str()))
            {
              string filename = filename_from_path(plugins[i]);
              // unregister and unload the plugin
              SDIPluginCtx *p = unregisterPlugin(filename);

              if (p)
              {
                _LOGF_INFO("%s: unloaded plugin '%s' ", __func__, p->getFile().c_str());
                delete p; // unload the plugin and free resources
              }

              // add plugin to removal list
              remove_list.push_back(plugins[i]);
              _LOGF_INFO("%s: Entry files[%u]='%s' in file '%s' matches existing plugin '%s', add to remove list",
                         __func__, j, files[j].c_str(), remove_file.c_str(), plugins[i].c_str());
            }
          }
        }
      }
      else
      {
        _LOGF_INFO("%s: No external plugins installed in '%s', which could be removed.", __func__, dir.c_str());
      }

      /**********************************************************************************
       *  GENERATE LIST OF PLUGINS CONFIG FILES TO BE REMOVED AND UNLOAD RELATED PLUGIN *
       **********************************************************************************/

      vector<string> plugin_cfgs; // list of all installed plugin configuration files
      dir = plugin_config_dir();

      if (dir.empty() || get_dir_files(dir.c_str(), &plugin_cfgs, PLUGIN_CONFIG_PATTERN) < 0)
      {
        _LOGF_ERROR("%s: Internal error, list of installed plugin configuration files in folder '%s' cannot be generated",
                    __func__, dir.c_str());
        return 0x64FC; // file access error
      }

      if (plugin_cfgs.size() > 0)
      {
        for (unsigned i = 0; i < plugin_cfgs.size(); i++)
        {
          string file = filename_from_path(plugin_cfgs[i]);

          for (unsigned j = 0; j < files.size(); j++)
          {
            // files[] read from remove.json already expected as regular expression
            if (matchRegex(file.c_str(), files[j].c_str()))
            {
              // unregister and unload the related plugin belonging to this confiugration file
              string plugin = filename_from_path(plugin_cfgs[i]);
              // replace extension .cfg/json by .so to get related plugin file
              size_t pos = plugin.find_last_of(".");

              if (pos != string::npos)
              {
                plugin.erase(pos);
              }

              plugin += PLUGIN_EXT;

              /* Note: The plugin is just unregistered/unloaded temporarily
               *       and loadPlugins() called below will reload the plugin
               *       again after the related configuration files were removed */
              SDIPluginCtx *p = unregisterPlugin(plugin);

              if (p)
              {
                _LOGF_INFO("%s: unloaded plugin '%s' belonging to configuration file '%s'",
                           __func__, p->getFile().c_str(), plugin_cfgs[i].c_str());
                delete p; // unload the plugin and free resources
              }

              // add plugin configuration file to removal list
              remove_list.push_back(plugin_cfgs[i]);
              _LOGF_INFO("%s: Entry files[%u]='%s' in file '%s' matches existing plugin config file '%s', add to remove list",
                         __func__, j, files[j].c_str(), remove_file.c_str(), plugin_cfgs[i].c_str());
            }
          }
        }
      }
      else
      {
        _LOGF_INFO("%s: No plugin configuration files installed in '%s', which could be removed.", __func__, dir.c_str());
      }

      /*****************************************************
       *  GENERATE LIST OF EMV CTLS KERNELS TO BE REMOVED  *
       *****************************************************/

      vector<string> kernels; // EMV CTLS kernels (there could be multiple versions)
      dir = ext_plugin_dir(); // additional kernels installed to external plugin directory

      if (dir.empty() || get_dir_files(dir.c_str(), &kernels, GCKERNEL_PATTERN) < 0)
      {
        _LOGF_ERROR("%s: Internal error, list of installed EMV CTLS kernels in folder '%s' cannot be generated",
                    __func__, dir.c_str());
        return 0x64FC; // file access error
      }

      bool exit_ctls_framework = false;

      if (kernels.size() > 0)
      {
        for (unsigned i = 0; i < kernels.size(); i++)
        {
          string file = filename_from_path(kernels[i]);

          for (unsigned j = 0; j < files.size(); j++)
          {
            // files[] read from remove.json already expected as regular expression
            if (matchRegex(file.c_str(), files[j].c_str()))
            {
              // add kernel to removal list
              remove_list.push_back(kernels[i]);
              exit_ctls_framework = true;
              _LOGF_INFO("%s: Entry files[%u]='%s' in file '%s' matches existing EMV CTLS kernel '%s', add to remove list",
                         __func__, j, files[j].c_str(), remove_file.c_str(), kernels[i].c_str());
            }
          }
        }
      }
      else
      {
        _LOGF_INFO("%s: No additional EMV CTLS kernel installed in '%s', which could be removed.", __func__, dir.c_str());
      }

      // exit EMV CTLS framework, if kernels were found to be removed
      if (exit_ctls_framework)
      {
        // Changing a running library causes a crash on next use - unload it
        _LOGF_INFO("%s: Exit CTLS framework (complete mode) before removing kernels", __func__);
        EMV_CTLS_Exit_Framework_extended(EXIT_CTLS_COMPLETE);
      }

      /*****************************************************************************
       *   CLEAN UP PERSISTENT PARTITION AND ADD ALL FILES THERE TO REMOVAL LIST   *
       *****************************************************************************/

      plugins.clear();  // plugins
      plugin_cfgs.clear(); // plugin configuration files
      kernels.clear(); // EMV CTLS kernels
      dir = pathcat(sdi_persist_dir(), PLUGIN_PREFIX);
      make_dir(dir);

      if (dir.empty()
          || get_dir_files(dir.c_str(), &plugins, PLUGIN_PATTERN) < 0
          || get_dir_files(dir.c_str(), &plugin_cfgs, PLUGIN_CONFIG_PATTERN) < 0
          || get_dir_files(dir.c_str(), &kernels, GCKERNEL_PATTERN) < 0)
      {
        _LOGF_ERROR("%s: Internal error, file lists of persistend folder '%s' cannot be generated", __func__, dir.c_str());
        return 0x64FC; // file access error
      }

      // concat all files to vector plugins
      if (plugin_cfgs.size() > 0)
      {
        plugins.insert(plugins.end(), plugin_cfgs.begin(), plugin_cfgs.end());
      }

      if (kernels.size() > 0)
      {
        plugins.insert(plugins.end(), kernels.begin(), kernels.end());
      }

      if (plugins.size() > 0)
      {
        for (unsigned i = 0; i < plugins.size(); i++)
        {
          string file = filename_from_path(plugins[i]);

          for (unsigned j = 0; j < files.size(); j++)
          {
            // files[] read from remove.json already expected as regular expression
            if (matchRegex(file.c_str(), files[j].c_str()))
            {
              remove_list.push_back(plugins[i]);
              _LOGF_INFO("%s: Entry files[%u]='%s' in file '%s' matches existing plugin file '%s', add to remove list",
                         __func__, j, files[j].c_str(), remove_file.c_str(), plugins[i].c_str());
            }
          }
        }
      }
      else
      {
        _LOGF_INFO("%s: No plugin files found in persistant folder '%s', which could be removed.", __func__, dir.c_str());
      }

      /***********************************************************
       *         REMOVE ALL PLUGIN FILES OF REMOVAL LIST         *
       ***********************************************************/
      if (remove_list.size() > 0)
      {
        int cnt = remove_files(remove_list, FM_NoAbort);

        if (cnt != (int)remove_list.size())
        {
          _LOGF_ERROR("%s: File access error, couldn't remove all plugin files (%d of %d removed)",
                      __func__, cnt, (int)remove_list.size());
          return 0x64FC; // file access error
        }

        _LOGF_INFO("%s: %d plugin files successfully removed", __func__, cnt);
      }
      else
      {
        _LOGF_INFO("%s: Entries in file '%s' don't match any plugin files.",
                   __func__, remove_file.c_str());
      }

      /***********************************************************
       *             IF REQUIRED, RELOAD PLUGINS                 *
       ***********************************************************/

      /* we must call loadPlugins() to load an internal plugin again,
       * if the external plugin has replaced the internal plugin and
       * the external plugin was removed. In addition, a plugin was
       * unloaded, if configuration for the plugin was removed.
       * If the related plugin wasn't already removed, it will be reloaded.
       * Note: Already loaded plugins are NOT reloaded with this call. */
      const std::vector<SDIPluginCtx *> &list = loadPlugins(false);

      // output the list of loaded plugins
      if (_LOG_LEVEL_ENABLED(LOGAPI_INFO))
      {
        string loaded_plugins;

        for (unsigned i = 0; i < list.size(); i++)
        {
          loaded_plugins += list[i]->getFile();

          if (i + 1 < list.size())
          {
            loaded_plugins += "\n";
          }
        }

        if (loaded_plugins.empty())
        {
          _LOGF_INFO("%s: No plugins loaded.", __func__);
        }
        else
        {
          _LOGF_INFO("%s: %zu plugin%s loaded:\n%s",
                     __func__, list.size(), list.size() > 1 ? "s" : "", loaded_plugins.c_str());
        }
      }

      return 0x9000; // success
    }
#endif // #ifndef _STM32

#endif

  }
} // namespace sdi::filesystem
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
