---
title: pm-demo.cpp

---

# pm-demo.cpp



```cpp

// sdk
#include <string>
#include <stdio.h>
#include <time.h>
#include <sys/time.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

// adk
#include "html/gui.h"
#include "ipc/jsobject.h"
#include "ipc/notify.h"
#include "log/liblog2.h"
#include "sysinfo/vfisyspm.h"

// constants
enum
{
    STATE,
    ACTIVE,
    STANDBY,
    SLEEP,
    DEEP_SLEEP,
    HIBERNATE,
    SHUTDOWN,
    REBOOT,
    REBOOT_DOCK,
    SYSMODE,
    CRIT_ENTER,
    CRIT_EXIT,
    CRIT_STATE,
    SET_PCI_REBOOT_TIME,
    GET_PCI_REBOOT_TIME,
    CLEAR_PCI_REBOOT_TIME,
    TIMER,
    CAR_CHARGER,
    REBOOT_REASON,
    PCP,
    VER,
    VER_SVC,
    EXIT,
};  

const vfigui::UIMenuEntry menu[]=
{
        {"Current state",               STATE,                     0},
        {"Standby",                     STANDBY,                   0},
        {"Sleep",                       SLEEP,                     0},
        {"Deep Sleep",                  DEEP_SLEEP,                0},
        {"Hibernate",                   HIBERNATE,                 0},
        {"Shutdown",                    SHUTDOWN,                  0},
        {"Reboot",                      REBOOT,                    0},
        {"Reboot dock station",         REBOOT_DOCK,               0},
        {"Critical section enter",      CRIT_ENTER,                0},
        {"Critical section exit",       CRIT_EXIT,                 0},
        {"Critical section state",      CRIT_STATE,                0},
        {"Car charger",                 CAR_CHARGER,               0},
        {"Enter sysmode",               SYSMODE,                   0},
        {"Get PCI reboot time",         GET_PCI_REBOOT_TIME,       0},
        {"Set PCI reboot time",         SET_PCI_REBOOT_TIME,       0},
        {"Clear PCI reboot time",       CLEAR_PCI_REBOOT_TIME,     0},
        {"Timer in 90 sec",             TIMER,                     0},
        {"PM lib version",              VER,                       0},
        {"PM svc version",              VER_SVC,                   0},
        {"Get reboot reason",           REBOOT_REASON,             0},
        {"Power control panel",         PCP,                       0},
        {"Exit",                        EXIT,                      0},
};  
 
// local functions
static void timer_cb( const vfiipc::JSObject & json ); // timer callback
static void convert(struct tm & t, vfisyspm::vfisyspm_DateTime & date);
static void notification_cb(vfisyspm::vfisyspmNotificationType type, vfisyspm::vfisyspmNotifications notification);
static int launch_pcp();


// variables
LibLogHandle lh = LOGAPI_INIT( "PMDEMO" );

int main()
{   
    vfiipc::ipcSetAppID("PMDEMO");
    vfisyspm::vfisyspmError returnCode = vfisyspm::sys_Init();
    vfisyspm::sys_SetNotificationCB( notification_cb, vfisyspm::PM_NOTIFY_TYPE_ALL );
    vfigui::uiSetPropertyInt(vfigui::UI_PROP_CIRCULAR_MENU,1);
    bool loop = true;
    int s=0;
    while(loop)
    {
        s=uiMenu("mainmenu","ADK-PM demo",menu,sizeof(menu)/sizeof(menu[0]),s>=0?s:0);
        if(s==vfigui::UI_ERR_CONNECTION_LOST) break;

        switch(s)
        {
            case CAR_CHARGER:
            {
                returnCode = vfisyspm::sys_SetChargingMode(vfisyspm::PM_CHARGING_MODE_CAR_CHARGER);
                break;
            } 
            case SYSMODE:
            {
                returnCode = vfisyspm::sys_StartSysmode();
                break;
            } 
            case GET_PCI_REBOOT_TIME:
            {
                struct vfisyspm::vfisyspm_DateTime rebootTime;
                returnCode = vfisyspm::sys_GetPciRebootTime(&rebootTime);
                if(vfisyspm::SYS_PM_ERR_OK==returnCode)
                {
                    vfigui::uiConfirm("confirm",
                            vfigui::uiPrint( "PCI reboot time is set to:<br>%d:%d:%d",
                                rebootTime.tm_hour,
                                rebootTime.tm_min,
                                rebootTime.tm_sec));
                }
                else
                {
                    const std::string error = sys_StrError(returnCode);
                    vfigui::uiConfirm("confirm","Error:<br>"+error);
                }
                break;
            }
            case SET_PCI_REBOOT_TIME:
            {
                time_t requested_time;
                time(&requested_time);
                requested_time += 60*7;
                struct vfisyspm::vfisyspm_DateTime rebootTime;
                struct tm t;
                localtime_r(&requested_time,&t);
                convert(t,rebootTime);
                returnCode = vfisyspm::sys_SetPciRebootTime(&rebootTime);
                const std::string error = sys_StrError(returnCode);
                vfigui::uiConfirm("confirm","PCI reboot time is set:<br>"+error);
                break;
            }
            case CLEAR_PCI_REBOOT_TIME:
            {
                returnCode = vfisyspm::sys_ClearPciRebootTime();
                const std::string error = sys_StrError(returnCode);
                vfigui::uiConfirm("confirm","PCI reboot time is set to 24 hours uptime:<br>"+error);
                break;
            }
            case ACTIVE:
            {
                returnCode = vfisyspm::sys_Active();
                const std::string error = sys_StrError(returnCode);
                vfigui::uiConfirm("confirm","Active:<br>"+error);
                break;
            }
            case STANDBY:
            {
                returnCode = vfisyspm::sys_Standby();
                const std::string error = sys_StrError(returnCode);
                vfigui::uiConfirm("confirm","Standby:<br>"+error);
                break;
            }
            case SLEEP:
            {
                returnCode = vfisyspm::sys_Sleep();
                const std::string error = sys_StrError(returnCode);
                vfigui::uiConfirm("confirm","Sleep:<br>"+error);
                break;
            }
            case DEEP_SLEEP:
            {
                const int flags = vfisyspm::PM_SUPPRESS_ALL | vfisyspm::PM_SYNC;
                returnCode = vfisyspm::sys_DeepSleep(flags);
                const std::string error = sys_StrError(returnCode);
                vfigui::uiConfirm("confirm","Deep sleep:<br>"+error);
                break;
            }
            case HIBERNATE:
            {
                returnCode = vfisyspm::sys_Hibernate();
                const std::string error = sys_StrError(returnCode);
                vfigui::uiConfirm("confirm","Hibernate:<br>"+error);
                break;
            }
            case SHUTDOWN:
            {
                returnCode = vfisyspm::sys_Shutdown();
                const std::string error = sys_StrError(returnCode);
                vfigui::uiConfirm("confirm","Shut Down:<br>"+error);
                break;
            }
            case REBOOT:
            {
                returnCode = vfisyspm::sys_Reboot();
                const std::string error = sys_StrError(returnCode);
                vfigui::uiConfirm("confirm","Reboot:<br>"+error);
                break;
            }
            case REBOOT_DOCK:
            {
                returnCode = vfisyspm::sys_RebootDock();
                const std::string error = sys_StrError(returnCode);
                vfigui::uiConfirm("confirm","Reboot dock station:<br>"+error);
                break;
            }
            case CRIT_STATE:
            {
                bool state = true;
                returnCode = vfisyspm::sys_CriticalSectionState( state );
                vfigui::uiConfirm("confirm", vfigui::uiPrint( "Critical Section State:<br>%d",state));
                break;
            }
            case CRIT_ENTER:
            {
                returnCode = vfisyspm::sys_CriticalSectionEnter();
                const std::string error = sys_StrError(returnCode);
                vfigui::uiConfirm("confirm","Critical Section Enter:<br>"+error);
                break;
            }
            case CRIT_EXIT:
            {
                returnCode = vfisyspm::sys_CriticalSectionExit();
                const std::string error = sys_StrError(returnCode);
                vfigui::uiConfirm("confirm","Critical Section Exit:<br>"+error);
                break;
            }
            case STATE:
            {
                vfisyspm::powermngtState state;
                returnCode = vfisyspm::sys_GetCurrentState( state );
                vfigui::uiConfirm("confirm", vfigui::uiPrint( "PM State:<br>%d",state));
                break;
            }   
            case TIMER:
            {
                const std::string message("timer for 90 seconds");
                vfisyspm::timerHandle handle;
                returnCode = vfisyspm::SYS_PM_ERR_FAIL;
                time_t requested_time;
                time(&requested_time);
                requested_time += 90;
                returnCode = vfisyspm::sys_SetTimer( handle, requested_time, message, timer_cb );
                const std::string error = sys_StrError(returnCode);
                vfigui::uiConfirm("confirm","Timer is set 90 sec:<br>"+error);
                break;
            }
            case REBOOT_REASON:
            {
                std::string reason;
                returnCode = vfisyspm::sys_GetRebootReason(reason);
                vfigui::uiConfirm("confirm","Reboot reason:<br>"+reason);
                break;   
            } 
            case VER:
            {
                const std::string version = vfisyspm::sys_GetVersion();
                vfigui::uiConfirm("confirm","PM LIB ver:<br>"+version);
                returnCode = vfisyspm::SYS_PM_ERR_OK;
                break;
            }
            case VER_SVC:
            {
                const std::string version = vfisyspm::sys_GetSvcVersion();
                vfigui::uiConfirm("confirm","PM SVC ver:<br>"+version);
                returnCode = vfisyspm::SYS_PM_ERR_OK;
                break;
            }
            case PCP:
            {
                launch_pcp();
                break;
            }
            case EXIT:
            {
                loop=false;
                break;
            }
            default:
            {
                break;
            }
        }
    }

    vfisyspm::sys_Deinit();

    return returnCode;
}

static void convert(struct tm & t, vfisyspm::vfisyspm_DateTime & date)
{
   date.tm_sec = t.tm_sec;
   date.tm_min = t.tm_min;
   date.tm_hour = t.tm_hour;
   date.tm_mday = t.tm_mday;
   date.tm_mon = t.tm_mon;
   date.tm_year = t.tm_year;
   date.tm_wday = t.tm_wday;
   date.tm_yday = t.tm_yday;
   date.tm_isdst = t.tm_isdst;
}

static void timer_cb( const vfiipc::JSObject & json )
{
    LOGF_TRACE(lh,"Timer expired[%s]",json.dump().c_str());
    vfisyspm::sys_Standby();
}

static void notification_cb(vfisyspm::vfisyspmNotificationType type, vfisyspm::vfisyspmNotifications notification)
{
    LOGF_TRACE(lh,"callback notificaiton[%d] type[%d]",notification, type);
}

static int launch_pcp()
{
    const std::string trigger("_MacControlRequest");
    const std::string cmd_field("cmd");
    const std::string args_field("args");
    const std::string mac_id("_mac");
    const std::string cmd("launch_appid");
    const std::string appid_field("appid");
    const std::string appid("pcp");

    vfiipc::JSObject jsobj;
    jsobj(cmd_field)=cmd;
    jsobj(appid_field)=appid;
    jsobj(args_field)[0]="-l";
    jsobj(args_field)[1]="lv-LV.ctlg";
    return vfiipc::ipcNotify(mac_id,trigger,jsobj); 
} 

```

_Filename: pm-demo.cpp_

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100
