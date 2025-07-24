---
hidden: true
title: Additional error info exit codeGeneral topics » Additional error information
---

[Macros](#define-members)

Last step performed by EMV ADK 0 ? 10-27 VK-related 30-4B Amex 50-6x Discover 7 Gemalto 80-8A setup 9 ? A0-B5 common TXN C0-DB MK-related E ? F0-F4 online. [More\...](#details)

Collaboration diagram for Additional error info exit code:

![](group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_ADK_SETUP_START](#ga11842edc6cebc295e1c183d47411796b)   0x80 |
|   | Initialization Setup. [More\...](#ga11842edc6cebc295e1c183d47411796b)<br/> |
| #define  | [EMV_CTLS_ADK_SETUP_NO_CONTEXT](#ga0ad492a9973c6d785cf05539047c2635)   0x81 |
|   | Setup: context missing. [More\...](#ga0ad492a9973c6d785cf05539047c2635)<br/> |
| #define  | [EMV_CTLS_ADK_SETUP_NO_INIT](#gae258e027119aec245c5a90eb44fd1e58)   0x82 |
|   | Setup: not initialized. [More\...](#gae258e027119aec245c5a90eb44fd1e58)<br/> |
| #define  | [EMV_CTLS_ADK_SETUP_TERMDATA](#ga80ad94c04f7546c93f13a8df13e81b12)   0x83 |
|   | Setup: terminal data not available. [More\...](#ga80ad94c04f7546c93f13a8df13e81b12)<br/> |
| #define  | [EMV_CTLS_ADK_SETUP_ABOVE_CEILING_EMV_ONLY](#ga6e399ef7e4830d80b7440b810e6c90ab)   0x85 |
|   | Setup: above ceiling limit EMV. [More\...](#ga6e399ef7e4830d80b7440b810e6c90ab)<br/> |
| #define  | [EMV_CTLS_ADK_SETUP_ABOVE_CEILING_NO_DOM](#gab77f760cce48bbed04f007ef336446c0)   0x86 |
|   | Setup: above ceiling limit no domestic app. [More\...](#gab77f760cce48bbed04f007ef336446c0)<br/> |
| #define  | [EMV_CTLS_ADK_SETUP_RND_FAIL](#ga95bed8dc421f57c0306c17fc1466a196)   0x87 |
|   | Setup: RND failed. [More\...](#ga95bed8dc421f57c0306c17fc1466a196)<br/> |
| #define  | [EMV_CTLS_ADK_SETUP_DETECT](#gaf5d1c8f33ab201fa7371faab14d27557)   0x88 |
|   | Setup: detect failed. [More\...](#gaf5d1c8f33ab201fa7371faab14d27557)<br/> |
| #define  | [EMV_CTLS_ADK_SETUP_SET_PARAM_FAIL](#gac64c0713654734e1bc8d9cbf07aabb9e)   0x89 |
|   | Setup: txn setup failure. [More\...](#gac64c0713654734e1bc8d9cbf07aabb9e)<br/> |
| #define  | [EMV_CTLS_ADK_SETUP_OK](#ga2cd5ca45bfb82f00fd2ed700d6efffda)   0x8A |
|   | Setup: OK. [More\...](#ga2cd5ca45bfb82f00fd2ed700d6efffda)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_START](#ga85f6e6cb3d055a47004852dd7b7466f6)   0xA0 |
|   | TXN: Start. [More\...](#ga85f6e6cb3d055a47004852dd7b7466f6)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_NO_ATR](#ga28ef02ff7d324621406075110c025249)   0xA1 |
|   | TXN: no ATR. [More\...](#ga28ef02ff7d324621406075110c025249)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_2_CARDS](#ga0f65d288d8777ab3562179c15f70cd08)   0xA2 |
|   | TXN: 2 cards in field. [More\...](#ga0f65d288d8777ab3562179c15f70cd08)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_CAND_LIST_EMPTY](#gaaf371ff9b9d55f094c31698ff5f14c64)   0xA3 |
|   | TXN: empty candidate list of terminal. [More\...](#gaaf371ff9b9d55f094c31698ff5f14c64)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_DOM_ONE_APP_SELECTED](#gab7918ecbe2bfeb5204fd500753e6185e)   0xA4 |
|   | TXN: a single domestic app is selected. [More\...](#gab7918ecbe2bfeb5204fd500753e6185e)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_DOM_ONE_APP_FAIL](#ga898de46bf97884411ad6fa072cd17271)   0xA5 |
|   | TXN: single domestic app failed. [More\...](#ga898de46bf97884411ad6fa072cd17271)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_L1_DIR_READING](#gab5a725f6061c9f343e5f3ada29675715)   0xA6 |
|   | TXN: L1 error at directory reading. [More\...](#gab5a725f6061c9f343e5f3ada29675715)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_L1_CAND_LIST](#ga907131abb010e3de041f9dfac093fb5d)   0xA7 |
|   | TXN: L1 error candidate list building. [More\...](#ga907131abb010e3de041f9dfac093fb5d)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_DOM_APP_NOT_SELECTED](#ga7deb45d9d930e27ba007e7004c793531)   0xA8 |
|   | TXN: domestic application selection failed. [More\...](#ga7deb45d9d930e27ba007e7004c793531)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_DOM_APP_SELECTED](#gafbfcf301bdcbef78b79ba7ddfd3053e0)   0xA9 |
|   | TXN: domestic application selected. [More\...](#gafbfcf301bdcbef78b79ba7ddfd3053e0)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_NO_COMBO_EMPTY_LIST](#gaf480fe63080b67e93d44e8c8d5af997c)   0xAA |
|   | TXN: empty combo list. [More\...](#gaf480fe63080b67e93d44e8c8d5af997c)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_NO_DOM_APP_SELECT_NO_FINAL](#gada931924909da87f0b87e283aacdad6c)   0xAB |
|   | TXN: domestic app select failed no final select issued. [More\...](#gada931924909da87f0b87e283aacdad6c)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_L1_FINAL_SELECT](#gade14b6cd179f21f5bc51f5bfde6a0721)   0xAC |
|   | TXN: L1 error final select. [More\...](#gade14b6cd179f21f5bc51f5bfde6a0721)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_AID_NOT_READ_EMPTY](#ga29510f1b5221feae4104cd7ecb189bba)   0xAD |
|   | TXN: AID parameter reading failed, list empty. [More\...](#ga29510f1b5221feae4104cd7ecb189bba)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_AID_SKIP_DOM_EMPTY](#ga6a0f89a63a637866a46dae410e6a13c8)   0xAE |
|   | TXN: domestic app skipped, list empty. [More\...](#ga6a0f89a63a637866a46dae410e6a13c8)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_AID_SKIP_EMV_EMPTY](#ga8904f8ea285a6ddff1b4735374af54f1)   0xAF |
|   | TXN: emv app skipped, list empty. [More\...](#ga8904f8ea285a6ddff1b4735374af54f1)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_DOM_FINAL_SEL_OK](#ga693e28c727c60d44d6d510644cc94d69)   0xB0 |
|   | TXN: domestic application with final select ok. [More\...](#ga693e28c727c60d44d6d510644cc94d69)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_UNKNOW_KERNEL](#ga1ea47db9914c6d10dc159f2802703e52)   0xB1 |
|   | TXN: unknown kernel. [More\...](#ga1ea47db9914c6d10dc159f2802703e52)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_EP_INIT_FAILED](#gaa1a8b6b0c32ee79324050cf2e53456d6)   0xB2 |
|   | TXN: Entry Point Init failed. [More\...](#gaa1a8b6b0c32ee79324050cf2e53456d6)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_LIST_ITERATION_KO](#ga3af698359c88186828781d80f5e53472)   0xB3 |
|   | TXN: error list iteration. [More\...](#ga3af698359c88186828781d80f5e53472)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_CANDIDATE_EVAL](#ga0cbc77376eeb48a59b7021f039b034e8)   0xB4 |
|   | TXN: candidate list evaluation. [More\...](#ga0cbc77376eeb48a59b7021f039b034e8)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_CANDIDATE_FINAL_SELECT](#ga8a0bc3b8976631823c343198844fa839)   0xB5 |
|   | TXN: final select. [More\...](#ga8a0bc3b8976631823c343198844fa839)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_START](#ga9ca32c6802d6baa91c58e1b100c510a5)   0xC0 |
|   | TXN: Start of PayPass. [More\...](#ga9ca32c6802d6baa91c58e1b100c510a5)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_NEW_SEL](#ga14750b4ec2191c10b8bc731fd2067713)   0xC1 |
|   | TXN: new select. [More\...](#ga14750b4ec2191c10b8bc731fd2067713)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_RETAP_START](#ga9c9d58abc59628e8f98a44b8528a4820)   0xC2 |
|   | TXN: retap required. [More\...](#ga9c9d58abc59628e8f98a44b8528a4820)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_MOBILE_START](#ga830feab32d9882d2571b661a4ec2ea1a)   0xC3 |
|   | TXN: mobile requested. [More\...](#ga830feab32d9882d2571b661a4ec2ea1a)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_L1_START](#ga2024a708fe97e6a6a16c8c9d1b503a63)   0xC4 |
|   | TXN: L1 error. [More\...](#ga2024a708fe97e6a6a16c8c9d1b503a63)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_RETAP_MSD](#ga480be5a47a13bbc8c343227c04d631ea)   0xC5 |
|   | TXN: retap reuired MSD. [More\...](#ga480be5a47a13bbc8c343227c04d631ea)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_MOBILE_MSD](#gafab93520ba999716111b2502c3a2dd74)   0xC6 |
|   | TXN: mobile requested MSD. [More\...](#gafab93520ba999716111b2502c3a2dd74)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_L1_MSD](#ga48fef82407c346744fd1aed2bf73f652)   0xC7 |
|   | TXN: L1 error MSD. [More\...](#ga48fef82407c346744fd1aed2bf73f652)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_NO_DATA_MSD](#ga72f3aba316de1f712f294a1bf6f2cfad)   0xC8 |
|   | TXN: no data MSD. [More\...](#ga72f3aba316de1f712f294a1bf6f2cfad)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_DECLINE_MSD](#ga263bb236032e48cae08459146b073800)   0xC9 |
|   | TXN: decline MSD. [More\...](#ga263bb236032e48cae08459146b073800)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_OK_MSD](#ga2ee49b50f59c6cb1c6665849cced3e2b)   0xCA |
|   | TXN: ok MSD. [More\...](#ga2ee49b50f59c6cb1c6665849cced3e2b)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_ONLINE_MSD](#ga86e10e547e605c62f2d6d6e3b5659dcf)   0xCB |
|   | TXN: online MSD. [More\...](#ga86e10e547e605c62f2d6d6e3b5659dcf)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_OTHER_MSD](#gae6e906a38aa334f3a3a355bae9679932)   0xCC |
|   | TXN: other MSD. [More\...](#gae6e906a38aa334f3a3a355bae9679932)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_RETAP_CHP](#ga92151fc2e52db9b617b506206ee35ea1)   0xCD |
|   | TXN: retap reuired CHP. [More\...](#ga92151fc2e52db9b617b506206ee35ea1)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_MOBILE_CHP](#gae726b4f219785dc144e6e77fa448319b)   0xCE |
|   | TXN: mobile requested CHP. [More\...](#gae726b4f219785dc144e6e77fa448319b)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_L1_CHP](#ga10dbdd0c6e228781247992d3db532e96)   0xCF |
|   | TXN: L1 error CHP. [More\...](#ga10dbdd0c6e228781247992d3db532e96)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_CARDREAD_CHP](#ga7be897d9de25062495695ac6a7b9dce2)   0xD0 |
|   | TXN: card data read CHP. [More\...](#ga7be897d9de25062495695ac6a7b9dce2)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_DECLINE_CHP](#gad624609fa3ab58c79779da9104775bef)   0xD1 |
|   | TXN: decline CHP. [More\...](#gad624609fa3ab58c79779da9104775bef)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_ONLINE_CHP](#ga11e998c43a5e8b8e349ff2e7aa2edd36)   0xD2 |
|   | TXN: online CHP. [More\...](#ga11e998c43a5e8b8e349ff2e7aa2edd36)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_OK_CHP](#gaf5e2ec55aca233d4dc0845061416cb97)   0xD3 |
|   | TXN: ok CHP. [More\...](#gaf5e2ec55aca233d4dc0845061416cb97)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_INTERFACE_CHP](#gaab3441255ae0c6beedcb1923bc6dd752)   0xD4 |
|   | TXN: use other interface. [More\...](#gaab3441255ae0c6beedcb1923bc6dd752)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_NEW_SEL_CHP](#ga1282473ef32ef45ef3da7e373d436cff)   0xD5 |
|   | TXN: new select CHP. [More\...](#ga1282473ef32ef45ef3da7e373d436cff)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_OTHER_CHP](#gac356101532c545069cde6165d1428774)   0xD6 |
|   | TXN: other error CHP. [More\...](#gac356101532c545069cde6165d1428774)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_DECLINE_BEFORE_GAC](#gafd99671d0e7864cdff2a0573b83bef6e)   0xD7 |
|   | TXN: decline start. [More\...](#gafd99671d0e7864cdff2a0573b83bef6e)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_FALLBACK_START](#ga4bedaace6e848b44e8e979b90bad8995)   0xD8 |
|   | TXN: fallback start. [More\...](#ga4bedaace6e848b44e8e979b90bad8995)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_INIT_FAIL](#ga01ac3c42aaaf79c40b7bb4d36718dc54)   0xD9 |
|   | TXN: Init failed. [More\...](#ga01ac3c42aaaf79c40b7bb4d36718dc54)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_GPO_RR](#ga0b7d687773f40fea6e5ccecd5517272b)   0xDA |
|   | TXN: Step ReadRecords and GPO. [More\...](#ga0b7d687773f40fea6e5ccecd5517272b)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_MK_FALLBACK_OTHERCARD](#ga7ce423bafda30eb0337493783158ed05)   0xDB |
|   | TXN: use other interface or other card. [More\...](#ga7ce423bafda30eb0337493783158ed05)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_START](#ga28bb1fbe49e72b1e1981b12c1521e2d7)   0x10 |
|   | TXN: Start of payWave. [More\...](#ga28bb1fbe49e72b1e1981b12c1521e2d7)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_NEW_SEL](#ga97c0d8eb4fdaa30e9a3b8c117e76429b)   0x11 |
|   | TXN: new select. [More\...](#ga97c0d8eb4fdaa30e9a3b8c117e76429b)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_MOBILE_START](#ga4f12efa6d4325edd1acb0911cbabb93e)   0x12 |
|   | TXN: mobile requested. [More\...](#ga4f12efa6d4325edd1acb0911cbabb93e)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_L1_START](#gaf1bf2f8c8a4c46e5c4491f7c75eb0d93)   0x13 |
|   | TXN: L1 error. [More\...](#gaf1bf2f8c8a4c46e5c4491f7c75eb0d93)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_L1_MSD](#gaeed75fb6d2ba51a11fa2ad1e42914eaf)   0x14 |
|   | TXN: L1 error MSD. [More\...](#gaeed75fb6d2ba51a11fa2ad1e42914eaf)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_FALLBACK_MSD](#gad415d2cb995ecd35cff63e14aad548e4)   0x15 |
|   | TXN: Start of PayPass. [More\...](#gad415d2cb995ecd35cff63e14aad548e4)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_DECLINE_MSD](#gaa9110a3afe90b6de3df1640058bbec99)   0x16 |
|   | TXN: decline MSD. [More\...](#gaa9110a3afe90b6de3df1640058bbec99)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_OK_MSD](#gad7cd4dedcbbad925e155f1ddba481aba)   0x17 |
|   | TXN: ok MSD. [More\...](#gad7cd4dedcbbad925e155f1ddba481aba)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_ONLINE_MSD](#ga0325ba18a603008c51eb881bd4ea2709)   0x18 |
|   | TXN: online MSD. [More\...](#ga0325ba18a603008c51eb881bd4ea2709)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_OTHER_MSD](#gaac48fc4727a406bee690b640d3df6506)   0x19 |
|   | TXN: other error MSD. [More\...](#gaac48fc4727a406bee690b640d3df6506)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_L1_CHP](#ga06963aab97b48c9799d15ce84b2acb71)   0x1A |
|   | TXN: L1 error CHP. [More\...](#ga06963aab97b48c9799d15ce84b2acb71)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_READCARD_CHP](#ga705cfb96130098083d0a3f089363e2ec)   0x1B |
|   | TXN: read card CHP. [More\...](#ga705cfb96130098083d0a3f089363e2ec)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_DECLINE_CHP](#gaf4037a481d6b5167e159997bcd361a88)   0x1C |
|   | TXN: decline CHP. [More\...](#gaf4037a481d6b5167e159997bcd361a88)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_ONLINE_CHP](#ga13e3d58490bf7f1f9265384bc849ba29)   0x1D |
|   | TXN: online CHP. [More\...](#ga13e3d58490bf7f1f9265384bc849ba29)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_OK_CHP](#ga1cfbe4beeb6d65605deb66313fa98f93)   0x1E |
|   | TXN: ok CHP. [More\...](#ga1cfbe4beeb6d65605deb66313fa98f93)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_FALLBACK_CHP](#gad54acb87584cf35dd32445d34ba4acbd)   0x1F |
|   | TXN: fallback CHP. [More\...](#gad54acb87584cf35dd32445d34ba4acbd)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_OTHER_CHP](#ga0d8841f9e90192dc17b14fc76dec7f92)   0x20 |
|   | TXN: other error CHP. [More\...](#ga0d8841f9e90192dc17b14fc76dec7f92)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_DECLINE_START](#ga58874de5af26ec0bca77de0e7c807db7)   0x21 |
|   | TXN: decline start. [More\...](#ga58874de5af26ec0bca77de0e7c807db7)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_FALLBACK_START](#ga3827bb37262d8fb05c54c1308f2d16be)   0x22 |
|   | TXN: fallback start. [More\...](#ga3827bb37262d8fb05c54c1308f2d16be)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_OTHER_START](#ga717383ad982c35f07f6c9bf384635df3)   0x23 |
|   | TXN: other error start. [More\...](#ga717383ad982c35f07f6c9bf384635df3)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_INIT_FAIL](#ga059ea05d5ebd155c13e2d09a5f96a45e)   0x24 |
|   | TXN: Init failed. [More\...](#ga059ea05d5ebd155c13e2d09a5f96a45e)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_GPO_RR](#ga30149d742bded09302fb7948942e5d52)   0x25 |
|   | TXN: Step ReadRecords and GPO. [More\...](#ga30149d742bded09302fb7948942e5d52)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_INCONS_TRACK2](#gad0536f085c10bd38736273f6ea23e177)   0x26 |
|   | TXN: inconsisten track 2 and PAN. [More\...](#gad0536f085c10bd38736273f6ea23e177)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_READCARD_MSD](#gac9da01e82d2192989dbdf4442d8d9602)   0x27 |
|   | TXN: card read MSD. [More\...](#gac9da01e82d2192989dbdf4442d8d9602)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_RETAP_START](#ga0621161710d35823a1cf8a72abe3fa9f)   0x28 |
|   | TXN: retap required. [More\...](#ga0621161710d35823a1cf8a72abe3fa9f)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_VK_FALLBACK_CARD_LOG](#gabbc619f35b1fa3eb3a6328e25cc7d200)   0x29 |
|   | TXN: fallback because of failed card log reading. [More\...](#gabbc619f35b1fa3eb3a6328e25cc7d200)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_START](#ga56203b86183984e41c7a7a29e029bc97)   0x30 |
|   | TXN: Start of Kernel Processing. [More\...](#ga56203b86183984e41c7a7a29e029bc97)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL](#ga90e6739fcc17ad1f4813e9deb1c93d2f)   0x31 |
|   | TXN: new select. [More\...](#ga90e6739fcc17ad1f4813e9deb1c93d2f)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_RETAP_START](#gaf79e0f937dbab4a7829688e7a4881e40)   0x32 |
|   | TXN: retap required. [More\...](#gaf79e0f937dbab4a7829688e7a4881e40)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_MOBILE_START](#ga9b4c3c4528b9d4e429e084b017eb8b08)   0x33 |
|   | TXN: mobile requested. [More\...](#ga9b4c3c4528b9d4e429e084b017eb8b08)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_L1_START](#ga8846491e46b9925550cc4d85e861b10e)   0x34 |
|   | TXN: L1 error. [More\...](#ga8846491e46b9925550cc4d85e861b10e)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_RETAP_MSD](#gaae452767098559b44287814517242516)   0x35 |
|   | TXN: retap reuired MSD. [More\...](#gaae452767098559b44287814517242516)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_MOBILE_MSD](#gaab13a7b8238a4cadadfceb453e194ba7)   0x36 |
|   | TXN: mobile requested MSD. [More\...](#gaab13a7b8238a4cadadfceb453e194ba7)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_L1_MSD](#ga2d6aea1a05367b22b1537e37d0b9b0f8)   0x37 |
|   | TXN: L1 error MSD. [More\...](#ga2d6aea1a05367b22b1537e37d0b9b0f8)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_NO_DATA_MSD](#ga619740d3b254be527e4b01ca9d3b2785)   0x38 |
|   | TXN: no data MSD. [More\...](#ga619740d3b254be527e4b01ca9d3b2785)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_DECLINE_MSD](#gaae06ec5ea8b8636a7e3da935832db02c)   0x39 |
|   | TXN: decline MSD. [More\...](#gaae06ec5ea8b8636a7e3da935832db02c)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_OK_MSD](#gabce488bff639e385c3ad1a5d7c0baaf8)   0x3A |
|   | TXN: ok MSD. [More\...](#gabce488bff639e385c3ad1a5d7c0baaf8)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_ONLINE_MSD](#gaeb16d9c08e7477e596b7dd9ed45c5c18)   0x3B |
|   | TXN: online MSD. [More\...](#gaeb16d9c08e7477e596b7dd9ed45c5c18)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_OTHER_MSD](#gaf9805f9648a71ccc3fb883b9d39e451a)   0x3C |
|   | TXN: other MSD. [More\...](#gaf9805f9648a71ccc3fb883b9d39e451a)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_RETAP_CHP](#ga1802f73cf1188155005b618ae86e724a)   0x3D |
|   | TXN: retap reuired CHP. [More\...](#ga1802f73cf1188155005b618ae86e724a)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_MOBILE_CHP](#gabbee18c9da230ec83031eec55e132722)   0x3E |
|   | TXN: mobile requested CHP. [More\...](#gabbee18c9da230ec83031eec55e132722)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_L1_CHP](#gaa6257a2a84734e668f4b131e58f906e4)   0x3F |
|   | TXN: L1 error CHP. [More\...](#gaa6257a2a84734e668f4b131e58f906e4)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_CARDREAD_CHP](#ga037034c9ce386446e6e3bb64775e0c99)   0x40 |
|   | TXN: card data read CHP. [More\...](#ga037034c9ce386446e6e3bb64775e0c99)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_DECLINE_CHP](#ga0c1bfff75f15b75ba97fc6c1eb9ad042)   0x41 |
|   | TXN: decline CHP. [More\...](#ga0c1bfff75f15b75ba97fc6c1eb9ad042)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_ONLINE_CHP](#gafb008f13fe30aa8dae87fb68d08f12bb)   0x42 |
|   | TXN: online CHP. [More\...](#gafb008f13fe30aa8dae87fb68d08f12bb)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_OK_CHP](#ga4ffdc8af082ed96d8e867cf678f8f9f7)   0x43 |
|   | TXN: ok CHP. [More\...](#ga4ffdc8af082ed96d8e867cf678f8f9f7)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_INTERFACE_CHP](#ga5693a350d6fb6786e868a0b68247dde3)   0x44 |
|   | TXN: use other interface. [More\...](#ga5693a350d6fb6786e868a0b68247dde3)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL_CHP](#ga835eedd082ba2a23ec469104bba3cd95)   0x45 |
|   | TXN: new select CHP. [More\...](#ga835eedd082ba2a23ec469104bba3cd95)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_OTHER_CHP](#ga41b9d8e742eea964e8eb179dc73d23f8)   0x46 |
|   | TXN: other error CHP. [More\...](#ga41b9d8e742eea964e8eb179dc73d23f8)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_DECLINE_BEFORE_GAC](#ga12ff957c3d2f59201a68c322dad2ea41)   0x47 |
|   | TXN: decline start. [More\...](#ga12ff957c3d2f59201a68c322dad2ea41)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_START](#gabf1b757b5805802ba1ded0eb94ed3a36)   0x48 |
|   | TXN: fallback start. [More\...](#gabf1b757b5805802ba1ded0eb94ed3a36)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_INIT_FAIL](#ga2dfc86c44ba556faf83ae79b9550cd19)   0x49 |
|   | TXN: Init failed. [More\...](#ga2dfc86c44ba556faf83ae79b9550cd19)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_GPO_RR](#ga613a58744df7898e62f675a64c0f8e03)   0x4A |
|   | TXN: Step ReadRecords and GPO. [More\...](#ga613a58744df7898e62f675a64c0f8e03)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_OTHERCARD](#ga9497df334048a6bcc186f622b739f845)   0x4B |
|   | TXN: use other card. [More\...](#ga9497df334048a6bcc186f622b739f845)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_TRY_ZIP](#ga8127fac3b82937a1fafdfe77b1124117)   0x4C |
|   | TXN: try Discover ZIP. [More\...](#ga8127fac3b82937a1fafdfe77b1124117)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_MSD](#ga2e16eedd2d4ef1599e3a374006aea137)   0x4D |
|   | TXN: fallback MSD. [More\...](#ga2e16eedd2d4ef1599e3a374006aea137)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_DECLINE_START](#gadebfb96cb6e5f70fab3f60019ac2a189)   0x4E |
|   | TXN: decline before EOT. [More\...](#gadebfb96cb6e5f70fab3f60019ac2a189)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_READCARD_MSD](#ga84f3e396deb9940b019f61ead36b1b5f)   0x4F |
|   | TXN: read card MSD. [More\...](#ga84f3e396deb9940b019f61ead36b1b5f)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_CHP](#gad0fae5dc8b640adeef108b7b58394ffa)   0x50 |
|   | TXN: use other interface or other card. [More\...](#gad0fae5dc8b640adeef108b7b58394ffa)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_START_FALLBACK_OTHERCARD](#ga699abfc228c0d59bf04204bd39a4e668)   0x51 |
|   | TXN: use other interface or other card. [More\...](#ga699abfc228c0d59bf04204bd39a4e668)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_OTHER_TERM_CHP](#ga3258985648d4f0ec715ec6f2257346ca)   0x52 |
|   | TXN: advice merchant to use other terminal. [More\...](#ga3258985648d4f0ec715ec6f2257346ca)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_TOO_MANY_TAPS](#ga55297e101d843eb4ea179efa385e1c77)   0x53 |
|   | TXN: card holder exceeded number of taps allowed for one transaction. [More\...](#ga55297e101d843eb4ea179efa385e1c77)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_KERNEL_BAD_FFI](#gab242a1e59445a6d1950701dfe252be74)   0x54 |
|   | TXN: Interac bad FFI. [More\...](#gab242a1e59445a6d1950701dfe252be74)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_GK_GET_DATA_OKAY](#gadd9d347e21e080e89dd91a8189df467a)   0x70 |
|   | TXN: Gemalto, special transaction GET DATA finished okay. [More\...](#gadd9d347e21e080e89dd91a8189df467a)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_GK_GET_DATA_FAIL](#ga426cfa68bb2df8e3095ada29f267cfeb)   0x71 |
|   | TXN: Gemalto, special transaction GET DATA finished fail. [More\...](#ga426cfa68bb2df8e3095ada29f267cfeb)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_GK_PUT_DATA_OKAY](#ga3bee21a782d20c6f8b39ac885a607ca1)   0x72 |
|   | TXN: Gemalto, special transaction PUT DATA finished okay. [More\...](#ga3bee21a782d20c6f8b39ac885a607ca1)<br/> |
| #define  | [EMV_CTLS_ADK_TXN_GK_PUT_DATA_FAIL](#ga1c69db36d68e819e8b7988be9ad9eb85)   0x73 |
|   | TXN: Gemalto, special transaction PUT DATA finished fail. [More\...](#ga1c69db36d68e819e8b7988be9ad9eb85)<br/> |
| #define  | [EMV_CTLS_ADK_ONL_START](#gaa055163d1b96df4790ea658aa80fe158)   0xF0 |
|   | Online: Start. [More\...](#gaa055163d1b96df4790ea658aa80fe158)<br/> |
| #define  | [EMV_CTLS_ADK_ONL_NO_CTLS_TXN](#gaf64d339dc74df083595b95229546ba0a)   0xF1 |
|   | Online: No Ctls transaction happened before call. [More\...](#gaf64d339dc74df083595b95229546ba0a)<br/> |
| #define  | [EMV_CTLS_ADK_ONL_NO_HOST](#ga702838d6dd0c51405f4f949eeef4381e)   0xF2 |
|   | Online: no answer from host. [More\...](#ga702838d6dd0c51405f4f949eeef4381e)<br/> |
| #define  | [EMV_CTLS_ADK_ONL_HOST_OK](#ga4cc4a1b584b001c08fc546e5814fdb11)   0xF3 |
|   | Online: host approved. [More\...](#ga4cc4a1b584b001c08fc546e5814fdb11)<br/> |
| #define  | [EMV_CTLS_ADK_ONL_HOST_DECLINE](#ga5fc3f6b08b2e18b2f71ea18ba9f3545a)   0xF4 |
|   | Online: host declined. [More\...](#ga5fc3f6b08b2e18b2f71ea18ba9f3545a)<br/> |
| #define  | [EMV_CTLS_ADK_ONL_HOST_SWITCH_IF](#ga6ced780664a67700ce7ab438b4f91d1d)   0xF5 |
|   | Online: Strong Consumer Authentication - switch interface. [More\...](#ga6ced780664a67700ce7ab438b4f91d1d)<br/> |
| #define  | [EMV_CTLS_ADK_ONL_HOST_ONLINE_PIN](#ga798d8bbae9978c3647cd3a944cde1651)   0xF6 |
|   | Online: Strong Consumer Authentication - Online PIN. [More\...](#ga798d8bbae9978c3647cd3a944cde1651)<br/> |
| #define  | [EMV_CTLS_ADK_END_TXN](#ga0a3ca6b1e706dc3cfc711ef0d137216b)   0xFE |
|   | TXN: End Transaction called. [More\...](#ga0a3ca6b1e706dc3cfc711ef0d137216b)<br/> |
| #define  | [EMV_ADK_INF_INIT](#ga6602cb6affc875d582c75685aa8fe2b2)   0x80 |
|   | Initialization. [More\...](#ga6602cb6affc875d582c75685aa8fe2b2)<br/> |
| #define  | [EMV_ADK_INF_SEL_TERMDATA](#ga62ffd08cc1c86d86aa6d23bb08de23a2)   0x81 |
|   | Application selection: terminal data. [More\...](#ga62ffd08cc1c86d86aa6d23bb08de23a2)<br/> |
| #define  | [EMV_ADK_INF_SEL_TEXTE](#ga5f7f9380b727ef31f36916ae0141a0bc)   0x82 |
|   | Application selection: texts. [More\...](#ga5f7f9380b727ef31f36916ae0141a0bc)<br/> |
| #define  | [EMV_ADK_INF_SEL_PAYINIT_OK](#gafb9e217b84a4f26da5eafe8c87166bb4)   0x83 |
|   | Application selection: Init Payment OK. [More\...](#gafb9e217b84a4f26da5eafe8c87166bb4)<br/> |
| #define  | [EMV_ADK_INF_SEL_CHECK_OK](#ga2aa426abc1ee83fa341c831a082ed3b0)   0x85 |
|   | Application selection: Check OK. [More\...](#ga2aa426abc1ee83fa341c831a082ed3b0)<br/> |
| #define  | [EMV_ADK_INF_SEL_BUILD_APPLI_LIST](#ga643014d0b63dd043260ca151cf399498)   0x86 |
|   | Application selection: Build Application List. [More\...](#ga643014d0b63dd043260ca151cf399498)<br/> |
| #define  | [EMV_ADK_INF_SEL_ANOTHER](#gab7721c37bdc6168b9f7cbeb0b6dcbdaa)   0x87 |
|   | Application selection: Other. [More\...](#gab7721c37bdc6168b9f7cbeb0b6dcbdaa)<br/> |
| #define  | [EMV_ADK_INF_SEL_FINAL](#ga686efde9ca4fb2a8bb06f70d8399de13)   0x88 |
|   | Application selection: Final. [More\...](#ga686efde9ca4fb2a8bb06f70d8399de13)<br/> |
| #define  | [EMV_ADK_INF_SEL_NO](#ga958c11e50684d4075d6266cb0aa4ff20)   0x89 |
|   | Application selection: NO. [More\...](#ga958c11e50684d4075d6266cb0aa4ff20)<br/> |
| #define  | [EMV_ADK_INF_SEL_FINISH_OK](#ga1a3dc2a615021755f73e3033fb06394d)   0x8A |
|   | Application selection: Finished OK. [More\...](#ga1a3dc2a615021755f73e3033fb06394d)<br/> |
| #define  | [EMV_ADK_INF_SEL_BLOCK_APPLI](#gaf443e0e3ef07304c9bae011d31dbfebf)   0x8B |
|   | Application selection: Blocked Application. [More\...](#gaf443e0e3ef07304c9bae011d31dbfebf)<br/> |
| #define  | [EMV_ADK_INF_SEL_BLOCK_CARD](#gafe47de61dbb4dc29fac5ba3d9de98dbf)   0x8C |
|   | Application selection: Blocked Card. [More\...](#gafe47de61dbb4dc29fac5ba3d9de98dbf)<br/> |
| #define  | [EMV_ADK_INF_SEL_LOA_PROC](#ga438e058ad5bfc491dc0da2dfc300655e)   0x8D |
|   | Application selection: LOA Processing. [More\...](#ga438e058ad5bfc491dc0da2dfc300655e)<br/> |
| #define  | [EMV_ADK_INF_SEL_UI_LOA_PROC](#ga2ee635804863064e40dc342f3e1b23d0)   0x8E |
|   | Application selection: LOA Processing (uninterrupted) [More\...](#ga2ee635804863064e40dc342f3e1b23d0)<br/> |
| #define  | [EMV_ADK_INF_TRANS_CHECK_OK](#ga3e78bd24c572d9a6cb635f739672ac26)   0x91 |
|   | Offline transaction processing: Check OK. [More\...](#ga3e78bd24c572d9a6cb635f739672ac26)<br/> |
| #define  | [EMV_ADK_INF_TRANS_READ_TERM](#ga03f66e43638de051b961ae0b2881a8c8)   0x92 |
|   | offline transaction processing: Read Terminal Data [More\...](#ga03f66e43638de051b961ae0b2881a8c8)<br/> |
| #define  | [EMV_ADK_INF_TRANS_READ_APPLI](#gadfd189ae19924101808b148a07585459)   0x93 |
|   | offline transaction processing: Read Application [More\...](#gadfd189ae19924101808b148a07585459)<br/> |
| #define  | [EMV_ADK_INF_TRANS_SEL_LANG](#ga23db50fccd6b2e548dd9e6b5963e4691)   0x95 |
|   | offline transaction processing: Select Language [More\...](#ga23db50fccd6b2e548dd9e6b5963e4691)<br/> |
| #define  | [EMV_ADK_INF_TRANS_CONF_AMOUNT](#gaf89739d76223fb274b0458a378150e16)   0x96 |
|   | offline transaction processing: Confirm Amount [More\...](#gaf89739d76223fb274b0458a378150e16)<br/> |
| #define  | [EMV_ADK_INF_TRANS_INITIATE](#ga73a56d618e59e1607b059f536d793286)   0x97 |
|   | offline transaction processing: Initiation [More\...](#ga73a56d618e59e1607b059f536d793286)<br/> |
| #define  | [EMV_ADK_INF_TRANS_READ_CARD_DATA](#ga2a8dd6c4431056092298496e9776f8ca)   0x98 |
|   | offline transaction processing: Read Card Data [More\...](#ga2a8dd6c4431056092298496e9776f8ca)<br/> |
| #define  | [EMV_ADK_INF_TRANS_CHECK_APPLI_DATA](#ga4997d00a96dd1e33f2c2e6fe3a70c6df)   0x99 |
|   | offline transaction processing: Check Application Data [More\...](#ga4997d00a96dd1e33f2c2e6fe3a70c6df)<br/> |
| #define  | [EMV_ADK_INF_TRANS_PROC_RESTRICTION](#ga04e6bb212d270ca4f17ce240bd998a6a)   0x9A |
|   | offline transaction processing: Process Restriction [More\...](#ga04e6bb212d270ca4f17ce240bd998a6a)<br/> |
| #define  | [EMV_ADK_INF_TRANS_CARD_AUTH](#ga07549de9e64e1da3639bb6300a74f48b)   0x9B |
|   | offline transaction processing: Card Authentication [More\...](#ga07549de9e64e1da3639bb6300a74f48b)<br/> |
| #define  | [EMV_ADK_INF_TRANS_VERIFY](#ga87af85259224132a9a3611d5acd7db56)   0x9C |
|   | offline transaction processing: Verification [More\...](#ga87af85259224132a9a3611d5acd7db56)<br/> |
| #define  | [EMV_ADK_INF_TRANS_RISK](#ga123e1b804a77373df214dea47ac8aa01)   0x9D |
|   | offline transaction processing: Risk [More\...](#ga123e1b804a77373df214dea47ac8aa01)<br/> |
| #define  | [EMV_ADK_INF_TRANS_AAT](#ga435486941eef16274ca408aed90af957)   0x9E |
|   | offline transaction processing: AAT (action analysis terminal) [More\...](#ga435486941eef16274ca408aed90af957)<br/> |
| #define  | [EMV_ADK_INF_TRANS_1GENAC](#gabefd3e6bbcc1aec39e22098aef583043)   0x9F |
|   | offline transaction processing: 1st Genac [More\...](#gabefd3e6bbcc1aec39e22098aef583043)<br/> |
| #define  | [EMV_ADK_INF_TRANS_VERIFY_CARD](#ga8354bdf7f43ec922f5d87a15bf045f6c)   0xA0 |
|   | offline transaction processing: Verify Cardholder [More\...](#ga8354bdf7f43ec922f5d87a15bf045f6c)<br/> |
| #define  | [EMV_ADK_INF_TRANS_VERIFY_ABANDON](#ga072483cf14b90ca69af8336c91c17397)   0xA1 |
|   | offline transaction processing: Verify Abandon [More\...](#ga072483cf14b90ca69af8336c91c17397)<br/> |
| #define  | [EMV_ADK_INF_TRANS_VERIFY_OTHER](#ga2166c7bf15292621abe4b96af4a37728)   0xA2 |
|   | offline transaction processing: Verify Other [More\...](#ga2166c7bf15292621abe4b96af4a37728)<br/> |
| #define  | [EMV_ADK_INF_TRANS_VERIFY_ONLINE](#gafd1e670cb6f036931d1db4894e191251)   0xA3 |
|   | offline transaction processing: Verify Online [More\...](#gafd1e670cb6f036931d1db4894e191251)<br/> |
| #define  | [EMV_ADK_INF_TRANS_VERIFY_NOK](#gaa4d9697e3f2adad8b357d170f44cebce)   0xA4 |
|   | offline transaction processing: Verify NOT OK [More\...](#gaa4d9697e3f2adad8b357d170f44cebce)<br/> |
| #define  | [EMV_ADK_INF_TRANS_VERIFY_OK](#ga30eb017975004c89caa188cedb648d4f)   0xA5 |
|   | offline transaction processing: Verify OK [More\...](#ga30eb017975004c89caa188cedb648d4f)<br/> |
| #define  | [EMV_ADK_INF_TRANS_VERIFY_SIGNATURE](#gaec2811cd12368efabe3726e89a8c5217)   0xA6 |
|   | offline transaction processing: Verify Signature [More\...](#gaec2811cd12368efabe3726e89a8c5217)<br/> |
| #define  | [EMV_ADK_INF_TRANS_1CRYPT_TC](#ga28325a4435449f101415279faa83c062)   0xA7 |
|   | offline transaction processing: 1st Cryptography TC [More\...](#ga28325a4435449f101415279faa83c062)<br/> |
| #define  | [EMV_ADK_INF_TRANS_1CRYPT_ARQC_CDA](#gaa3263aa33de98fe32c3d3bc2d23377a8)   0xA8 |
|   | offline transaction processing: 1st Cryptography ARQC CDA [More\...](#gaa3263aa33de98fe32c3d3bc2d23377a8)<br/> |
| #define  | [EMV_ADK_INF_TRANS_1CRYPT_ARQC_OTHER](#ga5d835442584edea1ed72dad8b0da3206)   0xA9 |
|   | offline transaction processing: 1st Cryptography ARQC Other [More\...](#ga5d835442584edea1ed72dad8b0da3206)<br/> |
| #define  | [EMV_ADK_INF_TRANS_1CRYPT_AAC](#ga04d000a552cad9a44bf90d8f3549eec6)   0xAA |
|   | offline transaction processing: 1st Cryptography AAC [More\...](#ga04d000a552cad9a44bf90d8f3549eec6)<br/> |
| #define  | [EMV_ADK_INF_TRANS_1CRYPT_AAR](#ga749c67a5070985176e7f9d2d480920b1)   0xAB |
|   | offline transaction processing: 1st Cryptography AAC [More\...](#ga749c67a5070985176e7f9d2d480920b1)<br/> |
| #define  | [EMV_ADK_INF_TRANS_1CRYPT_UNKNOWN](#gad9fe857e32dc8a67d4159e2b4fc66a06)   0xAC |
|   | offline transaction processing: 1st Cryptography Unknown [More\...](#gad9fe857e32dc8a67d4159e2b4fc66a06)<br/> |
| #define  | [EMV_ADK_INF_ONL_CHECK_OK](#ga20d6ab77e6d85face640f43cd97e2a61)   0xB1 |
|   | Processing the host response: Check OK. [More\...](#ga20d6ab77e6d85face640f43cd97e2a61)<br/> |
| #define  | [EMV_ADK_INF_ONL_FALSE](#gae9b055097a586dc955d8c33d32e572a7)   0xB3 |
|   | Processing the host response: False. [More\...](#gae9b055097a586dc955d8c33d32e572a7)<br/> |
| #define  | [EMV_ADK_INF_ONL_TRUE](#ga4c9a5066e077cfb1fdb1664cfdff31cc)   0xB4 |
|   | Processing the host response: True. [More\...](#ga4c9a5066e077cfb1fdb1664cfdff31cc)<br/> |
| #define  | [EMV_ADK_INF_ONL_PIN](#ga3736efc005393eafa95196fceb4e93a6)   0xB5 |
|   | Processing the host response: PIN. [More\...](#ga3736efc005393eafa95196fceb4e93a6)<br/> |
| #define  | [EMV_ADK_INF_ONL_HOST_AUTH](#ga55d6f6da6eef66610ae0ef9b7e2d0343)   0xB6 |
|   | Processing the host response: Host Authorization. [More\...](#ga55d6f6da6eef66610ae0ef9b7e2d0343)<br/> |
| #define  | [EMV_ADK_INF_ONL_CRIT_SC](#ga6a9cef0034422acd6bdbef57d1fecd8e)   0xB7 |
|   | Processing the host response: Cirtical Script. [More\...](#ga6a9cef0034422acd6bdbef57d1fecd8e)<br/> |
| #define  | [EMV_ADK_INF_ONL_AC](#gab24fa6e68a24758fd836f3ed095befb5)   0xB8 |
|   | Processing the host response: AC. [More\...](#gab24fa6e68a24758fd836f3ed095befb5)<br/> |
| #define  | [EMV_ADK_INF_ONL_2GENAC](#ga38c4a30e693b501790284da3d0b89ddd)   0xB9 |
|   | Processing the host response: 2nd Generate AC. [More\...](#ga38c4a30e693b501790284da3d0b89ddd)<br/> |
| #define  | [EMV_ADK_INF_ONL_UNCRIT_SC](#ga2f53248d2a91418a8c4b988f24ce97d7)   0xBA |
|   | Processing the host response: Uncritical Script. [More\...](#ga2f53248d2a91418a8c4b988f24ce97d7)<br/> |
| #define  | [EMV_ADK_INF_TRANS_VERIFY_PARAM](#ga7c06c2aca08194d46e8a52a3161fb120)   0xBB |
|   | Processing the host response: Verify Parameter. [More\...](#ga7c06c2aca08194d46e8a52a3161fb120)<br/> |
| #define  | [EMV_ADK_INF_FETCH_TXN_TAG_DATA](#gade7e4a26239abcc90ca7c32b6a1af9d5)   0xBC |
|   | Function `EMV_CT_fetchTxnTags`. [More\...](#gade7e4a26239abcc90ca7c32b6a1af9d5)<br/> |

## DetailedDescription {#detailed-description}

Last step performed by EMV ADK 0 ? 10-27 VK-related 30-4B Amex 50-6x Discover 7 Gemalto 80-8A setup 9 ? A0-B5 common TXN C0-DB MK-related E ? F0-F4 online.

Last step performed by EMV ADK.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_ADK_INF_FETCH_TXN_TAG_DATA <a href="#gade7e4a26239abcc90ca7c32b6a1af9d5" id="gade7e4a26239abcc90ca7c32b6a1af9d5"></a>

<p>#define EMV_ADK_INF_FETCH_TXN_TAG_DATA   0xBC</p>

Function `EMV_CT_fetchTxnTags`.

## EMV_ADK_INF_INIT <a href="#ga6602cb6affc875d582c75685aa8fe2b2" id="ga6602cb6affc875d582c75685aa8fe2b2"></a>

<p>#define EMV_ADK_INF_INIT   0x80</p>

Initialization.

## EMV_ADK_INF_ONL_2GENAC <a href="#ga38c4a30e693b501790284da3d0b89ddd" id="ga38c4a30e693b501790284da3d0b89ddd"></a>

<p>#define EMV_ADK_INF_ONL_2GENAC   0xB9</p>

Processing the host response: 2nd Generate AC.

## EMV_ADK_INF_ONL_AC <a href="#gab24fa6e68a24758fd836f3ed095befb5" id="gab24fa6e68a24758fd836f3ed095befb5"></a>

<p>#define EMV_ADK_INF_ONL_AC   0xB8</p>

Processing the host response: AC.

## EMV_ADK_INF_ONL_CHECK_OK <a href="#ga20d6ab77e6d85face640f43cd97e2a61" id="ga20d6ab77e6d85face640f43cd97e2a61"></a>

<p>#define EMV_ADK_INF_ONL_CHECK_OK   0xB1</p>

Processing the host response: Check OK.

## EMV_ADK_INF_ONL_CRIT_SC <a href="#ga6a9cef0034422acd6bdbef57d1fecd8e" id="ga6a9cef0034422acd6bdbef57d1fecd8e"></a>

<p>#define EMV_ADK_INF_ONL_CRIT_SC   0xB7</p>

Processing the host response: Cirtical Script.

## EMV_ADK_INF_ONL_FALSE <a href="#gae9b055097a586dc955d8c33d32e572a7" id="gae9b055097a586dc955d8c33d32e572a7"></a>

<p>#define EMV_ADK_INF_ONL_FALSE   0xB3</p>

Processing the host response: False.

## EMV_ADK_INF_ONL_HOST_AUTH <a href="#ga55d6f6da6eef66610ae0ef9b7e2d0343" id="ga55d6f6da6eef66610ae0ef9b7e2d0343"></a>

<p>#define EMV_ADK_INF_ONL_HOST_AUTH   0xB6</p>

Processing the host response: Host Authorization.

## EMV_ADK_INF_ONL_PIN <a href="#ga3736efc005393eafa95196fceb4e93a6" id="ga3736efc005393eafa95196fceb4e93a6"></a>

<p>#define EMV_ADK_INF_ONL_PIN   0xB5</p>

Processing the host response: PIN.

## EMV_ADK_INF_ONL_TRUE <a href="#ga4c9a5066e077cfb1fdb1664cfdff31cc" id="ga4c9a5066e077cfb1fdb1664cfdff31cc"></a>

<p>#define EMV_ADK_INF_ONL_TRUE   0xB4</p>

Processing the host response: True.

## EMV_ADK_INF_ONL_UNCRIT_SC <a href="#ga2f53248d2a91418a8c4b988f24ce97d7" id="ga2f53248d2a91418a8c4b988f24ce97d7"></a>

<p>#define EMV_ADK_INF_ONL_UNCRIT_SC   0xBA</p>

Processing the host response: Uncritical Script.

## EMV_ADK_INF_SEL_ANOTHER <a href="#gab7721c37bdc6168b9f7cbeb0b6dcbdaa" id="gab7721c37bdc6168b9f7cbeb0b6dcbdaa"></a>

<p>#define EMV_ADK_INF_SEL_ANOTHER   0x87</p>

Application selection: Other.

## EMV_ADK_INF_SEL_BLOCK_APPLI <a href="#gaf443e0e3ef07304c9bae011d31dbfebf" id="gaf443e0e3ef07304c9bae011d31dbfebf"></a>

<p>#define EMV_ADK_INF_SEL_BLOCK_APPLI   0x8B</p>

Application selection: Blocked Application.

## EMV_ADK_INF_SEL_BLOCK_CARD <a href="#gafe47de61dbb4dc29fac5ba3d9de98dbf" id="gafe47de61dbb4dc29fac5ba3d9de98dbf"></a>

<p>#define EMV_ADK_INF_SEL_BLOCK_CARD   0x8C</p>

Application selection: Blocked Card.

## EMV_ADK_INF_SEL_BUILD_APPLI_LIST <a href="#ga643014d0b63dd043260ca151cf399498" id="ga643014d0b63dd043260ca151cf399498"></a>

<p>#define EMV_ADK_INF_SEL_BUILD_APPLI_LIST   0x86</p>

Application selection: Build Application List.

## EMV_ADK_INF_SEL_CHECK_OK <a href="#ga2aa426abc1ee83fa341c831a082ed3b0" id="ga2aa426abc1ee83fa341c831a082ed3b0"></a>

<p>#define EMV_ADK_INF_SEL_CHECK_OK   0x85</p>

Application selection: Check OK.

## EMV_ADK_INF_SEL_FINAL <a href="#ga686efde9ca4fb2a8bb06f70d8399de13" id="ga686efde9ca4fb2a8bb06f70d8399de13"></a>

<p>#define EMV_ADK_INF_SEL_FINAL   0x88</p>

Application selection: Final.

## EMV_ADK_INF_SEL_FINISH_OK <a href="#ga1a3dc2a615021755f73e3033fb06394d" id="ga1a3dc2a615021755f73e3033fb06394d"></a>

<p>#define EMV_ADK_INF_SEL_FINISH_OK   0x8A</p>

Application selection: Finished OK.

## EMV_ADK_INF_SEL_LOA_PROC <a href="#ga438e058ad5bfc491dc0da2dfc300655e" id="ga438e058ad5bfc491dc0da2dfc300655e"></a>

<p>#define EMV_ADK_INF_SEL_LOA_PROC   0x8D</p>

Application selection: LOA Processing.

## EMV_ADK_INF_SEL_NO <a href="#ga958c11e50684d4075d6266cb0aa4ff20" id="ga958c11e50684d4075d6266cb0aa4ff20"></a>

<p>#define EMV_ADK_INF_SEL_NO   0x89</p>

Application selection: NO.

## EMV_ADK_INF_SEL_PAYINIT_OK <a href="#gafb9e217b84a4f26da5eafe8c87166bb4" id="gafb9e217b84a4f26da5eafe8c87166bb4"></a>

<p>#define EMV_ADK_INF_SEL_PAYINIT_OK   0x83</p>

Application selection: Init Payment OK.

## EMV_ADK_INF_SEL_TERMDATA <a href="#ga62ffd08cc1c86d86aa6d23bb08de23a2" id="ga62ffd08cc1c86d86aa6d23bb08de23a2"></a>

<p>#define EMV_ADK_INF_SEL_TERMDATA   0x81</p>

Application selection: terminal data.

## EMV_ADK_INF_SEL_TEXTE <a href="#ga5f7f9380b727ef31f36916ae0141a0bc" id="ga5f7f9380b727ef31f36916ae0141a0bc"></a>

<p>#define EMV_ADK_INF_SEL_TEXTE   0x82</p>

Application selection: texts.

## EMV_ADK_INF_SEL_UI_LOA_PROC <a href="#ga2ee635804863064e40dc342f3e1b23d0" id="ga2ee635804863064e40dc342f3e1b23d0"></a>

<p>#define EMV_ADK_INF_SEL_UI_LOA_PROC   0x8E</p>

Application selection: LOA Processing (uninterrupted)

## EMV_ADK_INF_TRANS_1CRYPT_AAC <a href="#ga04d000a552cad9a44bf90d8f3549eec6" id="ga04d000a552cad9a44bf90d8f3549eec6"></a>

<p>#define EMV_ADK_INF_TRANS_1CRYPT_AAC   0xAA</p>

offline transaction processing: 1st Cryptography AAC

## EMV_ADK_INF_TRANS_1CRYPT_AAR <a href="#ga749c67a5070985176e7f9d2d480920b1" id="ga749c67a5070985176e7f9d2d480920b1"></a>

<p>#define EMV_ADK_INF_TRANS_1CRYPT_AAR   0xAB</p>

offline transaction processing: 1st Cryptography AAC

## EMV_ADK_INF_TRANS_1CRYPT_ARQC_CDA <a href="#gaa3263aa33de98fe32c3d3bc2d23377a8" id="gaa3263aa33de98fe32c3d3bc2d23377a8"></a>

<p>#define EMV_ADK_INF_TRANS_1CRYPT_ARQC_CDA   0xA8</p>

offline transaction processing: 1st Cryptography ARQC CDA

## EMV_ADK_INF_TRANS_1CRYPT_ARQC_OTHER <a href="#ga5d835442584edea1ed72dad8b0da3206" id="ga5d835442584edea1ed72dad8b0da3206"></a>

<p>#define EMV_ADK_INF_TRANS_1CRYPT_ARQC_OTHER   0xA9</p>

offline transaction processing: 1st Cryptography ARQC Other

## EMV_ADK_INF_TRANS_1CRYPT_TC <a href="#ga28325a4435449f101415279faa83c062" id="ga28325a4435449f101415279faa83c062"></a>

<p>#define EMV_ADK_INF_TRANS_1CRYPT_TC   0xA7</p>

offline transaction processing: 1st Cryptography TC

## EMV_ADK_INF_TRANS_1CRYPT_UNKNOWN <a href="#gad9fe857e32dc8a67d4159e2b4fc66a06" id="gad9fe857e32dc8a67d4159e2b4fc66a06"></a>

<p>#define EMV_ADK_INF_TRANS_1CRYPT_UNKNOWN   0xAC</p>

offline transaction processing: 1st Cryptography Unknown

## EMV_ADK_INF_TRANS_1GENAC <a href="#gabefd3e6bbcc1aec39e22098aef583043" id="gabefd3e6bbcc1aec39e22098aef583043"></a>

<p>#define EMV_ADK_INF_TRANS_1GENAC   0x9F</p>

offline transaction processing: 1st Genac

## EMV_ADK_INF_TRANS_AAT <a href="#ga435486941eef16274ca408aed90af957" id="ga435486941eef16274ca408aed90af957"></a>

<p>#define EMV_ADK_INF_TRANS_AAT   0x9E</p>

offline transaction processing: AAT (action analysis terminal)

## EMV_ADK_INF_TRANS_CARD_AUTH <a href="#ga07549de9e64e1da3639bb6300a74f48b" id="ga07549de9e64e1da3639bb6300a74f48b"></a>

<p>#define EMV_ADK_INF_TRANS_CARD_AUTH   0x9B</p>

offline transaction processing: Card Authentication

## EMV_ADK_INF_TRANS_CHECK_APPLI_DATA <a href="#ga4997d00a96dd1e33f2c2e6fe3a70c6df" id="ga4997d00a96dd1e33f2c2e6fe3a70c6df"></a>

<p>#define EMV_ADK_INF_TRANS_CHECK_APPLI_DATA   0x99</p>

offline transaction processing: Check Application Data

## EMV_ADK_INF_TRANS_CHECK_OK <a href="#ga3e78bd24c572d9a6cb635f739672ac26" id="ga3e78bd24c572d9a6cb635f739672ac26"></a>

<p>#define EMV_ADK_INF_TRANS_CHECK_OK   0x91</p>

Offline transaction processing: Check OK.

## EMV_ADK_INF_TRANS_CONF_AMOUNT <a href="#gaf89739d76223fb274b0458a378150e16" id="gaf89739d76223fb274b0458a378150e16"></a>

<p>#define EMV_ADK_INF_TRANS_CONF_AMOUNT   0x96</p>

offline transaction processing: Confirm Amount

## EMV_ADK_INF_TRANS_INITIATE <a href="#ga73a56d618e59e1607b059f536d793286" id="ga73a56d618e59e1607b059f536d793286"></a>

<p>#define EMV_ADK_INF_TRANS_INITIATE   0x97</p>

offline transaction processing: Initiation

## EMV_ADK_INF_TRANS_PROC_RESTRICTION <a href="#ga04e6bb212d270ca4f17ce240bd998a6a" id="ga04e6bb212d270ca4f17ce240bd998a6a"></a>

<p>#define EMV_ADK_INF_TRANS_PROC_RESTRICTION   0x9A</p>

offline transaction processing: Process Restriction

## EMV_ADK_INF_TRANS_READ_APPLI <a href="#gadfd189ae19924101808b148a07585459" id="gadfd189ae19924101808b148a07585459"></a>

<p>#define EMV_ADK_INF_TRANS_READ_APPLI   0x93</p>

offline transaction processing: Read Application

## EMV_ADK_INF_TRANS_READ_CARD_DATA <a href="#ga2a8dd6c4431056092298496e9776f8ca" id="ga2a8dd6c4431056092298496e9776f8ca"></a>

<p>#define EMV_ADK_INF_TRANS_READ_CARD_DATA   0x98</p>

offline transaction processing: Read Card Data

## EMV_ADK_INF_TRANS_READ_TERM <a href="#ga03f66e43638de051b961ae0b2881a8c8" id="ga03f66e43638de051b961ae0b2881a8c8"></a>

<p>#define EMV_ADK_INF_TRANS_READ_TERM   0x92</p>

offline transaction processing: Read Terminal Data

## EMV_ADK_INF_TRANS_RISK <a href="#ga123e1b804a77373df214dea47ac8aa01" id="ga123e1b804a77373df214dea47ac8aa01"></a>

<p>#define EMV_ADK_INF_TRANS_RISK   0x9D</p>

offline transaction processing: Risk

## EMV_ADK_INF_TRANS_SEL_LANG <a href="#ga23db50fccd6b2e548dd9e6b5963e4691" id="ga23db50fccd6b2e548dd9e6b5963e4691"></a>

<p>#define EMV_ADK_INF_TRANS_SEL_LANG   0x95</p>

offline transaction processing: Select Language

## EMV_ADK_INF_TRANS_VERIFY <a href="#ga87af85259224132a9a3611d5acd7db56" id="ga87af85259224132a9a3611d5acd7db56"></a>

<p>#define EMV_ADK_INF_TRANS_VERIFY   0x9C</p>

offline transaction processing: Verification

## EMV_ADK_INF_TRANS_VERIFY_ABANDON <a href="#ga072483cf14b90ca69af8336c91c17397" id="ga072483cf14b90ca69af8336c91c17397"></a>

<p>#define EMV_ADK_INF_TRANS_VERIFY_ABANDON   0xA1</p>

offline transaction processing: Verify Abandon

## EMV_ADK_INF_TRANS_VERIFY_CARD <a href="#ga8354bdf7f43ec922f5d87a15bf045f6c" id="ga8354bdf7f43ec922f5d87a15bf045f6c"></a>

<p>#define EMV_ADK_INF_TRANS_VERIFY_CARD   0xA0</p>

offline transaction processing: Verify Cardholder

## EMV_ADK_INF_TRANS_VERIFY_NOK <a href="#gaa4d9697e3f2adad8b357d170f44cebce" id="gaa4d9697e3f2adad8b357d170f44cebce"></a>

<p>#define EMV_ADK_INF_TRANS_VERIFY_NOK   0xA4</p>

offline transaction processing: Verify NOT OK

## EMV_ADK_INF_TRANS_VERIFY_OK <a href="#ga30eb017975004c89caa188cedb648d4f" id="ga30eb017975004c89caa188cedb648d4f"></a>

<p>#define EMV_ADK_INF_TRANS_VERIFY_OK   0xA5</p>

offline transaction processing: Verify OK

## EMV_ADK_INF_TRANS_VERIFY_ONLINE <a href="#gafd1e670cb6f036931d1db4894e191251" id="gafd1e670cb6f036931d1db4894e191251"></a>

<p>#define EMV_ADK_INF_TRANS_VERIFY_ONLINE   0xA3</p>

offline transaction processing: Verify Online

## EMV_ADK_INF_TRANS_VERIFY_OTHER <a href="#ga2166c7bf15292621abe4b96af4a37728" id="ga2166c7bf15292621abe4b96af4a37728"></a>

<p>#define EMV_ADK_INF_TRANS_VERIFY_OTHER   0xA2</p>

offline transaction processing: Verify Other

## EMV_ADK_INF_TRANS_VERIFY_PARAM <a href="#ga7c06c2aca08194d46e8a52a3161fb120" id="ga7c06c2aca08194d46e8a52a3161fb120"></a>

<p>#define EMV_ADK_INF_TRANS_VERIFY_PARAM   0xBB</p>

Processing the host response: Verify Parameter.

## EMV_ADK_INF_TRANS_VERIFY_SIGNATURE <a href="#gaec2811cd12368efabe3726e89a8c5217" id="gaec2811cd12368efabe3726e89a8c5217"></a>

<p>#define EMV_ADK_INF_TRANS_VERIFY_SIGNATURE   0xA6</p>

offline transaction processing: Verify Signature

## EMV_CTLS_ADK_END_TXN <a href="#ga0a3ca6b1e706dc3cfc711ef0d137216b" id="ga0a3ca6b1e706dc3cfc711ef0d137216b"></a>

<p>#define EMV_CTLS_ADK_END_TXN   0xFE</p>

TXN: End Transaction called.

## EMV_CTLS_ADK_ONL_HOST_DECLINE <a href="#ga5fc3f6b08b2e18b2f71ea18ba9f3545a" id="ga5fc3f6b08b2e18b2f71ea18ba9f3545a"></a>

<p>#define EMV_CTLS_ADK_ONL_HOST_DECLINE   0xF4</p>

Online: host declined.

## EMV_CTLS_ADK_ONL_HOST_OK <a href="#ga4cc4a1b584b001c08fc546e5814fdb11" id="ga4cc4a1b584b001c08fc546e5814fdb11"></a>

<p>#define EMV_CTLS_ADK_ONL_HOST_OK   0xF3</p>

Online: host approved.

## EMV_CTLS_ADK_ONL_HOST_ONLINE_PIN <a href="#ga798d8bbae9978c3647cd3a944cde1651" id="ga798d8bbae9978c3647cd3a944cde1651"></a>

<p>#define EMV_CTLS_ADK_ONL_HOST_ONLINE_PIN   0xF6</p>

Online: Strong Consumer Authentication - Online PIN.

## EMV_CTLS_ADK_ONL_HOST_SWITCH_IF <a href="#ga6ced780664a67700ce7ab438b4f91d1d" id="ga6ced780664a67700ce7ab438b4f91d1d"></a>

<p>#define EMV_CTLS_ADK_ONL_HOST_SWITCH_IF   0xF5</p>

Online: Strong Consumer Authentication - switch interface.

## EMV_CTLS_ADK_ONL_NO_CTLS_TXN <a href="#gaf64d339dc74df083595b95229546ba0a" id="gaf64d339dc74df083595b95229546ba0a"></a>

<p>#define EMV_CTLS_ADK_ONL_NO_CTLS_TXN   0xF1</p>

Online: No Ctls transaction happened before call.

## EMV_CTLS_ADK_ONL_NO_HOST <a href="#ga702838d6dd0c51405f4f949eeef4381e" id="ga702838d6dd0c51405f4f949eeef4381e"></a>

<p>#define EMV_CTLS_ADK_ONL_NO_HOST   0xF2</p>

Online: no answer from host.

## EMV_CTLS_ADK_ONL_START <a href="#gaa055163d1b96df4790ea658aa80fe158" id="gaa055163d1b96df4790ea658aa80fe158"></a>

<p>#define EMV_CTLS_ADK_ONL_START   0xF0</p>

Online: Start.

## EMV_CTLS_ADK_SETUP_ABOVE_CEILING_EMV_ONLY <a href="#ga6e399ef7e4830d80b7440b810e6c90ab" id="ga6e399ef7e4830d80b7440b810e6c90ab"></a>

<p>#define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_EMV_ONLY   0x85</p>

Setup: above ceiling limit EMV.

## EMV_CTLS_ADK_SETUP_ABOVE_CEILING_NO_DOM <a href="#gab77f760cce48bbed04f007ef336446c0" id="gab77f760cce48bbed04f007ef336446c0"></a>

<p>#define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_NO_DOM   0x86</p>

Setup: above ceiling limit no domestic app.

## EMV_CTLS_ADK_SETUP_DETECT <a href="#gaf5d1c8f33ab201fa7371faab14d27557" id="gaf5d1c8f33ab201fa7371faab14d27557"></a>

<p>#define EMV_CTLS_ADK_SETUP_DETECT   0x88</p>

Setup: detect failed.

## EMV_CTLS_ADK_SETUP_NO_CONTEXT <a href="#ga0ad492a9973c6d785cf05539047c2635" id="ga0ad492a9973c6d785cf05539047c2635"></a>

<p>#define EMV_CTLS_ADK_SETUP_NO_CONTEXT   0x81</p>

Setup: context missing.

## EMV_CTLS_ADK_SETUP_NO_INIT <a href="#gae258e027119aec245c5a90eb44fd1e58" id="gae258e027119aec245c5a90eb44fd1e58"></a>

<p>#define EMV_CTLS_ADK_SETUP_NO_INIT   0x82</p>

Setup: not initialized.

## EMV_CTLS_ADK_SETUP_OK <a href="#ga2cd5ca45bfb82f00fd2ed700d6efffda" id="ga2cd5ca45bfb82f00fd2ed700d6efffda"></a>

<p>#define EMV_CTLS_ADK_SETUP_OK   0x8A</p>

Setup: OK.

## EMV_CTLS_ADK_SETUP_RND_FAIL <a href="#ga95bed8dc421f57c0306c17fc1466a196" id="ga95bed8dc421f57c0306c17fc1466a196"></a>

<p>#define EMV_CTLS_ADK_SETUP_RND_FAIL   0x87</p>

Setup: RND failed.

## EMV_CTLS_ADK_SETUP_SET_PARAM_FAIL <a href="#gac64c0713654734e1bc8d9cbf07aabb9e" id="gac64c0713654734e1bc8d9cbf07aabb9e"></a>

<p>#define EMV_CTLS_ADK_SETUP_SET_PARAM_FAIL   0x89</p>

Setup: txn setup failure.

## EMV_CTLS_ADK_SETUP_START <a href="#ga11842edc6cebc295e1c183d47411796b" id="ga11842edc6cebc295e1c183d47411796b"></a>

<p>#define EMV_CTLS_ADK_SETUP_START   0x80</p>

Initialization Setup.

## EMV_CTLS_ADK_SETUP_TERMDATA <a href="#ga80ad94c04f7546c93f13a8df13e81b12" id="ga80ad94c04f7546c93f13a8df13e81b12"></a>

<p>#define EMV_CTLS_ADK_SETUP_TERMDATA   0x83</p>

Setup: terminal data not available.

## EMV_CTLS_ADK_TXN_2_CARDS <a href="#ga0f65d288d8777ab3562179c15f70cd08" id="ga0f65d288d8777ab3562179c15f70cd08"></a>

<p>#define EMV_CTLS_ADK_TXN_2_CARDS   0xA2</p>

TXN: 2 cards in field.

## EMV_CTLS_ADK_TXN_AID_NOT_READ_EMPTY <a href="#ga29510f1b5221feae4104cd7ecb189bba" id="ga29510f1b5221feae4104cd7ecb189bba"></a>

<p>#define EMV_CTLS_ADK_TXN_AID_NOT_READ_EMPTY   0xAD</p>

TXN: AID parameter reading failed, list empty.

## EMV_CTLS_ADK_TXN_AID_SKIP_DOM_EMPTY <a href="#ga6a0f89a63a637866a46dae410e6a13c8" id="ga6a0f89a63a637866a46dae410e6a13c8"></a>

<p>#define EMV_CTLS_ADK_TXN_AID_SKIP_DOM_EMPTY   0xAE</p>

TXN: domestic app skipped, list empty.

## EMV_CTLS_ADK_TXN_AID_SKIP_EMV_EMPTY <a href="#ga8904f8ea285a6ddff1b4735374af54f1" id="ga8904f8ea285a6ddff1b4735374af54f1"></a>

<p>#define EMV_CTLS_ADK_TXN_AID_SKIP_EMV_EMPTY   0xAF</p>

TXN: emv app skipped, list empty.

## EMV_CTLS_ADK_TXN_CAND_LIST_EMPTY <a href="#gaaf371ff9b9d55f094c31698ff5f14c64" id="gaaf371ff9b9d55f094c31698ff5f14c64"></a>

<p>#define EMV_CTLS_ADK_TXN_CAND_LIST_EMPTY   0xA3</p>

TXN: empty candidate list of terminal.

## EMV_CTLS_ADK_TXN_CANDIDATE_EVAL <a href="#ga0cbc77376eeb48a59b7021f039b034e8" id="ga0cbc77376eeb48a59b7021f039b034e8"></a>

<p>#define EMV_CTLS_ADK_TXN_CANDIDATE_EVAL   0xB4</p>

TXN: candidate list evaluation.

## EMV_CTLS_ADK_TXN_CANDIDATE_FINAL_SELECT <a href="#ga8a0bc3b8976631823c343198844fa839" id="ga8a0bc3b8976631823c343198844fa839"></a>

<p>#define EMV_CTLS_ADK_TXN_CANDIDATE_FINAL_SELECT   0xB5</p>

TXN: final select.

## EMV_CTLS_ADK_TXN_DOM_APP_NOT_SELECTED <a href="#ga7deb45d9d930e27ba007e7004c793531" id="ga7deb45d9d930e27ba007e7004c793531"></a>

<p>#define EMV_CTLS_ADK_TXN_DOM_APP_NOT_SELECTED   0xA8</p>

TXN: domestic application selection failed.

## EMV_CTLS_ADK_TXN_DOM_APP_SELECTED <a href="#gafbfcf301bdcbef78b79ba7ddfd3053e0" id="gafbfcf301bdcbef78b79ba7ddfd3053e0"></a>

<p>#define EMV_CTLS_ADK_TXN_DOM_APP_SELECTED   0xA9</p>

TXN: domestic application selected.

## EMV_CTLS_ADK_TXN_DOM_FINAL_SEL_OK <a href="#ga693e28c727c60d44d6d510644cc94d69" id="ga693e28c727c60d44d6d510644cc94d69"></a>

<p>#define EMV_CTLS_ADK_TXN_DOM_FINAL_SEL_OK   0xB0</p>

TXN: domestic application with final select ok.

## EMV_CTLS_ADK_TXN_DOM_ONE_APP_FAIL <a href="#ga898de46bf97884411ad6fa072cd17271" id="ga898de46bf97884411ad6fa072cd17271"></a>

<p>#define EMV_CTLS_ADK_TXN_DOM_ONE_APP_FAIL   0xA5</p>

TXN: single domestic app failed.

## EMV_CTLS_ADK_TXN_DOM_ONE_APP_SELECTED <a href="#gab7918ecbe2bfeb5204fd500753e6185e" id="gab7918ecbe2bfeb5204fd500753e6185e"></a>

<p>#define EMV_CTLS_ADK_TXN_DOM_ONE_APP_SELECTED   0xA4</p>

TXN: a single domestic app is selected.

## EMV_CTLS_ADK_TXN_EP_INIT_FAILED <a href="#gaa1a8b6b0c32ee79324050cf2e53456d6" id="gaa1a8b6b0c32ee79324050cf2e53456d6"></a>

<p>#define EMV_CTLS_ADK_TXN_EP_INIT_FAILED   0xB2</p>

TXN: Entry Point Init failed.

## EMV_CTLS_ADK_TXN_GK_GET_DATA_FAIL <a href="#ga426cfa68bb2df8e3095ada29f267cfeb" id="ga426cfa68bb2df8e3095ada29f267cfeb"></a>

<p>#define EMV_CTLS_ADK_TXN_GK_GET_DATA_FAIL   0x71</p>

TXN: Gemalto, special transaction GET DATA finished fail.

## EMV_CTLS_ADK_TXN_GK_GET_DATA_OKAY <a href="#gadd9d347e21e080e89dd91a8189df467a" id="gadd9d347e21e080e89dd91a8189df467a"></a>

<p>#define EMV_CTLS_ADK_TXN_GK_GET_DATA_OKAY   0x70</p>

TXN: Gemalto, special transaction GET DATA finished okay.

## EMV_CTLS_ADK_TXN_GK_PUT_DATA_FAIL <a href="#ga1c69db36d68e819e8b7988be9ad9eb85" id="ga1c69db36d68e819e8b7988be9ad9eb85"></a>

<p>#define EMV_CTLS_ADK_TXN_GK_PUT_DATA_FAIL   0x73</p>

TXN: Gemalto, special transaction PUT DATA finished fail.

## EMV_CTLS_ADK_TXN_GK_PUT_DATA_OKAY <a href="#ga3bee21a782d20c6f8b39ac885a607ca1" id="ga3bee21a782d20c6f8b39ac885a607ca1"></a>

<p>#define EMV_CTLS_ADK_TXN_GK_PUT_DATA_OKAY   0x72</p>

TXN: Gemalto, special transaction PUT DATA finished okay.

## EMV_CTLS_ADK_TXN_KERNEL_BAD_FFI <a href="#gab242a1e59445a6d1950701dfe252be74" id="gab242a1e59445a6d1950701dfe252be74"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_BAD_FFI   0x54</p>

TXN: Interac bad FFI.

## EMV_CTLS_ADK_TXN_KERNEL_CARDREAD_CHP <a href="#ga037034c9ce386446e6e3bb64775e0c99" id="ga037034c9ce386446e6e3bb64775e0c99"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_CARDREAD_CHP   0x40</p>

TXN: card data read CHP.

## EMV_CTLS_ADK_TXN_KERNEL_DECLINE_BEFORE_GAC <a href="#ga12ff957c3d2f59201a68c322dad2ea41" id="ga12ff957c3d2f59201a68c322dad2ea41"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_BEFORE_GAC   0x47</p>

TXN: decline start.

## EMV_CTLS_ADK_TXN_KERNEL_DECLINE_CHP <a href="#ga0c1bfff75f15b75ba97fc6c1eb9ad042" id="ga0c1bfff75f15b75ba97fc6c1eb9ad042"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_CHP   0x41</p>

TXN: decline CHP.

## EMV_CTLS_ADK_TXN_KERNEL_DECLINE_MSD <a href="#gaae06ec5ea8b8636a7e3da935832db02c" id="gaae06ec5ea8b8636a7e3da935832db02c"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_MSD   0x39</p>

TXN: decline MSD.

## EMV_CTLS_ADK_TXN_KERNEL_DECLINE_START <a href="#gadebfb96cb6e5f70fab3f60019ac2a189" id="gadebfb96cb6e5f70fab3f60019ac2a189"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_START   0x4E</p>

TXN: decline before EOT.

## EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_CHP <a href="#gad0fae5dc8b640adeef108b7b58394ffa" id="gad0fae5dc8b640adeef108b7b58394ffa"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_CHP   0x50</p>

TXN: use other interface or other card.

## EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_MSD <a href="#ga2e16eedd2d4ef1599e3a374006aea137" id="ga2e16eedd2d4ef1599e3a374006aea137"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_MSD   0x4D</p>

TXN: fallback MSD.

## EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_OTHERCARD <a href="#ga9497df334048a6bcc186f622b739f845" id="ga9497df334048a6bcc186f622b739f845"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_OTHERCARD   0x4B</p>

TXN: use other card.

## EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_START <a href="#gabf1b757b5805802ba1ded0eb94ed3a36" id="gabf1b757b5805802ba1ded0eb94ed3a36"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_START   0x48</p>

TXN: fallback start.

## EMV_CTLS_ADK_TXN_KERNEL_GPO_RR <a href="#ga613a58744df7898e62f675a64c0f8e03" id="ga613a58744df7898e62f675a64c0f8e03"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_GPO_RR   0x4A</p>

TXN: Step ReadRecords and GPO.

## EMV_CTLS_ADK_TXN_KERNEL_INIT_FAIL <a href="#ga2dfc86c44ba556faf83ae79b9550cd19" id="ga2dfc86c44ba556faf83ae79b9550cd19"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_INIT_FAIL   0x49</p>

TXN: Init failed.

## EMV_CTLS_ADK_TXN_KERNEL_INTERFACE_CHP <a href="#ga5693a350d6fb6786e868a0b68247dde3" id="ga5693a350d6fb6786e868a0b68247dde3"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_INTERFACE_CHP   0x44</p>

TXN: use other interface.

## EMV_CTLS_ADK_TXN_KERNEL_L1_CHP <a href="#gaa6257a2a84734e668f4b131e58f906e4" id="gaa6257a2a84734e668f4b131e58f906e4"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_L1_CHP   0x3F</p>

TXN: L1 error CHP.

## EMV_CTLS_ADK_TXN_KERNEL_L1_MSD <a href="#ga2d6aea1a05367b22b1537e37d0b9b0f8" id="ga2d6aea1a05367b22b1537e37d0b9b0f8"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_L1_MSD   0x37</p>

TXN: L1 error MSD.

## EMV_CTLS_ADK_TXN_KERNEL_L1_START <a href="#ga8846491e46b9925550cc4d85e861b10e" id="ga8846491e46b9925550cc4d85e861b10e"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_L1_START   0x34</p>

TXN: L1 error.

## EMV_CTLS_ADK_TXN_KERNEL_MOBILE_CHP <a href="#gabbee18c9da230ec83031eec55e132722" id="gabbee18c9da230ec83031eec55e132722"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_CHP   0x3E</p>

TXN: mobile requested CHP.

## EMV_CTLS_ADK_TXN_KERNEL_MOBILE_MSD <a href="#gaab13a7b8238a4cadadfceb453e194ba7" id="gaab13a7b8238a4cadadfceb453e194ba7"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_MSD   0x36</p>

TXN: mobile requested MSD.

## EMV_CTLS_ADK_TXN_KERNEL_MOBILE_START <a href="#ga9b4c3c4528b9d4e429e084b017eb8b08" id="ga9b4c3c4528b9d4e429e084b017eb8b08"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_START   0x33</p>

TXN: mobile requested.

## EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL <a href="#ga90e6739fcc17ad1f4813e9deb1c93d2f" id="ga90e6739fcc17ad1f4813e9deb1c93d2f"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL   0x31</p>

TXN: new select.

## EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL_CHP <a href="#ga835eedd082ba2a23ec469104bba3cd95" id="ga835eedd082ba2a23ec469104bba3cd95"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL_CHP   0x45</p>

TXN: new select CHP.

## EMV_CTLS_ADK_TXN_KERNEL_NO_DATA_MSD <a href="#ga619740d3b254be527e4b01ca9d3b2785" id="ga619740d3b254be527e4b01ca9d3b2785"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_NO_DATA_MSD   0x38</p>

TXN: no data MSD.

## EMV_CTLS_ADK_TXN_KERNEL_OK_CHP <a href="#ga4ffdc8af082ed96d8e867cf678f8f9f7" id="ga4ffdc8af082ed96d8e867cf678f8f9f7"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_OK_CHP   0x43</p>

TXN: ok CHP.

## EMV_CTLS_ADK_TXN_KERNEL_OK_MSD <a href="#gabce488bff639e385c3ad1a5d7c0baaf8" id="gabce488bff639e385c3ad1a5d7c0baaf8"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_OK_MSD   0x3A</p>

TXN: ok MSD.

## EMV_CTLS_ADK_TXN_KERNEL_ONLINE_CHP <a href="#gafb008f13fe30aa8dae87fb68d08f12bb" id="gafb008f13fe30aa8dae87fb68d08f12bb"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_CHP   0x42</p>

TXN: online CHP.

## EMV_CTLS_ADK_TXN_KERNEL_ONLINE_MSD <a href="#gaeb16d9c08e7477e596b7dd9ed45c5c18" id="gaeb16d9c08e7477e596b7dd9ed45c5c18"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_MSD   0x3B</p>

TXN: online MSD.

## EMV_CTLS_ADK_TXN_KERNEL_OTHER_CHP <a href="#ga41b9d8e742eea964e8eb179dc73d23f8" id="ga41b9d8e742eea964e8eb179dc73d23f8"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_OTHER_CHP   0x46</p>

TXN: other error CHP.

## EMV_CTLS_ADK_TXN_KERNEL_OTHER_MSD <a href="#gaf9805f9648a71ccc3fb883b9d39e451a" id="gaf9805f9648a71ccc3fb883b9d39e451a"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_OTHER_MSD   0x3C</p>

TXN: other MSD.

## EMV_CTLS_ADK_TXN_KERNEL_OTHER_TERM_CHP <a href="#ga3258985648d4f0ec715ec6f2257346ca" id="ga3258985648d4f0ec715ec6f2257346ca"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_OTHER_TERM_CHP   0x52</p>

TXN: advice merchant to use other terminal.

## EMV_CTLS_ADK_TXN_KERNEL_READCARD_MSD <a href="#ga84f3e396deb9940b019f61ead36b1b5f" id="ga84f3e396deb9940b019f61ead36b1b5f"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_READCARD_MSD   0x4F</p>

TXN: read card MSD.

## EMV_CTLS_ADK_TXN_KERNEL_RETAP_CHP <a href="#ga1802f73cf1188155005b618ae86e724a" id="ga1802f73cf1188155005b618ae86e724a"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_RETAP_CHP   0x3D</p>

TXN: retap reuired CHP.

## EMV_CTLS_ADK_TXN_KERNEL_RETAP_MSD <a href="#gaae452767098559b44287814517242516" id="gaae452767098559b44287814517242516"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_RETAP_MSD   0x35</p>

TXN: retap reuired MSD.

## EMV_CTLS_ADK_TXN_KERNEL_RETAP_START <a href="#gaf79e0f937dbab4a7829688e7a4881e40" id="gaf79e0f937dbab4a7829688e7a4881e40"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_RETAP_START   0x32</p>

TXN: retap required.

## EMV_CTLS_ADK_TXN_KERNEL_START <a href="#ga56203b86183984e41c7a7a29e029bc97" id="ga56203b86183984e41c7a7a29e029bc97"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_START   0x30</p>

TXN: Start of Kernel Processing.

## EMV_CTLS_ADK_TXN_KERNEL_START_FALLBACK_OTHERCARD <a href="#ga699abfc228c0d59bf04204bd39a4e668" id="ga699abfc228c0d59bf04204bd39a4e668"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_START_FALLBACK_OTHERCARD   0x51</p>

TXN: use other interface or other card.

## EMV_CTLS_ADK_TXN_KERNEL_TOO_MANY_TAPS <a href="#ga55297e101d843eb4ea179efa385e1c77" id="ga55297e101d843eb4ea179efa385e1c77"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_TOO_MANY_TAPS   0x53</p>

TXN: card holder exceeded number of taps allowed for one transaction.

## EMV_CTLS_ADK_TXN_KERNEL_TRY_ZIP <a href="#ga8127fac3b82937a1fafdfe77b1124117" id="ga8127fac3b82937a1fafdfe77b1124117"></a>

<p>#define EMV_CTLS_ADK_TXN_KERNEL_TRY_ZIP   0x4C</p>

TXN: try Discover ZIP.

## EMV_CTLS_ADK_TXN_L1_CAND_LIST <a href="#ga907131abb010e3de041f9dfac093fb5d" id="ga907131abb010e3de041f9dfac093fb5d"></a>

<p>#define EMV_CTLS_ADK_TXN_L1_CAND_LIST   0xA7</p>

TXN: L1 error candidate list building.

## EMV_CTLS_ADK_TXN_L1_DIR_READING <a href="#gab5a725f6061c9f343e5f3ada29675715" id="gab5a725f6061c9f343e5f3ada29675715"></a>

<p>#define EMV_CTLS_ADK_TXN_L1_DIR_READING   0xA6</p>

TXN: L1 error at directory reading.

## EMV_CTLS_ADK_TXN_L1_FINAL_SELECT <a href="#gade14b6cd179f21f5bc51f5bfde6a0721" id="gade14b6cd179f21f5bc51f5bfde6a0721"></a>

<p>#define EMV_CTLS_ADK_TXN_L1_FINAL_SELECT   0xAC</p>

TXN: L1 error final select.

## EMV_CTLS_ADK_TXN_LIST_ITERATION_KO <a href="#ga3af698359c88186828781d80f5e53472" id="ga3af698359c88186828781d80f5e53472"></a>

<p>#define EMV_CTLS_ADK_TXN_LIST_ITERATION_KO   0xB3</p>

TXN: error list iteration.

## EMV_CTLS_ADK_TXN_MK_CARDREAD_CHP <a href="#ga7be897d9de25062495695ac6a7b9dce2" id="ga7be897d9de25062495695ac6a7b9dce2"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_CARDREAD_CHP   0xD0</p>

TXN: card data read CHP.

## EMV_CTLS_ADK_TXN_MK_DECLINE_BEFORE_GAC <a href="#gafd99671d0e7864cdff2a0573b83bef6e" id="gafd99671d0e7864cdff2a0573b83bef6e"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_DECLINE_BEFORE_GAC   0xD7</p>

TXN: decline start.

## EMV_CTLS_ADK_TXN_MK_DECLINE_CHP <a href="#gad624609fa3ab58c79779da9104775bef" id="gad624609fa3ab58c79779da9104775bef"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_DECLINE_CHP   0xD1</p>

TXN: decline CHP.

## EMV_CTLS_ADK_TXN_MK_DECLINE_MSD <a href="#ga263bb236032e48cae08459146b073800" id="ga263bb236032e48cae08459146b073800"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_DECLINE_MSD   0xC9</p>

TXN: decline MSD.

## EMV_CTLS_ADK_TXN_MK_FALLBACK_OTHERCARD <a href="#ga7ce423bafda30eb0337493783158ed05" id="ga7ce423bafda30eb0337493783158ed05"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_FALLBACK_OTHERCARD   0xDB</p>

TXN: use other interface or other card.

## EMV_CTLS_ADK_TXN_MK_FALLBACK_START <a href="#ga4bedaace6e848b44e8e979b90bad8995" id="ga4bedaace6e848b44e8e979b90bad8995"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_FALLBACK_START   0xD8</p>

TXN: fallback start.

## EMV_CTLS_ADK_TXN_MK_GPO_RR <a href="#ga0b7d687773f40fea6e5ccecd5517272b" id="ga0b7d687773f40fea6e5ccecd5517272b"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_GPO_RR   0xDA</p>

TXN: Step ReadRecords and GPO.

## EMV_CTLS_ADK_TXN_MK_INIT_FAIL <a href="#ga01ac3c42aaaf79c40b7bb4d36718dc54" id="ga01ac3c42aaaf79c40b7bb4d36718dc54"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_INIT_FAIL   0xD9</p>

TXN: Init failed.

## EMV_CTLS_ADK_TXN_MK_INTERFACE_CHP <a href="#gaab3441255ae0c6beedcb1923bc6dd752" id="gaab3441255ae0c6beedcb1923bc6dd752"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_INTERFACE_CHP   0xD4</p>

TXN: use other interface.

## EMV_CTLS_ADK_TXN_MK_L1_CHP <a href="#ga10dbdd0c6e228781247992d3db532e96" id="ga10dbdd0c6e228781247992d3db532e96"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_L1_CHP   0xCF</p>

TXN: L1 error CHP.

## EMV_CTLS_ADK_TXN_MK_L1_MSD <a href="#ga48fef82407c346744fd1aed2bf73f652" id="ga48fef82407c346744fd1aed2bf73f652"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_L1_MSD   0xC7</p>

TXN: L1 error MSD.

## EMV_CTLS_ADK_TXN_MK_L1_START <a href="#ga2024a708fe97e6a6a16c8c9d1b503a63" id="ga2024a708fe97e6a6a16c8c9d1b503a63"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_L1_START   0xC4</p>

TXN: L1 error.

## EMV_CTLS_ADK_TXN_MK_MOBILE_CHP <a href="#gae726b4f219785dc144e6e77fa448319b" id="gae726b4f219785dc144e6e77fa448319b"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_MOBILE_CHP   0xCE</p>

TXN: mobile requested CHP.

## EMV_CTLS_ADK_TXN_MK_MOBILE_MSD <a href="#gafab93520ba999716111b2502c3a2dd74" id="gafab93520ba999716111b2502c3a2dd74"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_MOBILE_MSD   0xC6</p>

TXN: mobile requested MSD.

## EMV_CTLS_ADK_TXN_MK_MOBILE_START <a href="#ga830feab32d9882d2571b661a4ec2ea1a" id="ga830feab32d9882d2571b661a4ec2ea1a"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_MOBILE_START   0xC3</p>

TXN: mobile requested.

## EMV_CTLS_ADK_TXN_MK_NEW_SEL <a href="#ga14750b4ec2191c10b8bc731fd2067713" id="ga14750b4ec2191c10b8bc731fd2067713"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_NEW_SEL   0xC1</p>

TXN: new select.

## EMV_CTLS_ADK_TXN_MK_NEW_SEL_CHP <a href="#ga1282473ef32ef45ef3da7e373d436cff" id="ga1282473ef32ef45ef3da7e373d436cff"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_NEW_SEL_CHP   0xD5</p>

TXN: new select CHP.

## EMV_CTLS_ADK_TXN_MK_NO_DATA_MSD <a href="#ga72f3aba316de1f712f294a1bf6f2cfad" id="ga72f3aba316de1f712f294a1bf6f2cfad"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_NO_DATA_MSD   0xC8</p>

TXN: no data MSD.

## EMV_CTLS_ADK_TXN_MK_OK_CHP <a href="#gaf5e2ec55aca233d4dc0845061416cb97" id="gaf5e2ec55aca233d4dc0845061416cb97"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_OK_CHP   0xD3</p>

TXN: ok CHP.

## EMV_CTLS_ADK_TXN_MK_OK_MSD <a href="#ga2ee49b50f59c6cb1c6665849cced3e2b" id="ga2ee49b50f59c6cb1c6665849cced3e2b"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_OK_MSD   0xCA</p>

TXN: ok MSD.

## EMV_CTLS_ADK_TXN_MK_ONLINE_CHP <a href="#ga11e998c43a5e8b8e349ff2e7aa2edd36" id="ga11e998c43a5e8b8e349ff2e7aa2edd36"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_ONLINE_CHP   0xD2</p>

TXN: online CHP.

## EMV_CTLS_ADK_TXN_MK_ONLINE_MSD <a href="#ga86e10e547e605c62f2d6d6e3b5659dcf" id="ga86e10e547e605c62f2d6d6e3b5659dcf"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_ONLINE_MSD   0xCB</p>

TXN: online MSD.

## EMV_CTLS_ADK_TXN_MK_OTHER_CHP <a href="#gac356101532c545069cde6165d1428774" id="gac356101532c545069cde6165d1428774"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_OTHER_CHP   0xD6</p>

TXN: other error CHP.

## EMV_CTLS_ADK_TXN_MK_OTHER_MSD <a href="#gae6e906a38aa334f3a3a355bae9679932" id="gae6e906a38aa334f3a3a355bae9679932"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_OTHER_MSD   0xCC</p>

TXN: other MSD.

## EMV_CTLS_ADK_TXN_MK_RETAP_CHP <a href="#ga92151fc2e52db9b617b506206ee35ea1" id="ga92151fc2e52db9b617b506206ee35ea1"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_RETAP_CHP   0xCD</p>

TXN: retap reuired CHP.

## EMV_CTLS_ADK_TXN_MK_RETAP_MSD <a href="#ga480be5a47a13bbc8c343227c04d631ea" id="ga480be5a47a13bbc8c343227c04d631ea"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_RETAP_MSD   0xC5</p>

TXN: retap reuired MSD.

## EMV_CTLS_ADK_TXN_MK_RETAP_START <a href="#ga9c9d58abc59628e8f98a44b8528a4820" id="ga9c9d58abc59628e8f98a44b8528a4820"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_RETAP_START   0xC2</p>

TXN: retap required.

## EMV_CTLS_ADK_TXN_MK_START <a href="#ga9ca32c6802d6baa91c58e1b100c510a5" id="ga9ca32c6802d6baa91c58e1b100c510a5"></a>

<p>#define EMV_CTLS_ADK_TXN_MK_START   0xC0</p>

TXN: Start of PayPass.

## EMV_CTLS_ADK_TXN_NO_ATR <a href="#ga28ef02ff7d324621406075110c025249" id="ga28ef02ff7d324621406075110c025249"></a>

<p>#define EMV_CTLS_ADK_TXN_NO_ATR   0xA1</p>

TXN: no ATR.

## EMV_CTLS_ADK_TXN_NO_COMBO_EMPTY_LIST <a href="#gaf480fe63080b67e93d44e8c8d5af997c" id="gaf480fe63080b67e93d44e8c8d5af997c"></a>

<p>#define EMV_CTLS_ADK_TXN_NO_COMBO_EMPTY_LIST   0xAA</p>

TXN: empty combo list.

## EMV_CTLS_ADK_TXN_NO_DOM_APP_SELECT_NO_FINAL <a href="#gada931924909da87f0b87e283aacdad6c" id="gada931924909da87f0b87e283aacdad6c"></a>

<p>#define EMV_CTLS_ADK_TXN_NO_DOM_APP_SELECT_NO_FINAL   0xAB</p>

TXN: domestic app select failed no final select issued.

## EMV_CTLS_ADK_TXN_START <a href="#ga85f6e6cb3d055a47004852dd7b7466f6" id="ga85f6e6cb3d055a47004852dd7b7466f6"></a>

<p>#define EMV_CTLS_ADK_TXN_START   0xA0</p>

TXN: Start.

## EMV_CTLS_ADK_TXN_UNKNOW_KERNEL <a href="#ga1ea47db9914c6d10dc159f2802703e52" id="ga1ea47db9914c6d10dc159f2802703e52"></a>

<p>#define EMV_CTLS_ADK_TXN_UNKNOW_KERNEL   0xB1</p>

TXN: unknown kernel.

## EMV_CTLS_ADK_TXN_VK_DECLINE_CHP <a href="#gaf4037a481d6b5167e159997bcd361a88" id="gaf4037a481d6b5167e159997bcd361a88"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_DECLINE_CHP   0x1C</p>

TXN: decline CHP.

## EMV_CTLS_ADK_TXN_VK_DECLINE_MSD <a href="#gaa9110a3afe90b6de3df1640058bbec99" id="gaa9110a3afe90b6de3df1640058bbec99"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_DECLINE_MSD   0x16</p>

TXN: decline MSD.

## EMV_CTLS_ADK_TXN_VK_DECLINE_START <a href="#ga58874de5af26ec0bca77de0e7c807db7" id="ga58874de5af26ec0bca77de0e7c807db7"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_DECLINE_START   0x21</p>

TXN: decline start.

## EMV_CTLS_ADK_TXN_VK_FALLBACK_CARD_LOG <a href="#gabbc619f35b1fa3eb3a6328e25cc7d200" id="gabbc619f35b1fa3eb3a6328e25cc7d200"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_FALLBACK_CARD_LOG   0x29</p>

TXN: fallback because of failed card log reading.

## EMV_CTLS_ADK_TXN_VK_FALLBACK_CHP <a href="#gad54acb87584cf35dd32445d34ba4acbd" id="gad54acb87584cf35dd32445d34ba4acbd"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_FALLBACK_CHP   0x1F</p>

TXN: fallback CHP.

## EMV_CTLS_ADK_TXN_VK_FALLBACK_MSD <a href="#gad415d2cb995ecd35cff63e14aad548e4" id="gad415d2cb995ecd35cff63e14aad548e4"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_FALLBACK_MSD   0x15</p>

TXN: Start of PayPass.

## EMV_CTLS_ADK_TXN_VK_FALLBACK_START <a href="#ga3827bb37262d8fb05c54c1308f2d16be" id="ga3827bb37262d8fb05c54c1308f2d16be"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_FALLBACK_START   0x22</p>

TXN: fallback start.

## EMV_CTLS_ADK_TXN_VK_GPO_RR <a href="#ga30149d742bded09302fb7948942e5d52" id="ga30149d742bded09302fb7948942e5d52"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_GPO_RR   0x25</p>

TXN: Step ReadRecords and GPO.

## EMV_CTLS_ADK_TXN_VK_INCONS_TRACK2 <a href="#gad0536f085c10bd38736273f6ea23e177" id="gad0536f085c10bd38736273f6ea23e177"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_INCONS_TRACK2   0x26</p>

TXN: inconsisten track 2 and PAN.

## EMV_CTLS_ADK_TXN_VK_INIT_FAIL <a href="#ga059ea05d5ebd155c13e2d09a5f96a45e" id="ga059ea05d5ebd155c13e2d09a5f96a45e"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_INIT_FAIL   0x24</p>

TXN: Init failed.

## EMV_CTLS_ADK_TXN_VK_L1_CHP <a href="#ga06963aab97b48c9799d15ce84b2acb71" id="ga06963aab97b48c9799d15ce84b2acb71"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_L1_CHP   0x1A</p>

TXN: L1 error CHP.

## EMV_CTLS_ADK_TXN_VK_L1_MSD <a href="#gaeed75fb6d2ba51a11fa2ad1e42914eaf" id="gaeed75fb6d2ba51a11fa2ad1e42914eaf"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_L1_MSD   0x14</p>

TXN: L1 error MSD.

## EMV_CTLS_ADK_TXN_VK_L1_START <a href="#gaf1bf2f8c8a4c46e5c4491f7c75eb0d93" id="gaf1bf2f8c8a4c46e5c4491f7c75eb0d93"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_L1_START   0x13</p>

TXN: L1 error.

## EMV_CTLS_ADK_TXN_VK_MOBILE_START <a href="#ga4f12efa6d4325edd1acb0911cbabb93e" id="ga4f12efa6d4325edd1acb0911cbabb93e"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_MOBILE_START   0x12</p>

TXN: mobile requested.

## EMV_CTLS_ADK_TXN_VK_NEW_SEL <a href="#ga97c0d8eb4fdaa30e9a3b8c117e76429b" id="ga97c0d8eb4fdaa30e9a3b8c117e76429b"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_NEW_SEL   0x11</p>

TXN: new select.

## EMV_CTLS_ADK_TXN_VK_OK_CHP <a href="#ga1cfbe4beeb6d65605deb66313fa98f93" id="ga1cfbe4beeb6d65605deb66313fa98f93"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_OK_CHP   0x1E</p>

TXN: ok CHP.

## EMV_CTLS_ADK_TXN_VK_OK_MSD <a href="#gad7cd4dedcbbad925e155f1ddba481aba" id="gad7cd4dedcbbad925e155f1ddba481aba"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_OK_MSD   0x17</p>

TXN: ok MSD.

## EMV_CTLS_ADK_TXN_VK_ONLINE_CHP <a href="#ga13e3d58490bf7f1f9265384bc849ba29" id="ga13e3d58490bf7f1f9265384bc849ba29"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_ONLINE_CHP   0x1D</p>

TXN: online CHP.

## EMV_CTLS_ADK_TXN_VK_ONLINE_MSD <a href="#ga0325ba18a603008c51eb881bd4ea2709" id="ga0325ba18a603008c51eb881bd4ea2709"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_ONLINE_MSD   0x18</p>

TXN: online MSD.

## EMV_CTLS_ADK_TXN_VK_OTHER_CHP <a href="#ga0d8841f9e90192dc17b14fc76dec7f92" id="ga0d8841f9e90192dc17b14fc76dec7f92"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_OTHER_CHP   0x20</p>

TXN: other error CHP.

## EMV_CTLS_ADK_TXN_VK_OTHER_MSD <a href="#gaac48fc4727a406bee690b640d3df6506" id="gaac48fc4727a406bee690b640d3df6506"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_OTHER_MSD   0x19</p>

TXN: other error MSD.

## EMV_CTLS_ADK_TXN_VK_OTHER_START <a href="#ga717383ad982c35f07f6c9bf384635df3" id="ga717383ad982c35f07f6c9bf384635df3"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_OTHER_START   0x23</p>

TXN: other error start.

## EMV_CTLS_ADK_TXN_VK_READCARD_CHP <a href="#ga705cfb96130098083d0a3f089363e2ec" id="ga705cfb96130098083d0a3f089363e2ec"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_READCARD_CHP   0x1B</p>

TXN: read card CHP.

## EMV_CTLS_ADK_TXN_VK_READCARD_MSD <a href="#gac9da01e82d2192989dbdf4442d8d9602" id="gac9da01e82d2192989dbdf4442d8d9602"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_READCARD_MSD   0x27</p>

TXN: card read MSD.

## EMV_CTLS_ADK_TXN_VK_RETAP_START <a href="#ga0621161710d35823a1cf8a72abe3fa9f" id="ga0621161710d35823a1cf8a72abe3fa9f"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_RETAP_START   0x28</p>

TXN: retap required.

## EMV_CTLS_ADK_TXN_VK_START <a href="#ga28bb1fbe49e72b1e1981b12c1521e2d7" id="ga28bb1fbe49e72b1e1981b12c1521e2d7"></a>

<p>#define EMV_CTLS_ADK_TXN_VK_START   0x10</p>

TXN: Start of payWave.
