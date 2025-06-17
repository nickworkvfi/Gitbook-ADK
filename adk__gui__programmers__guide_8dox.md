---
title: adk_gui_programmers_guide.dox

---

# adk_gui_programmers_guide.dox






## Source code

```cpp

   int left;   
   int top;    
   int right;  
   int bottom; 
   int flags;  
};
\endcode

The current region layout may be obtained using \c uiGetLayout();

Regions can be hidden by setting the \c UI_REGION_FLAG_HIDDEN flag. This may be used to temporarily
hide a dialog and display another one in the same place: \n
Use \c uiGetLayout() / \c uiLayout() to set \c UI_REGION_FLAG_HIDDEN in the region to be hidden
and add a new region using the same coordinates for the new dialog.
If the new dialog has finished, remove its region and unset the
\c UI_REGION_HIDDE_FLAG to unhide the old dialog again.

Dialogs in hidden regions continue to work, i.e. timeout remain still in place and will be
processed. Invoking new dialogs in hidden regions is supported.

<b>Important: Visible display regions must not overlap. If there is some overlap undefined
behavior may result.</b>

uiLayout can be used to move and resize existing regions: When a region ID already exists, the region is
moved and resized according to the new coordinates and then redrawn at the new location. If this is not
desired, uiClear() may be used to remove the content of a region before moving and resizing the region.

\note Region IDs must not be negative.

\note When the new region layout should start empty without touching the current screen content, make
sure to use new region IDs not previously in use and set the property UI_PROP_KEEP_DISPLAY=1. As an
alternative uiClear() may be used to remove the content of a region. This will
minimize redrawing old content and will prevent that new regions are cleared. The regions will be filled
with content on the first display of a dialog in this region.

\subsubsection gui_region_hierarchy Region Hierarchy

Starting ADK-GUI version 2.x regions form a hierarchy so that regions may be subdivided into smaller
regions. Effectively regions form a tree and dialogs can be displayed at the leaves of this tree.\n
\c uiEnterRegion() and \c uiLeaveRegion() are used to navigate in this tree. \c uiEnterRegion() makes
the provided region the current region and from then on all functions work relative to it.

After descending in the tree using \c uiEnterRegion() a new default region is created automatically.
It can be replaced by new sub-regions using \c uiLayout().

Displaying a dialog in a region that is no leaf of the tree automatically prunes the tree and all
affected dialogs are cancelled.

Example:

\code
// create two regions
UIRegion r[]={
   {0,  0,0, -1,19},
   {1,  0,20,  -1,-1}
};
uiLayout(r,2);

// display something in region 0
uiInvoke("Region 0");

// descend to region 1
uiEnterRegion(1);

// subdivide into two regions
uiLayout(r,2);

// display something in the two regions
uiInvoke("<div style='height:100%;background-color:#aaa'>"
         "Region 1/0</div>");
uiInvoke(1,"<div style='height:100%;background-color:#ff0'>"
           "Region 1/1<br>"
           "<button action='return 0'>OK</button>"
           "</div>");

//ascend one level
uiLeaveRegion();

// display dialog removing old dialogs
uiInvoke(1,"<div style='height:100%;background-color:#0ff'>"
           "Region 0/1<br>"
           "<button action='return 0'>OK</button>"
           "</div>");
\endcode

\subsection gui_multi_disp Multi-Display Support

ADKGUI has support for accessing multiple displays from one application. Multi-display support
is activated by providing more than one address in the environment variable \c GUI_DISPLAY
separated by whitespace when running the client. For example:

\code
GUI_DISPLAY=":0 192.168.0.1:5"
\endcode

This would set up the client to use two displays, the first resides on localhost port 5900 and the
second is accessed on 192.168.0.1 port 5905.

In the program the display is selected by passing the display parameter. The display parameter
is in the range 0&nbsp;..&nbsp;uiDisplayCount()-1

\note
Data is transmitted as plain text, encryption is not used. The assumption is that appropriate measures
are used on system side to protect the data, e.g. by using a VPN or by setting up an encrypted tunnel.
A tunnel is also considered to be used if the data is to be transmitted via non-network links like e.g. USB.
\par
\note
Displays :0 ... :9 and displays using named pipes are considered to be hosted on the same device so that guiserver has
access to the resources in the local file system. All other displays, either using another IP address
but localhost or using a display number starting at :10 are considered remote displays. These do not
have access to the local file system. Depending on whether the guiserver on remote side signals http support one of the
following options is chosen:
 - If no http support is signalled, images, videos and sound files are converted to inline media using data URLs.
 - If http support is signalled, references are replaced by http URLs and a local http server is used to deliver images,
   videos and sound files to server side. When replacing the references, the affected files are added to a white list
   of the http server, so that this server cannot be used to obtain any other data from the terminal.
   This http server is started on first invocation and runs as thread in the context of the client library.
 .
While this has some performance overhead, it has the advantage that media files need not be present
on the remote side. Both media files in HTML files and CSS files are converted this way.

\note
Due to the large size of videos, avoid to used videos on remote displays.

\subsection gui_vled Virtual LED support
Not all terminals are equipped with status LEDs required for contactless payments. On these devices
the LEDs have to be emulated on the display. Due to the very tight timing constraints HTML cannot be
used in most cases. ADKGUI offers a set of functions for emulating these status LEDs.

Using virtual LEDs consists of two steps:
- Configuring the LEDs
- Switching LED states

Two variants of virtual LEDs are supported:
- Separate LED area, that is independend of HTML dialogs
- HTML LED element for use inside HTML dialogs.

The first variant installs a permanently visible area on screen, similar to GUI regions, that displays the LEDs.
Accessing the LEDs has less overhead compared to the second variant but has restrictions placing the LEDs on screen.
The second variant allows placing the LED area at an arbitraty position but has higher overhead and may suffer from
complex HTML dialogs. Therefore, in this variant it is the responsibility of the application to make sure
that timing constraints are met.

In both cases uiSetLED() is used to switch LEDs on or off.

\subsubsection gui_vled_sep Separate LED Area
The LEDs are configured using one of:

- uiConfigLEDs(UILEDShape shape, int width, int height, unsigned off_rgba, unsigned on0_rgba, unsigned on1_rgba, unsigned on2_rgba, unsigned on3_rgba)
- uiConfigLEDs(const char *filename)

The first sets up LEDs using a standard shape, width and height is the size of a single LED. The remaining
parameters provide the colors of the LEDs in off state (same color for all) and on state. The color values are
RGBA values, the alpha channel is ignored.

The second sets up LEDs based on a PNG image. The PNG image has to contain 5 LED images next to each other.
The first showing the off state, the other 4 showing the on state of the respective LEDs.

Example:

\image html led_config.png
\image latex led_config.png

The alpha channel of the PNG image may be used to create non-rectangular LEDs.

The virtual LEDs are activated using uiShowLEDArea(). The edge close to which the LEDs are displayed can
be chosen as well as the size of the area. If the area is smaller than the display, it is centered along
the edge. LEDs are distributed automatically within this area. uiShowLEDArea() resets the LED state to
the off state. The area is removed using uiHideLEDArea().

If uiShowLEDArea() is called more than once, the same number of uiHideLEDArea() is required to remove the
virtual LEDs from the screen. Only the parameters of the first call to uiShowLEDArea() take effect, successive
calls just increase an internal reference counter.

When virtual LEDs are active, the window for HTML output is shrunk by the size of the LEDs area. Due to this
some regions on screen may be moved and/or resized. Therefore, dialogs that are used while virtual LEDs may be active,
should be designed so that they can adjust to different region sizes within some limits.

The LED area will always be shown on display and cannot be put to the background.
It is inaccessible to HTML dialogs.


\subsubsection gui_vled_html HTML LED Area
&lt;input type='led' src='led_config.png'> is used to set up the LED image and define a LED element that is placed
on screen. The image file provided in \a src is the same format as the image file provided to uiConfigLEDs() (see above).
The size and background of the element can be set using CSS. For performance reasons \a border-radius and a
transparent background-color is not supported. Zooming of the LEDs is also not supported.

Use of a transparent background-image for the LED area may degrade the performance, therefore, it is recommended to either use
a solid color or use a background-image without transparency.

Within the HTML element the LEDs are distributed evently. The orientation vertical or horizontal depends on the
size of the element. If the width is higher or equal than the height, then LEDs are arranged horizontally, if not
they are arranged vertically.

\note
While &lt;input type='led'> is not an input element &lt;input> was chosen over introducing a new HTML tag to maintain a certain level of
compatibility with existing browsers so that this element could be emulated using JavaScript in future versions.


\subsection gui_mac_interface Multi-Application-Controller Interface

Multi-Application-Controller (MAC) is used to run several applications in parallel on a terminal.
For this it sets up a separate region for each application. Applications then run within this region
using sub-regions. For this MAC sets up the environment variable \c GUI_REGION, which has a
whitespace separated list of parent regions, one for each display. \c GUI_REGION is automatically
considered during startup of an application so that most of the MAC handling is transparent to
the application.

\subsection gui_thread_support Thread Support

All API functions of the GUI system are thread-safe. Please note that invoking a dialog from a
different thread might cancel currently active dialogs invoked by other threads when using the
same region ID.

\subsection gui_formatting_strings_with_html_content Formatting Strings with HTML Content

The GUI system provides specific support for handling strings with HTML content. Printf like
function calls \c uiPrint() and \c uiPrintV() are provided for that purpose.




\subsection gui_animated_screen_transitions Animated Screen Transitions

Starting with GUI version 2.x support for animated screen transitions has been added. Animation
takes place when changing from one HTML document to another.
Various transition types (like slide, crossfade, etc.) are supported. Transition speed and animation
direction can be adjusted. Screen transition settings can be applied per display region.

See \c uiSetTransition() function for more details on available options.

While uiSetTransition sets a global configuration for a region, it is also possible to activate a transition for one
dialog only. This works by setting the variables "_transition" and "_transduration" in the key value map.
"_transition" is the hex-number of the transition type (e.g. "131" for slide up with ease in and out) and
"_transduration" contains the duration in milliseconds.

\subsection gui_backlight_control Backlight Control
ADKGUI supports controlling the backlight brightness using ::uiSetBacklightConfig. It takes a set of brightness
levels along with a time, that tells how long they will be used. Initially the first brightness level is used (index 0).
When the time has elapsed, the next brightness level is used, and so on until the last entry has been reached.
As soon as some user activity has been detected (touch or key press) ADKGUI switches back to the first entry.
If there is more than one entry in the list, the last entry is considered the off state. In this state, if brightness is 0, a touch or
keypad event is considered a wakeup event, that just activates the backlight but that is otherwise ignored to
not inadvertedly trigger some action.

Each time the backlight brightness is changed, a broadcast notification is sent as information for other components.
The notification has the ID "_uiBacklight". The parameter object has a single member "brightness" which contains
the new brightness in percent (0..100).

The application may switch to a certain level using ::uiSetBacklightLevel. uiSetBacklightLevel(0) activates maximum
brightness and uiSetBacklightLevel(-1) switches to minimum brightness or OFF depending on configuration.

\subsection gui_performance_optimizations Performance Optimizations

When creating HTML documents for a terminal, note that the terminal has much less computing power compared
to a desktop computer or even a smart phone. HTML pages and style sheets must be properly designed to
avoid resource heavy tasks. The following lists some tweaks to speed up the display of dialogs:

- Avoid large PNGs with alpha channel. Using an alpha channel needs to mix the image with the background. This
process has turned out to be quite slow. If possible, transparent areas should be replaced with pixels showing
the background, i.e. eliminating the transparency. Note however, that the transparent channel needs to be
eliminated altogether since it already slows down things even if all pixels are marked opaque.
- Nested tables need several passes in the layout process. The number of passes depends on the nesting level.
If possible use rowspan and colspan to reduce the nesting level of tables.

\subsection sec_canvas Pixel level access
For applications that need pixel level access ADKGUI allows installing a canvas in a region using uiCanvas().
uiDraw() is used to draw to the canvas. Drawing primitives are sent in a group to speed up operation.
This group is created using a UIDrawing object, that offers different drawing primitives including text
and image support.

The canvas element integrates with the UI region concept, i.e. by switching the region it can be resized or moved to
the foreground or background. The content is preserved, when hiding a region containing a canvas element.

Touch and keyboard events are delivered via the ::uiEventCallback callback function that has been passed to uiCanvas().
The following events are delivered:
- \b ::UI_PUSH the user started a touch action
- \b ::UI_DRAG the user is dragging the finger across the screen
- \b ::UI_RELEASE the user lifted the finger off the touch screen
- \b ::UI_KEYDOWN the user pressed a key
- \b ::UI_KEYUP the user released a key

The following key codes are used for function and control keys:

   Control Key | Key Code
   ------------|---------
   Backspace | 8
   Tab | 9
   Enter | 13
   Home | 16
   Cursor Left | 17
   Cursor Up | 18
   Cursor Right | 19
   Cursor Down | 20
   Page Up | 21
   Page Down | 22
   End | 23
   Escape | 27
   F0...F35 | 128...163


uiTextMetrics() is provided, so that an application can determine the dimensions of a text. It allows determining the
width of several texts in a batch. The following information is returned:
- \b height: Height of the font in pixels. It may be different from the nominal size of the font to account for
  accent marks or the like. In general this is the distance two lines of text should have to not overlap.
- \b width: Width of the text in pixels. This is returned per provided text.
- \b descent: Size of the descender in pixels (number of pixels text may reach below the base line)

Drawing images the following image file formats are supported:
- \b GIF (only static GIFs without animation)
- \b BMP
- \b PNG
- \b JPEG
- \b PAM

File names are relative to the resource directory.
These images can also provided as in-memory pointers instead of as file name, see UIDrawing::image()

In addition in-memory images can also provided as raw images, i.e. uncompressed pixels in memory. In this case
width and height must be provided separately. The following raw image formats are supported:
 - \b Grayscale: 1 byte per pixel
 - \b Grayscale \b with \b alpha: 2 bytes per pixel
 - \b RGB: 3 bytes per pixel in the order red, green, blue
 - \b RGBA: 4 bytes per pixel in the order red, green, blue, alpha

The canvas element is active until some other content is displayed in a region (e.g. using ::uiInvokeURL) or
when a new canvas element is installed.



\subsection gui_input_plugins Input plugins

\subsubsection gui_input_sfbarcode Input plugin "sfbarcode"

This plugin is for scanning barcodes on X10 with the help of an Android application. It
is using the IPC notification interface to start / stop scanning on Android side and to receive
scanned data. The plugin does not take any configuration parameters.

See https://confluence.verifone.com:8443/display/GR/Notify+Message+Android+Server+specifications
for more information

\subsubsection gui_input_se2707 Input plugin "se2707"

This plugin is for scanning barcodes on e280 with barcode scanner module SE2707.

The plugin takes the following configuration parameters:
\code
enable=a,b,c
\endcode

The barcode symbologies to be supported are passed as a comma separated list in the \c enable option.
The follogwing symbologies are supported:

<table>
<tr><th>Name     <th> Symbology                                   <th> Group <th> Also known as
<tr><td>az       <td> Aztec Code (normal and inverse)             <td> 2d    <td>
<tr><td>cbar     <td> Codabar                                     <td> 1d    <td>
<tr><td>c11      <td> C11                                         <td> 1d    <td>
<tr><td>c128     <td> Code 128                                    <td> 1d    <td>
<tr><td>c39      <td> Code 39                                     <td> 1d    <td>
<tr><td>c93      <td> Code 93                                     <td> 1d    <td>
<tr><td>cc       <td> Composite code decoding / TLC 39            <td> 2d    <td>
<tr><td>ccc      <td> Composite code decoding / CC-C              <td>       <td>
<tr><td>ccab     <td> Composite code decoding / CC-A/B            <td>       <td>
<tr><td>dm       <td> Data Matrix (normal and inverse)            <td> 2d    <td>
<tr><td>c25      <td> Chinese 2 of 5                              <td> 1d    <td>
<tr><td>hx       <td> Han Xin                                     <td> 2d    <td>
<tr><td>i25      <td> I 2 of 5                                    <td> 1d    <td>
<tr><td>m25      <td> Matrix 2 of 5                               <td> 2d    <td> European Matrix 2 of 5
<tr><td>mc       <td> MaxiCode modes 0 - 5                        <td> 2d    <td>
<tr><td>mpdf     <td> MicroPDF417                                 <td> 2d    <td>
<tr><td>msip     <td> MSI/Plessey                                 <td> 1d    <td>
<tr><td>pdf      <td> PDF417                                      <td> 2d    <td>
<tr><td>qr       <td> QR Code (full size and MicroQR)             <td> 2d    <td>
<tr><td>qrf      <td> Full size QR Code (normal, inverse and mirrored)<td>       <td>
<tr><td>qrm      <td> MicroQR Code                                <td>       <td>
<tr><td>d25      <td> Discrete 2 of 5 with 2 bar start/stop codes <td> 1d    <td>
<tr><td>trioptic <td> Trioptic                                    <td> 1d    <td>
<tr><td>ean      <td> EAN-8, EAN-13, JAN                          <td> 1d    <td>
<tr><td>upc      <td> UPC-A, UPC-E                                <td> 1d    <td>
<tr><td>jan      <td> EAN, JAN,                                   <td> 1d    <td>
<tr><td>ean8     <td> EAN-8                                       <td>       <td>
<tr><td>ean13    <td> EAN-13                                      <td>       <td>
<tr><td>upca     <td> UPC-A                                       <td>       <td>
<tr><td>upce     <td> UPC-E                                       <td>       <td>
<tr><td>upce1    <td> UPC-E1                                      <td>       <td>
<tr><td>bookland <td> Bookland EAN                                <td>       <td>
<tr><td>databar14<td> GS1 DataBar-14                              <td>       <td>
<tr><td>databarlimited<td> GS1 DataBar Limited                    <td>       <td>
<tr><td>databarexpanded<td> GS1 DataBar Expanded                  <td>       <td>
<tr><td>p-ap     <td> Australia Post                              <td>       <td>
<tr><td>p-jp     <td> Japan Post                                  <td>       <td>
<tr><td>p-kix    <td> KIX Code                                    <td>       <td>
<tr><td>p-pl     <td> PLANET                                      <td>       <td>
<tr><td>p-pn     <td> POSTNET                                     <td>       <td>
<tr><td>p-rm     <td> Royal Mail 4 State Customer Code            <td>       <td>
<tr><td>p-upu    <td> UPU                                         <td>       <td>
<tr><td>p-usps4cb<td> USPS 4CB                                    <td>       <td>
</table>

Giving a group name enables all barcodes in that group.

If the enable option is not provided, barcodes in the groups "1d" and "2d" are enabled by default.

Some barcodes support options controlling additional properties. Options are passed in the enable attribute along the selection of barcodes.
To set an option, the barcode (or group containing it) needs to be provided as well.

Options consist of a name and a value separated by '=' (without space in between). Only one value can be assigned to an option name. Trying to
assign more than one value the result is undefined.

The following options and values for 1D barcodes are supported:
<table>
<tr><th>Option     <th>Description
<tr><td>o-ap-f=0   <td>Australia Post autodiscriminate
<tr><td>o-ap-f=1   <td>Australia Post raw format
<tr><td>o-ap-f=2   <td>Australia Post alphanumeric encoding
<tr><td>o-ap-f=3   <td>Australia Post numeric encoding
<tr><td>o-bookland-f=0<td>Bookland ISBN format ISBN-10 (default)
<tr><td>o-bookland-f=1<td>Bookland ISBN format ISBN-13
<tr><td>o-c11-c=0  <td>Code 11 checksum: check no digit
<tr><td>o-c11-c=1  <td>Code 11 checksum: check one digit
<tr><td>o-c11-c=2  <td>Code 11 checksum: check two digits (default)
<tr><td>o-c11-c=3  <td>Code 11 checksum: check one digit and strip it from the result
<tr><td>o-c11-c=4  <td>Code 11 checksum: check two digits and strip it from the result
<tr><td>o-c128-gs1=0    <td>Code 128 disable GS1-128
<tr><td>o-c128-gs1=1    <td>Code 128 enable GS1-128 (default)
<tr><td>o-c128-isbt=0   <td>Code 128 disable ISBT 128
<tr><td>o-c128-isbt=1   <td>Code 128 enable ISBT 128 (default)
<tr><td>o-c128-isbt-c=0 <td>Code 128 disable ISBT concatenation (default)
<tr><td>o-c128-isbt-c=1 <td>Code 128 enable ISBT concatenation
<tr><td>o-c128-isbt-c=2 <td>Code 128 autodiscriminate ISBT concatenation
<tr><td>o-c128-isbt-cr=&lt;val&gt; <td>Code 128 set ISBT concatenation redundancy to &lt;val&gt; (range 2..20, default: 10)
<tr><td>o-c128-isbt-t=0 <td>Code 128 disable ISBT table check
<tr><td>o-c128-isbt-t=1 <td>Code 128 enable ISBT table check (default)
<tr><td>o-c39-a=0     <td>Code 39 full ASCII support: disable (default)
<tr><td>o-c39-a=1     <td>Code 39 full ASCII support: enable (cannot be used when trioptic has been enabled)
<tr><td>o-c39-c=0     <td>Code 39 check digit: disable checking (default)
<tr><td>o-c39-c=1     <td>Code 39 check digit: check
<tr><td>o-c39-c=2     <td>Code 39 check digit: check and strip it from result
<tr><td>o-c39-c32=0   <td>Code 39 disable conversion to Code 32
<tr><td>o-c39-c32=1   <td>Code 39 enable conversion to Code32
<tr><td>o-c39-c32-p=0 <td>Code 39 disable prefixing Code 32 barcodes with prefix character "A"
<tr><td>o-c39-c32-p=1 <td>Code 39 enable prefixing Code 32 barcodes with prefix character "A"
<tr><td>o-cbar-clsi=0 <td>Codabar disable CLSI editing (default)
<tr><td>o-cbar-clsi=1 <td>Codabar enable CLSI editing
<tr><td>o-cbar-notis=0<td>Codabar disable NOTIS editing (default)
<tr><td>o-cbar-notis=1<td>Codabar enable NOTIS editing
<tr><td>o-cbar-case=0 <td>Codabar upper case start/stop characters (default)
<tr><td>o-cbar-case=1 <td>Codabar lower case start/stop characters
<tr><td>o-databar-eanupc=0<td>do not convert GS1 DataBar to EAN/UPC (default)
<tr><td>o-databar-eanupc=1<td>do not convert GS1 DataBar to EAN/UPC
<tr><td>o-databar-sl=0<td>GS1 DataBar security level 0
<tr><td>o-databar-sl=1<td>GS1 DataBar security level 1 (default)
<tr><td>o-databar-sl=2<td>GS1 DataBar security level 2
<tr><td>o-databar-sl=3<td>GS1 DataBar security level 3
<tr><td>o-ean8-e=0    <td>EAN-8 do not extend
<tr><td>o-ean8-e=1    <td>EAN-8 add 5 leading zeros to EAN-8 symbols
<tr><td>o-eanupc-s=0  <td>EAN/UPC/JAN ignore supplementals
<tr><td>o-eanupc-s=1  <td>EAN/UPC/JAN require supplemental
<tr><td>o-eanupc-s=2  <td>EAN/UPC/JAN autodiscriminate supplementals (default)
<tr><td>o-eanupc-s=3  <td>EAN/UPC/JAN enable smart supplemental mode
<tr><td>o-eanupc-s=4  <td>EAN/UPC/JAN enable 378/379 supplemental mode
<tr><td>o-eanupc-s=5  <td>EAN/UPC/JAN enable 978/979 supplemental mode
<tr><td>o-eanupc-s=6  <td>EAN/UPC/JAN enable 414/419/434/439 supplemental mode
<tr><td>o-eanupc-s=7  <td>EAN/UPC/JAN enable 977 supplemental mode
<tr><td>o-eanupc-s=8  <td>EAN/UPC/JAN enable 491 supplemental mode
<tr><td>o-eanupc-s=9  <td>EAN/UPC/JAN enable user programmable supplemental mode type 1
<tr><td>o-eanupc-s=10 <td>EAN/UPC/JAN enable user programmable supplemental mode type 1 and 2
<tr><td>o-eanupc-s=11 <td>EAN/UPC/JAN enable smart user programmable supplemental mode 1
<tr><td>o-eanupc-s=12 <td>EAN/UPC/JAN enable smart user programmable supplemental mode 2
<tr><td>o-eanupc-s1=&lt;val&gt;<td>EAN/UPC/JAN set supplemental 1 to &lt;val&gt;
<tr><td>o-eanupc-s2=&lt;val&gt;<td>EAN/UPC/JAN set supplemental 2 to &lt;val&gt;
<tr><td>o-eanupc-sr=&lt;val&gt;<td>EAN/UPC/JAN set supplemental redundancy to &lt;val&gt; (range 2..16, default: 10)
<tr><td>o-i25-c=0   <td>Interleaved 2 of 5 checksum not checked (default)
<tr><td>o-i25-c=1   <td>Interleaved 2 of 5 verify USS check digit
<tr><td>o-i25-c=2   <td>Interleaved 2 of 5 verify OPCC check digit
<tr><td>o-i25-c=3   <td>Interleaved 2 of 5 verify USS check digit and strip it from result
<tr><td>o-i25-c=4   <td>Interleaved 2 of 5 verify OPCC check digit and strip it from result
<tr><td>o-i25-ean=0 <td>Interleaved 2 of 5 disable conversion to EAN-13
<tr><td>o-i25-ean=1 <td>Interleaved 2 of 5 enable conversion to EAN-13
<tr><td>o-issean=0  <td>Disable ISSN EAN
<tr><td>o-issean=1  <td>Enable ISSN EAN
<tr><td>o-m25-c=0   <td>Matrix 2 of 5 do not verify check digit (default)
<tr><td>o-m25-c=1   <td>Matrix 2 of 5 verify check digit
<tr><td>o-m25-c=2   <td>Matrix 2 of 5 verify check digit and strip it from result
<tr><td>o-msip-c=0  <td>MSI/Plessey verify one check digit (default)
<tr><td>o-msip-c=1  <td>MSI/Plessey verify two check digits (MOD 10/MOD 10)
<tr><td>o-msip-c=2  <td>MSI/Plessey verify two check digits (MOD 11/MOD 10)
<tr><td>o-msip-c=3  <td>MSI/Plessey verify one check digit and strip it from result
<tr><td>o-msip-c=4  <td>MSI/Plessey verify two check digits and strip it from result (MOD 10/MOD 10)
<tr><td>o-msip-c=5  <td>MSI/Plessey verify two check digits and strip it from result (MOD 11/MOD 10)
<tr><td>o-rm-c=0    <td>transmit royal mail postal check digit (default)
<tr><td>o-rm-c=1    <td>strip royal mail postal check digit
<tr><td>o-ucc=0     <td>disable UCC coupon extended code (default)
<tr><td>o-ucc=1     <td>enable UCC coupon extended code
<tr><td>o-ucc-f=0   <td>Old UCC coupon format
<tr><td>o-ucc-f=1   <td>New UCC coupon format (default)
<tr><td>o-ucc-f=2   <td>Autodiscriminate UCC coupon format
<tr><td>o-ucc-gs1=0 <td>disable GS1-128 emulation mode for UCC/EAN
<tr><td>o-ucc-gs1=1 <td>enable GS1-128 emulation mode for UCC/EAN
<tr><td>o-upc-cm=0  <td>UPC Composite Mode, transmit UPC barcode regardless whether a 2D symbol is detected
<tr><td>o-upc-cm=1  <td>UPC Composite Mode, transmit UPC barcode + 2D portion only if a 2D symbol is detected
<tr><td>o-upc-cm=2  <td>UPC Composite Mode, automatically detect 2D portion
<tr><td>o-upca-c=0  <td>UPC-A strip check digit
<tr><td>o-upca-c=1  <td>UPC-A transmit check digit (default)
<tr><td>o-upce-c=0  <td>UPC-E strip check digit
<tr><td>o-upce-c=1  <td>UPC-E transmit check digit (default)
<tr><td>o-upce1-c=0 <td>UPC-E1 strip check digit
<tr><td>o-upce1-c=1 <td>UPC-E1 transmit check digit (default)
<tr><td>o-upca-p=0  <td>UPC-A no preamble
<tr><td>o-upca-p=1  <td>UPC-A system character preamble (default)
<tr><td>o-upca-p=2  <td>UPC-A system characterand country code preamble
<tr><td>o-upce-p=0  <td>UPC-E no preamble
<tr><td>o-upce-p=1  <td>UPC-E system character preamble (default)
<tr><td>o-upce-p=2  <td>UPC-E system characterand country code preamble
<tr><td>o-upce1-p=0 <td>UPC-E1 no preamble
<tr><td>o-upce1-p=1 <td>UPC-E1 system character preamble (default)
<tr><td>o-upce1-p=2 <td>UPC-E1 system characterand country code preamble
<tr><td>o-upce-upca=0<td>UPC-E do not convert to UPC-A (default)
<tr><td>o-upce-upca=1<td>UPC-E convert to UPC-A
<tr><td>o-upce1-upca=0<td>UPC-E1 do not convert to UPC-A (default)
<tr><td>o-upce1-upca=1<td>UPC-E1 convert to UPC-A
<tr><td>o-us-c=0     <td>transmit US postal check digit (default)
<tr><td>o-us-c=1     <td>strip US postal check digit
</table>

The following options and values for 2D barcodes are supported:
<table>
<tr><th>Option     <th>Description
<tr><td>o-az-i=0   <td>Aztec scan regular barcodes only
<tr><td>o-az-i=1   <td>Aztec scan inverse barcodes only
<tr><td>o-az-i=2   <td>Aztec scan both regular and inverse barcodes (default)
<tr><td>o-dm-i=0   <td>Data Matrix scan regular barcodes only
<tr><td>o-dm-i=1   <td>Data Matrix scan inverse barcodes only
<tr><td>o-dm-i=2   <td>Data Matrix scan both regular and inverse barcodes (default)
<tr><td>o-dm-m=0   <td>Data Matrix scan regular barcodes only
<tr><td>o-dm-m=1   <td>Data Matrix scan mirrored barcodes only
<tr><td>o-dm-m=2   <td>Data Matrix scan both regular and mirrored barcodes (default)
<tr><td>o-hx-i=0   <td>Han Xin scan regular barcodes only (default)
<tr><td>o-hx-i=1   <td>Han Xin scan inverse barcodes only
<tr><td>o-hx-i=2   <td>Han Xin scan both regular and inverse barcodes
</table>

For restricting the length of scanned barcodes two lengths per barcode may be set.
The meaning is as follows:

<table>
<tr><th> length 1 <th> length 2 <th> Meaning
<tr><td> 0 <td> 0 <td> barcodes of any length
<tr><td> a <td> 0 <td> barcodes of length \a a
<tr><td> a <td> b (with b&gt;a) <td> barcodes of length in range \a a..b
<tr><td> a <td> b (with b&lt;a) <td> barcodes of length \a a or \a b
</table>

The following lengths can be set:
<table>
<tr><th>Option                  <th> Description     <th>Default value
<tr><td>o-cbar-l=&lt;value&gt;  <td>Codabar length 1 <td>5
<tr><td>o-cbar-l2=&lt;value&gt; <td>Codabar length 2 <td>55
<tr><td>o-c11-l=&lt;value&gt;   <td>Code 11 length 1 <td>4
<tr><td>o-c11-l2=&lt;value&gt;  <td>Code 11 length 2 <td>55
<tr><td>o-c128-l=&lt;value&gt;  <td>Code 128 length 1 <td>0
<tr><td>o-c128-l2=&lt;value&gt; <td>Code 128 length 2 <td>0
<tr><td>o-c39-l=&lt;value&gt;   <td>Code 39 length 1 <td>2
<tr><td>o-c39-l2=&lt;value&gt;  <td>Code 39 length 2 <td>55
<tr><td>o-c93-l=&lt;value&gt;   <td>Code 93 length 1 <td>4
<tr><td>o-c93-l2=&lt;value&gt;  <td>Code 93 length 2 <td>55
<tr><td>o-i25-l=&lt;value&gt;   <td>Interleaved 2 of 5 length 1 <td>6
<tr><td>o-i25-l2=&lt;value&gt;  <td>Interleaved 2 of 5 length 2 <td>55
<tr><td>o-m25-l=&lt;value&gt;   <td>Matrix 2 of 5 length 1 <td>3
<tr><td>o-m25-l2=&lt;value&gt;  <td>Matrix 2 of 5 length 2 <td>32
<tr><td>o-msip-l=&lt;value&gt;  <td>MSI/Plessey 2 of 5 length 1 <td>4
<tr><td>o-msip-l2=&lt;value&gt; <td>MSI/Plessey 2 of 5 length 2 <td>55
<tr><td>o-d25-l=&lt;value&gt;   <td>Discrete 2 of 5 length 1 <td>12
<tr><td>o-d25-l2=&lt;value&gt;  <td>Discrete 2 of 5 length 2 <td>0
</table>

Example:
\code
<input type="plugin" plugin="se2707 enable=ean,qr">
\endcode

Generic options, independent of the symbology:

<table>
<tr><th>Option     <th>Description
<tr><td>o-aim=0    <td>Disable aiming pattern
<tr><td>o-aim=1    <td>Enable aiming pattern (default)
<tr><td>o-continuous=0 <td>Disable continuos barcode scanning (default)
<tr><td>o-continuous=1 <td>Enable continuos barcode scanning
<tr><td>o-display=0  <td>Disable display mode (default)
<tr><td>o-display=1  <td>Enable display mode which improves bar code reading performance off mobile phones and electronic displays.
<tr><td>o-illum=0  <td>Disable illumination
<tr><td>o-illum=1  <td>Enable illumination
<tr><td>o-inverse=0<td>scan regular 1D barcodes (default)
<tr><td>o-inverse=1<td>scan inverse 1D barcodes
<tr><td>o-inverse=2<td>scan both regular and inverse 1D barcodes
<tr><td>o-pause=1..99 <td>Pause between sending consecutive barcodes in 100ms steps, default: 1 (0.1s). (continuous scanning only)
<tr><td>o-pick=0   <td>Disable picklist mode
<tr><td>o-pick=1   <td>Enable picklist mode: Only the barcode is decoded at which the aimer is pointing.
<tr><td>o-same-timeout=1..99 <td>Timeout the barcode needs to be out of view before scanned again in 100ms steps, default: 6 (0.6s). (continuous scanning only)
<tr><td>o-timeout=5..99 <td>Scan timeout in 100ms steps, default: 99 (9.9s). Note: The timeout does not trigger the action. Note: The timeout is ignored in continuous mode.
<tr><td>o-tx-sym=0 <td>Only return scanned data as is. (default)
<tr><td>o-tx-sym=1 <td>Return symbology used for the barcode and data in the following format:<br>\<symbology> ':' \<data><br>The symbology uses the names from the table above.
<tr><td>o-unique=0 <td>Disable unique barcode scanning (default)
<tr><td>o-unique=1 <td>Enable unique barcode scanning
</table>

\note Setting one of the generic options also resets the default barcodes. Therefore, enabling pick mode and all 1d and 2d barcodes would look like this:

\code
<input type="plugin" plugin="se2707 enable=1d,2d,o-pick=1">
\endcode


\note Some symbologies have more than one name. In this case only one name is returned. If the symbology cannot be determined,
an empty symbology is returned.

\note In continuous mode scanned values are provided via update events.

\subsubsection gui_input_magtekmicr Input plugin "magtekmicr"

This plugin it for scanning checks using an external Magtek MICRMini check reader connected to
a serial port of the terminal.

The plugin takes the following configuration parameters:
\code
port=<port>
\endcode

\<port> can be one of \a com1, \a com2, \a com 3 or \a com4. These map to the following Linux devices:

Name | Device
-----|-------
com1 | /dev/ttyAMA0
com2 | /dev/ttyAMA1
com3 | /dev/ttyUSB0
com4 | /dev/ttyUSB1

The serial port settings are considered to be set to 9600 bits per second, 8 data bits, no parity, 1 stop bit.

When a check has been scanned, the scanned data is returned followed by '/' and a status code.

The data is sent in raw data format using the following characters for non-digits:

<b>E13-B character Set</b>
Symbol |Character
-------|---------
Transit| T
On-Us  | U
Amount | $
Dash   | -
Error  | ?

<b>CMC-7 character set</b>
Symbol |Character
-------|---------
SI     | A
SII    | B
SIII   | C
SIV    | D
SV     | E


The following status codes are supported by the scanner:

<table>
<tr><th>Priority <th>Code <th>Type   <th>Description
<tr><td> 9       <td>01   <td>Error  <td>No MICR data: no transit and no account found
<tr><td> 8       <td>09   <td>Status <td>Mexican check
<tr><td> 7       <td>08   <td>Status <td>Canadian check
<tr><td> 6       <td>05   <td>Error  <td>Transit error: No transit, bad character, bad length, bad check digit
<tr><td> 5       <td>07   <td>Error  <td>Account error: No account, bad character
<tr><td> 4       <td>04   <td>Error  <td>Check # error: Bad character in check number
<tr><td> 4       <td>04   <td>Status <td>No check number
<tr><td> 3       <td>03   <td>Status <td>Low MICR signal, good read
<tr><td> 2       <td>10   <td>Status <td>Business check
<tr><td> 1       <td>11   <td>Status <td>Amount field present
<tr><td> 0       <td>00   <td>Status <td>Good read
</table>

For more information check the reference documentation of MINI MICR RS232 that is provided by Magtek.





\subsection gui_android Android Remote Rendering Server

Android Remote Rendering Server (ARRS) is a server that is largely compatible with guiserver and can
be used to display an application running on terminal side on the Android display. For this the variable
GUI_DISPLAY has to be configured to point to the ARRS server by setting:

\verbatim
GUI_DISPLAY=vfi-android:0
\endverbatim

\note Old versions of the OS used the IP address "192.168.50.1" instead of "vfi-android" to access ARRS,
"192.168.50.1" will not work with new OS releases.

However, there are some conditions the application on terminal side has to consider.
- ARRS may not be started during power up but may be started way later on by the user.
  Therefore, the application has to wait "forever" for it to come up.
- The user may terminate ARRS on Android and restart it later on. In this case the application
  should be also re-started.

ADKGUI provides means to handle these two cases: The number of attempts to connect to the server
can be set to infinite by

\verbatim
uiSetConnectAttempts(0);
\endverbatim

For simplified detection of shutdown of the server, the application may install a callback function
using uiSetDisconnectCallback() that can perform a clean shutdown of the application.

Applications that are started by Secure Installer (and not by MAC) need to re-start themselves so that they
will show up again, if ARRS is started again. This can be achieved by use of fork() like this:

\code
void disconnect(int disp)
{
   exit(0);
}

int main(int argc, char *argv[])
{
   pid_t pid;
   while((pid=fork())>0) {
      int status;
      waitpid(pid,&status,0);
   }
   uiSetConnectAttempts(0);             // infinite number of attempts
   uiSetDisconnectCallback(disconnect); // shut down if ARRS terminates

   ...
}
\endcode

So we have two cases:

\subsubsection gui_android_si Applications started from Secure Installer

- Set GUI_DISPLAY=vfi-android:1 (or GUI_DISPLAY=192.168.50.1:0 depending on OS release) when starting the application (e.g. in the start file)
- Use fork() to re-start the application as shown above.
- Use uiSetConnectAttempts() to set an infinite number of attempts to connect to ARRS.
- Use uiSetDisconnectCallback() to terminate application in case of shutdown of ARRS

\subsubsection gui_android_mac Applications started from MAC

- Use uiSetDisconnectCallback() to terminate application in case of shutdown of ARRS

Re-starting the application and setting up GUI_DISPLAY will be handled by MAC so that
the application does not have to take care about this itself. The application will be
started from MAC after ARRS has been started, therefore, using the standard number
of connect attempts is sufficient.




\subsection gui_androidclient libvfiguiprt.so on Android

When run on Android libvfiguiprt.so performs some specific actions:
- Default display is "builtin" instead of ":0". By this libvfiguiprt checks for an integrated
  ARRS in the current Android package. If it finds one, then this ARRS is used for display output.
  If not found it checks, whether an ARRS exists unter display address ":0" and uses this one.
- PIN entry uses SDI server for PIN entry: On Android PIN entry is specific to the Android device
  in use. To support all Android devices, ADKGUI relies on SDI server for PIN entry on these devices.
  By default it tries to connect to SDI server running on localhost. If SDI is not running on
  localhost but a different address needs to be contacted, the environment variable SDISERVER may be
  used to provide the required address. Setting the environment variable can be performed e.g.
  by the use of setenv(), e.g. setenv("SDISERVER","1.2.3.4",1). Best is to set the environment
  variable before invoking any of the ADKGUI functions.




\section gui_commerce_platform_application_support Commerce Platform Application Support

Commerce Platform (CP) applications are developed using HTML, CSS and JavaScript. Unlike traditional
Web architectures,
the Commerce Platform Runtime loads only authentically pre-installed HTML/CSS files that come
together with an application manifest.
Additional security countermeasures are implemented to sandbox the execution of the CP-application
into a controlled environment.
CP-applications have only limited access to system resources and will not get access to any clear
text sensitive data.

ADKGUI has some extensions for CP applications that are required to support the CP application
security model.

CP app extensions are activated by setting the properties \c UI_PROP_CP_APP_MODE and \c UI_PROP_CP_APP_DIR.
The following security measures are activated:
 - Setting UI_PROP_CP_APP_MODE disables <?varhtml..?> and the Javascript function print().
 - Setting UI_PROP_CP_APP_DIR limits file access for the CP application to the files and subdirectories within
   the provided directory. Setting UI_PROP_CP_APP_DIR does not affect UI_PROP_RESOURCE_DIR. This has to be
   set to an appropriate value in addition to setting UI_PROP_CP_APP_DIR if required.

The application directory contains all application specific dialogs and resources. Dialogs are only
allowed to refer to images and videos within this directory.



\section gui_directgui_viewer ADK-GUI Viewer

\image html guiprt_014DirectGUIViewer.png
\image latex guiprt_014DirectGUIViewer.png

\subsection gui_introduction_guiviewer Introduction

GUI Viewer allows viewing dialogs on a PC like they would be displayed on a terminal running ADK-GUI
to speed up development of dialogs.
To support different terminal types a terminal definition file is used that specifies display
dimensions and available buttons.

\subsection gui_system_requirements System Requirements

GUI Viewer requires Windows 7 or newer to run. Versions for Linux may be provided upon request.

\subsection gui_installation_guiviewer Installation

GUI Viewer is provided as ZIP file. Just unzip the file for installation. A Windows installer is not
provided / required.
If \c gui_viewer.exe does not start, it may be required that *Microsoft Visual
C++ 2008 SP1 Redistributable Package (x86)* must be installed. Installer is available here:

\b http://www.microsoft.com/de-de/download/details.aspx?id=5582

When some non-standard fonts are used on the terminal, these have to be installed
separately on Windows or the display of text may be different from the terminal.

\subsection gui_usage_guiviewer Usage

When starting GUI Viewer it starts with the last used configured device and configuration.
On first startup the device and configuration have to be set up as follows:

-# Select menu \a File -> \a Select \a Device to load the desired terminal configuration file (*.def).
-# Select menu \a File -> \a Load \a Configuration to load the \c gui.ini file of the terminal application to be sure that the correct key mapping, font, etc. is used. Be sure that the used font is installed in your PC environment. Otherwise the GUI Viewer will use another font and you won't get similar result displaying the files in the GUI Viewer and running the terminal application. The \c gui.ini file must match the terminal type or the font and key settings may be wrong.
-# Select menu \a File -> \a Load \a HTML or press the ![ ](guiprt_015ButtonThreeDots.png) button to select a *.html, resp. *.tmpl file to load and display it. Alternatively you could enter the path and the filename directly in the input field next to the button and press return.
-# Alternatively CP applications may be loaded using \a File -> \a Load \a Application.
-# In case you changed the HTML source code or the \c *.dat file data of the currently displayed document you may reload the files by pressing ![ ](guiprt_016ButtonUndo.png)
-# GUI Viewer may display the dialogs on an external terminal. For this you need to connect to it using ![ ](guiprt_017ButtonCancel.png)
The connection may be terminated by pressing ![ ](guiprt_018ButtonOK.png)
The terminal must be using guiserver 1.5.2 or newer and debugging must have been enabled on it. Optionally the "ipdisplay" package may be used to display the current IP address of the terminal after startup.
-# The "Tools" menu offers tools for displaying and editing the internal key value map, for editing *.dat files, for displaying the JavaScript console and for displaying performance numbers.

\note
For the virtual keyboard to work, the input focus must have been set, i.e. if the focus is
off, click into an input field or click at the terminal display to activate it.

\note
If GUI Viewer detects that an *.html, *.tmpl or *.dat file has changed it automat-ically reloads the corresponding dialog within 5s.

\subsection gui_detailed_usage Detailed Usage

\subsubsection gui_select_device Select Device

After specifying a terminal device the GUI Viewer tries to load the device definition file and apply the definitions.
The GUI Viewer tries to load the terminal shape image and put the defined keyboard buttons on the terminal shape image.
In case of success, the user could click with the mouse on a key and the GUI Viewer will simulate a key press.
In case the HTML renderer is able to handle the key press, it will do so and present the result.

\note If an HTML files is already loaded, it needs to be re-loaded after selecting a new device to give the correct display.

\subsubsection gui_load_configuration Load Configuration (gui.ini)

After specifying a configuration file the GUI Viewer tries to load the configuration file and apply the configuration.
This is the \c gui.ini file that contains the default font and size. Make sure that the font is installed on your PC to have a WYSIWYG display.
GUI Viewer will always use the layout provided in the \c [layout] section. If different layouts are to be used, it is considered to
use different \c gui.ini files containing the different layouts.

\subsubsection gui_reload_an_html_file (Re-)Load an HTML File

The GUI Viewer tries to load the specified HTML file, as well as the corresponding data file (if exist). Afterwards the
GUI Viewer parses the HTML source code and tries to replace the supported \c <? \c * \c ?> tags with the information from the data file, if specified.

If the directory of the HTML file contains a directory \c js_root, the JavaScript file functions are enabled and this directory is used as root directory
for the JavaScript file functions.

\subsubsection gui_pressing_keyboard_keys Pressing Keyboard Keys

In case an \c *.html or \c *.tmpl file was loaded the GUI Viewer simulates the configured key press. In case the HTML renderer
is able to handle it, the specified action will be performed.

\subsubsection gui_simulating_dialog_behavior Simulating Dialog Behavior

When the dialog would be terminated using some button or input key the resulting action is displayed in the result line of
the GUI Viewer window. In case of a "load" action the new dialog is loaded and displayed in GUI Viewer.

\c *.dat files may be used to provide variable data that is used for substituting \c <?var \c ..?> XML processing instructions
and that normally would be provided by the terminal application. In addition it may be used to make GUI Viewer load other
HTML dialogs based on the return code of the dialog.

\subsubsection gui_running_cp_applications Running CP Applications

Select \a File -> \a Load \a Application to load the manifest file of a CP application. GUI Viewer will then load the configuration files,
the CSS file and display the dialog listed in the "desktop" section in the manifest file.

"(CP App Mode)" is shown in the title bar to indicate that GUI Viewer is running in CP application mode.

To be able to find the related files, the manifest file needs to be found next to the directory containing the resource files.
This is the same directory layout as it is used on the terminal.

When running the application, GUI Viewer will automatically select the directory within the resource tree that corresponds
to the selected device. Use \a File -> \a Select \a Device to switch to the desired device before loading the application.

After loading an application configuration and manifest, data is stored in the key-value map and can be checked using the value editor.

\a File -> \a Load \a Application activates CP application specific restrictions:\n
- While the restrictions are effective, a closed lock is shown: ![ ](guiprt_019ButtonLockClosed.png)
- CP applications have only access to their own resources (images, videos), access to other directories is blocked.

\note Sponsor and serial number transmitted to the cloud are taken from the environment variables SPONSOR and SERIALNO.

\subsubsection gui_connecting_to_terminal_hardware Connecting to Terminal Hardware

By pressing ![ ](guiprt_017ButtonCancel.png) GUI Viewer can connect to a
terminal and display the dialogs on the real terminal.  For connecting
the IP address of the terminal needs to be provided. For security
reasons only development terminals support being used together with
GUI Viewer.

On the terminal the following software needs to be present:
- guiserver version 1.5.2 or newer. Preferably the version of GUI Viewer
  should match the version of guiserver to have the same supported feature set on both sides.
- Fonts to be used have to be installed on the terminal.

Optionally the ipdisplay package can be installed to display the IP
address of the terminal on screen after startup to simplify obtaining
the IP address of the terminal. Note that you have to sign this
package using a signing card matching the certificates installed in
your terminal before installing this package.

As long as GUI Viewer is connected to a terminal it will display
dialogs both on the PC and on the terminal display. Dialogs may be
operated from the PC or from the terminal keyboard / touch
screen. Mirroring of dialogs is limited to whole dialogs. For example
when a dialog is finished and a new dialog is shown, the new dialog is
also shown on both the PC and the terminal but actions within the
dialog like scrolling up and down or entering some data into input
fields are not mirrored to the other side.

\subsection gui_value_editor Value Editor

The GUI system supports the use of variables to customize parts of
dialogs or to de-fine initial values of input fields and variables are
also used to return the content of input fields when a dialog
returns. GUI Viewer stores the value of the variables and passes them
on to the next dialog. Value editor allows displaying and editing of
these variables.

\image html guiprt_021GUIViewerValueEditor.png
\image latex guiprt_021GUIViewerValueEditor.png

New variables are created by entering a name in the empty "Name" field
at the end of the table. Variables are deleted by deleting the name
from the table. All variables may be deleted by pressing the "Clear"
button.

"Values from \c *.dat files have priority" determines whether values
found in a \c *.dat files or values displayed in the table are used when
invoking a dialog. If the checkmark is not set, then values from the
table have precedence. If set values are taken from the \c *.dat file
which is also the case if the Value Editor window is not shown.

\subsection gui_data_file_editor Data File Editor

The data file editor is a tool for creating and updating \c *.dat
files.

The editor consists of two tabs. The first labeled "HTML settings" is
used for editing values for use with HTML files. It has the following
elements:
- \b Catalog: name of the text catalog file
- \b Variables: List of variables with the corresponding value
- **Load file on return:** Mapping of return codes to URLs to be loaded

New entries can be added at the end of the list by entering a new name
or return code.

Variable names can be extracted from an HTML file and inserted into
the variables table by selecting the menu entry **File -> Import
from HTML ...**.

Variable names and values can be imported from the current set of stored values
by selecting the menu entry **File -> Import from Values**.

The second tab labeled "Templates" is used for editing settings for
template files. It has the following elements:

- **Dialog text:** This is the text shown in the dialog
- **Menu entries:** This is the list of menu entries for the menu template.
  It is not used for other dialog types.
- **Preselected menu entry:** This lists which of the above menu entries
  is initially selected when the dialog is shown.

\image html guiprt_022GUIViewerHTMLSettings.png
\image latex guiprt_022GUIViewerHTMLSettings.png
\n
\image html guiprt_023GUIViewerTemplates.png
\image latex guiprt_023GUIViewerTemplates.png

\subsection gui_javascript_console JavaScript Console

Selecting this menu entry opens the JavaScript console. This will
display errors during JavaScript script execution and it will display
output generated by calls to con-sole.log() from within the script.
The JavaScript console will begin recording the output when started
for the first time. Once it has been started it will even record the
output when the window gets closed. In this case the output can be
viewed by re-opening the JavaScript console window.

\subsection gui_performance Performance

This tool shows some performance statistics numbers for the last shown
dialog. If a terminal has been connected performance numbers are shown
both for the PC and the terminal. The following values are shown:

- **CSS:** Time required for loading and parsing the CSS file
- **HTML:** Time required for parsing the HTML file, reading the CSS
  attributes referenced in the HTML file and determining the layout
- **Draw:** Time required for sending drawing commands to the graphics
  subsys-tem. At this point in time the dialog may not be visible on
  screen yet, depend-ing on the graphics subsystem there may be a short
  delay until the dialog can be seen on screen. This delay cannot be
  measured by GUI_Viewer since it has no access to the internal
  operation of the graphics subsystem.

\subsection gui_debuglog Debug logs

Selecting this menu entry allows writing debug logs to a file. The logs are
similar to activating GUI_LOGMASK and show the resulting HTML code among
other information. If a terminal is connected, the client logs are written
to this file as well. Selecting the menu again stops logging to the file.

\subsection gui_command_line_interface Command Line Interface

GUI Viewer can be invoked from the command line. In this case it is
possible to pass options and parameters to select which configuration
to use and which file to show. In case there is already an instance of
GUI Viewer running these parameters and options are passed on to this
instance for processing and the newly started GUI Viewer immediately
returns.

The usage is like this:

    gui_viewer [options] [<url>]

\c \<url> is the file name of the dialog file to be displayed. If it is
not provided GUI Viewer starts with an empty terminal screen.

The command line options supported are:

    --device <device.def> This options allows selecting the device to
be used just like using the "Select Device" menu entry. <device.def>
is the name of the *.def file to be used

    --config <gui.ini>
This options sets the configuration (\c gui.ini) file. \c <gui.ini> is the filename of that file.

    --region \<id>
By this option the region id is selected given in \c \<id>.

    --check-terminal
This option prints the model name of the terminal to standard output. In case no terminal is connected "none" is printed.

    --version
The version information and configuration is printed to standard ouput.

\subsection gui_device_definition_file Device Definition File

The device definition file (*.def) specifies the terminal image used
as background image and the size and position of display and buttons
of the terminal. It has INI file format and contains the following
sections.

\subsubsection gui_terminal [terminal]

This section contains the name, model_id and image of the terminal. The name is displayed as the window title
of the GUI Viewer, the image is displayed as background image.


<table>
<tr><th>Property <th> Description
<tr><td> name     <td> Terminal name to be displayed in the window title
<tr><td> model_id <td> Model ID to be used for selecting resource files when running CP applications
<tr><td> image    <td> Optional image of the terminal. If an image is provided, keys are invisible overlays on
                       the image. If no image is provided, keys are drawn by gui_viewer, labels need to be provided
                       for the keys.\n
                       It is recommended to use a relative path for the image and use '/' as directory separators (even for
                       Windows). The path is considered to be relative to the *.def file. GIF, JPEG and PNG images are
                       supported.
<tr><td> scale    <td> Optional scaling factor for displaying the terminal display. All coordinates found in the device
                       definition file are scaled by this factor.
</table>

Example:
\code
[terminal]
name=VX820
model_id=VX820
image=../shapes/vx820_shape.png
\endcode

\subsubsection gui_terminal_display_device_definition_files [terminal_display]

This section defines the position of the upper left corner along the width and height of the terminal
display. Coordinates are relative to the shape image and start with (0,0).
The following keywords are used to specify the coordinates:

Property | Description
---------|------------
x_pos    | Horizontal position of the display
y_pos    | Vertical position of the display
width    | Width of the display
height   | Height of the display

Width and height must match the size of the physical display in pixels to obtain a preview that is as
close as possible.

Example:
\code
[terminal_display]
x_pos=65
y_pos=80
width=240
height=320
\endcode

\note The coordinates are scaled by the scale factor!

\subsubsection gui_terminal_key__device_definition_files [terminal_key_*]

As with the display terminal keys may be specified. These are placed as invisible buttons on top of
the background image. Clicking on them emulates pressing the terminal key.
The number and position of keys is terminal specific. The following keys are supported:

Section                               | Description
--------------------------------------|---------------------------------------
terminal_key_F01 ... terminal_key_F12 | Function keys F1 ... F12
terminal_key_0 ... terminal_key_9     | Numeric keys on the terminal
terminal_key_cancel                   | Red cancel key
terminal_key_back                     | Yellow back key
terminal_key_return                   | Green OK key

For each section the coordinates / sizes are specified the same way as for the display.
If no image is provided and keys are rendered by gui_viewer, a label needs to be provided
for rendering the key.

Property | Description
---------|------------
x_pos    | Horizontal position of the display
y_pos    | Vertical position of the display
width    | Width of the display
height   | Height of the display
label    | Key label, required when no terminal image was given

Example:
\code
[terminal_key_0]
x_pos=149
y_pos=632
width=74
height=50
label=0

[terminal_key_F10]
x_pos=63
y_pos=634
width=74
height=49
label=F10
\endcode

So the key button area for the '0' key is positioned at 149,632 of the terminal shape image, 74 by
50 pixels in size and the key button area for the '*' key (mapped to F10) is positioned at 63,634
and 74 by 49 pixels in size.

The installation package contains device definition files for most terminal types in the *devices* directory.

\note The coordinates are scaled by the scale factor!

\subsection gui_data_files Data Files

*.html files and *.tmpl files may contain XML processing instructions (e.g. \c <?var \c ...?> to insert
variable data. GUI Viewer will look up this information in *.dat files.
These have the same base name as the HTML file but have the extension .dat. *.dat files have INI
file format and support the following sections:

\subsubsection gui_value_section [value] Section

This section contains the variables available for processing the HTML file. The variable name is
used as key and the content is used as value in the section.

Example:
\code
[value]
mytext=Text from dat file
\endcode


Value section might also specify data for \c <?foreach?> statements. See the following HTML example
snippet with \c <?foreach \c ?> processing syntax.

HTML Example:
\code
<?foreach test1
|(table border=1)(tr)(th)Name(/th)(th)Value(/th)(/tr)
|(tr)(td)[name](/td)(td)[value](/td)(/tr)
|(/table)
|Empty table(br)?>
\endcode

Corresponding DAT file entry:
\code
[value]
test1=(<({"name":"item1","value":1},{"name":"item2","value":2},{"name":"item3","value":3})>)
\endcode


\subsubsection gui_template_section [template] Section

This section contains the text to be substituted for \c <?insert \c text?> in *.tmpl files.

Example:
\code
[template]
text=Inserted text<br>Second line!
\endcode

\subsubsection gui_template_menu_section [template_menu] Section

This section contains the text to be substituted for \c <?insert \c menu?> in *.tmpl files.
The [template_menu] section is able to define several menu entries. For each menu item there is one
line of the form \c \<return \c value>=\<text>. \c \<text> is the text to be displayed for this menu item
and \c \<return value> is the value returned when this menu item has been selected.
Options belonging to a menu item can be set using: \c \<return \c value>_opt=\<option \c value>. A menu item
may be preselected using \c preselected=\<return \c value>.

Example:
menu.dat file:
\code
[template_menu]
selected=2
1=Menu Item 1
2=Menu Item 2
3=Menu Item 3
1_opt=0
\endcode

\subsubsection gui_return_section [return] Section

For creating a mock-up of a terminal with GUI viewer it is supported to load other HTML dialogs when
the current dialog returns with a specific return code.
The mapping of return codes to names of HTML dialogs to load is done in this section.

Example:
menu.dat file:
\code
[return]
1=submenu1.html
2=submenu2.html
3=submenu3.html
-1=homemenu.html
\endcode

In this example if the 3rd menu is selected, then submenu3.html gets loaded.

\subsubsection gui_catalog_section [catalog] Section

The \c [catalog] section specifies a catalog file that can be used by the HTML file with XML
processing instruction \c <?text \c ...?>.
For more details please refer to chapter \ref gui_multilanguage_support that describes
Multi-language support with catalog files.

Example:
catalog.dat file:
\code
[catalog]
file=en.ctlg
\endcode

GUI viewer comes along with demo HTML files demonstrating usage of catalog files.


\subsection gui_known_issues Known Issues

- GUI Viewer always emulates a color display, emulation of B/W displays is not supported. Therefore, when colors are used in HTML files the emulated display will be different from the terminal display.
- *.html and *.tmpl files both use *.dat files for providing dialog data. This may lead to a conflict, for example both test.html and test.tmpl would refer to test.dat.
- Returned dialog variables will not be passed on to the next dialog.











\section gui_setup System Setup and Requirements

The following are the hardware and software requirements of the ADK GUI system.

\subsection gui_hardware_support Hardware Support

The ADK GUI system is hardware platform agnostic and supports installation on V/OS,
Raptor and V/OS3 terminals.

The GUI system is intended to run across the entire hardware portfolio. The following table list
different characteristics of these devices.

Model           | Touch | Color | Resolution | Keypad                   | Function Keys    | Resource Path
----------------|-------|-------|------------|--------------------------|------------------|--------------
Vx820           | Yes   | Yes   | 240x320    | 0-9,*,#,CAN,CORR,OK      | ---              | 240x320C15T
Vx675           | No    | Yes   | 320x240    | 0-9,*,#,CAN,CORR,OK      | 4+4*Cursor+Enter | 320x240C24N
Mx915           | Yes   | Yes   | 480x272    | 0-9,CAN,CORR,OK          | ---              | 480x272C13T
Mx925           | Yes   | Yes   | 800x480    | 0-9,CAN,CORR,OK          | ---              | 800x480C13T
Ux100           | No    | No    | 128x64     | 0-9,CAN,CORR,OK,INFO     | 2                | 128x64M16N
e280            | Yes   | Yes   | 320x480    | POWER                    | ---              | 320x480C0T
e285            | Yes   | Yes   | 240x320    | 0-9,*,#,CAN,CORR,OK      | ---              | 240x320C15T
Carbon X10      | Yes   | Yes   | 854x480    | ---                      | ---              | 854x480C0T
M400            | Yes   | Yes   | 854x480    | 0-9,*,#,CAN,CORR,OK      | ---              | 854x480C15T
P400/V400       | Yes   | Yes   | 320x480    | 0-9,*,#,CAN,CORR,OK      | ---              | 320x480C15T
P200/V200c      | No    | Yes   | 240x320    | 0-9,*,#,CAN,CORR,OK      | 2+4*Cursor       | 240x320C21N
V200t/V205c     | No    | Yes   | 320x240    | 0-9,*,#,CAN,CORR,OK      | 2+4*Cursor       | 320x240C21N
V240m/V400m     | Yes   | Yes   | 320x480    | 0-9,*,#,CAN,CORR,OK      | (Optional: Camera)| 320x480C15T
P630 (V/OS3)    | Yes   | Yes   | 320x480    | 0-9,*,#,CAN,CORR,OK      | ---              | 320x480C15T

Users need to take these characteristics into account when designing GUI dialogs for the different hardware platforms.

\note
e280 has no keypad, therefore, the power button it is not counted as keypad key. The power button is no regular key,
but it can be used as accesskey.
\par
\note
V240m has a variant with camera for barcode scanning. This variant with camera has an
additional button on the left side which may be used as function key.
\par
\note
For a detailed description of the API functions, see \ref vfigui.

The ADK GUI system can also run on Microsoft Windows platforms with underlying FLTK installations.

\subsection gui_software_requirements Software Requirements

ADK-GUI requires the installation of corresponding platform packages.
For details please refer to the release notes.




\subsection gui_splash Splash Screen Support
guiprtserver (and guiserver) support displaying a splash screen after startup to give the user some feedback
until the payment application is ready. To activate the splash screen a PNG or JPEG image needs to be provided
to be displayed on the splash screen. It needs to be found in the following location:

System | Path for splash screen image
-------|-------------------------------
V/OS   | /etc/config/adk/gui/

\note On V/OS packages of type "config" are used to install files to /etc/config. Set group to "shared" and file permissions to "644".

The following file names are probed (\<width>x\<height> refers to the screen size):
- splash-\<width>x\<height>.jpg (e.g. splash-320x240.jpg)
- splash-\<width>x\<height>.png
- splash.jpg
- splash.png

The first file found will be used as splash screen. The file extension must match the file type.

The image is centered on screen. If the image is smaller than the screen, the background is filled with
the average color of the 4 image corners.

\section gui_troubleshooting Troubleshooting

\subsection gui_logging Logging

Since version 1.4.0 the UI system has added logging support for diagnostics and
problem analyses. On all platforms logging messages can be enabled by setting environment
variable \c GUI_LOGMASK (or \c PRT_LOGMASK for ADK Printer). The variable is defined
as a bitmask consisting of following decimal values:
\verbatim
1   = LOG_EMERG:   log messages for conditions, if system is unusable
2   = LOG_ALERT:   log messages, which action must be taken immediately
4   = LOG_CRIT:    log messages for critical conditions
8   = LOG_ERR:     log messages for error conditions
16  = LOG_WARNING: log messages for warning conditions
32  = LOG_NOTICE:  log messages for normal but significant conditions
64  = LOG_INFO:    log messages with informational contents
128 = LOG_DEBUG:   log debug-level messages
\endverbatim

\c LOG_EMERG represents the lowest logging level, which only generates messages,
if the UI component cannot be started or is not working at all.
The highest level \c LOG_DEBUG will produce many messages of low-level
I/O routines and should only be enabled for debugging purposes.
For first analyses it is recommended to set \c LOG_ERR,
which will provide information about error conditions,
e.g. wrong resource or image paths, communications problems between GUI server and client.
In addition, \c LOG_INFO can be activated to display all communication data
(JSON messages) between application and the UI system.

The environment variable \c GUI_LOGMASK can be used for the following UI components:
- ADK-GUI server (\c guiserver and \c guiprtserver)
- ADK-GUI library (\c libfltkgui)
- Remote GUIPRT library (\c libvfiguiprt)

For each platform, UI components use different defaults for \c GUI_LOGMASK and also the output channels depend
on the used operating system:

- V/OS\n
  On V/OS, Raptor and V/OS3 the default value for \c GUI_LOGMASK is \c 0,
  which means that no logging outputs are activated by default.
  Logging messages directly are redirected to stderr of the applications console.
  Depending on device the system console outputs are activated differently
  (e.g. on MX9 press key combination 3-5-7 at terminal startup).
  Since there is no possibility to set environment variables for applications with sysmode,
  the variable \c GUI_LOGMASK can be either set for IPC libraries with <tt>setenv()</tt>
  from inside application at startup or it can be added to start file of V/OS installation package as follows:\n
  \verbatim GUI_LOGMASK=64 gui_app \endverbatim
  (V/OS startup file example)\n\n

- Android\n
  On Android the default value for \c GUI_LOGMASK is \c 255 and by default all logging
  messages are activated. Logging messages are directly passed to Android Logging API.
  Application might set environment variable \c GUI_LOGMASK with <tt>setenv()</tt> at startup to change the
  default values for the logging masks to enable a filter for the logging messages.

\note If both \c GUI_LOGMASK and \c PRT_LOGMASK are unset, UI components will use ADKLOG library,
if it is installed on the system. For more details, please refer to chapter below.

A logging message consists of several fields and the content is similar on the several platforms:

\a V/OS, \a Raptor:

A console logging message on V/OS and Raptor:

\image html 005_gui_Logging_vos.png
\image latex 005_gui_Logging_vos.png

1) \a timestamp: \n
The timestamp format is \c \<seconds>.\c \<milliseconds>. The value represents the time since beginning of capture (startup of UI component).

2) \a log \a prefix, \a log \a channel: \n
Since version 2.0.0 ADK-GUI and ADK Printer server were combined to one server component
and the logging message format has changed.
Former field \c logging \c component was replaced by \c log \c prefix and this field is no longer used to
identify the component.
The field now is set to GUIPRT for both combined services to specify the system including all
components of ADK-GUI and ADK Printer.
For identification of the specific subcomponent the new field \c log \c channel was introduced to
identify logging outputs for the following components:

- \b GUI: ADK-GUI server (guiserver) or GUI related module in combined guiprtserver
- \b PRT: ADK Printer server (prtserver) or ADK Printer related module in combined guiprtserver
- \b GUIPRT: shared module in combined guiprtserver
- \b GUICL: Remote GUI library, UI client
- \b PRTCL: Remote ADK Printer library, printer client
.
<br>\a Android:

A logging message on Android captured with \c logcat tool coming along with ADB (Android Debug Bridge):

\image html 004_gui_logging_android.png
\image latex 004_gui_logging_android.png

1) \a time: \n
The time format is <tt>\<hour\>:\<minute\>:\<seconds\>.\<milliseconds\></tt>

2) \a log \a level
IPC logging levels are mapped to Android logging levels as follows:
<table>
<tr><th>IPC logging level<th>Android logging level<th>Description
<tr><td><tt>LOG_EMERG</tt><td><tt>A</tt><td>Assert
<tr><td><tt>LOG_ALERT</tt><td><tt>A</tt><td>Assert
<tr><td><tt>LOG_CRIT</tt><td><tt>E</tt><td>Error
<tr><td><tt>LOG_ERR</tt><td><tt>E</tt><td>Error
<tr><td><tt>LOG_WARNING</tt><td><tt>W</tt><td>Warning
<tr><td><tt>LOG_NOTICE</tt><td><tt>I</tt><td>Info
<tr><td><tt>LOG_INFO</tt><td><tt>I</tt><td>Info
<tr><td><tt>LOG_DEBUG</tt><td><tt>V</tt><td>Verbose
</table>

3) \a log \a channel: \n
Same logging channels as used for V/OS and Raptor.

<br><br>
<b>Support for ADKLOG: Logging with liblog library</b>

Since version 2.15.3 ADK-GUI and ADK Printer server has added support for ADKLOG component.
ADKLOG is required to implement the new ADK logging concept, which provides the Logging Control Panel
(LCP) used as central instance to configure and enable logging for the several ADK components.
For this, LCP uses configuration files (for GUI and for PRT), which are read by \c liblog library.
If installed on the system and environment variables \c GUI_LOGMASK and \c PRT_LOGMASK are not set, \c liblog
library will be used by client import libraries (\c libvfiguiprt, \c libvfiprt) and server components
(\c guiprtserver, \c guiserver, \c prtserver) to output logging messages. In this case, the
logging messages are passed to \c liblog library instead of using UI logging methods as described above.

In order to lookup the corresponding configuration files, ADKLOG uses component identifiers, which are
reserved for each ADK component. GUI and PRT use the following:

Component Id | Configuration file | Description
-------------|--------------------|------------
\c GUI       | \c GUI_log.conf    | GUI server related log settings
\c GUICL     | \c GUICL_log.conf  | GUI client related log settings
\c PRT       | \c PRT_log.conf    | PRT server related log settings
\c PRTCL     | \c PRTCL_log.conf  | PRT client related log settings

The configuration files contain several settings for logging like output channels, verbosity and a logging mask,
which is similar to environment variables \c GUI_LOGMASK and \c PRT_LOGMASK. For more details about configuration
settings or logging message formats, please refer to documentation of ADKLOG project.

\note
If one of the environment variables \c GUI_LOGMASK and \c PRT_LOGMASK is set, GUIPRT logging mechanism is preferred and ADKLOG with \c liblog is disabled.
Only if both environment variables are unset, GUI and PRT will lookup \c liblog library from the system to enable logging via ADKLOG.

\subsection gui_log_hide_info Hiding information in the Log
ADK-GUI does not know about the meaning of information and, therefore, by default logs all information, even sensitive one.
The application may exclude sensitive information from logging by setting the variable "_loghide" in the key value map provided to
commands like e.g. uiInvokeURL(). The value is the comma separated list of variable names that should be hidden in the log. When a variable
name is contained, all characters of the value are replaced by '#', so that only the length of the value remains visible in the log but not the content.

\n
\subsection gui_guiserver_is_terminated Guiserver is terminated by OOM killer on V/OS

If an application allocates a huge amount of memory (e.g. by using big images or scaling up an
image to arbitrary size), the GUI service (guiserver) may run out of resources and is
terminated by the OOM killer of system (OOM=out of memory), if V/OS is not able to provide this memory.

In this case one of following messages may appear in console:

\code
guiserver invoked oom-killer: gfp_mask=0x200da, order=0, oomkilladj=0
...
Out of memory: kill process 6162 (guiserver) score 12509 or a child
\endcode

or

\code
terminate called after t[ 84.320000] grsec: denied resource overstep by requesting 4096 for
RLIMIT_CORE against limit 0 for /home/usr1/bin/guiserver[guiserver:544]
uid/euid:0/0 gid/egid:0/0, parent /bin/busybox[sh:102] uid/euid:0/0 gid/egid:0/0
\endcode

V/OS is configured to use overcommitted memory. This means that when \c malloc() or new operator
return non-NULL, there is no guarantee that the memory really is available.
In case it turns out that the system is out of memory, the process is killed by the OOM killer
of the system.

For \c new and \c new[] operators, a possible way to detect the OOM during runtime is by catching
exception \c bad_alloc as follows:
\code
#include <string>
#include <stdio.h>
#include <stdlib.h>
#include <exception>
using namespace std;

int main()
{
   try {
      int *p=new int[99999999999999999999999999];
      *p=1; // force exception
   }
   catch(exception& e)
   {
      printf("This was to much memory, thrown e=%s !\n",e.what());
   }
   return 0;
}
\endcode

This would imply that all components (even OS libraries the guiserver is using) would implement
such mechanism.

\b BUT: This exception is not thrown for invocations of \c malloc()!

In summary there is no chance to avoid OOM kills at all, unless V/OS is changed to use overcommitted
memory.
The only way to avoid OOM kills is to reduce usage of dynamic memory (e.g. by using smaller images).


\subsection gui_performance_optimizations_vos Performance Optimizations

When creating HTML documents for a terminal it has to be considered that it has much less computing
power compared to a desktop computer and even a smart phone.
Therefore, care has to be taken when designing HTML pages and style sheets to avoid computationally
expensive tasks. The following list gives some tweaks that can be used to speed up the display of
dialogs:

- Avoid large PNGs with alpha channel. Using an alpha channels needs to mix the image with the background. This process has turned out to be quite slow.
If possible the transparent areas should be replaced with pixels showing the background, i.e. eliminating the transparency.
Note however, that the transparent channel needs to be eliminated altogether since it already slows down things even if all pixels are marked opaque.
- Nested tables need several passes in the layout process. The number of passes depends on the nesting level. If possible use rowspan and colspan to reduce the nesting level of tables.
\par c) GUI system Configuration File














\section gui_migrating Migrating from Version 1.x to 2.x

This chapter contains detailed change descriptions between version 1.x and version 2.x.

\subsection gui_considerations Considerations

Version 2.x breaks compatibility to be able to fix some issues that exists in version 1.x. Furthermore,
it paves the way for adding of new features in upcoming releases. Minor code changes are required when
switching from version 1.x to 2.x. This chapter lists the incompatibilities and the changes required in
the application.

-# Since GUI and printer server have been merged into one component, the include files have been
   moved from the gui directory to a common HTML directory.
   For example \c \#include \c "html/gui.h" must be used instead of \c \#include \c "gui/gui.h".
-# Components common to GUI and printer have been moved to the common namespace \c vfihtml.
   This new namespace is automatically referenced by \c vfigui and \c vfiprt.
   In most cases, no action is required.
-# The use of \c uiMain() is no longer required or supported. Instead, the application has to use \c main() just like any plain program.
-# UI properties are no longer thread local but have become global by default. Setting a property in one thread now affects all threads. Due to this, the function \c uiThreadCreate() is no longer required or supported. Instead, the POSIX function \c pthread_create() should be used. If for some purpose thread specific properties are required, they can be enabled using \c uiSetLocalProperties().
-# Since \c UI_PROP_TIMEOUT is now global to all threads, switching it back and forth on each dialog invocation may create a race condition and should not be used. For setting up an idle timeout, \c <input \c type="idletimeout"> should be used. This is much more flexible since it specifies the idle timeout inside the HTML document. It also controls the action taken in case of an idle timeout.
-# The default value of \c UI_PROP_TIMEOUT has been changed to -1 (disable global timeout).
-# \c uiReadConfig() no longer internally invokes \c uiLayout() to set the layout. This caused problems when using more than one application since \c uiReadConfig() destroys the first layout as soon as the second one is called. \c uiLayout() now has to be called explicitly by the application.
-# libvfigui has been replaced by libvfiguiprt which is the common client library for GUI and printer.
-# The asynchronous function's interface has been changed. Now, the callback functions gets an object that can be used to read the different types of information provided by the dialog. Two types of operations are supported:
   \li <b>Invoke the asynchronous function without callback.</b>\n
In this case, \c uiInvokeWait is used to get the result of the dialog. It either returns with the result or error code. In case of timeout, it returns \c UI_ERR_WAIT_TIMEOUT. This has to be invoked again to obtain the result. All other cases that required to call uiInvokeWait again are not handled internally and are no longer visible to the application to simplify the use of \c uiInvokeWait.
   \li <b>Invoke the asynchronous function with callback.</b>\n
In this case, all data is passed to the callback via an access object. It is no longer required or possible to use \c uiInvokeWait.
-# A garbage collection function has been added. In case an asynchronous dialog is shown which does not provide a call function and the result has not been read using one of the ui*Wait functions, the result is discarded automatically after displaying some more dialogs within the same region. For this the dialog result has a counter that is increased each time a new dialog is displayed in the same region. If it reaches the limit, the result is considered garbage and released.
-# The request ID has been replaced by a transaction ID. While the request ID is only valid for a single dialog and changed when displaying dialog sequences, the transaction ID stays the same for the whole sequence. Due to this, some call by reference parameters have been replaced by call by value parameters. This change should not affect the application's source code.
-# In version 1.x, if a dialog contains \c action='load \c ...', next dialog loads in sequence as part of processing \c uiInvokeWait (or one of the other \c ui*Wait functions). For version 2.x, Loading happens independent of \c uiInvokeWait, which should speed up the display dialogs in some cases. The application does not have to be changed to take advantage of this.
-# A new 'flags' field has been added to struct \c UIRegion. When set to zero, it becomes compatible with version 1.x.
-# Support for hierarchical regions has been added. \c uiEnterRegion() and \c uiLeaveRegion() are used to navigate within the hierarchy. As long as these functions are not used, regions behave exactly the same as in version 1.x.
-# WebGUI is no longer supported since it has not been used in the field and performance and resource consumption was not competitive compared to the use of the full-blown Opera browser. Therefore, all WebGUI specific functions have been removed. Calls to those functions have to be removed, they have never worked with ADK-GUI anyway.

*/
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
