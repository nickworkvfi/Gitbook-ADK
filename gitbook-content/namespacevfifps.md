---
hidden: true
title: vfifps Namespace Reference
---

[Typedefs](#typedef-members) \| [Enumerations](#enum-members) \| [Functions](#func-members)

|  |  |
|----|----|
| Typedefs |  |
| typedef void(\*  | [resultCallbackType](#a1533c279c5718316ff33db1874a98c2e)) (void \*dataptr, [FPS_CB_Type](#a5d7a8d9c16c82913bda07e2105783e0b) msgType, int width, std::vector\< unsigned char \> <a href="titusstubs_8cpp.md#structraw_data">rawData</a>) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870) { [FPS_RES_SUCCESS](#a3c1df956eda8f33eb06d11d024147870ad734b6d4c08ca860ae63c788ad44596f) = 0, [FPS_RES_FAILURE](#a3c1df956eda8f33eb06d11d024147870a00a8574f25755783ed93b0ac179e9668) = -1, [FPS_RES_NO_PROP](#a3c1df956eda8f33eb06d11d024147870ac442a125e0942b5a31c934464c026a0a) = -2, [FPS_RES_INFO_NOT_READ](#a3c1df956eda8f33eb06d11d024147870a27ad11a3e1003b122e4e2cb3c22a3d7c) = -3 } |
| enum   | [FPS_CB_Type](#a5d7a8d9c16c82913bda07e2105783e0b) {<br/>  [FPS_CB_DATA](#a5d7a8d9c16c82913bda07e2105783e0ba84fe43ea9b96ff3045a0eba99fe8954e), [FPS_CB_ERROR](#a5d7a8d9c16c82913bda07e2105783e0bad5b77e1822475ee4e0613f3ace7b97cf), [FPS_CB_INFO_BACKWARD_MOVEMENT](#a5d7a8d9c16c82913bda07e2105783e0baa6f84cab351ca2d17e25680e866afb74), [FPS_CB_INFO_BAD_QUALITY](#a5d7a8d9c16c82913bda07e2105783e0bae19c543080e3618fa126508090986da6),<br/>  [FPS_CB_INFO_CALIB_START](#a5d7a8d9c16c82913bda07e2105783e0ba7db7066974c9ab1cec3f37de1f0a4932), [FPS_CB_INFO_CENTER_AND_PRESS_HARDER](#a5d7a8d9c16c82913bda07e2105783e0ba305dee8a6d3d4533be1beb7f5250d37f), [FPS_CB_INFO_CLEAN_SENSOR](#a5d7a8d9c16c82913bda07e2105783e0ba92ebad09a3cb0487835673453ffe5209), [FPS_CB_INFO_CONSOLIDATION_FAIL](#a5d7a8d9c16c82913bda07e2105783e0ba60dc0416ab3e73510defa8119da9389b),<br/>  [FPS_CB_INFO_CONSOLIDATION_SUCCEED](#a5d7a8d9c16c82913bda07e2105783e0baffb3a61ba0e2091c6736e64d893608cf), [FPS_CB_INFO_ENROLL_START](#a5d7a8d9c16c82913bda07e2105783e0baf177d44ec60da2c5c4dbdd83f8ca6cee), [FPS_CB_INFO_ENROLL_PROGRESS](#a5d7a8d9c16c82913bda07e2105783e0baa9dc6d82477af8cc9c4999ef0a9d0640), [FPS_CB_INFO_FINGER_DETECT_START](#a5d7a8d9c16c82913bda07e2105783e0bab6148b4eae7488dbe57278db50158687),<br/>  [FPS_CB_INFO_FINGERLEFT](#a5d7a8d9c16c82913bda07e2105783e0bab8b190de5f68ab4ed1e9e9849481b2bc), [FPS_CB_INFO_FINGERRIGHT](#a5d7a8d9c16c82913bda07e2105783e0ba6b4af8e322a7d5c9cb5da4b56e7b4be1), [FPS_CB_INFO_FINGERTOP](#a5d7a8d9c16c82913bda07e2105783e0baa7a904becc2adad54a976e6064ce144b), [FPS_CB_INFO_FINGERBOTTOM](#a5d7a8d9c16c82913bda07e2105783e0ba443f3d7e979ef9ca410cd84569d6b2dc),<br/>  [FPS_CB_INFO_GOOD_IMAGE](#a5d7a8d9c16c82913bda07e2105783e0ba832d40195f58cfa3d935970735116ce4), [FPS_CB_INFO_GUI_FINISH](#a5d7a8d9c16c82913bda07e2105783e0ba306f34d4e771bdeffdb6cf71b3f7d8a6), [FPS_CB_INFO_GUI_FINISH_DETECT_START](#a5d7a8d9c16c82913bda07e2105783e0ba144fdeb4fbb2e80a2a588df545b18b38), [FPS_CB_INFO_GUI_FINISH_FAIL](#a5d7a8d9c16c82913bda07e2105783e0ba34b79957cb55a81efe2847afca48ae29),<br/>  [FPS_CB_INFO_GUI_FINISH_SUCCEED](#a5d7a8d9c16c82913bda07e2105783e0bac3e41f171cd72c71064f3015012e8769), [FPS_CB_INFO_IMAGE_PROCESSED](#a5d7a8d9c16c82913bda07e2105783e0ba96e135543aa06812326ff9ca38bdd345), [FPS_CB_INFO_JOINT_DETECTED](#a5d7a8d9c16c82913bda07e2105783e0ba1ba642b17ea14f9320dcabb7a3db8d92), [FPS_CB_INFO_KEEP_FINGER](#a5d7a8d9c16c82913bda07e2105783e0baeb18217ac28f5d6656642a8098035084),<br/>  [FPS_CB_INFO_NO_FINGER](#a5d7a8d9c16c82913bda07e2105783e0ba055cfc2dd7a73a740e6fb73c060ad94c), [FPS_CB_INFO_PROCESSING_IMAGE](#a5d7a8d9c16c82913bda07e2105783e0ba42519f5be19064f77e65e239e1b36144), [FPS_CB_INFO_PUT_FINGER](#a5d7a8d9c16c82913bda07e2105783e0ba1886e93031810f14479b1faa77df8e2e), [FPS_CB_INFO_PUT_FINGER2](#a5d7a8d9c16c82913bda07e2105783e0ba62b4dbaab0c5cd40b64c94073e0f87c2),<br/>  [FPS_CB_INFO_PUT_FINGER3](#a5d7a8d9c16c82913bda07e2105783e0baa47a6648946ad8dffc21eed18bb7db83), [FPS_CB_INFO_PUT_FINGER4](#a5d7a8d9c16c82913bda07e2105783e0ba388f341d89a5237ffe71738b212284f1), [FPS_CB_INFO_PUT_FINGER5](#a5d7a8d9c16c82913bda07e2105783e0ba29f94b2001c06a9bd993f42697184623), [FPS_CB_INFO_REMOVE_FINGER](#a5d7a8d9c16c82913bda07e2105783e0ba08a08925cfa56c984392fe5f0f08f25d),<br/>  [FPS_CB_INFO_START](#a5d7a8d9c16c82913bda07e2105783e0ba01a4bfc51d4f59e597c70a7a5ba06fea), [FPS_CB_INFO_SWIPE_IN_PROGRESS](#a5d7a8d9c16c82913bda07e2105783e0bafad5c808443372f146079e4134a6fab2), [FPS_CB_INFO_TOO_DARK](#a5d7a8d9c16c82913bda07e2105783e0ba4f0f256adfff299b59d31bb3bd37e063), [FPS_CB_INFO_TOO_DRY](#a5d7a8d9c16c82913bda07e2105783e0ba7b8ec4d80640e9e7d01a20b6474f36bf),<br/>  [FPS_CB_INFO_TOO_FAST](#a5d7a8d9c16c82913bda07e2105783e0ba7f5db237cc9ebd5a4fcc2da14a6ac5b2), [FPS_CB_INFO_TOO_HIGH](#a5d7a8d9c16c82913bda07e2105783e0ba6402d3434046a7825e98886d19745da9), [FPS_CB_INFO_TOO_LEFT](#a5d7a8d9c16c82913bda07e2105783e0ba2e7decb9b5a4eb02d0e62198a676d3c5), [FPS_CB_INFO_TOO_LIGHT](#a5d7a8d9c16c82913bda07e2105783e0ba095b21b5793b83493f65d330380024df),<br/>  [FPS_CB_INFO_TOO_LOW](#a5d7a8d9c16c82913bda07e2105783e0ba04eb7784eef19503b5d156cdbc8d0e00), [FPS_CB_INFO_TOO_RIGHT](#a5d7a8d9c16c82913bda07e2105783e0ba1b2a61e080f36309dcb038c668be67b2), [FPS_CB_INFO_TOO_SHORT](#a5d7a8d9c16c82913bda07e2105783e0bafebb3b97ae2a1afa00a7058abfa821ad), [FPS_CB_INFO_TOO_SKEWED](#a5d7a8d9c16c82913bda07e2105783e0ba9022096640a0819b342fbb27e14ddb15),<br/>  [FPS_CB_INFO_TOO_SMALL](#a5d7a8d9c16c82913bda07e2105783e0ba7ae49728abdb2a0f5b81855a51dd2f60), [FPS_CB_INFO_TOO_STRANGE](#a5d7a8d9c16c82913bda07e2105783e0ba71389ab703cd25bf1c1699560646a27b), [FPS_CB_INFO_TOUCH_SENSOR](#a5d7a8d9c16c82913bda07e2105783e0bacbd17103c399e23a497a9dc95fc416a2), [FPS_CB_INFO_VERIFY_START](#a5d7a8d9c16c82913bda07e2105783e0ba3dd8259f433b7a4345e6ea365b8431d1),<br/>  [FPS_CB_PICTURE](#a5d7a8d9c16c82913bda07e2105783e0bacaac8be8010f044f993111acfad8ba0a), [FPS_CB_ANSI_DATA](#a5d7a8d9c16c82913bda07e2105783e0bac6d12b2fe8224338b1acbb6ca669ac99), [FPS_CB_ISO_DATA](#a5d7a8d9c16c82913bda07e2105783e0bac1b8153e221d565bbb0639dc0e160973), [FPS_CB_PGM_DATA](#a5d7a8d9c16c82913bda07e2105783e0baf4a7f345ea2cb22d3496c61862a8128c)<br/>} |
| enum   | [FPS_PROP_INT_Type](#af96966f9c2d007371a573af52137396c) {<br/>  [FPS_PROP_INT_VERSION](#af96966f9c2d007371a573af52137396ca5fd73ed7b64a99066d18234779cc768e), [FPS_PROP_INT_INFO](#af96966f9c2d007371a573af52137396ca7d380debdfe5fd6d07a492363de957f3), [FPS_PROP_INT_MINNEXTVERSION](#af96966f9c2d007371a573af52137396ca7dcfb5a4692a1f838f1a89bd79da4eff), [FPS_PROP_INT_VARIANT](#af96966f9c2d007371a573af52137396ca19be2ba5702c8157c50567ab9565a901),<br/>  [FPS_PROP_INT_FUNCTIONALITY](#af96966f9c2d007371a573af52137396cae51635291ffea7eb485f94392d7d2b6b), [FPS_PROP_INT_CONFIG](#af96966f9c2d007371a573af52137396cabd884e03da5adb4ede39293ccb3f3c02), [FPS_PROP_INT_ID](#af96966f9c2d007371a573af52137396ca1ea544508442573db51171bcf8bad16f), [FPS_PROP_INT_AUTHENTIFYID](#af96966f9c2d007371a573af52137396cae46d9d075469e89e20d99dc785f034a1),<br/>  [FPS_PROP_INT_USAGE](#af96966f9c2d007371a573af52137396cae101c15c4764203b64e60928d36f56d9), [FPS_PROP_INT_SENSORTYPE](#af96966f9c2d007371a573af52137396caf8c0384fbf2ab3078ce5ee61453b611e), [FPS_PROP_INT_IMAGEWIDTH](#af96966f9c2d007371a573af52137396ca6d032055886e50141810e73e0b4af413), [FPS_PROP_INT_IMAGEHEIGHT](#af96966f9c2d007371a573af52137396ca0a1ee2e1ed860474a5e4dd930918262a),<br/>  [FPS_PROP_INT_MAXGRABWINDOW](#af96966f9c2d007371a573af52137396cae6db6adef8b3771d27a4e72ccb79edab), [FPS_PROP_INT_COMPANIONVENDORCODE](#af96966f9c2d007371a573af52137396ca4786bbb0e08669892b8e270e2528d9a3), [FPS_PROP_INT_VERSIONEXT](#af96966f9c2d007371a573af52137396ca4a2a698dbb7e42a1ac6c8a324d125ec3), [FPS_PROP_INT_SYSTEMID](#af96966f9c2d007371a573af52137396ca5f8512e22d638abe46541245bdf52532),<br/>  [FPS_PROP_INT_DATATYPE](#af96966f9c2d007371a573af52137396cace5aaae29cb8194bc70ac87d1fa3c90b), [FPS_PROP_INT_IMAGE_QUALITY_LAST](#af96966f9c2d007371a573af52137396ca6709f98fbd780c2cfe1439ccbbb848ae), [FPS_PROP_INT_IMAGE_NUMBER_OF_MINUTIAE_LAST](#af96966f9c2d007371a573af52137396cacb7e2d9e5580b07273a1246c693216a5), [FPS_PROP_INT_IMAGE_SIZE](#af96966f9c2d007371a573af52137396ca0a0cbaeeed2746d81f2aa231342c06fb)<br/>} |
| enum   | [FPS_PROP_STRING_Type](#a94a6e9df02d10dc416e0a1e1b0b6dde7) {<br/>  [FPS_PROP_STRING_EXTINFO](#a94a6e9df02d10dc416e0a1e1b0b6dde7af3d5f46fa532530f27ddc4141dde5cc7), [FPS_PROP_STRING_INFO](#a94a6e9df02d10dc416e0a1e1b0b6dde7a367c168de784483d15f092018f8a2040), [FPS_PROP_STRING_TYPE](#a94a6e9df02d10dc416e0a1e1b0b6dde7a5ca8e04652708c1e25a1f0248f2b83ba), [FPS_PROP_STRING_HWINFO](#a94a6e9df02d10dc416e0a1e1b0b6dde7ae257bab40a9052975daaa20e49082cb0),<br/>  [FPS_PROP_STRING_GUID](#a94a6e9df02d10dc416e0a1e1b0b6dde7a0da07d6f8c852bc533ee3f07a6a46c36), [FPS_PROP_STRING_SYSTEMNAME](#a94a6e9df02d10dc416e0a1e1b0b6dde7ac19d3ef4cfa3a54e697a6116272e7fac)<br/>} |
| enum   | [FPS_IMG_Type](#af3c1346c7455895cfa8c46ccffdf7d50) {<br/>  [FPS_IMG_RAW](#af3c1346c7455895cfa8c46ccffdf7d50a44530167bb477ee327f9d91adf0ed966), [FPS_IMG_PGM](#af3c1346c7455895cfa8c46ccffdf7d50a4cf384925525f63f40a2521b231f2645), [FPS_IMG_ANSI](#af3c1346c7455895cfa8c46ccffdf7d50ad37530d8fe77c215c24a0b2702fc7668), [FPS_IMG_ISO](#af3c1346c7455895cfa8c46ccffdf7d50acb8696040ddc981bf83962f59b56f6fb),<br/>  [FPS_IMG_ALL](#af3c1346c7455895cfa8c46ccffdf7d50ac940fbcfe83c44ee2c9c92f90ec0d460)<br/>} |

|  |  |
|----|----|
| Functions |  |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int16_t  | [fps_open](#a0e210dd7087b2ce621faa8ede70b52fc) (std::string &device) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870)  | [fps_close](#a1bcf940c8fae055399fa4bbca5706857) (int16_t handle) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870)  | [fps_getPropInt](#aabd8ab15a7fd2ef1b07c2f290ce2a733) (int16_t handle, [FPS_PROP_INT_Type](#af96966f9c2d007371a573af52137396c) prop, int &propValue) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870)  | [fps_getPropString](#a70ed6204aba42111ed075782c8f6d4f7) (int16_t handle, [FPS_PROP_STRING_Type](#a94a6e9df02d10dc416e0a1e1b0b6dde7) prop, std::string &propValue) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870)  | [fps_setPropInt](#a1da91c3ff4fec25324382d2f0a5bd7f4) (int16_t handle, [FPS_PROP_INT_Type](#af96966f9c2d007371a573af52137396c) prop, int &newPropValue) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870)  | [fps_setPropString](#aa212398e5fd76ad41813af715e9c133e) (int16_t handle, [FPS_PROP_STRING_Type](#a94a6e9df02d10dc416e0a1e1b0b6dde7) prop, std::string &newPropValue) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870)  | [fps_capture_start](#aef6cf8111b7458ae47e9757475c6a6be) (int16_t handle, [resultCallbackType](#a1533c279c5718316ff33db1874a98c2e) cb, void \*dataptr) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870)  | [fps_capture_stop](#af516c30db101eb73dfaa9e003c3bd453) (int16_t handle) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::string  | [fps_GetVersion](#a5b5afa88c2187fe3caa65bce8eb8088e) () |

## TypedefDocumentation {#typedef-documentation}

## resultCallbackType <a href="#a1533c279c5718316ff33db1874a98c2e" id="a1533c279c5718316ff33db1874a98c2e"></a>

<p>typedef void(\* resultCallbackType) (void \*dataptr, [FPS_CB_Type](#a5d7a8d9c16c82913bda07e2105783e0b) msgType, int width, std::vector\< unsigned char \> <a href="titusstubs_8cpp.md#structraw_data">rawData</a>)</p>

callback method of capture_start

**Parameters**

**dataptr** - reference to sender **msgType** - identifies the kind of callback data **width** - information about the picture width **rawData** - raw data of the message delivered as vector of unsigned chars

## EnumerationType Documentation {#enumeration-type-documentation}

## FPS_CB_Type <a href="#a5d7a8d9c16c82913bda07e2105783e0b" id="a5d7a8d9c16c82913bda07e2105783e0b"></a>

<p>enum [FPS_CB_Type](#a5d7a8d9c16c82913bda07e2105783e0b)</p>

enumeration of callback types

| Enumerator |  |
|----|----|
| FPS_CB_DATA  | <p>data read successfully</p> |
| FPS_CB_ERROR  | <p>error occurred, see details in the data vector of the callback</p> |
| FPS_CB_INFO_BACKWARD_MOVEMENT  | <p>backward movement</p> |
| FPS_CB_INFO_BAD_QUALITY  | <p>bad quality, try again</p> |
| FPS_CB_INFO_CALIB_START  | <p>calib start</p> |
| FPS_CB_INFO_CENTER_AND_PRESS_HARDER  | <p>center and press harder</p> |
| FPS_CB_INFO_CLEAN_SENSOR  | <p>clean the sensor</p> |
| FPS_CB_INFO_CONSOLIDATION_FAIL  | <p>consolidation fail</p> |
| FPS_CB_INFO_CONSOLIDATION_SUCCEED  | <p>consolidation succeed</p> |
| FPS_CB_INFO_ENROLL_START  | <p>enroll start</p> |
| FPS_CB_INFO_ENROLL_PROGRESS  | <p>enroll progress</p> |
| FPS_CB_INFO_FINGER_DETECT_START  | <p>detect start</p> |
| FPS_CB_INFO_FINGERLEFT  | <p>position finger : exceeding left boundaries</p> |
| FPS_CB_INFO_FINGERRIGHT  | <p>position finger : exceeding right boundaries</p> |
| FPS_CB_INFO_FINGERTOP  | <p>position finger : exceeding top boundaries</p> |
| FPS_CB_INFO_FINGERBOTTOM  | <p>position finger : exceeding bottom boundaries</p> |
| FPS_CB_INFO_GOOD_IMAGE  | <p>good image</p> |
| FPS_CB_INFO_GUI_FINISH  | <p>gui finish</p> |
| FPS_CB_INFO_GUI_FINISH_DETECT_START  | <p>gui finish detect start</p> |
| FPS_CB_INFO_GUI_FINISH_FAIL  | <p>gui finish fail</p> |
| FPS_CB_INFO_GUI_FINISH_SUCCEED  | <p>gui finished succeed</p> |
| FPS_CB_INFO_IMAGE_PROCESSED  | <p>image processed</p> |
| FPS_CB_INFO_JOINT_DETECTED  | <p>joint detected</p> |
| FPS_CB_INFO_KEEP_FINGER  | <p>keep finger on sensor</p> |
| FPS_CB_INFO_NO_FINGER  | <p>no finger</p> |
| FPS_CB_INFO_PROCESSING_IMAGE  | <p>processing image</p> |
| FPS_CB_INFO_PUT_FINGER  | <p>put finger number 1</p> |
| FPS_CB_INFO_PUT_FINGER2  | <p>put finger number 2</p> |
| FPS_CB_INFO_PUT_FINGER3  | <p>put finger number 3</p> |
| FPS_CB_INFO_PUT_FINGER4  | <p>put finger number 4</p> |
| FPS_CB_INFO_PUT_FINGER5  | <p>put finger number 5</p> |
| FPS_CB_INFO_REMOVE_FINGER  | <p>remove finger</p> |
| FPS_CB_INFO_START  | <p>start</p> |
| FPS_CB_INFO_SWIPE_IN_PROGRESS  | <p>swipe in progress</p> |
| FPS_CB_INFO_TOO_DARK  | <p>image too dark</p> |
| FPS_CB_INFO_TOO_DRY  | <p>too dry</p> |
| FPS_CB_INFO_TOO_FAST  | <p>too fast</p> |
| FPS_CB_INFO_TOO_HIGH  | <p>too hight</p> |
| FPS_CB_INFO_TOO_LEFT  | <p>too left</p> |
| FPS_CB_INFO_TOO_LIGHT  | <p>image too light</p> |
| FPS_CB_INFO_TOO_LOW  | <p>too low</p> |
| FPS_CB_INFO_TOO_RIGHT  | <p>too right</p> |
| FPS_CB_INFO_TOO_SHORT  | <p>too short</p> |
| FPS_CB_INFO_TOO_SKEWED  | <p>too skewed</p> |
| FPS_CB_INFO_TOO_SMALL  | <p>too small</p> |
| FPS_CB_INFO_TOO_STRANGE  | <p>too strange</p> |
| FPS_CB_INFO_TOUCH_SENSOR  | <p>touch sensor</p> |
| FPS_CB_INFO_VERIFY_START  | <p>verify start</p> |
| FPS_CB_PICTURE  | <p>picture in raw data format</p> |
| FPS_CB_ANSI_DATA  | <p>picture in ansi format</p> |
| FPS_CB_ISO_DATA  | <p>picture in iso format</p> |
| FPS_CB_PGM_DATA  | <p>picture in pgm format</p> |

## FPS_IMG_Type <a href="#af3c1346c7455895cfa8c46ccffdf7d50" id="af3c1346c7455895cfa8c46ccffdf7d50"></a>

<p>enum [FPS_IMG_Type](#af3c1346c7455895cfa8c46ccffdf7d50)</p>

enumeration of desired image type, standard is RAW

| Enumerator |  |
|----|----|
| FPS_IMG_RAW  | <p>Image will be scanned in RAW format of sensor</p> |
| FPS_IMG_PGM  | <p>Image will be converted to PGM format</p> |
| FPS_IMG_ANSI  | <p>Image will be converted to ANSI format</p> |
| FPS_IMG_ISO  | <p>Image will be converted to ISO format</p> |
| FPS_IMG_ALL  | <p>All image formats will be delivered in callback</p> |

## FPS_PROP_INT_Type <a href="#af96966f9c2d007371a573af52137396c" id="af96966f9c2d007371a573af52137396c"></a>

<p>enum [FPS_PROP_INT_Type](#af96966f9c2d007371a573af52137396c)</p>

enumeration of integer properties

| Enumerator |  |
|----|----|
| FPS_PROP_INT_VERSION  | <p>property of version informations</p> |
| FPS_PROP_INT_INFO  | <p>property of general informations</p> |
| FPS_PROP_INT_MINNEXTVERSION  | <p>property of minimal next version</p> |
| FPS_PROP_INT_VARIANT  | <p>property of variant</p> |
| FPS_PROP_INT_FUNCTIONALITY  | <p>property of functionality</p> |
| FPS_PROP_INT_CONFIG  | <p>property of configuration</p> |
| FPS_PROP_INT_ID  | <p>property of id</p> |
| FPS_PROP_INT_AUTHENTIFYID  | <p>property of authentify id</p> |
| FPS_PROP_INT_USAGE  | <p>property of usage</p> |
| FPS_PROP_INT_SENSORTYPE  | <p>property of sensortype</p> |
| FPS_PROP_INT_IMAGEWIDTH  | <p>property of max image width</p> |
| FPS_PROP_INT_IMAGEHEIGHT  | <p>property of max image height</p> |
| FPS_PROP_INT_MAXGRABWINDOW  | <p>property of max grab window</p> |
| FPS_PROP_INT_COMPANIONVENDORCODE  | <p>property of companion vendor code</p> |
| FPS_PROP_INT_VERSIONEXT  | <p>property of version extension</p> |
| FPS_PROP_INT_SYSTEMID  | <p>property of system id</p> |
| FPS_PROP_INT_DATATYPE  | <p>property of datatype</p> |
| FPS_PROP_INT_IMAGE_QUALITY_LAST  | <p>property of last image quality</p> |
| FPS_PROP_INT_IMAGE_NUMBER_OF_MINUTIAE_LAST  | <p>property of number of minutiae in last scan</p> |
| FPS_PROP_INT_IMAGE_SIZE  | <p>property of image size for iso/ansi</p> |

## FPS_PROP_STRING_Type <a href="#a94a6e9df02d10dc416e0a1e1b0b6dde7" id="a94a6e9df02d10dc416e0a1e1b0b6dde7"></a>

<p>enum [FPS_PROP_STRING_Type](#a94a6e9df02d10dc416e0a1e1b0b6dde7)</p>

enumeration of string properties

| Enumerator |  |
|----|----|
| FPS_PROP_STRING_EXTINFO  | <p>f.e. extended info from sensor in json format</p> |
| FPS_PROP_STRING_INFO  | <p>f.e. raw data from sensor in json format</p> |
| FPS_PROP_STRING_TYPE  | <p>f.e. sensor type</p> |
| FPS_PROP_STRING_HWINFO  | <p>f.e. extended informations of used hardware</p> |
| FPS_PROP_STRING_GUID  | <p>f.e. guid delivered by sensor</p> |
| FPS_PROP_STRING_SYSTEMNAME  | <p>f.e. system name delivered by sensor</p> |

## FPS_RES_Type <a href="#a3c1df956eda8f33eb06d11d024147870" id="a3c1df956eda8f33eb06d11d024147870"></a>

<p>enum [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870)</p>

enumeration of result types

| Enumerator |  |
|----|----|
| FPS_RES_SUCCESS  | <p>function was successful</p> |
| FPS_RES_FAILURE  | <p>function returned with failure</p> |
| FPS_RES_NO_PROP  | <p>function returned with no such property</p> |
| FPS_RES_INFO_NOT_READ  | <p>function returned fpsInfo not read</p> |

## FunctionDocumentation {#function-documentation}

## fps_capture_start() <a href="#aef6cf8111b7458ae47e9757475c6a6be" id="aef6cf8111b7458ae47e9757475c6a6be"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870) vfifps::fps_capture_start</p>

start captureing fingerprint from device (asyncron). Install a callback that indicates successful read, errors or user information.

**Parameters**

**handle** - handle to fingerprint sensor object **cb** - callback for user instruction, results **dataptr** - ptr to datacontext of caller

### Returns

success indicator cf. FPS_RES_Type

## fps_capture_stop() <a href="#af516c30db101eb73dfaa9e003c3bd453" id="af516c30db101eb73dfaa9e003c3bd453"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870) vfifps::fps_capture_stop</p>

stop captureing fingerprint from device

**Parameters**

**handle** - handle to fingerprint sensor object

### Returns

success indicator cf. FPS_RES_Type

## fps_close() <a href="#a1bcf940c8fae055399fa4bbca5706857" id="a1bcf940c8fae055399fa4bbca5706857"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870) vfifps::fps_close</p>

close connection to fingerprint sensor

**Parameters**

**handle** - handle to fingerprint sensor object

### Returns

success indicator cf. FPS_RES_Type

## fps_getPropInt() <a href="#aabd8ab15a7fd2ef1b07c2f290ce2a733" id="aabd8ab15a7fd2ef1b07c2f290ce2a733"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870) vfifps::fps_getPropInt</p>

read property of integer type from fingerprint sensor

**Parameters**

**handle** - handle to fingerprint sensor object **prop** - integer property to read **propValue** - out variable where the read result is stored

### Returns

success indicator cf. FPS_RES_Type

## fps_getPropString() <a href="#a70ed6204aba42111ed075782c8f6d4f7" id="a70ed6204aba42111ed075782c8f6d4f7"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870) vfifps::fps_getPropString</p>

read property of string type from fingerprint sensor

**Parameters**

**handle** - handle to fingerprint sensor object **prop** - string property to read **propValue** - out variable where the read result is stored

### Returns

success indicator cf. FPS_RES_Type

## fps_GetVersion() <a href="#a5b5afa88c2187fe3caa65bce8eb8088e" id="a5b5afa88c2187fe3caa65bce8eb8088e"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::string vfifps::fps_GetVersion</p>

get version of adk library

## fps_open() <a href="#a0e210dd7087b2ce621faa8ede70b52fc" id="a0e210dd7087b2ce621faa8ede70b52fc"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int16_t vfifps::fps_open</p>

open connection to fingerprint sensor

**Parameters**

**device** - device identifier to open. If empty automatic device detection.

### Returns

handle to opened finger print sensor

## fps_setPropInt() <a href="#a1da91c3ff4fec25324382d2f0a5bd7f4" id="a1da91c3ff4fec25324382d2f0a5bd7f4"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870) vfifps::fps_setPropInt</p>

write property of integer type to fingerprint sensor

**Parameters**

**handle** - handle to fingerprint sensor object **prop** - integer property to write **newPropValue** - in variable where the data to write is stored

### Returns

success indicator cf. FPS_RES_Type

## fps_setPropString() <a href="#aa212398e5fd76ad41813af715e9c133e" id="aa212398e5fd76ad41813af715e9c133e"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> [FPS_RES_Type](#a3c1df956eda8f33eb06d11d024147870) vfifps::fps_setPropString</p>

write property of string type from fingerprint sensor

**Parameters**

**handle** - handle to fingerprint sensor object **prop** - string property to write **newPropValue** - in variable where the data to write is stored

### Returns

success indicator cf. FPS_RES_Type
