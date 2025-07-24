var libevt_8h =
[
    [ "Event", "libevt_8h.html#struct_event", [
      [ "handle", "libevt_8h.html#a61ce2a4d4a93bba3bc16271882996fc4", null ],
      [ "id", "libevt_8h.html#a17d665b03c4f1b180b8b7f01528cdad5", null ],
      [ "raised_data", "libevt_8h.html#ad7ade96785e05476902392560244c3bb", null ],
      [ "raised_flag", "libevt_8h.html#afeadc31c08472b8ac47b764334f44a50", null ],
      [ "raised_handle", "libevt_8h.html#aef5372589861f8e8e03fb14fe9bc2454", null ],
      [ "raised_timestamp", "libevt_8h.html#a015bae95273e811b516f0727c2e5c3b3", null ],
      [ "raised_version", "libevt_8h.html#ae0b2cf0a010d20371af2271a84e90e1b", null ]
    ] ],
    [ "EVT_API", "libevt_8h.html#a7e6311173510f4660ef3c2d2f234f429", null ],
    [ "UID", "libevt_8h.html#a83aa1253e238763a389f784ff78d569e", null ],
    [ "WaiterHandle", "libevt_8h.html#a7ba4b46d2481427f399dda29a67aaab6", null ],
    [ "EvtOptions", "libevt_8h.html#aaeb183a7a4790d18f96fa3755b1cbc42", [
      [ "EVT_OPT_DEFAULT", "libevt_8h.html#aaeb183a7a4790d18f96fa3755b1cbc42aef88812f61bd57953fff8fa42b9a6fd0", null ],
      [ "EVT_OPT_COPY_NEW_ONLY_EVENTS_IN_GET_BY_HANDLE_FUNC", "libevt_8h.html#aaeb183a7a4790d18f96fa3755b1cbc42a3256b804f3c9350097da691390b88f76", null ]
    ] ],
    [ "EvtSide", "libevt_8h.html#a45a13daa32f946f8dd819ee734fbf236", [
      [ "SIDE_RAISER", "libevt_8h.html#a45a13daa32f946f8dd819ee734fbf236ad699859f8546fbfb9ca1eab82e1a3586", null ],
      [ "SIDE_WAITER", "libevt_8h.html#a45a13daa32f946f8dd819ee734fbf236af860bd783aa79d81ad43ab8c164da7a8", null ],
      [ "SIDE_BOTH", "libevt_8h.html#a45a13daa32f946f8dd819ee734fbf236a367c08987c7a0052de86e72ffc318d97", null ]
    ] ],
    [ "OSEvents", "libevt_8h.html#a47782499daa82ca02ceec0dde367c162", [
      [ "OS_NOP", "libevt_8h.html#a47782499daa82ca02ceec0dde367c162a46e70b83f1a2498c9325b00cb2cf4e3e", null ],
      [ "OS_EVT_TIMER", "libevt_8h.html#a47782499daa82ca02ceec0dde367c162a55c5d33fac553b62a4a2988c2b53af96", null ],
      [ "OS_EVT_DOCK", "libevt_8h.html#a47782499daa82ca02ceec0dde367c162aec9658ee40107e166a1dac5d8efc29a1", null ],
      [ "OS_EVT_UNDOCK", "libevt_8h.html#a47782499daa82ca02ceec0dde367c162a37f3b245fe203131c78859388aa7d6ec", null ],
      [ "OS_EVT_SHUTDOWN", "libevt_8h.html#a47782499daa82ca02ceec0dde367c162ae25c516903050b08d5cd015e625bf3af", null ]
    ] ],
    [ "WaitPolicy", "libevt_8h.html#a7d8e96aac2c9ffc0945f804832b93305", [
      [ "WAIT_ANY", "libevt_8h.html#a7d8e96aac2c9ffc0945f804832b93305a2a6b8a36eb30e1a3e433912876977446", null ],
      [ "WAIT_ALL", "libevt_8h.html#a7d8e96aac2c9ffc0945f804832b93305a5ee1ddeefe68a1f2a66eb8fa6440f0ba", null ]
    ] ],
    [ "evt_destroy", "libevt_8h.html#af8fba20f70dc5d4274484f3d3eaf0fc2", null ],
    [ "evt_destroy_waiter", "libevt_8h.html#a09b61b8da3127a2c067df17d29be4f1f", null ],
    [ "evt_get_by_handle", "libevt_8h.html#a9fbabdeb66cb9541e4a4c146b7e1658a", null ],
    [ "evt_get_component_id", "libevt_8h.html#a2063afa16979be3952b393dd81bfd5f8", null ],
    [ "evt_get_options", "libevt_8h.html#aee16ce74c4a65f2ac2952bfd2f06dd27", null ],
    [ "evt_getVersion", "libevt_8h.html#a1a7daf80470e0ad3b570ec8fc680821d", null ],
    [ "evt_init", "libevt_8h.html#a799ffc9044180e2968690455cfb5d8cf", null ],
    [ "evt_init_waiter", "libevt_8h.html#a76bffba58228fdcd95671e17bf8ad041", null ],
    [ "evt_make_uid", "libevt_8h.html#a886f0a69446395a4013dc45380f4128f", null ],
    [ "evt_make_uid_os", "libevt_8h.html#afb47263c3337482a275b6cecf497204b", null ],
    [ "evt_peek_by_handle", "libevt_8h.html#a793d32176ee75ec31b31f1fb1cd6abbc", null ],
    [ "evt_raise", "libevt_8h.html#a2855073610dc2b9210a25468926cfecc", null ],
    [ "evt_set_options", "libevt_8h.html#a5e8063c63d656262cf58b6336b270502", null ],
    [ "evt_start_timer", "libevt_8h.html#af7e23c1a0a2e9a3caa6faf55c3aae1d4", null ],
    [ "evt_stop_timer", "libevt_8h.html#a6f6a659420a37bb9e1d1b07edfe419a2", null ],
    [ "evt_wait", "libevt_8h.html#adb08919483f2094f1927d67dad595278", null ],
    [ "evt_wait_by_handle", "libevt_8h.html#a57f2c3182b0ea176490a1735324de25e", null ],
    [ "evt_wait_group", "libevt_8h.html#ab26c08b8228d47a7b83144e5ec6d9c4e", null ],
    [ "get_dock_sts", "libevt_8h.html#adc9d1c34c7762b01b3b9830f1f70c6ed", null ],
    [ "EVT_ANY_HANDLE", "libevt_8h.html#a63090fb17900201d2517be5e555b7d87", null ],
    [ "EVT_DATA_SIZE", "libevt_8h.html#adb6493cdff512931871b2239b71215c2", null ],
    [ "EVT_INFINITE_WAIT", "libevt_8h.html#a35fc755ca0569e2acb759e0d683a2fb5", null ],
    [ "EVT_INVALID_HANDLE", "libevt_8h.html#a468c3786a00e38b1d61d083fa0b4ce96", null ],
    [ "EVT_MAX_COUNT", "libevt_8h.html#ac34c5452c5be1c370c9c3bf70044d4e0", null ]
];