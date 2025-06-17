---
title: Preventing Image Persistence

---

# Preventing Image Persistence




# Preface

Preventing image persistence (or image retention) on a liquid crystal (LC) display must be a design consideration for all developers of applications that control display content. This article provides recommendations to reduce the probability of LCD image persistence.


# Overview

Image persistence can occur as easily as having simple text or a logo remain unchanged on the screen in the same location for a duration of even just 15 minutes. Minor instances of image persistence are generally only visible when looking at darker areas on the screen, and usually not noticed during ordinary use. More serious image persistence may appear as a residual or "ghost" image of a previous graphic or text. Consistent display of static text/images is one of several app characteristics that can effectively cause permanent LCD burn-in (the LC cannot recover).

Image persistence is visible defect resulting from shading variations of neighboring LC sub-pixels (red, green, blue). Variations are normally caused by the LC material being unable to rotate to its correct, relaxed position/angle due to charge-accumulation. The charge build-up or polarization can be influenced by length of display on-time, prolonged display of a static images, and color choices. How effectively these charges are dissipated (e.g., via rest) is also a key factor for image persistence. Image persistence is also more common in high-temperature environments.


# Recommendations

Recommendations are provided below to reduce the probability of image persistence. Best practice is for app developers to implement all these recommendations – because image persistence is dependent on several factors.


## 1. Allow the LCD to rest

Do not keep the LCD on for long periods of inactivity. The LCD should be turned off after two minutes of inactivity.


## 2. Color selection (if applicable)

Use images/logo/text colors from the mid-grey (middle saturation) area of the color spectrum. High-contrast neighboring pixels (e.g., white next to black) is not recommended.


## 3. Avoid static location of certain items

Items such as title bars, icons, company logos, and "welcome" text are common causes of image persistence when frequently used in the same location. It is recommended to vary positions from one transaction to another (excluding contactless logo, which has positioning requirements).


## 4. Run a screen-saver to minimize prolonged use of static images

Float or scroll images/logo/text during periods of inactivity during the two-minute timeout period (see #1 above).


## 5. Ensure display is fully off

When turning display off, make sure display is powered down – not just with the backlight off. When the backlight is turned off, the screen may appear dark, but liquid crystals are not in a rest state.

For a white paper on the image persistence topic, please see [https://www.necdisplay.com/Documents/WhitePapers/Image_Persistence.pdf](https://www.necdisplay.com/Documents/WhitePapers/Image_Persistence.pdf). 

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
