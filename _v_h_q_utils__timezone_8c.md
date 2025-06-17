---
title: tmsagt/src/VHQUtils/VHQUtils_timezone.c

---

# tmsagt/src/VHQUtils/VHQUtils_timezone.c

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[tzhead](structtzhead.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[convert](_v_h_q_utils__timezone_8c.md#function-convert)**(const long val, char * buf) |
| void | **[convert64](_v_h_q_utils__timezone_8c.md#function-convert64)**(const long val, char *const buf) |
| void | **[puttzcode](_v_h_q_utils__timezone_8c.md#function-puttzcode)**(const long val, FILE *const fp) |
| void | **[puttzcode64](_v_h_q_utils__timezone_8c.md#function-puttzcode64)**(const long val, FILE *const fp) |
| long | **[eitol](_v_h_q_utils__timezone_8c.md#function-eitol)**(const int i) |
| long | **[calculate_ofsset](_v_h_q_utils__timezone_8c.md#function-calculate-ofsset)**(const char * data) |
| long | **[rpytime](_v_h_q_utils__timezone_8c.md#function-rpytime)**(int r_month, int r_week, int r_wday, long r_tod, const int wantedy) |
| long | **[calculate_rpytime](_v_h_q_utils__timezone_8c.md#function-calculate-rpytime)**(const char * start_end, const int wantedy) |
| vhq_result_t | **[VHQWriteZone](_v_h_q_utils__timezone_8c.md#function-vhqwritezone)**(const char * string, const int year) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TZ_MAGIC](_v_h_q_utils__timezone_8c.md#define-tz-magic)**  |
|  | **[ZIC_VERSION](_v_h_q_utils__timezone_8c.md#define-zic-version)**  |
|  | **[TZ_MAX_ZONES](_v_h_q_utils__timezone_8c.md#define-tz-max-zones)**  |
|  | **[DST_MAX_ENTR](_v_h_q_utils__timezone_8c.md#define-dst-max-entr)**  |
|  | **[TM_SUNDAY](_v_h_q_utils__timezone_8c.md#define-tm-sunday)**  |
|  | **[TM_MONDAY](_v_h_q_utils__timezone_8c.md#define-tm-monday)**  |
|  | **[TM_TUESDAY](_v_h_q_utils__timezone_8c.md#define-tm-tuesday)**  |
|  | **[TM_WEDNESDAY](_v_h_q_utils__timezone_8c.md#define-tm-wednesday)**  |
|  | **[TM_THURSDAY](_v_h_q_utils__timezone_8c.md#define-tm-thursday)**  |
|  | **[TM_FRIDAY](_v_h_q_utils__timezone_8c.md#define-tm-friday)**  |
|  | **[TM_SATURDAY](_v_h_q_utils__timezone_8c.md#define-tm-saturday)**  |
|  | **[SECSPERMIN](_v_h_q_utils__timezone_8c.md#define-secspermin)**  |
|  | **[MINSPERHOUR](_v_h_q_utils__timezone_8c.md#define-minsperhour)**  |
|  | **[HOURSPERDAY](_v_h_q_utils__timezone_8c.md#define-hoursperday)**  |
|  | **[DAYSPERWEEK](_v_h_q_utils__timezone_8c.md#define-daysperweek)**  |
|  | **[DAYSPERNYEAR](_v_h_q_utils__timezone_8c.md#define-dayspernyear)**  |
|  | **[DAYSPERLYEAR](_v_h_q_utils__timezone_8c.md#define-daysperlyear)**  |
|  | **[SECSPERHOUR](_v_h_q_utils__timezone_8c.md#define-secsperhour)**  |
|  | **[SECSPERDAY](_v_h_q_utils__timezone_8c.md#define-secsperday)**  |
|  | **[SECSPERWEEK](_v_h_q_utils__timezone_8c.md#define-secsperweek)**  |
|  | **[MONSPERYEAR](_v_h_q_utils__timezone_8c.md#define-monsperyear)**  |

## Detailed Description


Main Time Zone settings operations 


## Functions Documentation

### function convert

```cpp
static void convert(
    const long val,
    char * buf
)
```


### function convert64

```cpp
static void convert64(
    const long val,
    char *const buf
)
```


### function puttzcode

```cpp
static void puttzcode(
    const long val,
    FILE *const fp
)
```


### function puttzcode64

```cpp
static void puttzcode64(
    const long val,
    FILE *const fp
)
```


### function eitol

```cpp
static long eitol(
    const int i
)
```


### function calculate_ofsset

```cpp
static long calculate_ofsset(
    const char * data
)
```


**Parameters**: 

  * **data** = pointer to sting with like "-2:30" time representation.


**Return**: seconds with inverted sign. 

This function converts text string into seconds. 


### function rpytime

```cpp
static long rpytime(
    int r_month,
    int r_week,
    int r_wday,
    long r_tod,
    const int wantedy
)
```


**Parameters**: 

  * **r_month** = day of month 
  * **r_week** = week num 
  * **r_wday** = day of week 
  * **r_tod** = time of day 
  * **wantedy** = year, 2017 for example.


**Return**: time in seconds since 1970, like 1495244280. 

This function calculates seconds since 1970 based on year, month num, week num, day of week, time of day. 


### function calculate_rpytime

```cpp
static long calculate_rpytime(
    const char * start_end,
    const int wantedy
)
```


**Parameters**: 

  * **start_end** = pointer to sting with like "M11.1.0/0:01" switch time representation.


**Return**: seconds with inverted sign, result of rpytime(). 

This function provides upper interface for rpytime() call. 


### function VHQWriteZone

```cpp
vhq_result_t VHQWriteZone(
    const char * string,
    const int year
)
```


**Parameters**: 

  * **string** = pointer to Linux TZ variable value 
  * **year** = this year will consist of correct DST switching dates, for Linux.


**Return**: VHQ_SUCCESS, if success. 

This function performs all activity to setup time zone for device. 




## Macros Documentation

### define TZ_MAGIC

```cpp
#define TZ_MAGIC "TZif"
```


### define ZIC_VERSION

```cpp
#define ZIC_VERSION '2'
```


### define TZ_MAX_ZONES

```cpp
#define TZ_MAX_ZONES 2
```


### define DST_MAX_ENTR

```cpp
#define DST_MAX_ENTR 4
```


### define TM_SUNDAY

```cpp
#define TM_SUNDAY 0
```


### define TM_MONDAY

```cpp
#define TM_MONDAY 1
```


### define TM_TUESDAY

```cpp
#define TM_TUESDAY 2
```


### define TM_WEDNESDAY

```cpp
#define TM_WEDNESDAY 3
```


### define TM_THURSDAY

```cpp
#define TM_THURSDAY 4
```


### define TM_FRIDAY

```cpp
#define TM_FRIDAY 5
```


### define TM_SATURDAY

```cpp
#define TM_SATURDAY 6
```


### define SECSPERMIN

```cpp
#define SECSPERMIN 60
```


### define MINSPERHOUR

```cpp
#define MINSPERHOUR 60
```


### define HOURSPERDAY

```cpp
#define HOURSPERDAY 24
```


### define DAYSPERWEEK

```cpp
#define DAYSPERWEEK 7
```


### define DAYSPERNYEAR

```cpp
#define DAYSPERNYEAR 365
```


### define DAYSPERLYEAR

```cpp
#define DAYSPERLYEAR 366
```


### define SECSPERHOUR

```cpp
#define SECSPERHOUR (SECSPERMIN * MINSPERHOUR)
```


### define SECSPERDAY

```cpp
#define SECSPERDAY ((long) SECSPERHOUR * HOURSPERDAY)
```


### define SECSPERWEEK

```cpp
#define SECSPERWEEK ((long) SECSPERDAY * DAYSPERWEEK)
```


### define MONSPERYEAR

```cpp
#define MONSPERYEAR 12
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#include "VHQConfig.h"
#include "VHQDebug.h"
#include "VHQFileNames.h"
#include "VHQUtils.h"
#include <errno.h>

struct tzhead
{
  char tzh_magic[4]; /* TZ_MAGIC */
  char tzh_version[1]; /* '\0' or '2' as of 2005 */
  char tzh_reserved[15]; /* reserved--must be zero */
  char tzh_ttisgmtcnt[4]; /* coded number of trans. time flags */
  char tzh_ttisstdcnt[4]; /* coded number of trans. time flags */
  char tzh_leapcnt[4]; /* coded number of leap seconds */
  char tzh_timecnt[4]; /* coded number of transition times */
  char tzh_typecnt[4]; /* coded number of local time types */
  char tzh_charcnt[4]; /* coded number of abbr. chars */
};

#define TZ_MAGIC     "TZif"
#define ZIC_VERSION  '2'

#define TZ_MAX_ZONES  2
#define DST_MAX_ENTR  4

#define TM_SUNDAY     0
#define TM_MONDAY     1
#define TM_TUESDAY    2
#define TM_WEDNESDAY  3
#define TM_THURSDAY   4
#define TM_FRIDAY     5
#define TM_SATURDAY   6

#define SECSPERMIN    60
#define MINSPERHOUR   60
#define HOURSPERDAY   24
#define DAYSPERWEEK   7
#define DAYSPERNYEAR  365
#define DAYSPERLYEAR  366
#define SECSPERHOUR   (SECSPERMIN * MINSPERHOUR)
#define SECSPERDAY    ((long) SECSPERHOUR * HOURSPERDAY)
#define SECSPERWEEK   ((long) SECSPERDAY * DAYSPERWEEK)
#define MONSPERYEAR   12

/*---------------------------------------------------------------------------------------------------------------*/
static void convert(const long val, char *buf)
{
  int i;
  int shift;

  for (i = 0, shift = 24; i < 4; ++i, shift -= 8)
    buf[i] = val >> shift;
}

static void convert64(const long val, char *const buf)
{
  int i;
  int shift;

  for (i = 0, shift = 56; i < 8; ++i, shift -= 8)
    buf[i] = val >> shift;
}

static void puttzcode(const long val, FILE *const fp)
{
  char buf[4];

  convert(val, buf);
  (void) fwrite((void*) buf, (size_t) sizeof buf, (size_t) 1, fp);
}

static void puttzcode64(const long val, FILE *const fp)
{
  char buf[8];

  convert64(val, buf);
  (void) fwrite((void*) buf, (size_t) sizeof buf, (size_t) 1, fp);
}
static long eitol(const int i)
{
  long l;

  l = i;
  if ((i < 0 && l >= 0) || (i == 0 && l != 0) || (i > 0 && l <= 0))
    dbg_err("%s: can't process %ld\n", __FUNCTION__, i);
  return l;
}
/*----------------------------------------- above code form a ZIC tool ------------------------------------------*/


static long calculate_ofsset(const char *data)
{
  bool isNegative = FALSE;
  long secs = 0;
  int i_hours = 0;
  int i_minutes = 0;

  if (*data == '-')
  {
    isNegative = TRUE;
    data++;
  }
  sscanf(data, "%d:%d", &i_hours, &i_minutes);
  dbg_msg("%s: i_hours = %d, i_minutes = %d\n", __FUNCTION__, i_hours,
          i_minutes);

  secs = i_hours * 60 * 60 + i_minutes * 60;

  if (isNegative)
    return secs;
  else
    return -secs;
}


static long rpytime(int r_month, int r_week, int r_wday, long r_tod,
                    const int wantedy)
{
  time_t rawtime;
  time_t time_of_first_month_day;
  time_t time_of_first_secondmonth_day;
  time_t time_of_day_of_week;
  int wday_of_time_of_first_month_day;
  struct tm timeinfo;

  /* Get timestamp and day of week for current month */
  linux_gmtime(&rawtime, &timeinfo);
  timeinfo.tm_year = wantedy - 1900;
  timeinfo.tm_mon = r_month - 1;
  timeinfo.tm_mday = 1;
  timeinfo.tm_sec = 0;
  timeinfo.tm_min = 0;
  timeinfo.tm_hour = 0;
  linux_mktime(&timeinfo);
  /* Process timestamp in raw UTC format */
  time_of_first_month_day = convert_tm_to_time_t(&timeinfo);
  wday_of_time_of_first_month_day = timeinfo.tm_wday;

  /* Get timestamp of next month begin */
  linux_gmtime(&rawtime, &timeinfo);
  if (r_month == 12)
  {
    timeinfo.tm_year = wantedy - 1900 + 1;
    timeinfo.tm_mon = 0;
  }
  else
  {
    timeinfo.tm_year = wantedy - 1900;
    timeinfo.tm_mon = r_month;
  }
  timeinfo.tm_mday = 1;
  timeinfo.tm_sec = 0;
  timeinfo.tm_min = 0;
  timeinfo.tm_hour = 0;
  linux_mktime(&timeinfo);
  /* Process timestamp in raw UTC format */
  time_of_first_secondmonth_day = convert_tm_to_time_t(&timeinfo);

  /*  */
  time_of_day_of_week = time_of_first_month_day
      - wday_of_time_of_first_month_day * SECSPERDAY;
  time_of_day_of_week += r_wday * SECSPERDAY;

  /* Roll-out first not completed week, if any */
  if (time_of_day_of_week < time_of_first_month_day)
    time_of_day_of_week += SECSPERWEEK;

  for (; r_week - 1; --r_week)
  {
    if (time_of_day_of_week + SECSPERWEEK < time_of_first_secondmonth_day)
      time_of_day_of_week += SECSPERWEEK;
    else
      break;
  }

  dbg_msg("%s: rpytime = %ld\n", __FUNCTION__, time_of_day_of_week + r_tod);
  return time_of_day_of_week + r_tod;
}


static long calculate_rpytime(const char *start_end, const int wantedy)
{
  int r_month = 0;
  int r_week = 0;
  int r_wday = 0;
  int fmt = 0;
  long r_tod = 0;
  char tod[TZ_MAX_CHARS] = { 0 };

  /*
   * Parse M11.1.0/0:01
   * More info at:
   *   https://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html
   */
  fmt = sscanf(start_end, "M%d.%d.%d/%s", &r_month, &r_week, &r_wday, tod);

  if (fmt < 3)
    return 0;

  if (strlen(tod))
  {
    int hours = 0;
    int minutes = 0;
    sscanf(tod, "%d:%d", &hours, &minutes);
    r_tod = hours * SECSPERHOUR + minutes * SECSPERMIN;
  }
  /* Most countries use 2AM to switch to/from DST. This value is used in case if not mentioned inside of start_end string */
  if (!r_tod)
    r_tod = 7200;
  dbg_msg(
      "%s: wantedy = %d, r_month = %d, week = %d, r_wday = %d, tod = %s (%ld)\n",
      __FUNCTION__, wantedy, r_month, r_week, r_wday, tod, r_tod);
  return rpytime(r_month, r_week, r_wday, r_tod, wantedy);
}


vhq_result_t VHQWriteZone(const char *string, const int year)
{
  char head[TZ_MAX_CHARS] = { 0 };
  char st[TZ_MAX_CHARS] = { 0 };
  char st_offset[TZ_MAX_CHARS] = { 0 };
  char dt[TZ_MAX_CHARS] = { 0 };
  char dt_offset[TZ_MAX_CHARS] = { 0 };
  char start[TZ_MAX_CHARS] = { 0 };
  char end[TZ_MAX_CHARS] = { 0 };
  int fmt;
  int res;
  /*
   * Parse input TZ variable to get info
   * EST5EDT,M3.2.0,M11.1.0
   * PMST3PMDT,M3.2.0,M11.1.0
   * CST6
   * NST3:30NDT,M3.2.0/0:01,M11.1.0/0:01
   * CST5CDT,M4.1.0/0,M10.5.0/1
   * LHST-10:30LHDT-11,M10.1.0,M4.1.0
   *
   * More info at:
   *   https://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html
   */
  sscanf(string, "%[^,],%[^,],%s", head, start, end);
  dbg_msg("%s: head = %s, start = %s, end = %s\n", __FUNCTION__, head, start,
          end);
  fmt = sscanf(head, "%[a-zA-Z]%[0-9:+-]%[a-zA-Z]%[0-9:+-]", st, st_offset, dt,
               dt_offset);
  dbg_msg(
      "%s: st = %s, st_offset = %s, dt = %s, dt_offset = %s, start = %s, end = %s\n",
      __FUNCTION__, st, st_offset, dt, dt_offset, start, end);

  if (fmt < 1)
    return VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_SET_CLOCK_ERROR;

  {
    const char *name = "/mnt/flash/etc/localtime";
    FILE *fp;

    int i, j;
    int pass;
    static const struct tzhead tzh0;
    static struct tzhead tzh;

    int typecnt = 0; /* counter of zones instances */
    int timecnt = 0; /* counter of start/end dates */

    char thischarcnt = 0;
    char thischars[TZ_MAX_CHARS] = { 0 };

    long gmtoffs[TZ_MAX_ZONES] = { 0 };
    char isdsts[DST_MAX_ENTR] = { 0 };
    long ats[DST_MAX_ENTR] = { 0 };

    /* Create timezone manes, like dt\0st\0 */
    if (strlen(dt))
    {
      memcpy(&thischars[0], dt, strlen(dt) + 1);
      thischarcnt = strlen(dt) + 1;
    }
    if (strlen(st))
    {
      memcpy(&thischars[thischarcnt], (void*) st, strlen(st) + 1);
      thischarcnt += strlen(st) + 1;
    }

    if (!thischarcnt)
      return VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_SET_CLOCK_ERROR;

    /* Calculate start and end, if any */
    if (strlen(start) && strlen(end))
    {
      long lst_offset = calculate_ofsset(st_offset);
      long ldt_offset = calculate_ofsset(dt_offset);

      /* We have start and end, so ldt_offset should be present always */
      if (!strlen(dt_offset))
        ldt_offset = lst_offset + SECSPERHOUR;

      /* Winter time */
      gmtoffs[0] = ldt_offset;
      isdsts[0] = 1;
      isdsts[2] = 1;
      ats[0] = calculate_rpytime(start, year) - lst_offset;
      ats[2] = calculate_rpytime(start, year + 1) - lst_offset;
      /* Summer time */
      gmtoffs[1] = lst_offset;
      isdsts[1] = 0;
      isdsts[3] = 0;
      ats[1] = calculate_rpytime(end, year) - ldt_offset;  // Sat Apr  1 14:59:55 UTC 2017 -> Sun Apr  2 01:30:01 2017 LHST
      ats[3] = calculate_rpytime(end, year + 1) - ldt_offset;
      typecnt = 2; /* amount of instances, one is summer time, second one is winter time */
      timecnt = 4; /* start + end */

      /* Always follow correct order, back for one year if required */
      if (ats[0] > ats[1])
      {
        ats[0] = calculate_rpytime(start, year - 1) - lst_offset;  // Sat Oct  1 15:29:55 UTC 2016 -> Sun Oct  2 02:30:00 2016 LHDT
        ats[2] = calculate_rpytime(start, year) - lst_offset;
      }
    }
    else
    {
      /* Summer time always */
      gmtoffs[0] = calculate_ofsset(st_offset);  // Sat Oct  1 15:51:30 UTC 2016 -> Sat Oct  1 10:51:38 2016 EST
      isdsts[0] = 0;
      typecnt = 1; /* amount of instances, the summer time only */
      timecnt = 0; /* no start, no end */
    }

    fp = fopen(name, "wb");
    if (!fp)
    {
      dbg_err("%s ERROR: file %s can't be opened, errno = %d\n", __FUNCTION__,
              name, errno);
      return VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_SET_CLOCK_ERROR;
    }

    for (pass = 1; pass <= 2; ++pass)
    {
      int thistimecnt;
      int thisleapcnt;
      int thistypecnt;
      char zoneNamesOffset[TZ_MAX_ZONES] = { 0 };

      thistypecnt = typecnt;
      thisleapcnt = 0;
      thistimecnt = timecnt;

      tzh = tzh0;
      (void) strncpy(tzh.tzh_magic, TZ_MAGIC, sizeof tzh.tzh_magic);
      tzh.tzh_version[0] = ZIC_VERSION;
      convert(eitol(thistypecnt), tzh.tzh_ttisgmtcnt);
      convert(eitol(thistypecnt), tzh.tzh_ttisstdcnt);
      convert(eitol(thisleapcnt), tzh.tzh_leapcnt);
      convert(eitol(thistimecnt), tzh.tzh_timecnt);
      convert(eitol(thistypecnt), tzh.tzh_typecnt);
      convert(eitol(thischarcnt), tzh.tzh_charcnt);

      (void) fwrite((void*) tzh.tzh_magic, (size_t) sizeof tzh.tzh_magic,
                    (size_t) 1, fp);
      (void) fwrite((void*) tzh.tzh_version, (size_t) sizeof tzh.tzh_version,
                    (size_t) 1, fp);
      (void) fwrite((void*) tzh.tzh_reserved, (size_t) sizeof tzh.tzh_reserved,
                    (size_t) 1, fp);
      (void) fwrite((void*) tzh.tzh_ttisgmtcnt,
                    (size_t) sizeof tzh.tzh_ttisgmtcnt, (size_t) 1, fp);
      (void) fwrite((void*) tzh.tzh_ttisstdcnt,
                    (size_t) sizeof tzh.tzh_ttisstdcnt, (size_t) 1, fp);
      (void) fwrite((void*) tzh.tzh_leapcnt, (size_t) sizeof tzh.tzh_leapcnt,
                    (size_t) 1, fp);
      (void) fwrite((void*) tzh.tzh_timecnt, (size_t) sizeof tzh.tzh_timecnt,
                    (size_t) 1, fp);
      (void) fwrite((void*) tzh.tzh_typecnt, (size_t) sizeof tzh.tzh_typecnt,
                    (size_t) 1, fp);
      (void) fwrite((void*) tzh.tzh_charcnt, (size_t) sizeof tzh.tzh_charcnt,
                    (size_t) 1, fp);

      /* Create mapping of zone names begin */
      for (i = 0, j = 1; i < thischarcnt - 1, j < sizeof(zoneNamesOffset); i++)  //write for EDT\0EST\0 -> {0,4} where 0 is beginning of first name, 4 is beginning of second name
      {
        if (thischars[i] == '\0')
          zoneNamesOffset[j++] = i + 1;
      }

      /* Dump start and end of DST switching timestamps */
      for (i = 0; i < thistimecnt; ++i)
        if (pass == 1)
          puttzcode((long) ats[i], fp);  //write 1475335800, 1491058800, 1506785400, 1522508400, if any
        else
          puttzcode64(ats[i], fp);
      for (i = 0; i < thistimecnt; ++i)
      {
        unsigned char uc;

        uc = i % 2;  //write 0,1 since we always have two instances only, if any
        res = fwrite((void*) &uc, (size_t) sizeof uc, (size_t) 1, fp);
        if (res < 1 && ferror(fp))
          LogMsg(VHQ_LOG_ERROR, "%s: Error: writing to file failed\n",
                 __FUNCTION__);
      }

      /* Dump offsets for regular and DST */
      for (i = 0; i < thistypecnt; ++i)
      {
        puttzcode(gmtoffs[i], fp);  //write offset (-14400, -18000, -14400, -14400)
        (void) putc(isdsts[i], fp);               //write 0 (1,0,1,1)
        (void) putc(zoneNamesOffset[i], fp);  //write 0 (0,4,8,12) - depends of zone names length
      }

      if (thischarcnt != 0)  // 4 (16), write ETS, "EDT EST EWT EPT"
      {
        res = fwrite((void*) thischars, (size_t) sizeof thischars[0],
                     (size_t) thischarcnt, fp);
        if (res < (size_t) thischarcnt && ferror(fp))
          LogMsg(VHQ_LOG_ERROR, "%s: Error: writing to failed\n", __FUNCTION__);
      }

      for (i = 0; i < thistypecnt; ++i)
        (void) putc(0, fp);     //write 0 (0,0,0,1)
      for (i = 0; i < thistypecnt; ++i)
        (void) putc(0, fp);     //write 0 (0,0,0,1)
    }
    fprintf(fp, "\n%s\n", string);
    fclose(fp);
  }
  return VHQ_SUCCESS;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
