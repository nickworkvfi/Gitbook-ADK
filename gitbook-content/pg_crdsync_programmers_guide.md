---
hidden: true
title: ADK-CRD-SYNC Programmers Guide
---

# Preface <a href="#sec_crd_sync_preface" id="sec_crd_sync_preface"></a>

The CRD-SYNC library is an optional component supporting reading and writing of synchronous contact chip cards.

# Introduction <a href="#sec_crd_sync_introduction" id="sec_crd_sync_introduction"></a>

The operating system of VOS and VOS2 terminals supports handling of synchronous contact chip cards by means of L1 libraries. Based on this the so called \"Card Reader Synchronous\" was built. This shared library is wrapped by ADK-CRD-SYNC.

# Getting Started <a href="#sec_crd_sync_getting_started" id="sec_crd_sync_getting_started"></a>

- Analyze which preconditions are required: [System Setup and Requirements](#sec_crd_sync_system_setup)
- Acquire synchronous contact test cards.
- Study the sample code: [Sample Code](#sub_sec_crd_sync_sample)

# Programming <a href="#sec_crd_sync_programming" id="sec_crd_sync_programming"></a>

## API Functions <a href="#sub_sec_crd_sync_api" id="sub_sec_crd_sync_api"></a>

- <a href="crdsync__client_8h.md#aad6e42b9b4a77a320b963da0d9ebd455">crdSync_Version(char *version, unsigned char len)</a>
- <a href="crdsync__client_8h.md#a3d9902893c6348c09d6d70f20b0a13b2">crdSync_SetTraceCallback(CRDSYNC_TraceCallback cbf, void *cb_data)</a>
- <a href="crdsync_8h.md#af2e8b408142c3fdf772936352aaec87a">crdSync_Open(unsigned Options)</a>
- <a href="crdsync_8h.md#a6f7218a5eddce4c7a642d1c020192934">crdSync_Close(unsigned Options)</a>
- <a href="crdsync_8h.md#a0337406ca951ed912c718448567f0c86">crdSync_IsCardPresent(void)</a>
- <a href="crdsync_8h.md#a54f538cdfe50976653de0ed7550a716b">crdSync_PowerUp(int CardType, unsigned char AtrBuf[], unsigned char *AtrLen)</a>
- <a href="crdsync_8h.md#aa210b9d21f89580090da29bf7b9de69d">crdSync_PowerDown(void)</a>
- <a href="crdsync_8h.md#afbd3dd4039b9bf6429ed7ea88d90826d">crdSync_ReadData(int MemoryAddress, unsigned char RxBuf[], unsigned short RxLen)</a>
- <a href="crdsync_8h.md#a74d8a2a3fedd23009bdbb24d34883b86">crdSync_WriteData(int MemoryAddress, const unsigned char TxBuf[], unsigned short TxLen)</a>
- *SLE cards:*
  - <a href="crdsync_8h.md#a0956e82cc1a12c4f1b9f27b6dd2d576c">crdSync_PresentSecretCode(const unsigned char PinCode[], unsigned short nSize)</a>
  - <a href="crdsync_8h.md#ad3eccb6485c7583082120d95981a6a38">crdSync_ReadSecurityMem(unsigned char RxBuff[], unsigned char * BufLen)</a>
  - <a href="crdsync_8h.md#aa41d492f0275f153748ef692748b1f8c">crdSync_WriteSecurityMem(const unsigned char TxBuf[], unsigned short TxLen)</a>
  - *SLE4442:*
    - <a href="crdsync_8h.md#a89f8fa5cd76e3b6c9a86f57281339f32">crdSync_ReadProtectionMem(unsigned char RxBuf[])</a>
    - <a href="crdsync_8h.md#a3e651310d7f0502e94062bffdadf102e">crdSync_WriteProtectionMem(unsigned short MemoryAddress, const unsigned char TxBuf[], unsigned short TxLen)</a>
  - *SLE4428:*
    - <a href="crdsync_8h.md#aa7f47bb821fe3ca17f13e5db732f8aed">crdSync_ReadWithProtectionBit(int MemoryAddress, unsigned char RxBuf[], unsigned short RxLen)</a>
    - <a href="crdsync_8h.md#a5d10ad831fab9466b20dd3ae4dccaa0e">crdSync_WriteWithProtectionBit(int MemoryAddress, unsigned char TxBuf[], unsigned short TxLen)</a>

## Sample Code <a href="#sub_sec_crd_sync_sample" id="sub_sec_crd_sync_sample"></a>

<a href="crdsync-demo_8cpp-example.md">C++ example source code</a>

# System Setup and Requirements <a href="#sec_crd_sync_system_setup" id="sec_crd_sync_system_setup"></a>

- No support for Verix platform.
- **Build Your Application**
  - use delivery package **crdsync-vos(2)-dev-x.x.x-x.zip**
  - include header *<a href="crdsync_8h.md">crdsync.h</a>*
  - link against *libcrdsync.so*
- **Terminal loading**
  - \"Synchronous Card API Library\" must be loaded to the terminal:
    **dl.vertexreadersync-x.x.x-xxx.tar**,
    see <a href="https://artifactory.verifone.com/artifactory/RMS_Release_CLW/ADK/CR-SYNC">https://artifactory.verifone.com/artifactory/RMS_Release_CLW/ADK/CR-SYNC</a>
  - Load ADK-CRD-SYNC component to terminal:
    **dl.libcrdsync-x.x.x-xxx.tar**,
    see <a href="https://artifactory.verifone.com/artifactory/RMS_Release_CLW/ADK/CRD-SYNC">https://artifactory.verifone.com/artifactory/RMS_Release_CLW/ADK/CRD-SYNC</a>
- For client/server see [Client/Server usage](#subsec_crd_sync_client_server)

# Troubleshooting <a href="#sec_crd_sync_troubleshooting" id="sec_crd_sync_troubleshooting"></a>

- **Synchronous Card API Library**
  Check presence of needed component *dl.vertexreadersync-x.x.x-xxx.tar*.
- **Trace**
  Activate the trace with help of <a href="crdsync_8h.md#a3d9902893c6348c09d6d70f20b0a13b2">crdSync_SetTraceCallback()</a>.
  Provide the resulting output to ADK team for analysis.

# Appendix <a href="#sec_crd_sync_appendix" id="sec_crd_sync_appendix"></a>

## Client/Server usage <a href="#subsec_crd_sync_client_server" id="subsec_crd_sync_client_server"></a>

ADK-CRD-SYNC delivery includes client/server components.
These may be needed under special project requirements, e.g. the so called \"two-piece-solution\".
In client/server architecture the application process links to **libcrdsyncclient**.
A separate process (**crdsyncserver**) links the libcrdsync.
Each command request and response is serialized and transferred via IPC between application and server process.

### Client API <a href="#subsubsec_crd_sync_client_server_api" id="subsubsec_crd_sync_client_server_api"></a>

The API is very similar to [API Functions](#sub_sec_crd_sync_api).
All functions have the same names and parameters. But they have one additional parameter \"server index\" to identify which server to use.
There is one additional function to set and connect the servers:
<a href="crdsync__client_8h.md#ab2e78bd9c5c6b74f19cea21b58cc46ff">crdSync_ConfigureServer()</a>

- <a href="crdsync__client_8h.md#aad6e42b9b4a77a320b963da0d9ebd455">crdSync_Version(char *version, unsigned char len)</a>
- <a href="crdsync__client_8h.md#a3d9902893c6348c09d6d70f20b0a13b2">crdSync_SetTraceCallback(CRDSYNC_TraceCallback cbf, void *cb_data)</a>
- <a href="crdsync__client_8h.md#ae4db0dd5e9a3959cb1c275398d12a5ab">crdSync_Open(unsigned char server_idx, unsigned Options)</a>
- <a href="crdsync__client_8h.md#ab0c482a0301b187a94c57efcb14cadbc">crdSync_Close(unsigned char server_idx, unsigned Options)</a>
- <a href="crdsync__client_8h.md#a6c35c135ee3df66ce32f0046b68ff136">crdSync_IsCardPresent(unsigned char server_idx)</a>
- <a href="crdsync__client_8h.md#a7ab38bf1f5e50e8abfcd793fbd0afaca">crdSync_PowerUp(unsigned char server_idx, int CardType, unsigned char AtrBuf[], unsigned char *AtrLen)</a>
- <a href="crdsync__client_8h.md#ac07f135ba2e36dd12e6b119c6595173f">crdSync_PowerDown(unsigned char server_idx)</a>
- <a href="crdsync__client_8h.md#a46ece5ab7da04e01c3e816dfbad788b9">crdSync_ReadData(unsigned char server_idx, int MemoryAddress, unsigned char RxBuf[], unsigned short RxLen)</a>
- <a href="crdsync__client_8h.md#ac37939611b8253d24be1eda8ec7ae0a9">crdSync_WriteData(unsigned char server_idx, int MemoryAddress, const unsigned char TxBuf[], unsigned short TxLen)</a>
- *SLE cards:*
  - <a href="crdsync__client_8h.md#aac1af40e85e5849800866c522caed887">crdSync_PresentSecretCode(unsigned char server_idx, const unsigned char PinCode[], unsigned short nSize)</a>
  - <a href="crdsync__client_8h.md#af865ea38609963f14c129e150586ce0e">crdSync_ReadSecurityMem(unsigned char server_idx, unsigned char RxBuff[], unsigned char * BufLen)</a>
  - <a href="crdsync__client_8h.md#a5f567f6f82f15f84a73e08a589da5a55">crdSync_WriteSecurityMem(unsigned char server_idx, const unsigned char TxBuf[], unsigned short TxLen)</a>
  - *SLE4442:*
    - <a href="crdsync__client_8h.md#afce4d1364cf78742a866311f793fd433">crdSync_ReadProtectionMem(unsigned char server_idx, unsigned char RxBuf[])</a>
    - <a href="crdsync__client_8h.md#a4d53646e79d8f7e0cd5ff8076328ebc7">crdSync_WriteProtectionMem(unsigned char server_idx, unsigned short MemoryAddress, const unsigned char TxBuf[], unsigned short TxLen)</a>
  - *SLE4428:*
    - <a href="crdsync__client_8h.md#afcab5a3b6a0f4e7fa248da2652653d8f">crdSync_ReadWithProtectionBit(unsigned char server_idx, int MemoryAddress, unsigned char RxBuf[], unsigned short RxLen)</a>
    - <a href="crdsync__client_8h.md#a55cf46f272ccde8eb8c2d1f4d37e490a">crdSync_WriteWithProtectionBit(unsigned char server_idx, int MemoryAddress, unsigned char TxBuf[], unsigned short TxLen)</a>

### Client/Server Delivery Packages <a href="#subsubsec_crd_sync_client_server_delivery" id="subsubsec_crd_sync_client_server_delivery"></a>

To use client/server it\'s necessary to

- build your application
  - include header *<a href="crdsync__client_8h.md">crdsync_client.h</a>*
  - link against *libcrdsyncclient.so*
  - these components are part of delivery package *crdsync-vos(2)-dev-x.x.x-x.zip*
- load client and server to terminal:
  - *dl.libcrdsyncclient-x.x.x-x.tar*
  - *dl.crdsyncserver-x.x.x-x.tar*
  - these components are part of delivery package *crdsync-vos(2)-load-x.x.x-x.zip*
