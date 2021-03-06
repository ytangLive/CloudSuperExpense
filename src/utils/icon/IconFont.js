/**
 * Created by ytang on 2018/9/10.
 */

import {createIconSet} from 'react-native-vector-icons'

const glyphMap = {
    se_canyin: 58948,
    se_jingdian: 58949,
    se_zhusu: 58950,
    se_duanxin: 58951,
    se_xinxi: 58953,
    se_xiangqu: 58956,
    se_canting: 58959,
    se_daohang: 58961,
    se_dizhi: 58962,
    se_dianping: 58963,
    se_duoyuyan: 58964,
    se_feiji: 58965,
    se_fuzhi: 58966,
    se_geren: 58967,
    se_gongjiaoche: 58968,
    se_guanbi: 58969,
    se_huoche: 58970,
    se_huobiduihuan: 58971,
    se_jianshen: 58973,
    se_kanguo: 58974,
    se_kongdiao: 58975,
    se_mudedi: 58977,
    se_qian: 58978,
    se_quguo: 58979,
    se_shijian: 58981,
    se_shoucang: 58982, 
    se_jiesuo: 58985,
    se_tingchechang: 58987,
    se_wuxianwangluo: 58988,
    se_xiangji:58994,
    se_xiangqu:58995,
    se_xingcheng:58996,
    se_youji:58997,
    se_zan:58999,
    se_listview:59003,
    se_xiyiji:59005,
    se_24hour:59006,
    se_tupian:59007,
    se_gouwu:59008,
    se_haitan:59014,
    se_huwai:59015,
    se_jichengche:59016,
    se_jincou:59017,
    se_langman:59018,
    se_lunchuan:59019,
    se_qinzi:59020,
    se_renwen:59021,
    se_shanchu:59022,
    se_shezhi:59023,
    se_shengqian:59024,
    se_shizhong:59025,
    se_shouji:59026,
    se_sousuo:59027,
    se_tianqi:59028,
    se_tupian1:59029,
    se_sys_menu:59030,
    se_sys_back:59031,
    se_youxian:59032,
    se_yule:59033,
    se_youhua:59034,
    se_transfer:59035,
    se_fengguang:59036,
    se_bike:59037,
    se_zonghe:59038,
    se_share:59045,
    se_radiobutton:59047,
    se_youyongchi:59052,
    se_pinglun:59053,
    se_bianji:59056,
    se_qifei:59057,
    se_jiangluo:59058,
    se_sys_back_1:59062,
    se_sys_menu_1:59063,
    se_shouqi:59064,
    se_xiala:59065,
    se_xiayibu:59066,
    se_geren2:59068,
    se_jinzhide:59069,
    se_route_2:59072,
    se_buxing:59073,
    se_chaping:59074,
    se_person_fill:59077,
    se_haoping:59078,
    se_jiaobiao:59079,
    se_lianjie:59080,
    se_collect_fill:59081,
    se_shouyefill:59082,
    se_home:59083,
    se_tixing:59084,
    se_xiangqufill:59085,
    se_roundclosefill:59089,
    se_gouwu_more:59092,
    se_gouwu_little:59093,
    se_location_fill:59094,
    se_location:59095,
    se_tab_shouqi:59099,
    se_tab_xiala:59100,
    se_dixiaofei:59101,
    se_gaoxiaofei:59102,
    se_jianyuede:59103,
    se_jingjide:59104,
    se_shushide:59105,
    se_gaoduande:59106,
    se_shehuade:59107,
    se_jinnang:59108,
    se_matou:59109,
    se_suoding:59110,
    se_wancan:59111,
    se_wucan:59112,
    se_zaocan:59113,
    se_zengjia:59114,
    se_zhuyi:59115,
    se_ziyouanpai:59116,
    se_roundclose:59117,
    se_activity:59118,
    se_activity_fill:59119,
    se_bankexing:59120,
    se_baoxue:59121,
    se_baoyu:59122,
    se_tianqi:59123,
    se_leidian:59124,
    se_qing:59125,
    se_kongdiao:59126,
    se_xiaoyu:59127,
    se_yin:59128,
    se_zenyaowan:59129,
    se_zhenxue:59130,
    se_zhenyu:59131,
    se_zhongxue:59132,
    se_zhongyu:59133,
    se_add:59134,
    se_fanhui:59135,
    se_addition_fill:59136,
    se_motuo:59137,
    se_addition:59138,
    se_barrage_fill:59139,
    se_barrage:59140,
    se_browse_fill:59141,
    se_bingbao:59142,
    se_feng:59143,
    se_mai:59144,
    se_wu:59145,
    se_yuxue:59146,
    se_shushidu:59147,
    se_listyule:59148,
    se_listbashi:59149,
    se_listfeiji:59150,
    se_listgouwu:59151,
    se_listhuoche:59152,
    se_listjingdian:59153,
    se_listmatou:59154,
    se_listzhusu:59155,
    se_listcanyin:59156,
    se_yuding:59157,
    se_free_activity:59158,
    se_jiaobiao_select:59159,
    se_safari:59160,
    se_zans:59161,
    se_kanguos:59162,
    se_listzuhe:59163,
    se_v_code:59164,
    se_browse:59165,
    se_brush:59166,
    se_brush_fill:59167,
    se_businesscard_fill:59168,
    se_businesscard:59169,
    se_camera_fill:59170,
    se_camera:59171,
    se_clock_fill:59172,
    se_clock:59173,
    se_close:59174,
    se_collection_fill:59175,
    se_collection:59176,
    se_coordinates_fill:59177,
    se_coordinates:59178,
    se_coupons_fill:59179,
    se_coupons:59180,
    se_createtask_fill:59181,
    se_createtask:59182,
    se_customerservice_fill:59183,
    se_customerservice:59184,
    se_delete_fill:59185,
    se_delete:59186,
    se_document:59187,
    se_document_fill:59188,
    se_dynamic_fill:59189,
    se_dynamic:59190,
    se_editor:59191,
    se_empty:59192,
    se_empty_fill:59193,
    se_enter:59194,
    se_feedback_fill:59195,
    se_feedback:59196,
    se_flag_fill:59197,
    se_flag:59198,
    se_flashlight:59199,
    se_flashlight_fill:59200,
    se_fullscreen:59201,
    se_group:59202,
    se_group_fill:59203,
    se_headlines_fill:59204,
    se_headlines:59205,
    se_homepage_fill:59206,
    se_homepage:59207,
    se_integral_fill:59208,
    se_integral:59209,
    se_interactive_fill:59210,
    se_interactive:59211,
    se_label:59212,
    se_label_fill:59213,
    se_like_fill:59214,
    se_like:59215,
    se_live_fill:59216,
    se_live:59217,
    se_lock_fill:59218,
    se_lock:59219,
    se_mail:59220,
    se_mail_fill:59221,
    se_manage_fill:59222,
    se_manage:59223,
    se_message:59224,
    se_message_fill:59225,
    se_mine:59226,
    se_mine_fill:59227,
    se_more:59228,
    se_narrow:59229,
    se_offline_fill:59230,
    se_offline:59231,
    se_order_fill:59232,
    se_order:59233,
    se_other:59234,
    se_people_fill:59235,
    se_people:59236,
    se_picture_fill:59237,
    se_picture:59238,
    se_play:59239,
    se_play_fill:59240,
    se_praise_fill:59241,
    se_praise:59242,
    se_prompt_fill:59243,
    se_prompt:59244,
    se_qrcode_fill:59245,
    se_qrcode:59246,
    se_redpacket_fill:59247,
    se_redpacket:59248,
    se_refresh:59249,
    se_remind_fill:59250,
    se_remind:59251,
    se_return:59252,
    se_right:59253,
    se_scan:59254,
    se_select_fill:59255,
    se_select:59256,
    se_send:59257,
    se_service_fill:59258,
    se_service:59259,
    se_setup_fill:59260,
    se_setup:59261,
    se_share_fill:59262,
    se_share:59263,
    se_shielding_fill:59264,
    se_shielding:59265,
    se_stealth_fill:59266,
    se_stealth:59267,
    se_success_fill:59268,
    se_success:59269,
    se_switch:59270,
    se_systemprompt_fill:59271,
    se_systemprompt:59272
  }

  const IconFont = createIconSet(glyphMap,'iconfont', 'iconfont.ttf')

  export {IconFont}