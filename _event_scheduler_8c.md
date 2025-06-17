---
title: tmsagt/src/EventScheduler/EventScheduler.c

---

# tmsagt/src/EventScheduler/EventScheduler.c

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[_running_event_t](struct__running__event__t.md)**  |
| struct | **[callback_stack_t](structcallback__stack__t.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[process_event_sets_state_t](_event_scheduler_8c.md#enum-process-event-sets-state-t)** { PES_STATE_INITIAL, PES_STATE_RUNNING, PES_STATE_EVENT_COMPLETED, PES_STATE_COMPLETED} |
| typedef struct [_running_event_t](struct__running__event__t.md) | **[running_event_t](_event_scheduler_8c.md#typedef-running-event-t)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[PrintEventSetTable](_event_scheduler_8c.md#function-printeventsettable)**(char * description)<br>Prints the event set table for debugging.  |
| uint32 | **[NumEventSlotsFilled](_event_scheduler_8c.md#function-numeventslotsfilled)**(void ) |
| uint32 | **[NumRemainingEventSlots](_event_scheduler_8c.md#function-numremainingeventslots)**(void ) |
| bool | **[EventSetInRunningTable](_event_scheduler_8c.md#function-eventsetinrunningtable)**(event_set_id_t event_set_id) |
| char * | **[cbEnumToStr](_event_scheduler_8c.md#function-cbenumtostr)**(callback_t eCallback) |
| char * | **[event_cbEnumToStr](_event_scheduler_8c.md#function-event-cbenumtostr)**(event_table_t * event_entry) |
| int | **[GetCommId](_event_scheduler_8c.md#function-getcommid)**(event_table_t * eventdata) |
| int | **[GetMsgId](_event_scheduler_8c.md#function-getmsgid)**(event_table_t * eventdata) |
| srv_op_type_t | **[GetSrvOpType](_event_scheduler_8c.md#function-getsrvoptype)**(event_table_t * eventdata) |
| void | **[ClearCBStack](_event_scheduler_8c.md#function-clearcbstack)**() |
| void | **[RestoreCallbackFunction](_event_scheduler_8c.md#function-restorecallbackfunction)**(event_table_t * event_table, uint8 num_events, char * executing_index, uint32 version) |
| bool | **[ReadEventSchedFile_Version1](_event_scheduler_8c.md#function-readeventschedfile-version1)**(int iFile, event_set_table_t * event_set_table_p) |
| void | **[remove_events_table](_event_scheduler_8c.md#function-remove-events-table)**() |
| bool | **[ReadEventSchedFile](_event_scheduler_8c.md#function-readeventschedfile)**(int iFile, event_set_table_t * event_set_table_p, uint32 version, uint32 num_entries) |
| void | **[ReadVersion0EventSetTable](_event_scheduler_8c.md#function-readversion0eventsettable)**(void ) |
| void | **[ReadR10Version2EventSetTable](_event_scheduler_8c.md#function-readr10version2eventsettable)**(void ) |
| int | **[SearchEventSetHeadsInTable](_event_scheduler_8c.md#function-searcheventsetheadsintable)**(event_set_table_t * local_event_set, event_set_table_t * local_event_set_table, unsigned int local_event_set_table_records_count) |
| bool | **[saveEventToFlash](_event_scheduler_8c.md#function-saveeventtoflash)**(const event_set_table_t * event_set) |
| bool | **[CompareEventSetTable](_event_scheduler_8c.md#function-compareeventsettable)**() |
| int | **[GetFirstEventIndex](_event_scheduler_8c.md#function-getfirsteventindex)**() |
| bool | **[IsDependencyOpSetInTable](_event_scheduler_8c.md#function-isdependencyopsetintable)**(uint32 dependent) |
| int | **[GetFirstToRunEventIndex](_event_scheduler_8c.md#function-getfirsttoruneventindex)**(bool include_running_event) |
| bool | **[isVHQAgentsRecurHB](_event_scheduler_8c.md#function-isvhqagentsrecurhb)**(const event_set_table_t * event_set) |
| bool | **[mutex_xlock](_event_scheduler_8c.md#function-mutex-xlock)**(bool islock, char * mutext_name, pthread_mutex_t * mutex) |
| void | **[SaveEventSetTable](_event_scheduler_8c.md#function-saveeventsettable)**(void )<br>Save the event set table for restoration after rebooting.  |
| void | **[OrderEventSetTable](_event_scheduler_8c.md#function-ordereventsettable)**(void )<br>Puts the event set table in the correct order since it can get out of order if the date/time of the device get changed.  |
| bool | **[ReadEventSchedHeader](_event_scheduler_8c.md#function-readeventschedheader)**(char * event_set_file) |
| bool | **[RestoreEventSetTable](_event_scheduler_8c.md#function-restoreeventsettable)**(void )<br>Restore the event set table at start.  |
| void | **[update_next_run_time_for_recur_event](_event_scheduler_8c.md#function-update-next-run-time-for-recur-event)**(event_set_table_t * event) |
| bool | **[AbortOnError](_event_scheduler_8c.md#function-abortonerror)**(event_table_t * eventdata) |
| bool | **[UpdateRecurCount](_event_scheduler_8c.md#function-updaterecurcount)**(event_table_t * eventdata) |
| void | **[EventSchedSendFailedStatus](_event_scheduler_8c.md#function-eventschedsendfailedstatus)**(event_set_table_t * event_set, int event_fail_index, vhq_result_t failure) |
| void | **[setupPostponedEventSet](_event_scheduler_8c.md#function-setuppostponedeventset)**(event_set_table_t * posponedEventSet, int event_index, event_result_t event_res) |
| void * | **[EventSchedulerInitCallbackTable](_event_scheduler_8c.md#function-eventschedulerinitcallbacktable)**(char * pszOperatingMode) |
| void | **[sighandler](_event_scheduler_8c.md#function-sighandler)**(int signum, siginfo_t * siginfo, void * context) |
| bool | **[hbIsActive](_event_scheduler_8c.md#function-hbisactive)**(void ) |
| bool | **[deviceEventIsActive](_event_scheduler_8c.md#function-deviceeventisactive)**(void ) |
| bool | **[EventSetCurrentlyRunning](_event_scheduler_8c.md#function-eventsetcurrentlyrunning)**(int EventSetIndex) |
| bool | **[EventAllowedInOpenSlot](_event_scheduler_8c.md#function-eventallowedinopenslot)**(int event_index) |
| void | **[ClearRunningEvents](_event_scheduler_8c.md#function-clearrunningevents)**() |
| int | **[GetOpenEventSlot](_event_scheduler_8c.md#function-getopeneventslot)**() |
| int | **[NumOpenEventSlots](_event_scheduler_8c.md#function-numopeneventslots)**() |
| int | **[EventIsRunning](_event_scheduler_8c.md#function-eventisrunning)**(event_set_id_t event_set_id, event_id_t event_id) |
| bool | **[EventIsCompleted](_event_scheduler_8c.md#function-eventiscompleted)**() |
| bool | **[EventIsDownload](_event_scheduler_8c.md#function-eventisdownload)**(int event_set_index) |
| bool | **[EventReadyToLaunch](_event_scheduler_8c.md#function-eventreadytolaunch)**(int * event_set_index) |
| int | **[NumRunningEvents](_event_scheduler_8c.md#function-numrunningevents)**() |
| bool | **[GetEventSetTableIndexes](_event_scheduler_8c.md#function-geteventsettableindexes)**(int running_event_index, event_set_table_t * event_set, int * event_index) |
| pre_post_event_result_t | **[PerformPreEventCB](_event_scheduler_8c.md#function-performpreeventcb)**(callback_t eCallback, pre_post_callback_t preEventCbType, event_set_id_t event_set_id, event_id_t event_id, bool app_approval_required) |
| pre_post_event_result_t | **[PerformPostEventCB](_event_scheduler_8c.md#function-performposteventcb)**(pre_post_callback_t postEventCbType) |
| void | **[FailEventCallback](_event_scheduler_8c.md#function-faileventcallback)**(pre_post_callback_t preEventCbType) |
| pre_post_event_result_t | **[PushEventCallback](_event_scheduler_8c.md#function-pusheventcallback)**(callback_t eCallback, pre_post_callback_t preEventCbType, int event_set_id, int event_id, bool app_approval_required) |
| pre_post_event_result_t | **[PopEventCallbacks](_event_scheduler_8c.md#function-popeventcallbacks)**() |
| event_result_t | **[LaunchEvent](_event_scheduler_8c.md#function-launchevent)**(callback_t eCallback, pre_post_callback_t ePreCallback, pre_post_callback_t ePostCallback, event_set_id_t event_set_id, event_id_t event_id, void * pvCbData, bool continuation) |
| void | **[MonitorEvents](_event_scheduler_8c.md#function-monitorevents)**() |
| void | **[SYNCnewEventSetWithTable](_event_scheduler_8c.md#function-syncneweventsetwithtable)**(event_set_table_t * newEventSet) |
| void | **[CancelEventTimer](_event_scheduler_8c.md#function-canceleventtimer)**() |
| bool | **[CleanEventTableForHB](_event_scheduler_8c.md#function-cleaneventtableforhb)**(const event_set_table_t * newEventSet)<br>Provides logic of HBs processing to allow at least one for registration purposes in case if table is full.  |
| bool | **[AddEventSetToTable](_event_scheduler_8c.md#function-addeventsettotable)**(event_set_table_t * newEventSet, bool start_timer)<br>Adds a new event to the event table.  |
| bool | **[AddAndLaunchActionEvent](_event_scheduler_8c.md#function-addandlaunchactionevent)**(event_set_table_t * dlEventSet, term_action_t action)<br>Adds a reboot event to the table and launches it (used when a suppressed reboot during download is required)  |
| bool | **[UpdateEventSetExecutingIndexToTable](_event_scheduler_8c.md#function-updateeventsetexecutingindextotable)**(event_set_table_t * updatedEventSet) |
| bool | **[GetTimerExpired](_event_scheduler_8c.md#function-gettimerexpired)**() |
| char * | **[pesStateToStr](_event_scheduler_8c.md#function-pesstatetostr)**([process_event_sets_state_t](_event_scheduler_8c.md#enum-process-event-sets-state-t) state) |
| int | **[numKeyExchangeEventsInTable](_event_scheduler_8c.md#function-numkeyexchangeeventsintable)**(void ) |
| bool | **[isDownloadEventSetPresent](_event_scheduler_8c.md#function-isdownloadeventsetpresent)**(void ) |
| void | **[CleanupCompletedEvent](_event_scheduler_8c.md#function-cleanupcompletedevent)**(event_set_table_t * event_set, int event_index, event_result_t event_res, char * current_instance, bool release_instance) |
| event_set_id_t | **[EventSetExists](_event_scheduler_8c.md#function-eventsetexists)**(uint32 opSetId, operation_set_event_t psOpSetData[], uint32 dwOpSetDataArraySize) |
| bool | **[ProcessEventSets](_event_scheduler_8c.md#function-processeventsets)**(void )<br>Calls the appropriate callbacks for event sets that have expired.  |
| void * | **[EventScheduler](_event_scheduler_8c.md#function-eventscheduler)**(void * pvData)<br>The event sheduler task's main loop.  |
| bool | **[EventSchedulerInitialized](_event_scheduler_8c.md#function-eventschedulerinitialized)**(void ) |
| event_set_id_t | **[ScheduleEventSet](_event_scheduler_8c.md#function-scheduleeventset)**(bool bRecurring, long int dwFirstRun, recur_unit_t recurUnits, uint32 dwRecurPeriod, long int tExpiration, uint32 dwRetryFreq, uint32 opSetId, operation_set_event_t psOpSetData[], uint32 dwOpSetDataArraySize, event_set_id_t dependency_event_set_id, event_timer_t timerType, char * pszServerInstance, pre_post_callback_t preEventCbType, pre_post_callback_t postEventCbType, bool keyExchangeEventSet) |
| void | **[CleanUpEventSet](_event_scheduler_8c.md#function-cleanupeventset)**(int event_set_index)<br>Cleans up an event set.  |
| bool | **[CancelEventSetThreadSafe](_event_scheduler_8c.md#function-canceleventsetthreadsafe)**(event_set_id_t event_set_id, bool cancel_dependent_events)<br>Cancels a pending event set called by CancelEventSet.  |
| bool | **[CancelEventSet](_event_scheduler_8c.md#function-canceleventset)**(event_set_id_t event_set_id, bool cancel_dependent_events)<br>Cancels a pending event set.  |
| vhq_result_t | **[CancelEventSetByOpId](_event_scheduler_8c.md#function-canceleventsetbyopid)**(uint32 opSetId)<br>Cancels a pending event set by Operation Set ID.  |
| uint32 | **[GetInitialTimerVal](_event_scheduler_8c.md#function-getinitialtimerval)**(void ) |
| void | **[LockEventScheduler](_event_scheduler_8c.md#function-lockeventscheduler)**(bool lock) |
| bool | **[FileRequiredByEvent](_event_scheduler_8c.md#function-filerequiredbyevent)**(char * fn) |
| bool | **[DownloadOpSetInProgress](_event_scheduler_8c.md#function-downloadopsetinprogress)**(void ) |
| char * | **[GetOperationIdForEvent](_event_scheduler_8c.md#function-getoperationidforevent)**(int event_set_index, int event_index) |
| void | **[SetCompleteFlag](_event_scheduler_8c.md#function-setcompleteflag)**(uint32 opSetId, char * OpId, bool continuation_required, bool event_failed) |
| char * | **[GetApprovalMaskStr](_event_scheduler_8c.md#function-getapprovalmaskstr)**(uint32 approval_mask) |
| void | **[SetApprovalFlag](_event_scheduler_8c.md#function-setapprovalflag)**(event_set_id_t event_set_id, event_id_t event_id, uint32 approval_mask) |
| bool | **[GetApprovalFlag](_event_scheduler_8c.md#function-getapprovalflag)**(uint32 opSetId, char * OpId, uint32 mask, bool * isLastOp) |
| bool | **[GetExecutingIndex](_event_scheduler_8c.md#function-getexecutingindex)**(uint32 opSetId, int * executing_index) |
| void | **[SetEventSchedulerTimerExpired](_event_scheduler_8c.md#function-seteventschedulertimerexpired)**(bool timer_exp_val) |
| void | **[StartEventTimer](_event_scheduler_8c.md#function-starteventtimer)**(struct itimerval new_tv) |
| bool | **[EventSchedulerLock](_event_scheduler_8c.md#function-eventschedulerlock)**(int timeout) |
| bool | **[EventSchedulerUnlock](_event_scheduler_8c.md#function-eventschedulerunlock)**(void ) |
| uint32 | **[GetSecondsToNextEvent](_event_scheduler_8c.md#function-getsecondstonextevent)**(bool include_running_event) |
| void | **[EventSchedulerPetWatchdog](_event_scheduler_8c.md#function-eventschedulerpetwatchdog)**(event_set_id_t event_set_id, event_id_t event_id) |
| time_t | **[GetEventExpiryTime](_event_scheduler_8c.md#function-geteventexpirytime)**(event_set_id_t event_set_id, event_timer_t timer_type) |
| bool | **[ClearInstanceEventSetsTable](_event_scheduler_8c.md#function-clearinstanceeventsetstable)**(char * serverInstance, bool isForKeysExchangeReset) |
| void | **[ClearEventsTable](_event_scheduler_8c.md#function-cleareventstable)**(void ) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| const struct timespec | **[MONITOR_THREAD_CHECK_PERIOD](_event_scheduler_8c.md#variable-monitor-thread-check-period)**  |
| bool | **[timer_expired](_event_scheduler_8c.md#variable-timer-expired)**  |
| event_id_t | **[_cur_event_id](_event_scheduler_8c.md#variable--cur-event-id)**  |
| bool | **[_event_scheduler_locked](_event_scheduler_8c.md#variable--event-scheduler-locked)**  |
| bool | **[_eventSchedulerInited](_event_scheduler_8c.md#variable--eventschedulerinited)**  |
| pthread_mutex_t | **[event_table_mutex](_event_scheduler_8c.md#variable-event-table-mutex)**  |
| uint32 | **[_initial_timer_val](_event_scheduler_8c.md#variable--initial-timer-val)**  |
| int | **[request_Qid](_event_scheduler_8c.md#variable-request-qid)**  |
| int | **[response_Qid](_event_scheduler_8c.md#variable-response-qid)**  |
| event_set_id_t | **[_cur_event_set_id](_event_scheduler_8c.md#variable--cur-event-set-id)**  |
| event_set_table_t[MAX_EVENT_SETS] | **[event_set_table](_event_scheduler_8c.md#variable-event-set-table)**  |
| event_set_file_header_t | **[event_set_file_header](_event_scheduler_8c.md#variable-event-set-file-header)**  |
| EventSchedulerCB[] | **[acbCallbackTable](_event_scheduler_8c.md#variable-acbcallbacktable)**  |
| [running_event_t](_event_scheduler_8c.md#typedef-running-event-t)[MAX_CONCURRENT_EVENTS] | **[running_events](_event_scheduler_8c.md#variable-running-events)**  |
| [callback_stack_t](structcallback__stack__t.md)[cbMAXTypes] | **[callback_stack](_event_scheduler_8c.md#variable-callback-stack)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAX_CONCURRENT_EVENTS](_event_scheduler_8c.md#define-max-concurrent-events)**  |
|  | **[REBOOT_EVENT_AFTER_LAST_DL_IN_OP_SET](_event_scheduler_8c.md#define-reboot-event-after-last-dl-in-op-set)**  |
|  | **[MIDNIGHT](_event_scheduler_8c.md#define-midnight)**  |
|  | **[SEVENTY_YEAR_OFFSET](_event_scheduler_8c.md#define-seventy-year-offset)**  |
|  | **[PRINT_EVENT_SET_TABLE](_event_scheduler_8c.md#define-print-event-set-table)**(a)  |
|  | **[COMPARE_EVENT_SET_TABLE_DEBUG](_event_scheduler_8c.md#define-compare-event-set-table-debug)**  |
|  | **[COMPARE_EVENT_SET_TABLE_DEBUG_PRINT](_event_scheduler_8c.md#define-compare-event-set-table-debug-print)**(arg...)  |
|  | **[NO_EVENTS_TABLES](_event_scheduler_8c.md#define-no-events-tables)**  |
|  | **[EVENTS_TABLE_FILE_LENGTH](_event_scheduler_8c.md#define-events-table-file-length)**  |
|  | **[DEFAULT_WAIT](_event_scheduler_8c.md#define-default-wait)**  |

## Detailed Description


Main [Event](struct_event.md) Scheduler operations 

## Types Documentation

### enum process_event_sets_state_t

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PES_STATE_INITIAL | |   |
| PES_STATE_RUNNING | |   |
| PES_STATE_EVENT_COMPLETED | |   |
| PES_STATE_COMPLETED | |   |




### typedef running_event_t

```cpp
typedef struct _running_event_t running_event_t;
```



## Functions Documentation

### function PrintEventSetTable

```cpp
static void PrintEventSetTable(
    char * description
)
```

Prints the event set table for debugging. 

**Parameters**: 

  * **description** - a description printed at the beginning of the debug block 


**Return**: None 

### function NumEventSlotsFilled

```cpp
static uint32 NumEventSlotsFilled(
    void 
)
```


**Parameters**: 

  * **void** 


**Return**: uint32, total number of events 

This function returns the total number of events filled from the events set table. 


### function NumRemainingEventSlots

```cpp
static uint32 NumRemainingEventSlots(
    void 
)
```


**Parameters**: 

  * **void** 


**Return**: uint32, remaining event slots 

This function returns the total number of event slots remaining in event set table. 


### function EventSetInRunningTable

```cpp
static bool EventSetInRunningTable(
    event_set_id_t event_set_id
)
```


**Parameters**: 

  * **event_set_id** = event set ID of event to check.


**Return**: TRUE, if running. 

This function checks whether an event set is currenlty running in running table. 


### function cbEnumToStr

```cpp
static char * cbEnumToStr(
    callback_t eCallback
)
```


### function event_cbEnumToStr

```cpp
static char * event_cbEnumToStr(
    event_table_t * event_entry
)
```


### function GetCommId

```cpp
static int GetCommId(
    event_table_t * eventdata
)
```


### function GetMsgId

```cpp
static int GetMsgId(
    event_table_t * eventdata
)
```


### function GetSrvOpType

```cpp
static srv_op_type_t GetSrvOpType(
    event_table_t * eventdata
)
```


### function ClearCBStack

```cpp
static void ClearCBStack()
```


**Parameters**: 

  * **void** 


**Return**: void 

This function clears the callback stack details and saves default values to callback stack. 


### function RestoreCallbackFunction

```cpp
static void RestoreCallbackFunction(
    event_table_t * event_table,
    uint8 num_events,
    char * executing_index,
    uint32 version
)
```


### function ReadEventSchedFile_Version1

```cpp
static bool ReadEventSchedFile_Version1(
    int iFile,
    event_set_table_t * event_set_table_p
)
```


**Parameters**: 

  * **iFile** = file pointer to event set file 
  * **event_set_table_p** = pointer to event set table.


**Return**: TRUE, if success. 

This function reads the event set file which has header version1. 


### function remove_events_table

```cpp
static void remove_events_table()
```


### function ReadEventSchedFile

```cpp
static bool ReadEventSchedFile(
    int iFile,
    event_set_table_t * event_set_table_p,
    uint32 version,
    uint32 num_entries
)
```


**Parameters**: 

  * **iFile** = file pointer to event set file 
  * **event_set_table_p** = pointer to event set table. 
  * **version** = event set file header version 
  * **num_entries** = number of event sets


**Return**: TRUE, if successful 

This function reads the event set file according to the event set file header version. 


### function ReadVersion0EventSetTable

```cpp
static void ReadVersion0EventSetTable(
    void 
)
```


**Parameters**: 

  * **void** 


**Return**: void 

This function reads the version0 event set table stored in VHQ_EVENT_SET_FILE and saves each event set and its event data details to current event table.There are multiple versions of event tables existing. 


### function ReadR10Version2EventSetTable

```cpp
static void ReadR10Version2EventSetTable(
    void 
)
```


**Parameters**: 

  * **void** 


**Return**: void 

This function reads the version2 event set table stored in VHQ_EVENT_SET_FILE and saves each event set and its event data details to current event table. 


### function SearchEventSetHeadsInTable

```cpp
static inline int SearchEventSetHeadsInTable(
    event_set_table_t * local_event_set,
    event_set_table_t * local_event_set_table,
    unsigned int local_event_set_table_records_count
)
```


### function saveEventToFlash

```cpp
static bool saveEventToFlash(
    const event_set_table_t * event_set
)
```


### function CompareEventSetTable

```cpp
static bool CompareEventSetTable()
```


### function GetFirstEventIndex

```cpp
static int GetFirstEventIndex()
```


### function IsDependencyOpSetInTable

```cpp
static bool IsDependencyOpSetInTable(
    uint32 dependent
)
```


**Parameters**: 

  * **dependent** = dependency opset event set to check for


**Return**: TRUE, if found. 

This function checks if there is a dependency opset event in event table. 


### function GetFirstToRunEventIndex

```cpp
static int GetFirstToRunEventIndex(
    bool include_running_event
)
```


**Parameters**: 

  * **void** 


**Return**: int, the index to run first 

This function returns the event table index to run first. 


### function isVHQAgentsRecurHB

```cpp
static bool isVHQAgentsRecurHB(
    const event_set_table_t * event_set
)
```


### function mutex_xlock

```cpp
static bool mutex_xlock(
    bool islock,
    char * mutext_name,
    pthread_mutex_t * mutex
)
```


**Parameters**: 

  * **islock** = TRUE, if needs to be locked 
  * **mutext_name** = name of mutex 
  * **mutex** = mutex to be locked/unlocked


**Return**: TRUE, if success 

This function locks or unlocks a mutex 


### function SaveEventSetTable

```cpp
void SaveEventSetTable(
    void 
)
```

Save the event set table for restoration after rebooting. 

**Return**: None 

### function OrderEventSetTable

```cpp
static void OrderEventSetTable(
    void 
)
```

Puts the event set table in the correct order since it can get out of order if the date/time of the device get changed. 

**Return**: None: on failure, simply run as if no scheduled events are present 

### function ReadEventSchedHeader

```cpp
static bool ReadEventSchedHeader(
    char * event_set_file
)
```


### function RestoreEventSetTable

```cpp
bool RestoreEventSetTable(
    void 
)
```

Restore the event set table at start. 

**Return**: None: on failure, simply run as if no scheduled events are present 

### function update_next_run_time_for_recur_event

```cpp
static void update_next_run_time_for_recur_event(
    event_set_table_t * event
)
```


**Parameters**: 

  * **event** = pointer to the recurring event.


**Return**: void 

This function updates the next runtime for a recurring event. 


### function AbortOnError

```cpp
static bool AbortOnError(
    event_table_t * eventdata
)
```


### function UpdateRecurCount

```cpp
static bool UpdateRecurCount(
    event_table_t * eventdata
)
```


### function EventSchedSendFailedStatus

```cpp
static void EventSchedSendFailedStatus(
    event_set_table_t * event_set,
    int event_fail_index,
    vhq_result_t failure
)
```


**Parameters**: 

  * **event_set=** executing event set 
  * **event_fail_index** = event id of the failed event. 
  * **failure** = failure


**Return**: void 

This function gethers details about a failed event to send to server. 


### function setupPostponedEventSet

```cpp
static void setupPostponedEventSet(
    event_set_table_t * posponedEventSet,
    int event_index,
    event_result_t event_res
)
```


**Parameters**: 

  * **posponedEventSet** = pointer to postponed event set 
  * **event_index** = completed event index 
  * **event_res** = completed event result


**Return**: void. 

This function postpones an event set in case event fails with a postpone result. 


### function EventSchedulerInitCallbackTable

```cpp
void * EventSchedulerInitCallbackTable(
    char * pszOperatingMode
)
```


**Parameters**: 

  * **pszOperatingMode** = operating mode


**Return**: pointer to callback table. 

This function initializes the event scheduler callback table to launch an event. 


### function sighandler

```cpp
void sighandler(
    int signum,
    siginfo_t * siginfo,
    void * context
)
```


**Parameters**: 

  * **signum** = The number of the signal that caused invocation of the handler. 
  * **siginfo** = which is a structure containing further information about the signal 
  * **context** = contains signal context information that was saved on the user-space stack by the kernel.


**Return**: none 

This function handles a particular signal. 


### function hbIsActive

```cpp
static bool hbIsActive(
    void 
)
```


### function deviceEventIsActive

```cpp
static bool deviceEventIsActive(
    void 
)
```


### function EventSetCurrentlyRunning

```cpp
static bool EventSetCurrentlyRunning(
    int EventSetIndex
)
```


**Parameters**: 

  * **EventSetIndex** = event set index of event to check.


**Return**: TRUE, if running. 

This function checks whether an event set is currenlty running or not. 


### function EventAllowedInOpenSlot

```cpp
static bool EventAllowedInOpenSlot(
    int event_index
)
```


**Parameters**: 

  * **event_index** = event set id to be checked.


**Return**: TRUE, if event is HB/device event. 

This function returns true if the event in event_index is an event type which is allowed in the open slot present. 


### function ClearRunningEvents

```cpp
static void ClearRunningEvents()
```


**Parameters**: 

  * **void** 


**Return**: void 

This function clear the running event details. 


### function GetOpenEventSlot

```cpp
static int GetOpenEventSlot()
```


**Parameters**: 

  * **void** 


**Return**: int, first open slot. 

This function returns the first open running event slot. 


### function NumOpenEventSlots

```cpp
static int NumOpenEventSlots()
```


**Parameters**: 

  * **void** 


**Return**: int, total open slots. 

This function returns the total open running event slots. 


### function EventIsRunning

```cpp
static int EventIsRunning(
    event_set_id_t event_set_id,
    event_id_t event_id
)
```


**Parameters**: 

  * **event_set_id** = event set ID to check for. 
  * **event_id** = event ID to check for


**Return**: int, running event index of completed event. 

This function checks if an event is running or not. 


### function EventIsCompleted

```cpp
static bool EventIsCompleted()
```


**Parameters**: 

  * **void** 


**Return**: TRUE, if any event completed. 

This function checks if any of the events in concurrent events has completed or not. 


### function EventIsDownload

```cpp
static bool EventIsDownload(
    int event_set_index
)
```


**Parameters**: 

  * **event_set_index** = event set id of event to check.


**Return**: TRUE, if event is a download event. 

This function checks if an event in event table is a download event. 


### function EventReadyToLaunch

```cpp
static bool EventReadyToLaunch(
    int * event_set_index
)
```


**Parameters**: 

  * **void** 


**Return**: TRUE, if ready to launch.

This function checks if an event in event table is ready to launch. Function to be called after locking event set table mutex. 
Or else, there is only one concurrent thread events, no matter what the new event is, launch it.

If there is more than one open slot, launch the new event.

If there is only one open slot and if it's a HB or device event (like reboot, batter low etc.,) launch it. If it's not a HB or device event don't launch, we should always keep a slot open for HB & device events which may kick in anytime. 


### function NumRunningEvents

```cpp
static int NumRunningEvents()
```


**Parameters**: 

  * **void** 


**Return**: int, number of events running. 

This function returns the number of events running concurrently at a time. 


### function GetEventSetTableIndexes

```cpp
static bool GetEventSetTableIndexes(
    int running_event_index,
    event_set_table_t * event_set,
    int * event_index
)
```


**Parameters**: 

  * **running_event_index** = running event index 
  * **event_set_index** = points to event set ID of event in running event index 
  * **event_index** = points to event ID of event in running event index.


**Return**: TRUE, if found 

This function finds the event set ID and event ID of the running event by searching in event_set_table. 


### function PerformPreEventCB

```cpp
static pre_post_event_result_t PerformPreEventCB(
    callback_t eCallback,
    pre_post_callback_t preEventCbType,
    event_set_id_t event_set_id,
    event_id_t event_id,
    bool app_approval_required
)
```


**Parameters**: 

  * **preEventCbType** = pre event cb type 
  * **event_set_id** = event set ID of event 
  * **event_id** = event ID of event 
  * **app_approval_required** = TRUE, if application approval required.


**Return**: pre_post_event_result_t 

This function calls the standard pre event callback if the pre event callback type is standard. 


### function PerformPostEventCB

```cpp
static pre_post_event_result_t PerformPostEventCB(
    pre_post_callback_t postEventCbType
)
```


### function FailEventCallback

```cpp
static void FailEventCallback(
    pre_post_callback_t preEventCbType
)
```


**Parameters**: 

  * **preEventCbType** = pre event callback to fail.


**Return**: void 

This function fails a pre-event callback to mark a running event as failure. 


### function PushEventCallback

```cpp
static pre_post_event_result_t PushEventCallback(
    callback_t eCallback,
    pre_post_callback_t preEventCbType,
    int event_set_id,
    int event_id,
    bool app_approval_required
)
```


**Parameters**: 

  * **preEventCbType** = pre event callback to push


**Return**: pre_post_event_result_t 

This function checks if the pre event callback is already successful otherwise pushes the pre event callback to the event callback table. 


### function PopEventCallbacks

```cpp
static pre_post_event_result_t PopEventCallbacks()
```


### function LaunchEvent

```cpp
static event_result_t LaunchEvent(
    callback_t eCallback,
    pre_post_callback_t ePreCallback,
    pre_post_callback_t ePostCallback,
    event_set_id_t event_set_id,
    event_id_t event_id,
    void * pvCbData,
    bool continuation
)
```


### function MonitorEvents

```cpp
static void MonitorEvents()
```


### function SYNCnewEventSetWithTable

```cpp
static inline void SYNCnewEventSetWithTable(
    event_set_table_t * newEventSet
)
```


### function CancelEventTimer

```cpp
static void CancelEventTimer()
```


### function CleanEventTableForHB

```cpp
static bool CleanEventTableForHB(
    const event_set_table_t * newEventSet
)
```

Provides logic of HBs processing to allow at least one for registration purposes in case if table is full. 

**Parameters**: 

  * **newEventSet** - pointer to new event 


**Return**: TRUE if we just cleaned-up a slot for new HB, FALSE otherwise 

### function AddEventSetToTable

```cpp
static bool AddEventSetToTable(
    event_set_table_t * newEventSet,
    bool start_timer
)
```

Adds a new event to the event table. 

**Parameters**: 

  * **newEvent** - pointer to new event to add to the table start_timer - For VX devices timer needs to be started on event sched thread so this will only be set from calls made from event sched 


**Return**: TRUE if successful, FALSE otherwise 

### function AddAndLaunchActionEvent

```cpp
static bool AddAndLaunchActionEvent(
    event_set_table_t * dlEventSet,
    term_action_t action
)
```

Adds a reboot event to the table and launches it (used when a suppressed reboot during download is required) 

**Parameters**: 

  * **dlEventSet** - pointer to the download event set that had the reboot suppressed 


**Return**: TRUE if successful, FALSE otherwise 

### function UpdateEventSetExecutingIndexToTable

```cpp
static bool UpdateEventSetExecutingIndexToTable(
    event_set_table_t * updatedEventSet
)
```


### function GetTimerExpired

```cpp
bool GetTimerExpired()
```


### function pesStateToStr

```cpp
char * pesStateToStr(
    process_event_sets_state_t state
)
```


### function numKeyExchangeEventsInTable

```cpp
static int numKeyExchangeEventsInTable(
    void 
)
```


### function isDownloadEventSetPresent

```cpp
static bool isDownloadEventSetPresent(
    void 
)
```


### function CleanupCompletedEvent

```cpp
static void CleanupCompletedEvent(
    event_set_table_t * event_set,
    int event_index,
    event_result_t event_res,
    char * current_instance,
    bool release_instance
)
```


**Parameters**: 

  * **event_set** = executing event set 
  * **event_index** = event index in event set 
  * **event_res** = event result 
  * **current_instance** = current instance


**Return**: void 

This function reschedules or removes the event set from the event table, depending on the event result. 


### function EventSetExists

```cpp
static event_set_id_t EventSetExists(
    uint32 opSetId,
    operation_set_event_t psOpSetData[],
    uint32 dwOpSetDataArraySize
)
```


**Parameters**: 

  * **opSetId** = operation set ID of event 
  * **psOpSetData** = an array of operations that will be performed in this operation set. 
  * **dwOpSetDataArraySize** = number of operations in the operation set array.


**Return**: event_set_id_t, EVENT_SET_ID_INVALID if duplicate opset ID sent from server. 

This function checks whether an event set already exists in the event table by checking the operation ID. 


### function ProcessEventSets

```cpp
bool ProcessEventSets(
    void 
)
```

Calls the appropriate callbacks for event sets that have expired. 

**Return**: TRUE if successful, FALSE oterwise 

### function EventScheduler

```cpp
void * EventScheduler(
    void * pvData
)
```

The event sheduler task's main loop. 

**Parameters**: 

  * **pvData** - void* pointer used in pthread_create functions 


**Return**: should never return 

### function EventSchedulerInitialized

```cpp
bool EventSchedulerInitialized(
    void 
)
```


**Return**: TRUE, if event scheduler is initialized. 

This function checks whether event scheduler is initialized or not and returns the status; TRUE, if initialized. 


### function ScheduleEventSet

```cpp
event_set_id_t ScheduleEventSet(
    bool bRecurring,
    long int dwFirstRun,
    recur_unit_t recurUnits,
    uint32 dwRecurPeriod,
    long int tExpiration,
    uint32 dwRetryFreq,
    uint32 opSetId,
    operation_set_event_t psOpSetData[],
    uint32 dwOpSetDataArraySize,
    event_set_id_t dependency_event_set_id,
    event_timer_t timerType,
    char * pszServerInstance,
    pre_post_callback_t preEventCbType,
    pre_post_callback_t postEventCbType,
    bool keyExchangeEventSet
)
```


**Parameters**: 

  * **bRecurring** - boolean indicating if this event is recurring 
  * **dwFirstRun** - seconds until the callback should be run the first time (0 = now) 
  * **recurUnits** - recurring unit of event 
  * **dwRecurPeriod** - period of recurrence 
  * **tExpiration** - expiration of the event 
  * **dwRetryFreq** - How often to retry the first attempt in case of a failure (in seconds, 0 = no retry) 
  * **opSetId** - operation ID. 
  * **psOpSetData** - an array of operations that will be performed in this operation set 
  * **dwOpSetDataArraySize** - number of operations in the operation set array 
  * **dependency_event_set_id** - if this depends on another event (like install later) then this event will be cancelled if the dependency event fails 
  * **timerType** - RTC or date/time - RTC events will not be affected if the system clock changes 
  * **pszServerInstance** - the server instance that this event set is scheduled for 
  * **preEventCbType** - used for pre-event callbacks that are common across all events in the event set like CommNetConnect, etc. 
  * **postEventCbType** - used for post-event callbacks that are common across all events in the event set like CommNetDisconnect, etc. 
  * **keyExchangeEventSet** - used to determine when "Device Registration Mode" is completed 


**Return**: event_set_id_t, The new event_id for the operation set that was just added 

This function is used by outside processes to schedule operation sets for now or the future 


### function CleanUpEventSet

```cpp
static void CleanUpEventSet(
    int event_set_index
)
```

Cleans up an event set. 

**Parameters**: 

  * **event_set_index** - Index of the event set to be cleaned up 


### function CancelEventSetThreadSafe

```cpp
static bool CancelEventSetThreadSafe(
    event_set_id_t event_set_id,
    bool cancel_dependent_events
)
```

Cancels a pending event set called by CancelEventSet. 

**Parameters**: 

  * **event_set_id** - the ID of the event set to cancel 
  * **cancel_dependent_events** - whether to cancel events that depend on this event set 


**Return**: TRUE if successful, FALSE otherwise 

### function CancelEventSet

```cpp
bool CancelEventSet(
    event_set_id_t event_set_id,
    bool cancel_dependent_events
)
```

Cancels a pending event set. 

**Parameters**: 

  * **event_set_id** - the ID of the event set to cancel 
  * **cancel_dependent_events** - whether to cancel events that depend on this event set 


**Return**: TRUE if successful, FALSE otherwise 

### function CancelEventSetByOpId

```cpp
vhq_result_t CancelEventSetByOpId(
    uint32 opSetId
)
```

Cancels a pending event set by Operation Set ID. 

**Parameters**: 

  * **opSetId** - the Operation Set ID of the event to cancel 


**Return**: vhq_result_t from VHQTypes.h 

### function GetInitialTimerVal

```cpp
uint32 GetInitialTimerVal(
    void 
)
```


### function LockEventScheduler

```cpp
void LockEventScheduler(
    bool lock
)
```


### function FileRequiredByEvent

```cpp
bool FileRequiredByEvent(
    char * fn
)
```


**Parameters**: 

  * **fn** = filename


**Return**: TRUE, if required. 

This function checks if a file is required by any of the download events in event set table. 


### function DownloadOpSetInProgress

```cpp
bool DownloadOpSetInProgress(
    void 
)
```


**Return**: TRUE, if download event is present. 

This function searches for a download operation set in running events. 


### function GetOperationIdForEvent

```cpp
char * GetOperationIdForEvent(
    int event_set_index,
    int event_index
)
```


**Parameters**: 

  * **event_set_index** = event set index in event table. 
  * **event_index** = event index in event set.


**Return**: operation ID. 

This function returns the opeartion ID of an event in an event set. 


### function SetCompleteFlag

```cpp
void SetCompleteFlag(
    uint32 opSetId,
    char * OpId,
    bool continuation_required,
    bool event_failed
)
```


**Parameters**: 

  * **opSetId** = operation set ID of event 
  * **OpId** = operation ID 
  * **continuation_required** = TRUE, if continuation required for operation.


**Return**: void 

This function saves the executing flag with continue/complete, when there is a chance of losing executing flag because of a reboot after a download or install operation 


### function GetApprovalMaskStr

```cpp
char * GetApprovalMaskStr(
    uint32 approval_mask
)
```


### function SetApprovalFlag

```cpp
void SetApprovalFlag(
    event_set_id_t event_set_id,
    event_id_t event_id,
    uint32 approval_mask
)
```


**Parameters**: 

  * **event_set_id** = event set ID of event 
  * **event_id** = event ID of event 
  * **approval_mask** = approval mask to set


**Return**: void 

This function set a pre-approval mask to a download event and saves the event table. 


### function GetApprovalFlag

```cpp
bool GetApprovalFlag(
    uint32 opSetId,
    char * OpId,
    uint32 mask,
    bool * isLastOp
)
```


**Parameters**: 

  * **opSetId** = operation set ID 
  * **OpId** = operation ID 
  * **mask** = mask to be checked. 
  * **isLastOp** = flag to be set true in case of Last Op in the Set


**Return**: TRUE, if mask matches. 

This function checks for the pre approval mask for events. 


### function GetExecutingIndex

```cpp
bool GetExecutingIndex(
    uint32 opSetId,
    int * executing_index
)
```


**Parameters**: 

  * **opSetId** = operation set ID 
  * **executing_index** = Index of current executing event


**Return**: TRUE, if OpSetId matches. 

This function to get executing index in a set. 


### function SetEventSchedulerTimerExpired

```cpp
void SetEventSchedulerTimerExpired(
    bool timer_exp_val
)
```


### function StartEventTimer

```cpp
void StartEventTimer(
    struct itimerval new_tv
)
```


**Parameters**: 

  * **new_tv** = value to set the timer with.


**Return**: void 

This function starts a timer to wakeup.In low power mode, we should make sure we use the [sys_SetWakeupTime()](namespacevfisyspm.md#function-sys-setwakeuptime) API so that we get woken up from deep sleep state. 


### function EventSchedulerLock

```cpp
bool EventSchedulerLock(
    int timeout
)
```


**Parameters**: 

  * **timeout** = timeout to lock the event scheduler mutex.


**Return**: TRUE, if locked. 

This function tries to lock the event scheduler mutex, event_sched_lock_mutex. 


### function EventSchedulerUnlock

```cpp
bool EventSchedulerUnlock(
    void 
)
```


### function GetSecondsToNextEvent

```cpp
uint32 GetSecondsToNextEvent(
    bool include_running_event
)
```


**Parameters**: 

  * **ignore_executing_event** =TRUE, to ignore executing event when calculating the time to next event.


**Return**: uint32 seconds to next event. 

This function returns the number of seconds to execute the next event.If next event is a recurring event, the recurring frequency is returned. 


### function EventSchedulerPetWatchdog

```cpp
void EventSchedulerPetWatchdog(
    event_set_id_t event_set_id,
    event_id_t event_id
)
```


**Parameters**: 

  * **event_set_id** = event set ID 
  * **event_id** = event ID of the event


**Return**: void 

This function sets the watchdog timer for an event. 


### function GetEventExpiryTime

```cpp
time_t GetEventExpiryTime(
    event_set_id_t event_set_id,
    event_timer_t timer_type
)
```


**Parameters**: 

  * **event_set_id** = event set ID 
  * **event_id** = event ID of the event 
  * **time_type** = RTC or DATE/TIME


**Return**: [Event](struct_event.md) expiry date in RTC or DATE/TIME 

This function gets event expire time 


### function ClearInstanceEventSetsTable

```cpp
bool ClearInstanceEventSetsTable(
    char * serverInstance,
    bool isForKeysExchangeReset
)
```


**Parameters**: 

  * **serverInstance** = server instance 
  * **isForKeysExchangeReset** = TRUE, if it is for a key exchange reset.


**Return**: TRUE, if event set cleared. 

This function removes an event set with a given server instance and update the event table. 


### function ClearEventsTable

```cpp
void ClearEventsTable(
    void 
)
```


This function calls [ClearInstanceEventSetsTable()](_event_scheduler_8c.md#function-clearinstanceeventsetstable) and sets Device Registration. 



## Attributes Documentation

### variable MONITOR_THREAD_CHECK_PERIOD

```cpp
const struct timespec MONITOR_THREAD_CHECK_PERIOD = { .tv_sec = 0, .tv_nsec =
    50000000 };
```


### variable timer_expired

```cpp
static bool timer_expired = FALSE;
```


### variable _cur_event_id

```cpp
static event_id_t _cur_event_id = 0;
```


### variable _event_scheduler_locked

```cpp
static bool _event_scheduler_locked = TRUE;
```


### variable _eventSchedulerInited

```cpp
static bool _eventSchedulerInited = FALSE;
```


### variable event_table_mutex

```cpp
static pthread_mutex_t event_table_mutex;
```


### variable _initial_timer_val

```cpp
static uint32 _initial_timer_val = 0;
```


### variable request_Qid

```cpp
int request_Qid;
```


### variable response_Qid

```cpp
int response_Qid;
```


### variable _cur_event_set_id

```cpp
static event_set_id_t _cur_event_set_id = 0;
```


### variable event_set_table

```cpp
static event_set_table_t[MAX_EVENT_SETS] event_set_table;
```


### variable event_set_file_header

```cpp
static event_set_file_header_t event_set_file_header;
```


### variable acbCallbackTable

```cpp
EventSchedulerCB[] acbCallbackTable = { LaunchDownloader, GetDataProcessor,
    SetDataProcessor, TermActProcessor, FileUploader, Heartbeat,
    GetDiagDataProcessor, AppActionProcessor, DelFileProcessor,
    DeviceEventProcessor, GetParamUpdateProcessor, GetSwUpdateProcessor, };
```


### variable running_events

```cpp
static running_event_t[MAX_CONCURRENT_EVENTS] running_events;
```


### variable callback_stack

```cpp
callback_stack_t[cbMAXTypes] callback_stack;
```



## Macros Documentation

### define MAX_CONCURRENT_EVENTS

```cpp
#define MAX_CONCURRENT_EVENTS 1
```


### define REBOOT_EVENT_AFTER_LAST_DL_IN_OP_SET

```cpp
#define REBOOT_EVENT_AFTER_LAST_DL_IN_OP_SET 1
```


### define MIDNIGHT

```cpp
#define MIDNIGHT (24 * 3600)
```


Local definitions 


### define SEVENTY_YEAR_OFFSET

```cpp
#define SEVENTY_YEAR_OFFSET (2208988800)
```


### define PRINT_EVENT_SET_TABLE

```cpp
#define PRINT_EVENT_SET_TABLE(
    a
)
PrintEventSetTable(a)
```


Local functions 


### define COMPARE_EVENT_SET_TABLE_DEBUG

```cpp
#define COMPARE_EVENT_SET_TABLE_DEBUG 0
```


### define COMPARE_EVENT_SET_TABLE_DEBUG_PRINT

```cpp
#define COMPARE_EVENT_SET_TABLE_DEBUG_PRINT(
    arg...
)

```


### define NO_EVENTS_TABLES

```cpp
#define NO_EVENTS_TABLES 3
```


### define EVENTS_TABLE_FILE_LENGTH

```cpp
#define EVENTS_TABLE_FILE_LENGTH 64
```


### define DEFAULT_WAIT

```cpp
#define DEFAULT_WAIT (86400)
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#include <errno.h>
#include <pthread.h>
#include <fcntl.h>
#ifndef VHQ_EVENT_DECODER
#include <libgen.h>
#include <memory.h>
#include <signal.h>
#include <sys/time.h>
#include <sys/wait.h>
#include <ucontext.h>
#include <unistd.h>
#include <sys/ipc.h>
#include <sys/msg.h>
#endif
#include <memory.h>
#include <signal.h>
#include <stdarg.h>
#include <stdio.h>
#include <stdlib.h>

#ifdef VHQ_EVENT_DECODER
#include <intsafe.h>
#include "VHQEventDecoder.h"
#else
#include <svc.h>
#endif

#include "EventScheduler.h"
#include "EventSchedulerLcl.h"
#include "VHQFileNames.h"
#include "VHQConfig.h"
#include "VHQDebug.h"
#include "VHQDownloader.h"
#include "VHQManager.h"
#include "VHQTypes.h"
#include "VHQUtils.h"
#include "VHQSecurity.h"

#if EVENT_SCHED_THREAD_MODE
#define MAX_CONCURRENT_EVENTS           3
#else
#define MAX_CONCURRENT_EVENTS           1
#endif

#define REBOOT_EVENT_AFTER_LAST_DL_IN_OP_SET    1

typedef struct _running_event_t
{
  bool in_use;
  event_set_id_t event_set_id;
  event_id_t event_id;
  event_thread_arg *arg_p;
  pthread_t thread_id;
  time_t start_time;
  time_t expire_time;
  event_result_t status;
  event_result_t static_result;
  callback_t eCallback;
  pthread_mutex_t wd_mutex;
  bool release_instance;
} running_event_t;

#if EVENT_SCHED_THREAD_MODE
static pthread_t EventSchedThreadId = 0;
#endif


#define MIDNIGHT (24 * 3600)
#define SEVENTY_YEAR_OFFSET (2208988800)

const struct timespec MONITOR_THREAD_CHECK_PERIOD = { .tv_sec = 0, .tv_nsec =
    50000000 };

static volatile bool timer_expired = FALSE;
static event_id_t _cur_event_id = 0;

static bool _event_scheduler_locked = TRUE;

static bool _eventSchedulerInited = FALSE;

static pthread_mutex_t event_table_mutex;

static uint32 _initial_timer_val = 0;
extern int request_Qid, response_Qid;

#ifdef EVENT_SCHED_THREAD_MODE
/* This conditional variable is used for both VOS & VOS2 */
static pthread_cond_t event_sched_cond;

static pthread_mutex_t event_sched_lock_mutex;
static pthread_mutex_t saved_events_file_mutex;

static pthread_mutex_t scheduler_lock_mutex;
static pthread_cond_t scheduler_lock_cond;

static time_t GetWatchdogExpireTime(int running_event_index);

#endif /* EVENT_SCHED_THREAD_MODE */

static event_set_id_t _cur_event_set_id = 0;
static event_set_table_t event_set_table[MAX_EVENT_SETS];

static event_set_file_header_t event_set_file_header;

#ifndef VHQ_EVENT_DECODER
EventSchedulerCB acbCallbackTable[] = { LaunchDownloader, GetDataProcessor,
    SetDataProcessor, TermActProcessor, FileUploader, Heartbeat,
    GetDiagDataProcessor, AppActionProcessor, DelFileProcessor,
    DeviceEventProcessor, GetParamUpdateProcessor, GetSwUpdateProcessor, };
#endif

static running_event_t running_events[MAX_CONCURRENT_EVENTS];

typedef struct
{
  pre_post_callback_t cbType;
  pre_post_event_result_t cbResult;
} callback_stack_t;

callback_stack_t callback_stack[cbMAXTypes];


#define PRINT_EVENT_SET_TABLE(a) PrintEventSetTable(a)
static void PrintEventSetTable(char *description);
static uint32 NumEventSlotsFilled(void);
static uint32 NumRemainingEventSlots(void);
static bool EventSetInRunningTable(event_set_id_t event_set_id);

static char* cbEnumToStr(callback_t eCallback)
{
  switch (eCallback)
  {
    case cbLaunchDownloader:
      return "Download";
    case cbGetDataProcessor:
      return "GetData";
    case cbSetDataProcessor:
      return "SetData";
    case cbHeartbeat:
      return "Heartbeat";
    case cbGetDiagDataProcessor:
      return "GetDiagData";
    case cbDelFileProcessor:
      return "DelFile";
    case cbTerminalAction:
      return "Term Action";
    case cbFileUploader:
      return "Upload";
    case cbAppActionProcessor:
      return "AppAction";
    case cbDeviceEventProcessor:
      return "DeviceEvent";
    case cbGetParamUpdatesProcessor:
      return "GetParamUpdates";
    case cbGetSwUpdateProcessor:
      return "GetSoftwareUpdates";
    default:
      return "Unknown";
  }
}

static char* event_cbEnumToStr(event_table_t *event_entry)
{
  switch (event_entry->eCallback)
  {
    case cbLaunchDownloader:
      /* PASS-THROUGH download */
      if ((event_entry->sCallbackData.downloader_parms.dl_file_content
          .DownloadType & DL_FILE_DL_TYPE_PERIPHERAL_MASK)
          || ((event_entry->sCallbackData.downloader_parms.dl_file_content
              .DownloadType &
          DL_FILE_DL_TYPE_TYPE_MASK) == DL_FILE_DL_TYPE_PERIPHERAL))
        return "Download PASS-THROUGH";

      /* Content download */
      if (event_entry->sCallbackData.downloader_parms.dl_file_content
          .DownloadType & DL_FILE_DL_TYPE_EXPIRES_MASK)
      {
        if ((event_entry->sCallbackData.downloader_parms.dl_file_content
            .DownloadType & DL_FILE_DL_TYPE_DOWNLOAD_MASK)
            && (event_entry->sCallbackData.downloader_parms.dl_file_content
                .DownloadType & DL_FILE_DL_TYPE_INSTALL_MASK))
          return "Download and Install content with backup";

        if (event_entry->sCallbackData.downloader_parms.dl_file_content
            .DownloadType & DL_FILE_DL_TYPE_DOWNLOAD_MASK)
          return "Download content with backup";

        if (event_entry->sCallbackData.downloader_parms.dl_file_content
            .DownloadType & DL_FILE_DL_TYPE_INSTALL_MASK)
          return "Install content with backup";
      }

      /* Content restore */
      if (event_entry->sCallbackData.downloader_parms.dl_file_content
          .DownloadType & DL_FILE_DL_TYPE_IS_EXPIRED_MASK)
        return "Uninstall content with restore";

      /* Download with installation */
      if ((event_entry->sCallbackData.downloader_parms.dl_file_content
          .DownloadType & DL_FILE_DL_TYPE_DOWNLOAD_MASK)
          && (event_entry->sCallbackData.downloader_parms.dl_file_content
              .DownloadType & DL_FILE_DL_TYPE_INSTALL_MASK))
        return "Download with Installation";

      /* Simple download without installation */
      if (event_entry->sCallbackData.downloader_parms.dl_file_content
          .DownloadType & DL_FILE_DL_TYPE_DOWNLOAD_MASK)
        return "Download";

      /* Simple installation without downloads */
      if (event_entry->sCallbackData.downloader_parms.dl_file_content
          .DownloadType & DL_FILE_DL_TYPE_INSTALL_MASK)
        return "Install";

      /* We can't recognize it */
      return "Download (no data available)";
    default:
      return cbEnumToStr(event_entry->eCallback);
  }
}

static int GetCommId(event_table_t *eventdata)
{
  int ret_val = -1;

  switch (eventdata->eCallback)
  {
    case cbLaunchDownloader:
      ret_val = eventdata->sCallbackData.downloader_parms.comm_id;
      break;
    case cbGetDataProcessor:
      ret_val = eventdata->sCallbackData._get_data_parms.comm_id;
      break;
    case cbSetDataProcessor:
      ret_val = eventdata->sCallbackData._set_data_parms.comm_id;
      break;
    case cbGetDiagDataProcessor:
      ret_val = eventdata->sCallbackData._get_data_parms.comm_id;
      break;
    case cbDelFileProcessor:
      ret_val = eventdata->sCallbackData._del_file_parms.comm_id;
      break;
    case cbTerminalAction:
      ret_val = eventdata->sCallbackData.action_parms.comm_id;
      break;
    case cbFileUploader:
      ret_val = eventdata->sCallbackData.ul_parms.comm_id;
      break;
    case cbAppActionProcessor:
      ret_val = eventdata->sCallbackData._app_action_parms.comm_id;
      break;
    case cbGetParamUpdatesProcessor:
      ret_val = eventdata->sCallbackData._device_event_parms.comm_id;
      break;
    case cbDeviceEventProcessor:
    case cbGetSwUpdateProcessor:
    case cbHeartbeat:
    default:
      ret_val = -1;
      break;
  }

  return ret_val;
}

static int GetMsgId(event_table_t *eventdata)
{
  int ret_val = -1;

  switch (eventdata->eCallback)
  {
    case cbLaunchDownloader:
      ret_val = eventdata->sCallbackData.downloader_parms.message_id;
      break;
    case cbGetDataProcessor:
      ret_val = eventdata->sCallbackData._get_data_parms.message_id;
      break;
    case cbSetDataProcessor:
      ret_val = eventdata->sCallbackData._set_data_parms.message_id;
      break;
    case cbGetDiagDataProcessor:
      ret_val = eventdata->sCallbackData._get_data_parms.message_id;
      break;
    case cbDelFileProcessor:
      ret_val = eventdata->sCallbackData._del_file_parms.message_id;
      break;
    case cbTerminalAction:
      ret_val = eventdata->sCallbackData.action_parms.message_id;
      break;
    case cbFileUploader:
      ret_val = eventdata->sCallbackData.ul_parms.message_id;
      break;
    case cbAppActionProcessor:
      ret_val = eventdata->sCallbackData._app_action_parms.message_id;
      break;
    case cbGetParamUpdatesProcessor:
      ret_val = eventdata->sCallbackData._device_event_parms.message_id;
      break;
    case cbDeviceEventProcessor:
    case cbGetSwUpdateProcessor:
    case cbHeartbeat:
    default:
      ret_val = -1;
      break;
  }

  return ret_val;
}

static srv_op_type_t GetSrvOpType(event_table_t *eventdata)
{
  srv_op_type_t srv_op_tpye = SRV_OP_TYPE_UNKNOWN;

  switch (eventdata->eCallback)
  {
    case cbLaunchDownloader:
      srv_op_tpye = eventdata->sCallbackData.downloader_parms.srv_op_type;
      break;
    case cbGetDataProcessor:
      srv_op_tpye = eventdata->sCallbackData._get_data_parms.srv_op_type;
      break;
    case cbSetDataProcessor:
      srv_op_tpye = eventdata->sCallbackData._set_data_parms.srv_op_type;
      break;
    case cbGetDiagDataProcessor:
      srv_op_tpye = eventdata->sCallbackData._get_data_parms.srv_op_type;
      break;
    case cbDelFileProcessor:
      srv_op_tpye = eventdata->sCallbackData._del_file_parms.srv_op_type;
      break;
    case cbTerminalAction:
      srv_op_tpye = eventdata->sCallbackData.action_parms.srv_op_type;
      break;
    case cbFileUploader:
      srv_op_tpye = eventdata->sCallbackData.ul_parms.srv_op_type;
      break;
    case cbAppActionProcessor:
      srv_op_tpye = eventdata->sCallbackData._app_action_parms.srv_op_type;
      break;
    case cbGetParamUpdatesProcessor:
      srv_op_tpye = eventdata->sCallbackData._device_event_parms.srv_op_type;
      break;
    case cbDeviceEventProcessor:
    case cbGetSwUpdateProcessor:
    case cbHeartbeat:
    default:
      srv_op_tpye = SRV_OP_TYPE_UNKNOWN;
      break;
  }

  return srv_op_tpye;
}

static void ClearCBStack()
{
  int i;

  for (i = 0; i < cbMAXTypes; i++)
  {
    callback_stack[i].cbType = cbMAXTypes;
    callback_stack[i].cbResult = PRE_POST_EVENT_FAILURE;
  }
}

static void RestoreCallbackFunction(event_table_t *event_table,
                                    uint8 num_events, char *executing_index,
                                    uint32 version)
{
  int event_index = 0;

  for (event_index = 0; event_index < num_events; event_index++)
  {
    if (version < EVENT_SET_FILE_V4)
    {
      /* This is where we handle the difference between version < 4.  Old code
       assumed all executing downloads were complete if they were interrupted by power cycle.
       We'll do the same here by marking any executing event as complete */
      if (event_table[event_index].executing)
      {
        event_table[event_index].executing = EXECUTING_MASK | COMPLETE_MASK;
        dbg_msg("%s: event_data[%d].executing flag converted to %d\n",
                __FUNCTION__, event_index, event_table[event_index].executing);

        *executing_index = event_index + 1;
      }
    }

    if (event_table[event_index].eCallback == cbLaunchDownloader)
    {
      launch_downloader_parms new_params;
      download_file_content_t new_content;
      memset(&new_params, 0, sizeof(launch_downloader_parms));
      memset(&new_content, 0, sizeof(download_file_content_t));

      if (version <= EVENT_SET_FILE_V10 && version > EVENT_SET_FILE_V8)
      {
        /* This is where we handle the difference between launch_downloader_parms_vu10 and launch_downloader_parms
         * Restructure params from VERSION 11 onwards */
        launch_downloader_parms_vu10 *old_params =
            (launch_downloader_parms_vu10*) &event_table[event_index]
                .sCallbackData.downloader_parms;
        download_file_content_t *old_content =
            (download_file_content_t*) &(old_params->dl_file_content);

        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;
        /* Old and new content are same */
        memcpy(&new_params.dl_file_content, &(old_content),
               sizeof(download_file_content_t));
        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData.downloader_parms,
               &new_params, sizeof(launch_downloader_parms));
      }
      else if (version == EVENT_SET_FILE_V8)
      {
        /* This is where we handle the difference between download_file_content_vu8_t and download_file_content_t
         * Support for secondary URL from VERSION 9 onwards */
        launch_downloader_parms_vu8 *old_params =
            (launch_downloader_parms_vu8*) &event_table[event_index]
                .sCallbackData.downloader_parms;
        download_file_content_vu8_t *old_content =
            (download_file_content_vu8_t*) &(old_params->dl_file_content);

        /* create new content based on old instance */
        new_content.Method = old_content->Method;
        memcpy(&new_content.FileName, &(old_content->FileName),
               sizeof(char[256]));
        new_content.FileSize = old_content->FileSize;
        new_content.DownloadType = old_content->DownloadType;
        new_content.HashAlgo = old_content->HashAlgo;
        memcpy(&new_content.User, &(old_content->User), sizeof(char[64]));
        memcpy(&new_content.PW, &(old_content->PW), sizeof(char[64]));
        memcpy(&new_content.URL, &(old_content->URL), sizeof(char[256]));
        memcpy(&new_content.username, &(old_content->username),
               sizeof(char[64]));
        new_content.ApplyOnDate = old_content->ApplyOnDate;
        new_content.ExpirationDate = old_content->ExpirationDate;
        new_content.PostInstallAction = old_content->PostInstallAction;
        new_content.SuppressReboot = old_content->SuppressReboot;
        new_content.CompressionEnabled = old_content->CompressionEnabled;
        memcpy(&new_content.Receiver, &(old_content->Receiver),
               sizeof(char[64]));
        memcpy(&new_content.Hash, &(old_content->Hash), sizeof(char[64 + 1]));
        memcpy(&new_content.TargetDevice, &(old_content->TargetDevice),
               sizeof(char[16 + 1]));
        memcpy(&new_content.TargetDeviceIdentifier,
               &(old_content->TargetDeviceIdentifier), sizeof(char[16 + 1]));
        memcpy(&new_content.TargetDeviceModel,
               &(old_content->TargetDeviceModel), sizeof(char[16 + 1]));
        new_content.Peripheral = old_content->Peripheral;
        new_content.DelayInstallTime = old_content->DelayInstallTime;
        memset(&new_content.SecondaryURL, 0, sizeof(char[256]));    // new value added in VERSION 9

        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        memcpy(&new_params.dl_file_content, &(new_content),
               sizeof(download_file_content_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;
        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData.downloader_parms,
               &new_params, sizeof(launch_downloader_parms));
      }
      else if (version < EVENT_SET_FILE_V8 && version >= EVENT_SET_FILE_V3)
      {
        /* This is where we handle the difference between download_file_content_vu7_t and download_file_content_t
         * Support for post install delay from VERSION 8 onwards */
        launch_downloader_parms_vu7 *old_params =
            (launch_downloader_parms_vu7*) &event_table[event_index]
                .sCallbackData.downloader_parms;
        download_file_content_vu7_t *old_content =
            (download_file_content_vu7_t*) &(old_params->dl_file_content);

        /* create new content based on old instance */
        new_content.Method = old_content->Method;
        memcpy(&new_content.FileName, &(old_content->FileName),
               sizeof(char[256]));
        new_content.FileSize = old_content->FileSize;
        new_content.DownloadType = old_content->DownloadType;
        new_content.HashAlgo = old_content->HashAlgo;
        memcpy(&new_content.User, &(old_content->User), sizeof(char[64]));
        memcpy(&new_content.PW, &(old_content->PW), sizeof(char[64]));
        memcpy(&new_content.URL, &(old_content->URL), sizeof(char[256]));
        memcpy(&new_content.username, &(old_content->username),
               sizeof(char[64]));
        new_content.ApplyOnDate = old_content->ApplyOnDate;
        new_content.ExpirationDate = old_content->ExpirationDate;
        new_content.PostInstallAction = old_content->PostInstallAction;
        new_content.SuppressReboot = old_content->SuppressReboot;
        new_content.CompressionEnabled = old_content->CompressionEnabled;
        memcpy(&new_content.Receiver, &(old_content->Receiver),
               sizeof(char[64]));
        memcpy(&new_content.Hash, &(old_content->Hash), sizeof(char[64 + 1]));
        memcpy(&new_content.TargetDevice, &(old_content->TargetDevice),
               sizeof(char[16 + 1]));
        memcpy(&new_content.TargetDeviceIdentifier,
               &(old_content->TargetDeviceIdentifier), sizeof(char[16 + 1]));
        memcpy(&new_content.TargetDeviceModel,
               &(old_content->TargetDeviceModel), sizeof(char[16 + 1]));
        new_content.Peripheral = old_content->Peripheral;
        new_content.DelayInstallTime = 0;  // new value added in VERSION 8
        memset(&new_content.SecondaryURL, 0, sizeof(char[256]));  // new value added in VERSION 9

        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        memcpy(&new_params.dl_file_content, &(new_content),
               sizeof(download_file_content_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;
        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData.downloader_parms,
               &new_params, sizeof(launch_downloader_parms));
      }
      else if (version < EVENT_SET_FILE_V3)
      {
        /* This is where we handle the difference between _download_file_content_vu2_t and _download_file_content_t */
        launch_downloader_parms_vu2 *old_params =
            (launch_downloader_parms_vu2*) &event_table[event_index]
                .sCallbackData.downloader_parms;
        download_file_content_vu2_t *old_content =
            (download_file_content_vu2_t*) &(old_params->dl_file_content);

        /* create new content based on old instance */
        new_content.Method = old_content->Method;
        memcpy(&new_content.FileName, &(old_content->FileName),
               sizeof(char[256]));
        new_content.FileSize = old_content->FileSize;
        new_content.DownloadType = old_content->DownloadType;
        new_content.HashAlgo = old_content->HashAlgo;
        memcpy(&new_content.User, &(old_content->User), sizeof(char[64]));
        memcpy(&new_content.PW, &(old_content->PW), sizeof(char[64]));
        memcpy(&new_content.URL, &(old_content->URL), sizeof(char[256]));
        memcpy(&new_content.username, &(old_content->username),
               sizeof(char[64]));
        new_content.ApplyOnDate = old_content->ApplyOnDate;
        new_content.ExpirationDate = old_content->ExpirationDate;
        new_content.PostInstallAction = old_content->PostInstallAction;
        new_content.SuppressReboot = old_content->SuppressReboot;
        new_content.CompressionEnabled = old_content->CompressionEnabled;
        memcpy(&new_content.Receiver, &(old_content->Receiver),
               sizeof(char[64]));
        memcpy(&new_content.Hash, &(old_content->Hash), sizeof(char[64 + 1]));
        new_content.DelayInstallTime = 0;  // new value added in VERSION 8
        memset(&new_content.SecondaryURL, 0, sizeof(char[256]));  // new value added in VERSION 9

        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        memcpy(&new_params.dl_file_content, &(new_content),
               sizeof(download_file_content_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;

        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData.downloader_parms,
               &new_params, sizeof(launch_downloader_parms));
      }
    }

    if (event_table[event_index].eCallback == cbTerminalAction)
    {
      if (version <= EVENT_SET_FILE_V10 && version >= EVENT_SET_FILE_V6)
      {
        term_act_parms new_params;
        term_act_content_t new_content;
        term_act_parms_v10_t *old_params =
            (term_act_parms_v10_t*) &event_table[event_index].sCallbackData
                .action_parms;
        term_act_content_t *old_content = (term_act_content_t*) &(old_params
            ->term_act_content);
        memset(&new_params, 0, sizeof(term_act_parms));

        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        memcpy(&new_params.term_act_content, &old_content,
               sizeof(term_act_content_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;
        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData.action_parms,
               &new_params, sizeof(term_act_parms));
      }
      else if (version < EVENT_SET_FILE_V6)
      {
        /* Support for SetClock timezone from Version 6
         * This is where we handle the difference between term_act_content_v05_t and term_act_content_t */
        term_act_parms new_params;
        term_act_content_t new_content;
        term_act_parms_v05_t *old_params =
            (term_act_parms_v05_t*) &event_table[event_index].sCallbackData
                .action_parms;
        term_act_content_v05_t *old_content =
            (term_act_content_v05_t*) &(old_params->term_act_content);
        memset(&new_params, 0, sizeof(term_act_parms));
        memset(&new_content, 0, sizeof(term_act_content_t));
        /* create new content based on old instance */
        new_content.op_type = old_content->op_type;
        new_content.action = old_content->action;
        new_content.action_receive_time = old_content->action_receive_time;
        new_content.set_clock_time = old_content->set_clock_time;
        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        memcpy(&new_params.term_act_content, &new_content,
               sizeof(term_act_content_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;
        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData.action_parms,
               &new_params, sizeof(term_act_parms));
      }
    }

    if (event_table[event_index].eCallback == cbFileUploader)
    {
      if (version <= EVENT_SET_FILE_V10 && version >= EVENT_SET_FILE_V9)
      {
        uploader_parms new_params;
        upload_file_content_t new_content;
        uploader_parms_vu10 *old_params =
            (uploader_parms_vu10*) &event_table[event_index].sCallbackData
                .ul_parms;
        upload_file_content_t *old_content =
            (upload_file_content_t*) &(old_params->ul_file_content);
        memset(&new_params, 0, sizeof(uploader_parms));

        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        memcpy(&new_params.ul_file_content, &old_content,
               sizeof(upload_file_content_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;
        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData.ul_parms, &new_params,
               sizeof(uploader_parms));
      }
      else if (version < EVENT_SET_FILE_V9)
      {
        uploader_parms new_params;
        upload_file_content_t new_content;
        uploader_parms_vu8_t *old_params =
            (uploader_parms_vu8_t*) &event_table[event_index].sCallbackData
                .ul_parms;
        upload_file_content_vu8_t *old_content =
            (upload_file_content_vu8_t*) &(old_params->ul_file_content);
        memset(&new_params, 0, sizeof(uploader_parms));
        memset(&new_content, 0, sizeof(upload_file_content_t));

        /* create new content based on old instance */
        new_content.Type = old_content->Type;
        memcpy(&new_content.FileName, &(old_content->FileName),
               sizeof(char[256]));
        new_content.Method = old_content->Method;
        memcpy(&new_content.URL, &(old_content->URL), sizeof(char[256]));
        memcpy(&new_content.WebMethod, &(old_content->WebMethod),
               sizeof(char[64]));
        memcpy(&new_content.User, &(old_content->User), sizeof(char[64]));
        memcpy(&new_content.PW, &(old_content->PW), sizeof(char[64]));
        new_content.CompressionEnabled = old_content->CompressionEnabled;
        memcpy(&new_content.Receiver, &(old_content->Receiver),
               sizeof(char[64]));
        memset(&new_content.SecondaryURL, 0, sizeof(char[256]));  // new value added in VERSION 9

        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        memcpy(&new_params.ul_file_content, &new_content,
               sizeof(upload_file_content_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;
        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData.ul_parms, &new_params,
               sizeof(uploader_parms));
      }
    }

    if (event_table[event_index].eCallback == cbDeviceEventProcessor)
    {
      device_event_parms new_params;
      device_event_content_t new_content;
      memset(&new_params, 0, sizeof(device_event_parms));
      memset(&new_content, 0, sizeof(device_event_content_t));

      if (version < EVENT_SET_FILE_V10)
      {
        /* This is where we handle the difference between device_event_content_vu9_t and device_event_content_t
         * Added event time from VERSION 10 onwards */
        device_event_parms_vu9 *old_params =
            (device_event_parms_vu9*) &event_table[event_index].sCallbackData
                ._device_event_parms;
        device_event_content_vu9_t *old_content =
            (device_event_content_vu9_t*) &(old_params->device_event_content);

        /* create new content based on old instance */
        new_content.event_mask = old_content->event_mask;
        new_content.event_time = linux_time(NULL);  // Added in V10, add event time as current
        memset(&new_content.eventName, 0, sizeof(char[64]));     // Added in V10
        memcpy(&new_content.appName, &(old_content->appName), sizeof(char[64]));
        new_content.severity = old_content->severity;
        memcpy(&new_content.description, &(old_content->description),
               sizeof(char[256]));
        memcpy(&new_content.details, &(old_content->details),
               sizeof(char[512]));
        memcpy(&new_content.device_event_data,
               &(old_content->device_event_data), sizeof(device_event_data_t));

        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;
        memcpy(&new_params.device_event_content, &(new_content),
               sizeof(device_event_content_t));

        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData.downloader_parms,
               &new_params, sizeof(launch_downloader_parms));
      }
    }

    if (event_table[event_index].eCallback == cbGetDataProcessor)
    {
      if (version < EVENT_SET_FILE_V10)
      {
        get_data_parms new_params;
        get_data_content_t new_content;
        get_data_parms_vu9_t *old_params =
            (get_data_parms_vu9_t*) &event_table[event_index].sCallbackData
                ._get_data_parms;
        get_data_content_t_vu9_t *old_content =
            (get_data_content_t_vu9_t*) &(old_params->get_data_content);
        memset(&new_params, 0, sizeof(get_data_parms));
        memset(&new_content, 0, sizeof(get_data_content_t));

        /* create new content based on old instance */
        new_content.Query = old_content->Query;
        memcpy(&new_content.AppName, &(old_content->AppName), sizeof(char[64]));
        new_content.SubQuery = old_content->SubQuery;
        new_content.include_param = FALSE;  // new value added in VERSION 10

        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;

        memcpy(&new_params.get_data_content, &new_content,
               sizeof(get_data_content_t));
        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData.ul_parms, &new_params,
               sizeof(get_data_parms));
        dbg_msg("%s: version copied \n", __FUNCTION__);
      }
    }

    if (event_table[event_index].eCallback == cbSetDataProcessor)
    {
      if (version <= EVENT_SET_FILE_V10)
      {
        set_data_parms new_params;
        set_data_parms_vu10 *old_params =
            (set_data_parms_vu10*) &event_table[event_index].sCallbackData
                ._set_data_parms;
        set_data_content_t *old_content = (set_data_content_t*) &(old_params
            ->set_data_content);

        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        memcpy(&new_params.set_data_content, &old_content,
               sizeof(set_data_content_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;
        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData._set_data_parms,
               &new_params, sizeof(set_data_parms));
      }
    }

    if (event_table[event_index].eCallback == cbAppActionProcessor)
    {
      if (version <= EVENT_SET_FILE_V10)
      {
        app_action_parms new_params;
        app_action_parms_vu10 *old_params =
            (app_action_parms_vu10*) &event_table[event_index].sCallbackData
                ._app_action_parms;
        app_action_content_t *old_content = (app_action_content_t*) &(old_params
            ->app_action_content);

        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        memcpy(&new_params.app_action_content, &old_content,
               sizeof(app_action_content_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;
        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData._app_action_parms,
               &new_params, sizeof(app_action_parms));
      }
    }

    if (event_table[event_index].eCallback == cbDelFileProcessor)
    {
      if (version <= EVENT_SET_FILE_V10)
      {
        del_file_parms new_params;
        del_file_parms_vu10 *old_params =
            (del_file_parms_vu10*) &event_table[event_index].sCallbackData
                ._del_file_parms;
        del_file_content_t *old_content = (del_file_content_t*) &(old_params
            ->del_file_content);

        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        memcpy(&new_params.del_file_content, &old_content,
               sizeof(del_file_content_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;
        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData._del_file_parms,
               &new_params, sizeof(del_file_parms));
      }
    }

    if (event_table[event_index].eCallback == cbGetSwUpdateProcessor)
    {
      if (version <= EVENT_SET_FILE_V10)
      {
        get_sw_update_params new_params;
        get_sw_update_params_vu10 *old_params =
            (get_sw_update_params_vu10*) &event_table[event_index].sCallbackData
                ._get_sw_update_params;
        get_sw_update_content_t *old_content =
            (get_sw_update_content_t*) &(old_params->get_sw_update_content);

        /* create new params based on old instance */
        memcpy(&new_params.operation, &(old_params->operation),
               sizeof(operation_t));
        memcpy(&new_params.get_sw_update_content, &old_content,
               sizeof(get_sw_update_content_t));
        new_params.comm_id = old_params->comm_id;
        new_params.message_id = old_params->message_id;
        new_params.srv_msg_type = old_params->srv_msg_type;
        new_params.srv_op_type = old_params->srv_op_type;
        /* start using new params */
        memcpy(&event_table[event_index].sCallbackData._get_sw_update_params,
               &new_params, sizeof(get_sw_update_params));
      }
    }
  }
}


#ifdef VHQ_EVENT_DECODER
static bool ReadEventSchedFile_Version1(FILE* iFile, event_set_table_t* event_set_table_p)
#else
static bool ReadEventSchedFile_Version1(int iFile,
                                        event_set_table_t *event_set_table_p)
#endif
{
  int i;
  int iRet = -1;
  int entry_index = 0;
  event_set_table_VERSION_1_t v1_entry;

  iRet = read(iFile, (char*) &v1_entry, sizeof(event_set_table_VERSION_1_t));

  while (iRet == sizeof(event_set_table_VERSION_1_t))
  {
    dbg_msg(
        "%s: Read event_set_table_VERSION_1_t (%d bytes) - converting to event_set_table_p[%d]\n",
        __FUNCTION__, sizeof(event_set_table_VERSION_1_t), entry_index);

    /* Make sure this is a valid entry */
    if ((v1_entry.event_set_id != EVENT_SET_ID_INVALID)
        && (v1_entry.num_events > 0))
    {
      /* Only difference between V1 and current entries is last entry is a pointer instead of fixed sized array.
       So we can copy everything but the last 4 bytes directly */
      dbg_msg(
          "%s: Copying event_set_table_VERSION_1_t to event_set_table_p[%d]\n",
          __FUNCTION__, entry_index);
      memcpy(&event_set_table_p[entry_index], &v1_entry,
             (sizeof(event_set_table_t) - sizeof(event_table_t*)));

      /* Use the standard callbacks for any events created before an upgrade */
      event_set_table_p[entry_index].preEventCbType = cbStandard;
      event_set_table_p[entry_index].postEventCbType = cbStandard;
      dbg_msg(
          "%s: allocating %d bytes for event_set_table_p[%d].event_data_p\n",
          __FUNCTION__,
          event_set_table_p[entry_index].num_events * sizeof(event_table_t),
          entry_index);
      event_set_table_p[entry_index].event_data_p = malloc(
          event_set_table_p[entry_index].num_events * sizeof(event_table_t));
      if (event_set_table_p[entry_index].event_data_p)
      {
        int event_index;

        dbg_msg("%s: Copying %d events to event_set_table_p[%d].event_data_p\n",
                __FUNCTION__, event_set_table_p[entry_index].num_events,
                entry_index);
        memcpy(
            event_set_table_p[entry_index].event_data_p, v1_entry.event_data,
            event_set_table_p[entry_index].num_events * sizeof(event_table_t));

        dbg_msg("%s: Copied %d events to event_set_table_p[%d].event_data_p\n",
                __FUNCTION__, event_set_table_p[entry_index].num_events,
                entry_index);
        for (i = 0; i < event_set_table_p[entry_index].num_events; i++)
        {
          dbg_msg(
              "\tevent_set_table[%d].event_data_p[%d] = %s\n",
              entry_index,
              i,
              cbEnumToStr(
                  event_set_table_p[entry_index].event_data_p[i].eCallback));
        }

        for (event_index = 0;
            event_index < event_set_table[entry_index].num_events;
            event_index++)
        {
          /* This is where we handle the difference between term_act_content_v05_t and term_act_content_t */
          if (event_set_table[entry_index].event_data_p[event_index].eCallback
              == cbTerminalAction)
          {
            term_act_parms new_params;
            term_act_content_t new_content;
            term_act_parms_v05_t *old_params =
                (term_act_parms_v05_t*) &event_set_table[entry_index]
                    .event_data_p[event_index].sCallbackData.action_parms;
            term_act_content_v05_t *old_content =
                (term_act_content_v05_t*) &(old_params->term_act_content);
            memset(&new_params, 0, sizeof(term_act_parms));
            memset(&new_content, 0, sizeof(term_act_content_t));
            /* create new content based on old instance */
            new_content.op_type = old_content->op_type;
            new_content.action = old_content->action;
            new_content.action_receive_time = old_content->action_receive_time;
            new_content.set_clock_time = old_content->set_clock_time;
            /* create new params based on old instance */
            memcpy(&new_params.operation, &(old_params->operation),
                   sizeof(operation_t));
            memcpy(&new_params.term_act_content, &new_content,
                   sizeof(term_act_content_t));
            new_params.comm_id = old_params->comm_id;
            new_params.message_id = old_params->message_id;
            new_params.srv_msg_type = old_params->srv_msg_type;
            new_params.srv_op_type = old_params->srv_op_type;
            /* start using new params */
            memcpy(
                &event_set_table[entry_index].event_data_p[event_index]
                    .sCallbackData.action_parms,
                &new_params, sizeof(term_act_parms));

            dbg_msg(
                "%s: event %d - updated terminal action event data:\n\tcomm_id=%d\n\tmsg_id=%d\n\tsrv_op_type=%d\n",
                __FUNCTION__,
                event_index,
                GetCommId(
                    &event_set_table[entry_index].event_data_p[event_index]),
                GetMsgId(
                    &event_set_table[entry_index].event_data_p[event_index]),
                GetSrvOpType(
                    &event_set_table[entry_index].event_data_p[event_index]));
          }

          /* This is where we handle the difference between _download_file_content_vu2_t and _download_file_content_t */
          if (event_set_table[entry_index].event_data_p[event_index].eCallback
              == cbLaunchDownloader)
          {
            launch_downloader_parms new_params;
            download_file_content_t new_content;
            memset(&new_params, 0, sizeof(launch_downloader_parms));
            memset(&new_content, 0, sizeof(download_file_content_t));

            launch_downloader_parms_vu2 *old_params =
                (launch_downloader_parms_vu2*) &event_set_table[entry_index]
                    .event_data_p[event_index].sCallbackData.downloader_parms;
            download_file_content_vu2_t *old_content =
                (download_file_content_vu2_t*) &(old_params->dl_file_content);

            /* create new content based on old instance */
            new_content.Method = old_content->Method;
            memcpy(&new_content.FileName, &(old_content->FileName),
                   sizeof(char[256]));
            new_content.FileSize = old_content->FileSize;
            new_content.DownloadType = old_content->DownloadType;
            new_content.HashAlgo = old_content->HashAlgo;
            memcpy(&new_content.User, &(old_content->User), sizeof(char[64]));
            memcpy(&new_content.PW, &(old_content->PW), sizeof(char[64]));
            memcpy(&new_content.URL, &(old_content->URL), sizeof(char[256]));
            memcpy(&new_content.username, &(old_content->username),
                   sizeof(char[64]));
            new_content.ApplyOnDate = old_content->ApplyOnDate;
            new_content.ExpirationDate = old_content->ExpirationDate;
            new_content.PostInstallAction = old_content->PostInstallAction;
            new_content.SuppressReboot = old_content->SuppressReboot;
            new_content.CompressionEnabled = old_content->CompressionEnabled;
            memcpy(&new_content.Receiver, &(old_content->Receiver),
                   sizeof(char[64]));
            memcpy(&new_content.Hash, &(old_content->Hash),
                   sizeof(char[64 + 1]));

            new_content.DelayInstallTime = 0;  // new value added in VERSION 8
            memset(&new_content.SecondaryURL, 0, sizeof(char[256]));  // new value added in VERSION 9

            /* create new params based on old instance */
            memcpy(&new_params.operation, &(old_params->operation),
                   sizeof(operation_t));
            memcpy(&new_params.dl_file_content, &(new_content),
                   sizeof(download_file_content_t));
            new_params.comm_id = old_params->comm_id;
            new_params.message_id = old_params->message_id;
            new_params.srv_msg_type = old_params->srv_msg_type;
            new_params.srv_op_type = old_params->srv_op_type;
            /* start using new params */
            memcpy(
                &event_set_table[entry_index].event_data_p[event_index]
                    .sCallbackData.downloader_parms,
                &new_params, sizeof(launch_downloader_parms));

            dbg_msg(
                "%s: event %d - updated download event data:\n\tcomm_id=%d\n\tmsg_id=%d\n\tsrv_op_type=%d\n",
                __FUNCTION__,
                event_index,
                GetCommId(
                    &event_set_table[entry_index].event_data_p[event_index]),
                GetMsgId(
                    &event_set_table[entry_index].event_data_p[event_index]),
                GetSrvOpType(
                    &event_set_table[entry_index].event_data_p[event_index]));
          }
          if (event_set_table[entry_index].event_data_p[event_index].eCallback
              == cbFileUploader)
          {
            uploader_parms new_params;
            upload_file_content_t new_content;
            uploader_parms_vu8_t *old_params =
                (uploader_parms_vu8_t*) &event_set_table[entry_index]
                    .event_data_p[event_index].sCallbackData.ul_parms;
            upload_file_content_vu8_t *old_content =
                (upload_file_content_vu8_t*) &(old_params->ul_file_content);

            memset(&new_params, 0, sizeof(uploader_parms));
            memset(&new_content, 0, sizeof(upload_file_content_t));

            /* create new content based on old instance */
            new_content.Type = old_content->Type;
            memcpy(&new_content.FileName, &(old_content->FileName),
                   sizeof(char[256]));
            new_content.Method = old_content->Method;
            memcpy(&new_content.URL, &(old_content->URL), sizeof(char[256]));
            memcpy(&new_content.WebMethod, &(old_content->WebMethod),
                   sizeof(char[64]));
            memcpy(&new_content.User, &(old_content->User), sizeof(char[64]));
            memcpy(&new_content.PW, &(old_content->PW), sizeof(char[64]));
            new_content.CompressionEnabled = old_content->CompressionEnabled;
            memcpy(&new_content.Receiver, &(old_content->Receiver),
                   sizeof(char[64]));
            memset(&new_content.SecondaryURL, 0, sizeof(char[256]));

            /* create new params based on old instance */
            memcpy(&new_params.operation, &(old_params->operation),
                   sizeof(operation_t));
            memcpy(&new_params.ul_file_content, &new_content,
                   sizeof(upload_file_content_t));
            new_params.comm_id = old_params->comm_id;
            new_params.message_id = old_params->message_id;
            new_params.srv_msg_type = old_params->srv_msg_type;
            new_params.srv_op_type = old_params->srv_op_type;
            /* start using new params */
            memcpy(
                &event_set_table[entry_index].event_data_p[event_index]
                    .sCallbackData.ul_parms,
                &new_params, sizeof(uploader_parms));

            dbg_msg(
                "%s: event %d - updated upload event data:\n\tcomm_id=%d\n\tmsg_id=%d\n\tsrv_op_type=%d\n",
                __FUNCTION__,
                event_index,
                GetCommId(
                    &event_set_table[entry_index].event_data_p[event_index]),
                GetMsgId(
                    &event_set_table[entry_index].event_data_p[event_index]),
                GetSrvOpType(
                    &event_set_table[entry_index].event_data_p[event_index]));
          }
          if (event_set_table[entry_index].event_data_p[event_index].eCallback
              == cbGetDataProcessor)
          {
            get_data_parms new_params;
            get_data_content_t new_content;

            get_data_parms_vu9_t *old_params =
                (get_data_parms_vu9_t*) &event_set_table[entry_index]
                    .event_data_p[event_index].sCallbackData._get_data_parms;
            get_data_content_t_vu9_t *old_content =
                (get_data_content_t_vu9_t*) &(old_params->get_data_content);

            memset(&new_params, 0, sizeof(get_data_parms));
            memset(&new_content, 0, sizeof(get_data_content_t));

            /* create new content based on old instance */
            new_content.Query = old_content->Query;
            memcpy(&new_content.AppName, &(old_content->AppName),
                   sizeof(char[64]));
            new_content.SubQuery = old_content->SubQuery;
            new_content.include_param = FALSE;  // new value added in VERSION 10

            /* create new params based on old instance */
            memcpy(&new_params.operation, &(old_params->operation),
                   sizeof(operation_t));
            memcpy(&new_params.get_data_content, &new_content,
                   sizeof(get_data_content_t));
            new_params.comm_id = old_params->comm_id;
            new_params.message_id = old_params->message_id;
            new_params.srv_msg_type = old_params->srv_msg_type;
            new_params.srv_op_type = old_params->srv_op_type;
            /* start using new params */
            memcpy(
                &event_set_table[entry_index].event_data_p[event_index]
                    .sCallbackData._get_data_parms,
                &new_params, sizeof(get_data_parms));

            dbg_msg(
                "%s: event %d - updated upload event data:\n\tcomm_id=%d\n\tmsg_id=%d\n\tsrv_op_type=%d\n",
                __FUNCTION__,
                event_index,
                GetCommId(
                    &event_set_table[entry_index].event_data_p[event_index]),
                GetMsgId(
                    &event_set_table[entry_index].event_data_p[event_index]),
                GetSrvOpType(
                    &event_set_table[entry_index].event_data_p[event_index]));
          }

          /* Old code assumed all executing downloads were complete if they were interrupted by power cycle.
           We'll do the same here by marking any executing event as complete */
          if (event_set_table[entry_index].event_data_p[event_index].executing)
          {
            event_set_table[entry_index].event_data_p[event_index].executing =
            EXECUTING_MASK | COMPLETE_MASK;
            dbg_msg(
                "%s: V1 event_set_table[%d].event_data[%d].executing flag converted to %d\n",
                __FUNCTION__,
                entry_index,
                event_index,
                event_set_table[entry_index].event_data_p[event_index].executing);

            event_set_table[entry_index].executing_index = event_index + 1;
          }

          if (event_set_table[entry_index].event_data_p[event_index].event_id
              == EVENT_ID_INVALID)
          {
            /* We need to make sure all events in the table have valid event ids */
            _cur_event_id++;
            if ((_cur_event_id == EVENT_ID_UNKNOWN)
                || (_cur_event_id == EVENT_ID_INVALID))
              _cur_event_id = 1;
            event_set_table[entry_index].event_data_p[event_index].event_id =
                _cur_event_id;
          }
        }

        entry_index++;
      }
      else
      {
        dbg_err(
            "%s: Unable to malloc memory (%d bytes) for %d events - clearing event_set_table_p[%d]\n",
            __FUNCTION__,
            event_set_table_p[entry_index].num_events * sizeof(event_table_t),
            event_set_table_p[entry_index].num_events, entry_index);

        /* Clear the entry */
        memset(&event_set_table_p[entry_index], 0, sizeof(event_set_table_t));
        event_set_table_p[entry_index].event_set_id = EVENT_SET_ID_INVALID;
      }
    }
    else
    {
      dbg_err(
          "%s: Invalid V1 entry - event_set_id = %d, num_events = %d - reading next entry\n",
          __FUNCTION__, v1_entry.event_set_id, v1_entry.num_events);
    }

    /* Read the next entry */
    iRet = read(iFile, (char*) &v1_entry, sizeof(event_set_table_VERSION_1_t));
  }

  if (iRet == 0)
  {
    dbg_msg(
        "%s: Read %d event_set_table_VERSION_1_t entries into event_set_table_p\n",
        __FUNCTION__, entry_index);

    /* Update header information */
    strcpy(event_set_file_header.fixed_header_data,
    EVENT_SET_FILE_HEADER_OLD_VERSION);
    event_set_file_header.version = 1;
    event_set_file_header.num_event_sets = entry_index;

    return TRUE;
  }
  else
  {
    dbg_err(
        "%s: %s file size mismatch - %d bytes leftover - sizeof(event_set_table_VERSION_1_t) = %d\n\tCLEARING event_set_table_p\n",
        __FUNCTION__, VHQ_EVENT_SET_FILE, sizeof(event_set_table_VERSION_1_t));

    /* Put event set table back to empty state since we can't trust any of the data we read */
    memset(event_set_table_p, 0, sizeof(event_set_table_t) * MAX_EVENT_SETS);
    for (i = 0; i < MAX_EVENT_SETS; i++)
      event_set_table_p[i].event_set_id = EVENT_SET_ID_INVALID;

    return FALSE;
  }
}

/******************************************************************************
 * Function:      remove_events_table
 * Description:   Function removes events table, required for crash callback
 *
 * Parameters:    NONE
 *
 * Return Value:  NONE
 *****************************************************************************/
static void remove_events_table()
{
  /* Remove events table file */
  if (removeFile(VHQ_EVENT_SET_FILE))
    log_dbg("%s: File %s removed\n", __FUNCTION__, VHQ_EVENT_SET_FILE);
  else
    log_err("%s: Couldn't remove file %s\n", __FUNCTION__, VHQ_EVENT_SET_FILE);

  if (removeFile(VHQ_EVENT_SET_FILE_BK1))
    log_dbg("%s: File %s removed\n", __FUNCTION__, VHQ_EVENT_SET_FILE_BK1);


  if (removeFile(VHQ_EVENT_SET_FILE_BK2))
    log_dbg("%s: File %s removed\n", __FUNCTION__, VHQ_EVENT_SET_FILE_BK2);

// R12 possible improvement
#if 0
    {
        int entry_index;
        /* Erase events table in memory. Simple erase, correct erase is not required and not safe here */
        for (entry_index = 0; entry_index < MAX_EVENT_SETS; entry_index++)
        {
            /* Clear the entry */
            memset(&event_set_table[entry_index], 0, sizeof(event_set_table_t));
            event_set_table[entry_index].event_set_id = EVENT_SET_ID_INVALID;
        }
        /* Create new record to notify server */
        sendEvents(EVENT_SYSTEM_FAIL, NULL, 0, "Agent Crash", "Events table removed", NULL);
    }
#endif
}



#ifdef VHQ_EVENT_DECODER
static bool ReadEventSchedFile(FILE* iFile, event_set_table_t* event_set_table_p, uint32 version, uint32 num_entries)
#else
static bool ReadEventSchedFile(int iFile, event_set_table_t *event_set_table_p,
                               uint32 version, uint32 num_entries)
#endif
{
  uint32 loop_count = 0;
  int entry_index = 0;
  int num_events_read = 0;
  int num_event_sets_read = 0;

  for (loop_count = 0; loop_count < num_entries; loop_count++)
  {
    int i = 0;
    int bytes_read = -1;
    bool bReadFail = FALSE;

    switch (version)
    {
      case 2:
        /* Version 3 Added preEventCbType & postEventCbType */
        bytes_read = read(iFile, (char*) &event_set_table_p[entry_index],
                          sizeof(event_set_table_VERSION_2_t));

        if (bytes_read != sizeof(event_set_table_VERSION_2_t))
        {
          bReadFail = TRUE;
        }
        break;
      case 3:
        /* Version 3 event_set_table_t is same as Version 4 change in COMPLETE MASK */
      case 4:
        /* Version 4 Added Complete mask */
        bytes_read = read(iFile, (char*) &event_set_table_p[entry_index],
                          sizeof(event_set_table_VERSION_4_t));

        if (bytes_read != sizeof(event_set_table_VERSION_4_t))
        {
          bReadFail = TRUE;
        }
        break;
      case 5:
        /* Version 5 event_set_table_t is same as Version 6, key_exchange_event_set, original_run_time & EventSetResponseDoc added */
      case 6:
        /* Change in term_act_content_t older struct term_act_parms_v05_t for Set Clock timezone */
        bytes_read = read(iFile, (char*) &event_set_table_p[entry_index],
                          sizeof(event_set_table_VERSION_6_t));

        if (bytes_read != sizeof(event_set_table_VERSION_6_t))
        {
          bReadFail = TRUE;
        }
        break;
      case 7:
        /* Diff between 6 & 7, EventSetResponseDoc field is removed from event_set_table_t
         * Same events set table as VERSION 8, let the code fall to case 8 */
      case 8:
        /* Diff between 7 & 8, Added Delay option for downloads */
        /* Same events set table as VERSION 9, let the code fall to case 8 */
      case 9:
        /* Diff between 8 & 9, Added SecondaryURL option for downloads and uploads */
      case 10:
        /* Diff between 9 & 10, Added event time and event name to device events */
        /* Diff between 9 & 10, Added include_parm option for getdata */
      case 11:
        /* Diff between 10 & 11, Event sets table restructuring for backward compatibility */
        bytes_read = read(iFile, (char*) &event_set_table_p[entry_index],
                          sizeof(event_set_table_t));

        dbg_msg("%s: entry_index: %d, reading %d entries, read %d\n",
                __FUNCTION__, entry_index,
                event_set_table_p[entry_index].num_events, bytes_read);

        if (bytes_read != sizeof(event_set_table_t))
        {
          bReadFail = TRUE;
        }
        break;
      default:
        log_err("%s: Invalid VERSION %d \n", __FUNCTION__, version);
        bReadFail = TRUE;
        break;
    }

    /* Make sure we have a multiple of event_set_table_t since we will not store empty spaces */
    if (bReadFail)
    {
      dbg_msg("%s: Couldn't read event set table entry %d from event table\n",
              __FUNCTION__, entry_index);
      for (i = entry_index; i < MAX_EVENT_SETS; i++)
        event_set_table_p[i].event_set_id = EVENT_SET_ID_INVALID;

      /* If we weren't able to read the first entry, then return FALSE, otherwise we were able to read some
       of the file so don't try to read older versions */
      return !(entry_index == 0);
    }
    else
    {
      int event_set_size = 0;
      event_set_size = event_set_table_p[entry_index].num_events
          * sizeof(event_table_t);

      if (version < EVENT_SET_FILE_V5)
      {
        event_set_table_p[entry_index].key_exchange_event_set = FALSE;
        event_set_table_p[entry_index].original_run_time = 0;
      }

      if (version < EVENT_SET_FILE_V3)
      {
        /* Use the standard callbacks for any events created before an upgrade */
        event_set_table_p[entry_index].preEventCbType = cbStandard;
        event_set_table_p[entry_index].postEventCbType = cbStandard;
      }

      event_set_table_p[entry_index].event_data_p = malloc(event_set_size);

      if (event_set_table_p[entry_index].event_data_p)
      {
        int event_index = 0;

        num_events_read += event_set_table_p[entry_index].num_events;

        bytes_read = read(iFile,
                          (char*) event_set_table_p[entry_index].event_data_p,
                          event_set_size);

        if (bytes_read != event_set_size)
        {
          dbg_err(
              "%s: File sync error reading %d entries (read %d, expected %d) - returning FALSE\n",
              __FUNCTION__, event_set_table_p[entry_index].num_events,
              bytes_read, event_set_size);

          for (i = 0; i < entry_index; i++)
          {
            free(event_set_table_p[i].event_data_p);
            event_set_table_p[i].event_data_p = NULL;
          }

          return FALSE;
        }

        RestoreCallbackFunction(event_set_table_p[entry_index].event_data_p,
                                event_set_table_p[entry_index].num_events,
                                &event_set_table_p[entry_index].executing_index,
                                version);

        for (event_index = 0;
            event_index < event_set_table[entry_index].num_events;
            event_index++)
        {
          if (event_set_table[entry_index].event_data_p[event_index].event_id
              == EVENT_ID_INVALID)
          {
            /* We need to make sure all events in the table have valid event ids */
            _cur_event_id++;
            if ((_cur_event_id == EVENT_ID_UNKNOWN)
                || (_cur_event_id == EVENT_ID_INVALID))
              _cur_event_id = 1;
            event_set_table[entry_index].event_data_p[event_index].event_id =
                _cur_event_id;
          }
        }

        entry_index++;
      }
      else
      {
        dbg_err(
            "%s: Unable to malloc memory (%d bytes) for %d events - clearing event_set_table_p[%d]\n",
            __FUNCTION__, event_set_size,
            event_set_table_p[entry_index].num_events, entry_index);

        /* We need to read and discard the events to stay in sync with the file */
        for (i = 0; i < event_set_table_p[entry_index].num_events; i++)
        {
          event_table_t discard_entry;

          bytes_read = read(iFile, (char*) &discard_entry,
                            sizeof(event_table_t));
          if (bytes_read == sizeof(event_table_t))
          {
            log_err(
                "%s: Discarding entry %d in event_set_table_p[%d] due to insufficient memory - tpye = %s\n",
                __FUNCTION__, i, loop_count,
                cbEnumToStr(discard_entry.eCallback));
          }
          else
          {
            log_err(
                "%s: File sync error reading VERSION %d (read %d, expected %d) - returning FALSE\n",
                __FUNCTION__, version, bytes_read, sizeof(event_table_t));
            return FALSE;
          }

        }

        /* Clear the entry */
        memset(&event_set_table_p[entry_index], 0, sizeof(event_set_table_t));
        event_set_table_p[entry_index].event_set_id = EVENT_SET_ID_INVALID;
      }
    }
  }

  num_event_sets_read = entry_index;

  while (entry_index < MAX_EVENT_SETS)
  {
    event_set_table_p[entry_index].event_set_id = EVENT_SET_ID_INVALID;
    entry_index++;
  }

  if ((num_event_sets_read > 0) || (num_events_read > 0))
  {
    dbg_msg("%s: Read %d events into %d event_sets\n", __FUNCTION__,
            num_events_read, num_event_sets_read);
  }

  return TRUE;
}

static void ReadVersion0EventSetTable(void) /* reads events tables up to R2.10.16 */
{
  int iFile = -1;
  int entry_index = 0;
  event_set_table_VERSION_0_t ver_0_event;

  /* Start with a clear table */
  memset(&event_set_table, 0, sizeof(event_set_table));
  for (entry_index = 0; entry_index < MAX_EVENT_SETS; entry_index++)
  {
    event_set_table[entry_index].event_set_id = EVENT_SET_ID_INVALID;
  }

  // make sure storage location exists
  iFile = open(VHQ_EVENT_SET_FILE, O_RDONLY);
  if (iFile != -1)
  {
    int read_size;

    read_size = read(iFile, (char*) &ver_0_event,
                     sizeof(event_set_table_VERSION_0_t));

    /* Start reading into slot 0 */
    entry_index = 0;

    while (read_size == sizeof(event_set_table_VERSION_0_t))
    {
      dbg_msg(
          "%s: Read VERSION_0 event set entry %d from %s - converting to current version\n",
          __FUNCTION__, entry_index, VHQ_EVENT_SET_FILE);

      event_set_table[entry_index].event_data_p = malloc(
          ver_0_event.num_events * sizeof(event_table_t));

      if (event_set_table[entry_index].event_data_p)
      {
        int event_index;

        /* Copy the VERSION 0 entry to the current entry table */
        event_set_table[entry_index].event_set_id = ver_0_event.event_set_id;
        event_set_table[entry_index].operation_set_id = ver_0_event
            .operation_set_id;
        event_set_table[entry_index].recurring = ver_0_event.recurring;
        if (ver_0_event.executing)
          event_set_table[entry_index].executing_index = 1;
        else
          event_set_table[entry_index].executing_index = 0;
        event_set_table[entry_index].next_run_time = ver_0_event.next_run_time;
        event_set_table[entry_index].recur_units = ver_0_event.recur_units;
        event_set_table[entry_index].recur_period = ver_0_event.recur_period;
        event_set_table[entry_index].expiration_date = ver_0_event
            .expiration_date;
        event_set_table[entry_index].retry_freq = ver_0_event.retry_freq;
        event_set_table[entry_index].num_events = ver_0_event.num_events;
        event_set_table[entry_index].dependency_event_set = ver_0_event
            .dependency_event_set;
        event_set_table[entry_index].timer_type = ver_0_event.timer_type;

        /* Any VERSION 0 events will go to the primary server instance */
        strcpy(event_set_table[entry_index].server_instance,
        PRIMARY_SERVER_INSTANCE_NAME);

        /* Use the standard callbacks for any events created before an upgrade */
        event_set_table[entry_index].preEventCbType = cbStandard;
        event_set_table[entry_index].postEventCbType = cbStandard;

        memcpy(event_set_table[entry_index].event_data_p,
               ver_0_event.event_data,
               (sizeof(event_table_t) * ver_0_event.num_events));

        dbg_msg("%s: Copied %d VERSION_0 events into event_set_table[%d]\n",
                __FUNCTION__, ver_0_event.num_events, entry_index);

        for (event_index = 0;
            event_index < event_set_table[entry_index].num_events;
            event_index++)
        {
          /* This is where we handle the difference between term_act_content_vu_t and term_act_content_t */
          if (event_set_table[entry_index].event_data_p[event_index].eCallback
              == cbTerminalAction)
          {
            term_act_parms new_params;
            term_act_content_t new_content;
            term_act_parms_vu_t *old_params =
                (term_act_parms_vu_t*) &event_set_table[entry_index]
                    .event_data_p[event_index].sCallbackData.action_parms;
            term_act_content_vu_t *old_content =
                (term_act_content_vu_t*) &(old_params->term_act_content);
            memset(&new_params, 0, sizeof(term_act_parms));
            memset(&new_content, 0, sizeof(term_act_content_t));
            /* create new content based on old instance */
            new_content.op_type = old_content->op_type;
            new_content.action = old_content->action;
            new_content.set_clock_time = old_content->set_clock_time;
            /* create new params based on old instance */
            memcpy(&new_params.operation, &(old_params->operation),
                   sizeof(operation_t));
            memcpy(&new_params.term_act_content, &new_content,
                   sizeof(term_act_content_t));
            new_params.comm_id = old_params->comm_id;
            new_params.message_id = old_params->message_id;
            new_params.srv_msg_type = old_params->srv_msg_type;
            new_params.srv_op_type = old_params->srv_op_type;
            /* start using new params */
            memcpy(
                &event_set_table[entry_index].event_data_p[event_index]
                    .sCallbackData.action_parms,
                &new_params, sizeof(term_act_parms));

            dbg_msg(
                "%s: event %d - updated terminal action event data:\n\tcomm_id=%d\n\tmsg_id=%d\n\tsrv_op_type=%d\n",
                __FUNCTION__,
                event_index,
                GetCommId(
                    &event_set_table[entry_index].event_data_p[event_index]),
                GetMsgId(
                    &event_set_table[entry_index].event_data_p[event_index]),
                GetSrvOpType(
                    &event_set_table[entry_index].event_data_p[event_index]));
          }

          /* This is where we handle the difference between _download_file_content_vu2_t and _download_file_content_t */
          if (event_set_table[entry_index].event_data_p[event_index].eCallback
              == cbLaunchDownloader)
          {
            launch_downloader_parms new_params;
            download_file_content_t new_content;
            launch_downloader_parms_vu2 *old_params =
                (launch_downloader_parms_vu2*) &event_set_table[entry_index]
                    .event_data_p[event_index].sCallbackData.downloader_parms;
            download_file_content_vu2_t *old_content =
                (download_file_content_vu2_t*) &(old_params->dl_file_content);
            memset(&new_params, 0, sizeof(launch_downloader_parms));
            memset(&new_content, 0, sizeof(download_file_content_t));
            /* create new content based on old instance */
            memcpy(&new_content, old_content,
                   sizeof(download_file_content_vu2_t));
            /* create new params based on old instance */
            memcpy(&new_params.operation, &(old_params->operation),
                   sizeof(operation_t));
            memcpy(&new_params.dl_file_content, &new_content,
                   sizeof(download_file_content_t));
            new_params.comm_id = old_params->comm_id;
            new_params.message_id = old_params->message_id;
            new_params.srv_msg_type = old_params->srv_msg_type;
            new_params.srv_op_type = old_params->srv_op_type;
            /* start using new params */
            memcpy(
                &event_set_table[entry_index].event_data_p[event_index]
                    .sCallbackData.downloader_parms,
                &new_params, sizeof(launch_downloader_parms));

            dbg_msg(
                "%s: event %d - updated download event data:\n\tcomm_id=%d\n\tmsg_id=%d\n\tsrv_op_type=%d\n",
                __FUNCTION__,
                event_index,
                GetCommId(
                    &event_set_table[entry_index].event_data_p[event_index]),
                GetMsgId(
                    &event_set_table[entry_index].event_data_p[event_index]),
                GetSrvOpType(
                    &event_set_table[entry_index].event_data_p[event_index]));
          }

          /* Old code assumed all executing downloads were complete if they were interrupted by power cycle.
           We'll do the same here by marking any executing event as complete */
          if (event_set_table[entry_index].event_data_p[event_index].executing)
          {
            event_set_table[entry_index].event_data_p[event_index].executing =
            EXECUTING_MASK | COMPLETE_MASK;
            dbg_msg(
                "%s: V0 event_set_table[%d].event_data[%d].executing flag converted to %d\n",
                __FUNCTION__,
                entry_index,
                event_index,
                event_set_table[entry_index].event_data_p[event_index].executing);

            event_set_table[entry_index].executing_index = event_index + 1;
          }

          if (event_set_table[entry_index].event_data_p[event_index].event_id
              == EVENT_ID_INVALID)
          {
            /* We need to make sure all events in the table have valid event ids */
            _cur_event_id++;
            if ((_cur_event_id == EVENT_ID_UNKNOWN)
                || (_cur_event_id == EVENT_ID_INVALID))
              _cur_event_id = 1;
            event_set_table[entry_index].event_data_p[event_index].event_id =
                _cur_event_id;
          }
        }

        entry_index++;
      }
      else
      {
        log_err(
            "%s: Unable to malloc memory (%d bytes) for %d events - skipping VERSION_0 entry\n",
            __FUNCTION__, ver_0_event.num_events * sizeof(event_table_t),
            ver_0_event.num_events, entry_index);
      }

      /* Read the next entry */
      read_size = read(iFile, (char*) &ver_0_event,
                       sizeof(event_set_table_VERSION_0_t));
    }

    dbg_msg("%s: Read %d VERSION_0 entries into event_set_table\n",
            __FUNCTION__, entry_index);

    /* Update header information */
    strcpy(event_set_file_header.fixed_header_data,
    EVENT_SET_FILE_HEADER_OLD_VERSION);
    event_set_file_header.version = 0;
    event_set_file_header.num_event_sets = entry_index;

    close(iFile);
  }
  else
  {
    dbg_msg(
        "%s: Couldn't open event table file %s - starting with clear table\n",
        __FUNCTION__, VHQ_EVENT_SET_FILE);
  }
}

static void ReadR10Version2EventSetTable(void)
{
  int iFile = -1;
  int entry_index = 0;
  event_set_table_R10_VERSION_2_t r10_v2_event;

  /* Start with a clear table */
  memset(&event_set_table, 0, sizeof(event_set_table));
  for (entry_index = 0; entry_index < MAX_EVENT_SETS; entry_index++)
  {
    event_set_table[entry_index].event_set_id = EVENT_SET_ID_INVALID;
  }

  // make sure storage location exists
  iFile = open(VHQ_EVENT_SET_FILE, O_RDONLY);
  if (iFile != -1)
  {
    int read_size;

    read_size = read(iFile, (char*) &r10_v2_event,
                     sizeof(event_set_table_R10_VERSION_2_t));

    /* Start reading into slot 0 */
    entry_index = 0;

    while (read_size == sizeof(event_set_table_R10_VERSION_2_t))
    {
      /* Make sure we have an R10 V2 event */
      if (strcmp(r10_v2_event.ver_string, EVENT_SET_TABLE_R10_VER_2_STRING)
          == 0)
      {
        dbg_msg(
            "%s: Read R10 VERSION_2 event set entry %d from %s - converting to current version\n",
            __FUNCTION__, entry_index, VHQ_EVENT_SET_FILE);

        event_set_table[entry_index].event_data_p = malloc(
            r10_v2_event.num_events * sizeof(event_table_t));

        if (event_set_table[entry_index].event_data_p)
        {
          int event_index;

          /* Copy the R10 VERSION 2 entry to the current entry table */
          event_set_table[entry_index].event_set_id = r10_v2_event.event_set_id;
          event_set_table[entry_index].operation_set_id = r10_v2_event
              .operation_set_id;
          event_set_table[entry_index].recurring = r10_v2_event.recurring;
          if (r10_v2_event.executing)
            event_set_table[entry_index].executing_index = 1;
          else
            event_set_table[entry_index].executing_index = 0;
          event_set_table[entry_index].next_run_time = r10_v2_event
              .next_run_time;
          event_set_table[entry_index].recur_units = r10_v2_event.recur_units;
          event_set_table[entry_index].recur_period = r10_v2_event.recur_period;
          event_set_table[entry_index].expiration_date = r10_v2_event
              .expiration_date;
          event_set_table[entry_index].retry_freq = r10_v2_event.retry_freq;
          event_set_table[entry_index].num_events = r10_v2_event.num_events;
          event_set_table[entry_index].dependency_event_set = r10_v2_event
              .dependency_event_set;
          event_set_table[entry_index].timer_type = r10_v2_event.timer_type;

          /* Copy server instance */
          strcpy(event_set_table[entry_index].server_instance,
                 r10_v2_event.server_instance);

          /* Use the standard callbacks for any events created before an upgrade */
          event_set_table[entry_index].preEventCbType = cbStandard;
          event_set_table[entry_index].postEventCbType = cbStandard;

          memcpy(event_set_table[entry_index].event_data_p,
                 r10_v2_event.event_data,
                 (sizeof(event_table_t) * r10_v2_event.num_events));

          dbg_msg(
              "%s: Copied %d R10 VERSION_2 events into event_set_table[%d]\n",
              __FUNCTION__, r10_v2_event.num_events, entry_index);

          for (event_index = 0;
              event_index < event_set_table[entry_index].num_events;
              event_index++)
          {
            /* This is where we handle the difference between term_act_content_v05_t and term_act_content_t */
            if (event_set_table[entry_index].event_data_p[event_index].eCallback
                == cbTerminalAction)
            {
              term_act_parms new_params;
              term_act_content_t new_content;
              term_act_parms_v05_t *old_params =
                  (term_act_parms_v05_t*) &event_set_table[entry_index]
                      .event_data_p[event_index].sCallbackData.action_parms;
              term_act_content_v05_t *old_content =
                  (term_act_content_v05_t*) &(old_params->term_act_content);
              memset(&new_params, 0, sizeof(term_act_parms));
              memset(&new_content, 0, sizeof(term_act_content_t));
              /* create new content based on old instance */
              new_content.op_type = old_content->op_type;
              new_content.action = old_content->action;
              new_content.action_receive_time =
                  old_content->action_receive_time;
              new_content.set_clock_time = old_content->set_clock_time;
              /* create new params based on old instance */
              memcpy(&new_params.operation, &(old_params->operation),
                     sizeof(operation_t));
              memcpy(&new_params.term_act_content, &new_content,
                     sizeof(term_act_content_t));
              new_params.comm_id = old_params->comm_id;
              new_params.message_id = old_params->message_id;
              new_params.srv_msg_type = old_params->srv_msg_type;
              new_params.srv_op_type = old_params->srv_op_type;
              /* start using new params */
              memcpy(
                  &event_set_table[entry_index].event_data_p[event_index]
                      .sCallbackData.action_parms,
                  &new_params, sizeof(term_act_parms));

              dbg_msg(
                  "%s: event %d - updated terminal action event data:\n\tcomm_id=%d\n\tmsg_id=%d\n\tsrv_op_type=%d\n",
                  __FUNCTION__,
                  event_index,
                  GetCommId(
                      &event_set_table[entry_index].event_data_p[event_index]),
                  GetMsgId(
                      &event_set_table[entry_index].event_data_p[event_index]),
                  GetSrvOpType(
                      &event_set_table[entry_index].event_data_p[event_index]));
            }

            /* This is where we handle the difference between _download_file_content_vu2_t and _download_file_content_t */
            if (event_set_table[entry_index].event_data_p[event_index].eCallback
                == cbLaunchDownloader)
            {
              launch_downloader_parms new_params;
              download_file_content_t new_content;
              launch_downloader_parms_vu2 *old_params =
                  (launch_downloader_parms_vu2*) &event_set_table[entry_index]
                      .event_data_p[event_index].sCallbackData.downloader_parms;
              download_file_content_vu2_t *old_content =
                  (download_file_content_vu2_t*) &(old_params->dl_file_content);
              memset(&new_params, 0, sizeof(launch_downloader_parms));
              memset(&new_content, 0, sizeof(download_file_content_t));
              /* create new content based on old instance */
              memcpy(&new_content, old_content,
                     sizeof(download_file_content_vu2_t));
              /* create new params based on old instance */
              memcpy(&new_params.operation, &(old_params->operation),
                     sizeof(operation_t));
              memcpy(&new_params.dl_file_content, &new_content,
                     sizeof(download_file_content_t));
              new_params.comm_id = old_params->comm_id;
              new_params.message_id = old_params->message_id;
              new_params.srv_msg_type = old_params->srv_msg_type;
              new_params.srv_op_type = old_params->srv_op_type;
              /* start using new params */
              memcpy(
                  &event_set_table[entry_index].event_data_p[event_index]
                      .sCallbackData.downloader_parms,
                  &new_params, sizeof(launch_downloader_parms));

              dbg_msg(
                  "%s: event %d - updated download event data:\n\tcomm_id=%d\n\tmsg_id=%d\n\tsrv_op_type=%d\n",
                  __FUNCTION__,
                  event_index,
                  GetCommId(
                      &event_set_table[entry_index].event_data_p[event_index]),
                  GetMsgId(
                      &event_set_table[entry_index].event_data_p[event_index]),
                  GetSrvOpType(
                      &event_set_table[entry_index].event_data_p[event_index]));
            }

            /* Mitch - 10-4-2016: R10 V2 sets up the COMPLETE_MASK correctly so we don't need to do
             that here.  We just need to make sure all of the events have a valid event_id */
            if (event_set_table[entry_index].event_data_p[event_index].event_id
                == EVENT_ID_INVALID)
            {
              /* We need to make sure all events in the table have valid event ids */
              _cur_event_id++;
              if ((_cur_event_id == EVENT_ID_UNKNOWN)
                  || (_cur_event_id == EVENT_ID_INVALID))
                _cur_event_id = 1;
              event_set_table[entry_index].event_data_p[event_index].event_id =
                  _cur_event_id;
            }
          }

          entry_index++;
        }
        else
        {
          log_err(
              "%s: Unable to malloc memory (%d bytes) for %d events - skipping R10 VERSION_2 entry\n",
              __FUNCTION__, r10_v2_event.num_events * sizeof(event_table_t),
              r10_v2_event.num_events, entry_index);
        }
      }
      else
      {
        log_err("%s: R10 V2 version string mismatch - skipping event\n",
                __FUNCTION__);
      }

      /* Read the next entry */
      read_size = read(iFile, (char*) &r10_v2_event,
                       sizeof(event_set_table_R10_VERSION_2_t));
    }

    dbg_msg("%s: Read %d R10 VERSION_2 entries into event_set_table\n",
            __FUNCTION__, entry_index);

    /* Update header information */
    strcpy(event_set_file_header.fixed_header_data,
    EVENT_SET_FILE_HEADER_OLD_VERSION);
    /* The version here isn't important as we convert to latest version once we write the file to FLASH */
    event_set_file_header.version = 0;
    event_set_file_header.num_event_sets = entry_index;

    close(iFile);
  }
  else
  {
    dbg_msg(
        "%s: Couldn't open event table file %s - starting with clear table\n",
        __FUNCTION__, VHQ_EVENT_SET_FILE);
  }
}

#define COMPARE_EVENT_SET_TABLE_DEBUG 0

#if COMPARE_EVENT_SET_TABLE_DEBUG
#define COMPARE_EVENT_SET_TABLE_DEBUG_PRINT(arg...) dbg_msg(arg)
#else
#define COMPARE_EVENT_SET_TABLE_DEBUG_PRINT(arg...)
#endif
/******************************************************************************
 * Function:      SearchEventSetHeadsInTable
 * Description:   Function provides search of event in the table.
 *                It compares only EventSet and Event heads. The function does not compare events data.
 *
 * Parameters:    *local_event_set - pointer to event
 *                *local_event_set_table - pointer to the table
 *                local_event_set_table_records_count - table depth (count of elements)

 * Return Value:  index of the table entry
 *                -1 in case of error
 *****************************************************************************/
static inline int SearchEventSetHeadsInTable(
    event_set_table_t *local_event_set,
    event_set_table_t *local_event_set_table,
    unsigned int local_event_set_table_records_count)
{
  unsigned int event_set_index, event_index;
  int bytes_to_commpare = 0;

  if (!local_event_set || !local_event_set_table)
    return -1;

  for (event_set_index = 0;
      event_set_index < local_event_set_table_records_count; event_set_index++)
  {
    /* Do not process invalid events set */
    if (local_event_set->event_set_id == EVENT_SET_ID_INVALID
        || local_event_set_table[event_set_index].event_set_id
            == EVENT_SET_ID_INVALID)
    {
      COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s: Found invalid ID: local_event_set = %d, local_event_set_table[%d] = %d\n", __FUNCTION__, local_event_set->event_set_id, event_set_index, local_event_set_table[event_set_index].event_set_id);
      break;
    }

    /* Compare Event Set headed, excluding pointer to the data */
    bytes_to_commpare = sizeof(event_set_table_t) - sizeof(event_table_t*);
    COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s: Compare first %d bytes of event_set_table_t\n", __FUNCTION__, bytes_to_commpare);

    if (memcmp(local_event_set, &local_event_set_table[event_set_index],
               bytes_to_commpare) == 0)
    {
      COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s: Event Set head much found at index %d. Total count of events = %d\n", __FUNCTION__, event_set_index, local_event_set_table->num_events);
      if (local_event_set->num_events
          != local_event_set_table[event_set_index].num_events)
      {
        COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s: Event index %d does not much due to different amount of events. Try other one Event Set from table\n", __FUNCTION__, event_index);
        continue;
      }
      for (event_index = 0;
          (event_index < local_event_set->num_events)
              && (event_index
                  < local_event_set_table[event_set_index].num_events);
          event_index++)  // we already know that num_events are the same in the table
      {
        /* Compare events head in the events set */
        bytes_to_commpare = sizeof(event_table_t) - sizeof(event_data_t*);
        COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s: Compare first %d bytes of event_table_t\n", __FUNCTION__, bytes_to_commpare);

        if (!&(local_event_set->event_data_p[event_index])
            || !&local_event_set_table[event_set_index].event_data_p[event_index])
          return -1;

        if (memcmp(
            &(local_event_set->event_data_p[event_index]),
            &local_event_set_table[event_set_index].event_data_p[event_index],
            bytes_to_commpare) != 0)
          break;

        COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s: Event at position %d much\n", __FUNCTION__, event_index);
        /*
         * TODO: WE DO NOT VERIFY EVENTS DATA. IT COULD BE CRITICAL!!! DO NOT MODIFY THE EXISTED EVENTs DATA, IT COULD BE NOT SAVED.
         */
      }
      if (event_index == local_event_set->num_events)
      {
        COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s: All %d Events much in requested Set\n", __FUNCTION__, event_index);
        return event_set_index;
      }COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s: Event index %d does not much. Try other one Event Set from table\n", __FUNCTION__, event_index);
    }
    else
    {
      COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s: Event Set at table index %d does not much. Try other one Event Set from table\n", __FUNCTION__, event_set_index);
    }
  }

  COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s: Event Set much no found\n", __FUNCTION__, event_index);
  return -1;
}

/******************************************************************************
 * Function:      saveEventToFlash
 * Description:   Function decides if the event to be saved to flash
 *
 * Parameters:    *event_set - pointer to events set
 *
 * Return Value:  TRUE in case if the event needs to be saved to flash
 *                FALSE in case if the event don't require any restore
 *****************************************************************************/
static bool saveEventToFlash(const event_set_table_t *event_set)
{
  bool ret_val = FALSE;

  if ((event_set != NULL) && (event_set->event_set_id != EVENT_ID_INVALID)
      && (event_set->event_data_p != NULL))
  {
    int event_mask = EVENT_APPLICATION_GENERATED | EVENT_APP_PARAM_UPDATE
        | EVENT_ANTISKIMMING_TEST_RESULTS;

    /* Only Application generated device events are stored on flash for persistence */
    if ((event_set->num_events == 1)
        && ((event_set->event_data_p[0].eCallback == cbHeartbeat)
            || ((event_set->event_data_p[0].eCallback == cbDeviceEventProcessor)
                && ((event_set->event_data_p[0].sCallbackData
                    ._device_event_parms.device_event_content.event_mask
                    & event_mask) == 0))))
    {
      ret_val = FALSE;
    }
    else
    {
      ret_val = TRUE;
    }
  }

  return ret_val;
}

/******************************************************************************
 * Function:      CompareEventSetTable
 * Description:   Function compares events table from RAM and FLASH. Main goal is to reduce write actions to the FLASH.
 *                Next actions will be ignored:
 *                - Ignore recurring HB at all, not depends of HB content at all. This one is present only in RAM. We ignore it because it each time has new value of next_run_time
 *                Regular processing:
 *                - Regular manual HBs
 *                - Recurring events from the server. They have next_run_time that could be changes from the server
 *                - Other events
 *                If events have different order of the same contents - do not overwrite file.

 * Parameters:    Use global event_set_table[] and VHQ_EVENT_SET_FILE file.

 * Return Value:  FALSE if write procedure should be provided
 *                TRUE  tables are not the same BUT write procedure is not required
 *****************************************************************************/
static bool CompareEventSetTable()
{
#ifdef VHQ_EVENT_DECODER
    FILE* iFile;
#else
  int iFile;
#endif

  COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s(): starting\n", __FUNCTION__);
  crash_cleanup_push(remove_events_table);

  iFile = -1;
  /* Let's see if the event table is different */
  iFile = open(VHQ_EVENT_SET_FILE_BK1, O_RDONLY, 0666);
  if (iFile != -1)
  {
    int i;
    int event_index;
    int mem_event_count, file_event_count;
    int table_size = sizeof(event_set_table_t) * MAX_EVENT_SETS;
    event_set_table_t *temp_event_set_table = (event_set_table_t*) malloc(
        table_size);

    if (temp_event_set_table)
    {
      int iRet = -1;
      bool event_set_file_read = FALSE;

      /* We only store used slots for event sets so clear everything before reading the file */
      memset(temp_event_set_table, 0, table_size);
      for (i = 0; i < MAX_EVENT_SETS; i++)
      {
        temp_event_set_table[i].event_set_id = EVENT_SET_ID_INVALID;
      }

      /* Let's see if this file is the current version */
      iRet = read(iFile, (char*) &event_set_file_header,
                  sizeof(event_set_file_header_t));
      if (iRet == sizeof(event_set_file_header_t))
      {
        if (strcmp(event_set_file_header.fixed_header_data,
        EVENT_SET_FILE_FIXED_HEADER_DATA) == 0)
        {
          event_set_file_read = ReadEventSchedFile(
              iFile, temp_event_set_table, event_set_file_header.version,
              event_set_file_header.num_event_sets);
        }
        else
        {
          dbg_err(
              "%s ERROR: Fixed Header Data Doesn't match - Expected %s, Got (first 4 bytes) %02x %02x %02x %02x\n",
              __FUNCTION__, EVENT_SET_FILE_FIXED_HEADER_DATA,
              event_set_file_header.fixed_header_data[0],
              event_set_file_header.fixed_header_data[1],
              event_set_file_header.fixed_header_data[2],
              event_set_file_header.fixed_header_data[3]);
        }
      }
      else
      {
        dbg_err(
            "%s ERROR: Couldn't read %s header successfully (read %d bytes instead of %d)\n",
            __FUNCTION__, VHQ_EVENT_SET_FILE_BK1, iRet,
            sizeof(event_set_file_header_t));
      }

      close(iFile);

      /* If we couldn't read the table from the file, we need to save it */
      if (!event_set_file_read)
      {
        /* Make sure we free all of the event_data_p pointers that were allocated when we read the temporary table first */
        for (i = 0; i < MAX_EVENT_SETS; i++)
        {
          if (temp_event_set_table[i].event_data_p)
            free(temp_event_set_table[i].event_data_p);
        }
        free(temp_event_set_table);
        temp_event_set_table = NULL;
        crash_cleanup_pop(0);
        return FALSE;
      }

      /* Get count of events set in each table */
      /* Count for RAM table */
      mem_event_count = 0;
      for (event_index = 0; event_index < MAX_EVENT_SETS; event_index++)
      {
        /* We reach the end of one of tables, exit loop. If we try to save table with EVENT_SET_ID_INVALID - this is invalid case */
        if (event_set_table[event_index].event_set_id == EVENT_SET_ID_INVALID)
        {
          break;
        }

        /* HB and few Device Events could be present in RAM table only. Ignore it */
        if (saveEventToFlash(&event_set_table[event_index]))
        {
          COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s: Ignoring event in RAM at slot %d\n", __FUNCTION__, event_index);
          continue;
        }
        mem_event_count++;
      }
      /* Count for file table */
      file_event_count = 0;
      for (event_index = 0; event_index < MAX_EVENT_SETS; event_index++)
      {
        /* We reach the end of one of tables, exit loop. If we try to read table with EVENT_SET_ID_INVALID - this is invalid case */
        if (temp_event_set_table[event_index].event_set_id
            == EVENT_SET_ID_INVALID)
        {
          break;
        }
        file_event_count++;
      }

      /* If we have different count of events in RAM and file - overwrite file. This easy one verification. Works for 99% */
      if (mem_event_count != file_event_count)
      {
        dbg_msg(
            "%s: Different event sets count in RAM (%d) and FILE (%d) - returning FALSE\n",
            __FUNCTION__, mem_event_count, file_event_count);

        /* Make sure we free all of the event_data_p pointers that were allocated when we read the temporary table first */
        for (i = 0; i < MAX_EVENT_SETS; i++)
        {
          if (temp_event_set_table[i].event_data_p)
            free(temp_event_set_table[i].event_data_p);
        }
        free(temp_event_set_table);
        temp_event_set_table = NULL;
        crash_cleanup_pop(0);
        return FALSE;
      }

      /* We have the same count of elements in table -> verify content of it */
      for (event_index = 0; event_index < MAX_EVENT_SETS; event_index++)
      {
        /* We reach the end of one of tables, exit loop. If we try to save table with EVENT_SET_ID_INVALID - this is invalid case */
        if (event_set_table[event_index].event_set_id == EVENT_SET_ID_INVALID)
        {
          break;
        }

        /* HB and few Device Events could be present in RAM table only. Ignore it */
        if (saveEventToFlash(&event_set_table[event_index]))
        {
          COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s: Do not compare HB event in RAM at slot %d\n", __FUNCTION__, event_index);
          continue;
        }
        /*
         * NOTE: If we have the same events but different order of them - we will have other event_set_id value. The event_set_id depends of events position (order) in the table.
         * Usually we will have other events order or different amount of events.
         * Provide validation (this is somehow redundant, but any way...) for a case when we have changed order of events but no amount of them.
         *
         * TODO: do we have event_set_id update after event execution? I mean if we finish processing for one event - do we update event_set_id for other scheduled events in the table?
         *
         */
        if (SearchEventSetHeadsInTable(&event_set_table[event_index],
                                       &temp_event_set_table[0], MAX_EVENT_SETS)
            < 0)
        {
          dbg_msg(
              "%s: Event Set in RAM at index %d need to be saved - returning FALSE\n",
              __FUNCTION__, event_index);

          /* Make sure we free all of the event_data_p pointers that were allocated when we read the temporary table first */
          for (i = 0; i < MAX_EVENT_SETS; i++)
          {
            if (temp_event_set_table[i].event_data_p)
              free(temp_event_set_table[i].event_data_p);
          }
          free(temp_event_set_table);
          temp_event_set_table = NULL;
          crash_cleanup_pop(0);
          return FALSE;
        }
        else
        {
          COMPARE_EVENT_SET_TABLE_DEBUG_PRINT("%s: Event Set in RAM at index %d already in file\n", __FUNCTION__, event_index);
        }
      }

      dbg_msg("%s: Event Set table is the same - returning TRUE\n",
              __FUNCTION__);

      /* Make sure we free all of the event_data_p pointers that were allocated when we read the temporary table first */
      for (i = 0; i < MAX_EVENT_SETS; i++)
      {
        if (temp_event_set_table[i].event_data_p)
          free(temp_event_set_table[i].event_data_p);
      }
      free(temp_event_set_table);
      temp_event_set_table = NULL;
      crash_cleanup_pop(0);
      return TRUE;
    }
    close(iFile);
  }
  else
    dbg_err("%s ERROR: Couldn't open %s for comparison\n", __FUNCTION__,
            VHQ_EVENT_SET_FILE);

  crash_cleanup_pop(0);
  dbg_msg("%s: returning FALSE\r\n", __FUNCTION__);
  return FALSE;
}

#undef COMPARE_EVENT_SET_TABLE_DEBUG_PRINT

/******************************************************************************
 * Function:      GetFirstEventIndex
 * Description:   Function provides search of first event for instance, instance
 *                that can be processed
 *
 * Parameters:    none
 *
 * Return Value:  positive - in case if event for requested instance was found
 *                -1 - in case if event was not found
 *****************************************************************************/
static int GetFirstEventIndex()
{
  int entry_index;

  for (entry_index = 0; entry_index < MAX_EVENT_SETS; entry_index++)
  {
    if (event_set_table[entry_index].event_set_id == EVENT_SET_ID_INVALID)
      break;
    /* Test do we have ability to lock instance before operate with it */
    if (TestLockServerInstance(event_set_table[entry_index].server_instance)
        == VHQ_SUCCESS)
    {
      break;
    }
  }

  if (entry_index >= MAX_EVENT_SETS)
  {
    dbg_err("%s: out of table index processing\n", __FUNCTION__);
    entry_index = -1;
  }

  return entry_index;
}

static bool IsDependencyOpSetInTable(uint32 dependent)
{
  if (dependent == 0)
    return FALSE;
  int i = 0;
  for (i = 0; i < MAX_EVENT_SETS; i++)
  {
    if (event_set_table[i].event_set_id != 0)
    {
      if (event_set_table[i].event_set_id == dependent)
      {
        dbg_trace("%s: found the dependent operation set %d in table \n",
                  __FUNCTION__, dependent);
        return TRUE;
      }
    }
    else
    {
      return FALSE;
    }
  }
  return FALSE;

}

static int GetFirstToRunEventIndex(bool include_running_event)
{
  int entry_index = -1;
  bool event_running = FALSE;
  int i = 0;

  for (i = 0; i < MAX_EVENT_SETS; i++)
  {
    if (event_set_table[i].event_set_id != EVENT_SET_ID_INVALID)
    {
      event_running = EventSetInRunningTable(event_set_table[i].event_set_id);
      if (include_running_event && event_running)
      {
        dbg_msg("%s: Event set %d running.\n", __FUNCTION__, i);
        entry_index = i;
        break;
      }
      else if (!event_running
          && !IsDependencyOpSetInTable(event_set_table[i].dependency_event_set))
      {
        entry_index = i;
        break;
      }
    }
    else
    {
      break;
    }
  }

  return entry_index;
}

/******************************************************************************
 * Function:      isVHQAgentsRecurHB
 * Description:   Function provides search of regular HB inside of events set
 *
 * Parameters:    *event_set - pointer to events set
 *
 * Return Value:  TRUE in case if events set corresponds Agent's regular HB format
 *                FALSE if no recur (regular) HB found
 *****************************************************************************/
static bool isVHQAgentsRecurHB(const event_set_table_t *event_set)
{
  if (!event_set)
    return FALSE;

  /* HeartbeatEventID = ScheduleEventSet(TRUE, next_heartbeat_time, RECUR_UNIT_SECOND, heartbeat_rate, 0, retry_freq, 0, hb_events, 1, EVENT_SET_ID_INVALID, EVENT_TIMER_RTC, GetCurrentInstance()); */
  if ((event_set->event_set_id != EVENT_ID_INVALID)
      && (event_set->num_events == 1) && (event_set->recurring)
      && (event_set->timer_type == EVENT_TIMER_RTC)
      && (event_set->event_data_p[0].eCallback == cbHeartbeat))
  {
    dbg_msg("%s: Regular HB detected.\n", __FUNCTION__);
    return TRUE;
  }
  return FALSE;
}



static bool mutex_xlock(bool islock, char *mutext_name, pthread_mutex_t *mutex)
{
  bool ret_val = TRUE;
  int ret = 0;
  int retries;

  if (!mutext_name || !mutex)
    return FALSE;

  for (retries = 0; retries < 3; retries++)
  {
    ret = islock ? pthread_mutex_lock(mutex) : pthread_mutex_unlock(mutex);

    if (ret == 0)
      break;

    dbg_msg(
        "%s: WARNING - %s %slock failed, retrying(count: %d) after a second\n",
        __func__, mutext_name, islock ? "" : "un", retries + 1);
    sleep(1);
  }

  if (ret)
  {
    log_err("%s: ERROR %s %slock FAILED, ret: %d\n", __func__, mutext_name,
            islock ? "" : "un", ret);
    ret_val = FALSE;
  }

  return ret_val;
}

void SaveEventSetTable(void)
{
#ifdef VHQ_EVENT_DECODER
    FILE* iFile;
#else
  int iFile = -1;
#endif

  dbg_msg("%s: starting\r\n", __FUNCTION__);

#ifdef EVENT_SCHED_THREAD_MODE
  /*
   * If this mutex lock/unlock fails even after retries, let's continue and
   * operate on saved event file anyway, the probability of occurence this
   * unexpected condition is almost zero, let's worry when it happens.
   */
  mutex_xlock(TRUE, "saved_events_file_mutex", &saved_events_file_mutex);
#endif /* EVENT_SCHED_THREAD_MODE */

  /* If the event table is the same we don't need to do anything */
  if (CompareEventSetTable())
  {
    dbg_msg(
        "%s: Event Set table is the same - returning without writing to %s\n",
        __FUNCTION__, VHQ_EVENT_SET_FILE);

#ifdef EVENT_SCHED_THREAD_MODE
    mutex_xlock(FALSE, "saved_events_file_mutex", &saved_events_file_mutex);
#endif /* EVENT_SCHED_THREAD_MODE */

    return;
  }
  dbg_msg("%s: writing %s\n", __FUNCTION__, VHQ_EVENT_SET_FILE_BK1);
  iFile = open(VHQ_EVENT_SET_FILE_BK1, O_TRUNC | O_CREAT | O_RDWR, 0666);
  if (iFile != -1)
  {
    int i;
    int bytes_written;
    int total_bytes_written = 0;

    /* Setup the header information */
    memset(&event_set_file_header, 0, sizeof(event_set_file_header_t));
    strcpy(event_set_file_header.fixed_header_data,
    EVENT_SET_FILE_FIXED_HEADER_DATA);
    event_set_file_header.version = EVENT_SET_FILE_VERSION;
    for (i = 0; i < MAX_EVENT_SETS; i++)
    {
      if (event_set_table[i].event_set_id != EVENT_SET_ID_INVALID)
      {
        if ((event_set_table[i].event_data_p)
            && saveEventToFlash(&event_set_table[i]))
        {
          event_set_file_header.num_event_sets++;
        }
      }
      else
      {
        break;
      }
    }

    /* Now write the header information to the file first */
    bytes_written = write(iFile, (char*) &event_set_file_header,
                          sizeof(event_set_file_header_t));

    if (bytes_written != sizeof(event_set_file_header_t))
    {
      dbg_err("%s: Couldn't write into %s\n", __FUNCTION__, VHQ_EVENT_SET_FILE);
    }
    else
    {
      total_bytes_written += bytes_written;
    }

    for (i = 0; i < MAX_EVENT_SETS; i++)
    {
      if (event_set_table[i].event_set_id != EVENT_SET_ID_INVALID)
      {
        if ((event_set_table[i].event_data_p)
            && saveEventToFlash(&event_set_table[i]))
        {
          int j;

          dbg_msg("%s: Writing %d bytes to event set file for event set %d\n",
                  __FUNCTION__, sizeof(event_set_table_t), i);
          bytes_written = write(iFile, (char*) &event_set_table[i],
                                sizeof(event_set_table_t));

          if (bytes_written != sizeof(event_set_table_t))
          {
            dbg_err("%s: Couldn't write into %s\n", __FUNCTION__,
                    VHQ_EVENT_SET_FILE);
          }
          else
          {
            total_bytes_written += bytes_written;
          }

          for (j = 0; j < event_set_table[i].num_events; j++)
          {
            dbg_msg(
                "\tWriting %d bytes for event set %d - event %d - type = %s\n",
                sizeof(event_table_t), i, j,
                cbEnumToStr(event_set_table[i].event_data_p[j].eCallback));
            bytes_written = write(iFile,
                                  (char*) &event_set_table[i].event_data_p[j],
                                  sizeof(event_table_t));

            if (bytes_written != sizeof(event_table_t))
            {
              dbg_err("%s: Couldn't write into %s\n", __FUNCTION__,
                      VHQ_EVENT_SET_FILE);
            }
            else
            {
              total_bytes_written += bytes_written;
            }
          }

        }
      }
      else
      {
        break;
      }
    }

    close(iFile);

    removeFile(VHQ_EVENT_SET_FILE_BK2);
    CopyFile(VHQ_EVENT_SET_FILE_BK1, VHQ_EVENT_SET_FILE);
  }
  else
    dbg_err("%s ERROR: Couldn't open %s for writing\n", __FUNCTION__,
            VHQ_EVENT_SET_FILE_BK1);

#ifdef EVENT_SCHED_THREAD_MODE
  mutex_xlock(FALSE, "saved_events_file_mutex", &saved_events_file_mutex);
#endif /* EVENT_SCHED_THREAD_MODE */

  dbg_msg("%s: done\r\n", __FUNCTION__);
}


static void OrderEventSetTable(void)
{
  int i;
  int j;
  int swap_idx;
  bool table_needs_saving = FALSE;
  event_set_table_t temp_event_set;

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  for (i = 0, j = 0; (i < (MAX_EVENT_SETS - 1)) && (j < MAX_EVENT_SETS); i++)
  {
    if ((event_set_table[i].event_set_id != EVENT_SET_ID_INVALID)
        && (event_set_table[i].num_events == 0))
    {
      event_set_table[i].event_set_id = EVENT_SET_ID_INVALID;
    }

    for (j = 0; j < event_set_table[i].num_events; j++)
    {
      if (((int) event_set_table[i].event_data_p[j].eCallback
          < cbLaunchDownloader)
          || (event_set_table[i].event_data_p[j].eCallback
              > cbGetSwUpdateProcessor))
      {
        event_set_table[i].event_set_id = EVENT_SET_ID_INVALID;
        break;
      }
    }

    if (event_set_table[i].event_set_id != EVENT_SET_ID_INVALID)
      continue;

    for (j = i + 1; j < MAX_EVENT_SETS; j++)
    {

      if (event_set_table[j].event_set_id == EVENT_SET_ID_INVALID)
        continue;

      if (!EventSetInRunningTable(event_set_table[j].event_set_id))
      {
        temp_event_set = event_set_table[i];
        event_set_table[i] = event_set_table[j];
        event_set_table[j] = temp_event_set;
        table_needs_saving = TRUE;
        break;
      }
    }
  }

  for (i = 0; i < (MAX_EVENT_SETS - 1); i++)
  {
    time_t cur_rtc;
    time_t cur_time;
    long long int seconds_to_event_1 = 0;
    long long int seconds_to_event_2 = 0;

    if (event_set_table[i].event_set_id == EVENT_SET_ID_INVALID)
      continue;

    cur_time = linux_time(NULL);
    cur_rtc = GetRTC();
    if (cur_rtc == 0)
      cur_rtc = cur_time;

    /* Swap if required */
    swap_idx = i;
    for (j = i + 1; j < MAX_EVENT_SETS; j++)
    {
      if (event_set_table[j].event_set_id == EVENT_SET_ID_INVALID)
        continue;

      switch (event_set_table[swap_idx].timer_type)
      {
        case EVENT_TIMER_DATE_TIME:
          seconds_to_event_1 = u32subu32(
              event_set_table[swap_idx].next_run_time, cur_time);
          break;
        case EVENT_TIMER_RTC:
        default:
          seconds_to_event_1 = u32subu32(
              event_set_table[swap_idx].next_run_time, cur_rtc);
          break;
      }

      switch (event_set_table[j].timer_type)
      {
        case EVENT_TIMER_DATE_TIME:
          seconds_to_event_2 = u32subu32(event_set_table[j].next_run_time,
                                         cur_time);
          break;
        case EVENT_TIMER_RTC:
        default:
          seconds_to_event_2 = u32subu32(event_set_table[j].next_run_time,
                                         cur_rtc);
          break;
      }

      if (seconds_to_event_2 < seconds_to_event_1)
        swap_idx = j;
    }

    if (swap_idx == i)
      continue;

    if (EventSetInRunningTable(event_set_table[i].event_set_id)
        || EventSetInRunningTable(event_set_table[swap_idx].event_set_id))
    {
      continue;
    }

    dbg_msg(
        "%s: Event Set %d (next_run in %s seconds) happens before Event Set %d (next_run in %s seconds) - swapping\n",
        __FUNCTION__, swap_idx, lltoa(seconds_to_event_2), i,
        lltoa(seconds_to_event_1));

    table_needs_saving = TRUE;

    /* Swap event set i with event set i+1 */
    temp_event_set = event_set_table[i];
    event_set_table[i] = event_set_table[swap_idx];
    event_set_table[swap_idx] = temp_event_set;
  }

  /* If we reach till here, we need to save the table */
  if (table_needs_saving)
  {
    SaveEventSetTable();
  }

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
}

static bool ReadEventSchedHeader(char* event_set_file)
{

#ifdef VHQ_EVENT_DECODER
    FILE* iFile;
#else
  int iFile = -1;
#endif
  int iRet = -1;
  bool bRetVal = TRUE;

  // make sure storage location exists
  iFile = open(event_set_file, O_RDONLY);
  if (iFile != -1)
  {
    bool event_set_file_read = FALSE;

    /* Let's see if this file is the current version */
    iRet = read(iFile, (char*) &event_set_file_header,
                sizeof(event_set_file_header_t));
    if (iRet == sizeof(event_set_file_header_t))
    {
      if (strcmp(event_set_file_header.fixed_header_data,
      EVENT_SET_FILE_FIXED_HEADER_DATA) == 0)
      {
        event_set_file_read = ReadEventSchedFile(
            iFile, event_set_table, event_set_file_header.version,
            event_set_file_header.num_event_sets);
      }
      else
      {
        dbg_msg(
            "%s ERROR: Fixed Header Data Doesn't match - Expected %s, Got (first 4 bytes) %02x %02x %02x %02x\n",
            __FUNCTION__, EVENT_SET_FILE_FIXED_HEADER_DATA,
            event_set_file_header.fixed_header_data[0],
            event_set_file_header.fixed_header_data[1],
            event_set_file_header.fixed_header_data[2],
            event_set_file_header.fixed_header_data[3]);
      }
    }
    else
    {
      dbg_err(
          "%s ERROR: Couldn't read %s header successfully (read %d bytes instead of %d)\n",
          __FUNCTION__, event_set_file, iRet,
          sizeof(event_set_file_header_t));
    }

    if (!event_set_file_read)
    {
      dbg_err("%s ERROR: Couldn't read %s VERSION %d - trying VERSION 1\n",
              __FUNCTION__, event_set_file, EVENT_SET_FILE_VERSION);
      lseek(iFile, 0, SEEK_SET);
      if (ReadEventSchedFile_Version1(iFile, event_set_table))
      {
        dbg_msg(
            "%s: Read %s VERSION 1 file successfully - Saving in VERSION %d format\n",
            __FUNCTION__, event_set_file, EVENT_SET_FILE_VERSION);
        SaveEventSetTable();
      }
      else
      {
        dbg_err("%s ERROR: Couldn't read %s VERSION 1\n", __FUNCTION__,
                event_set_file);
        bRetVal = FALSE;
      }
    }

    close(iFile);
  }
  else
  {
    dbg_msg(
        "%s: Couldn't open event table file %s - starting with clear table\n",
        __FUNCTION__, event_set_file);
    bRetVal = FALSE;
  }

  if (bRetVal == FALSE && FileExists(event_set_file))
  {
    log_err("%s: Event table file %s corrupted- starting with clear table\n",
            __FUNCTION__, event_set_file);
    removeFile(event_set_file);
  }

  return bRetVal;
}

bool RestoreEventSetTable(void)
{
  int i;
  int entry_index;
  bool bRetVal = TRUE;
  bool keys_exchanged = FALSE;

  crash_cleanup_push(remove_events_table);

  /* Default to an empty table */
  memset(&event_set_table, 0, sizeof(event_set_table));
  for (i = 0; i < MAX_EVENT_SETS; i++)
  {
    event_set_table[i].event_set_id = EVENT_SET_ID_INVALID;
  }

  VHQGetParameterBool(PARAM_KEYS_EXCHANGED, &keys_exchanged);
  if (!keys_exchanged)
  {
    dbg_warn(
        "%s WARNING: Keys not exchanged clean up table\n",
        __FUNCTION__);

    remove_events_table();
  }

  if ((FileSize(VHQ_EVENT_SET_FILE) % sizeof(event_set_table_VERSION_0_t)) == 0)
  {
    dbg_msg(
        "%s: Detected Ver 0 event_sets in %s - reading into event_set_table\n",
        __FUNCTION__, VHQ_EVENT_SET_FILE);
    ReadVersion0EventSetTable();
  }
  else if ((FileSize(VHQ_EVENT_SET_FILE)
      % sizeof(event_set_table_R10_VERSION_2_t)) == 0)
  {
    dbg_msg(
        "%s: Detected R10 Ver 2 event_sets in %s - reading into event_set_table\n",
        __FUNCTION__, VHQ_EVENT_SET_FILE);
    ReadR10Version2EventSetTable();
  }
  else
  {
#define NO_EVENTS_TABLES 3
#define EVENTS_TABLE_FILE_LENGTH 64
    int i = 0;
    char event_set_file[NO_EVENTS_TABLES][EVENTS_TABLE_FILE_LENGTH] = {VHQ_EVENT_SET_FILE_BK2, VHQ_EVENT_SET_FILE_BK1, VHQ_EVENT_SET_FILE};

    for(i = 0; i < NO_EVENTS_TABLES; i++)
    {
      log_dbg("%s:reading into event_set_table %s\n", __FUNCTION__, event_set_file[i]);

      if (FileExists(event_set_file[i]))
      {
        bRetVal = ReadEventSchedHeader(event_set_file[i]);

        if (bRetVal)
          break;
      }
    }
  }

  /* ADKTMS-1100
   * Files version 0 and 1 have regular recurring HBs in the file.
   * We don't need them any more since R11 (file version 2 and older) have no HBs in the file. Remove all recurring HBs.
   *
   * NOTE: Do it after SW upgrade, once.
   * */
  if (strcmp(event_set_file_header.fixed_header_data,
  EVENT_SET_FILE_HEADER_OLD_VERSION) == 0
      && event_set_file_header.num_event_sets)
  {
    dbg_msg(
        "%s:%s(%d): %s IMPORTANT: Read old version of %s file (Version %d). Check for existing regular HBs.\n",
        __FILE__, __FUNCTION__, __LINE__, VHQ_EVENT_SET_FILE,
        event_set_file_header.version);

    for (i = 0; i < MAX_EVENT_SETS; i++)
    {
      if (isVHQAgentsRecurHB(&event_set_table[i]))
      {
        dbg_msg(
            "%s IMPORTANT: Regular HB detected event_set_table[%d]. Removed.\n",
            __FUNCTION__, i);
        event_set_table[i].event_set_id = EVENT_ID_INVALID;
      }
    }
  }

  /* We can delete any expired recurring event sets */
  for (i = 0; i < MAX_EVENT_SETS; i++)
  {
    time_t curtime = linux_time(NULL);

    if ((event_set_table[i].event_set_id != EVENT_ID_INVALID) && /* This is a valid event */
    (event_set_table[i].timer_type == EVENT_TIMER_DATE_TIME) && /* This is a DATE/TIME event */
    (event_set_table[i].recurring) && /* This is a recurring event */
    (event_set_table[i].expiration_date != 0) && /* This recurring event has an expiration date */
    (event_set_table[i].expiration_date < curtime)) /* The expiration date has already passed */
    {
      int j;

      /* Free the memory allocated for the events */
      if (event_set_table[i].event_data_p)
        free(event_set_table[i].event_data_p);

      /* This event is recurring but the expiration date has already past - we can delete it */
      /* We can move all of the entries in the event set table up one now */
      log_err("%s: Removing EXPIRED entry at index %d\n", __FUNCTION__, i);
      for (j = i; j < MAX_EVENT_SETS - 1; j++)
        memcpy(&event_set_table[j], &event_set_table[j + 1],
               sizeof(event_set_table_t));
      /* Clear the last entry in the table now that it is free */
      memset(&event_set_table[MAX_EVENT_SETS - 1], 0,
             sizeof(event_set_table_t));
      event_set_table[MAX_EVENT_SETS - 1].event_set_id = EVENT_SET_ID_INVALID;
    }
  }

  /* Make sure the table is in order after we load it */
  OrderEventSetTable();

  /* Check if RTC was reset */
  for (i = 0; i < MAX_EVENT_SETS; i++)
  {
    time_t cur_rtc = GetRTC();

    if (event_set_table[i].event_set_id == EVENT_ID_INVALID)
      break;

    /* Check for RTC Event and see if it was reset, 2592000 is EPOCH time difference for 30 days */
    if ((event_set_table[i].timer_type == EVENT_TIMER_RTC)
        && ((event_set_table[i].next_run_time - cur_rtc) > 2592000))
    {
      /* Change the Event Timer Type to Date and Time because linux/system time will be synced by the server or updated by the user */
      event_set_table[i].timer_type = EVENT_TIMER_DATE_TIME;
    }
  }

  /* If the table is not empty, we can start the timer */
  entry_index = GetFirstEventIndex();

  dbg_msg("%s: Process event_set_table[%d] to set a timer\n", __FUNCTION__,
          entry_index);
  if ((entry_index >= 0)
      && (event_set_table[entry_index].event_set_id != EVENT_ID_INVALID))
  {
    time_t cur_time;

    /* Since there are events in the table, we need to update the _cur_event_id
     variable so that we don't duplicate ID's */
    for (i = 0; i < MAX_EVENT_SETS; i++)
    {
      if ((event_set_table[i].event_set_id != EVENT_SET_ID_INVALID)
          && (event_set_table[i].event_set_id > _cur_event_set_id))
      {
        _cur_event_set_id = event_set_table[i].event_set_id;
      }

      if ((event_set_table[i].num_events > 0)
          && (event_set_table[i].event_data_p))
      {
        int j;

        for (j = 0; j < event_set_table[i].num_events; j++)
        {
          event_id_t event_id = event_set_table[i].event_data_p[j].event_id;
          if (event_id != EVENT_ID_INVALID && event_id > _cur_event_id)
          {
            _cur_event_id = event_id;
          }
        }
      }
    }
    dbg_msg("%s: _cur_event_set_id set to %d, _cur_event_id set to %d\n",
            __FUNCTION__, _cur_event_set_id, _cur_event_id);

    /* Set timer if first event for current instance is ready to launch */
    switch (event_set_table[entry_index].timer_type)
    {
      case EVENT_TIMER_DATE_TIME:
        cur_time = linux_time(NULL);
        break;
      case EVENT_TIMER_RTC:
      default:
        cur_time = GetRTC();
        if (cur_time == 0)
          cur_time = linux_time(NULL);
        break;
    }

    if (event_set_table[entry_index].next_run_time <= cur_time)
    {
      timer_expired = TRUE;
      _initial_timer_val = 0;
    }
    else
    {
      _initial_timer_val = event_set_table[entry_index].next_run_time
          - cur_time;
    }
  }

  PRINT_EVENT_SET_TABLE("RestoreEventSetTable");

  crash_cleanup_pop(0);

  return bRetVal;
}

static uint32 NumEventSlotsFilled(void)
{
  uint32 i;
  uint32 num_slots_filled = 0;

  for (i = 0; i < MAX_EVENT_SETS; i++)
  {
    if ((event_set_table[i].event_set_id != EVENT_SET_ID_INVALID)
        && (event_set_table[i].num_events) && (event_set_table[i].event_data_p))
    {
      num_slots_filled += event_set_table[i].num_events;
    }
    else
    {
      break;
    }
  }
  return num_slots_filled;
}

static uint32 NumRemainingEventSlots(void)
{
  uint32 remaining_slots;
  uint32 num_slots_filled = NumEventSlotsFilled();

  remaining_slots = MAX_TOTAL_EVENTS - num_slots_filled;
  dbg_msg(
      "%s: NumEventSlotsFilled = %d and MAX_TOTAL_EVENTS = %d - returning %d\n",
      __FUNCTION__, num_slots_filled, MAX_TOTAL_EVENTS, remaining_slots);

  return remaining_slots;
}

#ifndef VHQ_EVENT_DECODER

static void update_next_run_time_for_recur_event(event_set_table_t *event)
{
  struct tm local_time;
  time_t cur_time;

  if (event->recur_period == 0)
  {
    dbg_notice("%s: recur_period is 0 - non-recurring event - return\n",
               __FUNCTION__);
    return;
  }

  switch (event->timer_type)
  {
    case EVENT_TIMER_DATE_TIME:
      cur_time = linux_time(NULL);
      break;
    case EVENT_TIMER_RTC:
    default:
      cur_time = GetRTC();
      if (cur_time == 0)
        cur_time = linux_time(NULL);
      break;
  }

  /* Use original time stamp of event, if any */
  if (event->original_run_time)
  {
    struct tm local_time;
    if (linux_localtime(&event->original_run_time, &local_time))
      dbg_msg(
          "%s: Event had retries, use original %s time stamp: %s (%lu)\n",
          __FUNCTION__,
          (event->timer_type == EVENT_TIMER_DATE_TIME) ? "Date/Time" : "RTC",
          tmtoa(&local_time), event->original_run_time);

    event->next_run_time = event->original_run_time;
    event->original_run_time = 0;
  }

  /* If event was scheduled as urgent, it has next_run_time set to 0. Avoid too much calculation in next while() */
  if (event->next_run_time == 0)
    event->next_run_time = cur_time;

  while (event->next_run_time <= cur_time)
  {
    switch (event->recur_units)
    {
      case RECUR_UNIT_SECOND:
        event->next_run_time += event->recur_period;
        break;
      case RECUR_UNIT_DAY:
        event->next_run_time += (event->recur_period * (60 * 60 * 24));
        break;
      case RECUR_UNIT_WEEK:
        event->next_run_time += (event->recur_period * (60 * 60 * 24 * 7));
        break;
      case RECUR_UNIT_MONTH:
        if (linux_localtime(&event->next_run_time, &local_time))
        {
          local_time.tm_mon += event->recur_period;
          event->next_run_time = linux_mktime(&local_time);
        }
        else
        {
          /* linux_localtime failed so just add 30 days per month */
          event->next_run_time += (event->recur_period * (60 * 60 * 24 * 30));
        }
        break;
      case RECUR_UNIT_YEAR:
        if (linux_localtime(&event->next_run_time, &local_time))
        {
          local_time.tm_year += event->recur_period;
          event->next_run_time = linux_mktime(&local_time);
        }
        else
        {
          /* linux_localtime failed so just add 365 days per year */
          event->next_run_time += (event->recur_period * (60 * 60 * 24 * 365));
        }
        break;
      default:
        return;
    }
  }

  dbg_notice("%s: updated next_run_time = %lu\n", __FUNCTION__,
             event->next_run_time);
}

static bool AbortOnError(event_table_t *eventdata)
{
  switch (eventdata->eCallback)
  {
    case cbLaunchDownloader:
      return (eventdata->sCallbackData.downloader_parms.operation.OpOnError
          == OP_ON_ERROR_ABORT);
    case cbGetDataProcessor:
      return (eventdata->sCallbackData._get_data_parms.operation.OpOnError
          == OP_ON_ERROR_ABORT);
    case cbSetDataProcessor:
      return (eventdata->sCallbackData._set_data_parms.operation.OpOnError
          == OP_ON_ERROR_ABORT);
    case cbHeartbeat:
      return FALSE;
    case cbGetDiagDataProcessor:
      return (eventdata->sCallbackData._get_data_parms.operation.OpOnError
          == OP_ON_ERROR_ABORT);
    case cbDelFileProcessor:
      return (eventdata->sCallbackData._del_file_parms.operation.OpOnError
          == OP_ON_ERROR_ABORT);
    case cbTerminalAction:
      return (eventdata->sCallbackData.action_parms.operation.OpOnError
          == OP_ON_ERROR_ABORT);
    case cbFileUploader:
      return (eventdata->sCallbackData.ul_parms.operation.OpOnError
          == OP_ON_ERROR_ABORT);
    case cbAppActionProcessor:
      return (eventdata->sCallbackData._app_action_parms.operation.OpOnError
          == OP_ON_ERROR_ABORT);
    case cbDeviceEventProcessor:
    case cbGetParamUpdatesProcessor:
      return (eventdata->sCallbackData._device_event_parms.operation.OpOnError
          == OP_ON_ERROR_ABORT);
    case cbGetSwUpdateProcessor:
    default:
      return FALSE;
  }
}

/*
 * WARNING. This variable we could not be saved in the events file. CompareEventSetTable() could not trigger it.
 * TODO:    On boot-up we need to flush RecurId???
 */
static bool UpdateRecurCount(event_table_t *eventdata)
{
  switch (eventdata->eCallback)
  {
    case cbLaunchDownloader:
      eventdata->sCallbackData.downloader_parms.operation.RecurId++;
      break;
    case cbGetDataProcessor:
      eventdata->sCallbackData._get_data_parms.operation.RecurId++;
      break;
    case cbSetDataProcessor:
      eventdata->sCallbackData._set_data_parms.operation.RecurId++;
      break;
    case cbGetDiagDataProcessor:
      eventdata->sCallbackData._get_data_parms.operation.RecurId++;
      break;
    case cbDelFileProcessor:
      eventdata->sCallbackData._del_file_parms.operation.RecurId++;
      break;
    case cbTerminalAction:
      eventdata->sCallbackData.action_parms.operation.RecurId++;
      break;
    case cbFileUploader:
      eventdata->sCallbackData.ul_parms.operation.RecurId++;
      break;
    case cbAppActionProcessor:
      eventdata->sCallbackData._app_action_parms.operation.RecurId++;
      break;
    case cbGetParamUpdatesProcessor:
      eventdata->sCallbackData._device_event_parms.operation.RecurId++;
      break;
    case cbDeviceEventProcessor:
    case cbGetSwUpdateProcessor:
    case cbHeartbeat:
    default:
      return FALSE;
  }

  return TRUE;
}

static void EventSchedSendFailedStatus(event_set_table_t *event_set,
                                       int event_fail_index,
                                       vhq_result_t failure)
{
  int comm_id;
  char *operation_id;
  int message_id;
  srv_msg_type_t srv_msg_type;
  srv_op_type_t srv_op_type;
  uint32 operation_set_id;
  uint32 recur_id;

  if (event_set == NULL)
  {
    return;
  }

  switch (event_set->event_data_p[event_fail_index].eCallback)
  {
    case cbLaunchDownloader:
      comm_id = event_set->event_data_p[event_fail_index].sCallbackData
          .downloader_parms.comm_id;
      operation_id = event_set->event_data_p[event_fail_index].sCallbackData
          .downloader_parms.operation.OpId;
      message_id = event_set->event_data_p[event_fail_index].sCallbackData
          .downloader_parms.message_id;
      srv_msg_type = event_set->event_data_p[event_fail_index].sCallbackData
          .downloader_parms.srv_msg_type;
      srv_op_type = event_set->event_data_p[event_fail_index].sCallbackData
          .downloader_parms.srv_op_type;
      operation_set_id = event_set->event_data_p[event_fail_index].sCallbackData
          .downloader_parms.operation.OpSetId;
      recur_id = event_set->event_data_p[event_fail_index].sCallbackData
          .downloader_parms.operation.RecurId;
      break;

    case cbGetDataProcessor:
      comm_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.comm_id;
      operation_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.operation.OpId;
      message_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.message_id;
      srv_msg_type = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.srv_msg_type;
      srv_op_type = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.srv_op_type;
      operation_set_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.operation.OpSetId;
      recur_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.operation.RecurId;
      break;

    case cbSetDataProcessor:
      comm_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._set_data_parms.comm_id;
      operation_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._set_data_parms.operation.OpId;
      message_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._set_data_parms.message_id;
      srv_msg_type = event_set->event_data_p[event_fail_index].sCallbackData
          ._set_data_parms.srv_msg_type;
      srv_op_type = event_set->event_data_p[event_fail_index].sCallbackData
          ._set_data_parms.srv_op_type;
      operation_set_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._set_data_parms.operation.OpSetId;
      recur_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._set_data_parms.operation.RecurId;
      break;

    case cbGetDiagDataProcessor:
      comm_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.comm_id;
      operation_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.operation.OpId;
      message_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.message_id;
      srv_msg_type = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.srv_msg_type;
      srv_op_type = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.srv_op_type;
      operation_set_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.operation.OpSetId;
      recur_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._get_data_parms.operation.RecurId;
      break;

    case cbDelFileProcessor:
      comm_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._del_file_parms.comm_id;
      operation_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._del_file_parms.operation.OpId;
      message_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._del_file_parms.message_id;
      srv_msg_type = event_set->event_data_p[event_fail_index].sCallbackData
          ._del_file_parms.srv_msg_type;
      srv_op_type = event_set->event_data_p[event_fail_index].sCallbackData
          ._del_file_parms.srv_op_type;
      operation_set_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._del_file_parms.operation.OpSetId;
      recur_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._del_file_parms.operation.RecurId;
      break;

    case cbTerminalAction:
      comm_id = event_set->event_data_p[event_fail_index].sCallbackData
          .action_parms.comm_id;
      operation_id = event_set->event_data_p[event_fail_index].sCallbackData
          .action_parms.operation.OpId;
      message_id = event_set->event_data_p[event_fail_index].sCallbackData
          .action_parms.message_id;
      srv_msg_type = event_set->event_data_p[event_fail_index].sCallbackData
          .action_parms.srv_msg_type;
      srv_op_type = event_set->event_data_p[event_fail_index].sCallbackData
          .action_parms.srv_op_type;
      operation_set_id = event_set->event_data_p[event_fail_index].sCallbackData
          .action_parms.operation.OpSetId;
      recur_id = event_set->event_data_p[event_fail_index].sCallbackData
          .action_parms.operation.RecurId;
      break;

    case cbFileUploader:
      comm_id = event_set->event_data_p[event_fail_index].sCallbackData.ul_parms
          .comm_id;
      operation_id = event_set->event_data_p[event_fail_index].sCallbackData
          .ul_parms.operation.OpId;
      message_id = event_set->event_data_p[event_fail_index].sCallbackData
          .ul_parms.message_id;
      srv_msg_type = event_set->event_data_p[event_fail_index].sCallbackData
          .ul_parms.srv_msg_type;
      srv_op_type = event_set->event_data_p[event_fail_index].sCallbackData
          .ul_parms.srv_op_type;
      operation_set_id = event_set->event_data_p[event_fail_index].sCallbackData
          .ul_parms.operation.OpSetId;
      recur_id = event_set->event_data_p[event_fail_index].sCallbackData
          .ul_parms.operation.RecurId;
      break;

    case cbAppActionProcessor:
      comm_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._app_action_parms.comm_id;
      operation_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._app_action_parms.operation.OpId;
      message_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._app_action_parms.message_id;
      srv_msg_type = event_set->event_data_p[event_fail_index].sCallbackData
          ._app_action_parms.srv_msg_type;
      srv_op_type = event_set->event_data_p[event_fail_index].sCallbackData
          ._app_action_parms.srv_op_type;
      operation_set_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._app_action_parms.operation.OpSetId;
      recur_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._app_action_parms.operation.RecurId;
      break;

    case cbGetParamUpdatesProcessor:
      comm_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._device_event_parms.comm_id;
      operation_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._device_event_parms.operation.OpId;
      message_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._device_event_parms.message_id;
      srv_msg_type = event_set->event_data_p[event_fail_index].sCallbackData
          ._device_event_parms.srv_msg_type;
      srv_op_type = event_set->event_data_p[event_fail_index].sCallbackData
          ._device_event_parms.srv_op_type;
      operation_set_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._device_event_parms.operation.OpSetId;
      recur_id = event_set->event_data_p[event_fail_index].sCallbackData
          ._device_event_parms.operation.RecurId;
      break;

    case cbDeviceEventProcessor:
    case cbGetSwUpdateProcessor:
    case cbHeartbeat:
      /* Events and Heartbeats do not come from the server so there is no need to report failures for those types */
    default:
      return;
  }

  SendFailureResponse(failure, comm_id, operation_id, message_id, srv_msg_type,
                      srv_op_type, operation_set_id, recur_id);

  return;
}

#endif

static void PrintEventSetTable(char *description)
{
  if (GetLoggingLevel() == VHQ_LOGGING_LEVEL_DEBUG)
  {
    int i;
    int event_set_index;
    time_t cur_rtc = GetRTC();
    time_t cur_time = linux_time(NULL);
    struct tm local_time;

    mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

    dbg_msg("\n%s - Event Set Table (current instance = '%s')\n", description,
            GetCurrentInstance());
    if (linux_localtime(&cur_rtc, &local_time))
      dbg_msg("Current RTC  = %s (%u)\n", tmtoa(&local_time), cur_rtc);
    if (linux_localtime(&cur_time, &local_time))
      dbg_msg("Current Time = %s (%u)\n", tmtoa(&local_time), cur_time);

    for (event_set_index = 0; event_set_index < MAX_EVENT_SETS;
        event_set_index++)
    {
      if (event_set_table[event_set_index].event_set_id == EVENT_SET_ID_INVALID)
      {
        break;
      }
      else
      {
        linux_localtime(&event_set_table[event_set_index].next_run_time,
                        &local_time);

        dbg_msg(
            "event set %d: id = %d, dependency_event = %d, num_events = %d, recurring = %d, retry_freq = %d, recur_period = %d, server_instance = %s, next_run_time(%s type) = %s (%lu)\n",
            event_set_index,
            event_set_table[event_set_index].event_set_id,
            event_set_table[event_set_index].dependency_event_set,
            event_set_table[event_set_index].num_events,
            event_set_table[event_set_index].recurring,
            event_set_table[event_set_index].retry_freq,
            event_set_table[event_set_index].recur_period,
            event_set_table[event_set_index].server_instance,
            (event_set_table[event_set_index].timer_type
                == EVENT_TIMER_DATE_TIME) ? "Date/Time" : "RTC",
            tmtoa(&local_time), event_set_table[event_set_index].next_run_time);

        if (event_set_table[event_set_index].expiration_date != 0)
        {
          linux_localtime(&event_set_table[event_set_index].expiration_date,
                          &local_time);
          dbg_msg("event set %d: recur expiration = %s\n", event_set_index,
                  tmtoa(&local_time));
        }

        if (event_set_table[event_set_index].event_data_p)
        {
          for (i = 0; i < event_set_table[event_set_index].num_events; i++)
          {
            if ((i + 1) == event_set_table[event_set_index].executing_index)
            {
              dbg_msg(
                  "\tevent %d (type=%s): id = %u - current executing_index\n",
                  i,
                  event_cbEnumToStr(
                      &event_set_table[event_set_index].event_data_p[i]),
                  event_set_table[event_set_index].event_data_p[i].event_id);
            }
            else
            {
              dbg_msg(
                  "\tevent %d (type=%s): id = %u\n",
                  i,
                  event_cbEnumToStr(
                      &event_set_table[event_set_index].event_data_p[i]),
                  event_set_table[event_set_index].event_data_p[i].event_id);
            }
          }
        }
      }
    }
    mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
  }
}

#ifndef VHQ_EVENT_DECODER


static void setupPostponedEventSet(event_set_table_t *posponedEventSet,
                                   int event_index, event_result_t event_res)
{
  time_t cur_time;

  switch (posponedEventSet->timer_type)
  {
    case EVENT_TIMER_DATE_TIME:
      cur_time = linux_time(NULL);
      break;
    case EVENT_TIMER_RTC:
    default:
      cur_time = GetRTC();
      if (cur_time == 0)
        cur_time = linux_time(NULL);
      break;
  }

  /* Use original time stamp of event, if any */
  if (posponedEventSet->original_run_time)
  {
    struct tm local_time;
    if (linux_localtime(&posponedEventSet->original_run_time, &local_time))
      dbg_msg(
          "%s: Event had retries, use original %s time stamp: %s (%lu)\n",
          __FUNCTION__,
          (posponedEventSet->timer_type == EVENT_TIMER_DATE_TIME) ?
              "Date/Time" : "RTC",
          tmtoa(&local_time), posponedEventSet->original_run_time);

    posponedEventSet->next_run_time = posponedEventSet->original_run_time;
    posponedEventSet->original_run_time = 0;
  }

  /* We can't postpone an event forever so if an expiration date is not set yet, set it up for the timeout */
  if (posponedEventSet->expiration_date == 0)
  {
    uint32 postpone_retry_timeout;
    struct tm local_time;

    VHQGetParameterUint32(PARAM_EVENT_POSTPONED_RETRY_TIMEOUT,
                          &postpone_retry_timeout, DEFAULT_BASE);

    posponedEventSet->expiration_date = cur_time + postpone_retry_timeout;
    linux_localtime(&posponedEventSet->expiration_date, &local_time);
    dbg_msg("%s: setting up expiration time for %s\n", __FUNCTION__,
            tmtoa(&local_time));

  }

  if (posponedEventSet->event_data_p)
  {
    /* If this was a download job, we might not actually have to download the file again */
    if (posponedEventSet->event_data_p[event_index].eCallback
        == cbLaunchDownloader)
    {
      dl_file_dl_type_t download_type =
          posponedEventSet->event_data_p[event_index].sCallbackData
              .downloader_parms.dl_file_content.DownloadType;

      dbg_msg(
          "%s: Download Event Postponed - Checking download_type (0x%08x) to see if DOWNLOAD flag needs cleared\n",
          __FUNCTION__, download_type);

      if (event_res == EVENT_POSTPONED)
      {
        /* For Postponed Download/Install jobs, we already have the file so clear download flag and just set INSTALL flag */
        if ((download_type & DL_FILE_DL_TYPE_DOWNLOAD_MASK)
            && (download_type & DL_FILE_DL_TYPE_INSTALL_MASK))
        {
          log_notice(
              "%s: Download/Install Event Postponed - clearing DOWNLOAD flag\n",
              __FUNCTION__, download_type);
          posponedEventSet->event_data_p[event_index].sCallbackData
              .downloader_parms.dl_file_content.DownloadType &=
              ~(DL_FILE_DL_TYPE_DOWNLOAD_MASK);
        }
      }
      else if (event_res == EVENT_DL_POSTPONED)
      {
        if (download_type & DL_FILE_DL_TYPE_MAINTENANCE_MASK)
        {
          posponedEventSet->next_run_time += VHQRunTimeForDownload(
              posponedEventSet->expiration_date,
              posponedEventSet->next_run_time,
              (uint8) posponedEventSet->timer_type);
          log_notice("%s: Download/Install Event Postponed, next runtime: %d\n",
                     __FUNCTION__, posponedEventSet->next_run_time);
        }
        else
        {
          /* Trick code and overwrite Event result as EVENT_POSTPONED to have retry delay */
          event_res = EVENT_POSTPONED;
        }
      }
    }

    if (event_res == EVENT_POSTPONED)
    {
      uint32 postpone_retry_delay = 1800;
      VHQGetParameterUint32(PARAM_EVENT_POSTPONED_RETRY_DELAY,
                            &postpone_retry_delay, DEFAULT_BASE);

      /* If event was scheduled as urgent, it has next_run_time set to 0. Avoid too much calculation in next while() */
      if (posponedEventSet->next_run_time == 0 || postpone_retry_delay == 0)
        posponedEventSet->next_run_time = cur_time;

      while (postpone_retry_delay && posponedEventSet->next_run_time <= cur_time)
        posponedEventSet->next_run_time += postpone_retry_delay;
    }

    /* For dependency chain EventSets, we need to remove the events that have already run */
    if (event_index > 0)
    {
      int moved_event_index = 0;

      while (event_index < posponedEventSet->num_events)
      {
        /* Move this entry up in the table since we are deleting events that have already completed */
        dbg_msg("%s: Moving postponed entry %d to entry %d\n", __FUNCTION__,
                event_index, moved_event_index);
        memcpy(&posponedEventSet->event_data_p[moved_event_index],
               &posponedEventSet->event_data_p[event_index],
               sizeof(event_table_t));

        /* Clear the old entry that we just moved */
        memset(&posponedEventSet->event_data_p[event_index], 0,
               sizeof(event_table_t));
        posponedEventSet->event_data_p[event_index].event_id = EVENT_ID_INVALID;

        moved_event_index++;
        event_index++;
      }

      posponedEventSet->num_events = moved_event_index;
    }
  }

  dbg_msg("%s: Finished updating event set - new event set has %d events\n",
          __FUNCTION__, posponedEventSet->num_events);
}


void*
EventSchedulerInitCallbackTable(char *pszOperatingMode)
{
#ifdef _VOS2
  static EventSchedulerCB *acbSavedCallbackTable = acbCallbackTable;

  dbg_trace("%s: + (%s)\n", __FUNCTION__,
            (NULL==pszOperatingMode)?"NULL":pszOperatingMode);
  if (NULL == pszOperatingMode)
    return acbSavedCallbackTable;

  dbg_trace("%s: -\n", __FUNCTION__);
  return acbSavedCallbackTable;
#else
    UNUSED(pszOperatingMode);
    return acbCallbackTable;
#endif
}


void sighandler(int signum, siginfo_t *siginfo, void *context)
{
#if 0
  pthread_t threadID = pthread_self(); // current thread's ID

  dbg_msg("%s: Signal [%d] in thread %08x (PID %d) received (si_errno = %d, si_code = %d)\n",
      __FUNCTION__, signum, threadID, getpid(), siginfo->si_errno, siginfo->si_code);

  if (signum != SIGALRM)
  {
      log_err("Signal [%d] in thread %08x (PID %d) received (si_errno = %d, si_code = %d)\n",
          signum, threadID, getpid(), siginfo->si_errno, siginfo->si_code);
  }
#endif

  if (signum == SIGSEGV)
  {
#if 1
    ucontext_t *ucontext = (ucontext_t*) context;

    /* Process clean-up if required */
    crash_cleanup_popall();

    log_err(
        "SIGSEGV data: si_errno = %d, si_pid = %u, si_uid = %u, si_addr = 0x%08x\n",
        siginfo->si_errno, (unsigned int)siginfo->si_pid,
        (unsigned int)siginfo->si_uid, (unsigned int)siginfo->si_addr);

    log_err("ip = 0x%08x, pc = 0x%08x, sp = 0x%08x\n",
            (unsigned int )ucontext->uc_mcontext.arm_ip,
            (unsigned int )ucontext->uc_mcontext.arm_pc,
            (unsigned int )ucontext->uc_mcontext.arm_sp);
#endif

    msgctl(request_Qid, IPC_RMID, 0);  // don't bother with result, we're going away anyway
    msgctl(response_Qid, IPC_RMID, 0);
    _exit(-1);

  }

  if (signum == SIGALRM)
  {
    /* Call the callback function */
    //dbg_msg("%s: timer expired!!!\n", __FUNCTION__);
    timer_expired = TRUE;
  }
  else if (signum == SIGCHLD)
  {
    int status;

    //dbg_msg("%s: Got SIGCHLD signal - calling waitpid(-1, &status, WNOHANG)\n", __FUNCTION__);
    waitpid(-1, &status, WNOHANG);
  }
  else if (signum == SIGUSR1)
  {
    //log_alert("%s: Got SIGUSR1\n", __FUNCTION__);
    //log_alert("%s: Got SIGUSR1\n", __FUNCTION__);
  }
  else if ((signum == SIGTERM) || (signum == SIGINT) || (signum == SIGQUIT))
  {
    int iFile = -1;

    iFile = open(VHQ_EVENT_SET_FILE_BK2, O_TRUNC | O_CREAT | O_RDWR, 0666);
    if (iFile != -1)
    {
      int i;
      int bytes_written;
      int total_bytes_written = 0;

      /* Setup the header information */
      memset(&event_set_file_header, 0, sizeof(event_set_file_header_t));
      strcpy(event_set_file_header.fixed_header_data,
      EVENT_SET_FILE_FIXED_HEADER_DATA);
      event_set_file_header.version = EVENT_SET_FILE_VERSION;
      for (i = 0; i < MAX_EVENT_SETS; i++)
      {
        if (event_set_table[i].event_set_id != EVENT_SET_ID_INVALID)
        {
          if ((event_set_table[i].event_data_p)
              && saveEventToFlash(&event_set_table[i]))
          {
            event_set_file_header.num_event_sets++;
          }
        }
        else
        {
          break;
        }
      }

      /* Now write the header information to the file first */
      bytes_written = write(iFile, (char*) &event_set_file_header,
                            sizeof(event_set_file_header_t));

      if (bytes_written == sizeof(event_set_file_header_t))
      {
        total_bytes_written += bytes_written;
      }

      for (i = 0; i < MAX_EVENT_SETS; i++)
      {
        if (event_set_table[i].event_set_id != EVENT_SET_ID_INVALID)
        {
          if ((event_set_table[i].event_data_p)
              && saveEventToFlash(&event_set_table[i]))
          {
            int j;

            bytes_written = write(iFile, (char*) &event_set_table[i],
                                  sizeof(event_set_table_t));

            if (bytes_written == sizeof(event_set_table_t))
            {
              total_bytes_written += bytes_written;
            }

            for (j = 0; j < event_set_table[i].num_events; j++)
            {
              bytes_written = write(iFile,
                                    (char*) &event_set_table[i].event_data_p[j],
                                    sizeof(event_table_t));

              if (bytes_written == sizeof(event_table_t))
              {
                total_bytes_written += bytes_written;
              }
            }

          }
        }
        else
        {
          break;
        }
      }

      close(iFile);

    }
    _exit(0);
  }

}

/* All of these functions are used to determine when we can launch multiple events at the same
 time in the multi-threaded environment */

static bool EventSetInRunningTable(event_set_id_t event_set_id)
{
  int i;

  for (i = 0; i < MAX_CONCURRENT_EVENTS; i++)
  {
    if ((running_events[i].in_use)
        && (running_events[i].event_set_id == event_set_id))
    {
      return TRUE;
    }
  }

  return FALSE;
}

static bool hbIsActive(void)
{
  int i;

  for (i = 0; i < MAX_CONCURRENT_EVENTS; i++)
  {
    if (running_events[i].in_use)
    {
      int EventSetIndex;

      for (EventSetIndex = 0; EventSetIndex < MAX_EVENT_SETS; EventSetIndex++)
      {
        if (event_set_table[EventSetIndex].event_set_id == EVENT_SET_ID_INVALID)
          break;

        if (event_set_table[EventSetIndex].event_set_id
            == running_events[i].event_set_id)
        {
          if ((event_set_table[EventSetIndex].num_events == 1)
              && (event_set_table[EventSetIndex].event_data_p)
              && (event_set_table[EventSetIndex].event_data_p[0].eCallback
                  == cbHeartbeat))
          {
            return TRUE;
          }
        }
      }
    }
  }

  return FALSE;
}

static bool deviceEventIsActive(void)
{
  int i;

  for (i = 0; i < MAX_CONCURRENT_EVENTS; i++)
  {
    if (running_events[i].in_use)
    {
      int EventSetIndex;

      for (EventSetIndex = 0; EventSetIndex < MAX_EVENT_SETS; EventSetIndex++)
      {
        if (event_set_table[EventSetIndex].event_set_id == EVENT_SET_ID_INVALID)
          break;

        if (event_set_table[EventSetIndex].event_set_id
            == running_events[i].event_set_id)
        {
          if ((event_set_table[EventSetIndex].num_events == 1)
              && (event_set_table[EventSetIndex].event_data_p)
              && (event_set_table[EventSetIndex].event_data_p[0].eCallback
                  == cbDeviceEventProcessor))
          {
            return TRUE;
          }
        }
      }
    }
  }

  return FALSE;
}


static bool EventSetCurrentlyRunning(int EventSetIndex)
{
  if (event_set_table[EventSetIndex].event_set_id != EVENT_SET_ID_INVALID)
  {
    if (event_set_table[EventSetIndex].num_events
        && event_set_table[EventSetIndex].event_data_p)
    {
      int i;

      for (i = 0; i < event_set_table[EventSetIndex].num_events; i++)
      {
        if (event_set_table[EventSetIndex].event_data_p[i].executing
            & EXECUTING_MASK)
        {
          /* The event set is marked as running - lets make sure it is in our running_events
           table.  If not, then this event was most likely interrupted by a power cycle.  So
           we'll need to re-run it */
          if (EventSetInRunningTable(
              event_set_table[EventSetIndex].event_set_id))
          {
            return TRUE;
          }
          else
          {
            dbg_msg(
                "%s: event_set_table[%d].event_data_p[%d] is marked running but not in running_events - returning FALSE\n",
                __FUNCTION__, EventSetIndex, i);
            return FALSE;
          }
        }
      }
    }
  }

  return FALSE;
}

static bool EventAllowedInOpenSlot(int event_index)
{
  /* We always want to keep one slot open for HB's or Reboots */
  if ((event_index < 0) || (event_index >= MAX_EVENT_SETS))
  {
    dbg_err("%s: Index %d is INVALID - returning FALSE\n", __FUNCTION__,
            event_index);
    return FALSE;
  }

  if (event_set_table[event_index].event_data_p)
  {
    /* If we already have a similar going, don't start another one. */

    int i;
    bool keys_exchanged = FALSE;

    for (i = 0; i < MAX_CONCURRENT_EVENTS; i++)
    {
      if (running_events[i].in_use)
      {
        int index =
            (event_set_table[event_index].executing_index > 0) ?
                event_set_table[event_index].executing_index - 1 : 0;

        if (running_events[i].eCallback
            == event_set_table[event_index].event_data_p[index].eCallback)
        {
          dbg_trace("%s: Similar event is already running, run_idx: %d, index: %d \n", __FUNCTION__, i, index);
          return FALSE;
        }
      }
    }

    VHQGetParameterBool(PARAM_KEYS_EXCHANGED, &keys_exchanged);
    if (!keys_exchanged)
    {
      if (event_set_table[event_index].event_data_p[0].eCallback == cbHeartbeat)
      {
        dbg_trace("%s: Heartbeat event \n", __FUNCTION__);
        return TRUE;
      }
      else
      {
        dbg_trace("%s: Not a heartbeat event, increase time \n", __FUNCTION__);
        return FALSE;
      }
    }
  }

  return TRUE;
}

static void ClearRunningEvents()
{
  int i;

  for (i = 0; i < MAX_CONCURRENT_EVENTS; i++)
  {
    memset(&running_events[i], 0, sizeof(running_event_t));
  }
}

static int GetOpenEventSlot()
{
  int i;

  for (i = 0; i < MAX_CONCURRENT_EVENTS; i++)
  {
    if (running_events[i].in_use == FALSE)
    {
      return i;
    }
  }

  return -1;
}

static int NumOpenEventSlots()
{
  int i;
  int ret_val = 0;

  for (i = 0; i < MAX_CONCURRENT_EVENTS; i++)
  {
    if (running_events[i].in_use == FALSE)
    {
      ret_val++;
    }
  }

  return ret_val;
}

static int EventIsRunning(event_set_id_t event_set_id, event_id_t event_id)
{
  int i;

  for (i = 0; i < MAX_CONCURRENT_EVENTS; i++)
  {
    if ((running_events[i].in_use)
        && (running_events[i].event_set_id == event_set_id)
        && (running_events[i].event_id == event_id))
    {
      return i;
    }
  }

  return -1;
}

static bool EventIsCompleted()
{
  int i;

  for (i = 0; i < MAX_CONCURRENT_EVENTS; i++)
  {
    if ((running_events[i].in_use)
        && (running_events[i].status != EVENT_RUNNING))
    {
      dbg_notice(
          "%s: event_id %d (event_set_id %d) @ running_events[%d] is no longer running\n",
          __FUNCTION__, running_events[i].event_id,
          running_events[i].event_set_id, i);
      return TRUE;
    }
  }

  return FALSE;
}


static bool EventIsDownload(int event_set_index)
{
  if ((event_set_index < 0) || (event_set_index >= MAX_EVENT_SETS))
  {
    dbg_err("%s: Index %d is INVALID - returning FALSE\n", __FUNCTION__,
            event_set_index);

    return FALSE;
  }

  if (event_set_table[event_set_index].event_data_p)
  {
    int i;

    for (i = 0; i < event_set_table[event_set_index].num_events; i++)
    {
      if (event_set_table[event_set_index].event_data_p[i].eCallback
          == cbLaunchDownloader)
      {
        log_notice("%s: Event at index %d is a DOWNLOAD - returning TRUE\n",
                   __FUNCTION__, event_set_index);

        return TRUE;
      }
    }
  }

  return FALSE;
}


static bool EventReadyToLaunch(int *event_set_index)
{
  bool ret_val = FALSE;
  int open_event_slots = NumOpenEventSlots();

  dbg_trace("%s: open_event_slots: %d \n", __FUNCTION__, open_event_slots);

  if (open_event_slots > 0)
  {
    int set_index;
    time_t cur_time;

    /* Find out how many jobs are ready to run */
    for (set_index = 0; set_index < MAX_EVENT_SETS; set_index++)
    {
      /* Make sure event set is valid */
      if (event_set_table[set_index].event_set_id == EVENT_SET_ID_INVALID)
      {
        break;
      }

      /* To process event we have to be sure that instance can be locked. If instance for current event can't be locked - we can't count it as a ready for processing. Use 1 second to test */
      if (TestLockServerInstance(event_set_table[set_index].server_instance)
          == VHQ_SUCCESS)
      {
        switch (event_set_table[set_index].timer_type)
        {
          case EVENT_TIMER_DATE_TIME:
            cur_time = linux_time(NULL);
            break;
          case EVENT_TIMER_RTC:
          default:
            cur_time = GetRTC();
            if (cur_time == 0)
              cur_time = linux_time(NULL);
            break;
        }

        /* If this job is ready to run, increment ret_val */
        if (event_set_table[set_index].next_run_time <= cur_time)
        {
          if (!EventSetCurrentlyRunning(set_index)
              && !IsDependencyOpSetInTable(
                  event_set_table[set_index].dependency_event_set))
          {
            if (EventAllowedInOpenSlot(set_index))
            {
              dbg_trace(
                  "%s: event_set_table[%d] is ready to run (cur_time = %d, nrt = %d)\n",
                  __FUNCTION__, set_index, cur_time,
                  event_set_table[set_index].next_run_time);
              ret_val = TRUE;
              break;
            }
            else
            {

              uint32 pre_event_failure_retry_freq = 0;
              VHQGetParameterUint32(PARAM_HB_FAILURE_RETRY_FREQUENCY,
                                    &pre_event_failure_retry_freq, DEFAULT_BASE);

              event_set_table[set_index].next_run_time = cur_time + pre_event_failure_retry_freq;

              dbg_trace(
                  "%s: event_set_table[%d] is ready to run, but already similar operation is running (cur_time = %d, nrt = %d)\n",
                  __FUNCTION__, set_index, cur_time,
                  event_set_table[set_index].next_run_time);
            }
          }
          else
          {
            dbg_trace(
                "%s: event_set_table[%d] is already running or has dependent (cur_time = %d, nrt = %d)\n",
                __FUNCTION__, set_index, cur_time,
                event_set_table[set_index].next_run_time);
          }
        }
      }
    }

    if (ret_val == TRUE)
    {
      dbg_trace(
          "%s: EventSet at index %d is ready to launch - checking if it can be launched\n",
          __FUNCTION__, set_index);

      /* Only allow one download to run at a time */
      if (EventIsDownload(set_index))
      {
        dbg_trace(
            "%s: EventSet at index %d is a download - checking if we already have a download in progress\n",
            __FUNCTION__, set_index);
        if (DownloadOpSetInProgress())
        {
          dbg_trace(
              "%s: EventSet at index %d is a download and a download is in progress already - returning FALSE\n",
              __FUNCTION__, set_index);
          ret_val = FALSE;
        }
        else
        {
          /* No downloads are in progress so fall through to the checks below */
          dbg_trace(
              "%s: EventSet at index %d is a download but no downloads are in progress - continuing checks\n",
              __FUNCTION__, event_set_index);
        }
      }

      if ((event_set_index != NULL) && (*event_set_index != set_index))
      {
        dbg_msg("%s: Updating event_set_index from %d to %d\n", __FUNCTION__,
                *event_set_index, set_index);
        *event_set_index = set_index;
      }
    }
  }

  return ret_val;
}

static int NumRunningEvents()
{
  int i;
  int ret_val = 0;

  for (i = 0; i < MAX_CONCURRENT_EVENTS; i++)
  {
    if ((running_events[i].in_use)
        && (running_events[i].status == EVENT_RUNNING))
    {
      ret_val++;
    }
  }

  return ret_val;
}


static bool GetEventSetTableIndexes(int running_event_index,
                                    event_set_table_t *event_set,
                                    int *event_index)
{
  int loc_event_set_index;

  if (event_index)
    *event_index = -1;
  else
    return FALSE;

  if ((running_event_index < 0)
      || (running_event_index >= MAX_CONCURRENT_EVENTS))
    return FALSE;

  for (loc_event_set_index = 0; loc_event_set_index < MAX_EVENT_SETS;
      loc_event_set_index++)
  {
    if ((running_events[running_event_index].event_set_id
        == event_set_table[loc_event_set_index].event_set_id)
        && (event_set_table[loc_event_set_index].event_data_p))
    {
      int loc_event_index;

      for (loc_event_index = 0;
          loc_event_index < event_set_table[loc_event_set_index].num_events;
          loc_event_index++)
      {
        if (running_events[running_event_index].event_id
            == event_set_table[loc_event_set_index].event_data_p[loc_event_index]
                .event_id)
        {
          dbg_msg(
              "%s: Found event_set_id %d, event_id %d in event_set_table[%d].event_data_p[%d]\n",
              __FUNCTION__, running_events[running_event_index].event_set_id,
              running_events[running_event_index].event_id, loc_event_set_index,
              loc_event_index);
          memcpy(event_set, &event_set_table[loc_event_set_index],
                 sizeof(event_set_table_t));
          *event_index = loc_event_index;
          return TRUE;
        }
      }
    }
  }

  dbg_err(
      "%s ERROR: Couldn't find event_set_id %d, event_id %d in event_set_table[]\n",
      __FUNCTION__, running_events[running_event_index].event_set_id,
      running_events[running_event_index].event_id);
  return FALSE;
}

static pre_post_event_result_t PerformPreEventCB(
    callback_t eCallback, pre_post_callback_t preEventCbType,
    event_set_id_t event_set_id, event_id_t event_id,
    bool app_approval_required)
{
  switch (preEventCbType)
  {
    case cbStandard:
      dbg_msg("%s: calling StandardPreEventCallback\n", __FUNCTION__);
      return StandardPreEventCallback(eCallback, event_set_id, event_id,
                                      app_approval_required);
    case cbNone:
    case cbMAXTypes:
    default:
      return PRE_POST_EVENT_SUCCESS;
  }
}

static pre_post_event_result_t PerformPostEventCB(
    pre_post_callback_t postEventCbType)
{
  pre_post_event_result_t result = PRE_POST_EVENT_SUCCESS;
  switch (postEventCbType)
  {
    case cbStandard:
      result = StandardPostEventCallback();
      break;
    case cbNone:
    case cbMAXTypes:
    default:
      result = PRE_POST_EVENT_SUCCESS;
      break;
  }

  return result;
}

static void FailEventCallback(pre_post_callback_t preEventCbType)
{
  int i;

  /* Make sure the CB requires us to actually make a callback */
  if ((preEventCbType == cbNone) || (preEventCbType >= cbMAXTypes))
    return;

  /* Let's go through the callback_stack to see if this is in progress */
  for (i = 0; i < cbMAXTypes; i++)
  {
    if (callback_stack[i].cbType == preEventCbType)
    {
      if (callback_stack[i].cbResult == PRE_POST_EVENT_IN_PROGRESS)
      {
        log_err(
            "%s: PreEvent CB type %d WAS in progress when thread was cancelled - marking it as FAILURE\n",
            __FUNCTION__, preEventCbType);
        callback_stack[i].cbResult = PRE_POST_EVENT_FAILURE;
      }
    }
  }
}

static pre_post_event_result_t PushEventCallback(
    callback_t eCallback, pre_post_callback_t preEventCbType, int event_set_id,
    int event_id, bool app_approval_required)
{
  int i;
  int cbSlot;
  pre_post_event_result_t cb_result;

  /* Make sure the CB requires us to actually make a callback */
  if ((preEventCbType == cbNone) || (preEventCbType >= cbMAXTypes))
    return PRE_POST_EVENT_SUCCESS;

  cbSlot = -1;

  /* Let's go through the callback_stack to see if this has already been called */
  for (i = 0; i < cbMAXTypes; i++)
  {
    if (callback_stack[i].cbType == preEventCbType)
    {
      cbSlot = i;
      while (callback_stack[i].cbResult == PRE_POST_EVENT_IN_PROGRESS)
      {
        dbg_msg(
            "%s: PreEvent CB type %d is in progress - waiting for it to complete\n",
            __FUNCTION__, preEventCbType);
        sleep(2);
      }

      /* If the CB was already successful - return success */
      if (callback_stack[i].cbResult == PRE_POST_EVENT_SUCCESS)
      {
        dbg_msg("%s: PreEvent CB type %d was already successful\n",
                __FUNCTION__, preEventCbType);

        /* If this was the standard callback, we can set CONTACT_SERVER_APPROVAL flag for this event set too */
        if (preEventCbType == cbStandard)
        {
          SetApprovalFlag(event_set_id, event_id, CONTACT_SERVER_PRE_APPROVED);
        }

        return PRE_POST_EVENT_SUCCESS;
      }

      /* If we get here, we attempted the CB but it was unsuccessful - fall through
       so we attempt the callback again */
      break;
    }
  }

  if (cbSlot == -1)
  {
    cbSlot = 0;
    while ((cbSlot < cbMAXTypes)
        && (callback_stack[cbSlot].cbType != cbMAXTypes))
      cbSlot++;
  }

  if ((cbSlot < 0) || (cbSlot >= cbMAXTypes))
  {
    /* We should always be able to find an open slot since we have room for each callback type */
    assert(0);
    log_err("%s ERROR: Unable to find an open callback slot\n", __FUNCTION__);
    return PRE_POST_EVENT_FAILURE;
  }

  callback_stack[cbSlot].cbType = preEventCbType;
  callback_stack[cbSlot].cbResult = PRE_POST_EVENT_IN_PROGRESS;
  dbg_msg("%s: calling preEventCbType %d\n", __FUNCTION__, preEventCbType);
  cb_result = PerformPreEventCB(eCallback, preEventCbType, event_set_id,
                                event_id, app_approval_required);
  if (cb_result == PRE_POST_EVENT_SUCCESS)
  {
    dbg_notice("%s: preEventCbType %d was SUCCESSFUL\n", __FUNCTION__,
               preEventCbType);
  }
  else
  {
    log_err("%s ERROR: preEventCbType %d FAILED!!!\n", __FUNCTION__,
            preEventCbType);
  }
  callback_stack[cbSlot].cbResult = cb_result;

  return cb_result;
}

static pre_post_event_result_t PopEventCallbacks()
{
  int i;
  pre_post_event_result_t ret_val = PRE_POST_EVENT_SUCCESS;

  /* Pop the callbacks off in reverse order */
  for (i = cbMAXTypes - 1; i >= 0; i--)
  {
    if ((callback_stack[i].cbType != cbMAXTypes)
        && (callback_stack[i].cbResult == PRE_POST_EVENT_SUCCESS))
    {
      dbg_notice("%s: calling postEventCbType %d\n", __FUNCTION__,
                 callback_stack[i].cbType);
      if (PerformPostEventCB(callback_stack[i].cbType)
          != PRE_POST_EVENT_SUCCESS)
      {
        log_err("%s ERROR: postEventCbType %d FAILED!!!\n", __FUNCTION__,
                callback_stack[i].cbType);
        ret_val = PRE_POST_EVENT_FAILURE;
      }
    }
  }

  /* Clear the CB stack when we are done */
  ClearCBStack();

  return ret_val;
}

#if EVENT_SCHED_THREAD_MODE

void EventSchedThreadCleanupHandler(void *arg)
{
  int lock_ret_val;

  /* We may need to use arg in the future so keep passing it here */
  UNUSED(arg);

  /* We need to perform mutex cleanup here - note that even if the thread doesn't have the mutex locked,
   it doesn't hurt to unlock it.  That way, we can make sure all mutexes are unlocked if our thread
   gets cancelled */
  lock_ret_val = pthread_mutex_unlock(&com_interface_mutex);
  if (lock_ret_val != 0)
  {
    //printf("%s ERROR: error Unlocking com_interface_mutex (pthread_self() = 0x%08x)!!!\n\n\n", __FUNCTION__, pthread_self());
  }
  else
  {
    //printf("%s: Unlocked com_interface_mutex (pthread_self() = 0x%08x)!!!\n\n\n", __FUNCTION__, pthread_self());
  }

  lock_ret_val = pthread_mutex_unlock(&adk_mutex);
  if (lock_ret_val != 0)
  {
    //printf("%s ERROR: error Unlocking adk_mutex (pthread_self() = 0x%08x)!!!\n\n\n", __FUNCTION__, pthread_self());
  }
  else
  {
    //printf("%s: Unlocked adk_mutex (pthread_self() = 0x%08x)!!!\n\n\n", __FUNCTION__, pthread_self());
  }
}

static void* CommonOperationLauncher(void *arg)
{
  int lock_ret_val;
  char thread_id[20];
  bool app_approval_required;
  pre_post_event_result_t preEventCB_result;
  event_thread_arg *arg_p = (event_thread_arg*) arg;
  EventSchedulerCB *pCallbackTable = EventSchedulerInitCallbackTable(NULL);

  /* First thing any operation needs to do is lock the eventRunningMutex so EventScheduler
   can tell whether this is still running or has exited */
  lock_ret_val = pthread_mutex_lock(&arg_p->eventRunningMutex);
  if (lock_ret_val != 0)
  {
    dbg_err("\n\n%s ERROR: error (%d)  locking mutex!!!\n\n", __FUNCTION__,
            lock_ret_val);
  }

  /* Block all signals on this thread (Event Scheduler thread should  handle signals) */
  BlockAllSignals(FALSE);

  snprintf(thread_id, sizeof(thread_id), "COL-%s",
           cbEnumToStr(arg_p->eCallback));
  LogRegisterThreadDescription(thread_id);

  log_dbg("\n\n%s: Running callback %s on new thread 0x%08x\n", __FUNCTION__,
          cbEnumToStr(arg_p->eCallback), pthread_self());

  dbg_notice(
      "%s: pushing EventSchedThreadCleanupHandler with pthread_cleanup_push()\n",
      __FUNCTION__);
  pthread_cleanup_push(EventSchedThreadCleanupHandler, NULL)
        ;

        running_events[arg_p->running_events_index].static_result =
            EVENT_PRE_EVENT_CB_FAILURE;

        app_approval_required = TRUE;
        if (arg_p->pre_approvals & CONTACT_SERVER_PRE_APPROVED)
          app_approval_required = FALSE;

        /* Do the pre-event CB - PushCallback will only do it if necessary */
        preEventCB_result = PushEventCallback(arg_p->eCallback,
                                              arg_p->ePreCallback,
                                              arg_p->event_set_id,
                                              arg_p->event_id,
                                              app_approval_required);

        running_events[arg_p->running_events_index].static_result =
            EVENT_FAILURE;

        if (preEventCB_result == PRE_POST_EVENT_SUCCESS)
        {
          running_events[arg_p->running_events_index].static_result =
              pCallbackTable[arg_p->eCallback](arg);
        }
        else
        {
          running_events[arg_p->running_events_index].static_result =
              EVENT_PRE_EVENT_CB_FAILURE;
        }

        /* We have to unlock this mutex before returning so EventScheduler knows we are finished */
        lock_ret_val = pthread_mutex_unlock(&arg_p->eventRunningMutex);
        if (lock_ret_val != 0)
        {
          dbg_err("\n\n%s ERROR: error (%d)  unlocking mutex!!!\n\n",
                  __FUNCTION__, lock_ret_val);
        }

        dbg_notice(
            "%s: popping cleanup handler with pthread_cleanup_pop()\n\n\n",
            __FUNCTION__);
        pthread_cleanup_pop(0);

  LogUnRegisterThreadDescription();

  dbg_notice("%s: Calling pthread_exit(&%d - 0x%08x) - pid = %d\n",
             __FUNCTION__,
             running_events[arg_p->running_events_index].static_result,
             &running_events[arg_p->running_events_index].static_result,
             getpid());
  pthread_exit(&running_events[arg_p->running_events_index].static_result);
  return NULL;

}
#endif

static event_result_t LaunchEvent(callback_t eCallback,
                                  pre_post_callback_t ePreCallback,
                                  pre_post_callback_t ePostCallback,
                                  event_set_id_t event_set_id,
                                  event_id_t event_id, void *pvCbData,
                                  bool continuation)
{
  int event_slot;
  uint32 pre_approvals;
  event_result_t ret_val = EVENT_CRITICAL_FAILURE;
#if EVENT_SCHED_THREAD_MODE
  pthread_attr_t attr;
#endif
  EventSchedulerCB *pCallbackTable = EventSchedulerInitCallbackTable(NULL);

  if ((event_set_id == EVENT_SET_ID_INVALID)
      || (event_set_id == EVENT_SET_ID_UNKNOWN))
  {
    dbg_err("\n\n%s ERROR: Invalid event_set_id - %d!!!\n\n", __FUNCTION__,
            event_set_id);
    return EVENT_CRITICAL_FAILURE;
  }

  if ((event_id == EVENT_ID_INVALID) || (event_id == EVENT_ID_UNKNOWN))
  {
    dbg_err("\n\n%s ERROR: Invalid event_id - %d!!!\n\n", __FUNCTION__,
            event_id);
    return EVENT_CRITICAL_FAILURE;
  }

  if (pCallbackTable[eCallback] == NULL)
  {
    log_err(
        "\n\n%s ERROR: Event type %d not supported for this operating mode!!!\n\n",
        __FUNCTION__, eCallback);
    return EVENT_CRITICAL_FAILURE;
  }

  event_slot = GetOpenEventSlot();
  if ((event_slot < 0) || (event_slot >= MAX_CONCURRENT_EVENTS))
  {
    log_err("\n\n%s:%s ERROR: running_events table is FULL!!!\n\n", __FILE__,
            __FUNCTION__);
    return EVENT_LAUNCH_FAILURE;
  }

  running_events[event_slot].in_use = TRUE;
  running_events[event_slot].release_instance = TRUE;

  /* If this is a download, lets figure out the pre-approvals - start with no pre-approvals */
  pre_approvals = 0;
  if (eCallback == cbLaunchDownloader)
  {
    bool bAppApprovalPerOpSet = TRUE;
    event_data_t *ev_data = (event_data_t*) pvCbData;
    launch_downloader_parms *dl_params = &(ev_data->downloader_parms);
    download_file_content_t *dl_content = &(dl_params->dl_file_content);
    dl_file_dl_type_t *dl_type = &(dl_content->DownloadType);
    dl_file_dl_type_t dl_type_val = *dl_type;

    VHQGetParameterBool(PARAM_APP_APPROVAL_PER_OPERATION_SET,
                        &bAppApprovalPerOpSet);

    if (dl_type_val & DL_FILE_DL_TYPE_CONTACT_SERVER_APPROVED_MASK)
    {
      pre_approvals |= CONTACT_SERVER_PRE_APPROVED;
    }

    if (dl_type_val & DL_FILE_DL_TYPE_INSTALL_APPROVED_MASK)
    {
      pre_approvals |= INSTALL_PRE_APPROVED;
    }

    if (dl_type_val & DL_FILE_DL_TYPE_REBOOT_APPROVED_MASK)
    {
      pre_approvals |= REBOOT_PRE_APPROVED;
    }

    if (dl_type_val & DL_FILE_DL_TYPE_RESTART_APPS_APPROVED_MASK)
    {
      pre_approvals |= RESTART_APPS_PRE_APPROVED;
    }

    if (bAppApprovalPerOpSet == FALSE)
    {
      /* If AppApprovalPerOpSet is set to FALSE no need of pre-approvals and clean the approvals set by older VHQ Agent for backward compatibility */
      dbg_msg(
          "%s: Preapprovals (0x%08x), AppApprovalPerOpSet is set to FALSE, clear previous approvals.\n",
          __FUNCTION__, pre_approvals);

      *dl_type &= ~(pre_approvals);

      pre_approvals = 0;
    }
    else
    {
      dbg_msg("%s: download pre_approvals = 0x%08x\n", __FUNCTION__,
              pre_approvals);
    }
  }

#if EVENT_SCHED_THREAD_MODE
  running_events[event_slot].arg_p = malloc(sizeof(event_thread_arg));

  /* Check allocation result */
  if (running_events[event_slot].arg_p == NULL)
  {
    return EVENT_LAUNCH_FAILURE;
  }

  if (pthread_mutex_init(&running_events[event_slot].arg_p->eventRunningMutex,
  NULL) != 0)
  {
    dbg_err("\n\n%s ERROR: could not init event mutex!!!\n\n", __FUNCTION__);
  }

  running_events[event_slot].arg_p->event_set_id = event_set_id;
  running_events[event_slot].arg_p->event_id = event_id;
  running_events[event_slot].arg_p->pvCbData = pvCbData;
  running_events[event_slot].arg_p->eCallback = eCallback;
  running_events[event_slot].arg_p->ePreCallback = ePreCallback;
  running_events[event_slot].arg_p->ePostCallback = ePostCallback;
  running_events[event_slot].arg_p->running_events_index = event_slot;
  running_events[event_slot].arg_p->continuation = continuation;
  running_events[event_slot].arg_p->pre_approvals = pre_approvals;
  pthread_mutex_init(&running_events[event_slot].wd_mutex, NULL);

  /* Initialize and set thread detached attribute */
  pthread_attr_init(&attr);
  pthread_attr_setdetachstate(&attr, PTHREAD_CREATE_JOINABLE);

  /* Event has passed so call the Common callback which will do any pre-post functionality and call the correct processor */
  dbg_notice(
      "\n\n\n\n\n%s: calling callback function on new thread (cb_type = %s, pthread_self() = 0x%08x, arg_p->continuation = %d, arg_p->pre_approvals = 0x%08x)\n",
      __FUNCTION__, cbEnumToStr(eCallback), pthread_self(),
      running_events[event_slot].arg_p->continuation,
      running_events[event_slot].arg_p->pre_approvals);
  if (pthread_create(&running_events[event_slot].thread_id, &attr,
                     CommonOperationLauncher,
                     (void*) running_events[event_slot].arg_p) != 0)
  {
    /* Free the arg_p we allocated */
    free(running_events[event_slot].arg_p);

    /* Clear running_event slot since we were unable to launch the event */
    memset(&running_events[event_slot], 0, sizeof(running_event_t));
    dbg_err("%s: pthread_create FAILED\n", __FUNCTION__);
    ret_val = EVENT_LAUNCH_FAILURE;
  }
  else
  {
    uint32 event_timeout;

    VHQGetParameterUint32(PARAM_EVENT_WATCHDOG_TIME, &event_timeout,
                          DEFAULT_BASE);

    dbg_notice("%s: New thread CREATED - thread %08x\n", __FUNCTION__,
               running_events[event_slot].thread_id);
    ret_val = EVENT_RUNNING;
    running_events[event_slot].status = EVENT_RUNNING;
    running_events[event_slot].event_set_id = event_set_id;
    running_events[event_slot].event_id = event_id;
    running_events[event_slot].eCallback = eCallback;
    running_events[event_slot].start_time = GetRTC();
    running_events[event_slot].expire_time = running_events[event_slot]
        .start_time + event_timeout;
  }

  /* Free attribute */
  pthread_attr_destroy(&attr);

  return ret_val;
#else
    {
        bool app_approval_required;
        event_thread_arg cb_args;
        memset(&cb_args, 0, sizeof(event_thread_arg));

        running_events[event_slot].event_set_id = event_set_id;
        running_events[event_slot].event_id = event_id;
        running_events[event_slot].eCallback = eCallback;
        running_events[event_slot].start_time = GetRTC();

        app_approval_required = TRUE;
        if (pre_approvals & CONTACT_SERVER_PRE_APPROVED)
            app_approval_required = FALSE;

        if (PushEventCallback(eCallback, ePreCallback, event_set_id, event_id, app_approval_required) == PRE_POST_EVENT_SUCCESS)
        {

            cb_args.event_id = event_id;
            cb_args.pvCbData = pvCbData;
            cb_args.continuation = continuation;
            log_dbg( "%s: calling callback function (cb_type = %s, arg_p->continuation = %d)\n", __FUNCTION__, cbEnumToStr(eCallback), cb_args.continuation);
            running_events[event_slot].status = pCallbackTable[eCallback](&cb_args);
        }
        else
        {
            dbg_err( "%s: Pre-Event CB Type %d FAILED - setting status to EVENT_PRE_EVENT_CB_FAILURE (%d)\n", __FUNCTION__, ePreCallback, running_events[event_slot].status);
            running_events[event_slot].status = EVENT_PRE_EVENT_CB_FAILURE;
        }
        log_dbg( "%s: returning %d\n", __FUNCTION__, running_events[event_slot].status);
        return running_events[event_slot].status;
    }
#endif
}

static void MonitorEvents()
{
#if EVENT_SCHED_THREAD_MODE
  int i;
  int kill_ret_val;
  bool thread_exited;
  time_t cur_rtc = GetRTC();

  for (i = 0; i < MAX_CONCURRENT_EVENTS; i++)
  {
    dbg_trace("%s: checking if running_events[%d] is in use\n", __FUNCTION__,
              i);
    /* Mitch (1-5-2017): ADKTMS-1504 - make sure the thread is in use AND IS RUNNING.  If it is not running, the
     status is already finalized and there is no need to do anything here */
    if ((running_events[i].in_use)
        && (running_events[i].status == EVENT_RUNNING))
    {
      thread_exited = FALSE;

      /* Mitch (1-5-2017): ADKTMS-1504 - trying to kill thread_id 0 causes a segmentation fault so don't do it.  Note that we should never
       get here with the change above where we make sure the event is in use AND RUNNING...but if we do lets handle it gracefully */
      if (running_events[i].thread_id)
      {
        kill_ret_val = pthread_kill(running_events[i].thread_id, 0);

        if (kill_ret_val == ESRCH)
        {
          dbg_msg(
              "%s: running_events[%d] Thread ID not found - exiting wait loop\n",
              __FUNCTION__, i);
          thread_exited = TRUE;
        }
      }
      else
      {
        log_err(
            "%s ERROR: running_events[%d] is running but has invalid thread_id (0x%08x) - marking as FAILED",
            __FUNCTION__, i, running_events[i].thread_id);
        running_events[i].status = EVENT_FAILURE;
      }

      if (thread_exited)
      {
        void *result_void_p;
        event_result_t *res_p;

        dbg_notice(
            "%s: thread %08x exited - destroying running_events[%d] eventRunningMutex\n",
            __FUNCTION__, running_events[i].thread_id, i);

        if (pthread_mutex_destroy(&running_events[i].arg_p->eventRunningMutex)
            != 0)
        {
          dbg_err(
              "\n\n%s ERROR: could not destroy event mutex of running_events[%d]!!!\n\n",
              __FUNCTION__, i);
        }
        //eventRunningMutex = PTHREAD_MUTEX_INITIALIZER;

        if (pthread_join(running_events[i].thread_id, &result_void_p) != 0)
          dbg_err("%s: pthread_join FAILED for running_events[%d]\n",
                  __FUNCTION__, i);
        else
        {
          dbg_notice("%s: New thread JOINED - running_events[%d]\n",
                     __FUNCTION__, i);

          res_p = (event_result_t*) result_void_p;
          running_events[i].status = *res_p;
          dbg_notice("%s: ret_val = %d for running_events[%d]\n",
                     __FUNCTION__, running_events[i].status, i);
        }


        if (running_events[i].arg_p)
        {
          free(running_events[i].arg_p);
        }
      }
    }
  }
#endif
}

/******************************************************************************
 * Function:      SYNCnewEventSetWithTable
 * Description:   Function triggers dependency between new eventSet and already scheduled events.
 *                If action is not in executed state it could be modified and stored, if much dependency.

 * Parameters:    (in) newEventSet  - pointer to new eventSet.

 * Return Value:  none
 *****************************************************************************/
static inline void SYNCnewEventSetWithTable(event_set_table_t *newEventSet)
{
  int global_event_index;
  bool eventsTableChanged = FALSE;

  if (!newEventSet)
    return;

  for (global_event_index = 0; global_event_index < newEventSet->num_events;
      global_event_index++)
  {
    switch (newEventSet->event_data_p[global_event_index].eCallback)
    {
      /*
       * ADKTMS-1092 The events scheduler table should not consist of two SetClock actions. New or older ones could be superseded.
       */
      case cbTerminalAction:
        if (newEventSet->event_data_p[global_event_index].sCallbackData
            .action_parms.term_act_content.action == TERM_ACTION_SET_CLOCK)
        {
          int local_entry_index;
          int local_event_index;

          log_dbg(
              "%s: Events table consists of SetClock operation. Modification of scheduled events content could be required.\n",
              __FUNCTION__);

          /* Go through the events table to detect entry of TERM_ACTION_SET_CLOCK and modify if present and not in execution state at current moment */
          for (local_entry_index = 0; local_entry_index < MAX_EVENT_SETS;
              local_entry_index++)
          {
            /* Detect if reach the end of table. Do not process after it */
            if (event_set_table[local_entry_index].event_set_id
                == EVENT_ID_INVALID)
              break;

            /* We do not expect two TERM_ACTION_SET_CLOCK actions in one set of events. Do not process ourself */
            if (event_set_table[local_entry_index].event_set_id
                == newEventSet->event_set_id)
              continue;

            /* Compare callback type and action type */
            for (local_event_index = 0;
                local_event_index
                    < event_set_table[local_entry_index].num_events;
                local_event_index++)
            {
              if (event_set_table[local_entry_index].event_data_p[local_event_index]
                  .eCallback == cbTerminalAction
                  && event_set_table[local_entry_index].event_data_p[local_event_index]
                      .sCallbackData.action_parms.term_act_content.action
                      == TERM_ACTION_SET_CLOCK)
              {
                struct tm local_time;
                linux_localtime(
                    &event_set_table[local_entry_index].next_run_time,
                    &local_time);

                /* One more entry for TERM_ACTION_SET_CLOCK found, do not modify it, this is unsafe. Modify new event to make it unusable */
                if (event_set_table[local_entry_index].executing_index)
                {
                  log_err(
                      "%s: ERROR: Event at index %d is executing - entry not modified. Event next_run_time = %s\n",
                      __FUNCTION__, local_entry_index, tmtoa(&local_time));

                  /* Make new event unusable by deleting packet received timestamp */
                  linux_localtime(&newEventSet->next_run_time, &local_time);
                  log_dbg(
                      "%s: IMPORTANT: New event is modified to ignore processing. Event next_run_time = %s\n",
                      __FUNCTION__, tmtoa(&local_time));
                  newEventSet->event_data_p[global_event_index].sCallbackData
                      .action_parms.term_act_content.action_receive_time = 0;

                  /* Trigger flag to processing table save */
                  eventsTableChanged = TRUE;

                  /* Continue processing to make unusable all other events since some SET_CLOCK event is in execution stage and will take care of time processing */
                  continue;
                }

                /* One more entry for TERM_ACTION_SET_CLOCK found, make it unusable by deleting packet received timestamp */
                log_dbg(
                    "%s: Event at index %d has processing of SetClock. Modified to ignore it. Event next_run_time = %s\n",
                    __FUNCTION__, local_entry_index, tmtoa(&local_time));
                event_set_table[local_entry_index].event_data_p[local_event_index]
                    .sCallbackData.action_parms.term_act_content
                    .action_receive_time = 0;

                /* Trigger flag to processing table save */
                eventsTableChanged = TRUE;
              }
            }
          }
        }
        break;
      default:
        break;
    }
  }

  if (eventsTableChanged)
  {
    log_dbg("%s: Events table changed.\n", __FUNCTION__);
  }
}

static void CancelEventTimer()
{
  struct itimerval new_tv;

  /* Disable the timer while we are adding this new event */
  memset(&new_tv, 0, sizeof(new_tv));
  dbg_msg("%s:%s(%d): Clearing Timer\n", __FILE__, __FUNCTION__, __LINE__,
          __FUNCTION__);
  if (setitimer(ITIMER_REAL, &new_tv, NULL) != 0)
  {
    dbg_err("%s ERROR: Could not disable current timer\n", __FUNCTION__);
    assert(0);
  }
}

static bool CleanEventTableForHB(const event_set_table_t *newEventSet)
{
  int event_set_index = 0;
  int i;
  bool isHB = FALSE;
  bool isRecurHB = FALSE;
  bool isKeysExchangeRequired = FALSE;

  /* See what we have on input */
  if ((newEventSet->num_events == 1) && (newEventSet->event_data_p)
      && (newEventSet->event_data_p[0].eCallback == cbHeartbeat))
  {
    isHB = TRUE;
    if (newEventSet->recurring)
      isRecurHB = TRUE;
    if (newEventSet->key_exchange_event_set)
      isKeysExchangeRequired = TRUE;
  }

  if (!isHB || !isKeysExchangeRequired)
  {
    log_dbg(
        "%s:%s(%d): event is not a HB (%d) or keys exchange not required (%d)\n",
        __FILE__, __FUNCTION__, __LINE__, isHB, isKeysExchangeRequired);
    return FALSE;
  }

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  /* Always find a place for single HB if instance has no one. Do not place if recur HB is already there */
  if (!isRecurHB)
  {
    log_dbg("%s: event is single HB, process\n", __FUNCTION__);
    for (event_set_index = 0; event_set_index < MAX_EVENT_SETS;
        event_set_index++)
    {
      /* We need info about current instance only */
      if (strcmp(event_set_table[event_set_index].server_instance,
                 newEventSet->server_instance) == 0)
      {
        if ((event_set_table[event_set_index].num_events == 1)
            && (event_set_table[event_set_index].event_data_p)
            && (event_set_table[event_set_index].event_data_p[0].eCallback
                == cbHeartbeat))
        {
          log_dbg("%s: HB detected at %d, we don't need additional slot\n",
                  __FUNCTION__, event_set_index);
          mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
          return FALSE;
        }
      }
    }

    /* We have no HB in the table for current instance, find place for it by removing existed one */
    for (event_set_index = 0; event_set_index < MAX_EVENT_SETS;
        event_set_index++)
    {
      /* We need info about current instance only */
      if (strcmp(event_set_table[event_set_index].server_instance,
                 newEventSet->server_instance) == 0)
        break;
    }
  }
  else
  {
    /* Search for already existed single HB. We will replace it by recur HB */
    log_dbg("%s: event is recur HB, process\n", __FUNCTION__);

    for (event_set_index = 0; event_set_index < MAX_EVENT_SETS;
        event_set_index++)
    {
      /* We need info about current instance only */
      if (strcmp(event_set_table[event_set_index].server_instance,
                 newEventSet->server_instance) == 0)
      {
        if ((event_set_table[event_set_index].num_events == 1)
            && (event_set_table[event_set_index].event_data_p)
            && (event_set_table[event_set_index].event_data_p[0].eCallback
                == cbHeartbeat))
        {
          log_dbg("%s: HB detected at %d, remove it to open slot\n",
                  __FUNCTION__, event_set_index);
          break;
        }
      }

      /* We have no HB in the table for current instance, find place for it by removing existed one */
      if (event_set_index == MAX_EVENT_SETS)
      {
        for (event_set_index = 0; event_set_index < MAX_EVENT_SETS;
            event_set_index++)
        {
          /* We need info about current instance only */
          if (strcmp(event_set_table[event_set_index].server_instance,
                     newEventSet->server_instance) == 0)
            break;
        }
      }
    }
  }

  /* We have no events for current instance, but we still need some place */
  if (event_set_index == MAX_EVENT_SETS)
  {
    event_set_index = 0;
  }

  /* We can't remove currently active event, check next for targeted instance */
  if (event_set_table[event_set_index].executing_index)
  {
    log_dbg(
        "%s ERROR: We can't remove %d since event is active. Try to use next one\n",
        __FUNCTION__, event_set_index);
    for (; event_set_index < MAX_EVENT_SETS; event_set_index++)
    {
      if ((strcmp(event_set_table[event_set_index].server_instance,
                  newEventSet->server_instance) == 0)
          && (!event_set_table[event_set_index].executing_index))
      {
        log_dbg("%s: index moved to %d\n", __FUNCTION__, event_set_index);
        break;
      }
    }

    /* Check did we find next record with no active event. If no - make last event in the table as a victim */
    if (event_set_index == MAX_EVENT_SETS)
    {
      event_set_index = MAX_EVENT_SETS - 1;
    }

    /* We still can't remove active event, check in last time */
    if (event_set_table[event_set_index].executing_index)
    {
      mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
      return FALSE;
    }
  }

  log_dbg(
      "%s ERROR: EventSet %d removed to place HB for registration purposes, belonged to server instance '%s'\n",
      __FUNCTION__, event_set_index,
      event_set_table[event_set_index].server_instance);

  /* We have to remove existed event for this new HB. Delete and move all records up */
  if (event_set_table[event_set_index].event_data_p)
  {
    free(event_set_table[event_set_index].event_data_p);
    event_set_table[event_set_index].event_data_p = NULL;
  }

  for (i = event_set_index; i < MAX_EVENT_SETS - 1; i++)
    memcpy(&event_set_table[i], &event_set_table[i + 1],
           sizeof(event_set_table_t));

  /* Clear the last entry in the table now that it is free */
  memset(&event_set_table[MAX_EVENT_SETS - 1], 0, sizeof(event_set_table_t));
  event_set_table[MAX_EVENT_SETS - 1].event_set_id = EVENT_SET_ID_INVALID;

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  return TRUE;
}

static bool AddEventSetToTable(event_set_table_t *newEventSet, bool start_timer)
{
  bool ret_val = TRUE;
  bool isHightPriority = FALSE;
  int i, entry_index;
  struct itimerval new_tv;
  long long int seconds_to_new_event;
  struct tm local_time;

  /* Read once here since we calculate time difference below */
  time_t cur_time = linux_time(NULL);
  time_t cur_rtc = GetRTC();
  if (cur_rtc == 0)
    cur_rtc = cur_time;

  /* The table is sorted so lets make sure there is an open slot
   at the end of the table for this new event */
  if (event_set_table[MAX_EVENT_SETS - 1].event_set_id != EVENT_SET_ID_INVALID)
  {
    /* The table is full so lets return an error */
    log_err("%s:%s ERROR: Event Set table FULL!!!\n", __FILE__, __FUNCTION__);

    if (CleanEventTableForHB(newEventSet) == FALSE)
    {
      newEventSet->event_set_id = EVENT_SET_ID_INVALID;
      if (newEventSet->event_data_p)
      {
        free(newEventSet->event_data_p);
        newEventSet->event_data_p = NULL;
      }
      return FALSE;
    }
    else
    {
      log_err(
          "%s Event Set table FULL but we have opened a slot for new event\n",
          __FUNCTION__);
      isHightPriority = TRUE;
    }

  }

  if ((newEventSet->num_events) && (newEventSet->event_data_p == NULL))
  {
    log_err("%s ERROR: newEventSet has %d events but event_data_p is NULL!!!\n",
            __FUNCTION__, newEventSet->num_events);
    newEventSet->event_set_id = EVENT_SET_ID_INVALID;
    if (newEventSet->event_data_p)
    {
      free(newEventSet->event_data_p);
      newEventSet->event_data_p = NULL;
    }
    return FALSE;
  }

  for (i = 0; i < newEventSet->num_events; i++)
  {
    /* Go through all events of the event set and add event_id's if needed */
    if (newEventSet->event_data_p[i].event_id == EVENT_ID_INVALID)
    {
      dbg_msg("%s: finding next available ID\n", __FUNCTION__);
      /* Move to the next id if we will be able to add this */
      _cur_event_id++;
      if ((_cur_event_id == EVENT_ID_UNKNOWN)
          || (_cur_event_id == EVENT_ID_INVALID))
        _cur_event_id = 1;

      /* Setup the event's ID */
      newEventSet->event_data_p[i].event_id = _cur_event_id;

      dbg_msg("%s: set event_data_p[%d].event_id to %d\n", __FUNCTION__, i,
              newEventSet->event_data_p[i].event_id);
    }

    dbg_msg("%s: event %d (id = %d, type=%s) - next_run_time = %lu\n",
            __FUNCTION__, i, newEventSet->event_data_p[i].event_id,
            cbEnumToStr(newEventSet->event_data_p[i].eCallback),
            newEventSet->next_run_time);
  }

  /* If this event set does not have an ID assigned to it yet, lets assign one */
  if (newEventSet->event_set_id == EVENT_SET_ID_INVALID)
  {
    dbg_msg("%s: finding next available ID\n", __FUNCTION__);
    /* Move to the next id if we will be able to add this */
    _cur_event_set_id++;
    if ((_cur_event_set_id == EVENT_SET_ID_UNKNOWN)
        || (_cur_event_set_id == EVENT_SET_ID_INVALID))
      _cur_event_set_id = 1;

    /* Setup the event's ID */
    newEventSet->event_set_id = _cur_event_set_id;

    dbg_msg("%s: set event_set_ID to %d\n", __FUNCTION__,
            newEventSet->event_set_id);
  }

  /* Mitch (1-5-2016): Never run anything right now, always store it in the event table and let event scheduler
   process it at the right time.  We can run into deadlock if a run now event is running on the main thread and
   then an event started by event scheduler requests something from the main thread */

  /* Disable the timer while we are processing this new event. We will
   read the current value when we disable the timer */
  CancelEventTimer();

  switch (newEventSet->timer_type)
  {
    case EVENT_TIMER_DATE_TIME:
      seconds_to_new_event = u32subu32(newEventSet->next_run_time, cur_time);
      break;
    case EVENT_TIMER_RTC:
    default:
      seconds_to_new_event = u32subu32(newEventSet->next_run_time, cur_rtc);
      break;
  }

  /* Lets add this new event in the correct place in the table */
  {
    linux_localtime(&newEventSet->next_run_time, &local_time);

    dbg_msg(
        "\n\n%s: Looking for correct spot for new event set (seconds_to_new_event = %s, %s = %lu, next_run_time = %s (%lu))\n",
        __FUNCTION__,
        lltoa(seconds_to_new_event),
        (newEventSet->timer_type == EVENT_TIMER_DATE_TIME) ?
            "cur_time" : "cur_rtc",
        (newEventSet->timer_type == EVENT_TIMER_DATE_TIME) ? cur_time : cur_rtc,
        tmtoa(&local_time), newEventSet->next_run_time);
  }

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  for (entry_index = 0; entry_index < MAX_EVENT_SETS; entry_index++)
  {
    if (event_set_table[entry_index].event_set_id == EVENT_ID_INVALID)
    {
      /* We have reached the end of the current events so this must
       be the last event to happen */
      dbg_msg(
          "%s: Adding new event set to end of event set table at index %d\n",
          __FUNCTION__, entry_index);
      memcpy(&event_set_table[entry_index], newEventSet,
             sizeof(event_set_table_t));
      break;
    }
    else
    {
      long long int seconds_to_event;

      /* High priority task should be before any other events of targeted instance only */
      if (isHightPriority
          && strcmp(newEventSet->server_instance,
                    event_set_table[entry_index].server_instance) != 0)
      {
        log_dbg(
            "%s: Event %d with instance '%s' not match current high priority event instance - checking next entry\n",
            __FUNCTION__, entry_index,
            event_set_table[entry_index].server_instance);
        continue;
      }

      switch (event_set_table[entry_index].timer_type)
      {
        case EVENT_TIMER_DATE_TIME:
          seconds_to_event = u32subu32(
              event_set_table[entry_index].next_run_time, cur_time);
          break;
        case EVENT_TIMER_RTC:
        default:
          seconds_to_event = u32subu32(
              event_set_table[entry_index].next_run_time, cur_rtc);
          break;
      }

      linux_localtime(&event_set_table[entry_index].next_run_time, &local_time);
      dbg_msg(
          "%s: seconds to event %d = %s (next_run_time (%s) = %s (%lu))\n",
          __FUNCTION__,
          entry_index,
          lltoa(seconds_to_event),
          (event_set_table[entry_index].timer_type == EVENT_TIMER_DATE_TIME) ?
              "Date/Time" : "RTC",
          tmtoa(&local_time), event_set_table[entry_index].next_run_time);

      if (event_set_table[entry_index].executing_index)
      {
        dbg_msg(
            "\tEvent at index %d (nrt = %s) is executing - checking next entry\n",
            entry_index, tmtoa(&local_time));
        continue;
      }

      /* In case if current event's execution time is early then all other already scheduled - put it before them */
      if (isHightPriority || seconds_to_new_event < seconds_to_event)
      {
        /* We have found the correct location for this new event so
         lets add it here and move the rest of the table back */
        dbg_msg("%s: Adding new entry to index %d and moving %d entries back\n",
                __FUNCTION__, entry_index,
                ((MAX_EVENT_SETS - 1) - entry_index));
        for (i = MAX_EVENT_SETS - 1; i > entry_index; i--)
        {
          memcpy(&event_set_table[i], &event_set_table[i - 1],
                 sizeof(event_set_table_t));
        }
        memcpy(&event_set_table[entry_index], newEventSet,
               sizeof(event_set_table_t));
        break;
      }
      else
      {
        struct tm local_time2;

        linux_localtime(&event_set_table[entry_index].next_run_time,
                        &local_time2);
        linux_localtime(&newEventSet->next_run_time, &local_time);
        dbg_msg(
            "\tEvent at index %d (nrt = %s) occurs before new event (nrt = %s)\n",
            entry_index, tmtoa(&local_time2), tmtoa(&local_time));
      }
    }
  }

  SYNCnewEventSetWithTable(newEventSet);
  SaveEventSetTable();

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  PRINT_EVENT_SET_TABLE("AddEventSetToTable");

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  /* If the table is not empty, we can start the timer */
  entry_index = GetFirstEventIndex();

  dbg_msg("%s: Process event_set_table[%d] to set a timer\n", __FUNCTION__,
          entry_index);
  if ((entry_index >= 0)
      && (event_set_table[entry_index].event_set_id != EVENT_ID_INVALID))
  {
    switch (event_set_table[entry_index].timer_type)
    {
      case EVENT_TIMER_DATE_TIME:
        cur_time = linux_time(NULL);
        break;
      case EVENT_TIMER_RTC:
      default:
        cur_time = GetRTC();
        if (cur_time == 0)
          cur_time = linux_time(NULL);
        break;
    }

    if (event_set_table[entry_index].next_run_time > cur_time)
    {
      memset(&new_tv, 0, sizeof(new_tv));
      new_tv.it_value.tv_sec = event_set_table[entry_index].next_run_time
          - cur_time;

      UNUSED(start_timer);
      StartEventTimer(new_tv);
    }
    else
    {
      /* The next event is expired so lets process it */
      dbg_msg("%s: Timer in slot %d expired - setting timer_expired!!!\n",
              __func__, entry_index);
      timer_expired = TRUE;
#ifdef EVENT_SCHED_THREAD_MODE
      if (EventSchedThreadId != 0)
      {
        dbg_msg("%s: signaling EventSched to wake-up for processing 0x%X\n",
                __func__, EventSchedThreadId);

        pthread_cond_signal(&event_sched_cond);
      }
#endif /* EVENT_SCHED_THREAD_MODE */
    }
  }

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  if (ret_val == FALSE)
  {
    log_dbg("%s: Freeing newEventSet->event_data_p @ 0x%08x due to FAILURE\n",
            __FUNCTION__, newEventSet->event_data_p);
    if (newEventSet->event_data_p)
    {
      free(newEventSet->event_data_p);
      newEventSet->event_data_p = NULL;
    }
  }

  return ret_val;
}

static bool AddAndLaunchActionEvent(event_set_table_t *dlEventSet,
                                    term_action_t action)
{
  int i, entry_index;
  event_result_t event_res;
  vhq_result_t lock_res;
  event_set_table_t reboot_event_set;
  char currentServerInstance[MAX_SERVER_INSTANCE_NAME_LEN] = { 0 };

  dbg_msg("%s: ENTER\n", __FUNCTION__);
  /* The table is sorted so lets make sure there is an open slot
   at the end of the table for this new event */
  if (event_set_table[MAX_EVENT_SETS - 1].event_set_id != EVENT_SET_ID_INVALID)
  {
    /* The table is full so lets return an error */
    log_err("%s:%s(%d) ERROR: Event Set table FULL!!!\n", __FILE__,
            __FUNCTION__, __LINE__);
    return FALSE;
  }

  if ((dlEventSet->num_events == 0) || (dlEventSet->event_data_p == NULL))
  {
    log_err("%s ERROR: dlEventSet has %d events but event_data_p is NULL!!!\n",
            __FUNCTION__, dlEventSet->num_events);
    return FALSE;
  }

  /* Setup the new event set data */
  memset(&reboot_event_set, 0, sizeof(event_set_table_t));

  /* Set ID invalid and we'll update it later */
  reboot_event_set.event_set_id = EVENT_SET_ID_INVALID;

  /* Just copy most of the information from the download event set that required this reboot S*/
  reboot_event_set.recurring = FALSE;
  reboot_event_set.next_run_time = 0;
  reboot_event_set.retry_freq = 30;
  reboot_event_set.operation_set_id = dlEventSet->operation_set_id;
  reboot_event_set.dependency_event_set = dlEventSet->dependency_event_set;

  reboot_event_set.timer_type = EVENT_TIMER_RTC;
  strncpy(reboot_event_set.server_instance, dlEventSet->server_instance,
          sizeof(reboot_event_set.server_instance) - 1);

  /* We don't need to do CB's since the DL will have already done them */
  reboot_event_set.preEventCbType = cbNone;
  reboot_event_set.postEventCbType = cbNone;

  reboot_event_set.num_events = 0;

  reboot_event_set.event_data_p = malloc(sizeof(event_table_t));
  if (reboot_event_set.event_data_p)
  {
    event_table_t *new_event = &reboot_event_set.event_data_p[0];

    if (new_event)
    {
      /* Setup the new entry event structure */
      memset(new_event, 0, sizeof(event_table_t));
      /* Set ID invalid and let AddEventToTable update it to the correct ID */
      new_event->event_id = EVENT_ID_INVALID;

      new_event->eCallback = cbTerminalAction;

      memcpy(
          &new_event->sCallbackData.action_parms.operation,
          &dlEventSet->event_data_p[dlEventSet->num_events - 1].sCallbackData
              .downloader_parms.operation,
          sizeof(new_event->sCallbackData.action_parms.operation));
      new_event->sCallbackData.action_parms.term_act_content.action = action;
      new_event->sCallbackData.action_parms.term_act_content.op_type =
          OPERATION_TERMINAL_ACTION;

      new_event->sCallbackData.action_parms.comm_id =
          dlEventSet->event_data_p[dlEventSet->num_events - 1].sCallbackData
              .downloader_parms.comm_id;
      new_event->sCallbackData.action_parms.message_id = dlEventSet
          ->event_data_p[dlEventSet->num_events - 1].sCallbackData
          .downloader_parms.message_id;
      new_event->sCallbackData.action_parms.srv_msg_type = dlEventSet
          ->event_data_p[dlEventSet->num_events - 1].sCallbackData
          .downloader_parms.srv_msg_type;
      new_event->sCallbackData.action_parms.srv_op_type = dlEventSet
          ->event_data_p[dlEventSet->num_events - 1].sCallbackData
          .downloader_parms.srv_op_type;

      log_dbg("%s: finding next available Event ID for %s action\n",
              __FUNCTION__,
              (action == TERM_ACTION_RESTART_APP) ? "RestartApps" : "Reboot");
      /* Move to the next id if we will be able to add this */
      _cur_event_id++;
      if ((_cur_event_id == EVENT_ID_UNKNOWN)
          || (_cur_event_id == EVENT_ID_INVALID))
        _cur_event_id = 1;

      /* Setup the event's ID */
      new_event->event_id = _cur_event_id;

      /* We added an event so lets increase num_events */
      reboot_event_set.num_events++;
    }

  }
  else
  {
    return FALSE;
  }

  /* If this event set does not have an ID assigned to it yet, lets assign one */
  if (reboot_event_set.event_set_id == EVENT_SET_ID_INVALID)
  {
    dbg_msg("%s: finding next available ID\n", __FUNCTION__);
    /* Move to the next id if we will be able to add this */
    _cur_event_set_id++;
    if ((_cur_event_set_id == EVENT_SET_ID_UNKNOWN)
        || (_cur_event_set_id == EVENT_SET_ID_INVALID))
      _cur_event_set_id = 1;

    /* Setup the event's ID */
    reboot_event_set.event_set_id = _cur_event_set_id;

    log_dbg("%s: set event_set_ID to %d\n", __FUNCTION__,
            reboot_event_set.event_set_id);
  }

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  for (entry_index = 0; entry_index < MAX_EVENT_SETS; entry_index++)
  {
    if (event_set_table[entry_index].event_set_id == EVENT_ID_INVALID)
    {
      /* We have reached the end of the current events so this must
       be the last event to happen */
      dbg_msg(
          "%s: Adding new event set to end of event set table at index %d\n",
          __FUNCTION__, entry_index);
      memcpy(&event_set_table[entry_index], &reboot_event_set,
             sizeof(event_set_table_t));
      break;
    }
    else
    {
      if (event_set_table[entry_index].executing_index)
      {
        log_dbg("\tEvent at index %d is executing - checking next entry\n",
                entry_index);
        continue;
      }

      /* This should always go into first 2 slots - if not log an error */
      if (entry_index > 1)
      {
        log_warn(
            "%s WARNING: Suppressed reboot event added at index %d (should be in slot 0 or 1)\n",
            __FUNCTION__, entry_index);
      }
      else
      {
        log_dbg("%s: Adding %s to index %d and moving %d entries back\n",
                __FUNCTION__,
                (action == TERM_ACTION_RESTART_APP) ? "RestartApps" : "Reboot",
                entry_index, ((MAX_EVENT_SETS - 1) - entry_index));
      }

      for (i = MAX_EVENT_SETS - 1; i > entry_index; i--)
      {
        memcpy(&event_set_table[i], &event_set_table[i - 1],
               sizeof(event_set_table_t));
      }
      memcpy(&event_set_table[entry_index], &reboot_event_set,
             sizeof(event_set_table_t));
      break;
    }
  }

  /* Mark the reboot event as executing */
  event_set_table[entry_index].executing_index = 1;
  event_set_table[entry_index].event_data_p[0].executing = EXECUTING_MASK;

  /* Save the table now that the executing flags are set accordingly */
  SaveEventSetTable();

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  PRINT_EVENT_SET_TABLE("AddAndLaunchActionEvent");

  /* Lock server instance before event processing */
  while (1)
  {
    lock_res = LockServerInstance(reboot_event_set.server_instance, 10000,
                                  currentServerInstance);
    if (lock_res == VHQ_SUCCESS
        || lock_res == VHQ_API_SERVER_INSTANCE_ALREADY_LOCKED
        || lock_res == VHQ_API_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR)
      break;
    log_err(
        "%s WARNING: Locking server instance '%s' FAILED with error %d - retrying in 5 seconds\n",
        __FUNCTION__, reboot_event_set.server_instance, (int )lock_res);
    sleep(5);
  }

  /* Skip event launch if we have no ability to lock instance here */
  if (lock_res == VHQ_API_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR)
  {
    log_dbg(
        "%s: Server instance can't be switched from '%s' to '%s'. Save and exit without launch\n",
        __FUNCTION__, GetCurrentInstance(), reboot_event_set.server_instance);
    mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);
    SaveEventSetTable();
    mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
    return FALSE;
  }

  log_dbg("%s: Launching reboot event at index %d\n", __FUNCTION__,
          entry_index);
  event_res = LaunchEvent(reboot_event_set.event_data_p[0].eCallback,
                          reboot_event_set.preEventCbType,
                          reboot_event_set.postEventCbType,
                          reboot_event_set.event_set_id,
                          reboot_event_set.event_data_p[0].event_id,
                          &reboot_event_set.event_data_p[0].sCallbackData,
                          FALSE);
#if EVENT_SCHED_THREAD_MODE
  while (event_res != EVENT_RUNNING)
  {
    log_err(
        "%s: Unable to launch reboot event in slot %d - event_res = %d - retrying\n",
        __FUNCTION__, entry_index, event_res);

    event_res = LaunchEvent(reboot_event_set.event_data_p[0].eCallback,
                            reboot_event_set.preEventCbType,
                            reboot_event_set.postEventCbType,
                            reboot_event_set.event_set_id,
                            reboot_event_set.event_data_p[0].event_id,
                            &reboot_event_set.event_data_p[0].sCallbackData,
                            FALSE);
  }
#endif

  if (event_res != EVENT_RUNNING)
  {
    while (ReleaseServerInstanceLock(currentServerInstance) != VHQ_SUCCESS)
    {
      log_err(
          "%s WARNING: Releasing server instance lock FAILED - retrying in 5 seconds\n",
          __FUNCTION__);
      sleep(5);
    }
  }

  return TRUE;
}

static bool UpdateEventSetExecutingIndexToTable(
    event_set_table_t *updatedEventSet)
{
  bool ret_val = FALSE;
  int set_index = 0;

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  for (set_index = 0; set_index < MAX_EVENT_SETS; set_index++)
  {
    /* Make sure event set is valid */
    if (event_set_table[set_index].event_set_id == EVENT_SET_ID_INVALID)
    {
      break;
    }

    if (event_set_table[set_index].event_set_id
        == updatedEventSet->event_set_id)
    {
      /* Update the event set present in the table */
      event_set_table[set_index].executing_index = updatedEventSet
          ->executing_index;

      ret_val = TRUE;
    }
  }

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  return ret_val;
}

bool GetTimerExpired()
{
  bool ret_val = FALSE;

  /* If events are locked, don't handle timer events yet */
  if (_event_scheduler_locked)
    return FALSE;

  /* This code is essentially polling the first event and comparing its runtime against the current time.  If it is past due
   this will return TRUE even if a timer did not trigger this.  It is a backup in case the timer notifications do not work
   correctly, which does happen occasionally (I'm not sure why though) */

  /* If the timer was expired return TRUE */
  if (timer_expired)
  {
    ret_val = TRUE;
  }
  else
  {
    time_t cur_time;
    int entry_index;

    mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

    /* If the table is not empty, we detect expired event */
    entry_index = GetFirstEventIndex();

    if ((entry_index >= 0)
        && (event_set_table[entry_index].event_set_id != EVENT_ID_INVALID))
    {
      switch (event_set_table[entry_index].timer_type)
      {
        case EVENT_TIMER_DATE_TIME:
          cur_time = linux_time(NULL);
          break;
        case EVENT_TIMER_RTC:
        default:
          cur_time = GetRTC();
          if (cur_time == 0)
            cur_time = linux_time(NULL);
          break;
      }

      /* If the timer has not expired, lets see if the first event run time has passed */
      if (event_set_table[entry_index].next_run_time <= cur_time)
      {
        dbg_msg(
            "%s: event set %d next run time (%d) is less than current time (%d) - returning TRUE\n",
            __FUNCTION__, entry_index,
            event_set_table[entry_index].next_run_time, cur_time);
        ret_val = TRUE;
      }
    }

    mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
  }

  return ret_val;
}

typedef enum
{
  PES_STATE_INITIAL,
  PES_STATE_RUNNING,
  PES_STATE_EVENT_COMPLETED,
  PES_STATE_COMPLETED,

} process_event_sets_state_t;

char* pesStateToStr(process_event_sets_state_t state)
{
  switch (state)
  {
    case PES_STATE_INITIAL:
      return "INITIAL";
    case PES_STATE_RUNNING:
      return "RUNNING";
    case PES_STATE_EVENT_COMPLETED:
      return "EVENT COMPLETED";
    case PES_STATE_COMPLETED:
      return "STATE MACHINE COMPLETED";
    default:
      return "UNKNOWN";
  }
}

static int numKeyExchangeEventsInTable(void)
{
  int i;
  int ret_val = 0;

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  for (i = 0; i < MAX_EVENT_SETS; i++)
  {
    if (event_set_table[i].event_set_id == EVENT_SET_ID_INVALID)
      break;

    if (event_set_table[i].key_exchange_event_set
        && strcmp(event_set_table[i].server_instance, GetCurrentInstance())
            == 0)
    {
      ret_val++;
      dbg_msg(
          "%s: event_set_table[%d] is a Key Exchange event for current instance - ret_val = %d\n",
          __FUNCTION__, i, ret_val);
    }
  }

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  dbg_msg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}

static bool isDownloadEventSetPresent(void)
{
  int i;

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);
  for (i = 0; i < MAX_EVENT_SETS; i++)
  {
    if (event_set_table[i].event_set_id == EVENT_SET_ID_INVALID)
      break;

    if ((event_set_table[i].num_events) && (event_set_table[i].event_data_p)
        && (event_set_table[i].event_data_p[0].eCallback == cbLaunchDownloader))
    {
      log_dbg("%s: event_set_table[%d] is a Download event set\n", __FUNCTION__,
              i);
      mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
      return TRUE;
    }
  }
  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  dbg_msg("%s: Download event set absent\n", __FUNCTION__);
  return FALSE;
}

static void CleanupCompletedEvent(event_set_table_t *event_set, int event_index,
                                  event_result_t event_res,
                                  char *current_instance, bool release_instance)
{
  time_t cur_time;
  struct tm local_time;
  bool bAbort = FALSE;
  uint32 retry_freq = 0;
  bool RemoveFromTable = FALSE;

  switch (event_set->timer_type)
  {
    case EVENT_TIMER_DATE_TIME:
      cur_time = linux_time(NULL);
      break;
    case EVENT_TIMER_RTC:
    default:
      cur_time = GetRTC();
      if (cur_time == 0)
        cur_time = linux_time(NULL);
      break;
  }

  dbg_msg(
      "%s: event_set_id %d event_data_p[%d] (event_id = %d, type = %s) is COMPLETE - result = %d\n",
      __FUNCTION__, event_set->event_set_id, event_index,
      event_set->event_data_p[event_index].event_id,
      cbEnumToStr(event_set->event_data_p[event_index].eCallback), event_res);

  VHQGetParameterUint32(PARAM_HB_FAILURE_RETRY_FREQUENCY, &retry_freq,
                        DEFAULT_BASE);

  /* Some events like downloads will never return - we don't want to run them again after rebooting */
  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  event_set->event_data_p[event_index].executing = 0;

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  if (release_instance)
  {
    /* If primary event is successful stay on primary after releasing */
    if ((event_res == EVENT_SUCCESS)
        && (strncmp(event_set->server_instance, PRIMARY_SERVER_INSTANCE_NAME,
        MAX_SERVER_INSTANCE_NAME_LEN) == 0)
        && (strncmp(current_instance, PRIMARY_SERVER_INSTANCE_NAME,
        MAX_SERVER_INSTANCE_NAME_LEN) != 0))
    {
      strncpy(current_instance, PRIMARY_SERVER_INSTANCE_NAME,
      MAX_SERVER_INSTANCE_NAME_LEN);
    }

    while (ReleaseServerInstanceLock(current_instance) != VHQ_SUCCESS)
    {
      dbg_warn(
          "%s WARNING: Releasing server instance lock FAILED - retrying in 5 seconds\n",
          __FUNCTION__);
      sleep(5);
    }
  }

  switch (event_res)
  {
    case EVENT_CRITICAL_FAILURE:
      if (event_set->executing_index > event_set->num_events)
      {
        /* There are no more events in this event_set so clear the executing flag so we won't retry this
         after power interruption */
        RemoveFromTable = TRUE;

        event_set->executing_index = 0;
      }

      /* Critical failure events need to be removed from the table because they will never work */
      RemoveFromTable = TRUE;
      log_err(
          "%s: Event id: %d, index: %d, had a CRITICAL failure - removing from table\n",
          __FUNCTION__, event_set->event_data_p[event_index].event_id,
          event_index);
      break;
    case EVENT_PRE_EVENT_CB_FAILURE:
      if (event_set->executing_index > event_set->num_events)
      {
        /* There are no more events in this event_set so clear the executing flag so we won't retry this
         after power interruption */
        RemoveFromTable = TRUE;

        event_set->executing_index = 0;
      }

      /* Not critical failure, need to be reschedule. Mostly caused by not available active communication interface */
      RemoveFromTable = TRUE;
      log_err(
          "%s: Event id: %d, index: %d, had a CB failure - doing processing to re-schedule if required\n",
          __FUNCTION__, event_set->event_data_p[event_index].event_id,
          event_index);
      break;
    case EVENT_LAUNCH_FAILURE:
      /* Just leave LAUNCH_FAILURE events in place - they will be retried the next time we get to INITIAL state.
       Process everything else */
      break;
    case EVENT_FAILURE:
      event_set->executing_index++;

      UpdateEventSetExecutingIndexToTable(event_set);

      UpdateRecurCount(&event_set->event_data_p[event_index]);

      dbg_msg("%s: event %d RecurCount updated\n", __FUNCTION__, event_index);

      if (event_set->executing_index > event_set->num_events)
      {
        /* There are no more events in this event_set so clear the executing flag so we won't retry this
         after power interruption */
        RemoveFromTable = TRUE;

        event_set->executing_index = 0;
      }

      if (AbortOnError(&event_set->event_data_p[event_index]))
      {
        int event_fail_index;

        /* Failed events with abort flag set need to be removed (or re-scheduled if they are recurring) */
        RemoveFromTable = TRUE;
        log_err(
            "%s: AbortOnError event failed (result = %d) - exiting dependency chain (event_set_id = %d)\n",
            __FUNCTION__, event_res, event_set->event_set_id);
        bAbort = TRUE;
        for (event_fail_index = event_index + 1;
            event_fail_index < event_set->num_events; event_fail_index++)
        {
          EventSchedSendFailedStatus(
              event_set, event_fail_index,
              VHQ_SERVER_MGMT_PLAN_OPERATION_ABORTED_BY_DEPENDENCY_FAILURE);
        }
      }
      break;
    case EVENT_SUCCESS:
      event_set->executing_index++;

      UpdateEventSetExecutingIndexToTable(event_set);

      UpdateRecurCount(&event_set->event_data_p[event_index]);

      if (event_set->executing_index > event_set->num_events)
      {
        /* There are no more events in this event_set so clear the executing flag so we won't retry this
         after power interruption */
        RemoveFromTable = TRUE;

        event_set->executing_index = 0;
      }

      dbg_msg("%s: event %d RecurCount updated\n", __FUNCTION__, event_index);
      break;
    case EVENT_POSTPONED:
      if (event_set->executing_index > event_set->num_events)
      {
        event_set->executing_index = 0;
      }

      /* Postponed events will get re-scheduled so remove the current entry and let it get re-scheduled */
      RemoveFromTable = TRUE;
      log_err(
          "%s: Event id %d was postponed - doing end of event_set processing to re-schedule\n",
          __FUNCTION__, event_set->event_data_p[event_index].event_id);
      break;
    case EVENT_RUNNING:
      /* Shouldn't be here */
      break;
    case EVENT_DL_POSTPONED:
      if (event_set->executing_index > event_set->num_events)
      {
        event_set->executing_index = 0;
      }

      /* DL Postponed events will get re-scheduled (to MW if needed) so remove the current entry and let it get re-scheduled */
      RemoveFromTable = TRUE;
      log_err(
          "%s: Event id %d was DL postponed - doing end of event_set processing to re-schedule\n",
          __FUNCTION__, event_set->event_data_p[event_index].event_id);
      break;
  }

  if (RemoveFromTable)
  {
    event_set_table_t next_event;
    term_action_t suppressed_action = TERM_ACTION_NONE;
    char curr_executing_index = 0;

    /* There are no more events in this event_set so we can do final processing and re-schedule
     if needed */
    memcpy(&next_event, event_set, sizeof(event_set_table_t));

    /* If we were running the first event, reset this to 0 so we don't think it is executing anymore.
     If this is not set to 1, we need to leave it where it was so we continue at the correct place */
    if (next_event.executing_index == 1)
      next_event.executing_index = 0;

    switch (next_event.timer_type)
    {
      case EVENT_TIMER_DATE_TIME:
        cur_time = linux_time(NULL);
        break;
      case EVENT_TIMER_RTC:
      default:
        cur_time = GetRTC();
        if (cur_time == 0)
          cur_time = linux_time(NULL);
        break;
    }

    /*
     *  ADKTMS-586: Need to maintain retry_freq value for succesful case for recurring event
     *  ADKTMS-1406: Update next run time. This value have to be based on previous next_run_time to follow fixed intervals
     */
    if (event_res != EVENT_SUCCESS) /* For failure case */
    {
      /* If event was scheduled as urgent, it has next_run_time set to 0. Avoid too much calculation below */
      if (next_event.next_run_time == 0)
        next_event.next_run_time = cur_time;

      /* Save original time stamp of current event, just in case. We may need it in case of retries. Do not overwrite in case if previous value is present */
      if (next_event.original_run_time == 0)
        next_event.original_run_time = next_event.next_run_time;
    }

    switch (event_res)
    {
      case EVENT_CRITICAL_FAILURE:
        log_err(
            "%s: current event had critical failure - removing event from the table\n",
            __FUNCTION__);
        next_event.next_run_time = 0;
        next_event.executing_index = 0;
        break;
      case EVENT_PRE_EVENT_CB_FAILURE:
      {
        uint32 pre_event_failure_retry_freq = 0;
        VHQGetParameterUint32(PARAM_HB_FAILURE_RETRY_FREQUENCY,
                              &pre_event_failure_retry_freq, DEFAULT_BASE);
        if (pre_event_failure_retry_freq)
        {
          while (next_event.next_run_time <= cur_time)
            next_event.next_run_time += pre_event_failure_retry_freq;
        }

        curr_executing_index = next_event.executing_index;
        next_event.executing_index = 0;
      }
        break;
      case EVENT_FAILURE:
        dbg_notice("%s: current event failed\n", __FUNCTION__);

        next_event.executing_index = 0;

        /* Setup retry event if retry_freq is not 0 */
        if (next_event.retry_freq)
        {
          log_dbg(
              "%s: setup retry with retry_freq:%d (next_run_time=%lu, cur_time=%lu)\n",
              __FUNCTION__, next_event.retry_freq, next_event.next_run_time,
              cur_time);

          while (next_event.next_run_time <= cur_time)
            next_event.next_run_time += next_event.retry_freq;
        }
        else if (next_event.recurring)
        {
          log_dbg("%s: setup next recurring with recur_period:%d\n",
                  __FUNCTION__, next_event.recur_period);
          update_next_run_time_for_recur_event(&next_event);
        }
        else
        {
          next_event.next_run_time = 0;
        }
        break;
      case EVENT_SUCCESS:
        if (next_event.recurring)
        {
          dbg_notice("%s: setup next recurring with recur_period:%d\n",
                     __FUNCTION__, next_event.recur_period);
          update_next_run_time_for_recur_event(&next_event);
        }
        else
        {
          next_event.next_run_time = 0;
        }

        if (next_event.recurring)
        {
          dbg_notice("%s: setup next recurring with recur_period:%d\n",
                     __FUNCTION__, next_event.recur_period);
          update_next_run_time_for_recur_event(&next_event);
        }
        else
        {
          next_event.next_run_time = 0;
        }
        break;
      case EVENT_POSTPONED:
        setupPostponedEventSet(&next_event, event_index, EVENT_POSTPONED);
        /* Since the dependent events are removed in case of postpone, set executing index to 0 */
        next_event.executing_index = 0;
        break;
      case EVENT_DL_POSTPONED:
        setupPostponedEventSet(&next_event, event_index, EVENT_DL_POSTPONED);
        /* Since the dependent events are removed in case of postpone, set executing index to 0 */
        next_event.executing_index = 0;
        break;
      default:
        break;
    }

    if (next_event.next_run_time)
    {
      linux_localtime(&next_event.next_run_time, &local_time);
      dbg_notice(
          "%s: timer_type:%s updated next run time:%s\n",
          __FUNCTION__,
          (next_event.timer_type == EVENT_TIMER_DATE_TIME) ?
              "Date/Time" : "RTC",
          tmtoa(&local_time));
    }

    if (next_event.expiration_date != 0)
    {
      if (next_event.next_run_time > next_event.expiration_date)
      {
        /* This recurring event has expired so set next_run_time less than cur_time so we stop executing it. */
        log_dbg(
            "%s: Recurring event set expired (expiration date = %d) - setting next_run_time to 0\n",
            __FUNCTION__, next_event.expiration_date);
        next_event.next_run_time = 0;

        if (event_res == EVENT_POSTPONED)
        {
          EventSchedSendFailedStatus(
              event_set, event_index,
              VHQ_SERVER_MGMT_PLAN_OPERATION_POSTPONED_TOO_LONG_FAILURE);
        }

        if (AbortOnError(&event_set->event_data_p[event_index]))
        {
          int event_fail_index;

          /* Failed events with abort flag set need to be removed */
          log_err(
              "%s: AbortOnError event failed (result = %d) - exiting dependency chain (event_set_id = %d)\n",
              __FUNCTION__, event_res, event_set->event_set_id);
          bAbort = TRUE;
          for (event_fail_index = event_index + 1;
              event_fail_index < event_set->num_events; event_fail_index++)
          {
            EventSchedSendFailedStatus(
                event_set, event_fail_index,
                VHQ_SERVER_MGMT_PLAN_OPERATION_ABORTED_BY_DEPENDENCY_FAILURE);
          }
        }
      }
    }

    UpdateEventSetExecutingIndexToTable(&next_event);

    /* We can move all of the entries in the event set table up one now */
    if (next_event.next_run_time > cur_time)
    {
      dbg_msg(
          "%s: Event will run again in %d seconds - removing event_data_p 0x%08x and put it back later\n",
          __FUNCTION__, next_event.next_run_time - cur_time,
          event_set->event_data_p);

      next_event.executing_index = curr_executing_index;

      next_event.event_data_p = NULL;

      next_event.event_data_p = calloc(event_set->num_events,
                                       sizeof(event_table_t));

      if (next_event.event_data_p)
      {
        memcpy(next_event.event_data_p, event_set->event_data_p,
               (event_set->num_events) * sizeof(event_table_t));
      }
      else
      {
        dbg_err("%s: Not enough memory\n", __FUNCTION__);
      }
    }
    else
    {
      if (event_res == EVENT_DL_POSTPONED)
      {
        /* This DL event has expired or out of MW so set next_run_time less than cur_time so we stop executing it. */
        log_dbg(
            "%s: DL event set expired (expiration date = %d) - setting next_run_time to 0\n",
            __FUNCTION__, next_event.expiration_date);
        next_event.next_run_time = 0;

        EventSchedSendFailedStatus(
            event_set, event_index,
            VHQ_SERVER_MGMT_PLAN_OPERATION_POSTPONED_TOO_LONG_FAILURE);

        if (AbortOnError(&event_set->event_data_p[event_index]))
        {
          int event_fail_index;

          /* Failed events with abort flag set need to be removed */
          log_err(
              "%s: AbortOnError event failed (result = %d) - exiting dependency chain (event_set_id = %d)\n",
              __FUNCTION__, event_res, event_set->event_set_id);
          bAbort = TRUE;
          for (event_fail_index = event_index + 1;
              event_fail_index < event_set->num_events; event_fail_index++)
          {
            EventSchedSendFailedStatus(
                event_set, event_fail_index,
                VHQ_SERVER_MGMT_PLAN_OPERATION_ABORTED_BY_DEPENDENCY_FAILURE);
          }
        }
      }
    }

    if (bAbort)
    {
      CancelEventSet(event_set->event_set_id, TRUE);
      /* Make sure we clean up any unused download files if that is what failed */
      CleanupTempDownloads();
    }
    else
    {
      CancelEventSet(event_set->event_set_id, FALSE);
    }

    /* Finally, if the event needs to be run again lets add it back to the table */
    if (next_event.next_run_time > cur_time)
    {
      dbg_msg(
          "%s: Event needs to be run again in %d seconds - calling AddEventSetToTable()\n",
          __FUNCTION__, (next_event.next_run_time - cur_time));
      if (!AddEventSetToTable(&next_event, TRUE))
      {
        dbg_err("%s ERROR: Could not add a retry or recurring event\n",
                __FUNCTION__);
      }
    }

    /* If an action was suppressed, we can run the action now */
    suppressed_action = SuppressedActionRequired(next_event.event_set_id);

    if ((suppressed_action == TERM_ACTION_REBOOT)
        || (suppressed_action == TERM_ACTION_RESTART_APP))
    {
      bool addReboot;
      int addAttempts = 5;

      log_dbg(
          "%s: Suppressed action required - launching action event to complete\n",
          __FUNCTION__);
      do
      {
        /* Add the reboot event and launch it */
        addReboot = AddAndLaunchActionEvent(&next_event, suppressed_action);
        addAttempts--;
        if ((addReboot == FALSE) && (addAttempts))
        {
          log_dbg(
              "%s: AddAndLaunchActionEvent() FAILED - retrying in 10 seconds\n",
              __FUNCTION__, (next_event.next_run_time - cur_time));
          sleep(10);
        }
      }
      while ((addReboot == FALSE) && (addAttempts > 0));
    }
  }

  {
    char description[128];

    snprintf(description, sizeof(description),
             "CleanupCompletedEvent - AFTER processing event_set_table");
    PRINT_EVENT_SET_TABLE(description);
  }

#ifdef _VOS2
  /* We need to inform main thread that we have might have to make some action since we have completed event */
  pthread_t VHQ_manager_thread_id = GetManagerThreadId();
  dbg_msg("%s: Sending SIGUSR1 to VHQManagerThread 0x%08x\n", __FUNCTION__,
          VHQ_manager_thread_id);
  pthread_kill(VHQ_manager_thread_id, SIGUSR1);
#endif
}


static event_set_id_t EventSetExists(uint32 opSetId,
                                     operation_set_event_t psOpSetData[],
                                     uint32 dwOpSetDataArraySize)
{
  int i;

  if (opSetId == 0)
  {
    /* Make sure we have a valid OperationSetId to look for */
    dbg_msg("%s: opSetId = 0 - returning EVENT_SET_ID_INVALID\n", __FUNCTION__);
    return EVENT_SET_ID_INVALID;
  }

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  /* Find out how many jobs are ready to run */
  for (i = 0; i < MAX_EVENT_SETS; i++)
  {
    /* Make sure event set is valid */
    if ((event_set_table[i].event_set_id != EVENT_SET_ID_INVALID)
        && (event_set_table[i].event_data_p))
    {
      if (event_set_table[i].operation_set_id == opSetId)
      {
        dbg_msg(
            "%s: opSetId %d matches event_set_table[%d] - checking individual events\n",
            __FUNCTION__, opSetId, i);
        if (event_set_table[i].num_events == dwOpSetDataArraySize)
        {
          uint32 event_index;

          dbg_msg(
              "%s: num_events (%d) is the same - checking if operations are the same\n",
              __FUNCTION__, event_set_table[i].num_events);
          for (event_index = 0; event_index < dwOpSetDataArraySize;
              event_index++)
          {
            if (event_set_table[i].event_data_p[event_index].eCallback
                != psOpSetData[event_index].opCbType)
            {
              log_err(
                  "%s WARNING: Duplicate OperationSetId sent from server - Operations are different - returning EVENT_SET_ID_INVALID\n",
                  __FUNCTION__);
              mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
              return EVENT_SET_ID_INVALID;
            }
            else
            {
              /* We have the same OperationSetId, let's check OperationId to see if they match */
              switch (event_set_table[i].event_data_p[event_index].eCallback)
              {
                case cbLaunchDownloader:
                {
                  launch_downloader_parms *dl_parms =
                      (launch_downloader_parms*) psOpSetData[event_index].opData;

                  if (dl_parms)
                  {
                    /* When we split downloads into 2 separate EventSets for downloading and installing, they will look like
                     duplicates.  So we need to check the mask in download type to see if they are the same */
                    if (event_set_table[i].event_data_p[event_index]
                        .sCallbackData.downloader_parms.dl_file_content
                        .DownloadType != dl_parms->dl_file_content.DownloadType)
                    {
                      dbg_msg(
                          "%s: operation %d (%d) in event_set_table DownloadType %d, does not match operation %d received from server DownloadType %d - returning EVENT_SET_ID_INVALID\n",
                          __FUNCTION__,
                          event_index,
                          event_set_table[i].event_data_p[event_index].eCallback,
                          event_set_table[i].event_data_p[event_index]
                              .sCallbackData.downloader_parms.dl_file_content
                              .DownloadType,
                          psOpSetData[event_index].opCbType,
                          dl_parms->dl_file_content.DownloadType);
                      mutex_xlock(FALSE, "event_table_mutex",
                                  &event_table_mutex);
                      return EVENT_SET_ID_INVALID;
                    }

                    if ((event_set_table[i].event_data_p[event_index]
                        .sCallbackData.downloader_parms.operation.OpId != NULL)
                        && (dl_parms->operation.OpId != NULL))
                    {
                      if (strcmp(
                          event_set_table[i].event_data_p[event_index]
                              .sCallbackData.downloader_parms.operation.OpId,
                          dl_parms->operation.OpId) != 0)
                      {
                        log_err(
                            "%s WARNING: Duplicate OperationSetId sent from server - OperationId is different - returning EVENT_SET_ID_INVALID\n",
                            __FUNCTION__);
                        mutex_xlock(FALSE, "event_table_mutex",
                                    &event_table_mutex);
                        return EVENT_SET_ID_INVALID;
                      }
                    }
                    else
                    {
                      mutex_xlock(FALSE, "event_table_mutex",
                                  &event_table_mutex);
                      return EVENT_SET_ID_INVALID;
                    }
                  }
                  else
                  {
                    mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                    return EVENT_SET_ID_INVALID;
                  }
                }
                  break;
                case cbGetDataProcessor:
                case cbGetDiagDataProcessor:
                {
                  get_data_parms *op_parms =
                      (get_data_parms*) psOpSetData[event_index].opData;

                  if (op_parms)
                  {
                    if ((event_set_table[i].event_data_p[event_index]
                        .sCallbackData._get_data_parms.operation.OpId != NULL)
                        && (op_parms->operation.OpId != NULL))
                    {
                      if (strcmp(
                          event_set_table[i].event_data_p[event_index]
                              .sCallbackData._get_data_parms.operation.OpId,
                          op_parms->operation.OpId) != 0)
                      {
                        log_err(
                            "%s WARNING: Duplicate OperationSetId sent from server - OperationId is different - returning EVENT_SET_ID_INVALID\n",
                            __FUNCTION__);
                        mutex_xlock(FALSE, "event_table_mutex",
                                    &event_table_mutex);
                        return EVENT_SET_ID_INVALID;
                      }
                    }
                    else
                    {
                      mutex_xlock(FALSE, "event_table_mutex",
                                  &event_table_mutex);
                      return EVENT_SET_ID_INVALID;
                    }
                  }
                  else
                  {
                    mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                    return EVENT_SET_ID_INVALID;
                  }
                }
                  break;
                case cbSetDataProcessor:
                {
                  set_data_parms *op_parms =
                      (set_data_parms*) psOpSetData[event_index].opData;

                  if (op_parms)
                  {
                    if ((event_set_table[i].event_data_p[event_index]
                        .sCallbackData._set_data_parms.operation.OpId != NULL)
                        && (op_parms->operation.OpId != NULL))
                    {
                      if (strcmp(
                          event_set_table[i].event_data_p[event_index]
                              .sCallbackData._set_data_parms.operation.OpId,
                          op_parms->operation.OpId) != 0)
                      {
                        log_err(
                            "%s WARNING: Duplicate OperationSetId sent from server - OperationId is different - returning EVENT_SET_ID_INVALID\n",
                            __FUNCTION__);
                        return EVENT_SET_ID_INVALID;
                      }
                    }
                    else
                    {
                      mutex_xlock(FALSE, "event_table_mutex",
                                  &event_table_mutex);
                      return EVENT_SET_ID_INVALID;
                    }
                  }
                  else
                  {
                    mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                    return EVENT_SET_ID_INVALID;
                  }
                }
                  break;
                case cbTerminalAction:
                {
                  term_act_parms *op_parms =
                      (term_act_parms*) psOpSetData[event_index].opData;

                  if (op_parms)
                  {
                    if ((event_set_table[i].event_data_p[event_index]
                        .sCallbackData.action_parms.operation.OpId != NULL)
                        && (op_parms->operation.OpId != NULL))
                    {
                      if (strcmp(
                          event_set_table[i].event_data_p[event_index]
                              .sCallbackData.action_parms.operation.OpId,
                          op_parms->operation.OpId) != 0)
                      {
                        log_err(
                            "%s WARNING: Duplicate OperationSetId sent from server - OperationId is different - returning EVENT_SET_ID_INVALID\n",
                            __FUNCTION__);
                        mutex_xlock(FALSE, "event_table_mutex",
                                    &event_table_mutex);
                        return EVENT_SET_ID_INVALID;
                      }
                    }
                    else
                    {
                      mutex_xlock(FALSE, "event_table_mutex",
                                  &event_table_mutex);
                      return EVENT_SET_ID_INVALID;
                    }
                  }
                  else
                  {
                    mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                    return EVENT_SET_ID_INVALID;
                  }
                }
                  break;
                case cbFileUploader:
                {
                  uploader_parms *op_parms =
                      (uploader_parms*) psOpSetData[event_index].opData;

                  if (op_parms)
                  {
                    if ((event_set_table[i].event_data_p[event_index]
                        .sCallbackData.ul_parms.operation.OpId != NULL)
                        && (op_parms->operation.OpId != NULL))
                    {
                      if (strcmp(
                          event_set_table[i].event_data_p[event_index]
                              .sCallbackData.ul_parms.operation.OpId,
                          op_parms->operation.OpId) != 0)
                      {
                        log_err(
                            "%s WARNING: Duplicate OperationSetId sent from server - OperationId is different - returning EVENT_SET_ID_INVALID\n",
                            __FUNCTION__);
                        mutex_xlock(FALSE, "event_table_mutex",
                                    &event_table_mutex);
                        return EVENT_SET_ID_INVALID;
                      }
                    }
                    else
                    {
                      mutex_xlock(FALSE, "event_table_mutex",
                                  &event_table_mutex);
                      return EVENT_SET_ID_INVALID;
                    }
                  }
                  else
                  {
                    mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                    return EVENT_SET_ID_INVALID;
                  }
                }
                  break;
                case cbAppActionProcessor:
                {
                  app_action_parms *op_parms =
                      (app_action_parms*) psOpSetData[event_index].opData;

                  if (op_parms)
                  {
                    if ((event_set_table[i].event_data_p[event_index]
                        .sCallbackData._app_action_parms.operation.OpId != NULL)
                        && (op_parms->operation.OpId != NULL))
                    {
                      if (strcmp(
                          event_set_table[i].event_data_p[event_index]
                              .sCallbackData._app_action_parms.operation.OpId,
                          op_parms->operation.OpId) != 0)
                      {
                        log_err(
                            "%s WARNING: Duplicate OperationSetId sent from server - OperationId is different - returning EVENT_SET_ID_INVALID\n",
                            __FUNCTION__);
                        mutex_xlock(FALSE, "event_table_mutex",
                                    &event_table_mutex);
                        return EVENT_SET_ID_INVALID;
                      }
                    }
                    else
                    {
                      mutex_xlock(FALSE, "event_table_mutex",
                                  &event_table_mutex);
                      return EVENT_SET_ID_INVALID;
                    }
                  }
                  else
                  {
                    mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                    return EVENT_SET_ID_INVALID;
                  }
                }
                  break;
                case cbDelFileProcessor:
                {
                  del_file_parms *op_parms =
                      (del_file_parms*) psOpSetData[event_index].opData;

                  if (op_parms)
                  {
                    if ((event_set_table[i].event_data_p[event_index]
                        .sCallbackData._del_file_parms.operation.OpId != NULL)
                        && (op_parms->operation.OpId != NULL))
                    {
                      if (strcmp(
                          event_set_table[i].event_data_p[event_index]
                              .sCallbackData._del_file_parms.operation.OpId,
                          op_parms->operation.OpId) != 0)
                      {
                        log_err(
                            "%s WARNING: Duplicate OperationSetId sent from server - OperationId is different - returning EVENT_SET_ID_INVALID\n",
                            __FUNCTION__);
                        mutex_xlock(FALSE, "event_table_mutex",
                                    &event_table_mutex);
                        return EVENT_SET_ID_INVALID;
                      }
                    }
                    else
                    {
                      mutex_xlock(FALSE, "event_table_mutex",
                                  &event_table_mutex);
                      return EVENT_SET_ID_INVALID;
                    }
                  }
                  else
                  {
                    mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                    return EVENT_SET_ID_INVALID;
                  }
                }
                  break;
                case cbGetParamUpdatesProcessor:
                case cbDeviceEventProcessor:
                {
                  device_event_parms *op_parms =
                      (device_event_parms*) psOpSetData[event_index].opData;

                  if (op_parms)
                  {
                    if ((event_set_table[i].event_data_p[event_index]
                        .sCallbackData._device_event_parms.operation.OpId
                        != NULL) && (op_parms->operation.OpId != NULL))
                    {
                      if (strcmp(
                          event_set_table[i].event_data_p[event_index]
                              .sCallbackData._device_event_parms.operation.OpId,
                          op_parms->operation.OpId) != 0)
                      {
                        log_err(
                            "%s WARNING: Duplicate OperationSetId sent from server - OperationId is different - returning EVENT_SET_ID_INVALID\n",
                            __FUNCTION__);
                        mutex_xlock(FALSE, "event_table_mutex",
                                    &event_table_mutex);
                        return EVENT_SET_ID_INVALID;
                      }
                    }
                    else
                    {
                      mutex_xlock(FALSE, "event_table_mutex",
                                  &event_table_mutex);
                      return EVENT_SET_ID_INVALID;
                    }
                  }
                  else
                  {
                    mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                    return EVENT_SET_ID_INVALID;
                  }
                }
                  break;
                case cbHeartbeat:
                {
                  heartbeat_parms *op_parms =
                      (heartbeat_parms*) psOpSetData[event_index].opData;

                  if (op_parms)
                  {
                    if ((event_set_table[i].event_data_p[event_index]
                        .sCallbackData._heartbeat_parms.operation.OpId != NULL)
                        && (op_parms->operation.OpId != NULL))
                    {
                      if (strcmp(
                          event_set_table[i].event_data_p[event_index]
                              .sCallbackData._heartbeat_parms.operation.OpId,
                          op_parms->operation.OpId) != 0)
                      {
                        log_err(
                            "%s WARNING: Duplicate OperationSetId sent from server - OperationId is different - returning EVENT_SET_ID_INVALID\n",
                            __FUNCTION__);
                        mutex_xlock(FALSE, "event_table_mutex",
                                    &event_table_mutex);
                        return EVENT_SET_ID_INVALID;
                      }
                    }
                    else
                    {
                      mutex_xlock(FALSE, "event_table_mutex",
                                  &event_table_mutex);
                      return EVENT_SET_ID_INVALID;
                    }
                  }
                  else
                  {
                    mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                    return EVENT_SET_ID_INVALID;
                  }
                }
                  break;
                default:
                  break;

              }
            }
          }

          log_dbg(
              "%s: opSetId %d is a duplicate of event_set_table[%d] - returning event_set_id %d\n",
              __FUNCTION__, opSetId, i, event_set_table[i].event_set_id);
          mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
          return (event_set_table[i].event_set_id);
        }
        else
        {
          log_err(
              "%s: OperationSetId %d has %d operations in event_set_table, but %d operations received from server - returning EVENT_SET_ID_INVALID\n",
              __FUNCTION__, opSetId, event_set_table[i].num_events,
              dwOpSetDataArraySize);
          mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
          return EVENT_SET_ID_INVALID;
        }
      }
    }

  }
  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
  return EVENT_SET_ID_INVALID;
}

bool ProcessEventSets(void)
{
  int res;
  int event_set_index = 0;
  int running_events_index;
  bool ret_val = TRUE;
  bool advanceEventSetIndex = TRUE;
  vhq_result_t lock_res;
  event_result_t event_res = EVENT_CRITICAL_FAILURE;
  process_event_sets_state_t process_event_sets_previous_state;
  process_event_sets_state_t process_event_sets_state = PES_STATE_INITIAL;
  char currentServerInstance[MAX_SERVER_INSTANCE_NAME_LEN] = { 0 };

  /* Make sure the event set table is in order since the clock can change at any time */
  OrderEventSetTable();

  if (GetTimerExpired())
  {
    int i = 0;
    bool ret_val = FALSE;
    PRINT_EVENT_SET_TABLE("ProcessEventSets - TIMER EXPIRED");

#if EVENT_SCHED_THREAD_MODE
    {
      pthread_t VHQ_manager_thread_id = GetManagerThreadId();

      dbg_msg("%s: Sending SIGUSR1 to VHQManagerThread 0x%08x\n", __FUNCTION__,
              VHQ_manager_thread_id);
      pthread_kill(VHQ_manager_thread_id, SIGUSR1);
    }

    mutex_xlock(TRUE, "event_sched_lock_mutex", &event_sched_lock_mutex);
#endif

    /* We don't want this thread to get canceled if we are processing a scheduled job
     NOTE that we MUST disable canceling AFTER we receive the event sched mutex lock */
    res = pthread_setcancelstate(PTHREAD_CANCEL_DISABLE, NULL);
    if (res != 0)
    {
      dbg_err("%s: pthread_setcancelstate(PTHREAD_CANCEL_DISABLE) failed",
              __FUNCTION__);
    }

    while (process_event_sets_state != PES_STATE_COMPLETED)
    {
      process_event_sets_previous_state = process_event_sets_state;
      switch (process_event_sets_state)
      {
        case PES_STATE_INITIAL:
          /* Whenever we are in initial state, we need to start from the first entry in
           event_set_table to see which event to start next */
          event_set_index = 0;

          if (EventIsCompleted())
          {
            process_event_sets_state = PES_STATE_EVENT_COMPLETED;
          }
          else if (NumRunningEvents() == 0)
          {
            /* Set the state to COMPLETED for now.  If we run events this will get over-written */
            dbg_msg(
                "%s: NumRunningEvents() returned 0 - setting state to COMPLETED (may be overwritten later)\n",
                __FUNCTION__);
            process_event_sets_state = PES_STATE_COMPLETED;
          }
          else
          {
            /* We have events running so lets move the state to RUNNING.  We need to do this
             because we will come back to this state after processing a completed event. At that
             point, we might not have anything else to run, so we will just need to wait for other
             running events to complete */
            process_event_sets_state = PES_STATE_RUNNING;
          }

          /* Go through all events and detect do we have any event ready for processing and we have ability to lock instance for it */
          while (event_set_index < MAX_EVENT_SETS)
          {
            mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);
            ret_val = EventReadyToLaunch(&event_set_index);

            if (ret_val == TRUE)
            {
              int event_start_index = 0;
              event_set_table_t event_set;

              memset(&event_set, 0, sizeof(event_set_table_t));

              memcpy(&event_set, &event_set_table[event_set_index],
                     sizeof(event_set_table_t));

              mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

              if (event_set.event_set_id == EVENT_SET_ID_INVALID)
              {
                // before installation event install the package, it will set it's complete flag, which will move the status from running to initial, but when entering initial,
                // it will find there is no event to process then move status to complete, it will cause installation event cannot be cleaned after completed until next even timeout.
                if (NumRunningEvents())
                {
                  dbg_msg(
                      "%s PES_STATE_INITIAL: No events for processing, but still have running events\n",
                      __FUNCTION__);
                  process_event_sets_state = PES_STATE_RUNNING;
                }
                else
                {
                  dbg_msg(
                      "%s PES_STATE_INITIAL: No events for processing, exit\n",
                      __FUNCTION__);
                  process_event_sets_state = PES_STATE_COMPLETED;
                }
                break;
              }

              dbg_msg(
                  "%s PES_STATE_INITIAL: EventSet Id %d is ready to launch and a slot is open - performing pre-event maintenance\n",
                  __FUNCTION__, event_set.event_set_id);

              /* (Mitch 5-9-2016): The agent has been updated to resume operations if they are interrupted by power
               cycle, so we need to trust the executing flag and continue from that point if we are interrupted in this
               loop (most likely by a power cycle).

               If the event set is marked as executing, but is not in the running events table, then it was
               interrupted and we need to resume where we left off */
              if (event_set.executing_index)
              {
                /* Setup the start index to the executing index */
                event_start_index = event_set.executing_index - 1;

                if (event_set.event_data_p)
                {
                  for (i = event_start_index; i < event_set.num_events; i++)
                  {
                    if (event_set.event_data_p[i].executing & COMPLETE_MASK)
                    {
                      /* For downloads / SetClock that completed but never returned to event scheduler, the complete
                       mask should be set.  If so move on to the next event */

                      /* We found a completed download that caused a reboot so lets
                       restart executing events from the next index, if it was failed then don't update */
                      if (event_set.event_data_p[i].executing
                          & EVENT_FAILED_MASK)
                      {
                        /* Don't launch the event */
                        ret_val = FALSE;
                      }
                      else
                      {
                        event_start_index = i + 1;
                      }
                      dbg_msg(
                          "%s: Eventset ID %d was executing already at index %d (executing = %d - COMPLETE_MASK is set) - event_start_index set to %d\n",
                          __FUNCTION__, event_set.event_set_id, i,
                          event_set.event_data_p[i].executing,
                          event_start_index);

                      /* If the last event in the event_set was a download that caused a reboot, we need to treat this special.
                       We need to mark this event completed and go to COMPLETED state even if it is failed */
                      if ((event_start_index >= event_set.num_events)
                          || ((event_set.event_data_p[i].executing
                              & EVENT_FAILED_MASK) == EVENT_FAILED_MASK))
                      {
                        int event_slot;

                        dbg_err(
                            "%s: event_set_table has %d events, we are trying to start at index %d. The event is COMPLETED or FAILED\n",
                            __FUNCTION__, event_set.num_events,
                            event_start_index);
                        event_slot = GetOpenEventSlot();
                        if ((event_slot < 0)
                            || (event_slot >= MAX_CONCURRENT_EVENTS))
                        {
                          assert(0);
                          dbg_err(
                              "\n\n%s ERROR: running_events table is FULL and it SHOULD NOT BE!!!\n\n",
                              __FUNCTION__);
                          /* We have a major error if we get here - just clear the entry from the table so we don't get stuck in a loop */
                          CancelEventSet(event_set.event_set_id, FALSE);
                        }
                        else
                        {
                          /* We can get here for downloads that reboot so we need to mark this event as successfully completed */
                          log_dbg(
                              "%s: adding completed event event_set_table event_data_p[%d] to running_events table so it can be cleaned up\n",
                              __FUNCTION__, i);
                          running_events[event_slot].in_use = TRUE;

                          /* This isn't really necessary but just to be safe */
                          running_events[event_slot].thread_id = 0;
                          running_events[event_slot].event_set_id = event_set
                              .event_set_id;
                          running_events[event_slot].event_id = event_set
                              .event_data_p[i].event_id;
                          running_events[event_slot].release_instance = FALSE;

                          /* By setting status to EVENT_XXXXXX here, the code in MonitorEvents() will know it will not need to call pthread_*() functions
                           to retrieve the result of the event...it already has the result */
                          if (event_set.event_data_p[i].executing
                              & EVENT_FAILED_MASK)
                          {
                            running_events[event_slot].status = EVENT_FAILURE;
                          }
                          else
                          {
                            running_events[event_slot].status = EVENT_SUCCESS;
                          }

                          /* Go to completed state to process this entry */
                          process_event_sets_state = PES_STATE_EVENT_COMPLETED;
                        }
                      }
                      else
                      {
                        mutex_xlock(TRUE, "event_table_mutex",
                                    &event_table_mutex);
                        event_set.event_data_p[i].executing = FALSE;
                        mutex_xlock(FALSE, "event_table_mutex",
                                    &event_table_mutex);
                      }

                    }
                    else if ((event_set.event_data_p[i].executing)
                        && (EventIsRunning(event_set.event_set_id,
                                           event_set.event_data_p[i].event_id)
                            == -1))
                    {
                      /* We found the executing event that was executing during the reset so lets
                       restart executing events from there */
                      event_start_index = i;
                      log_dbg(
                          "%s: Eventset id %d was executing already at index %d (executing = %d - COMPLETE_MASK is NOT set) - event_start_index set to %d\n",
                          __FUNCTION__, event_set.event_set_id, i,
                          event_set.event_data_p[i].executing,
                          event_start_index);

                      mutex_xlock(TRUE, "event_table_mutex",
                                  &event_table_mutex);

                      /* Clear just the executing bit in the mask here */
                      event_set.event_data_p[i].executing &= ~(EXECUTING_MASK);

                      mutex_xlock(FALSE, "event_table_mutex",
                                  &event_table_mutex);
                      log_dbg("%s: Cleared EXECUTING_MASK (executing = %d)\n",
                              __FUNCTION__,
                              event_set.event_data_p[i].executing);
                    }
                  }
                }
                else
                  event_start_index = 0;
              }

              if (ret_val)
              {
                /* We need to offset the index by 1 because 0 means this event is not running yet */
                if (event_start_index < event_set.num_events)
                  event_set.executing_index = event_start_index + 1;
                else
                  event_set.executing_index = event_set.num_events;

                if (UpdateEventSetExecutingIndexToTable(&event_set))
                {
                  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);
                  /* Save the table now that the executing flags are set accordingly */
                  SaveEventSetTable();
                  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                }
                else
                {
                  log_err(
                      "%s: Couldn't update event in events table, can't launch\n",
                      __FUNCTION__);
                  ret_val = FALSE;
                }
              }

              if (ret_val && (event_start_index < event_set.num_events)
                  && (event_set.event_data_p))
              {
                bool continuation = FALSE;

                while (1)
                {
                  lock_res = LockServerInstance(event_set.server_instance,
                                                10000, currentServerInstance);
                  if (lock_res == VHQ_SUCCESS
                      || lock_res == VHQ_API_SERVER_INSTANCE_ALREADY_LOCKED
                      || lock_res == VHQ_API_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR)
                    break;
                  dbg_warn(
                      "%s WARNING: Locking server instance '%s' FAILED with error %d - retrying in 5 seconds\n",
                      __FUNCTION__, event_set.server_instance, (int )lock_res);
                  sleep(5);
                }

                /* Skip event set processing in case if scheduler can't lock instance mentioned in event
                 * In case if scheduler has ability to lock instance - it will be switched */
                if (lock_res == VHQ_API_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR)
                {
                  /* Skip event set, try to use next one. We will back to it on next timer event.
                   * Timer will be triggered in case if app releases instance lock also */
                  dbg_err(
                      "%s: Server instance can't be switched from '%s' to '%s'. Skip event_set.\n",
                      __FUNCTION__, GetCurrentInstance(),
                      event_set.server_instance);

                  event_set_index++;
                  continue;
                }

                /* Some events like downloads will never return - we don't want to run them again after rebooting */
                continuation = event_set.event_data_p[event_start_index]
                    .executing & COMPLETE_CONTINUATION_REQ_MASK;

                mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

                event_set.event_data_p[event_start_index].executing |=
                EXECUTING_MASK;

                mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

                /* Cleanup status file */
                {
                  char *file_name = mallocProcessingStatusFileName(
                      event_set.event_data_p[event_start_index].event_id);
                  if (file_name)
                  {
                    removeFile(file_name);
                    utility_PutenvFilename(
                        file_name,
                        "DeviceStatus",
                        "ProcessedEvent",
                        cbEnumToStr(
                            event_set.event_data_p[event_start_index].eCallback));
                    utility_PutenvFilename(file_name, "DeviceStatus",
                                           "Instance", GetCurrentInstance());
                    free(file_name);
                  }
                }

                event_res = LaunchEvent(
                    event_set.event_data_p[event_start_index].eCallback,
                    event_set.preEventCbType, event_set.postEventCbType,
                    event_set.event_set_id,
                    event_set.event_data_p[event_start_index].event_id,
                    &event_set.event_data_p[event_start_index].sCallbackData,
                    continuation);

#if EVENT_SCHED_THREAD_MODE
                if (event_res != EVENT_RUNNING)
                {
                  log_err(
                      "%s: Unable to launch event %d (type = %s) in event set id: %d - event_res = %d\n",
                      __FUNCTION__,
                      event_start_index,
                      cbEnumToStr(
                          event_set.event_data_p[event_start_index].eCallback),
                      event_set.event_set_id, event_res);

                  /* We need to clean up the event.  event_res will indicate if the launch should be re-attempted or not */
                  CleanupCompletedEvent(&event_set, event_start_index,
                                        event_res, currentServerInstance, TRUE);

                  if (NumRunningEvents() == 0)
                  {
                    /* No events are running so set state back to initial so that we will try to re-launch this event if needed */
                    process_event_sets_state = PES_STATE_INITIAL;
                  }
                  else
                  {
                    /* We have running events so let's check them before retrying to start this event */
                    process_event_sets_state = PES_STATE_RUNNING;
                  }
                  nanosleep(&MONITOR_THREAD_CHECK_PERIOD, NULL);

                  /* The event at event_set_index is no longer there so don't advance to the next event set */
                  advanceEventSetIndex = FALSE;
                }
                else
#endif
                {
                  process_event_sets_state = PES_STATE_RUNNING;
                  advanceEventSetIndex = TRUE;
                }

              }
              else
              {
                if ((event_set.event_data_p == NULL)
                    || (event_set.num_events == 0))
                {
                  dbg_err(
                      "\n\n%s ERROR: event_set_table has %d events or NULL data pointer!!!\n\n",
                      __FUNCTION__, event_set.num_events);
                  CleanupCompletedEvent(&event_set, event_start_index,
                                        event_res, currentServerInstance,
                                        FALSE);
                }
                if (event_start_index >= event_set.num_events)
                {
                  dbg_err(
                      "%s: Event set id: %d has %d events but we are trying to start at index %d so the event is COMPLETED (2)\n\n",
                      __FUNCTION__, event_set.event_set_id,
                      event_set.num_events, event_start_index);

                  /* Due to a bug in older versions (< 3.2.14), recovery mechanism */
#if EVENT_SCHED_THREAD_MODE
                  if (NumRunningEvents() == 0)
                  {
                    /* No events are running so set state back to initial so that we will try to re-launch this event if needed */
                    process_event_sets_state = PES_STATE_INITIAL;
                  }
                  else
                  {
                    /* We have running events so let's check them before retrying to start this event */
                    process_event_sets_state = PES_STATE_RUNNING;
                  }
#endif
                  break;
                }
              }
            }
            else
            {
              mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

              dbg_msg("%s: Scheduler waiting for new events\n", __FUNCTION__);

              /* We need to wait for something to complete so move to PES_STATE_RUNNING and break out of this while loop */
              process_event_sets_state = PES_STATE_RUNNING;
              sleep(5);
              break;
            }

            if (advanceEventSetIndex)
            {
              /* Move to the next event set */
              event_set_index++;
            }
          }
          break;

        case PES_STATE_RUNNING:
          nanosleep(&MONITOR_THREAD_CHECK_PERIOD, NULL);

          MonitorEvents();

          if (EventIsCompleted())
          {
            process_event_sets_state = PES_STATE_EVENT_COMPLETED;
          }
          else if (NumRunningEvents() == 0)
          {
            dbg_msg(
                "%s: Moving from PES_STATE_RUNNING state directly to PES_STATE_COMPLETED state\n",
                __FUNCTION__);
            process_event_sets_state = PES_STATE_COMPLETED;
          }
          else if (EventReadyToLaunch(NULL))
          {
            process_event_sets_state = PES_STATE_INITIAL;
          }
          else
          {
            sleep(6);
          }
          break;

        case PES_STATE_EVENT_COMPLETED:
        {
          event_set_table_t event_set;
          running_events_index = 0;
          bool release_instance = FALSE;

          while (running_events_index < MAX_CONCURRENT_EVENTS)
          {
            event_id_t processed_event_id = EVENT_ID_INVALID;

            /* Initialize i to -1 - this should be reset to the running event_index when we find the completed event */
            i = -1;
            event_res = EVENT_FAILURE;

            /* Let's figure out which event completed and where it is in the event set table */
            while ((i < 0) && (running_events_index < MAX_CONCURRENT_EVENTS))
            {
              dbg_msg("%s: Checking if running_events[%d] is still RUNNING\n",
                      __FUNCTION__, running_events_index);
              if ((running_events[running_events_index].in_use)
                  && (running_events[running_events_index].status
                      != EVENT_RUNNING))
              {
                dbg_msg("%s: running_events[%d] is no longer RUNNING\n",
                        __FUNCTION__, running_events_index);
                event_res = running_events[running_events_index].status;

                event_set_index = 0;
                while ((i < 0) && (event_set_index < MAX_EVENT_SETS))
                {
                  memset(&event_set, 0, sizeof(event_set_table_t));

                  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

                  memcpy(&event_set, &event_set_table[event_set_index],
                         sizeof(event_set_table_t));

                  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

                  if (event_set.event_set_id
                      == running_events[running_events_index].event_set_id)
                  {
                    int index_to_check = event_set.executing_index - 1;

                    processed_event_id = running_events[running_events_index]
                        .event_id;

                    if (event_set.event_data_p[index_to_check].event_id
                        == running_events[running_events_index].event_id)
                    {

                      dbg_msg(
                          "%s: Expected event (index = %d, id = %d) of event_set_id %d is completed - result = %d - breaking out of loop at index %d\n",
                          __FUNCTION__, index_to_check,
                          event_set.event_data_p[index_to_check].event_id,
                          event_set.event_set_id, event_res,
                          running_events_index);
                      release_instance = running_events[running_events_index]
                          .release_instance;
                      i = index_to_check;
                      break;
                    }
                    else
                    {
                      log_warn(
                          "\n\n\n\n\n\n%s WARNING: expected index to check %d (event_id = %d, event_set_id = %d) does not match the completed event id (%d - event_set_id = %d)!!!!!!\n\n\n\n\n\n\n",
                          __FUNCTION__, index_to_check,
                          event_set.event_data_p[index_to_check].event_id,
                          event_set.event_set_id,
                          running_events[running_events_index].event_id,
                          running_events[running_events_index].event_set_id);
                      for (index_to_check = 0;
                          index_to_check
                              < event_set_table[event_set_index].num_events;
                          index_to_check++)
                      {
                        if (event_set.event_data_p[index_to_check].event_id
                            == running_events[running_events_index].event_id)
                        {

                          log_warn(
                              "%s: UNEXPECTED event %d (expected index %d) of event_set_id %d is completed - result = %d\n",
                              __FUNCTION__, index_to_check,
                              event_set.executing_index - 1,
                              event_set.event_set_id, event_res);
                          release_instance =
                              running_events[running_events_index]
                                  .release_instance;
                          i = index_to_check;
                          break;
                        }
                      }
                    }
                  }

                  if (i < 0)
                  {
                    event_set_index++;
                  }
                }

                if (i < 0)
                {
                  log_err(
                      "%s: running_events[%d] (event_set_id = %d, event_id = %d) is no longer RUNNING (state = %d) but UNABLE to find event in event_set_table[]\n",
                      __FUNCTION__, running_events_index,
                      running_events[running_events_index].event_set_id,
                      running_events[running_events_index].event_id,
                      running_events[running_events_index].status);
                  assert(0);
                  /* Clear the entry from running_events[] array */
                  dbg_msg("%s: Clearing running_events[%d]\n", __FUNCTION__,
                          running_events_index);
                  memset(&running_events[running_events_index], 0,
                         sizeof(running_event_t));
                }
              }

              /* If we haven't found the event, let's move to the next running_events_index */
              if (i < 0)
              {
                running_events_index++;
              }
            }

            if ((running_events_index >= MAX_CONCURRENT_EVENTS) || (i < 0))
            {
              dbg_msg(
                  "%s: Moving from PES_STATE_EVENT_COMPLETED to PES_STATE_INITIAL state\n",
                  __FUNCTION__);
              process_event_sets_state = PES_STATE_INITIAL;
              break;
            }
            else
            {
              /* Clear the entry from running_events[] array */
              dbg_msg("%s: Clearing running_events[%d]\n", __FUNCTION__,
                      running_events_index);
              memset(&running_events[running_events_index], 0,
                     sizeof(running_event_t));
            }

            CleanupCompletedEvent(&event_set, i, event_res,
                                  currentServerInstance, release_instance);

            /* Event processed, send status */
            {
              char *file_name = mallocProcessingStatusFileName(
                  processed_event_id);
              if (file_name)
              {
                const char *status = "Operational";

                /* Update state information */
                if (isDownloadEventSetPresent())
                  status = "Operational Pending Updates";
                if (numKeyExchangeEventsInTable() || !AgentKeysExist())
                  status = "Registering";
                if (event_res != EVENT_SUCCESS)
                  status = "Error";

                utility_PutenvFilename(file_name, "DeviceStatus", "State",
                                       status);
                NotifyApps(TMS_EVENT_NOTIFY_PROCESSING_STATUS, file_name, -1,
                           VHQ_SUCCESS, EVENT_SET_ID_INVALID, EVENT_ID_INVALID,
                           TRUE);
                free(file_name);
              }
            }

            if (NumRunningEvents() == 0)
            {
              /* Go back to INITIAL state to see if we have more events to run */
              process_event_sets_state = PES_STATE_INITIAL;
            }
            else
            {
              /* We have running events so let's check them before retrying to start this event */
              process_event_sets_state = PES_STATE_RUNNING;
            }
            running_events_index++;
          }
        }
          break;

        case PES_STATE_COMPLETED:
        default:
          if (process_event_sets_state != PES_STATE_COMPLETED)
            log_dbg(
                "%s: Unknown ProcessEventSets() STATE (%d) - setting state to COMPLETED\n",
                __FUNCTION__, process_event_sets_state);
          process_event_sets_state = PES_STATE_COMPLETED;
          break;
      } /* End of state machine switch statement */

      /* Print state change information */
      if (process_event_sets_previous_state != process_event_sets_state)
      {
        dbg_msg("%s: STATE MACHINE STATE CHANGE - %s -> %s\n", __FUNCTION__,
                pesStateToStr(process_event_sets_previous_state),
                pesStateToStr(process_event_sets_state));
      }

      if ((process_event_sets_previous_state != PES_STATE_RUNNING)
          || (process_event_sets_state != PES_STATE_RUNNING))
      {
        /* Let's save the event set table at the end of each state iteration.  We don't need to do this
         if were were in RUNNING state previously and are still in RUNNING state because that means
         nothing has changed */
        mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);
        SaveEventSetTable();
        mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
      }

    } /* End of while (!COMPLETED) state machine loop */

    dbg_msg("%s: All RUNNING events are DONE - calling postEventCbType %d\n",
            __FUNCTION__, event_set_table[event_set_index].preEventCbType);
    PopEventCallbacks();

    /* We can set re-enable the cancel state now that we are done processing jobs
     NOTE that we should enable cancelling BEFORE we release the event sched mutex lock */
    res = pthread_setcancelstate(PTHREAD_CANCEL_ENABLE, NULL);
    if (res != 0)
    {
      dbg_err("%s: pthread_setcancelstate(PTHREAD_CANCEL_ENABLE) failed\n",
              __FUNCTION__);
    }
    pthread_testcancel();
#if EVENT_SCHED_THREAD_MODE
    mutex_xlock(FALSE, "event_sched_lock_mutex", &event_sched_lock_mutex);
    dbg_msg(
        "%s: event_sched_lock_mutex is unlocked - waiting 1 second to give other threads the chance to lock it\n",
        __FUNCTION__);

    /* Give UPDATE_CONFIG a chance to lock event_sched_lock_mutex and run */
    sleep(1);
#endif

    PRINT_EVENT_SET_TABLE(
        "ProcessEventSets - AFTER processing all expired events");

    /* Clear the flag */
    timer_expired = FALSE;

  } /* End of if (GetTimerExpired()) */

  return ret_val;
}

#if defined(EVENT_SCHED_THREAD_MODE) && defined(_VOS2)

static void SysPmTimerCb(void)
{
  timer_expired = TRUE;
  pthread_cond_signal(&event_sched_cond);
  dbg_info("%s: Callback invoked, sent signal to event scheduler\n", __func__);
}
#endif /* EVENT_SCHED_THREAD_MODE && _VOS2 */

#ifdef EVENT_SCHED_THREAD_MODE
static void wait_for_timer_expiry(void)
{
  uint32 seconds_to_next_event;
  struct itimerval next_tv;

  memset(&next_tv, 0, sizeof(next_tv));

  dbg_trace("%s: +\n", __func__);

  seconds_to_next_event = GetSecondsToNextEvent(FALSE);

  next_tv.it_value.tv_sec = seconds_to_next_event;

  if (seconds_to_next_event > 0)
    StartEventTimer(next_tv);

  /*
   * Enter this loop only if expire time is greater than 30 sec.
   * The operations inside this loop are too much and let's not do it for
   * small durations.
   */
  while (seconds_to_next_event > 30)
  {
    int ret;
    struct timespec wait_time = { 0, 0 };

    /* Add 2 sec so that PM wake up signal is received first */
    wait_time.tv_sec = linux_time(NULL) + seconds_to_next_event + 1;

    mutex_xlock(TRUE, "event_sched_lock_mutex", &event_sched_lock_mutex);

    /* Wait for signal or expiry time */
    ret = pthread_cond_timedwait(&event_sched_cond, &event_sched_lock_mutex,
                                 &wait_time);
    if (ret && (ret != ETIMEDOUT))
    {
      dbg_err("%s: ERROR pthread_cond_timedwait error\n", __func__);
    }

    mutex_xlock(FALSE, "event_sched_lock_mutex", &event_sched_lock_mutex);

    seconds_to_next_event = GetSecondsToNextEvent(FALSE);
  }

  if (seconds_to_next_event)
    sleep(seconds_to_next_event);

  timer_expired = TRUE;

  dbg_trace("%s: -\n", __func__);
}
#endif /* EVENT_SCHED_THREAD_MODE */

void* EventScheduler(void *pvData)
{
  int ret_val, res;
  struct sigaction sa;
  sigset_t block_sig_set;

#if EVENT_SCHED_THREAD_MODE
  LogRegisterThreadDescription("sched");
  EventSchedThreadId = pthread_self();
  dbg_msg(
      "%s: Event Scheduler started on PID %u - pvData = 0x%08x - EventSchedThreadId = 0x%08x\n",
      __FUNCTION__, getpid(), pvData, EventSchedThreadId);
#else
  dbg_msg( "%s: Event Scheduler started on PID %u - pvData = 0x%08x\n", __FUNCTION__, getpid(), pvData);
#endif

  dbg_msg("Data Structure Sizes:\n"
          "\tsizeof(event_data_t) = %d\n"
          "\tsizeof(launch_downloader_parms) = %d\n"
          "\tsizeof(set_data_parms) = %d\n"
          "\tsizeof(get_data_parms) = %d\n"
          "\tsizeof(term_act_parms) = %d\n"
          "\tsizeof(uploader_parms) = %d\n"
          "\tsizeof(app_action_parms) = %d\n"
          "\tsizeof(del_file_parms) = %d\n"
          "\tsizeof(device_event_parms) = %d\n"
          "\tsizeof(heartbeat_parms) = %d\n"
          "\tsizeof(get_sw_update_params) = %d\n",
          sizeof(event_data_t), sizeof(launch_downloader_parms),
          sizeof(set_data_parms), sizeof(get_data_parms),
          sizeof(term_act_parms), sizeof(uploader_parms),
          sizeof(app_action_parms), sizeof(del_file_parms),
          sizeof(device_event_parms), sizeof(heartbeat_parms),
          sizeof(get_sw_update_params));

#if 0
  /* Debug messages like this can be enabled to help debug table version updates */
  {
    launch_downloader_parms temp_dl_parm;

    dbg_msg("launch_downloader_parms offsets:\n\tMethod = %d\n\tFileName = %d\n\tFileSize = %d\n\tDownloadType = %d\n\tHashAlgo = %d\n\tUser = %d\n\tPW = %d\n\tURL = %d\n\tusername = %d\n\tApplyOnDate = %d\n\tExpirationDate = %d\n\tPostInstallAction = %d\n\tSuppressReboot = %d\n\tCompressionEnabled = %d\n\tReceiver = %d\n\tHash = %d\n\tTargetDevice = %d\n\tTargetDeviceIdentifier = %d\n\tTargetDeviceModel = %d\n\tPeripheral = %d\n\tCommId = %d\n\tMessageId = %d\n\tsrv_msg_type = %d\n\tsrv_op_type = %d\n",
    ((int)&temp_dl_parm.dl_file_content.Method - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.FileName - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.FileSize - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.DownloadType - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.HashAlgo - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.User - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.PW - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.URL - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.username - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.ApplyOnDate - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.ExpirationDate - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.PostInstallAction - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.SuppressReboot - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.CompressionEnabled - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.Receiver - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.Hash - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.TargetDevice - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.TargetDeviceIdentifier - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.TargetDeviceModel - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.dl_file_content.Peripheral - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.comm_id - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.message_id - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.srv_msg_type - (int)&temp_dl_parm),
    ((int)&temp_dl_parm.srv_op_type - (int)&temp_dl_parm));
  }
#endif

  if (sizeof(event_data_t) != EXPECTED_EVENT_DATA_T_SIZE)
  {
    log_err(
        "%s ERROR: event_data_t size mismatch (expected %d, actual is %d) - Make sure you update the RestoreEventSetTable functions to account for the size change\n",
        __FUNCTION__, EXPECTED_EVENT_DATA_T_SIZE, sizeof(event_data_t));
    exit(-1);
  }
  if (sizeof(launch_downloader_parms) != EXPECTED_DL_PARMS_SIZE)
  {
    log_err(
        "%s ERROR: launch_downloader_parms size mismatch (expected %d, actual is %d) - Make sure you update the RestoreEventSetTable functions to account for the size change\n",
        __FUNCTION__, EXPECTED_DL_PARMS_SIZE, sizeof(launch_downloader_parms));
    exit(-1);
  }
  if (sizeof(set_data_parms) != EXPECTED_SET_DATA_PARMS_SIZE)
  {
    log_err(
        "%s ERROR: set_data_parms size mismatch (expected %d, actual is %d) - Make sure you update the RestoreEventSetTable functions to account for the size change\n",
        __FUNCTION__, EXPECTED_SET_DATA_PARMS_SIZE, sizeof(set_data_parms));
    exit(-1);
  }
  if (sizeof(get_data_parms) != EXPECTED_GET_DATA_PARMS_SIZE)
  {
    log_err(
        "%s ERROR: get_data_parms size mismatch (expected %d, actual is %d) - Make sure you update the RestoreEventSetTable functions to account for the size change\n",
        __FUNCTION__, EXPECTED_GET_DATA_PARMS_SIZE, sizeof(get_data_parms));
    exit(-1);
  }
  if (sizeof(term_act_parms) != EXPECTED_TERM_ACT_PARMS_SIZE)
  {
    log_err(
        "%s ERROR: term_act_parms size mismatch (expected %d, actual is %d) - Make sure you update the RestoreEventSetTable functions to account for the size change\n",
        __FUNCTION__, EXPECTED_TERM_ACT_PARMS_SIZE, sizeof(term_act_parms));
    exit(-1);
  }
  if (sizeof(uploader_parms) != EXPECTED_UL_PARMS_PARMS_SIZE)
  {
    log_err(
        "%s ERROR: uploader_parms size mismatch (expected %d, actual is %d) - Make sure you update the RestoreEventSetTable functions to account for the size change\n",
        __FUNCTION__, EXPECTED_UL_PARMS_PARMS_SIZE, sizeof(uploader_parms));
    exit(-1);
  }
  if (sizeof(app_action_parms) != EXPECTED_APP_ACTION_PARMS_SIZE)
  {
    log_err(
        "%s ERROR: app_action_parms size mismatch (expected %d, actual is %d) - Make sure you update the RestoreEventSetTable functions to account for the size change\n",
        __FUNCTION__, EXPECTED_APP_ACTION_PARMS_SIZE, sizeof(app_action_parms));
    exit(-1);
  }
  if (sizeof(del_file_parms) != EXPECTED_DEL_FILE_PARMS_SIZE)
  {
    log_err(
        "%s ERROR: del_file_parms size mismatch (expected %d, actual is %d) - Make sure you update the RestoreEventSetTable functions to account for the size change\n",
        __FUNCTION__, EXPECTED_DEL_FILE_PARMS_SIZE, sizeof(del_file_parms));
    exit(-1);
  }
  if (sizeof(device_event_parms) != EXPECTED_DEV_EVENT_PARMS_SIZE)
  {
    log_err(
        "%s ERROR: device_event_parms size mismatch (expected %d, actual is %d) - Make sure you update the RestoreEventSetTable functions to account for the size change\n",
        __FUNCTION__, EXPECTED_DEV_EVENT_PARMS_SIZE,
        sizeof(device_event_parms));
    exit(-1);
  }
  if (sizeof(heartbeat_parms) != EXPECTED_HB_PARMS_SIZE)
  {
    log_err(
        "%s ERROR: heartbeat_parms size mismatch (expected %d, actual is %d) - Make sure you update the RestoreEventSetTable functions to account for the size change\n",
        __FUNCTION__, EXPECTED_HB_PARMS_SIZE, sizeof(heartbeat_parms));
    exit(-1);
  }
  if (sizeof(get_sw_update_params) != EXPECTED_GET_UPDATE_PARAMS_SIZE)
  {
    log_err(
        "%s ERROR: get_sw_update_params size mismatch (expected %d, actual is %d) - Make sure you update the RestoreEventSetTable functions to account for the size change\n",
        __FUNCTION__, EXPECTED_HB_PARMS_SIZE, sizeof(get_sw_update_params));
    exit(-1);
  }

  res = pthread_setcancelstate(PTHREAD_CANCEL_ENABLE, NULL);
  if (res != 0)
  {
    log_err("%s: pthread_setcancelstate failed", __FUNCTION__);
  }

  /* This is the Event Scheduler thread handler */
  dbg_msg("%s: Setting up TIMEOUT signal handler\n", __FUNCTION__);
  sa.sa_sigaction = &sighandler;

  /* Block all signals while the handler is running */
  sigfillset(&sa.sa_mask);
  sa.sa_flags = SA_RESTART | SA_SIGINFO;
  ret_val = sigaction(SIGALRM, &sa, NULL);
  if (ret_val != 0)
  {
    dbg_err("%s: Error setting up SIGALRM handler\n", __FUNCTION__);
  }

  /* Block all signals while the handler is running */
  sigfillset(&sa.sa_mask);
  sa.sa_flags = SA_RESTART | SA_SIGINFO;
  ret_val = sigaction(SIGHUP, &sa, NULL);
  if (ret_val != 0)
  {
    dbg_err("%s: Error setting up SIGHUP handler\n", __FUNCTION__);
  }

  /* Block all signals while the handler is running */
  sigfillset(&sa.sa_mask);
  sa.sa_flags = SA_RESTART | SA_SIGINFO;
  ret_val = sigaction(SIGINT, &sa, NULL);
  if (ret_val != 0)
  {
    dbg_err("%s: Error setting up SIGINT handler\n", __FUNCTION__);
  }

  /* Block all signals while the handler is running */
  sigfillset(&sa.sa_mask);
  sa.sa_flags = SA_RESTART | SA_SIGINFO;
  ret_val = sigaction(SIGQUIT, &sa, NULL);
  if (ret_val != 0)
  {
    dbg_err("%s: Error setting up SIGQUIT handler\n", __FUNCTION__);
  }

  /* Block all signals while the handler is running */
  sigfillset(&sa.sa_mask);
  sa.sa_flags = SA_RESTART | SA_SIGINFO;
  ret_val = sigaction(SIGILL, &sa, NULL);
  if (ret_val != 0)
  {
    dbg_err("%s: Error setting up SIGILL handler\n", __FUNCTION__);
  }

  /* Block all signals while the handler is running */
  sigfillset(&sa.sa_mask);
  sa.sa_flags = SA_RESTART | SA_SIGINFO;
  ret_val = sigaction(SIGABRT, &sa, NULL);
  if (ret_val != 0)
  {
    dbg_err("%s: Error setting up SIGABRT handler\n", __FUNCTION__);
  }

  /* Block all signals while the handler is running */
  sigfillset(&sa.sa_mask);
  sa.sa_flags = SA_RESTART | SA_SIGINFO;
  ret_val = sigaction(SIGFPE, &sa, NULL);
  if (ret_val != 0)
  {
    dbg_err("%s: Error setting up SIGFPE  handler\n", __FUNCTION__);
  }

  /* Block all signals while the handler is running */
  sigfillset(&sa.sa_mask);
  sa.sa_flags = SA_RESTART | SA_SIGINFO;
  ret_val = sigaction(SIGSEGV, &sa, NULL);
  if (ret_val != 0)
  {
    dbg_err("%s: Error setting up SIGSEGV handler\n", __FUNCTION__);
  }

  /* Block all signals while the handler is running */
  sigfillset(&sa.sa_mask);
  sa.sa_flags = SA_RESTART | SA_SIGINFO;
  ret_val = sigaction(SIGPIPE, &sa, NULL);
  if (ret_val != 0)
  {
    dbg_err("%s: Error setting up SIGPIPE handler\n", __FUNCTION__);
  }

  /* Block all signals while the handler is running */
  sigfillset(&sa.sa_mask);
  sa.sa_flags = SA_RESTART | SA_SIGINFO;
  ret_val = sigaction(SIGTERM, &sa, NULL);
  if (ret_val != 0)
  {
    dbg_err("%s: Error setting up SIGTERM handler\n", __FUNCTION__);
  }

  /* We don't need to know results of our child processes so let's set it up so child processes will
   just exit instead of going into zombie state waiting for result to be read */
  sigfillset(&sa.sa_mask);
  sa.sa_flags = SA_NOCLDWAIT;
  ret_val = sigaction(SIGCHLD, &sa, NULL);
  if (ret_val != 0)
  {
    dbg_err("%s: Error setting up to ignore SIGCHLD signals\n", __FUNCTION__);
  }

  /* Setup the mask to block all signals to start */
  BlockAllSignals(FALSE);

  /* Set the signals we don't want to block and will handle so we can unblock them */
  sigfillset(&block_sig_set);
  sigdelset(&block_sig_set, SIGALRM);
  sigdelset(&block_sig_set, SIGHUP);
  sigdelset(&block_sig_set, SIGINT);
  sigdelset(&block_sig_set, SIGQUIT);
  sigdelset(&block_sig_set, SIGILL);
  sigdelset(&block_sig_set, SIGABRT);
  sigdelset(&block_sig_set, SIGFPE);
  sigdelset(&block_sig_set, SIGSEGV);
  sigdelset(&block_sig_set, SIGPIPE);
  sigdelset(&block_sig_set, SIGTERM);
  sigdelset(&block_sig_set, SIGKILL);
  sigdelset(&block_sig_set, SIGSTOP);

  /* Now setup the mask so we are not blocking the signals we will handle */
  dbg_msg("%s: Unblocking signals EventScheduler will process\n", __FUNCTION__);
  res = pthread_sigmask(SIG_SETMASK, &block_sig_set, NULL);
  if (res != 0)
  {
    dbg_err(
        "%s: pthread_sigmask() to unblock signals agent will handle failed with error %s (%d)\n",
        __FUNCTION__, strerror(res), res);
  }

  /* Setup the Event Table mutex */
  while (pthread_mutex_init(&event_table_mutex, NULL) != 0)
  {
    dbg_err("Error initializing event_table_mutex - RETRYING!!!\n");
    assert(0);
  }

#ifdef EVENT_SCHED_THREAD_MODE
  /* Setup the event scheduler mutex */
  while (pthread_mutex_init(&event_sched_lock_mutex, NULL) != 0)
  {
    dbg_err("Error initializing event_sched_lock_mutex - RETRYING!!!\n");
    assert(0);
  }

  while (pthread_mutex_init(&saved_events_file_mutex, NULL) != 0)
  {
    dbg_err("Error initializing saved_events_file_mutex - RETRYING!!!\n");
    assert(0);
  }

  while (pthread_cond_init(&event_sched_cond, NULL) != 0)
  {
    dbg_err("Error initializing event_sched_cond - RETRYING!!!\n");
    assert(0);
  }

  while (pthread_mutex_init(&scheduler_lock_mutex, NULL) != 0)
  {
    dbg_err("Error initializing scheduler_lock_mutex - RETRYING!!!\n");
    assert(0);
  }

  while (pthread_cond_init(&scheduler_lock_cond, NULL) != 0)
  {
    dbg_err("Error initializing scheduler_lock_cond - RETRYING!!!\n");
    assert(0);
  }

  ClearRunningEvents();
#endif /* EVENT_SCHED_THREAD_MODE */

  /* Clear the CB stack */
  ClearCBStack();

  /* Let's initialize the callback table */
  dbg_msg("\n%s: event_set_table size is %d\n\n", __FUNCTION__,
          sizeof(event_set_table));
  RestoreEventSetTable();

  /* We are going to start with event running disabled - this will give a chance for responses stored on the device to get sent
   before they might get overwritten by events that are going to run right away */
  _event_scheduler_locked = TRUE;

#ifdef _VOS2
  /*
   * Register the Timer callback function so that we can wakeup the waiting
   * thread later
   */
  SetTimerCbFunc_Wrapper(SysPmTimerCb);

  /* On battery powered devices, make sure we won't go to sleep until we get to pause() call */
  CriticalSectionEnter_Wrapper(0);
#endif

  /* Event scheduler is now initialized */
  _eventSchedulerInited = TRUE;
  dbg_notice(
      "%s: Event Scheduler is now initialized - sizeof(bool) = %d, sizeof(char) = %d\n",
      __FUNCTION__, sizeof(bool), sizeof(char));

#ifdef EVENT_SCHED_THREAD_MODE
  /* Wait for the rest of the system to become initialized and event scheduler to get unlocked */
  pthread_mutex_lock(&scheduler_lock_mutex);
  while (_event_scheduler_locked)
  {
    dbg_msg("%s: Waiting for event scheduler to get unlocked\n", __func__);
    pthread_cond_wait(&scheduler_lock_cond, &scheduler_lock_mutex);
  }
  dbg_msg("%s: Event scheduler unlocked\n", __func__);
  pthread_mutex_unlock(&scheduler_lock_mutex);

  while (TRUE)
  {
    ProcessEventSets();

#ifdef _VOS2
    dbg_msg("%s: Waiting for signal\n", __func__);
    /* On battery powered devices, we can now exit the critical section to let the device go to sleep if needed */
    CriticalSectionExit_Wrapper();

    wait_for_timer_expiry();

    /* On battery powered devices, make sure we don't go to sleep while we are processing stuff */
    CriticalSectionEnter_Wrapper(0);
#else
    wait_for_timer_expiry();
#endif /* _VOS2 */
  }
#endif /* EVENT_SCHED_THREAD_MODE */
  LogUnRegisterThreadDescription();
  return NULL;
}

bool EventSchedulerInitialized(void)
{
  return _eventSchedulerInited;
}


event_set_id_t ScheduleEventSet(bool bRecurring, long int dwFirstRun,
                                recur_unit_t recurUnits, uint32 dwRecurPeriod,
                                long int tExpiration, uint32 dwRetryFreq,
                                uint32 opSetId,
                                operation_set_event_t psOpSetData[],
                                uint32 dwOpSetDataArraySize,
                                event_set_id_t dependency_event_set_id,
                                event_timer_t timerType,
                                char *pszServerInstance,
                                pre_post_callback_t preEventCbType,
                                pre_post_callback_t postEventCbType,
                                bool keyExchangeEventSet)
{
  uint32 i;
  event_set_table_t new_event_set;
  int initial_recur_id_val = 0;
  time_t cur_time;
  event_set_id_t existing_id = EVENT_SET_ID_INVALID;

  /* We can't interact with events table before we read it */
  if (!EventSchedulerInitialized())
  {
    log_err("%s: Scheduler not inited, unable to schedule event\n",
            __FUNCTION__);
    return EVENT_SET_ID_INVALID;
  }

  dbg_msg("%s: ENTER\n", __FUNCTION__);

  /* If the event set is already scheduled, just return its event_set_id */
  existing_id = EventSetExists(opSetId, psOpSetData, dwOpSetDataArraySize);
  if (existing_id != EVENT_SET_ID_INVALID)
  {
    dbg_msg("%s: EventSet already exists - returning %d\n", __FUNCTION__,
            existing_id);
    return existing_id;
  }

  if (dwOpSetDataArraySize > NumRemainingEventSlots())
  {
    log_err("%s ERROR: Only %d event slots are left - trying to schedule %d\n",
            __FUNCTION__, NumRemainingEventSlots(), dwOpSetDataArraySize);
    return EVENT_SET_ID_INVALID;
  }

  switch (timerType)
  {
    case EVENT_TIMER_DATE_TIME:
      cur_time = linux_time(NULL);
      break;
    case EVENT_TIMER_RTC:
    default:
      cur_time = GetRTC();
      if (cur_time == 0)
      {
        cur_time = linux_time(NULL);
        timerType = EVENT_TIMER_DATE_TIME;
      }
      break;
  }

  /* Setup the new event set data */
  memset(&new_event_set, 0, sizeof(event_set_table_t));

  /* Set ID invalid and let AddEventToTable update it to the correct ID */
  new_event_set.event_set_id = EVENT_SET_ID_INVALID;

  new_event_set.recurring = bRecurring;
  if (bRecurring)
    initial_recur_id_val = 1;

  /* We may want to change dwFirstRun in calls to ScheduleEvent so that we don't need to add the time offset*/
  if ((timerType == EVENT_TIMER_RTC) && (dwFirstRun == 0)
      && (psOpSetData[0].opCbType == cbDeviceEventProcessor))
  {
    /* RTC device events that need to be run now should be treated special.  They need to run before any
     expired events, etc. Make it urgent */
    new_event_set.next_run_time = 0;
  }
  else
  {
    new_event_set.next_run_time = dwFirstRun + cur_time;
  }
  new_event_set.recur_units = recurUnits;
  new_event_set.recur_period = dwRecurPeriod;
  if (tExpiration != 0)
  {
    new_event_set.expiration_date = tExpiration + cur_time;
  }
  new_event_set.retry_freq = dwRetryFreq;
  new_event_set.operation_set_id = opSetId;
  if (dependency_event_set_id != EVENT_SET_ID_INVALID)
    new_event_set.dependency_event_set = dependency_event_set_id;
  else
  {
    if (opSetId != 0)
    {
      mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);
      for (i = 0; i < MAX_EVENT_SETS; i++)
      {
        if ((event_set_table[i].event_set_id != EVENT_SET_ID_INVALID)
            && (event_set_table[i].operation_set_id == opSetId))
        {
          new_event_set.dependency_event_set = event_set_table[i].event_set_id;
          dbg_msg(
              "%s: New Event Set has same OperationSetId (%d) as event_set_table[%d] - marking dependency on event_set_id %d\n",
              __FUNCTION__, opSetId, i, event_set_table[i].event_set_id);
        }
      }
      mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
    }
  }
  new_event_set.timer_type = timerType;
  strncpy(new_event_set.server_instance, pszServerInstance,
          sizeof(new_event_set.server_instance) - 1);

  new_event_set.preEventCbType = preEventCbType;
  new_event_set.postEventCbType = postEventCbType;

  new_event_set.key_exchange_event_set = keyExchangeEventSet;

  new_event_set.num_events = 0;

  new_event_set.event_data_p = calloc(dwOpSetDataArraySize,
                                      sizeof(event_table_t));
  if (new_event_set.event_data_p)
  {
    dbg_msg(
        "%s: next_run_time = %lu (cur_time = %lu), recur_units = %d, recur_period = %d, retry_freq = %d, operation_set_id = %d, dependency event id = %d\n",
        __FUNCTION__, new_event_set.next_run_time, cur_time,
        new_event_set.recur_units, new_event_set.recur_period,
        new_event_set.retry_freq, new_event_set.operation_set_id,
        new_event_set.dependency_event_set);

    for (i = 0; i < dwOpSetDataArraySize; i++)
    {
      event_table_t *new_event = &new_event_set.event_data_p[new_event_set
          .num_events];

      if (new_event)
      {
        /* Setup the new entry event structure */
        memset(new_event, 0, sizeof(event_table_t));
        /* Set ID invalid and let AddEventToTable update it to the correct ID */
        new_event->event_id = EVENT_ID_INVALID;

        new_event->eCallback = psOpSetData[i].opCbType;
        dbg_msg(
            "%s: event %d (type=%s), event_data_index %d, new_event = 0x%08x\n",
            __FUNCTION__, i, cbEnumToStr(new_event->eCallback),
            new_event_set.num_events, new_event);
        dbg_msg("\topData = 0x%08x, opDataSize = %d\n", psOpSetData[i].opData,
                psOpSetData[i].opDataSize);
        switch (new_event->eCallback)
        {
          case cbLaunchDownloader:
            //DebugMsgBuffer("Incoming Downloader Parms", psOpSetData[i].opData, psOpSetData[i].opDataSize, BUF_TYPE_HEX);
            memcpy(&new_event->sCallbackData.downloader_parms,
                   psOpSetData[i].opData,
                   sizeof(new_event->sCallbackData.downloader_parms));
            //DebugMsgBuffer("Copied Downloader Parms", &new_event->sCallbackData.downloader_parms, sizeof(new_event->sCallbackData.downloader_parms), BUF_TYPE_HEX);
            if (psOpSetData[i].opDataSize
                != sizeof(new_event->sCallbackData.downloader_parms))
              dbg_warn(
                  "%s WARNING: Downloader event parameter size mismatch - received %d, expected %d\n",
                  __FUNCTION__, psOpSetData[i].opDataSize,
                  sizeof(new_event->sCallbackData.downloader_parms));
            new_event->sCallbackData.downloader_parms.operation.OpSetId =
                opSetId;
            new_event->sCallbackData.downloader_parms.operation.RecurId =
                initial_recur_id_val;
            new_event->sCallbackData.downloader_parms.dl_file_content
                .ExpirationDate = new_event_set.expiration_date;
            break;
          case cbGetDataProcessor:
          case cbGetDiagDataProcessor:
            memcpy(&new_event->sCallbackData._get_data_parms,
                   psOpSetData[i].opData,
                   sizeof(new_event->sCallbackData._get_data_parms));
            new_event->sCallbackData._get_data_parms.operation.OpSetId =
                opSetId;
            new_event->sCallbackData._get_data_parms.operation.RecurId =
                initial_recur_id_val;
            break;
          case cbSetDataProcessor:
            memcpy(&new_event->sCallbackData._set_data_parms,
                   psOpSetData[i].opData,
                   sizeof(new_event->sCallbackData._set_data_parms));
            new_event->sCallbackData._set_data_parms.operation.OpSetId =
                opSetId;
            new_event->sCallbackData._set_data_parms.operation.RecurId =
                initial_recur_id_val;
            break;
          case cbTerminalAction:
            memcpy(&new_event->sCallbackData.action_parms,
                   psOpSetData[i].opData,
                   sizeof(new_event->sCallbackData.action_parms));
            new_event->sCallbackData.action_parms.operation.OpSetId = opSetId;
            new_event->sCallbackData.action_parms.operation.RecurId =
                initial_recur_id_val;
            break;
          case cbFileUploader:
            memcpy(&new_event->sCallbackData.ul_parms, psOpSetData[i].opData,
                   sizeof(new_event->sCallbackData.ul_parms));
            new_event->sCallbackData.ul_parms.operation.OpSetId = opSetId;
            new_event->sCallbackData.ul_parms.operation.RecurId =
                initial_recur_id_val;
            break;
          case cbAppActionProcessor:
            memcpy(&new_event->sCallbackData._app_action_parms,
                   psOpSetData[i].opData,
                   sizeof(new_event->sCallbackData._app_action_parms));
            new_event->sCallbackData._app_action_parms.operation.OpSetId =
                opSetId;
            new_event->sCallbackData._app_action_parms.operation.RecurId =
                initial_recur_id_val;
            break;
          case cbDelFileProcessor:
            memcpy(&new_event->sCallbackData._del_file_parms,
                   psOpSetData[i].opData,
                   sizeof(new_event->sCallbackData._del_file_parms));
            new_event->sCallbackData._del_file_parms.operation.OpSetId =
                opSetId;
            new_event->sCallbackData._del_file_parms.operation.RecurId =
                initial_recur_id_val;
            break;
          case cbGetParamUpdatesProcessor:
          case cbDeviceEventProcessor:
            memcpy(&new_event->sCallbackData._device_event_parms,
                   psOpSetData[i].opData,
                   sizeof(new_event->sCallbackData._device_event_parms));
            new_event->sCallbackData._device_event_parms.operation.OpSetId =
                opSetId;
            new_event->sCallbackData._device_event_parms.operation.RecurId =
                initial_recur_id_val;
            break;
          case cbHeartbeat:
            if (psOpSetData[i].opData)
            {
              memcpy(&new_event->sCallbackData._heartbeat_parms,
                     psOpSetData[i].opData,
                     sizeof(new_event->sCallbackData._heartbeat_parms));
              new_event->sCallbackData._heartbeat_parms.operation.OpSetId =
                  opSetId;
              new_event->sCallbackData._heartbeat_parms.operation.RecurId =
                  initial_recur_id_val;
            }
            break;
          case cbGetSwUpdateProcessor:
            memcpy(&new_event->sCallbackData._get_sw_update_params,
                   psOpSetData[i].opData,
                   sizeof(new_event->sCallbackData._get_sw_update_params));
            new_event->sCallbackData._get_sw_update_params.operation.OpSetId =
                opSetId;
            new_event->sCallbackData._get_sw_update_params.operation.RecurId =
                initial_recur_id_val;
            break;
          default:
            break;
        }

        /* We added an event so lets increase num_events */
        new_event_set.num_events++;
      }

    }

    /* Add this new event to the event table */
    dbg_msg("%s: Calling AddEventSetToTable()\n", __FUNCTION__);
    if (!AddEventSetToTable(&new_event_set, FALSE))
    {
      dbg_err("%s ERROR: Could not add event set\n", __FUNCTION__);
    }

    dbg_msg("%s: EXIT\n", __FUNCTION__);
    /* Return the new event set ID */
    return (new_event_set.event_set_id);
  }
  else
  {
    log_err(
        "%s ERROR: Insufficient memory to allocate %d bytes for %d events\n",
        __FUNCTION__, (dwOpSetDataArraySize * sizeof(event_table_t)),
        dwOpSetDataArraySize);
    return EVENT_SET_ID_INVALID;
  }
}

static void CleanUpEventSet(int event_set_index)
{
  int i = 0;

  if (event_set_table[event_set_index].event_data_p)
  {
    free(event_set_table[event_set_index].event_data_p);
    event_set_table[event_set_index].event_data_p = NULL;
  }

  /* Move up */
  for (i = event_set_index; i < (MAX_EVENT_SETS - 1); i++)
  {
    memcpy(&event_set_table[i], &event_set_table[i + 1],
           sizeof(event_set_table_t));
  }

  memset(&event_set_table[MAX_EVENT_SETS - 1], 0, sizeof(event_set_table_t));
  event_set_table[MAX_EVENT_SETS - 1].event_set_id = EVENT_SET_ID_INVALID;
}

static bool CancelEventSetThreadSafe(event_set_id_t event_set_id,
                                     bool cancel_dependent_events)
{
  int event_set_index, entry_index;
  bool ret_val = TRUE;
  event_set_id_t event_set_to_cancel = event_set_id;

  if (event_set_id == EVENT_SET_ID_INVALID)
  {
    dbg_err(
        "%s: EVENT_SET_ID_INVALID (%d) is not a valid ID to cancel - returning FALSE\n",
        __FUNCTION__, event_set_id);
    return FALSE;
  }

  if (cancel_dependent_events)
  {
    /* Find dependent event sets in the table */
    for (event_set_index = 0; event_set_index < MAX_EVENT_SETS;
        event_set_index++)
    {
      if (event_set_table[event_set_index].event_set_id == EVENT_SET_ID_INVALID)
        break;

      /* Use recursion to delete dependent events */
      if (event_set_table[event_set_index].dependency_event_set
          == event_set_to_cancel)
      {
        log_dbg(
            "%s: event set id %d depends on this event_set_id (%d) - recursively cancelling with CancelEventSet()\n",
            __FUNCTION__, event_set_table[event_set_index].event_set_id,
            event_set_to_cancel);
        ret_val = CancelEventSetThreadSafe(
            event_set_table[event_set_index].event_set_id,
            cancel_dependent_events);

        /* Table can be modified, start over */
        event_set_index = 0;
      }
    }
  }

  /* Find the event set in the table */
  for (event_set_index = 0; event_set_index < MAX_EVENT_SETS; event_set_index++)
  {
    if (event_set_table[event_set_index].event_set_id == EVENT_SET_ID_INVALID)
    {
      dbg_msg("%s: Unable to find event_set_id %d in table - returning FALSE\n",
              __FUNCTION__, event_set_id);
      return FALSE;
    }

    if (event_set_table[event_set_index].event_set_id == event_set_to_cancel)
      break;
  }

  /* Make sure we found the event set */
  if (event_set_index >= MAX_EVENT_SETS)
  {
    dbg_msg("%s: Unable to find event_set_id %d in table - returning FALSE\n",
            __FUNCTION__, event_set_id);
    return FALSE;
  }

  /* If the event set is executing, we can't cancel this occurrence - we can cancel any recurrence though */
  if (event_set_table[event_set_index].executing_index)
  {
    if (event_set_table[event_set_index].recurring)
    {
      log_dbg(
          "%s: Event set id %d is executing - canceling future recurrence\n",
          __FUNCTION__, event_set_table[event_set_index].event_set_id);
      /* Since this recurring event is executing, we can't remove it from the table. But we can clear the recurrence
       flag so that after executing, it will not get scheduled again. */
      event_set_table[event_set_index].recurring = FALSE;
      return TRUE;
    }
    else
    {
      log_dbg("%s: Event set id %d is executing - UNABLE TO CANCEL\n",
              __FUNCTION__, event_set_table[event_set_index].event_set_id);
      return FALSE;
    }
  }

  /* Cleanup before delete it */
  CleanUpEventSet(event_set_index);

  /* If this is the next event set to expire, we need to do update the
   event set times and restart the timer */
  if (event_set_index == 0)
  {
    /* Cancel any running timers while we cancel this event - we'll restart it later */
    CancelEventTimer();

    /* If the table is not empty, we can start the timer */
    entry_index = GetFirstEventIndex();

    dbg_msg("%s: Process event_set_table[%d] to set a timer\n", __FUNCTION__,
            entry_index);
    if ((entry_index >= 0)
        && (event_set_table[entry_index].event_set_id != EVENT_ID_INVALID))
    {
      time_t cur_time;

      switch (event_set_table[entry_index].timer_type)
      {
        case EVENT_TIMER_DATE_TIME:
          cur_time = linux_time(NULL);
          break;
        case EVENT_TIMER_RTC:
        default:
          cur_time = GetRTC();
          if (cur_time == 0)
            cur_time = linux_time(NULL);
          break;
      }

      if (event_set_table[entry_index].next_run_time > cur_time)
      {
        struct itimerval new_tv;
        memset(&new_tv, 0, sizeof(new_tv));
        new_tv.it_value.tv_sec = event_set_table[entry_index].next_run_time
            - cur_time;

        StartEventTimer(new_tv);
      }
      else
      {
        /* In case we do get here, the next event set is already expired so
         lets process it */
        dbg_msg("%s: Timer in slot %d expired - setting timer_expired!!!\n",
                __FUNCTION__, entry_index);
        timer_expired = TRUE;
      }
    }
  }

  return ret_val;
}

bool CancelEventSet(event_set_id_t event_set_id, bool cancel_dependent_events)
{
  bool ret_val = TRUE;

  if (event_set_id == EVENT_SET_ID_INVALID)
  {
    dbg_err(
        "%s: EVENT_SET_ID_INVALID (%d) is not a valid ID to cancel - returning FALSE\n",
        __FUNCTION__, event_set_id);
    return FALSE;
  }

  /* Lets lock the table mutex since we are modifying it */
  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  ret_val = CancelEventSetThreadSafe(event_set_id, cancel_dependent_events);

  SaveEventSetTable();

  /* Lets unlock the table mutex since we are finished modifying it */
  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  return ret_val;
}

vhq_result_t CancelEventSetByOpId(uint32 opSetId)
{
  int event_set_index;
  int num_op_sets, op_sets_cancelled;
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_CANCEL_OP_ERROR;

  /* Find the event set in the table */
  num_op_sets = op_sets_cancelled = 0;
  for (event_set_index = 0; event_set_index < MAX_EVENT_SETS; event_set_index++)
  {
    if (event_set_table[event_set_index].operation_set_id == opSetId)
    {
      num_op_sets++;
      log_dbg(
          "%s: Found opSetId (%d) in slot %d - Cancelling event_set_id %d\n",
          __FUNCTION__, opSetId, event_set_index,
          event_set_table[event_set_index].event_set_id);
      if (!CancelEventSet(event_set_table[event_set_index].event_set_id, FALSE))
      {
        log_err("%s ERROR: Failed to cancel event_set_id %d\n", __FUNCTION__,
                event_set_table[event_set_index].event_set_id);
      }
      else
      {
        op_sets_cancelled++;
      }
    }
  }

  if (num_op_sets > 0)
  {
    if (op_sets_cancelled == num_op_sets)
    {
      /* All op sets found were cancelled */
      ret_val = VHQ_SUCCESS;
    }
    else if (op_sets_cancelled > 0)
    {
      /* Not all op sets found were cancelled - only some were cancelled successfully */
      ret_val = VHQ_SERVER_MGMT_PLAN_CANCEL_OP_PARTIAL;
      log_dbg("%s: %d of %d OperationSets Cancelled\n", __FUNCTION__,
              op_sets_cancelled, num_op_sets);
    }
  }
  else
  {
    log_err("%s ERROR: Operation Set ID %d not found\n", __FUNCTION__, opSetId);
    ret_val = VHQ_SERVER_MGMT_PLAN_CANCEL_OP_OP_SET_ID_NOT_FOUND;
  }

  return ret_val;
}

uint32 GetInitialTimerVal(void)
{
  return _initial_timer_val;
}

void LockEventScheduler(bool lock)
{
  pthread_mutex_lock(&scheduler_lock_mutex);
  _event_scheduler_locked = lock;
  pthread_cond_signal(&scheduler_lock_cond);
  pthread_mutex_unlock(&scheduler_lock_mutex);
}

bool FileRequiredByEvent(char *fn)
{
  bool ret_val = FALSE;
  int event_set_index;

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  for (event_set_index = 0; event_set_index < MAX_EVENT_SETS; event_set_index++)
  {
    if ((event_set_table[event_set_index].event_set_id != EVENT_ID_INVALID)
        && (event_set_table[event_set_index].event_data_p))
    {
      int event_index;

      for (event_index = 0;
          event_index < event_set_table[event_set_index].num_events;
          event_index++)
      {
        if (event_set_table[event_set_index].event_data_p[event_index].eCallback
            == cbLaunchDownloader)
        {
          char event_temp_dl_file[256];
          char event_filename_copy[256];
          char *pszBaseName;

          memset(event_temp_dl_file, 0, sizeof(event_temp_dl_file));
          memset(event_filename_copy, 0, sizeof(event_filename_copy));

          strcpy(
              event_filename_copy,
              event_set_table[event_set_index].event_data_p[event_index]
                  .sCallbackData.downloader_parms.dl_file_content.FileName);
          pszBaseName = os_basename(event_filename_copy);

          /* This is a download event so lets see if the file is for this event */
          sprintf(
              event_temp_dl_file,
              "%s.%d.%d.%s",
              pszBaseName,
              event_set_table[event_set_index].event_data_p[event_index]
                  .sCallbackData.downloader_parms.comm_id,
              event_set_table[event_set_index].event_data_p[event_index]
                  .sCallbackData.downloader_parms.message_id,
              event_set_table[event_set_index].event_data_p[event_index]
                  .sCallbackData.downloader_parms.operation.OpId);

          /* If this is a partial file, add the extension */
          if (strstr(fn, PARTIAL_FILE_EXTENSION) != NULL)
          {
            log_dbg(
                "%s: This IS a partial download file - adding %s extension\n",
                __FUNCTION__, PARTIAL_FILE_EXTENSION);
            strcat(event_temp_dl_file, PARTIAL_FILE_EXTENSION);
          }

          dbg_msg("%s: Comparing %s to still required event file %s\n",
                  __FUNCTION__, fn, event_temp_dl_file);
          if (strcmp(fn, event_temp_dl_file) == 0)
          {
            dbg_msg("%s: Event %d of EventSet %d still requires %s\n",
                    __FUNCTION__, event_index, event_set_index,
                    event_temp_dl_file);
            ret_val = TRUE;
          }
        }
      }

    }
  }

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  return ret_val;
}

bool DownloadOpSetInProgress(void)
{
  int i;

  for (i = 0; i < MAX_CONCURRENT_EVENTS; i++)
  {
    if ((running_events[i].eCallback == cbLaunchDownloader)
        && (running_events[i].in_use)
        && (running_events[i].status == EVENT_RUNNING))
    {
      log_notice(
          "%s: EventSet at index %d in set is a download - and it is running so return TRUE\n",
          __FUNCTION__, running_events[i].event_id,
          running_events[i].event_set_id);
      return TRUE;
    }
  }

  return FALSE;
}


char* GetOperationIdForEvent(int event_set_index, int event_index)
{
  char *ret_val = NULL;

  if (event_set_table[event_set_index].event_data_p)
  {
    if (event_index < event_set_table[event_set_index].num_events)
    {
      switch (event_set_table[event_set_index].event_data_p[event_index]
          .eCallback)
      {
        case cbLaunchDownloader:
          ret_val = event_set_table[event_set_index].event_data_p[event_index]
              .sCallbackData.downloader_parms.operation.OpId;
          break;
        case cbGetDiagDataProcessor:
        case cbGetDataProcessor:
          ret_val = event_set_table[event_set_index].event_data_p[event_index]
              .sCallbackData._get_data_parms.operation.OpId;
          break;
        case cbSetDataProcessor:
          ret_val = event_set_table[event_set_index].event_data_p[event_index]
              .sCallbackData._set_data_parms.operation.OpId;
          break;
        case cbTerminalAction:
          ret_val = event_set_table[event_set_index].event_data_p[event_index]
              .sCallbackData.action_parms.operation.OpId;
          break;
        case cbFileUploader:
          ret_val = event_set_table[event_set_index].event_data_p[event_index]
              .sCallbackData.ul_parms.operation.OpId;
          break;
        case cbAppActionProcessor:
          ret_val = event_set_table[event_set_index].event_data_p[event_index]
              .sCallbackData._app_action_parms.operation.OpId;
          break;
        case cbDelFileProcessor:
          ret_val = event_set_table[event_set_index].event_data_p[event_index]
              .sCallbackData._del_file_parms.operation.OpId;
          break;
        case cbGetParamUpdatesProcessor:
        case cbDeviceEventProcessor:
          ret_val = event_set_table[event_set_index].event_data_p[event_index]
              .sCallbackData._device_event_parms.operation.OpId;
          break;

        case cbHeartbeat:
        default:
          DebugMsg(
              VHQ_LOGGING_LEVEL_DEBUG,
              "%s: No OpID to return for callback type %d\n",
              __FUNCTION__,
              event_set_table[event_set_index].event_data_p[event_index]
                  .eCallback);
          break;
      }
    }
  }

  return ret_val;
}

void SetCompleteFlag(uint32 opSetId, char *OpId, bool continuation_required,
                     bool event_failed)
{
  int event_set_index;

  /* Certain cases like downloads will never return since they can reboot the device.  This will allow
   the individual operations to clear their "executing" flag when this is the case.  That will allow
   event scheduler to always resume where it left off by finding "executing" operations and just
   restarting them */

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  /* The information passed didn't match what we expected - lets search for this event */
  for (event_set_index = 0; event_set_index < MAX_EVENT_SETS; event_set_index++)
  {
    if (event_set_table[event_set_index].operation_set_id == opSetId)
    {
      int operation_index;
      if (event_set_table[event_set_index].event_data_p)
      {
        dbg_msg("%s: Found opSetId (%d) in slot %d - looking for OpId %s\n",
                __FUNCTION__, opSetId, event_set_index, OpId);
        for (operation_index = 0;
            operation_index < event_set_table[event_set_index].num_events;
            operation_index++)
        {
          char *temp_OpId = GetOperationIdForEvent(event_set_index,
                                                   operation_index);

          if ((event_set_table[event_set_index].event_data_p[operation_index]
              .eCallback == cbHeartbeat)
              || ((temp_OpId != NULL) && (strcmp(temp_OpId, OpId) == 0)))
          {
            if (continuation_required)
            {
              event_set_table[event_set_index].event_data_p[operation_index]
                  .executing |= COMPLETE_CONTINUATION_REQ_MASK;
              log_dbg(
                  "%s: Operation Id %s is finished - setting COMPLETE_CONTINUATION_REQ_MASK (event_set_id = %d, event_index = %d, executing = %d)\n",
                  __FUNCTION__,
                  OpId,
                  event_set_table[event_set_index].event_set_id,
                  operation_index,
                  event_set_table[event_set_index].event_data_p[operation_index]
                      .executing);
            }
            else
            {
              event_set_table[event_set_index].event_data_p[operation_index]
                  .executing |= COMPLETE_MASK;
              log_dbg(
                  "%s: Operation Id %s is finished - setting COMPLETE_MASK (event_set_id = %d, event_index = %d, executing = %d)\n",
                  __FUNCTION__,
                  OpId,
                  event_set_table[event_set_index].event_set_id,
                  operation_index,
                  event_set_table[event_set_index].event_data_p[operation_index]
                      .executing);
            }

            if (event_failed)
            {
              event_set_table[event_set_index].event_data_p[operation_index]
                  .executing |= EVENT_FAILED_MASK;
              log_dbg(
                  "%s: Operation Id %s is finished - setting EVENT_FAILED_MASK (event_set_id = %d, event_index = %d, executing = %d)\n",
                  __FUNCTION__,
                  OpId,
                  event_set_table[event_set_index].event_set_id,
                  operation_index,
                  event_set_table[event_set_index].event_data_p[operation_index]
                      .executing);
            }
          }
        }
      }
    }
  }

  SaveEventSetTable();

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
}

char* GetApprovalMaskStr(uint32 approval_mask)
{
  if (approval_mask & CONTACT_SERVER_PRE_APPROVED)
  {
    return "CONTACT_SERVER_PRE_APPROVED";
  }
  else if (approval_mask & INSTALL_PRE_APPROVED)
  {
    return "INSTALL_PRE_APPROVED";
  }
  else if (approval_mask & REBOOT_PRE_APPROVED)
  {
    return "REBOOT_PRE_APPROVED";
  }
  else if (approval_mask & RESTART_APPS_PRE_APPROVED)
  {
    return "RESTART_APPS_PRE_APPROVED";
  }
  else
  {
    return "Unknown";
  }
}

void SetApprovalFlag(event_set_id_t event_set_id, event_id_t event_id,
                     uint32 approval_mask)
{
  int event_set_index;
  bool op_set_approved = FALSE;
  bool bAppApprovalPerOpSet = TRUE;

  VHQGetParameterBool(PARAM_APP_APPROVAL_PER_OPERATION_SET,
                      &bAppApprovalPerOpSet);

  /* If AppApprovalPerOpSet is set to FALSE no need of pre-approvals */
  if (bAppApprovalPerOpSet == FALSE)
  {
    dbg_msg(
        "%s: No need to set PRE-APPROVAL for (0x%08x) because AppApprovalPerOpSet is set to FALSE\n",
        __FUNCTION__, approval_mask);
    return;
  }

  /* For download operation sets with multiple downloads, the contact server approval and
   installation approval can apply to the entire operation set if configured to do so.  So
   we will store these approvals in the event set table so that we will remember them through
   power cycles and use the approvals approriately */

  /* Make sure the approval mask makes sense */
  if ((approval_mask != CONTACT_SERVER_PRE_APPROVED)
      && (approval_mask != INSTALL_PRE_APPROVED)
      && (approval_mask != REBOOT_PRE_APPROVED)
      && (approval_mask != RESTART_APPS_PRE_APPROVED))
  {
    log_err(
        "%s ERROR: Invalid approval_mask (0x%08x) - MUST BE 0x%08x, 0x%08x, 0x%08x or 0x%08x\n",
        __FUNCTION__, approval_mask, CONTACT_SERVER_PRE_APPROVED,
        INSTALL_PRE_APPROVED, REBOOT_PRE_APPROVED, RESTART_APPS_PRE_APPROVED);
    return;
  }

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  /* The information passed didn't match what we expected - lets search for this event */
  for (event_set_index = 0; event_set_index < MAX_EVENT_SETS; event_set_index++)
  {
    if (event_set_table[event_set_index].event_set_id == event_set_id)
    {
      int operation_index;
      if (event_set_table[event_set_index].event_data_p)
      {
        dbg_msg(
            "%s: Found event_set_id (%d) in slot %d - looking for event_id %d\n",
            __FUNCTION__, event_set_id, event_set_index, event_id);
        for (operation_index = 0;
            operation_index < event_set_table[event_set_index].num_events;
            operation_index++)
        {
          if (op_set_approved
              || (event_set_table[event_set_index].event_data_p[operation_index]
                  .event_id == event_id))
          {
            /* These pre-approvals only apply to downloads */
            if (event_set_table[event_set_index].event_data_p[operation_index]
                .eCallback == cbLaunchDownloader)
            {
              op_set_approved = TRUE;
              event_set_table[event_set_index].event_data_p[operation_index]
                  .sCallbackData.downloader_parms.dl_file_content.DownloadType |=
                  approval_mask;
              log_dbg(
                  "%s: event_id %d has been pre-approved - setting %s (event_set_id = %d, event_index = %d, executing = %d)\n",
                  __FUNCTION__,
                  event_id,
                  GetApprovalMaskStr(approval_mask),
                  event_set_table[event_set_index].event_set_id,
                  operation_index,
                  event_set_table[event_set_index].event_data_p[operation_index]
                      .executing);
            }
          }
        }
      }
    }
  }

  SaveEventSetTable();

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
}

bool GetApprovalFlag(uint32 opSetId, char *OpId, uint32 mask, bool *isLastOp)
{
  int event_set_index;

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  /* The information passed didn't match what we expected - lets search for this event */
  for (event_set_index = 0; event_set_index < MAX_EVENT_SETS; event_set_index++)
  {
    if (event_set_table[event_set_index].operation_set_id == opSetId)
    {
      int operation_index;

      if (event_set_table[event_set_index].event_data_p)
      {
        dbg_msg("%s: Found opSetId (%d) in slot %d - looking for OpId %s\n",
                __FUNCTION__, opSetId, event_set_index, OpId);
        for (operation_index = 0;
            operation_index < event_set_table[event_set_index].num_events;
            operation_index++)
        {
          char *temp_OpId = GetOperationIdForEvent(event_set_index,
                                                   operation_index);

          if ((temp_OpId != NULL) && (strcmp(temp_OpId, OpId) == 0))
          {
            /* These pre-approvals only apply to downloads */
            if (event_set_table[event_set_index].event_data_p[operation_index]
                .eCallback == cbLaunchDownloader)
            {
              if (mask & INSTALL_STATUS_REQUIRED)
              {
                if (INSTALL_PRE_APPROVED
                    & event_set_table[event_set_index].event_data_p[operation_index]
                        .sCallbackData.downloader_parms.dl_file_content
                        .DownloadType)
                {
                  /* Installs were pre-approved, so we only need to send the INSTALL_STATUS for the last Operation in the OpSet */
                  if ((isLastOp != NULL)
                      && ((operation_index + 1)
                          == event_set_table[event_set_index].num_events))
                  {
                    /* This is the last operation in the OpSet */
                    *isLastOp = TRUE;
                  }

                  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                  return TRUE;
                }
                else
                {
                  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                  return FALSE;
                }
              }
              else
              {
                if (mask
                    & event_set_table[event_set_index].event_data_p[operation_index]
                        .sCallbackData.downloader_parms.dl_file_content
                        .DownloadType)
                {
                  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                  return TRUE;
                }
                else
                {
                  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
                  return FALSE;
                }
              }
            }
          }
        }
      }
    }
  }

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  return FALSE;
}

bool GetExecutingIndex(uint32 opSetId, int *executing_index)
{
  bool ret_val = FALSE;
  int event_set_index = 0;

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  for (event_set_index = 0; event_set_index < MAX_EVENT_SETS; event_set_index++)
  {
    if ((event_set_table[event_set_index].operation_set_id == opSetId)
        && (executing_index != NULL))
    {
      *executing_index = (int) event_set_table[event_set_index].executing_index;
      ret_val = TRUE;
      break;
    }
  }

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  return ret_val;
}

void SetEventSchedulerTimerExpired(bool timer_exp_val)
{
#ifdef _VOS2
  if (timer_exp_val)
  {
    /* We need to send timer event to wake-up scheduler process */
    struct itimerval timer_1_second = { { 0, 0 }, { 0, 0 } };
    timer_1_second.it_value.tv_sec = 1;
    StartEventTimer(timer_1_second);
  }
#endif
  timer_expired = timer_exp_val;
}

void StartEventTimer(struct itimerval new_tv)
{
  /* Even though we set the wakeup time above, let's continue to setup a timer anyway */
  dbg_msg("%s: setting timeout for %lu seconds\n", __FUNCTION__,
          new_tv.it_value.tv_sec);
  setitimer(ITIMER_REAL, &new_tv, NULL);

#ifdef _VOS2
  int wkup_res;
  struct tm wakeup_time;
  /* In low power mode, we should make sure we use the sys_SetWakeupTime() API so
   that we get woken up from deep sleep state.  Note that we call a shared lib that
   wraps the actual API.  We do this due to versioning/compatibility issues in ADK-SYS */
  wkup_res = SetWakeupTime_Wrapper(new_tv, &wakeup_time);
  if (wkup_res == 0)
  {
    log_alert("%s: wakeup time set for %s\n", __FUNCTION__,
              tmtoa(&wakeup_time));
  }
  else
  {
    dbg_msg("%s: SetWakeupTime_Wrapper() failed with error %d\n", __FUNCTION__,
            wkup_res);
  }
#endif

}

bool EventSchedulerLock(int timeout)
{
#if EVENT_SCHED_THREAD_MODE
  int mut_ret_val;
  int timeout_sec;

  timeout_sec = timeout;
  if (timeout_sec < 0)
    timeout_sec = 0;

  while (timeout_sec >= 0)
  {
    mut_ret_val = pthread_mutex_trylock(&event_sched_lock_mutex);

    if (mut_ret_val == 0)
    {
      dbg_msg("%s: event scheduler was not locked - locked it\n", __FUNCTION__);
      return TRUE;
    }
    else if (mut_ret_val == EBUSY)
    {
      dbg_msg(
          "%s: event scheduler was already locked (retry, %d seconds left)\n",
          __FUNCTION__, timeout_sec);
    }
    else
    {
      dbg_err(
          "\n\n%s ERROR: error (%d)  locking mutex (waiting %d more seconds)!!!\n\n",
          __FUNCTION__, mut_ret_val, timeout_sec);
    }

    if (timeout_sec > 0)
    {
      /* Wait for running event threads to be completed */
      sleep(2);
    }
    timeout_sec--;
  }

  return FALSE;
#else
    return TRUE;
#endif
}

bool EventSchedulerUnlock(void)
{
#if EVENT_SCHED_THREAD_MODE
  int ret_val;

  ret_val = pthread_mutex_unlock(&event_sched_lock_mutex);

  if (ret_val == 0)
  {
    dbg_msg("%s: Unlocked event scheduler\n", __FUNCTION__);
    return TRUE;
  }
  else
  {
    dbg_err("\n\n%s ERROR: error (%d)  unlocking mutex!!!\n\n", __FUNCTION__,
            ret_val);
    return FALSE;
  }
#else
    return TRUE;
#endif
}

#define DEFAULT_WAIT (86400)

uint32 GetSecondsToNextEvent(bool include_running_event)
{
  time_t cur_time;
  int entry_index;
  event_set_table_t event_set;

  memset(&event_set, 0, sizeof(event_set_table_t));

  /* We can only be running a "run-now" event set or event set in slot 0 so if the event set in slot
   0 is not executing, we are running a "run-now" event and in slot 0 is the next event that will run */

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  /* If the table is not empty, we detect expired event */
  entry_index = GetFirstToRunEventIndex(include_running_event);

  memcpy(&event_set, &event_set_table[entry_index], sizeof(event_set_table_t));

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  dbg_notice(
      "%s: Process event_set_table[%d] to calculate seconds to next event\n",
      __FUNCTION__, entry_index);
  if (entry_index < 0)
    return DEFAULT_WAIT;

  if (event_set.event_set_id != EVENT_SET_ID_INVALID)
  {
    uint32 ret_val;

    switch (event_set.timer_type)
    {
      case EVENT_TIMER_DATE_TIME:
        cur_time = linux_time(NULL);
        break;
      case EVENT_TIMER_RTC:
      default:
        cur_time = GetRTC();
        if (cur_time == 0)
          cur_time = linux_time(NULL);
        break;
    }

    if (event_set.next_run_time > cur_time)
      ret_val = event_set.next_run_time - cur_time;
    else
      ret_val = 0;
    dbg_msg("%s: returning %u\n", __FUNCTION__, ret_val);
    return (ret_val);
  }
  else
  {
    /* We were told to check event set at index 1 because index 0 is finishing, but index 1 is not
     valid.  So let's see if index 0 is recurring */
    int i = 0;
    mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

    for (i = 0; i < MAX_EVENT_SETS; i++)
    {
      if ((event_set_table[i].event_set_id != EVENT_SET_ID_INVALID)
          && (event_set_table[i].recurring))
      {
        dbg_msg(
            "%s: event_set_table[%d] is only entry and is recurring - returning recur_period %u\n",
            __FUNCTION__, i, event_set_table[i].recur_period);
        mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
        return (event_set_table[i].recur_period);
      }
    }

    mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

    dbg_msg("%s: returning %d\n", __FUNCTION__, DEFAULT_WAIT);
    return DEFAULT_WAIT;
  }
}

#endif //VHQ_EVENT_DECODER

#if EVENT_SCHED_THREAD_MODE

static time_t GetWatchdogExpireTime(int running_event_index)
{
  /* default to return 0 */
  time_t ret_val = 0;

  if ((running_event_index < 0)
      || (running_event_index >= MAX_CONCURRENT_EVENTS))
  {
    dbg_err("\n\n%s ERROR: INVALID index %d\n\n", __FUNCTION__,
            running_event_index);
    return ret_val;
  }

  /* Lock the WD Counter Mutex before any modifications */
  if (pthread_mutex_lock(&running_events[running_event_index].wd_mutex) != 0)
  {
    dbg_err("\n\n%s ERROR: could not lock mutex!!!\n\n", __FUNCTION__);
  }

  ret_val = running_events[running_event_index].expire_time;

  /* Unlock the WD Counter Mutex before any modifications */
  if (pthread_mutex_unlock(&running_events[running_event_index].wd_mutex) != 0)
  {
    dbg_err("\n\n%s ERROR: could not lock mutex!!!\n\n", __FUNCTION__);
  }

  return ret_val;
}

#endif

void EventSchedulerPetWatchdog(event_set_id_t event_set_id, event_id_t event_id)
{
#if EVENT_SCHED_THREAD_MODE
  int event_running_slot;

  if ((event_set_id == EVENT_SET_ID_INVALID)
      || (event_set_id == EVENT_SET_ID_UNKNOWN)
      || (event_id == EVENT_ID_INVALID) || (event_id == EVENT_ID_UNKNOWN))
  {
    /* If we don't have a valid event_set_id or event_id, we shouldn't do anything.  Note that
     this is not necessarily an error because there will be cases where we won't have this
     information */
    return;
  }

  event_running_slot = EventIsRunning(event_set_id, event_id);
  if (event_running_slot == -1)
  {
    log_err("\n\n%s ERROR: event_set_id %d, event_id %d IS NOT RUNNING\n\n",
            __FUNCTION__, event_set_id, event_id);
    return;
  }
  else
  {
    uint32 wd_time;
    VHQGetParameterUint32(PARAM_EVENT_WATCHDOG_TIME, &wd_time, DEFAULT_BASE);

    /* Lock the WD Counter Mutex before any modifications */
    if (pthread_mutex_lock(&running_events[event_running_slot].wd_mutex) != 0)
    {
      dbg_err("\n\n%s ERROR: could not lock mutex!!!\n\n", __FUNCTION__);
      return;
    }

    running_events[event_running_slot].expire_time = GetRTC() + wd_time;
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: expire_time for running_events[%d] extended to %lu\n", __FUNCTION__, event_running_slot, running_events[event_running_slot].expire_time);

    /* Unlock the WD Counter Mutex before any modifications */
    if (pthread_mutex_unlock(&running_events[event_running_slot].wd_mutex) != 0)
    {
      dbg_err("\n\n%s ERROR: could not unlock mutex!!!\n\n", __FUNCTION__);
    }
  }
#endif
}


time_t GetEventExpiryTime(event_set_id_t event_set_id, event_timer_t timer_type)
{
  time_t expiry_date = 0;
  int event_set_index = 0;

  if ((event_set_id == EVENT_SET_ID_INVALID)
      || (event_set_id == EVENT_SET_ID_UNKNOWN))
  {
    /* If we don't have a valid event_set_id, we shouldn't do anything.  Note that
     this is not necessarily an error because there will be cases where we won't have this
     information */
    return expiry_date;
  }

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  for (event_set_index = 0; event_set_index < MAX_EVENT_SETS; event_set_index++)
  {
    if (event_set_table[event_set_index].event_set_id == EVENT_SET_ID_INVALID)
    {
      break;
    }
    else if (event_set_table[event_set_index].event_set_id == event_set_id)
    {
      if (event_set_table[event_set_index].expiration_date != 0)
      {
        if (timer_type == event_set_table[event_set_index].timer_type)
        {
          expiry_date = event_set_table[event_set_index].expiration_date;
        }
        else
        {
          if (timer_type == EVENT_TIMER_RTC)
            expiry_date = event_set_table[event_set_index].expiration_date
                - GetRTC() + linux_time(NULL);
          else if (timer_type == EVENT_TIMER_DATE_TIME)
            expiry_date = event_set_table[event_set_index].expiration_date
                - linux_time(NULL) + GetRTC();
        }
      }
      break;
    }
  }

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);
  return expiry_date;
}

bool ClearInstanceEventSetsTable(char *serverInstance,
                                 bool isForKeysExchangeReset)
{
  int event_set_index;
  bool retval = TRUE;

  /* Make sure the serverInstance is valid */
  if (serverInstance == NULL)
  {
    dbg_err("%s ERROR: Invalid serverInstance - MUST be non-NULL\n",
            __FUNCTION__);
    return FALSE;
  }

  mutex_xlock(TRUE, "event_table_mutex", &event_table_mutex);

  for (event_set_index = 0; event_set_index < MAX_EVENT_SETS; event_set_index++)
  {
    if (event_set_table[event_set_index].event_set_id != EVENT_SET_ID_INVALID)
    {
      /* Find the correct server instance and clear it */
      if (strcmp(event_set_table[event_set_index].server_instance,
                 serverInstance) == 0)
      {
        event_set_id_t HeartbeatEventID = EVENT_SET_ID_INVALID;
        int i;

        /* Keys have to be exchanged, already existed events are not required for this instance anymore */
        if (isForKeysExchangeReset)
        {
          /* We can't remove currently active event, check next for targeted instance */
          if (event_set_table[event_set_index].executing_index)
          {
            dbg_msg(
                "%s: Active event detected at %d, we can't remove active event.\n",
                __FUNCTION__, event_set_index);
            retval = FALSE;
            continue;
          }
        }

        /* Remove event */
        dbg_msg(
            "%s: Found server_instance (%s) in slot %d - removing event set\n",
            __FUNCTION__, serverInstance, event_set_index);

        HeartbeatEventID = GetHeartBeatEventID(serverInstance);
        if (HeartbeatEventID == event_set_table[event_set_index].event_set_id)
        {
          DeleteHeartBeatEventID(serverInstance);
        }

        /* Free the event_data_p memory associated with this event set */
        if (event_set_table[event_set_index].event_data_p)
        {
          free(event_set_table[event_set_index].event_data_p);
          event_set_table[event_set_index].event_data_p = NULL;
        }

        /* Just move everything else in the table up a slot */
        for (i = event_set_index; i < MAX_EVENT_SETS - 1; i++)
        {
          memcpy(&event_set_table[i], &event_set_table[i + 1],
                 sizeof(event_set_table_t));
        }

        /* Clear the last entry in the table now that it is free */
        memset(&event_set_table[MAX_EVENT_SETS - 1], 0,
               sizeof(event_set_table_t));
        event_set_table[MAX_EVENT_SETS - 1].event_set_id = EVENT_SET_ID_INVALID;

        /* Since we moved everything up a slot we need to check the same index again so subtract 1 from event_set_index */
        event_set_index--;
      }
    }
  }

  SaveEventSetTable();

  mutex_xlock(FALSE, "event_table_mutex", &event_table_mutex);

  return retval;
}


void ClearEventsTable(void)
{
  /* We can't interact with events table before we read it */
  if (EventSchedulerInitialized())
  {
    log_alert("%s: remove events inside of instance and request registration\n",
              __FUNCTION__);
    /* ADKTMS-2243: When we remove keys, we need to remove any events associated with the server instance
     we are removing keys for since they are no longer applicable */
    ClearInstanceEventSetsTable(GetCurrentInstance(), TRUE);
    /* We have removed keys, more likely URL or CustomerID was changed */
    ResetServerNONCE();
    /* Move device into registration state if required */
    RequestDeviceRegistrationMode();
  }
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
