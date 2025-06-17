---
title: adk_sdi_programmers_guide.dox

---

# adk_sdi_programmers_guide.dox






## Source code

```cpp

div.menuitem.right.submenu {
    background-image: url("../images/submenu.png");
    height:16px;
    width:13px;
    margin-right:5px;
}

/* submenu icon on selected menu item */
div.menuitem.right.submenu:focus {
    background-image: url("../images/submenu_active.png");
}
\endcode
Pseudo CSS class \c focus allows to replace the menu icon on its selection. The path of
the background image is relative to CSS file, which implements this CSS class.\n
Example CSS class to add a radio icon to the left \c \<div\> element:
\code
/* checked radio icon on menu item */
div.menuitem.left.checked {
    background-image: url("../images/radio_checked.png");
    height:20px;
    width:20px;
    margin-right:5px;
    margin-left:5px;
}

/* unchecked radio icon on menu item */
div.menuitem.left.unchecked {
    background-image: url("../images/radio_unchecked.png");
    height:20px;
    width:20px;
    margin-right:5px;
    margin-left:5px;
}
\endcode
CSS classes <tt>checked</tt> and <tt>unchecked</tt> are passed by SDI server as parameter \c \<icon_id\> via dialog API
(see description of CSS class <a href="#menuitem_button"><tt>button.menuitem</tt></a>.
</td>
</tr>
</table>
Region 5:\n
This region contains the most CSS classes and HTML elements of <a href="#dialog_region_5">region 5</a> in dialog.html.\n
Differences are listed as follows:
<ul>
<li> The control bar may not contain a <b>Clear</b> softkey or helper entry. Therefore, the cascaded
CSS classes (e.g. <tt>button.softkey.clear</tt>) take no effect on \c menu.html.
<li> Softkeys and hardkeys used for <b>Up</b> and <b>Down</b> are used to move the menu item selection.
<b>Enter</b> confirms the pre-selected item and lets the menu return with the corresponding result code
for this item. For touch screen devices, menu items can directly be selected by pressing the item area
on the screen.
</ul>
\n
Additional CSS classes (region independent):
<table class="doxtable" style="width:100%">
<tr>
<th>CSS class</th><th>HTML element</th><th>Description</th>
</tr><tr>
<td><tt>body</tt></td><td><tt>div</tt></td><td>
Due to the fact that ADKGUI does not support CSS on the \c \<body\> element, an
additional \c \<div\> element was added on this level, which represents the \c \<body\>.
Therefore, all elements of \c menu.html have this \c \<div\> as common root.
Developers can implement CSS class
\verbatim
div.body
\endverbatim
to specify the style for this element (e.g. a background-color used for the whole document region).
</td>
</tr><tr>
<td><tt>menu</tt></td><td></td><td>
All HTML elements in \c menu.html use additional CSS class name \c menu, which allows to implement dialog specific CSS classes.\n
Examples:
\verbatim
button.menu.softkey.cancel
button.softkey.cancel.menu
\endverbatim
These CSS subclasses are individually applied to cancel button of \c menu.html and do not take effect on other
HTML dialogs.
\verbatim
div.body.menu
div.menu.body
\endverbatim
These CSS subclasses allow to specify individual style for the body \c \<div\> element in \c menu.html
(described above) and do not take effect on other HTML dialogs.
</td></tr>
</table>

\n
\paragraph pgr_idle_html idle.html
\image html idle.png "idle.html: Displays the idle screen"\n
An outer \c \<table\> element (with 5 rows and 1 column) devides the HTML document into 5 regions.
These regions are size dynamic and specify the basic structure of the dialog. CSS access on these regions
is restricted, since regions can be visible or not depending on parameters passed by SDI server.
The content of each region is accessable via CSS and developers can implement following CSS
classes to modify appearance of the visible HTML elements in this region:\n\n
Region 1:\n
This region supports the same CSS classes and HTML elements as <a href="#dialog_region_1">region 1</a> of dialog.html.\n\n
Region 2:\n
This region supports the same CSS classes and HTML elements as <a href="#dialog_region_2">region 2</a> of dialog.html.\n\n
Region 3:
<table class="doxtable" style="width:100%">
<tr>
<th>CSS class</th><th>HTML element</th><th>Description</th>
</tr><tr>
<td><tt>image</tt></td><td><tt>td</tt></td><td>
Table data element containing an arbitrary image, which is displayed
on top of text area (region 4). The image is provided by SDI server via
dialog API. This can be a customer logo, which was installed by separate
download package (see chapter \ref subsubsec_sdi_display_idle_screen).
Developers can implement CSS class
\verbatim
td.image
\endverbatim
to specify the style for this element. For instance, this class can be used to specify content
height portion of image area (region 3) in relation to text area (region 4).\n
If SDI server does not pass content for the text area (region 4), the following cascaded
CSS class is used:
\verbatim
td.image.notext
\endverbatim
This CSS subclass allows to specify an individual region style in dialogs only displaying an image,
e.g. to stretch image area (region 3) to maximal available content height.
\note
If SDI server does not pass an image via dialog API, region 3 is removed and the text area (region 4) expands to maximal available content height.
</td>
</tr>
</table>
Region 4:
<table class="doxtable" style="width:100%">
<tr>
<th>CSS class</th><th>HTML element</th><th>Description</th>
</tr><tr>
<td><tt>text</tt></td><td><tt>div</tt></td><td>
Division element to display arbitrary HTML content, usually a text used as idle screen message. SDI server either uses the default idle text or it can be set with command \ref subsubsec_sdi_set_idle_text. For more details also please refer to chapter
\ref subsubsec_sdi_display_idle_screen).
Developers can implement CSS class
\verbatim
div.text
\endverbatim
to specify the style for this element.
\note The internal HTML content of this \c div element (region 4) is not part of \c idle.html and passed by SDI server via dialog API.

Additional CSS classes for text alignment (see \c dialog.html) are also supported by \c idle.html, but SDI server does not use these CSS classes for idle screen so far.
</td>
</tr>
</table>
Region 5:\n
This region contains the most CSS classes and HTML elements of <a href="#dialog_region_5">region 5</a> in \c dialog.html.\n
Differences are listed as follows:
<ul>
<li> The control bar does not contain softkeys or helper entries <b>Cancel</b>, <b>Up</b>, <b>Down</b>, <b>Clear</b>, <b>Enter</b> as used in in \c dialog.html.Therefore, the softkey/helper specific
CSS classes (e.g. <tt>button.softkey.enter</tt>) take no effect on \c idle.html.
<li> The control bar uses other symbols for softkeys or helper entries and the associated hardkeys
have a different meaning:

\image html softkeys_idle.png "Idle screen softkeys used for devices with touch screen capability"\n
\image html helpers_idle.png "Idle screen helpers for hardkeys used for devices without touch screen capability"

Descriptions of the button/helper entries according its sequential order above:
<ul>
<li><b>Info:</b> User can press this softkey or cancel key on keypad to display information
                 about SDI server like software version and status of communication interface.
<li><b>Menu:</b> User can press this softkey or enter key on keypad to show the menu with communication
                 interface settings. This menu allows the user to select a connection profile,
                 which SDI server shall use for communication.
</ul>
</ul>
\n
Additional CSS classes (region independent):
<table class="doxtable" style="width:100%">
<tr>
<th>CSS class</th><th>HTML element</th><th>Description</th>
</tr><tr>
<td><tt>body</tt></td><td><tt>div</tt></td><td>
Due to the fact that ADKGUI does not support CSS on the \c \<body\> element, an
additional \c \<div\> element was added on this level, which represents the \c \<body\>.
Therefore, all elements of \c menu.html have this \c \<div\> as common root.
Developers can implement CSS class
\verbatim
div.body
\endverbatim
to specify the style for this element (e.g. a background-color used for the whole document region).
</td>
</tr><tr>
<td><tt>idle</tt></td><td></td><td>
All HTML elements in \c idle.html use additional CSS class name \c idle, which allows to implement dialog specific CSS classes.\n
Examples:
\verbatim
button.idle.softkey.info
button.softkey.info.idle
\endverbatim
These CSS subclasses are individually applied to info button of \c idle.html and do not take effect on other
HTML dialogs.
\verbatim
div.body.idle
div.idle.body
\endverbatim
These CSS subclasses allow to specify individual style for the body \c \<div\> element in \c idle.html
(described above) and do not take effect on other HTML dialogs.
</td></tr>
</table>

\n
\paragraph pgr_pin_html pin.html
<table border='0' style="width:100%">
<tr>
<td>
\image html pin.png "pin.html: PIN entry on devices with keypad"
</td>
<td>
\image html pin2.png "pin.html: PIN entry with virtual keyboard on devices w/o keypad"
</td>
</table>
\n
Depending on hardware capabilities the PIN prompt dialog \c pin.html has different content:
<ul>
<li> PIN entry on devices with keypad:\n
On devices with physical keypad the PIN digits are always entered via hardkeys. In this case
the outer \c \<table\> element devides the HTML document into 6 visible regions, whereas region 3
contains the PIN prompt message and region 4 the PIN input field. By detault, region 5 is empty, but
the optional text for this region (e.g. a disclaimer) which can be provided with a custom text catalog
(for more details see chapter \ref subsubsec_sdi_custom_text_catalogs).
The control bar (region 7) displays key helpers to hint the user that cancel, clear and enter hardkeys
can be used. The virtual keyboard (region 6) is always disabled and invisible.
<li> PIN entry with virtual keyboard on devices w/o keypad:\n
On devices without physical keypad the PIN digits are entered with a virtual keyboard on touch screen.
In this case the outer \c \<table\> element is added an additional region 6, which contains the virtual
keyboard. The control bar (region 7) displays softkeys to cancel/confirm the PIN entry and
to backspace softkey to clear already entered digits from the PIN input field.
</ul>
Regions 1-7 of pin.html are size dynamic and specify the basic structure of the PIN dialog. CSS access on
these regions is restricted, since regions can be visible or not depending on parameters passed by
SDI server. The content of each region is accessable via CSS and developers can implement following CSS
classes to modify appearance of the visible HTML elements in this region:\n\n
Region 1:\n
This region supports the same CSS classes and HTML elements as <a href="#dialog_region_1">region 1</a> of dialog.html.\n\n
Region 2:\n
This region supports the same CSS classes and HTML elements as <a href="#dialog_region_2">region 2</a> of dialog.html.\n\n
<a name="pin_region_3">Region 3:</a>
<table class="doxtable" style="width:100%">
<tr>
<th>CSS class</th><th>HTML element</th><th>Description</th>
</tr><tr>
<td><tt>pintext</tt></td><td><tt>td</tt></td><td>
Table data element, which contains HTML content with the PIN prompt message. This HTML content consists of a \c \<div\> element (described below).
Developers can implement CSS class
\verbatim
td.pintext
\endverbatim
to specify the style for this element.
Please note that this style is applied for both PIN text regions 3 and 5.
To use a individual style for the upper PIN text area (region 3), the following cascaded CSS classes can be used:
\verbatim
td.pintext.top
\endverbatim
For instance, this class can be used to specify content height portion of PIN text area (region 3) in relation to PIN input area (region 4) and optional PIN text area (region 5).\n
</td>
</tr><tr>
<td><tt>text</tt></td><td><tt>div</tt></td><td>
Division element to display arbitrary HTML content, usually a PIN prompt message.
Developers can implement CSS class
\verbatim
div.text
\endverbatim
to specify the style for this element (e.g. a background color or font properties for
the PIN prompt text).\n
\note CSS class \c div.txt is already used in <a href="#dialog_region_4">region 4</a> of dialog.html, thus, this CSS class is applied to both, dialog.html and pin.html,
whereas additional CSS classes for text alignment are not used for \c pin.html.

To use a individual style for the PIN dialog (different from dialog.html), the following
cascaded CSS classes can be used:
\verbatim
div.text.pin
\endverbatim
Please note that this style is applied for both PIN text divisions in regions 3 and 5.
To use a individual style for the upper PIN text division (region 3), the following cascaded CSS classes can be used:
\verbatim
div.text.top.pin
\endverbatim
</td>
</tr>
</table>
Region 4:
<table class="doxtable" style="width:100%">
<tr>
<th>CSS class</th><th>HTML element</th><th>Description</th>
</tr><tr>
<td><tt>pininput</tt></td><td><tt>td</tt></td><td>
Table data element, which contains HTML content for the PIN input, which is represented by an <tt>\<input\></tt> element with attribute <tt>type='pin'</tt> (described below).
Developers can implement CSS class
\verbatim
td.pininput
\endverbatim
to specify the style for this element. For instance, this class can be used to specify content
height portion of PIN input area (region 4) in relation to PIN message area (region 3).\n
</td>
</tr><tr>
<td><tt>pin</tt></td><td><tt>input</tt></td><td>
Input element, which displays the echo characters of the entered PIN digits.
Developers can implement CSS class
\verbatim
input.pin
\endverbatim
to specify the style for this element (e.g. a background color or font properties for
the PIN echo characters).\n
</td>
</tr>
</table>
Region 5:
<table class="doxtable" style="width:100%">
<tr>
<th>CSS class</th><th>HTML element</th><th>Description</th>
</tr><tr>
<td><tt>pintext</tt></td><td><tt>td</tt></td><td>
For this HTML element the same CSS styles are used as described for <a href="#pin_region_3">region 3</a>. To use a individual style for the bottom PIN text area (region 5), the following cascaded CSS classes can be used:
\verbatim
td.pintext.bottom
\endverbatim
For instance, this class can be used to specify content height portion of PIN text area (region 5) in relation to PIN input area (region 4) and PIN prompt text area (region 3).\n
</td>
</tr><tr>
<td><tt>text</tt></td><td><tt>div</tt></td><td>
For this HTML element the same CSS styles are used as described for <a href="#pin_region_3">region 3</a>. To use a individual style for the bottom PIN text division (region 5), the following cascaded CSS classes can be used:
\verbatim
div.text.bottom.pin
\endverbatim
</td>
</tr>
</table>
Region 6:
<table class="doxtable" style="width:100%">
<tr>
<th>CSS class</th><th>HTML element</th><th>Description</th>
</tr><tr>
<td><tt>pinkeys</tt></td><td><tt>table</tt></td><td>
A table element (with 3 rows and 3 columns), which contains the softkeys to enter the PIN on touch screen.
The HTML content for each softkey is added to a table data element \c \<td\> (decribed below).
Developers can implement CSS class
\verbatim
table.pinkeys
\endverbatim
to specify the style for this element (e.g. a background color for PIN softkey area).
\note For devices with physical keypad, region 6 is not displayed, therefore, specified CSS classes for
this region won't take effect.
</td>
</tr><tr>
<td><tt>pinkey</tt></td><td><tt>td</tt></td><td>
<a name="pinkey_td"></a>
Table data element, which contains HTML content for a softkey to enter the PIN digit on touch screen.
The HTML content consists of a \c \<button\> element (described below).
Developers can implement CSS class
\verbatim
td.pinkey
\endverbatim
to specify the style for this element (e.g. a background color, which is visible if the added \c \<button\> has a smaller size than this \c \<td\> element).\n
In addition, the following cascaded CSS classes can be used:
\verbatim
td.pinkey.one
td.pinkey.two
td.pinkey.three
td.pinkey.four
td.pinkey.five
td.pinkey.six
td.pinkey.seven
td.pinkey.eight
td.pinkey.nine
td.pinkey.zero
\endverbatim
These CSS subclasses allow to specify individual styles for each PIN softkey (e.g. individual background colors for each softkey).
\verbatim
td.pinkey.left
td.pinkey.middle
td.pinkey.right
\endverbatim
These CSS subclasses allow to specify individual styles for table data elements of a special column (left, middle or right) in the PIN softkey table (e.g. individual width).

By default, dialog \c pin.html adds the <b>Clear</b> softkey to control bar, if the PIN is
entered with virtual keyboard on devices w/o keypad (see picture above). The dialog also allows
to place the <b>Clear</b> softkey to the reserved table data element, which is left or right next to the PIN softkey <b>0</b>. The corresponding softkey appears, if the folder of the \ref vos_user_config_package (see also chapter \ref subsubsec_sdi_install_ui_user_config_packages) contains one of the follwing image files installed to:<br>
VOS/VOS2:
\verbatim
/etc/config/sdi/www/images/buttons/pinclear_left.png
/etc/config/sdi/www/images/buttons/pinclear_right.png
\endverbatim
VOS3:
\verbatim
/home/usr<X>/sdi/www/images/buttons/pinclear_left.png
/home/usr<X>/sdi/www/images/buttons/pinclear_right.png
\endverbatim

If one of the images is found (\c pinclear_left.png is prior), the default <b>Clear</b> softkey
in control bar is omitted and a new <b>Clear</b> sofkey is placed to the corresponding
\c \<td\> (left or right) next to the PIN softkey <b>0</b>. This new \c \<button\> get the
style \c pinkey and it adds an \c \<img\> element (described below), which loads the
corresponding image above. <b>Cancel</b> and <b>Enter</b> softkey in control bar will
row to 50% of width used for control bar \c \<table\> element.
Developers can implement CSS class
\verbatim
td.pinkey.clear.left
td.pinkey.clear.right
\endverbatim
to specify the style for this element (e.g. a background color, which is visible if the added \c \<button\> has a smaller size than this \c \<td\> element).
</td>
</tr><tr>
<td><tt>pinkey</tt></td><td><tt>button</tt></td><td>
Button element used for softkeys to enter PIN digits on touchscreen.
This element is added to table data element \c \<td\> of the pinkey table (as described above).
Developers can implement CSS class
\verbatim
button.pinkey
\endverbatim
to specify the style for this element (e.g. a background color for this \c \<button\>).\n
In addition, the following cascaded CSS classes can be used:
\verbatim
button.pinkey.one
button.pinkey.two
button.pinkey.three
button.pinkey.four
button.pinkey.five
button.pinkey.six
button.pinkey.seven
button.pinkey.eight
button.pinkey.nine
button.pinkey.zero
\endverbatim
These CSS subclasses allow to specify individual styles for each PIN softkey (e.g. individual background colors for each softkey).
\verbatim
button.pinkey.left
button.pinkey.middle
button.pinkey.right
\endverbatim
These CSS subclasses allow to specify individual styles for buttons of a special column (left, middle or right) in the PIN softkey table (e.g. individual width).
\verbatim
button.pinkey.clear
button.pinkey.clear.left
button.pinkey.clear.right
\endverbatim
These CSS subclasses allow to specify individual styles for the left or right <b>Clear</b>
softkey next next to the PIN softkey <b>0</b>. For more details, please refer to previous
CSS class <a href="#pinkey_td">td.pinkey</a>.
</td>
</tr><tr>
<td><tt>pinkey</tt></td><td><tt>img</tt></td><td>
Image element, which loads the image \c pinclear_left.png or \c pinclear_right.png to the <b>Clear</b> softkey placed next to PIN softkey <b>0</b>.
Developers can implement CSS class
\verbatim
img.pinkey.clear
img.pinkey.clear.left
img.pinkey.clear.right
\endverbatim
These CSS subclasses allow to specify individual styles for \c \<img\> added to the <b>Clear</b>
softkey next to the PIN softkey <b>0</b>. For more details, please refer to previous CSS class
<a href="#pinkey_td">td.pinkey</a>.
</td>
</tr>
</table>
Region 7:\n
This region contains the most CSS classes and HTML elements of <a href="#dialog_region_5">region 5</a> in dialog.html.\n
Differences are listed as follows:
<ul>
<li> The control bar does not contain <b>Up</b> and <b>Down</b> softkey or helper entry. Therefore, the cascaded CSS classes (e.g. <tt>button.softkey.up</tt> or <tt>button.softkey.down</tt>) take no effect on \c pin.html.
<li> The <b>Clear</b> softkey can be omitted and added next to the PIN softkey <b>0</b>, if one
of the image \c pinclear_left.png or \c pinclear_right.png are looked up in the \ref vos_user_config_package folder. For more details, please refer to description of CSS class
<a href="#pinkey_td">td.pinkey</a>. In this case, the cascaded CSS class (e.g. <tt>button.softkey.clear</tt> takes no effect on \c pin.html.
</ul>
\n
Additional CSS classes (region independent):
<table class="doxtable" style="width:100%">
<tr>
<th>CSS class</th><th>HTML element</th><th>Description</th>
</tr><tr>
<td><tt>body</tt></td><td><tt>div</tt></td><td>
Due to the fact that ADKGUI does not support CSS on the \c \<body\> element, an
additional \c \<div\> element was added on this level, which represents the \c \<body\>.
Therefore, all elements of \c pin.html have this \c \<div\> as common root.
Developers can implement CSS class
\verbatim
div.body
\endverbatim
to specify the style for this element (e.g. a background-color used for the whole document region).
</td>
</tr><tr>
<td><tt>pin</tt></td><td></td><td>
All HTML elements in \c pin.html use additional CSS class name \c pin, which allows to implement dialog specific CSS classes.\n
Examples:
\verbatim
button.pin.softkey.cancel
button.softkey.cancel.pin
\endverbatim
These CSS subclasses are individually applied to cancel button of \c pin.html and do not take effect on other
HTML dialogs.
\verbatim
div.body.pin
div.pin.body
\endverbatim
These CSS subclasses allow to specify individual style for the body \c \<div\> element in \c pin.html
(described above) and do not take effect on other HTML dialogs.
</td></tr>
</table>

\n
\paragraph pgr_nav_pin_html nav_pin.html
\image html nav_pin.png "nav_pin.html: PIN entry with enabled navigator mode"\n
If supported by devices with touch screen, the navigator mode can be enabled to help
visually impaired persons to enter the PIN (for more details refer to ADKGUI documentation).
For this special PIN entry mode, SDI server provides a separate HTML dialog \c nav_pin.html,
which consists of a virtual keyboard with full screen size. An outer \c \<table\> element (with
4 rows and 3 columns) devides the screen into 12 fields (\c \<td\> elements) having the same size.
Softkeys (\c \<button\> elements) are used to enter the PIN digits. The most left-bottom field is
vertical devided to add the softkeys for backspace and abort.
Since the layout and appearance of the softkeys must fullfil special requirements, it is not recommended to
implement own CSS for this dialog. Therefore, the CSS access for this dialog is restricted as follows:
<table class="doxtable" style="width:100%">
<tr>
<th>CSS class</th><th>HTML element</th><th>Description</th>
</tr><tr>
<td><tt>navpin</tt></td><td><tt>button</tt></td><td>
Button element used for softkeys to enter PIN digits on touchscreen. This element is added to table data
element \c \<td\> of the pinkey table (as described above).
Developers can implement CSS class
\verbatim
button.navpin
\endverbatim
to specify the style for this element (e.g. a background color or font properties for the softkeys)
</td>
</tr>
</table>
Additional CSS classes:
<table class="doxtable" style="width:100%">
<tr>
<th>CSS class</th><th>HTML element</th><th>Description</th>
</tr><tr>
<td><tt>body</tt></td><td><tt>div</tt></td><td>
Due to the fact that ADKGUI does not support CSS on the \c \<body\> element, an
additional \c \<div\> element was added on this level, which represents the \c \<body\>.
Therefore, all elements of \c nav_pin.html have this \c \<div\> as common root.
Developers can implement CSS class
\verbatim
div.body
\endverbatim
to specify the style for this element (e.g. a background-color used for the whole document region).
</td>
</tr><tr>
<td><tt>navpin</tt></td><td></td><td>
All HTML elements in \c nav_pin.html use additional CSS class name \c navpin, which allows to implement dialog specific CSS classes.\n
Example:
\verbatim
div.body.navpin
div.navpin.body
\endverbatim
These CSS subclasses allow to specify individual style for the body \c \<div\> element in \c nav_pin.html
(described above) and do not take effect on other HTML dialogs.
</td></tr>
</table>
\n
\subsubsection subsubsec_sdi_custom_text_catalogs Custom UI text catalogs

In standard mode or as EPP (see \ref sec_sdi_user_modes), SDI operates with UI and displays texts and prompts for user inputs (e.g. PIN entry).
The UI interface of SDI is implemented with ADKGUI, an ADK component rendering HTML as a dialog on screen. For multi-language support ADKGUI allows the use
of text catalog files, one for each language. UI text catalogs contain a text map, which consists of serveral lines of <tt>name=value</tt> text pairs.
The <tt>name</tt> is used as key to lookup the <tt>value</tt>. The <tt>value</tt> represents the text to display. Text values can be HTML formatted, in addition, it may contain
XML processing instructions (e.g. <tt>\<?text name?\></tt> to refer another text by its name in the same catalog). For more details please refere to ADKGUI documentation.

For the supported languages (\ref subsec_sdi_supported_system_languages) the default texts for SDI are installed with UI catalogs coming along with the SDI config package for standard mode
(see chapter \ref subsubsec_sdi_default_resource_files). Further, SDI allows the installation of additional custom UI text catalogs provided with an optional \ref vos_user_config_package.

For each system language one custom UI text catalag can be installed to the following locations:

VOS/VOS2:
<ul>
<li><tt>/etc/config/sdi/www/\<width\>x\<height\>\<color\>\<numkeys\>\<touch\></tt> (device specific UI resource folder, e.g. <tt>320x480C15T</tt> is used for P400)
<li><tt>/etc/config/sdi/www/default</tt> (default UI resource folder, used if the resource isn't found in device specific folder)
</ul>
VOS3:
<ul>
<li><tt>/home/use\<X\>/sdi/www/\<width\>x\<height\>\<color\>\<numkeys\>\<touch\></tt> (device specific UI resource folder, e.g. <tt>320x480C15T</tt> is used for P630)
<li><tt>/home/use\<X\>/sdi/www/default</tt> (default UI resource folder, used if the resource isn't found in device specific folder)
</ul>
Please note that the first device specific UI resource folder is preferred, before the catalog file is looked up from <tt>default</tt> folder.<br>
The custom UI text catalog must use the following filename notation:
\verbatim
custom-<language-code>.ctlg
\endverbatim
The field <tt>\<language-code\></tt> in the catalog filename contains the ISO-639-1 language code to specify the language for which the text catalog is used.

Basically, SDI prefers texts of the custom catalog before taking them from own default UI catalog. Since ADKGUI does not support running dialogs with 2 text catalogs
at the same time, SDI first looks up the custom catalog (if installed) and afterwards the default catalog. Finally, the found text is injected with instructions
<tt>\<?var ...?\></tt> or <tt>\<?varthml ...?\></tt> into HTML for ADKGUI.

For dual catalog support, SDI implements an additional XML processing instruction <tt>\<?custom name?\></tt>, which more or less works the same as <tt>\<?text name?\></tt>
(as supported by ADKGUI), but this instruction has a special meaning when used in pre-installed default text catalogs: If SDI looks up a text from default catalog, it substitutes
all placeholders <tt>\<?custom name?\></tt> by the corresponding text value provided by the customer catalog. If not found there (either no custom catalog installed or no text
value available), SDI falls back to value found in own default catalog. In this way, SDI implements priorization of custom texts before using SDI default texts.

Example:
\verbatim
invalid_pin=INVALID PIN
txt_sdi_invalid_pin=<?custom invalid_pin?>
\endverbatim
Variable <tt>txt_sdi_invalid_pin</tt> is fully composed of instruction <tt>\<?custom invalid_pin?\></tt>. This instruction refers variable <tt>invalid_pin</tt>, for
which SDI will now look up the value from custom catalog first and (if not found there) afterwards from own catalog, which contains default value <tt>INVALID PIN</tt>.
After SDI has substituted all instructions in this way, it displays the result text in dialog with ADKGUI. If the custom catalog is installed, this catalog then is
passed to ADKGUI, so that custom catalogs might use instruction <tt>\<?text name?\></tt> to refer other texts in this catalog.

\note Instruction <tt>\<?custom name?\></tt> is ignored, if used in a custom catalog and results an empty value.
\note Instruction <tt>\<?text name?\></tt> used in SDI default catalog does not lookup the custom catalog and is substituted with variable of the own default catalog only.
This allows SDI to define private catalog variables to compose other catalog variables with default texts.
\note Basically all catalog variables may contain HTML elements, e.g. to insert custom images or to use
attribute <tt>class</tt> or <tt>id</tt> to refer them from a custom CSS file to change element's appearance.

SDI uses text catalog files for UI dialogs, which are displayed for:
<ul>
<li>SDI interace (e.g. \ref subsec_sdi_display_interface, \ref subsubsec_sdi_ped_interface)
<li>Internal display messages/confirmations, e.g. amount confirmations, data inputs or transaction status messages (such as EMV status messages with text IDs)
</ul>

The following sections list all text variables, which are supported for custom UI catalogs.
Sections are categorized for SDI command or purpose, which text variables are used for.
For variables not provided by custom catalog, always values of SDI default catalog are applied.

<ul>
<li><a name="ui_catalogs_amount_formatting"><b>Amount formatting</b></a>

Variables with global character used to format an amount for the display.
<table>
<tr><th><tt>name</tt><th>Description
<tr><td><tt>decimal_separator</tt><td>Decimal separator applied for displaying or input an amount
<tr><td><tt>thousand_separator</tt><td>Thousand separator applied for displaying or input an amount. If set to empty, no thousand separator is used.
<tr><td><tt>amount_format</tt><td>Format string to specify the order, how currency and amount appear on the display.\n
SDI passes the amount in variable <tt>amount</tt> and the currency variable <tt>curr</tt> into the HTML dialog:
<table>
<tr><th><tt>name</tt><th>Description
<tr><td><tt>curr</tt><td>Currency string (see currency texts in chapter \ref subsec_sdi_supported_currencies)
<tr><td><tt>amount</tt><td>Amount string (formatted with <tt>decimal_separator</tt> and <tt>thousand_separator</tt> (e.g. "1.234,56")
</table>
Example value:
\verbatim
<?var curr?> <?var amount?>
\endverbatim
\note Variable <tt>amount_format</tt> is referred by multiple SDI default text values (e.g. <tt>amount_conf</tt>).<br>
<tr><td><tt>trx_type_amount_format</tt><td>Same as variable <tt>amount_format</tt>, in addition, this format string contains the
transaction type name, which is passed by SDI in variable <tt>ttt</tt>. Variable <tt>trx_type_amount_format</tt> is referred by command
\ref subsubsec_sdi_handle_card_request_display for multiple SDI default text values (e.g. <tt>amount_insert_card</tt>).<br>
Example value:
\verbatim
<?var ttt?><br><?text amount_format?>
\endverbatim
</table>
<br>
<li><b>Command</b> \ref subsubsec_sdi_ped_get_pin

Variables specifying content of region 3 and 5 of \ref pgr_pin_html for PIN entry with command \ref subsubsec_sdi_ped_get_pin.
<table>
<tr><th><tt>name</tt><th>Description
<tr><td><tt>txt_sdi_bypass_enter</tt><td>Additional text to hint the user that the PIN entry can be bypassed with Enter key.<br>
Example value:
\verbatim
(BYPASS WITH ENTER)
\endverbatim
The text is added by SDI server as variable <tt>bypass</tt> to value map for ADKGUI so that it can be used in variables with prefix <tt>txt_sdi_pin_msg</tt> (see below).
<tr><td><tt>txt_sdi_bypass_clear</tt><td>Additional text to hint the user that the PIN entry can be bypassed with Clear key.<br>
Example value:
\verbatim
(BYPASS WITH <)
\endverbatim
The text is added by SDI server as variable <tt>bypass</tt> to value map for ADKGUI so that it can be used in variables with prefix <tt>txt_sdi_pin_msg</tt> (see below).
<tr><td><tt>txt_sdi_bypass_enter_clear</tt><td>Additional text to hint the user that the PIN entry can be bypassed with Clear or Enter key<br>
Example value:
\verbatim
(BYPASS WITH ENTER/<)
\endverbatim
The text is added by SDI server as variable <tt>bypass</tt> to value map for ADKGUI so that it can be used in variables with prefix <tt>txt_sdi_pin_msg</tt> (see below).
<tr><td><tt>txt_sdi_pinmsg</tt><td>PIN prompt (w/o additional data) added to region 3 of PIN entry dialog (see \ref pgr_pin_html).<br>
Example value:
\verbatim
ENTER PIN:
\endverbatim
<tr><td><tt>txt_sdi_pinmsg_amount</tt><td>PIN prompt with amount added to region 3 of PIN entry dialog (see \ref pgr_pin_html).
This should be composed of <tt>amount_format</tt> containing the formatted amount (see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>).
Example value:
\verbatim
AMOUNT<br><?text amount_format?><br>ENTER PIN:
\endverbatim
<tr><td><tt>txt_sdi_pinmsg_bypass</tt><td>PIN prompt with enabled PIN bypass added to region 3 of PIN entry dialog (see \ref pgr_pin_html).
The following variables are added by SDI server and can be referred with <tt>\<?var name\></tt>:
<table>
<tr><th><tt>name</tt><th>Description
<tr><td><tt>bypass</tt><td>Depending on which keys are used to bypass the PIN entry, this variable contains value <tt>txt_sdi_bypass_enter</tt>, <tt>txt_sdi_bypass_clear</tt> or <tt>txt_sdi_bypass_enter_clear</tt> (described above).
</table>
Example value:
\verbatim
ENTER PIN:<br><?var bypass?>
\endverbatim
<tr><td><tt>txt_sdi_pinmsg_amount_bypass</tt><td>PIN prompt with amount and enabled PIN bypass added to region 3 of PIN entry dialog (see \ref pgr_pin_html).
Same variables for <tt>\<?var name\></tt> can be used as listed for <tt>txt_sdi_pinmsg_amount</tt> and <tt>txt_sdi_pinmsg_bypass</tt> above.<br>
Example value:
\verbatim
AMOUNT<br><?text amount_format?><br>ENTER PIN:<br><?var bypass?>
\endverbatim
For variable <tt>amount_format</tt> see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>.
<tr><td><tt>txt_sdi_pinmsg_prefname</tt><td>PIN prompt with card application label added to region 3 of PIN entry dialog (see \ref pgr_pin_html).
The following variables are added by SDI server and can be referred with <tt>\<?var name\></tt>:
<table>
<tr><th><tt>name</tt><th>Description
<tr><td><tt>prefname</tt><td>Application label (application preferred name) of the card, which is used for current transaction.
</table>
Example value:
\verbatim
<?var prefname?><br>ENTER PIN:
\endverbatim
<tr><td><tt>txt_sdi_pinmsg_amount_prefname</tt><td>PIN prompt with amount and card application label added to region 3 of PIN entry dialog (see \ref pgr_pin_html).
Same variables for <tt>\<?var name\></tt> can be used as listed for <tt>txt_sdi_pinmsg_amount</tt> and <tt>txt_sdi_pinmsg_prefname</tt> above.<br>
Example value:
\verbatim
<?var prefname?><br>AMOUNT<br><?text amount_format?><br>ENTER PIN:
\endverbatim
For variable <tt>amount_format</tt> see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>.
<tr><td><tt>txt_sdi_pinmsg_bypass_prefname</tt><td>PIN prompt with enabled PIN bypass and card application label added to region 3 of PIN entry dialog (see \ref pgr_pin_html).
Same variables for <tt>\<?var name\></tt> can be used as listed for <tt>txt_sdi_pinmsg_bypass</tt> and <tt>txt_sdi_pinmsg_prefname</tt> above.<br>
Example value:
\verbatim
<?var prefname?><br>ENTER PIN:<br><?var bypass?>
\endverbatim
<tr><td><tt>txt_sdi_pinmsg_amount_bypass_prefname</tt><td>PIN prompt with amount, enabled PIN bypass and card application label added to region 3 of PIN entry dialog (see \ref pgr_pin_html).
Same variables for <tt>\<?var name\></tt> can be used as listed for <tt>txt_sdi_pinmsg_amount</tt>, <tt>txt_sdi_pinmsg_bypass</tt> and <tt>txt_sdi_pinmsg_prefname</tt> above.<br>
Example value:
\verbatim
<?var prefname?><br>AMOUNT<br><?text amount_format?><br>ENTER PIN:<br><?var bypass?>
\endverbatim
For variable <tt>amount_format</tt> see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>.
<tr><td><tt>pin_disclaimer</tt><td>Additional PIN text (e.g. a disclaimer) added to region 5 of PIN entry dialog (see \ref pgr_pin_html).<br>
Example value:
\verbatim
Enter your code away from prying eyes
\endverbatim
</table>

\note Due to compatibility reasons SDI default catalog does not use instruction <tt>\<?custom name?\></tt> for <tt>sdi_txt_pinmsg_*</tt> variables.
Nevertheless, these variables are supported in custom catalog files, since SDI direclty takes values from there first.
\note The same UI texts are supported for PIN entry, which is internally triggered by ADKEMV callback (see chapter \ref subsubsec_sdi_ped_set_pin_input_parameter).

<br>
<li><b>Commands</b> \ref subsubsec_sdi_handle_display <b>and</b> \ref subsubsec_sdi_handle_html_dialog

Both commands support HTML templates, which can be installed with an \ref vos_user_config_package.<br>
SDI always uses the custom UI catalog to invoke these templates with ADKGUI.<br>
This allows to implement language independent HTML templates for both commands.
<table>
<tr><th><tt>name</tt><th>Description of <tt>value</tt>
<tr><td>arbitrary name<td>Multiple variables with arbitrary name can be defined, which can be referred with XML processing instruction <tt>\<?text name?\></tt> in HTML.<br>
</table>

<br>
<li><b>Command</b> \ref subsubsec_sdi_handle_secure_input

Variables specifying content of region 4 of \ref pgr_dialog_html for user inputs with command \ref subsubsec_sdi_handle_secure_input.<br>
Used HTML <tt>\<input\></tt> elements take multiple parameters specified by SDI, thus, these variables are declared as private and cannot be replaced by a custom UI catalog file.<br>
Therefore, in most cases a header and a footer variable is declared to replace content around these elements.<br>
SDI looks up the corresponding variables depending on specified Template ID, which is passed in TLV tag <tt>DFA007</tt>.
<table>
<tr><th><tt>name</tt><th>Template ID<th>Description of <tt>value</tt>
<tr><td><tt>secure_input_01_postal_code_header</tt><td><tt>01</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input of ZIP code.<br>
\note Class <tt>zip</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_01_postal_code_footer</tt><td><tt>01</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_01_postal_code_header</tt>).
<tr><td><tt>secure_input_02_cvv_header</tt><td><tt>02</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input of <u>C</u>ard <u>V</u>erification <u>V</u>alue.<br>
\note Class <tt>cvv</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_02_cvv_footer</tt><td><tt>02</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_02_cvv_header</tt>).
<tr><td><tt>secure_input_03_birthday_header</tt><td><tt>03</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input of the date of birth.<br>
\note Class <tt>birthday</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_03_birthday_footer</tt><td><tt>03</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_03_birthday_header</tt>).
<tr><td><tt>secure_input_04_ssn_header</tt><td><tt>04</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input of <u>S</u>ocial <u>S</u>ecurity <u>N</u>umber.<br>
\note Class <tt>ssn</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_04_ssn_footer</tt><td><tt>04</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_04_ssn_header</tt>).
<tr><td><tt>secure_input_05_last_4_of_ssn_header</tt><td><tt>05</tt><td>Prompt text preceding <tt>\<input\></tt> element for input of last 4 digits of <u>S</u>ocial <u>S</u>ecurity <u>N</u>umber.<br>
\note Class <tt>last4ssn</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_05_last_4_of_ssn_footer</tt><td><tt>05</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_05_last_4_of_ssn_header</tt>).
<tr><td><tt>secure_input_06_verify_postal_code_header</tt><td><tt>06</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input to verify the ZIP code.<br>
\note Class <tt>zip</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_06_verify_postal_code_footer</tt><td><tt>06</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_06_verify_postal_code_header</tt>).
<tr><td><tt>secure_input_07_verify_cvv_header</tt><td><tt>07</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input to verify the <u>C</u>ard <u>V</u>erification <u>V</u>alue.<br>
\note Class <tt>cvv</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_07_verify_cvv_footer</tt><td><tt>07</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_07_verify_cvv_header</tt>).
<tr><td><tt>secure_input_08_verify_birthday_header</tt><td><tt>08</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input to verify the date of birth.<br>
\note Class <tt>birthday</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_08_verify_birthday_footer</tt><td><tt>08</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_08_verify_birthday_header</tt>).
<tr><td><tt>secure_input_09_verify_ssn_header</tt><td><tt>09</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input to verify the <u>S</u>ocial <u>S</u>ecurity <u>N</u>umber.<br>
\note Class <tt>ssn</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_09_verify_ssn_footer</tt><td><tt>09</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_09_verify_ssn_header</tt>).
<tr><td><tt>secure_input_0a_verify_last4ssn_header</tt><td><tt>0A</tt><td>Prompt text preceding <tt>\<input\></tt> element for input to verify the last 4 digits of <u>S</u>ocial <u>S</u>ecurity <u>N</u>umber.<br>
\note Class <tt>last4ssn</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_0a_verify_last4ssn_footer</tt><td><tt>0A</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_0a_verify_last4ssn_header</tt>).
<tr><td><tt>txt_sdi_secure_input_0b_gratuity_amount_prompt</tt><td><tt>0B</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input of the gratuity/tip amount.<br>
\note <tt>\<input\></tt> element for gratuity/tip amount should precede/append <tt>\<?var curr?\></tt> so that the currency is displayed.
\note Separator variables <tt>decimal_separator</tt> and <tt>thousand_separator</tt> are applied to amount <tt>\<input\></tt> element (see section <a href="#ui_catalogs_amount_formatting">Amount formattig</a>).
\note Class <tt>amount</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>txt_sdi_secure_input_0b_gratuity_amount_footer</tt><td><tt>0B</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>txt_sdi_secure_input_0b_gratuity_amount_prompt</tt>).
<tr><td><tt>secure_input_0c_gratuity_percentage_header</tt><td><tt>0C</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input of percentage to specify the proportion of gratuity/tip.<br>
\note Class <tt>percent</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_0c_gratuity_percentage_footer</tt><td><tt>0C</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_0c_gratuity_percentage_header</tt>).
<tr><td><tt>secure_input_0d_cashback_amount_header</tt><td><tt>0D</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input of the cashback amount.<br>
\note <tt>\<input\></tt> element for cashback amount should precede/append <tt>\<?var curr?\></tt> so that the currency is displayed.
\note Separator variables <tt>decimal_separator</tt> and <tt>thousand_separator</tt> are applied to amount <tt>\<input\></tt> element (see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>).
\note Class <tt>amount</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_0d_cashback_amount_footer</tt><td><tt>0D</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_0d_cashback_amount_header</tt>).
<tr><td><tt>secure_disp_amount_and_input_0e_tip_header</tt><td><tt>0E</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input of the tip amount (with displaying fare/base amount).<br>
\note This variable should be composed of <tt>amount_format</tt> displaying the fare/base amount (see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>).
\note <tt>\<input\></tt> element for tip amount should precede/append <tt>\<?var curr?\></tt> so that the currency is displayed.
\note Separator variables <tt>decimal_separator</tt> and <tt>thousand_separator</tt> are applied to amount <tt>\<input\></tt> element (see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>).
\note Class <tt>amount</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_disp_amount_and_input_0e_tip_footer</tt><td><tt>0E</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_disp_amount_and_input_0e_tip_header</tt>).
<tr><td><tt>secure_input_0f_email_addr_header</tt><td><tt>0F</tt><td>Prompt text preceding <tt>\<input\></tt> element for input of an email address.<br>
\note Class <tt>email</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_0f_email_addr_footer</tt><td><tt>0F</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_0f_email_addr_header</tt>).
<tr><td><tt>secure_input_10_phone_nbr_header</tt><td><tt>10</tt><td>Prompt text preceding <tt>\<input\></tt> element for input of a phone number.<br>
\note Class <tt>phone</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_10_phone_nbr_footer</tt><td><tt>10</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_10_phone_nbr_header</tt>).
<tr><td><tt>secure_input_11_nbr_installments_header</tt><td><tt>11</tt><td>Prompt text preceding <tt>\<input\></tt> element for input the number of installments.<br>
\note Class <tt>installments</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_11_nbr_installments_footer</tt><td><tt>11</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_11_nbr_installments_header</tt>).
</table>
\note Header/Footer variables might use <tt>\<div\></tt> or <tt>\<br\></tt> to seperate them vertically from <tt>\<input\></tt> elements.

Following Template IDs are declared as private and internally used by SDI for input of card holder sensitive data only (manual card data input).<br>
Therefore, these Template IDs cannot be used in TLV tag <tt>DFA007</tt> with command \ref subsubsec_sdi_handle_secure_input.
<table>
<tr><th><tt>name</tt><th>Template ID<th>Description of <tt>value</tt>
<tr><td><tt>secure_input_fc_card_number_header</tt><td><tt>FC</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input of <u>P</u>rimary <u>A</u>ccount <u>N</u>umber.<br>
\note Class <tt>pan</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_fc_card_number_footer</tt><td><tt>FC</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_fc_card_number_header</tt>).
<tr><td><tt>secure_input_fd_expiry_date_header</tt><td><tt>FD</tt><td>Prompt text preceding the <tt>\<input\></tt> element for input of the card expiry date.<br>
\note Class <tt>date</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_fd_expiry_date_footer</tt><td><tt>FD</tt><td>Footer text behind the <tt>\<input\></tt> element (see also <tt>secure_input_fd_expiry_date_header</tt>).
<tr><td><tt>secure_input_fe_manual_card_entry_pan_header</tt><td><tt>FE</tt><td>Prompt text preceding the PAN <tt>\<input\></tt> element for input of the PAN and the card expiry date.<br>
\note Class <tt>pan</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_fe_manual_card_entry_expdate_header</tt><td><tt>FE</tt><td>Prompt text preceding the expiry date <tt>\<input\></tt> element for input of the PAN and the card expiry date (see also <tt>secure_input_fe_manual_card_entry_pan_header</tt>).<br>
\note Class <tt>date</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_fe_manual_card_entry_footer</tt><td><tt>FE</tt><td>Footer text behind the expiry date <tt>\<input\></tt> element (see also <tt>secure_input_fe_manual_card_entry_pan_header</tt> and <tt>secure_input_fe_manual_card_entry_expdate_header</tt>).
<tr><td><tt>secure_input_ff_manual_card_entry_pan_header</tt><td><tt>FF</tt><td>Prompt text preceding the PAN <tt>\<input\></tt> element for input of the PAN, the card expiry date and the CVV.<br>
\note Class <tt>pan</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_ff_manual_card_entry_expdate_header</tt><td><tt>FF</tt><td>Prompt text preceding the expiry date <tt>\<input\></tt> element for input of the PAN, the card expiry date and the CVV (see also <tt>secure_input_ff_manual_card_entry_pan_header</tt>).<br>
\note Class <tt>date</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_ff_manual_card_entry_cvv_header</tt><td><tt>FF</tt><td>Prompt text preceding the CVV <tt>\<input\></tt> element for input of the PAN, the card expiry date and the CVV (see also <tt>secure_input_ff_manual_card_entry_pan_header</tt> and <tt>secure_input_ff_manual_card_entry_expdate_header</tt>).<br>
\note Class <tt>cvv</tt> allows to implement styles for the <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>secure_input_ff_manual_card_entry_footer</tt><td><tt>FF</tt><td>Footer text behind the expiry date <tt>\<input\></tt> element (see also <tt>secure_input_ff_manual_card_entry_pan_header</tt>, <tt>secure_input_ff_manual_card_entry_expdate_header</tt> and <tt>secure_input_ff_manual_card_entry_cvv_header</tt>).
</table>
\note Header/Footer variables might use <tt>\<div\></tt> or <tt>\<br\></tt> to seperate them vertically from <tt>\<input\></tt> elements.

<br>
<li><b>Command</b> \ref subsubsec_sdi_handle_signature_capture

Variables specifying content of region 4 of \ref pgr_dialog_html for signature caputure with command \ref subsubsec_sdi_handle_signature_capture.
<table>
<tr><th><tt>name</tt><th>Description of <tt>value</tt>
<tr><td><tt>txt_sdi_signature_prompt</tt><td>Prompt text preceding the signature <tt>\<input\></tt> element.
\note Class <tt>signature</tt> allows to implement styles for the signature <tt>\<input\></tt> element in a custom CSS file.
<tr><td><tt>txt_sdi_signature_footer</tt><td>Footer text behind the signature <tt>\<input\></tt> element (same as <tt>txt_sdi_signature_prompt</tt>).
</table>
\note Header/Footer variables might use <tt>\<div\></tt> or <tt>\<br\></tt> to seperate them vertically from <tt>\<input\></tt> elements.

<br>
<li><b>Command</b> \ref subsubsec_sdi_handle_card_request_display

Variables specifying content of region 4 of \ref pgr_dialog_html for card requests with command \ref subsubsec_sdi_handle_card_request_display.
Used variables depend on specified card technology (TLV tag <tt>DFA108</tt>) and display mode (TLV tag <tt>DFA10A</tt>).

Each text variable is provided in 2 variants, one using prefix <tt><b>amount_</b></tt> and one without. Variables with the prefix are used,
if the command \ref subsubsec_sdi_handle_card_request_display contains the transaction amount and currency in TLV tag <tt>9F02</tt> and <tt>5F2A</tt>.
Additional EMV transaction type in that case can be provided with TLV tag <tt>9C</tt>, thus, variables using prefix <tt><b>amount_</b></tt> should be
composed of <tt>trx_type_amount_format</tt> (see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>).
If TLV tags <tt>9F02</tt> or <tt>5F2A</tt> are missing, SDI looks up variables without the prefix and the amount
with currency (and transaction type) are not diplayed.

<table>
<tr><th><tt>name</tt><th>Description of <tt>value</tt>
<tr><td><tt><b>amount_</b>insert_card</tt>, <tt>insert_card</tt><td>Text to request insertion of a chip card.
<tr><td><tt><b>amount_</b>insert_card_fallback</tt>, <tt>insert_card_fallback</tt><td>Text to request insertion of a chip card as fallback.
<tr><td><tt><b>amount_</b>insert_card_retry</tt>, <tt>insert_card_retry</tt><td>Text to request a new insertion of a chip card (retry).
<tr><td><tt><b>amount_</b>insert_swipe_card</tt>, <tt>insert_swipe_card</tt><td>Text to request insertion of a chip card or to swipe a magnetic card.
<tr><td><tt><b>amount_</b>insert_swipe_tap_card</tt>, <tt>insert_swipe_tap_card</tt><td>Text to request insertion of a chip card, to swipe a magnetic card or to tap a contactless card.
<tr><td><tt><b>amount_</b>insert_tap_card</tt>, <tt>insert_tap_card</tt><td>Text to request insertion of a chip card or to tap a contactless card.
<tr><td><tt><b>amount_</b>swipe_card</tt>, <tt>swipe_card</tt><td>Text to request swiping a magnetic card.
<tr><td><tt><b>amount_</b>swipe_card_fallback</tt>, <tt>swipe_card_fallback</tt><td>Text to request swiping a magnetic card as fallback.
<tr><td><tt><b>amount_</b>swipe_tap_card</tt>, <tt>swipe_tap_card</tt><td>Text to request swiping a magnetic card or to tap a contactless card.
<tr><td><tt><b>amount_</b>tap_card</tt>, <tt>tap_card</tt><td>Text to request tapping a contactless card.
<tr><td><tt>trx_type_cash_advance</tt><td>Text used for EMV transaction type <tt>EMV_ADK_TRAN_TYPE_CASH</tt> (value <tt>0x01</tt> in TLV tag <tt>9C</tt>), which is passed as variable <tt>ttt</tt> to <tt>trx_type_amount_format</tt> (see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>).
\note Variables above using prefix <tt><b>amount_</b></tt> are composed <tt>trx_type_amount_format</tt>.
<tr><td><tt>trx_type_cashback</tt><td>Text used for EMV transaction type <tt>EMV_ADK_TRAN_TYPE_CASHBACK</tt> (value <tt>0x09</tt> in TLV tag <tt>9C</tt>), which is passed as variable <tt>ttt</tt> to <tt>trx_type_amount_format</tt> (see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>).
\note Variables above using prefix <tt><b>amount_</b></tt> are composed of <tt>trx_type_amount_format</tt>.
<tr><td><tt>trx_type_refund</tt><td>Text used for EMV transaction type <tt>EMV_ADK_TRAN_TYPE_REFUND</tt> (value <tt>0x20</tt> in TLV tag <tt>9C</tt>), which is passed as variable <tt>ttt</tt> to <tt>trx_type_amount_format</tt> (see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>).
\note Variables above using prefix <tt><b>amount_</b></tt> are composed of <tt>trx_type_amount_format</tt>.
<tr><td><tt>trx_type_purchase</tt><td>Text used for arbitrary EMV transaction type (not equal to values above in TLV tag <tt>9C</tt>), which is passed as variable <tt>ttt</tt> to <tt>trx_type_amount_format</tt> (see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>).
\note Variables above using prefix <tt><b>amount_</b></tt> are composed of <tt>trx_type_amount_format</tt>.
</table>

<br>
<li><b>Command</b> \ref subsubsec_sdi_display_idle_screen

Variables specifying content of region 4 of \ref pgr_idle_html for idle screen with command \ref subsubsec_sdi_display_idle_screen.

<table>
<tr><th><tt>name</tt><th>Description of <tt>value</tt>
<tr><td><tt>idle_screen_text</tt><td>Welcome text used for the SDI idle screen.
\note Since UI catalogs support HTML, it is possible to use element <tt>img</tt> to refer an custom image.
</table>

<br>
<li><b>EMV status messages (with text ID)</b>

Variables used for EMV status messages. ADKEMV triggers status messages from internal transaction flow with a text ID, which SDI has to display.

<table>
<tr><th><tt>name</tt><th>EMV text ID<th>Description of <tt>value</tt>
<tr><td><tt>amount_conf</tt><td><tt>EMV_ADK_TXT_AMOUNT</tt><td>Text to confirm the transaction amount. This should be composed of <tt>amount_format</tt> displaying the amount (see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>).
<tr><td><tt>approved</tt><td><tt>EMV_ADK_TXT_APPROVED</tt><td>Text to inform user that transaction was successfull/approved.
<tr><td><tt>auth_approved</tt><td><tt>EMV_ADK_TXT_AUTH_APPROVED</tt><td>Text to inform user that authorization/reservation was successful/approved.
<tr><td><tt>auth_declined</tt><td><tt>EMV_ADK_TXT_AUTH_DECLINED</tt><td>Text to inform user that authorization/reservation has failed/was declined.
<tr><td><tt>authorizing</tt><td><tt>EMV_ADK_TXT_AUTHORIZING</tt><td>Text to inform user that an online authorization/transaction is in progress.
<tr><td><tt>card_error</tt><td><tt>EMV_ADK_TXT_CARD_ERROR</tt><td>Text to inform user that a card error occured.
<tr><td><tt>2_cards_in_field</tt><td><tt>EMV_ADK_TXT_2_CARDS_IN_FIELD</tt><td>Text to inform user that 2 contactless cards in field were detected.
<tr><td><tt>card_read_ok</tt><td><tt>EMV_ADK_TXT_CARD_READ_OK</tt><td>Text to inform user that card was read successfully.
<tr><td><tt>cashback_conf_amount</tt><td><tt>EMV_ADK_TXT_3AMO_CASHBACK</tt><td>Text to confirm total amount for cashback payment. This should be composed of <tt>amount_format</tt> displaying the amount (see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>).
<tr><td><tt>declined</tt><td><tt>EMV_ADK_TXT_DECLINED</tt><td>Text to inform user that transaction has failed/was declined.
<tr><td><tt>not_accepted</tt><td><tt>EMV_ADK_TXT_NOT_ACCEPTED</tt><td>Text to inform user that the card was not accepted.
<tr><td><tt>processing_error</tt><td><tt>EMV_ADK_TXT_PROCESSING_ERROR</tt><td>Text to inform user that a processing error occured for this transaction.
<tr><td><tt>refund_conf_amount</tt><td><tt>EMV_ADK_TXT_REFUND_CONF_AMOUNT</tt><td>Text to confirm the refund transaction amount. This should be composed of <tt>amount_format</tt> displaying the amount (see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>).
<tr><td><tt>remove_card</tt><td><tt>EMV_ADK_TXT_REMOVE_CARD</tt><td>Text to inform user to remove the card from card reader.
<tr><td><tt>retap_card</tt><td><tt>EMV_ADK_TXT_RETAP_SAME</tt><td>Text to inform user to retap the contactless card.
<tr><td><tt>retap_card_l1</tt><td><tt>EMV_ADK_TXT_RETAP_SAME_L1</tt><td>Text to inform user to retap the contactless card (requested by EMV Level 1 layer).
<tr><td><tt>see_phone</tt><td><tt>EMV_ADK_TXT_SEE_PHONE</tt><td>Text to inform user to follow instructions on mobile phone (during contacless payment).
<tr><td><tt>tip_conf_amount</tt><td><tt>EMV_ADK_TXT_3AMO_TIP</tt><td>Text to confirm total amount for tip payment. This should be composed of <tt>amount_format</tt> displaying the amount (see section <a href="#ui_catalogs_amount_formatting">Amount formatting</a>).
<tr><td><tt>use_chip_reader</tt><td><tt>EMV_ADK_TXT_USE_CHIP_READER</tt><td>Text to inform user to use the chip card reader.
<tr><td><tt>use_mag_stripe</tt><td><tt>EMV_ADK_TXT_USE_MAG_STRIPE</tt><td>Text to inform user to use the magnetic card reader.
<tr><td><tt>voice_auth</tt><td><tt>EMV_ADK_TXT_VOICEAUT</tt><td>Text to inform user in case of a voice authorization (e.g. due to communication problem).
<tr><td><tt>invalid_pin</tt><td><tt>0x30</tt><td>Text to inform user that entered PIN was wrong (<b>obsolete</b>, text ID used by very old ADKEMV versions and kept for compatibility reasons only)
<tr><td><tt>last_pin_try</tt><td><tt>0x27</tt><td>Text to inform user that this is the last try to enter the PIN (<b>obsolete</b>, text ID used by very old ADKEMV versions and kept for compatibility reasons only)
</table>

<br>
<li><b>Miscellaneous</b>

Miscellaneous variables used by SDI, which cannot be categorized into sections above.
For details and purpose see column description.

<table>
<tr><th><tt>name</tt><th>Description of <tt>value</tt>
<tr><td><tt>invalid_pin</tt><td>Text to inform user that entered PIN was wrong (used for internal PIN entry with UI standard mode not using \ref subsubsec_sdi_ped_get_pin)
<tr><td><tt>invalid_pin_try_again</tt><td>Text to inform user to enter the PIN again (used for internal PIN entry with UI standard mode not using \ref subsubsec_sdi_ped_get_pin)
<tr><td><tt>invalid_pin_last_pin_try</tt><td>Text to inform user that this is the last try to enter the PIN (used for internal PIN entry with UI standard mode not using \ref subsubsec_sdi_ped_get_pin)
<tr><td><tt>please_wait</tt><td>Text displayed while terminal or transaction is in progress ("please wait")
<tr><td><tt>select_application</tt><td>Prompt for EMV application selection menu (used for internal menu selection with UI standard mode)
<tr><td><tt>select_com_if</tt><td>Header text for COM interface selection menu (provided with menu button on idle screen in UI standard mode).
\note SDI menus accessable via idle screen in UI standard mode have no multi-language support and are displayed in English language only. Thus, these texts recently cannot be customized with UI catalogs.
</table>

</ul>
<br>
An additional example user config package comes along in subfolder \c example/load/usr_config of
SDI documentation package \c sdi-doc-X.X.X-X-P2PE-X.X.X.zip:
<ul>
<li><b>dl.sdi-usrconfig-text-catalog-X.X.X-X-P2PE-X.X.X.tar</b>\n
This package installs 3 custom UI text catalogs (for languages English, German and French), which contain all supported SDI texts, which can be used in a custom UI catalog (see tables above). All texts use red color indicating on the display that the text was provided by these sample catalog files.
</ul>


\n
\subsubsection subsubsec_sdi_install_ui_user_config_packages Install UI user config packages

As described in chapter \ref subsubsec_sdi_default_resource_files, it is not possible to replace
default resource files (HTML files, CSS files, images and UI text catalogs), which are installed
with SDI base packages to SDI home directory. Customized UI resources must be installed to a different
location with an \ref vos_user_config_package so that SDI server can apply them instead using the default files (resource file overloading).
With this concept SDI server is able to fallback to the default, whenever an \ref vos_user_config_package is uninstalled.

On VOS/VOS2 user config packages are installed to following device location:
\verbatim
/etc/config
\endverbatim
On VOS3 SDI uses different locations for user config files.
Instead of using a global system folder as on VOS/VOS2, SDI server looks up the files from home user folder:
\verbatim
/home/usr<X>
\endverbatim
SDI server uses folder \c sdi as application subfolder, whereas resource files for ADKGUI are looked up in additional subfolder \c www.<br>
Thus, the \ref vos_user_config_package must contain resource files in a subfolder \c sdi/www, so that these files are installed to following device location:<br>
VOS/VOS2:
\verbatim
/etc/config/sdi/www
\endverbatim
VOS3:
\verbatim
/home/usr<X>/sdi/www
\endverbatim

The following resource file types can be added to this folder:
<ul>
<li><b>HTML templates</b>\n
As mentioned in chapter \ref subsubsec_sdi_default_resource_files, it is not possible to overload existing SDI default HTML files.
However, SDI command \ref subsubsec_sdi_handle_display supports displaying additional HTML templates, which can be part of
the UI user config package. For more details, please refer to command discription of \ref subsubsec_sdi_handle_display.
<li><b>CSS files</b>\n
CSS files must have file name \c style.css and are located in device specific subfolders (e.g.
\c 854x480C15T for M400, see ADKGUI documentation for details). For more information about CSS files,
please refer to description in chapter \ref subsubsec_sdi_default_resource_files. If a CSS file
\c style.css is installed into this device specific folder, SDI server prefers this CSS file
instead of using the default CSS file under \c www in SDI home directory.
<li><b>Images</b>\n
Image files are installed into subfolder \c images. Images installed by the \ref vos_user_config_package
to this subfolder are preferred to default image files under \c www in SDI home directory. Image files
must have the same name as listed in chapter \ref subsubsec_sdi_default_resource_files. If the image is
not found there, SDI server uses the default image, thus, developers need not to add the complete list
of images to the \ref vos_user_config_package. Finally, an \ref vos_user_config_package may contain
additionals arbitrary images, which are used by HTML templates with command \ref subsubsec_sdi_handle_display.
<li><b>UI text catalogs</b>\n
Custom UI text catalogs can be installed can installed to device specific subfolders or to
default resource folder of ADKGUI (see chapter \ref subsubsec_sdi_custom_text_catalogs). These catalog files
are applied for special commands, in addition, they can be used to implement language independent HTML templates for
command \ref subsubsec_sdi_handle_display.
</ul>

Additional example UI user config packages come along in subfolder \c example/load/usr_config of
SDI documentation package \c sdi-doc-X.X.X-X-P2PE-X.X.X.zip:
<ul>
<li><b>dl.sdi-usrconfig-adk-style-X.X.X-X-P2PE-X.X.X.tar</b>\n
This package installs an example look and feel for SDI server, which is similar to flat blue UI
design used for several ADK applications (Log Control Panel, CP Downloader).
<li><b>dl.sdi-usrconfig-old-leds-X.X.X-X-P2PE-X.X.X.tar</b>\n
This package installs the old CTLS LED bar, which was used in old versions of SDI server (< 3.x.x).
<li><b>dl.sdi-usrconfig-text-catalog-X.X.X-X-P2PE-X.X.X.tar</b>\n
This package installs 3 custom UI text catalogs (for languages English, German and French), which contain UI texts to customize the PIN entry dialog.
</ul>

Users can easily switch back SDI server to default UI design by just uninstalling the UI user config package.

\note Different user config packages containing files with the same location must not be installed in parallel,
since the files would overwrite each other during installation. This could lead to undesired behaviour with
Verifone Secure Installer (e.g. when removing the packages).

\n
\section sec_sdi_troubleshooting Troubleshooting

\subsection subsec_sdi_updates Updates

It is recommended always to use the newest version of SDI server, which contains the most bugfixes, therefore it will solve known issues.<br>
An Update of the SDI Server is basically possible by two ways:
<ol>
  <li>Download/Install new SDI packages as described in chapter \ref subsubsec_vos_sdi_installation</li>
  <li>Using the Software Upload commands via the serialized interface (see \ref subsubsec_sdi_sys_software_upload)</li>
</ol>

\subsection subsec_sdi_FAQ FAQ
Q: Are additional ADK components required to run the SDI-Server?\n
A: Yes, depending on the device and use case some further ADK components are neccessary. The best way to load a device correctly is the usage of the ADK integration packages.

\subsection subsec_sdi_logging Logging
To activate the SDI-Server log the LCP needs to be configured. Please create a configuration for AppId "SDI" to get the log.

\n
\section sec_sdi_appendix Appendix

\subsection subsec_sdi_basic_transaction-flows Basic Transaction Flows

\subsubsection subsubsec_sdi_basic_msr_flow Basic MSR Flow
\image html "SDI_Basic_MSR_Flow.svg"

\subsubsection subsubsec_sdi_basic_emv_ct_flow Basic EMV CT Flow
\image html "SDI_Basic_EMV_CT_Flow.svg"

\subsubsection subsubsec_sdi_basic_emv_ctls_flow Basic EMV CTLS Flow
\image html "SDI_Basic_EMV_CTLS_Flow.svg"

\subsubsection subsubsec_sdi_basic_mce_flow Basic Manual Card Entry Flow
\image html "SDI_Basic_MCE_Flow.svg"

\subsubsection subsubsec_sdi_basic_msr_flow_epp Basic MSR Flow with EPP
\image html "SDI_Basic_MSR_Flow_EPP.svg"

\subsubsection subsubsec_sdi_basic_emv_ct_flow_epp Basic EMV CT Flow with EPP
\image html "SDI_Basic_EMV_CT_Flow_EPP.svg"

\subsubsection subsubsec_sdi_basic_emv_ctls_flow_epp Basic EMV CTLS Flow with EPP
\image html "SDI_Basic_EMV_CTLS_Flow_EPP.svg"

\subsection subsec_sdi_hybrid_cardreader-scenarios Hybrid Card Reader Card Detection Flows

\subsubsection subsubsec_sdi_hybrid_cardreader_card_detect_flow Hybrid Card Reader Card Detection Flow
\image html "SDI_HybridReader_Card_Detect_Scenarios.svg"

\subsubsection subsubsec_sdi_hybrid_cardreader_card_detect_async_callback_flow Hybrid Card Reader Asynchronous Card Detection Flow (Callback Mode)
\image html "SDI_HybridReader_Card_Detect_Async_Scenarios_Callabck.svg"

\subsubsection subsubsec_sdi_hybrid_cardreader_card_detect_async_polling_flow Hybrid Card Reader Asynchronous Card Detection Flow (Polling Mode)
\image html "SDI_HybridReader_Card_Detect_Async_Scenarios_Polling.svg"

\subsection subsec_sdi_supported_currencies Supported Currencies

The SDI-Server in Standard Mode is able to display currencies corresponding to the official ISO 4217 definition for the following currency codes:

| ISO Code | Currency Text | Description                                                |
|:--------:|:-------------:|:-----------------------------------------------------------|
|   008    |      ALL      | Albanian lek                                               |
|   012    |      DZD      | Algerian dinar                                             |
|   032    |      ARS      | Argentine peso                                             |
|   036    |      AUD      | Australian dollar                                          |
|   044    |      BSD      | Bahamian dollar                                            |
|   048    |      BHD      | Bahraini dinar                                             |
|   050    |      BDT      | Bangladeshi taka                                           |
|   051    |      AMD      | Armenian dram                                              |
|   052    |      BBD      | Barbados dollar                                            |
|   060    |      BMD      | Bermudian dollar                                           |
|   064    |      BTN      | Bhutanese ngultrum                                         |
|   068    |      BOB      | Boliviano                                                  |
|   072    |      BWP      | Botswana pula                                              |
|   084    |      BZD      | Belize dollar                                              |
|   090    |      SBD      | Solomon Islands dollar                                     |
|   096    |      BND      | Brunei dollar                                              |
|   104    |      MMK      | Myanmar kyat                                               |
|   108    |      BIF      | Burundian franc                                            |
|   116    |      KHR      | Cambodian riel                                             |
|   124    |      CAD      | Canadian dollar                                            |
|   132    |      CVE      | Cape Verdean escudo                                        |
|   136    |      KYD      | Cayman Islands dollar                                      |
|   144    |      LKR      | Sri Lankan rupee                                           |
|   152    |      CLP      | Chilean peso                                               |
|   156    |      CNY      | Renminbi                                                   |
|   170    |      COP      | Colombian peso                                             |
|   174    |      KMF      | Comoro franc                                               |
|   188    |      CRC      | Costa Rican colon                                          |
|   192    |      CUP      | Cuban peso                                                 |
|   203    |      CZK      | Czech koruna                                               |
|   208    |      DKK      | Danish krone                                               |
|   214    |      DOP      | Dominican peso                                             |
|   222    |      SVC      | Salvadoran colón                                           |
|   230    |      ETB      | Ethiopian birr                                             |
|   232    |      ERN      | Eritrean nakfa                                             |
|   238    |      FKP      | Falkland Islands pound                                     |
|   242    |      FJD      | Fiji dollar                                                |
|   262    |      DJF      | Djiboutian franc                                           |
|   270    |      GMD      | Gambian dalasi                                             |
|   292    |      GIP      | Gibraltar pound                                            |
|   320    |      GTQ      | Guatemalan quetzal                                         |
|   324    |      GNF      | Guinean franc                                              |
|   328    |      GYD      | Guyanese dollar                                            |
|   332    |      HTG      | Haitian gourde                                             |
|   340    |      HNL      | Honduran lempira                                           |
|   344    |      HKD      | Hong Kong dollar                                           |
|   348    |      HUF      | Hungarian forint                                           |
|   352    |      ISK      | Icelandic króna (plural: krónur)                           |
|   356    |      INR      | Indian rupee                                               |
|   360    |      IDR      | Indonesian rupiah                                          |
|   364    |      IRR      | Iranian rial                                               |
|   368    |      IQD      | Iraqi dinar                                                |
|   376    |       ₪       | ILS, Israeli new shekel                                    |
|   388    |      JM$      | JMD, Jamaican dollar                                       |
|   392    |      JPY      | Japanese yen                                               |
|   398    |      KZT      | Kazakhstani tenge                                          |
|   400    |      JOD      | Jordanian dinar                                            |
|   404    |      KES      | Kenyan shilling                                            |
|   408    |      KPW      | North Korean won                                           |
|   410    |      KRW      | South Korean won                                           |
|   414    |      KWD      | Kuwaiti dinar                                              |
|   417    |      KGS      | Kyrgyzstani som                                            |
|   418    |      LAK      | Lao kip                                                    |
|   422    |      LBP      | Lebanese pound                                             |
|   426    |      LSL      | Lesotho loti                                               |
|   430    |      LRD      | Liberian dollar                                            |
|   434    |      LYD      | Libyan dinar                                               |
|   446    |      MOP      | Macanese pataca                                            |
|   454    |      MWK      | Malawian kwacha                                            |
|   458    |      MYR      | Malaysian ringgit                                          |
|   462    |      MVR      | Maldivian rufiyaa                                          |
|   480    |      MUR      | Mauritian rupee                                            |
|   484    |      MXN      | Mexican peso                                               |
|   496    |      MNT      | Mongolian tögrög                                           |
|   498    |      MDL      | Moldovan leu                                               |
|   504    |      MAD      | Moroccan dirham                                            |
|   512    |      OMR      | Omani rial                                                 |
|   516    |      NAD      | Namibian dollar                                            |
|   524    |      NPR      | Nepalese rupee                                             |
|   532    |      ANG      | Netherlands Antillean guilder                              |
|   533    |      AWG      | Aruban florin                                              |
|   548    |      VUV      | Vanuatu vatu                                               |
|   554    |      NZD      | New Zealand dollar                                         |
|   558    |      NIO      | Nicaraguan córdoba                                         |
|   566    |      NGN      | Nigerian naira                                             |
|   578    |      NOK      | Norwegian krone                                            |
|   586    |      PKR      | Pakistani rupee                                            |
|   590    |      PAB      | Panamanian balboa                                          |
|   598    |      PGK      | Papua New Guinean kina                                     |
|   600    |      PYG      | Paraguayan guaraní                                         |
|   604    |      PEN      | Peruvian sol                                               |
|   608    |      PHP      | Philippine peso                                            |
|   634    |      QAR      | Qatari riyal                                               |
|   643    |      RUB      | Russian ruble                                              |
|   646    |      RWF      | Rwandan franc                                              |
|   654    |      SHP      | Saint Helena pound                                         |
|   682    |      SAR      | Saudi riyal                                                |
|   690    |      SCR      | Seychelles rupee                                           |
|   694    |      SLL      | Sierra Leonean leone (old leone)                           |
|   702    |      SGD      | Singapore dollar                                           |
|   704    |      VND      | Vietnamese đồng                                            |
|   706    |      SOS      | Somali shilling                                            |
|   710    |      ZAR      | South African rand                                         |
|   728    |      SSP      | South Sudanese pound                                       |
|   748    |      SZL      | Swazi lilangeni                                            |
|   752    |      SEK      | Swedish krona (plural: kronor)                             |
|   756    |      CHF      | Swiss franc                                                |
|   760    |      SYP      | Syrian pound                                               |
|   764    |      THB      | Thai baht                                                  |
|   776    |      TOP      | Tongan paʻanga                                             |
|   780    |      TTD      | Trinidad and Tobago dollar                                 |
|   784    |      AED      | United Arab Emirates dirham                                |
|   788    |      TND      | Tunisian dinar                                             |
|   800    |      UGX      | Ugandan shilling                                           |
|   807    |      MKD      | Macedonian denar                                           |
|   818    |      EGP      | Egyptian pound                                             |
|   826    |       £       | GBP, Pound sterling                                        |
|   834    |      TZS      | Tanzanian shilling                                         |
|   840    |       $       | USD, United States dollar                                  |
|   858    |      UYU      | Uruguayan peso                                             |
|   860    |      UZS      | Uzbekistan sum                                             |
|   882    |      WST      | Samoan tala                                                |
|   886    |      YER      | Yemeni rial                                                |
|   901    |      TWD      | New Taiwan dollar                                          |
|   925    |      SLE      | Sierra Leonean leone (new leone)                           |
|   926    |      VED      | Venezuelan digital bolívar                                 |
|   927    |      UYW      | Unidad previsional                                         |
|   928    |      VES      | Venezuelan sovereign bolívar                               |
|   929    |      MRU      | Mauritanian ouguiya                                        |
|   930    |      STN      | São Tomé and Príncipe dobra                                |
|   932    |      ZWL      | Zimbabwean dollar (fifth)                                  |
|   933    |      BYN      | Belarusian ruble                                           |
|   934    |      TMT      | Turkmenistan manat                                         |
|   936    |      GHS      | Ghanaian cedi                                              |
|   938    |      SDG      | Sudanese pound                                             |
|   940    |      UYI      | Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code) |
|   941    |      RSD      | Serbian dinar                                              |
|   943    |      MZN      | Mozambican metical                                         |
|   944    |      AZN      | Azerbaijani manat                                          |
|   946    |      RON      | Romanian leu                                               |
|   947    |      CHE      | WIR euro (complementary currency)                          |
|   948    |      CHW      | WIR franc (complementary currency)                         |
|   949    |      TRY      | Turkish lira                                               |
|   950    |      XAF      | CFA franc BEAC                                             |
|   951    |      XCD      | East Caribbean dollar                                      |
|   952    |      XOF      | CFA franc BCEAO                                            |
|   953    |      XPF      | CFP franc (franc Pacifique)                                |
|   967    |      ZMW      | Zambian kwacha                                             |
|   968    |      SRD      | Surinamese dollar                                          |
|   969    |      MGA      | Malagasy ariary                                            |
|   970    |      COU      | Unidad de Valor Real (UVR) (funds code)                    |
|   971    |      AFN      | Afghan afghani                                             |
|   972    |      TJS      | Tajikistani somoni                                         |
|   973    |      AOA      | Angolan kwanza                                             |
|   975    |      BGN      | Bulgarian lev                                              |
|   976    |      CDF      | Congolese franc                                            |
|   977    |      BAM      | Bosnia and Herzegovina convertible mark                    |
|   978    |       €       | EUR, Euro                                                  |
|   979    |      MXV      | Mexican Unidad de Inversion (UDI) (funds code)             |
|   980    |      UAH      | Ukrainian hryvnia                                          |
|   981    |      GEL      | Georgian lari                                              |
|   984    |      BOV      | Bolivian Mvdol (funds code)                                |
|   985    |      PLN      | Polish złoty                                               |
|   986    |      BRL      | Brazilian real                                             |
|   990    |      CLF      | Unidad de Fomento (funds code)                             |
|   997    |      USN      | United States dollar (next day) (funds code)               |

\note For TLV tag 5F2A the hexadecimal value of left column is expected (e.g. 0x0978 for Euro).

\subsection subsec_sdi_supported_system_languages Supported System Languages
SDI server recently supports the following system/transaction languages:
<table>
<tr><th>Language<th>Definition<th>Value
<tr><td>English
    <td><tt>EMV_ADK_LANG_ENGLISH</tt>
    <td><tt>0x01</tt>
<tr><td>German
    <td><tt>EMV_ADK_LANG_GERMAN</tt>
    <td><tt>0x02</tt>
<tr><td>French
    <td><tt>EMV_ADK_LANG_FRENCH</tt>
    <td><tt>0x03</tt>
<tr><td>Spanish
    <td><tt>EMV_ADK_LANG_SPANISH</tt>
    <td><tt>0x04</tt>
<tr><td>Italian
    <td><tt>EMV_ADK_LANG_ITALIAN</tt>
    <td><tt>0x05</tt>
<tr><td>Swedish
    <td><tt>EMV_ADK_LANG_SWEDISH</tt>
    <td><tt>0x08</tt>
<tr><td>Turkish
    <td><tt>EMV_ADK_LANG_TURKISH</tt>
    <td><tt>0x0B</tt>
<tr><td>Danish
    <td><tt>EMV_ADK_LANG_DANSK</tt>
    <td><tt>0x0C</tt>
<tr><td>Dutch
    <td><tt>EMV_ADK_LANG_DUTCH</tt>
    <td><tt>0x0D</tt>
<tr><td>Portuguese
    <td><tt>EMV_ADK_LANG_PORTUGUESE</tt>
    <td><tt>0x0F</tt>
<tr><td>Hebrew
    <td><tt>EMV_ADK_LANG_HEBREW</tt>
    <td><tt>0x1D</tt>
</table>

SDI interface uses definitions of ADKEMV for TLV tag <tt>D6</tt> (system tag) and TLV tag <tt>DFA008</tt> (text language).<br>
In standard mode SDI server uses serveral UI text catalogs, which are installed with SDI base packages (see chapter \ref subsubsec_sdi_default_resource_files).


\subsection subsec_sdi_format_conventions Format Conventions

The SDI-Server documentation uses the following data element formats:

| Format | Content                                                                                                            |
|:------:|:-------------------------------------------------------------------------------------------------------------------|
| a      | Alphabetic data elements contain a single character per byte (a to z and A to Z)                                   |
| an     | Alphabetic data elements contain a single character per byte (a to z, A to Z and 0 to 9)                           |
| ans    | ASCII data elements contain a single character per byte                                                            |
| b      | Unsigned binary numbers or bit combinations that are defined elsewhere in the specification                        |
| html   | The data element contains Hypertext Markup Language (HTML)                                                         |
| json   | Data element in JavaScript Object Notation (JSON)                                                                  |
| n      | Numeric data elements consist of two numeric digits per byte padded with leading hexadecimal zeroes (BCD)          |
| nF     | Numeric data elements consist of two numeric digits per byte padded and/or obfuscated with F at the affected digit |
| tlv    | Constructed BER-TLV tag                                                                                            |
| utf-8  | Utf-8 string                                                                                                       |


\subsection subsec_sdi_legend Legend

The following is an overview of the abbreviations used in this document and their meaning:

| Abbreviation | Explanation                                                 |
|:------------:|:------------------------------------------------------------|
| bin          | The corresponding value is shown in binary format           |
| dec          | The corresponding value is shown in decimal format          |
| hex          | The corresponding value is shown in hexadecimal format      |
| M/O          | The data element is Mandatory (M) respectively Optional (O) |
| Size         | Specifies the (decimal) number of bytes of a data element   |
| Tag          | Describes a BER-TLV data object                             |
| var.         | The corresponding data object has a variable length         |
\n

\if sys8

\subsection subsec_sdi_adk48_migration_guide ADK 4.8 migration guide

On Fusion and Engage, with ADK 4.8 SDI server and ADKSEC security service are moved to system.

\subsubsection subsubsec_sdi_adk48_motivation Motivation

\paragraph para_sdi_adk48_motivation_security Security

Depending on project and configuration, SDI server might communicate with external devices, e.g. it may open TCP port <tt>12000</tt> for external access.
External communication constitutes a significant safety risk, since potential attackers could exploit vulnerabilities of the system.
Therefore, new SDI server in ADK 4.8 runs isolated under system user <tt>sys8</tt> so that it is separated from other processes.
Thus, if SDI server would be compromised it would be more difficult to hijack other processes or to access VAULT keys, since <tt>sys8</tt> user is restricted by OS to execute VSS scripts.

\paragraph para_sdi_adk48_motivation_p2pe_requirement P2PE requirement

P2PE specifies, how cardholder sensitive data must be processed and that environments for the encryption, the decryption and the key management must be separated.
Since a payment application may run on an external device or might be developed by third parties and runs internally on the device, it must be considered as unsecure.
Thus, it must never be possible for applications to access cardholder sensitive data in plaintext. This data is available for SDI server process only and encrypted
before hand out it to outside world. In addition, SDI server must not be able to access key management and secure operations should be handled by an isolated component.
ADK 4.8 fulfills all these requirements and realizes the concept with the separation of components under different system users:

| System User         | Component               |
|:--------------------|:------------------------|
| <tt>usr1-usr16</tt> | Payment application     |
| <tt>sys8</tt>       | SDI server              |
| <tt>sys10</tt>      | ADKSEC security service |

\paragraph para_sdi_adk48_motivation_adk_updates ADK updates

ADK 4.7 (and older) contains SDI installation packages for <tt>usr1</tt>. These packages require a signature with a special signing card so that
SDI packages can be installed in manufacture (narrow sponsor). In addition, for ADK updates these packages must be resigned by SDI users with
a regional signing card that it can be installed on existing devices having the corresponding sponsor certificate. With movement of SDI components to <tt>sys8</tt>,
all packages are system signed. The signature for a system component is created at once and it needs no renewal for different regions.
This will simplify the ADK update process in future.

\subsubsection subsubsec_sdi_adk48_update_procedure Update procedure

To get straight to the point: An update to ADK 4.8 will imply a new setup of SDI server and it is not possible to overtake the SDI environment of a previous installed ADK with the update procedure.
In addition, SDI users must consider additional update steps, which are not covered by the installation of the ADK 4.8 solution package.

With update of an old ADK (4.7 and older) to ADK 4.8 SDI server will move from <tt>/home/usr1</tt> (user location) to <tt>/home/sys8</tt> (system location).
In addition, ADKSEC security service will run as <tt>sys10</tt> (system user).
It's the goal for new ADK 4.8 that all component packages are system-signed (see chapter \ref subsubsec_sdi_adk48_motivation). Since SDI components in older ADKs were installed under <tt>usr1</tt>,
these packages must be removed before update to ADK 4.8. Please note that this removal cannot be managed by ADK 4.8 solution package, since adding <tt>usr1</tt> removal packages would imply that
SDI users would have to resign ADK packages again. Therefore, a separate <tt>usr1</tt> removal package <tt>dl.sdi-usr1-remove-X.X.X-X-P2PE-X.X.X.tar</tt> is provided to do this job.
The package is part of new SDI-SYS releases (see chapter \ref subsubsec_vos_sdi_deployment) and can be found in Artifactory.

In addition, other files (such as settings for SDI, ADKSEC, ADKCOM or ADKEMV) which were installed or created during runtime under old location <tt>/home/usr1</tt> cannot be overtaken to
<tt>/home/sys8</tt>, since system user <tt>sys8</tt> has no permissions to access <tt>usrX</tt> files. Further, it also depends on the previous SDI version how user configuration was
installed under <tt>usr1</tt>:\n
Quite newer SDI versions (e.g. ADK 4.7.7 with SDI 4.9.0 and newer) already use user config packages, which are installed under <tt>/etc/config</tt>.
These user settings (as long as provided with user config packages) will be reused by new SDI server coming along with ADK 4.8. All other SDI related setting and files (located under <tt>/home/usr1</tt>)
get lost and users have to care about providing these settings with new user config packages as this is possible. For more details see chapter \ref subsubsec_sdi_adk48_user_config_packages.

Due to the fact that SDI plugins run in context of SDI server, the old <tt>usr1</tt> installation packages cannot be reused and must be uninstalled with a corresponding removal package,
which is provided for each SDI plugin. New <tt>sys8</tt> installation packages for each SDI plugin are available for the new system location.
For more details see chapter \ref subsubsec_sdi_adk48_sdi_plugins.

Previous installed User VSS scripts used with SDI Generic Crypto Interface might be updated for reuse with ADKSEC under <tt>sys10</tt>. Please also note that VSS script for SDI E2E communication
(if required) must be added again with a separate download package after ADK update. For more details see chapter \ref subsubsec_sdi_adk48_vss_scripts.

Payment keys such as for ADE (P2PE) and PIN block encryption are usually kept with ADK update and SDI component packages, even those used for removal, do not touch them.
Therefore, there is no special doing and existing payment keys as used by old <tt>usr1</tt> SDI server can be reused under new system location after ADK 4.8 update.
For more details see chapter \ref subsubsec_sdi_adk48_key_management.

Finally, an update procedure for ADK 4.7 (and older) to ADK 4.8 including SDI server could look as follows:
<ol>
<li>Before the ADK update, perform a clearing or reconciliation to transfer offline stored transactions to the host
<li>Remove the previous SDI-Server installation from <tt>usr1</tt> with removal package <tt>dl.sdi-usr1-remove-X.X.X-X-P2PE-X.X.X.tar</tt> (part of SDI-SYS release). An additional cleaner application is installed with this package, which also cares about removal of flash files, which were created by SDI server during runtime. The cleaner application is removed with next reboot, after the removal package is installed.
<li>Remove installed <tt>usr1</tt> SDI plugins with plugin specific <tt>usr1</tt> removal package <tt>dl.libsdiplugin-\<name\>-remove-X.X.X-X.tar</tt> (optional, <tt>\<name\></tt> represents the name
of the corresponding plugin)
<li>Install ADK 4.8 solution package
<li>Install/Update SDI user config packages to provide user default configuration settings for SDI (optional)
<li>Install SDI VSS script for E2E SDI message encryption/authentication <tt>dl.sdi-u1sys10-authent-vso-X.X.X-X-P2PE-X.X.X.tar</tt> (optional)
<li>Install/Update additional User VSS scripts (optional)
<li>Install the <tt>sys8</tt> SDI plugins with the plugin specific <tt>sys8</tt> installation package <tt>dl.libsdiplugin-\<name\>-sys-X.X.X-X.tar</tt> (optional, <tt>\<name\></tt>
represents the name of the corresponding plugin)
<li>If required, inject initial keys for additional VSS scripts (e.g. for <tt>authenticate.vso</tt>) with VRK (optional)
</ol>

\subsubsection subsubsec_sdi_adk48_user_config_packages User config packages

ADK 4.8 users have no other option and must provide project specific SDI configuration settings with user config packages.
The installation to new system location of SDI does not work with regional signing cards and requires additional privileges.
Therefore, OS Secure Installer provides the user config package concept, which allows to bring in files into location <tt>/etc/config</tt>, which is shared to SDI server.
User config packages are installed with <tt>usrX</tt> permissions and can be signed with a regional user signing card.

User config packages were already introduced for <tt>usr1</tt> SDI installations since ADK 4.7.7 and SDI 4.9.0.
From this point project specific configuration was properly separated from the SDI base installation.
In addition, some configurations (such as for ADKEMV, card ranges, whitelist etc.) are no longer installed with SDI base packages, since the provided defaults haven't fit to any project.
SDI base installation just contains a generic default configuration and user config packages are used to overload the defaults.
Existing user config packages for SDI (which were used for ADK 4.7.7 and higher) can be 1:1 reused for ADK 4.8.

Older SDI versions (without user config package support) might have used separate <tt>usr1</tt> packages to install additional SDI configuration files under <tt>/home/usr1</tt>.
These project should investigate in detail, which project specific settings under <tt>/home/usr1</tt> were used to provide them with an user config package now.
In addition, they are responsible to uninstall old <tt>usr1</tt> configuration files with additional removal packages before installation of ADK 4.8.

User config packages and supported file content are fully described in chapter \ref vos_user_config_package.

\subsubsection subsubsec_sdi_adk48_sdi_plugins SDI plugins

SDI plugins run in context of SDI server and are not restricted to use security APIs of OS and cardholder sensitive APIs of ADKEMV.
If developed by external developers (ADC or third-party), the source code of the plugin must be reviewed by SDI team, in order to disallow misuse (security requirement).
Finally, SDI team will be responsible for deployment of SDI plugins. Usually, SDI plugins are not part of the ADK solution package and are provided as separate releases in Artifactory.

SDI plugins are installed into <tt>lib</tt> folder in home directory of SDI server.
In ADK 4.7 (and older) this installation folder was <tt>/home/usr1/lib</tt>. With ADK 4.8 the new location will be <tt>/home/sys8/lib</tt>.
The installation to new system location of SDI does not work with regional signing cards and requires additional privileges.

Installed SDI plugins for previous SDI versions under <tt>usr1</tt> should be removed before updating to ADK 4.8.
SDI plugin releases (as far as it was provided by SDI team) will provide a corresponding removal packages:\n
<tt>dl.libsdiplugin-\<name\>-remove-X.X.X-X.tar</tt> (<tt>\<name\></tt> represents the name of the corresponding plugin)

For installation under new system location, new SDI plugin releases contain the following download packages (using suffix <tt>\-sys</tt>):\n
<tt>dl.libsdiplugin-\<name\>-sys-X.X.X-X.tar</tt> (installation package)\n
<tt>dl.libsdiplugin-\<name\>-remove-sys-X.X.X-X.tar</tt> (removal package)\n\n

SDI plugin installation packages are installed on the top of ADK 4.8.\n
For more details please refer to chapters \ref vos_sdi_plugin_package and \ref subsec_sdi_plugin_interface.

\subsubsection subsubsec_sdi_adk48_vss_scripts VSS scripts

SDI server, running as <tt>sys8</tt> process in ADK 4.8, does not execute VSS scripts directly, since it has no permissions to do this.
VSS scripts are executed by ADKSEC security service, which runs under system user <tt>sys10</tt> now.
With the \ref subsec_sdi_generic_crypto_interface SDI server has exported ADKSEC APIs. This feature was already available in older ADKs (4.7 and older),
where both services (SDI and ADKSEC) were launched as <tt>usr1</tt> processes.

Thus, projects might have used the \ref subsec_sdi_generic_crypto_interface to invoke own VSS scripts to implement domestic security requirements.\n
In this case an existing VSS script should be ready for reuse in ADK 4.8, but this will require a re-installation of the VSS script under <tt>usr1</tt>.\n
This works as follows:\n
New OS coming along with ADK 4.8 allows to share <tt>usrX</tt> VSS scripts with new ADKSEC user <tt>sys10</tt>.
VSS script sharing can be enabled, if the VSS script is installed/updated with a download package using group <tt>uXsys10</tt>.\n
Example: Group <tt>u1sys10</tt> is used to share an under <tt>usr1</tt> installed VSS script.\n
An update a previous installed VSS script will work without the lost of the associated keys:
<ul>
<li>If the <tt>vso</tt> file in the update package wasn't modified and is binary identical to the previous installed <tt>vso</tt> file
<li>If the <tt>vso</tt> file in the update package is not binary identical, it must implement the same memory block sections and use a retain block (<tt>RETAIN_BLK</tt>)
</ul>

For more details please refer to user guides for VSS scripts and Verifone Secure Installer ERS.

VSS scripts are installed with a \ref vos_user_vss_package.

\paragraph para_sdi_adk48_vss_scripts_e2e_communication E2E communication with VSS script authenticate.vso

Depending on the project, applications might require the E2E communication (SDI message encryption/authentication) with SDI command \ref subsubsec_sdi_sys_auth.
SDI server also uses an additional VSS script <tt>authenticate.vso</tt> for this feature.
Because the VSS script was part of the SDI component package for old installations, the script gets uninstalled with the removal of the old <tt>usr1</tt> SDI components.
Therefore, the associated keys for this VSS script get lost. If the E2E feature is required for new SDI installations again, the download package
<tt>dl.sdi-u1sys10-authent-vso-X.X.X-X-P2PE-X.X.X.tar</tt> must be installed on top of the ADK.
The package is provided as add-on with new SDI-SYS releases (see chapter \ref subsubsec_vos_sdi_deployment) and can be found in Artifactory.
The package is intended for <tt>usr1</tt> and can be signed with a regional user signing card.
After its installation the related keys must be newly injected with VRK.

\subsubsection subsubsec_sdi_adk48_key_management Key management

Payment keys such as for ADE (P2PE) and PIN block encryption are stored in VAULT and for its use the OS provides corresponding SRED compliant APIs, which work independent from the process user.
Thus, existing payment keys as used by old SDI server and ADKSEC under <tt>usr1</tt> can be reused under the new system location without the need for a new injection with VRK after ADK was updated.

Depending on the project, an initial injection of additional keys with VRK (e.g. for VSS scripts) might be required.

\endif

\subsection subsec_sdi_examples Examples

\subsubsection subsec_sdi_ui_examples UI command examples

\paragraph para_sdi_examples_handle_display Handle Display (24-03)

This chapter contains examples for command \ref subsubsec_sdi_handle_display

<b>Example 1: Display a dialog with text "Hello World" and 2 Buttons (standard cancel and enter button)</b>

SDI command:
\verbatim
2403 0000 F027FFA0110FDFA0130B48656C6C6F20576F726C64DFA143055469746C65DFA13D010ADFA005020000
Content of tag F0:  size=39  {
      FFA011 (display data)  size=15  {
         DFA013 (variable value)  size=11  48656C6C6F20576F726C64 ("Hello World")
      }
      DFA143 (dialog label text)  size=5   5469746C65 ("Title")
      DFA13D (dialog options)  size=1   0A (DLG_CancelKey|DLG_EnterKey)
      DFA005 (timeout)  size=2   0000 (infinite)
}
\endverbatim

Display content:
<table>
<tr><td>\image html ui_example_handle_display_1.png
<tr><td style='border:none;'><center><small>Dialog with text and 2 buttons</small></center>
</table>


SDI response for pressed enter button:
\verbatim
9000
\endverbatim
SDI response for pressed cancel button:
\verbatim
6405
\endverbatim

<b>Example 2: Display a YES/NO dialog with a question text and logo (w/o dialog title and CTLS Leds)</b>

SDI command:
\verbatim
2403 0000 F036FFA01113DFA0130F446F20796F75206C696B652069743FDFA13E03594553DFA140024E4FDFA13D0304005ADFA00502003CDFA00D0101
Content of tag F0:  size=54  {
      FFA011 (display data)  size=19  {
         DFA013 (variable value)  size=15  446F20796F75206C696B652069743F ("Do you like it?")
      }
      DFA13E (Enter button label text)  size=3   594553 ("YES")
      DFA140 (Cancel button label text)  size=2   4E4F ("NO")
      DFA13D (dialog options)  size=3   04005A (DLG_NoHeader|DLG_QuestionLogo|DLG_NoLEDs|DLG_EnterKey|DLG_CancelKey)
      DFA005 (timeout)  size=2   003C (60 seconds)
      DFA00D (beep)  size=1   01 (buzzer when dialog is displayed)
}
\endverbatim

Display content:
<table>
<tr><td>\image html ui_example_handle_display_2.png
<tr><td style='border:none;'><center><small>Display a YES/NO dialog with a question text/logo</small></center>
</table>

SDI response for pressed YES button:
\verbatim
9000
\endverbatim
SDI response for pressed NO button:
\verbatim
6405
\endverbatim
SDI response for timeout:
\verbatim
6600
\endverbatim

<b>Example 3: Display a text screen on bottom of the screen (w/o softkeys), which uses clear key as additional key action</b>

SDI command:
\verbatim
2403 0000 F049FFA0111FDFA0131B507265737320636C656172206B657920746F20636F6E74696E7565FFA10615DFA13B042623383BDFA13C0965786974202D313030DFA13D03160010DFA005020000
Content of tag F0:  size=73  {
      FFA011 (display data)  size=31  {
         DFA013 (variable value)  size=27  507265737320636C656172206B657920746F20636F6E74696E7565 ("Press clear key to continue")
      }
      FFA106 (additional key action)  size=21  {
         DFA13B (keycode)  size=4   2623383B ("&#8;")
         DFA13C (action)  size=9   65786974202D313030 ("exit -100")
      }
      DFA13D (dialog options)  size=3   160010 (DLG_ClearOnReturn|DLG_NoHeader|DLG_TextAlignBottomDLG_NoLEDs)
      DFA005 (timeout)  size=2   0000 (infinite)
}
\endverbatim

Display content:
<table>
<tr><td>\image html ui_example_handle_display_3.png
<tr><td style='border:none;'><center><small>Text screen w/o softkeys, headline, CTLS Leds</small></center>
</table>
After this dialog returns, the display is cleared by option <tt>DLG_ClearOnReturn</tt>.

SDI response for pressed clear key:
\verbatim
6400 F008DFA00004FFFFFF9C
Content of tag F0:  size=8   {
      DFA000 (UI error code)  size=4   FFFFFF9C (-100)
}
\endverbatim
The result <tt>-100</tt> is returned as 6400 with additional UI error code in TLV tag DFA000.

\paragraph para_sdi_examples_handle_menu Handle Menu (24-05)

This chapter contains examples for command \ref subsubsec_sdi_handle_menu

<b>Example 1: Display a menu with 4 options (option 2 pre-selected) including texts for dialog header and menu prompt</b>

SDI command:
\verbatim
2405 0000 F05DDFA00A0D506C656173652073656C656374DFA00B084F7074696F6E2031DFA00B084F7074696F6E2032DFA00B084F7074696F6E2033DFA00B084F7074696F6E2034DFA00C0102DFA00502001EDFA13D0106DFA14308534449204D656E75
Content of tag F0: size=93  {
      DFA00A (menu text prompt)  size=13  506C656173652073656C656374 ("Please select")
      DFA00B (menu entry text)  size=8   4F7074696F6E2031 ("Option 1" )
      DFA00B (menu entry text)  size=8   4F7074696F6E2032 ("Option 2" )
      DFA00B (menu entry text)  size=8   4F7074696F6E2033 ("Option 3" )
      DFA00B (menu entry text)  size=8   4F7074696F6E2034 ("Option 4" )
      DFA00C (index pre-selected item)  size=1   02
      DFA005 (timeout)  size=2   001E (30 seconds)
      DFA13D (dialog options)  size=1   06 (MENU_ClearOnReturn|MENU_NoLEDs)
      DFA143 (dialog label text)   size=8   534449204D656E75 ("SDI Menu")
}
\endverbatim

Display content:
<table>
<tr><td>\image html ui_example_handle_menu_1.png
<tr><td style='border:none;'><center><small>Menu with 4 options (option 2 pre-selected)</small></center>
</table>
After this dialog returns, the display is cleared by option <tt>MENU_ClearOnReturn</tt>.

SDI response for selected option 3:
\verbatim
9000 F005DFA00C0103
Content of tag F0: size=5   {
      DFA00C (selected menu entry)  size=1   03
}
\endverbatim
SDI response for pressed cancel button:
\verbatim
6405
\endverbatim
SDI response for timeout:
\verbatim
6600
\endverbatim

<b>Example 2: Display a menu with 3 options (no option pre-selected) and button text labels, clear key used as additional key action to move selection down</b>

SDI command:
\verbatim
2405 0000 F075DFA00A1153656C65637420796F7572206472696E6BDFA00B055761746572DFA00B06436F66666565DFA00B0442656572DFA00C0100DFA005020000DFA13D0102DFA13E0653656C656374DFA1400541626F7274DFA141025570DFA14204446F776EFFA10610DFA13B042623383BDFA13C04646F776E
Content of tag F0: size=117 {
      DFA00A (menu text prompt)  size=17  53656C65637420796F7572206472696E6B ("Select your drink")
      DFA00B (menu entry text)  size=5   5761746572 ("Water")
      DFA00B (menu entry text)  size=6   436F66666565 ("Coffee")
      DFA00B (menu entry text)  size=4   42656572 ("Beer")
      DFA00C (index pre-selected item)  size=1   00 (none)
      DFA005 (timeout)  size=2   0000 (infinite)
      DFA13D (dialog options)  size=1   02 (MENU_NoLEDs)
      DFA13E (Enter button label text)  size=6   53656C656374 ("Select")
      DFA140 (Cancel button label text)  size=5   41626F7274 ("Abort")
      DFA141 (Up button label text)  size=2   5570 ("Up")
      DFA142 (Down button label text) size=4   446F776E ("Down")
      FFA106 (additional key action)  size=16  {
         DFA13B   size=4   2623383B ("&#8;")
         DFA13C   size=4   646F776E ("down")
      }
}
\endverbatim

Display content:
<table>
<tr><td>\image html ui_example_handle_menu_2.png
<tr><td style='border:none;'><center><small>Menu with 3 options (none pre-selected) and button text labels<br>Dialog header contains default logo.</small></center>
</table>

SDI response for selected option 1:
\verbatim
9000 F005DFA00C0101
Content of tag F0: size=5   {
      DFA00C (selected menu entry)  size=1   01
}
\endverbatim
SDI response for pressed Abort button:
\verbatim
6405
\endverbatim

\paragraph para_sdi_examples_handle_html_dialog Handle HTML dialog (24-0A)

This chapter contains an example for command \ref subsubsec_sdi_handle_html_dialog

<b>Example: Display a dialog for input tip</b>

SDI command:
\verbatim
240A 0000 F058DFA020087469702E68746D6CFFA01113DFA01206616D6F756E74DFA013053130303030FFA01114DFA012097468726573686F6C64DFA01303323030FFA01113DFA0120863757272656E6379DFA01303455552DFA005020000
Content of tag F0:  size=88  {
      DFA020 (HTML file name)  size=8   7469702E68746D6C ("tip.html")
      FFA011 (display data)  size=19  {
         DFA012 (variable name)  size=6   616D6F756E74 ("amount")
         DFA013 (variable value)  size=5   3130303030 ("10000")
      }
      FFA011 (display data)  size=20  {
         DFA012 (variable name)  size=9   7468726573686F6C64 ("threshold")
         DFA013 (variable value)  size=3   323030 ("200")
      }
      FFA011 (display data)  size=19  {
         DFA012 (variable name)  size=8   63757272656E6379 ("currency")
         DFA013 (variable value)  size=3   455552 ("EUR")
      }
      DFA005 (timeout)  size=2   0000 (infinite)
}
\endverbatim

Display content:
<table>
<tr><td>\image html ui_example_handle_html_dialog.png
<tr><td style='border:none;'><center><small>HTML dialog for tip input</small></center>
</table>

SDI response for successful input (25% button pressed and confirmed)
\verbatim
9000 F06FFFA01413DFA01506616D6F756E74DFA016053130303030FFA01413DFA0150863757272656E6379DFA01603455552FFA01414DFA015097468726573686F6C64DFA01603323030FFA0140FDFA01503746970DFA0160432353030FFA01412DFA01505746F74616CDFA016053132353030
Content of tag F0:  size=111 {
      FFA014 (output data)  size=19  {
         DFA015 (variable name)  size=6   616D6F756E74 ("amount")
         DFA016   size=5   3130303030 ("10000")
      }
      FFA014 (output data)  size=19  {
         DFA015 (variable name)  size=8   63757272656E6379 ("currency")
         DFA016 (variable value)  size=3   455552 ("EUR")
      }
      FFA014 (output data)  size=20  {
         DFA015 (variable name)  size=9   7468726573686F6C64 ("threshold")
         DFA016 (variable value)  size=3   323030 ("200")
      }
      FFA014 (output data)  size=15  {
         DFA015 (variable name)  size=3   746970 ("tip")
         DFA016 (variable value)  size=4   32353030 ("2500")
      }
      FFA014 (output data)  size=18  {
         DFA015 (variable name)  size=5   746F74616C ("total")
         DFA016 (variable value)  size=5   3132353030 ("12500")
      }
}
\endverbatim

\subsection subsec_sdi_vcl_particularities VCL Particularities

When using the SDI Server with enabled VCL (e.g. in North America), the following points should be taken into account:

+ A SDI whitelist.json is not necessary/supported and should therefore not loaded on the device. Instead, the VCL BinTable mechanism works as usual.

\subsection subsec_sdi_obsolete_commands Obsolete Commands

The following commands are obsolete and should no longer be used!

+ MSR Enable (21-00)
+ PED Enable (22-00)
+ Card Detect Enable (23-00)
+ Display Enable (24-00)
+ Smart Card Enable (41-00)

*/
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
