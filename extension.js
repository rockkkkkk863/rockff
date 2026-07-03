import { lib, game, ui, get, ai, _status } from "../../noname.js";
export const type = "extension";
export default function () {
	return {
		name: "重塑系列削弱版", content: function (config, pack) {

		}, precontent: function (csxl2) {
			if (csxl2.enable) {				
				game.import('character', function () {
					var csxl2 = {
						name: 'csxl2',//武将包命名（必填）
						connect: true,//该武将包是否可以联机（必填）
						character: {
							ff_gai_liru: {
								sex: "male",
								group: "qun",
								hp: 3,
								skills: ["ffshengshigai", "ffbaishougai"],
								img: "extension/重塑系列削弱版/pic/ff_gai_liru.jpg",
								dieAudios: ["ext:重塑系列削弱版/audio/die/ff_gai_liru.mp3"],
							},
							ffwangcangai: {
								sex: "male",
								group: "wei",
								hp: 3,
								maxHp: 3,
								hujia: 0,
								skills: ["ffdenglougai", "ffqiaigai"],
								img: "extension/重塑系列削弱版/pic/ffwangcangai.jpg",
								trashBin: ["des:王粲，字仲宣，“建安七子”之一。王粲善属文，其诗赋为建安七子之冠，又与曹植并称“曹王”。王粲自少即有才名，为学者蔡邕所赏识。司徒想征辟他为黄门侍郎，王粲因为长安局势混乱，没有赴任，选择前往荆州依附刘表，但未受到刘表重用。 建安十三年（208年），丞相曹操南征荆州，刘表之子刘琮举州投降，王粲也归于曹操，深得曹氏父子信赖，被赐爵关内侯。建安十八年（213年），魏王国建立，王粲任侍中。建安二十二年（216年），随曹操南征孙权，于北还途中病逝，终年四十一岁。"],
								dieAudios: ["ext:重塑系列削弱版/audio/die/ffwangcangai.mp3"],
							},
							ffyangbiaogai: {
								sex: "male",
								group: "qun",
								hp: 3,
								maxHp: 3,
								hujia: 0,
								skills: ["ffjianqiangai", "ffshouhangai"],
								img: "extension/重塑系列削弱版/pic/ffyangbiaogai.jpg",
								dieAudios: ["ext:重塑系列削弱版/audio/die/ffyangbiaogai.mp3"],
							},
							ffweiyangai: {
								sex: "male",
								group: "shu",
								hp: 4,
								maxHp: 4,
								hujia: 0,
								skills: ["fffangugai", "ffqimougai"],
								img: "extension/重塑系列削弱版/pic/ffweiyangai.jpg",
								dieAudios: ["ext:重塑系列削弱版/audio/die/ffweiyangai.mp3"],
							},
							ffzhugelianggai: {
								sex: "male",
								group: "shu",
								hp: 3,
								skills: ["ffdingjigai", "ffchengguogai", "ffjiujiegai"],
								img: "extension/重塑系列削弱版/pic/ffzhugelianggai.jpg",
								isZhugong: true,
							},
							ffmachaogai: {
								sex: "male",
								group: "shu",
								hp: 4,
								skills: ["jinshigai", "juejigai"],
								img: "extension/重塑系列削弱版/pic/ffmachaogai.jpg",
							},
							fflvmenggai: {
								sex: "male",
								group: "wu",
								hp: 4,
								skills: ["ffdujianggai", "ffamenggai"],
								img: "extension/重塑系列削弱版/pic/fflvmenggai.jpg",
							},
							ffzhangjiaogai: {
								sex: "male",
								group: "qun",
								hp: 3,
								skills: ["fftaipinggai", "fffushuigai", "fftiangonggai"],
								isZhugong: true,
								img: "extension/重塑系列削弱版/pic/ffzhangjiaogai.jpg",
							},
							ffguojiagai: {
								sex: "male",
								group: "wei",
								hp: 3,
								skills: ["ffxianmou", "new_reyiji"],
								img: "extension/重塑系列削弱版/pic/ffguojiagai.jpg",
							},
							ffsunshangxianggai: {
								sex: "female",
								group: "wu",
								hp: 3,
								skills: ["ffjianwugai", "ffzhuchenggai"],
								doubleGroup: ["shu", "wu"],
								img: "extension/重塑系列削弱版/pic/ffsunshangxianggai.jpg",
							},
							ffmihenggai: {
								sex: "male",
								group: "qun",
								hp: 3,
								skills: ["ffgumagai", "ffkuangbinggai"],
								img: "extension/重塑系列削弱版/pic/ffmihenggai.jpg",
							},
							ffjiaxugai: {
								sex: "male",
								group: "qun",
								hp: 3,
								skills: ["ffluanchenggai", "fffujigai"],
								img: "extension/重塑系列削弱版/pic/ffjiaxugai.jpg",
							},
							ffxuyougai: {
								sex: "male",
								group: "wei",
								hp: 3,
								skills: ["ffshigonggai", "ffqingmangai", "ffsiyangai"],
								img: "extension/重塑系列削弱版/pic/ffxuyougai.jpg",
							},
							ffgaotanglonggai: {
								sex: "male",
								group: "wei",
								hp: 3,
								skills: ["ffzaijiegai", "ffgongquegai"],
								img: "extension/重塑系列削弱版/pic/ffgaotanglonggai.jpg",
							},
							ffsimayigai: {
								sex: "male",
								group: "wei",
								hp: 3,
								skills: ["ffmoubiangai", "fflanggugai"],
								doubleGroup: ["wei", "jin"],
								img: "extension/重塑系列削弱版/pic/ffsimayigai.jpg",
							},
							ffsunlianggai: {
								sex: "male",
								group: "wu",
								hp: 3,
								skills: ["ffyanzhaogai", "ffmouzhugai", "ffwufenggai"],
								isZhugong: true,
								img: "extension/重塑系列削弱版/pic/ffsunlianggai.jpg",
							},
							ff_zhangjinyungai: {
								sex: "female",
								group: "shu",
								hp: 3,
								skills: ["ffyinsigai", "ffjijiaogai"],
								img: "extension/重塑系列削弱版/pic/ffzhangjinyungai.jpg",
							},
							ff_sunhegai: {
								sex: "male",
								group: "wu",
								hp: 3,
								skills: ["ffpanqigai", "ffzhangqiugai"],
								img: "extension/重塑系列削弱版/pic/ffsunhegai.jpg",
							},
							ff_pangtonggai: {
								sex: "male",
								group: "shu",
								hp: 3,
								skills: ["ffhongtugai", "ffliancegai"],
								img: "extension/重塑系列削弱版/pic/ffpangtonggai.jpg",
							},
							ff_beimihugai: {
								sex: "female",
								group: "qun",
								hp: 3,
								skills: ["fftianzhaogai", "ffyaohuogai"],
								img: "extension/重塑系列削弱版/pic/ffbeimihugai.jpg",
							},
							ff_yujigai: {
								sex: "male",
								group: "qun",
								hp: 4,
								skills: ["ffyaofa","ffjiyao"],
								img: "extension/重塑系列削弱版/pic/ffyujigai.jpg",
							},
							ff_xiahoudungai: {
								sex: "male",
								group: "wei",
								hp: 4,
								skills: ["ffshimugai", "ffbujigai"],
								img: "extension/重塑系列削弱版/pic/ffxiahoudungai.jpg",
							},
							ff_yangzhengai: {
								sex: "male",
								group: "qun",
								hp: 3,
								skills: ["ffsizhigai", "ffzhengqinggai"],
								img: "extension/重塑系列削弱版/pic/ffyangzhengai.jpg",
							},
							ff_puyuangai: {
								sex: "male",
								group: "shu",
								hp: 4,
								skills: ["ffbailiangai", "ffyishuigai"],
								img: "extension/重塑系列削弱版/pic/ffpuyuangai.jpg",
							},
							ff_xunyuxunyougai: {
								sex: "male",
								group: "wei",
								hp: 4,
								skills: ["ffxunzhigai", "ffgouzhugai"],
								img: "extension/重塑系列削弱版/pic/ffxunyuxunyougai.jpg",
							},
							ff_liuhuigai: {
								sex: "male",
								group: "qun",
								hp: 4,
								skills: ["ffgeyuangai", "ffjieshugai"],
								img: "extension/重塑系列削弱版/pic/ffliuhuigai.jpg",
							},
							ff_chenwudongxigai: {
								sex: "male",
								group: "wu",
								hp: 4,
								skills: ["ffduanxiegai", "fffenminggai"],
								img: "extension/重塑系列削弱版/pic/ffchenwudongxigai.jpg",
							},
							ff_caozhigai: {
								sex: "male",
								group: "wei",
								hp: 3,
								skills: ["ffzhuozhanggai", "ffhuaifanggai"],
								img: "extension/重塑系列削弱版/pic/ffcaozhigai.jpg",
							},
							ff_xuyanzhangmigai: {
								sex: "male",
								group: "wu",
								hp: 3,
								skills: ["ffxunjingai", "ffzeliugai"],
								img: "extension/重塑系列削弱版/pic/ffxuyanzhangmigai.jpg",
							},
							w_zhengquangai: {
								sex: 'male',
								group: 'qun',
								hp: 3,
								skills: ['w_hanlingai', 'w_changyinggai'],
								img: "extension/重塑系列削弱版/pic/wzhengquangai.jpg",
							},
							ff_hanshaogai: {
								sex: 'male',
								group: 'qun',
								hp: 3,
								skills: ['ffchenghegai', 'clanxumin'],
								img: "extension/重塑系列削弱版/pic/ffhanshaogai.jpg",
							},
							ff_luxungai: {
								sex: 'male',
								group: 'wu',
								hp: 3,
								skills: ['ffjieyigai', 'fffenyinggai'],
								img: "extension/重塑系列削弱版/pic/ffluxungai.jpg",
							},
							ff_taishicigai: {
								sex: 'male',
								group: 'qun',
								hp: 4,
								skills: ['ffchouyigai', 'ffduliegai'],
								img: "extension/重塑系列削弱版/pic/fftaishicigai.jpg",
							},
							ff_menghuogai: {
								sex: 'male',
								group: 'shu',
								hp: 4,
								maxHp: 7,
								skills: ['fffupangai', 'ffyihangai'],
								img: "extension/重塑系列削弱版/pic/ffmenghuogai.jpg",
							},
							ffsp_xuyougai: {
								sex: 'male',
								group: 'qun',
								hp: 3,
								skills: ['ffjinaogai', 'ffjucuigai', "ffjinmiegai"],
								img: "extension/重塑系列削弱版/pic/ffspxuyougai.jpg",
							},
							ff_zhuronggai: {
								sex: 'female',
								group: 'shu',
								hp: 4,
								skills: ['ffmanqigai', 'ffchangbiaogai'],
								img: "extension/重塑系列削弱版/pic/ffzhuronggai.jpg",
							},
							ff_xuexugai: {
								sex: 'male',
								group: 'wu',
								hp: 3,
								skills: ['ffkuiruogai', 'ffguanpinggai'],
								img: "extension/重塑系列削弱版/pic/ffxuexugai.jpg",
							},
							ff_jushougai: {
								sex: 'male',
								group: 'qun',
								hp: 3,
								skills: ['ffxishigai', 'ffhuicegai'],
								img: "extension/重塑系列削弱版/pic/ffjushougai.jpg",
							},
							ff_xuncangai: {
								sex: 'male',
								group: 'wei',
								hp: 3,
								skills: ['ffweishengai', 'fffenchaigai', "ffshangshengai", "clandaojie"],
								img: "extension/重塑系列削弱版/pic/ffxuncangai.jpg",
							},
							ff_simaaigai: {
								sex: 'male',
								group: 'jin',
								hp: 4,
								skills: ['ffxiangzhonggai', 'ffshuzhugai'],
								img: "extension/重塑系列削弱版/pic/ffsimaaigai.jpg",
							},
							ff_jiangwanfeiyigai: {
								sex: 'male',
								group: 'shu',
								hp: 3,
								skills: ['ffzuolonggai', 'ffchouyegai'],
								img: "extension/重塑系列削弱版/pic/ffjiangwanfeiyigai.jpg",
							},
							ff_caopigai:{
								sex: 'male',
								group: 'wei',
								hp: 3,
								skills: ['ffduosigai', 'ffdianlungai'],
								img: "extension/重塑系列削弱版/pic/ffcaopigai.jpg",						
							},
							ff_lujigai:{
								sex: 'male',
								group: 'wu',
								hp: 3,
								skills: ['ffhuaijugai', 'ffhuntiangai'],
								img: "extension/重塑系列削弱版/pic/fflujigai.jpg",						
							},
							ff_xiahouhuigai:{
								sex: 'female',
								group: 'jin',
								hp: 3,
								skills: ['ffshidugai', 'ffshudugai'],
								img: "extension/重塑系列削弱版/pic/ffxiahouhuigai.jpg",								
							},
							ff_wangguanggai:{
								sex: 'male',
								group: 'wei',
								hp: 3,
								skills: ['fflilungai', 'ffjianjigai'],
								img: "extension/重塑系列削弱版/pic/ffwangguanggai.jpg",								
							},
							ff_xiexuangai:{
								sex: 'male',
								group: 'jin',
								hp: 4,
								skills: ['ffjiebinggai', 'ffshuzegai'],
								img: "extension/重塑系列削弱版/pic/ffxiexuangai.jpg",								
							},
							ff_wangyigai:{
								sex: 'female',
								group: 'wei',
								hp: 3,
								skills: ['ffhuaixingai', 'ffzhenliegai',"ffmijigai"],
								img: "extension/重塑系列削弱版/pic/ffwangyigai.jpg",								
							},
							ff_ruanjigai:{
								sex: 'male',
								group: 'wei',
								hp: 3,
								skills: ['ffyucigai', 'ffxuanxingai',"ffzuixiaogai"],
								img: "extension/重塑系列削弱版/pic/ffruanjigai.jpg",							
							},
							ff_guohuaigai:{
								sex: 'male',
								group: 'wei',
								hp: 4,
								skills: ['ffjingcegai'],
								img: "extension/重塑系列削弱版/pic/ffguohuaigai.jpg",							
							},
							ff_zhugezhangai:{
								sex: 'male',
								group: 'shu',
								hp: 3,
								skills: ['ffyingzhangai', 'ffqingjuegai'],
								img: "extension/重塑系列削弱版/pic/ffzhugezhangai.jpg",							
							},
							ff_jiangweigai:{
								sex: 'male',
								group: 'shen',
								hp: 4,
								skills: ['ffxuangugai', 'ffjinzhigai'],
								img: "extension/重塑系列削弱版/pic/ffjiangweigai.jpg",						
							},
							ff_zhouqungai:{
								sex: 'male',
								group: 'shu',
								hp: 4,
								skills: ['ffshizhenggai', 'ffxuanfeigai'],
								img: "extension/重塑系列削弱版/pic/ffzhouqungai.jpg",								
							},
							ff_fazheng_gai:{
								sex: 'male',
								group: 'qun',
								hp: 3,
								skills: ['fflifeigai', 'ffguisuigai',"ffzeqigai"],
								img: "extension/重塑系列削弱版/pic/fffazhenggai.jpg",							
							},
							ff_sp_zhugeliang_gai:{
								sex: 'male',
								group: 'shu',
								hp: 3,
								maxHp:7,
								skills: ['ffdingmougai', 'ffliaoyuangai'],
								img: "extension/重塑系列削弱版/pic/ffspzhugelianggai.jpg",							
							},
							ff_xuhuang_gai:{
								sex: 'male',
								group: 'wei',
								hp: 4,
								skills: ['ffshaozigai', 'ffxuzhangai'],	
								img: "extension/重塑系列削弱版/pic/ffxuhuanggai.jpg",						
							},	
							ff_lusu_gai:{
								sex: 'male',
								group: 'wu',
								hp: 3,
								skills: ['fflianliugai', 'fftaojingai'],
								img: "extension/重塑系列削弱版/pic/fflusugai.jpg",								
							},
							ff_sunjian_gai:{
								sex: 'male',
								group: 'wu',
								hp: 4,
								skills: ['ffzhenjugai', 'ffbingweigai'],
								img: "extension/重塑系列削弱版/pic/ffsunjiangai.jpg",								
							},
							ff_sp_liubei_gai:{
								sex: 'male',
								group: 'qun',
								hp: 4,
								skills: ['fflunxionggai', 'ffjingleigai'],
								img: "extension/重塑系列削弱版/pic/ffspliubeigai.jpg",							
							},
							ff_ruanyu_gai:{
								sex: 'male',
								group: 'wei',
								hp: 3,
								skills: ['ffxingzuogai', 'ffmiaoxiangai'],
								img: "extension/重塑系列削弱版/pic/ffruanyugai.jpg",							
							},
							ff_xunyu_gai:{
								sex: 'male',
								group: 'wei',
								hp: 3,
								skills: ['ffxieguogai', 'ffyujuegai',"clandaojie"],
								img: "extension/重塑系列削弱版/pic/ffxunyugai.jpg",							
							},
							ff_simahui_gai:{
								sex: 'male',
								group: 'qun',
								hp: 3,
								skills: ['ffmingzhigai', 'ffjianzhigai'],
								img: "extension/重塑系列削弱版/pic/ffsimahuigai.jpg",										
							},	
							ff_jiananfeng_gai:{
								sex: 'female',
								group: 'jin',
								hp: 7,
								skills: ['ffhunjuegai',"ffduiyuangai"],
								img: "extension/重塑系列削弱版/pic/ffjiananfenggai.jpg",							
							},
							ff_sunyi:{
								sex: 'male',
								group: 'wu',
								hp: 5,
								skills: ['ffqlxuezao',"ffqlxiaozhen"],
								img: "extension/重塑系列削弱版/pic/ffsunyi.jpg",															
							},	
							ff_yanwen_gai: {
								sex: 'male',
								group: 'qun',
								hp: 3,
								skills: ['ffyeqiangai', "ffhuchenggai"],
								img: "extension/重塑系列削弱版/pic/ffyanwengai.jpg",
							},
							ff_liuan_gai: {
								sex: 'male',
								group: 'shu',
								hp: 4,
								skills: ['ffxunyegai', "ffdanqigai"],
								img: "extension/重塑系列削弱版/pic/ffliuangai.jpg",
							},
							ff_mengchangjun: {
								sex: 'male',
								group: 'qun',
								hp: 3,
								skills: ['ffgoudao', "fffenquan", "oldniepan", "ffsanku"],
								img: "extension/重塑系列削弱版/pic/ff_mengchangjun.jpg",
							},																																																																																																																																
						},																	
						translate: {
							csxl2: "重塑系列削弱版",
							"重塑系列削弱版": "重塑系列削弱版",
							ff_gai_liru: "李儒",
							ffshengshigai: "胜势",
							ffshengshigai_info: "每回合每项限一次，你可以视为响应一张以你为目标且：1.与上次响应的使用者不同；2.与上次响应的牌名不同；3.与上次响应需使用或打出的牌名不同的牌。每满足一项，你摸一张牌",
							ffbaishougai: "败守",
							ffbaishougai_info: "其他角色的出牌阶段限一次，其可以将一张牌当【兵临城下】对你使用。你死亡后，此技能的目标改为杀死你的角色",
							ffzhugelianggai: "诸葛亮",
							ffdingjigai: "定基",
							ffdingjigai_info: "出牌阶段限一次，你可以依次执行：1.将手牌弃至体力上限；2.发动一次〖散谣〗；3.发动一次〖蓄发〗；4.将手牌摸至体力上限。",
							ffchengguogai: "承国",
							ffchengguogai_info: "锁定技，你的主要阶段视为出牌阶段。出牌阶段结束时，你将体力上限和体力值调整至本阶段你使用牌数。",
							ffjiujiegai: "九阶",
							ffjiujiegai_info: "主公技，限定技，其他蜀势力角色死亡时，其可令你于本回合结束时执行一个额外回合。",
							ffwangcangai: "王粲",
							ffyangbiaogai: "杨彪",
							ffdenglougai: "登楼",
							"ffdenglougai_info": "转换技，出牌阶段，你可以弃一张牌并：1用全部手牌交换牌堆顶等量的牌； 2用全部手牌换回仍在牌堆中的这些牌。",
							ffdenglougaix: "登楼",
							ffqiaigai: "七哀",
							"ffqiaigai_info": "锁定技，你每获得7张牌，便视为使用任意张本回合未以此法使用过且字数和为7的即时牌，然后令此技能数值-1，若数值为0，则重置为7。",
							ffjianqiangai: "谏迁",
							"ffjianqiangai_info": "锁定技，一名角色使用第X张牌后，你重铸X 张牌，若其中没有与之花色相同的牌，其崩坏，否则你失去此技能并执行一次“守汉”。",
							ffshouhangai: "守汉",
							"ffshouhangai_info": "出牌阶段，你可以依次执行直到无法执行：1.弃置2张牌；2.使用1张【杀】；3.回复1点体力；4.摸2张牌并获得“谏迁”。",
							ffweiyangai: "魏延",
							"visible_fffangugaix": "明置",
							fffangugai: "反骨",
							"fffangugai_info": "锁定技，你使用基本牌或普通锦囊牌后，获得之并明置。你无法使用明置牌。其他角色可以对你使用你的明置牌。",
							ffqimougai: "奇谏",
							"ffqimougai_info": "转换技，出牌阶段，你可以①弃X张牌；②摸X张牌。(X为明置牌与暗置牌数之差且至少为1)  周始：失去一点体力。",
							ffmachaogai: "马超",
							jinshigai: "锦狮",
							jinshigai_info: "出牌阶段每项各限一次，你可以:1.重铸所有基本牌；2.重铸所有非基本牌；3.重铸所有【杀】和装备牌。",
							juejigai: "绝骑",
							juejigai_info: "锁定技，连招技（两张同类型的牌），你摸一张牌且你使用的下一张牌无次数和距离限制。",
							fflvmenggai: "吕蒙",
							ffdujianggai: "渡江",
							ffdujianggai_info: "锁定技，当你于一轮内第X次使用一种花色的牌时，该牌额外结算一次且阿蒙视为未发动过。(X为你本轮使用过的牌数)",
							ffamenggai: "阿蒙",
							ffamenggai_info: "出牌阶段限一次，你可以重铸至多X张牌，然后令X增加或减少等量点。",
							ffzhangjiaogai: "张角",
							fftaipinggai: "太平",
							fftaipinggai_info: "当你造成或受到伤害后，你可以展示任意张手牌并摸等量的牌，分配这些牌，并弃置其余未分配的牌。(每名角色每次限三张)。",
							fffushuigai: "浮水",
							fffushuigai_info: "一名角色首次进入濒死状态时，你可以发动一次【太平】，然后你可以对其发动【急救】。",
							fftiangonggai: "天公",
							fftiangonggai_info: "主公技，其他群势力角色的回合开始时，你可以发动一次【太平】。",
							ffguojiagai: "郭嘉",
							ffxianmou: "先谋",
							ffxianmou_info: "转换技，你的判定牌/手牌离开处理区/手牌区时，你可将失去方式改为①使用：②分配；③卜算。",
							ffsunshangxianggai: "孙尚香",
							ffjianwugai: "剑舞",
							ffjianwugai_info: "吴势力技，当一张装备牌进入弃牌堆时，你可以重铸任意张手牌并获得之。若此时是你的回合内，变更势力为【蜀】。",
							ffzhuchenggai: "筑城",
							ffzhuchenggai_info: "蜀势力技，出牌阶段，你可以将手牌调整至你装备区牌数，若你因此弃了至少2张牌，你可以获得场上一张牌，否则变更势力为【吴】。",
							ffmihenggai: "祢衡",
							ffgumagai: "鼓骂",
							ffgumagai_info: "若你的手牌数等于体力值，你可以将一张牌当无次数限制的【杀】或【过河拆桥】使用。",
							ffkuangbinggai: "狂病",
							ffkuangbinggai_info: "转换技，出牌阶段每名角色限一次，你可以选择一名①手牌数等于体力值的角色②手牌数不等于体力值的角色，然后你弃置一张牌并与其交换体力值或手牌。",
							ffjiaxugai: "贾诩",
							ffluanchenggai: "乱城",
							ffluanchenggai_info: "限定技，大于1的伤害结算后，你可以失去此技能并可以令一名其他角色获得此技能,然后你使用一张牌(此牌不可被响应)，。",
							fffujigai: "复计",
							fffujigai_info: "转换技，锁定技，你可以将一张牌当①【酒】使用；②【杀】使用。然后你可以令一名其他角色获得此技能所在状态的效果直到你下回合开始。",
							fffujigai_jiu: "复计-酒",
							fffujigai_sha: "复计-杀",
							ffxuyougai: "许攸",
							ffshigonggai: "恃功",
							ffshigonggai_info: "转换技，锁定技，当你成为①非伤害牌的目标时，你对使用者造成1点雷电伤害②伤害牌的目标时，你重铸所有非伤害牌。",
							ffqingmangai: "轻慢",
							ffqingmangai_info: "当你造成伤害后，你可以令受伤角色视为对你使用一张【杀】，若如此做，你视为使用一张本回合未以此法使用过的基本牌。",
							ffsiyangai: "肆言",
							ffsiyangai_info: "当你受到伤害后，你可以你横置或翻面，若如此做，你视为使用一张本回合未以此法使用过的锦囊牌。",
							ffgaotanglonggai: "高堂隆",
							ffzaijiegai: "灾诫",
							ffzaijiegai_info: "当一名角色受到伤害后，若其有手牌，你可以令其发动一次【明鉴】与【恢拓】。",
							ffgongquegai: "宫鹊",
							ffgongquegai_info: "出牌阶段各限一次，你可以令手牌数全场唯一最多/最少的角色将一张牌当【五谷丰登】/无中声音使用，重复此操作直到该角色手牌数不为全场最多/最少。",
							ffsimayigai: "司马懿",
							fflanggugai: "狼顾",
							fflanggugai_info: "你可以观看并使用牌堆顶/底的牌，若与上次使用的方向不同，你变更势力至晋/魏。",
							ffmoubiangai: "谋变",
							ffmoubiangai_info: "转换技，当以你为目标的即时牌结算后，你可以①用X张牌交换该牌；②用上次获得的手牌交换牌堆顶X张牌(若势力为晋则改为牌堆底)",
							fflanggugai_top: "狼顾-顶",
							fflanggugai_bottom: "狼顾-底",
							ffsunlianggai: "孙亮",
							ffyanzhaogai: "宴诏",
							ffyanzhaogai_info: "转换技，你使用牌指定目标后，你可以将之改为①【五谷丰登】②【杀】结算。",
							ffmouzhugai: "谋诛",
							ffmouzhugai_info: "你可以视为使用一张【酒】或中央区的一张牌，然后弃置一名角色本回合获得的所有牌，若其中不包含与使用牌相同名字的牌，你失去1点体力。",
							ffwufenggai: "五凤",
							ffwufenggai_info: "主公技，其他吴势力角色每失去5张牌，你便回复1点体力。",
							ff_zhangjinyungai: "张瑾云",
							ffyinsigai: "禋祀",
							ffyinsigai_info: "锁定技，牌堆顶三张牌始终对你可见。每回合每项限一次，你可以将一张/两张/三张牌当牌堆顶第一张/二张/第三张牌使用（仅限基本牌或普通锦囊牌且无次数限制）",
							ffjijiaogai: "继椒",
							ffjijiaogai_info: "出牌阶段，若你的手牌数与本回合此前发动此技能时均不同，你可以以任意顺序依次交换手牌、牌堆顶三张牌、本回合弃牌堆随机三张牌。",
							ff_sunhegai: "孙和",
							ffpanqigai: "判棋",
							ffpanqigai_info: "每轮开始时或当你受到伤害后，你可以将一张牌当【闪电】置入一名角色的判定区。该牌进入弃牌堆后，复原〖樟囚〗。",
							ffzhangqiugai: "樟囚",
							ffzhangqiugai_info: "每名角色限一次，其可以将手牌与牌堆顶三张牌交换，视为对你使用一张【桃】或【杀】。",
							ff_beimihugai: "卑弥呼",
							ffyaohuogai: "妖惑",
							ffyaohuogai_info: "当一名角色使用牌指定目标时，你可以移去一张蓄谋牌，然后你摸一张牌且该牌视为移去的牌结算。（目标不变）",
							fftianzhaogai: "天照",
							fftianzhaogai_info: "准备阶段或当你受到伤害后，你可以重铸任意张牌，然后选择一项1.用重铸的牌蓄谋2.将你的蓄谋牌与牌堆顶等量张牌交换。",
							ff_pangtonggai: "庞统",
							ffhongtugai: "鸿图",
							ffhongtugai_info: "出牌阶段各限一次，你可令一名角色将序号张牌当1.[树上开花]2.[笑里藏刀]3.[兵临城下]使用。若不为你，你可依次使用转化底牌。",
							ffliancegai: "连策",
							ffliancegai_info: "其他角色于你的回合内使用牌结算后，你可以视为使用一张【铁索连环】或【火攻】。",
							ff_yujigai: "于吉",
							ffhuanhuogai: "幻惑",
							ffhuanhuogai_info: "转换技，①出牌阶段或当你受到伤害后，你可以令任意名其他角色各明置其体力值张牌②你可以视为使用任意一张明置即时牌使用并弃置该牌(回合开始时切换至①)。",
							ff_xiahoudungai: "夏侯惇",
							ffshimugai: "嗜目",
							ffshimugai_info: "锁定技，当你的手牌数变化后，若为奇数，你选择一项并删除之：1.摸一张牌；2.弃一张牌；3.将手牌数调整至体力值。若均已选择，你回复一点体力并重置所有选项。",
							ffbujigai: "不羁",
							ffbujigai_info: "出牌阶段限两次，你可以将一半手牌(向上取整)当【决斗】使用并失去一点体力，若对目标造成了伤害，则你可以依次使用转化底牌。",
							ff_yangzhengai: "杨震",
							ffsizhigai: "四知",
							ffsizhigai_info: "每轮每项限一次，你可以将手牌数调整至4/3/2/1以视为使用杀/闪/桃/酒。",
							ffsizhigai_sha: "杀",
							ffsizhigai_shan: "闪",
							ffsizhigai_tao: "桃",
							ffsizhigai_jiu: "酒",
							ffzhengqinggai: "正清",
							ffzhengqinggai_info: "你使用基本牌后，你可以令一名其他角色执行同名基本牌效果的【四知】。",
							ff_puyuangai: "蒲元",
							ffbailiangai: "百炼",
							ffbailiangai_info: "出牌阶段，你可以依次重铸一张1.【杀】2.伤害牌3.装备牌。若以此法重铸了3张牌，你获得其中一张。(因此技能获得的牌无次数限制)",
							ffyishuigai: "易水",
							ffyishuigai_info: "当一回合内进入牌堆的牌达到四种花色后，你可以弃置两张花色或牌名相同的牌，以获得三张本回合进入弃牌堆的牌（每回合每个牌名限获得一次）。",
							ff_xunyuxunyougai: "荀彧荀攸",
							ffxunzhigai: "荀志",
							ffxunzhigai_info: "锁定技，你不因此发动技能时，若你的牌花色均不同/均相同，你发动【节命】/你获得【蹈节】。",
							ffgouzhugai: "苟渚",
							ffgouzhugai_info: "锁定技，你视为拥有【驱虎】和一回合限一次的【奇策】。当你受到1点伤害后，你发动【智愚】。",
							ffgouzhugai_qice: "奇策",
							ff_liuhuigai: "刘徽",
							ffgeyuangai: "割圆",
							ffgeyuangai_info: "锁定技，你使用牌时/准备阶段，你摸1/3张牌并添加1/3个本轮你不可使用的点数。每添加一组勾股数，你可以获得场上一张牌。",
							ffjieshugai: "解术",
							ffjieshugai_info: "出牌阶段，若你不能使用的点数个数至少为：6/8/10/12个，你可以分配一点伤害。",
							ff_chenwudongxigai: "陈武董袭",
							ffduanxiegai: "断绁",
							ffduanxiegai_info: "若你的手牌数与体力值/装备区牌数/中央区牌数相等，你可以将一张牌当[铁索连环]使用，并对因此重置的角色各造成1点伤害。",
							fffenminggai: "奋命",
							fffenminggai_info: "当你造成伤害后，你可以1.失去1点体力2.弃1张装备牌3.横置。然后受伤角色执行其余项。",
							ff_caozhigai: "曹植",
							ffzhuozhanggai: "酌章",
							ffzhuozhanggai_info: "你使用【酒】后，你可以摸至多3张牌，然后你使用的下X张牌无次数与距离限制。(X为你少摸的张数)",
							ffhuaifanggai: "怀芳",
							ffhuaifanggai_info: "当你需要使用【酒】时，你可以用非基本牌与牌堆顶议事，若意见：不同，你将你的议事牌当【酒】使用；相同，你将你的议事牌置于牌堆顶。",
							ff_xuyanzhangmigai: "许宴张弥",
							ffxunjingai: "循进",
							ffxunjingai_info: "锁定技，当你获得或失去手牌时，你将【择流】中【】的内容向右移动，当你造成或受到伤害时，你将【择流】中【】的内容向左移动。",
							ffzeliugai: "择流",
							ffzeliugai_info: "转换技，锁定技，当你使用牌结算后，你①【将手牌摸至体力上限】或【弃置任意张牌】②【重铸任意张牌】或【受到一点无来源伤害】",
							w_zhengquangai: '郑泉',
							w_hanlingai: '瞰鳞',
							w_hanlingai_info: '出牌阶段限一次，你可以执行下列一项：①视为使用一张【酒】或冰【杀】（无次数限制）；②摸x张牌；③执行另一项（x为本回合此技能发动过的选项数）。',
							w_changyinggai: '畅萦',
							w_changyinggai_info: '锁定技，你使用本回合使用第x张牌后，你发动“瞰鳞”的第x项。',
							ff_hanshaogai: "韩韶",
							ffchenghegai: "成和",
							ffchenghegai_info: "转换技，限定技，你使用非基本牌时，你可以将之改为①【洞烛先机】②【顺手牵羊】。然后你重置你武将牌上的前X个技能。(X为满足的项数：1.其手牌数变化2.场上牌数变化3.你区域内的牌数变化)",
							ff_luxungai: "陆逊",
							ffjieyigai: "解衣",
							ffjieyigai_info: "转换技，①你可以记录手牌数以视为使用【无懈可击】②你可以将手牌数调整至记录值以视为使用你使用的上一张牌。",
							fffenyinggai: "焚营",
							fffenyinggai_info: "出牌阶段限两次，你可以将任意张手牌当【火攻】使用，若造成伤害，你交换手牌与中央区。",
							ff_taishicigai: "太史慈",
							ffchouyigai: "酬义",
							ffchouyigai_info: "你的回合内，当其他角色对你使用牌时，你可以调整你或其1点体力。此牌结算后，若你与其体力值相等/不等，你重置/弃两张牌。",
							ffduliegai: "笃烈",
							ffduliegai_info: "出牌阶段，你可以横置并摸两张牌。然后你可以选择一张伤害牌，令一名其他角色对你使用之。",
							ff_menghuogai: "孟获",
							fffupangai: "复叛",
							fffupangai_info: "每阶段限一次，当你的手牌数或体力值变化后，你可以执行一项，然后执行邻项：1.将手牌数调整至7；2.邻项数值-1；3.将体力值调整至7；4.将一种类型的所有牌当【南蛮入侵】使用。",
							ffyihangai: "夷汉",
							ffyihangai_info: "锁定技，你的第已损失体力值/体力值个阶段视为摸牌/出牌阶段。",
							ffsp_xuyougai: "许攸",
							ffjinaogai: "矜傲",
							ffjinaogai_info: "锁定技，每回合限一次，你造成/受到伤害时，你摸失效技能数张牌。当你造成/受到致命伤害时，复原所有技能。",
							ffjucuigai: "炬摧",
							ffjucuigai_info: "出牌阶段限一次，你可以将一张牌当目标场上牌亦视为展示牌的【火攻】使用,此牌额外指定目标的邻家。",
							ffjinmiegai: "烬灭",
							ffjinmiegai_info: "限定技，连招技（锦囊牌+锦囊牌+锦囊牌），你可以对此牌的任意名目标角色各造成1点火焰伤害。",
							ff_zhuronggai: "祝融",
							ffmanqigai: "蛮妻",
							ffmanqigai_info: "出牌阶段限两次，若你的体力值/手牌数/出杀次数均大于0，你可以交换其中的任意两项，然后另一项的数值-1并视为使用一张【南蛮入侵】。",
							ffchangbiaogai: "长标",
							ffchangbiaogai_info: "你可以如手牌般使用或打出一张<b>中央区</b>内的【杀】，然后你移去之并摸一张牌。",
							ff_xuexugai: "薛珝",
							ffkuiruogai: "窥弱",
							ffkuiruogai_info: "韵律技，每回合限一次，平：当你摸牌后，你可以分配1点伤害；仄：当你造成伤害后，你可以分配牌堆顶一张牌。因此受伤/获得牌的角色下次成为你使用牌的目标时，你对其造成1点伤害/摸一张牌。转韵：展示牌。",
							ffguanpinggai: "观评",
							ffguanpinggai_info: "出牌阶段限一次，你可以视为使用一张【火攻】，若其手牌数不小于你本回合发动此技能的次数，此技能视为未发动过。",
							ff_xuncangai: "荀粲",
							ffweishengai: "慰身",
							ffweishengai_info: "你可将两张牌当任一基本牌使用；若转化底牌包含或被使用牌为属性伤害牌，目标角色获得不为伤害牌的转化底牌并回复1点体力。",
							fffenchaigai: "分钗",
							fffenchaigai_info: "觉醒技，其他角色首次因你获救时，你与其互相追思对方的锁定技并于本回合结束时依次执行一个额外回合。",
							ffshangshengai: "伤神",
							ffshangshengai_info: "锁定技，回合进行至你追思的角色的空置座次时，你回复1点体力并进行一个额外回合。",
							ff_jushougai: "沮授",
							ffxishigai: "悉势",
							ffxishigai_info: "限定技，有区域内牌数变化至全场唯一时，你可观看牌堆顶3张牌，并为一名角色蓄谋其中一张。",
							ffhuicegai: "慧策",
							ffhuicegai_info: "每回合限一次，你可获得并使用场上一张牌；当有角色区域内牌数变化至0或3后，你复原一个技能。",
							ff_simaaigai: "司马乂",
							ffxiangzhonggai: "相踵",
							ffxiangzhonggai_info: "出牌阶段限三次，你可以选择将一张牌当【火攻】或【决斗】使用并发动【束躅】。",
							ffshuzhugai: "束躅",
							ffshuzhugai_info: "转换技，出牌阶段限零次，你可以选择一项：阳：1.摸牌至3(至少为1)；2.本回合你的技能可发动次数+1；阴：1.本回合你的技能可发动次数-1;2.弃牌至3(至少为1)。",
							ff_jiangwanfeiyigai: "蒋琬费祎",
							ffzuolonggai: "佐龙",
							ffzuolonggai_info: "锁定技，每回合首张伤害牌被使用时，使用者以下每有一项为红色，你卜算1：1.势力；2.身份；3.体力牌当前勾玉；4.此伤害牌；5.装备区内的所有牌；6.判定区内的所有牌。",
							ffchouyegai: "筹业",
							ffchouyegai_info: "当你需要使用【无懈可击】时，你可以从牌堆一端展示牌，若花色与本轮此前不同，你视为使用之，否则此技能本轮失效且你获得本轮所有展示牌。",
							ff_caopigai:"曹丕",
							ffduosigai:"夺嗣",
							ffduosigai_info:"你可以于以下时机拼点：1.中央区牌数变为3时；2.手牌数变为3时；3.体力值变为3时。若你赢，你视为使用一张【杀】。",
							ffdianlungai:"典论",
							ffdianlungai_info:"每回合限一次，当你造成或受到伤害后，你可以获得中央区任意张牌并弃置等量张牌或失去等量点体力",
							ff_lujigai:"陆绩",
							ffhuaijugai:"怀橘",
							ffhuaijugai_info:"转换技，你使用的指定目标的牌结算后：①你可以交给一名目标角色至多三张牌；②你可以令一名目标角色重铸至多三张牌。",
							ffhuntiangai:"浑天",
							ffhuntiangai_info:"一名角色失去所有因怀橘获得的牌后，其可以：1.将所有基本牌当一张普通锦囊牌使用；2.将所有锦囊牌当一张基本牌使用；3.交给你所有装备牌。",	
							ff_xiahouhuigai:"夏侯徽",
							ffshidugai:"识度",
							ffshidugai_info:"每回合限一次，其他角色使用指定目标的牌结算后，你可以使用一张牌，两张牌共同的目标将手牌数调整至与你相同，然后仅其中之一的目标将手牌数调整至与使用者相同。",
							ffshudugai:"椒毒-杀",
							ffshudugai_global:"椒毒-桃",
							ffshudugai_info:"锁定技，手牌数与你相同的角色可以将一张牌当【桃】对你使用。你可以将一张牌当【杀】对手牌数与你不同的角色使用。",
							ff_wangguanggai:"王广",
							fflilungai:"离论",
							fflilungai_info:"韵律技：出牌阶段限一次，你可以平：重铸一张可以使用的牌，使你使用的下一张牌无次数和距离限制。仄：重铸一张不可使用的牌，使你使用下一张牌时，获得一张可以使用的牌。转韵：手牌中可使用或不可使用的牌数变为0。",
							ffjianjigai:"见机",
							ffjianjigai_info:"你成为牌的目标结算后，你可以连接你与使用者的各一张牌并发动一次【离论】。",
							ff_xiexuangai:"谢玄",
							ffjiebinggai:"皆兵",
							ffjiebinggai_backup:"皆兵",
							ffjiebinggai_info:"当你需要使用牌时，你可以将一张牌当【铁索连环】使用，因此重置的角色手牌均视为你需要使用的牌直到其使用下一张手牌，若此时为你的回合外，此技能本回合失效。",
							ffshuzegai:"树泽",
							ffshuzegai_info:"每回合每项限一次，当你翻至正面/解除横置/脱离醉酒状态时，你可以视为使用一张【桃】或【五谷丰登】。",	
							ff_wangyigai:"王异",
							ffhuaixingai:"怀心",
							ffhuaixingai_info:"锁定技，每回合每名角色限一此，你使用牌指定一名角色时，你选择并令其发动你武将牌上一个其他技能。",
							ffzhenliegai:"贞烈",
							ffzhenliegai_info:"出牌阶段限一次，你可以执行前X项：1.横置一名角色，若你未横置，改为你。2.交给已横置角色各一张牌。3.获得已横置角色各一张牌。4.受到一点火焰伤害。（X为场上横置角色数且至少为1）",
							ffmijigai:"秘计",
							ffmijigai_info:"出牌阶段限一次，你可以复原你武将牌。若你武将牌未因此/因此发生变化，你将手牌数调整至体力值/体力值调整至手牌数。",
							ff_ruanjigai:"阮籍",
							ffyucigai:"喻辞",
							ffyucigai_info:"锁定技，你使用或即时牌结算后，将其置入你首个空置的装备栏。若此时装备栏牌数等同于其字数，你摸一张牌。",
							ffxuanxingai:"玄心",
							ffxuanxingai_info:"出牌阶段限一次，你可令一名角色改为从你装备栏摸牌，然后摸X张牌。（X为你装备栏首张牌名字数，你装备栏没有牌或触发3次后时改为从牌堆摸牌）",
							ffzuixiaogai:"醉啸",
							ffzuixiaogai_info:"锁定技，你的装备牌视为无次数限制的【杀】且使用后废除或恢复一个装备区。",
							ff_guohuaigai:"郭淮",
							ffjingcegai:"精策",
							ffjingcegai_info:"精策：你使用过牌的回合结束时，你可以使用或摸X张牌，然后当你的手牌数达到以下一项本回合未以此法达到项时，重复一次：1、手牌中花色数2、体力值3、本回合你使用牌数。（X为本回合该技能触发次数）",
							ff_zhugezhangai:"诸葛瞻",
							ffyingzhangai:"应战",
							ffyingzhangai_info:"每回合限一次，以你为目标的牌结算后，你可以依次执行任意项：1、视为使用一张【决斗】。2、令当前手牌视为雷【杀】，3、摸一张牌。若执行了所有项，你摸两张牌。1",
							ffqingjuegai:"倾绝",
							ffqingjuegai_info:"你的手牌数或体力值变化后，若相等，你可以弃置一名角色一张牌，且该角色武将牌上的技能视为未发动过。",
							ff_jiangweigai:"姜维",
							ffxuangugai:"悬孤",
							ffxuangugai_info:"锁定技，你不因此成为牌的唯一目标完成结算后，你将一个区域内牌数以合法方式调整至1，并将其中非字母牌当【决斗】使用。",
							ffjinzhigai:"烬豸",
							ffjinzhigai_info:"锁定技，当你受到牌的伤害时，你无法再以同点数的牌作为转化底牌，然后选择一项：1.防止此伤害。2.获得所有不因使用而进入中央区的牌。",
							ff_zhouqungai:"周群",
							ffshizhenggai:"识征",
							ffshizhenggai_info:"你可将一种弃牌堆内缺失花色的牌当作【随机应变】使用。",
							ffshizhenggai_spade:"♠️",
							ffshizhenggai_club:"♣️",
							ffshizhenggai_heart:"♥️",
							ffshizhenggai_diamond:"♦️",
							ffxuanfeigai:"玄非",
							ffxuanfeigai_info:"锁定技，你使用牌时，移出前x个区域内与该牌同花色的牌：1.你手牌区。2.本回合弃牌堆。3.目标的区域。若未移出牌，你分配所有移出牌。(X为你本回合使用过牌的类型数)",
							ff_fazheng_gai:"法正",
							fflifeigai:"罹诽",
							fflifeigai_info:"锁定技，你的场上有牌时，你无法使用手牌。",
							ffguisuigai:"诡随",
							ffguisuigai_info:"转换技，你可以将一张牌当任意延时锦囊牌对自己使用，然后视为使用一张①基本牌②锦囊牌。",
							ffzeqigai:"择栖",
							ffzeqigai_info:"锁定技，当你失去最后一张手牌时，你失去武将牌上的前X个技能直到回合结束，然后选择一项并摸X张牌：1.将你场上的所有牌交给一名其他角色。2.弃置任意角色的共计X张牌。(X为你场上牌数)",
							ff_sp_zhugeliang_gai:"诸葛亮",
							ffdingmougai:"鼎谋",
							ffdingmougai_info:"转换技，游戏开始时可自选阴阳状态与天地人状态。你可以将手牌数调整至阳：你的体力值；阴：你已损失体力值以天：视为使用一张卜算因此弃置的牌的【洞烛先机】；地：可弃置因此弃置的牌以生效的【火攻】；人：将因此弃置的牌当一张【无懈可击】使用。",
							ffliaoyuangai:"燎原",
							ffliaoyuangai_info:"出牌阶段，你可以分配2点火焰伤害，然后你死亡。",	
							ff_xuhuang_gai:"徐晃",
							ffshaozigai:"烧辎",
							ffshaozigai_info:"你可以连接你与目标的共计4张未连接手牌以视为使用【火攻】。若未造成伤害，此技能本回合失效。",
							ffxuzhangai:"叙斩",
							ffxuzhangai_info:"出牌阶段限一次，你可以与一名其他角色依次获得中央区的一张牌，重复此操作直到中央区无牌。",	
							ff_lusu_gai:"鲁肃",
							fflianliugai:"联刘",
							fflianliugai_info:"出牌阶段，你可以将所有手牌交给一名其他角色以使用该角色的一张手牌。",
							fftaojingai:"讨荆",
							fftaojingai_info:"每轮限一次，你使用牌后，你可以依次分配牌堆顶的牌和1点伤害，然后若分配目标的手牌和体力值均不唯一，重置此技能。",
							ff_sunjian_gai:"孙坚",
							ffzhenjugai:"镇局",
							ffzhenjugai_info:"你可以将你与当前回合角色的各一张牌当【酒】使用，然后你与其依次将手牌数调整至X。(X为转化底牌牌名字数之和)",
							ffbingweigai:"兵威",
							ffbingweigai_info:"你可以将体力值张牌当无次数和距离限制的【杀】对手牌数最多的角色使用。(包含自己)",	
							ff_sp_liubei_gai:"刘备",
							fflunxionggai:"论雄",
							fflunxionggai_info:"转换技，出牌阶段限一次，你可以选择一名其他角色，然后：阳：交给其至少X张牌；阴：令其交给你至少X张牌。然后若你或该角色没有黑色手牌，此技能视为未发动过。(X为此技能本回合发动次数)",
							ffjingleigai:"惊雷",
							ffjingleigai_info:"锁定技，当你获得黑桃/红桃牌时，你将手牌调整至不为全场最少/最多。",
							ff_ruanyu_gai:"阮瑀",
							ffxingzuogai:"兴作",
							ffxingzuogai_info:"转换技，每回合限三次，你的最后一张①黑色手牌；②红色手牌可当作任意即时牌使用。",
							ffmiaoxiangai:"妙弦",
							ffmiaoxiangai_info:"转换技，出牌阶段，你可以弃置X张①相同颜色的手牌以获得X-1张另一颜色的牌；②相同类型的手牌以获得X-1张另外类型的牌。然后【兴作】视为未发动过",							
							ff_xunyu_gai:"荀彧",
							ffxieguogai:"撷果",
							ffxieguogai_info:"你可以将所有手牌当【决斗】或【无中生有】对一名没有【奸雄】的角色使用，然后目标角色获得锁定技【奸雄】直到发动。",
							ffyujuegai:"郁決",
							ffyujuegai_info:"出牌阶段各限一次，你可以获得所有技能数小于/等于/大于你的角色各一张牌。",
							ffjianxionggai:"奸雄",
							ffjianxionggai_info:"锁定技，当你受到伤害后，你获得造成伤害的牌。",
							ffyaofa:"爻法",
							ffyaofa_info:"每轮每名角色限一次，当你对一名角色造成伤害或受到一名角色的伤害后，你可以令你/对方将体力值调整至与对方/你相同。",
							ffjiyao:"吉谣",
							ffjiyao_info:"转换技，出牌阶段，阳：你可以弃置任意张字数和为X的牌并摸至Y张牌；阴：你可以使用一张牌名字数为X的牌并摸至Y张牌。(X为你的体力值,Y为你的体力上限)",
							ff_simahui_gai:"司马徽",
							ffmingzhigai:"明之",
							ffmingzhigai_info:"你①剩余用【杀】次数②体力③手牌数变至项数后，可调整其余项至上限。",
							ffjianzhigai:"荐之",
							ffjianzhigai_info:"结束阶段，你可卜算1～5，然后令一名角色执行第等量个阶段。若该角色不为你，你可以交给其一个技能",
							ff_jiananfeng_gai:"贾南风",
							ffhunjuegai:"殙绝",
							ffhunjuegai_info:"锁定技，你使用牌指定其他角色为唯一目标后，令其选择一项：1.本轮获得“毒逝”；2.对你发动“鸠毒”。",
							ffduiyuangai:"怼怨",
							ffduiyuangai_info:"锁定技，转换技，当你受到伤害后，阳：你发动一次“间书”；阴：你使用一张不因使用而进入中央区的牌。否则你失去一个技能直到回合结束。",	
							ff_sunyi:"孙翊",
							ffqlxuezao:"血躁",
							ffqlxuezao_info:"锁定技，转换技，你于出牌阶段内使用牌时，阳：失去1点体力，然后将手牌摸至体力值（未以此法获得牌则摸两张牌）；阴：回复1点体力，然后将手牌弃至体力值（未以此法失去牌则弃置两张牌）。",
							ffqlxiaozhen:"骁阵",
							ffqlxiaozhen_info:"昂扬技，出牌阶段，你可弃置/摸一张牌并令你本回合使用的下一张牌无次数限制且不计入次数限制，然后恢复/移去〖血躁〗的一项直到本回合结束。激昂：使用两张牌。",	
							ff_yanwen_gai: "阎温",
							ffyeqiangai: "夜潜",
							ffyeqiangai_info: "一名角色于你的回合内受到伤害后，你可以将中央区与手牌中的共计三张牌分配到牌堆顶和牌堆底（至少一张来自手牌），当其中一张牌被一名角色获得时，其同时获得此次分配的所有牌。",
							ffhuchenggai: "呼城",
							ffhuchenggai_info: "你可以将一张牌当【兵临城下】或【以逸待劳】使用，然后若你的手牌数不唯一，此技能本回合失效。",
							ff_liuan_gai: "刘安",
							ffxunyegai: "寻野",
							ffxunyegai_info: "出牌阶段每种牌数限一次，你可以弃置X张牌并将手牌数调整至全场第X少。",
							ffdanqigai: "啖妻",
							ffdanqigai_info: "韵律技，每轮每个牌名限一次，你可以分配牌堆顶的牌至其他角色并视为使用平：非伤害牌；仄：伤害牌。转韵：手牌数唯一最多的角色变化。",	
							ff_mengchangjun: "孟尝君",
							ffgoudao: "狗盗",
							ffgoudao_info: "你可以将一张牌当弃牌堆顶的牌使用，然后重置你武将牌上的一个技能。",
							fffenquan: "焚券",
							fffenquan_info: "出牌阶段限一次，你可以摸牌至体力上限并【火攻】，若造成伤害则重复此操作。",
							ffsanku: "三窟",
							ffsanku_info: "锁定技，你武将牌上的第X个技能视为【制衡】。(X为你手牌中的类型数)",
							ffzhiheng: "制衡",
							ffzhiheng_info:"出牌阶段限一次，你可以弃置任意张牌并摸等量的牌，若你在发动【制衡】时弃置了所有手牌，则你多摸一张牌。",																																																																																																																																				
						},				
						skill: {
							//李儒
							ffshengshigai: {
								audio: "ext:重塑系列削弱版/audio:2",
								getLastRespond(player, event) {//这个event是指到哪个event为止的上一个响应事件，可以不填，不填默认最近一个
									//这里因为遍历的记录太多了，所以选用手动遍历的形式，提高效率，不熟悉的话还是建议直接用封装好的函数遍历
									const history = _status.globalHistory.slice().flatMap(({ everything }) => everything);
									//从尾巴开始遍历
									let index = history.length - 1;
									//有event参数要从event开始倒数，把filter单独写出来方便多次调用
									const filter = evt => ["useCard", "respond"].includes(evt.name) && evt.player == player && evt.respondTo?.length;
									if (event && filter(event)) {
										index = history.indexOf(event) - 1;
									}
									let last = null;
									for (let i = index; i >= 0; i--) {
										const evt = history[i];
										if (filter(evt)) {
											last = evt;
											break;
										}
									}
									//console.log(last);
									return last;
								},
								//那三个条件的对比，方便调用，前两个很简单，就不说了；第三个我扩大了范围，在所有牌里面找能响应的牌，如果你觉得不满意找我改
								filterx: [
									(prev, curr) => {
										return prev.respondTo?.[0] != curr.respondTo?.[0];
									},
									(prev, curr) => {
										const card1 = prev.respondTo?.[1];
										const card2 = curr.respondTo?.[1];
										return get.name(card1 || {}) != get.name(card2 || {});
									},
									(prev, curr) => {
										const name = get.name(prev.card);
										const names = Object.keys(lib.card).filter(i => curr.filterCard(get.autoViewAs({ name: i, isCard: true }), curr.player, curr));
										return !names.includes(name);
									},
								],
								hiddenCard(player, name) {
									return player.getStorage("ffshengshigai_used").length < 3;
								},
								enable: ["chooseToUse", "chooseToRespond"],
								filter(event, player) {
									if (!event.respondTo?.length || player.getStorage("ffshengshigai_used").length >= 3) {
										return false;
									}
									const { respondTo } = event;
									const evt = event.getParent(evt => evt.name == "useCard" && evt.card == respondTo[1], true);
									const list = event.ffshengshigai_list;
									//处理之前记得先过一次合法性检测
									return (
										evt?.targets?.includes(player) &&
										Object.keys(lib.card).filter(i => event.filterCard(get.autoViewAs({ name: i, isCard: true }), player, event)) &&
										list.length > 0
									);
								},
								//涉及到访问记录，提前给事件赋值
								onChooseToUse(event) {
									if (!game.online && !event.ffshengshigai) {
										const { player } = event;
										const evt = get.info("ffshengshigai").getLastRespond(player);
										const storage = player.getStorage("ffshengshigai_used");
										const filterx = get.info("ffshengshigai").filterx;
										event.set("ffshengshigai", evt);
										//提前确认满足那些条件直接赋值，不用老是再去找
										event.set("ffshengshigai_list", !evt ? [0, 1, 2] : (storage.length >= 3 ? [] : filterx.reduce((list, filter, i) => {
											//触发过的就直接返回list，不进行后续操作
											if (storage.includes(i)) {
												return list;
											}
											if (filter(evt, event)) {
												return [...list, i];
											}
											return list;
										}, [])));
									}
								},
								onChooseToRespond(event) {
									lib.skill.ffshengshigai.onChooseToUse.call(this, event);
								},
								chooseButton: {
									dialog(event, player) {
										const names = Object.keys(lib.card).filter(i => event.filterCard(get.autoViewAs({ name: i, isCard: true }), player, event));
										const list = [];
										//生成vcardList
										names.forEach(name => {
											list.push([get.type(name), "", name]);
											if (name == "sha") {
												for (const nature of lib.inpile_nature) {
													list.push([get.type(name), "", name, nature]);
												}
											}
										});
										const listx = event.ffshengshigai_list.map(i => i + 1);
										const dialog = ui.create.dialog(`###胜势###摸${listx.length}张牌并视为${event.name == "chooseToUse" ? "使用" : "打出"}一张牌响应（触发选项：${get.translation(listx)}）`, [list, "vcard"], "hidden");
										//direct属性的意思是：如果只有一个选项就会直接进入下一步，不需要再手动点了
										//dialog.direct = true;
										return dialog;
									},
									backup(links, player) {
										const list = get.event().ffshengshigai_list;
										return {
											filterCard: () => false,
											selectCard: -1,
											viewAs: {
												name: links[0][2],
												nature: links[0][3],
												isCard: true,
											},
											list: list,
											log: false,
											//摸牌放到precontent来
											async precontent(event, trigger, player) {
												player.logSkill("ffshengshigai");
												const list = get.info(event.name.slice(4)).list;
												player.addTempSkill("ffshengshigai_used");
												player.markAuto("ffshengshigai_used", list);
												await player.draw(list.length);
											}
										}
									},
									prompt(links, player) {
										const event = get.event();
										const list = event.ffshengshigai_list.map(i => i + 1);
										return `摸${list.length}张牌并视为${event.name == "chooseToUse" ? "使用" : "打出"}${get.translation(links[0][3]) || ""}${get.translation(links[0][2])}（触发选项：${get.translation(list)}）`
									},
								},
								subSkill: {
									used: {
										charlotte: true,
										onremove: true,
										intro: {
											content(storage, player, skill) {
												return `已发动选项：${storage.sort((a, b) => a - b).map(i => i + 1).join("、")}`;
											}
										}
									},
								}
							},
							ffbaishougai: {
								audio: "dcmieji",
								trigger: { player: "dieAfter" },
								filter(event, player) {
									return event.source?.isIn();
								},
								forceOut: true,
								forceDie: true,
								forced: true,
								locked: false,
								logTarget: "source",
								//死亡给个子技能，后面印牌全局技能筛选条件同步跟进
								async content(event, trigger, player) {
									const { targets: [target] } = event;
									target.addSkill(`${event.name}_target`);
								},
								init(player, skill) {
									game.addGlobalSkill("ffbaishougai_global");
								},
								subSkill: {
									global: {
										enable: "phaseUse",
										usable: 1,
										filter(event, player) {
											const card = get.autoViewAs({ name: "binglinchengxiax" }, "unsure");
											return (
												player.countCards("hes") > 0 &&
												event.filterCard(card, player, event) &&
												game.hasPlayer(target => (
													target != player &&
													(target.hasSkill("ffbaishougai") || target.hasSkill("ffbaishougai_target")) &&
													lib.filter.targetEnabled(card, player, target)
												))
											);
										},
										filterCard: true,
										position: "hes",
										viewAs: {
											name: "binglinchengxiax",
										},
										prompt: "将一张牌当作兵临城下使用",
										//筛选符合特定条件的目标
										filterTarget(card, player, target) {
											return target.hasSkill("ffbaishougai") || target.hasSkill("ffbaishougai_target");
										},
									},
									target: {
										//死亡选完目标后会给标记
										charlotte: true,
										mark: true,
										intro: {
											content: "你成为了“败守”的目标",
										}
									}
								},
							},
							ffdenglougai: {
								mark: true,
								zhuanhuanji: true,
								marktext: "☯",
								intro: {
									content(storage, player, skill) {
										if (player.storage.ffdenglougai == true) {
											return "出牌阶段，你可以弃置一张牌，用全部手牌交换牌堆中的【登楼】牌";
										}
										return "出牌阶段，你可以弃置一张牌，用全部手牌交换牌堆顶等量牌";
									},
								},
								audio: "xinfu_denglou",
								enable: "phaseUse",
								position: "he",
								filterCard: true,
								check(card) {
									return 5 - get.value(card);
								},
								async content(event, trigger, player) {
									await player.changeZhuanhuanji("ffdenglougai");
									const hs = player.getCards("h");
									if (player.storage.ffdenglougai != true && hs) {
										const {
											result: { bool, moved },
										} = await player
											.chooseToMove("登楼：将这些牌以任意顺序置于牌堆顶", true)
											.set("list", [["全部手牌", player.getCards("h"),], ["牌堆顶"]])
											.set("filterOk", moved => !moved[0].length)
										if (bool) {
											let cards = moved[1].slice();
											game.log(player, "将", cards, "置于了牌堆顶");
											player.lose(cards, ui.cardPile, "insert");
										}
										const cards = Array.from(ui.cardPile.childNodes).filter(card => card.hasGaintag("eternal_ffdenglougaix"));
										//const cards = targets.reduce((list, target) => list.addArray(target.getStorage("dcqiqin").filterInD("d")), []);
										player.gain(cards, "gain2");
									} else {
										if (hs.length) {
											await player.addGaintag(hs, "eternal_ffdenglougaix");
											await player.draw(player.countCards("h"));
											const {
												result: { bool, moved },
											} = await player
												.chooseToMove("登楼：将这些牌以任意顺序置于牌堆顶", true)
												.set("list", [["全部手牌", player.getCards("h").filter(card => card.hasGaintag("eternal_ffdenglougaix")),], ["牌堆顶"]])
												.set("filterOk", moved => !moved[0].length)
											if (bool) {
												let cards = moved[1].slice();
												game.log(player, "将", cards, "置于了牌堆顶");
												player.lose(cards, ui.cardPile, "insert");
											}
										}
									}
								},
								"_priority": 0,
							},
							ffqiaigai: {
								mark: true,
								marktext: "哀",
								intro: {
									name: "七哀",
									content: function (storage, player) {
										return "累计获得" + player.countMark("ffqiaigain") + "张牌";//显示获得的牌数
									},
								},
								trigger: {//获得牌后
									player: "gainAfter",
									global: "loseAsyncAfter",
								},
								filter(event, player) {
									if (event.getg(player).length == 0) {
										return false;
									}
									return true;
								},
								forced: true,//锁定技
								audio: "xinfu_qiai",
								async content(event, trigger, player) {
									await player.addMark("ffqiaigain", trigger.getg(player).length);//获得等于获得牌数的标记
									if (player.countMark("ffqiaigain") >= 7 - player.countMark("ffqiaigaix")) {//如果增加标记后，数量大于发动该技能的条件（初始为获得7牌，每发动一次-1）
										await player.removeMark("ffqiaigain", 7 - player.countMark("ffqiaigaix"));///移去发动条件枚标记（受上面显示影响）
										var num = 7 - player.countMark("ffqiaigaix");//记录可印牌的牌名字数和（初始为7，每发动一次-1）
										while (num > 0) {//进行循环
											const list = get.inpileVCardList(info => {//满足条件的牌是基本牌或普通锦囊牌，且牌名字数小于等于你还可以印牌的牌名字数和，并且当前可以使用，且未被记录
												const card = { name: info[2], nature: info[3], isCard: true };
												if (!["basic", "trick"].includes(get.type(info[2]))) {
													return false;
												}
												if (get.cardNameLength(info[2]) > num) {
													return false;
												}
												if (player.getStorage("ffqiaigai_used").includes(info[2])) {
													return false;
												}
												return player.hasUseTarget(card);
											});
											if (!list.length) {
												return;
											}
											const result = await player.chooseButton([`七哀，剩余${get.cnNumber(num)}字`, [list, "vcard"]]).forResult();
											if (result.bool) {//使用并记录
												var usedCards = player.getStorage("ffqiaigai_used");
												if (!usedCards.includes(result.links[0][2])) {
													usedCards.push(result.links[0][2]);
													player.setStorage("ffqiaigai_used", usedCards);
												}
												await player.chooseUseTarget(result.links[0][2], true, false);
												await player.markAuto("ffqiaigai", [result.links[0][2].name]);
												num = num - get.cardNameLength(result.links[0][2]);
											} else if (!result.bool) {//只要有一次选择取消就停止发动技能
												return;
											}
										}
										if (player.countMark("ffqiaigaix") >= 6) {//让技能印牌字数和和发动条件需要获得的牌数-1
											await player.clearMark("ffqiaigaix");
										} else if (player.countMark("ffqiaigaix") < 6) {
											await player.addMark("ffqiaigaix");
										}
									}
								},
								group: "ffqiaigai_clear",
								subSkill: {
									clear: {
										trigger: {
											global: "phaseEnd",
										},
										forced: true,
										async content(event, trigger, player) {
											player.storage.ffqiaigai_used = [];
										},
									},
								},
								"_priority": 0,
							},
							ffjianqiangai: {
								trigger: {
									global: "useCardAfter",
								},
								audio: "clanyichi",
								forced: true,
								filter(event, player) {
									return player.countCards("he") > 0
								},
								async content(event, trigger, player) {
									const num = trigger.player.getAllHistory("useCard").length - trigger.player.countMark("ffshouhangai");
									if (num != 0) {
										const result = await player.chooseCard("选择你要重铸的牌", "he", true, num).forResult();
										if (result.bool) {
											await player.recast(result.cards);
											if (result.cards.every(card => get.suit(card) != get.suit(trigger.card))) {
												const control = await trigger.player
													.chooseControl("baonue_hp", "baonue_maxHp", function (event, player) {
														if (trigger.player.hp == trigger.player.maxHp) {
															return "baonue_hp";
														}
														if (trigger.player.hp < trigger.player.maxHp - 1 || trigger.player.hp <= 2) {
															return "baonue_maxHp";
														}
														return "baonue_hp";
													})
													.set("prompt", "崩坏：失去1点体力或减1点体力上限")
													.forResultControl();
												if (control == "baonue_hp") {
													await trigger.player.loseHp();
												} else {
													await trigger.player.loseMaxHp(true);
												}
											} else {
												player.removeSkills("ffjianqiangai");
												let next = game.createEvent("ffjianqiangai_used")
												next.player = player
												next.setContent(() => {
													event.trigger(event.name)
												})
											}
										} else {
											return;
										}
									} else {
										const control = await trigger.player
											.chooseControl("baonue_hp", "baonue_maxHp", function (event, player) {
												if (trigger.player.hp == trigger.player.maxHp) {
													return "baonue_hp";
												}
												if (trigger.player.hp < trigger.player.maxHp - 1 || trigger.player.hp <= 2) {
													return "baonue_maxHp";
												}
												return "baonue_hp";
											})
											.set("prompt", "崩坏：失去1点体力或减1点体力上限")
											.forResultControl();
										if (control == "baonue_hp") {
											await trigger.player.loseHp();
										} else {
											await trigger.player.loseMaxHp(true);
										}
									}
								},
								"_priority": 0,
							},
							ffshouhangai: {
								trigger: {
									player: "ffjianqiangai_used",
								},
								enable: "phaseUse",
								audio: "clanjiannan",
								async content(event, trigger, player) {
									if (player.countCards("he") < 2) {
										player.chat("开了技能但没完全开");
										return;
									} else {
										await player.chooseToDiscard(2, "he", true)
										const result = await player.chooseToUse(function (card, player, event) {
											if (get.name(card) != "sha") {
												return false;
											}
											return lib.filter.filterCard.apply(this, arguments);
										}).forResult();
										if (result.bool && player.isDamaged()) {
											await player.recover();
											await player.draw(2);
											if (!player.hasSkill("ffjianqiangai")) {
												await player.addSkills("ffjianqiangai");
												var players = game.players.slice(0).sortBySeat();
												for (var i = 0; i < players.length; i++) {
													if (players[i].getAllHistory("useCard").length - players[i].countMark("ffshouhangai")) {
														players[i].addMark("ffshouhangai", players[i].getAllHistory("useCard").length - players[i].countMark("ffshouhangai"));
													}
												}
											}
										} else {
											return;
										}
									}
								},
							},
							fffangugai: {
								mod: {
									cardEnabled2(card, player) {
										if (card.hasGaintag("visible_fffangugaix")) {
											return false;
										}
									},
								},
								trigger: {
									player: "useCardAfter",
								},
								audio: "ext:重塑系列削弱版/audio:2",
								forced: true,
								filter: function (event, player) {
									return ["basic", "trick"].includes(get.type(event.card));
								},
								async content(event, trigger, player) {
									if (trigger.cards) {
										await player.gain(trigger.cards, "gain2");
										await player.addShownCards(trigger.cards, "visible_fffangugaix");
									}
								},
								onremove: true,
								global: "fffangugai_use",
								subSkill: {
									use: {
										enable: "phaseUse",
										filter: (event, player) => {
											return game.hasPlayer(current => lib.skill.fffangugai_use.filterTarget(null, player, current));
										},
										filterTarget: (card, player, target) => {
											return target != player && target.hasCard(card => card.hasGaintag("visible_fffangugaix"), "h") && target.hasSkill("fffangugai");
										},
										selectTarget: () => {
											const num = game.countPlayer(current => lib.skill.fffangugai_use.filterTarget(null, _status.event.player, current));
											return num > 1 ? 1 : -1;
										},
										content() {
											"step 0";
											var cards = target.getCards("h", card => card.hasGaintag("visible_fffangugaix"));
											if (!cards.length) {
												event.finish();
											} else if (cards.length == 1) {
												event._result = { bool: true, links: cards };
											} else {
												player.chooseButton(true, ["选择使用" + get.translation(target) + "的一张明置牌", cards]);
											}
											"step 1";
											if (result.bool && get.name(result.links[0]) != "shan" && get.name(result.links[0]) != "wuxie") {
												player.useCard(result.links[0], target);
											} else {
												player.chat("大傻春你在用什么？！");
												event.finish();
											}
										},
										sub: true,
										sourceSkill: "fffangugai",
										"_priority": 0,
									},
								},
								"_priority": 0,
							},
							ffqimougai: {
								mark: true,
								zhuanhuanji: true,
								marktext: "☯",
								intro: {
									content(storage, player, skill) {
										if (player.storage.ffqimougai == true) {
											return "出牌阶段，你可以失去一点体力，摸X张牌或暗置X张牌";
										}
										return "出牌阶段，你可以失去一点体力并弃置X张牌";
									},
								},
								enable: "phaseUse",
								audio: "reqimou",
								async content(event, trigger, player) {
									const cards1 = player.getCards("h", card => { return card.hasGaintag("visible_fffangugaix") });
									const cards2 = player.getCards("h", card => { return !card.hasGaintag("visible_fffangugaix") });
									const num = Math.abs(cards1.length - cards2.length);
									await player.changeZhuanhuanji("ffqimougai");
									if (player.storage.ffqimougai != true) {
										await player.loseHp();
										await player.draw(Math.max(1, num));
									} else {
										await player
											.chooseToDiscard(true, "选择你要弃置的牌", "he", Math.max(1, num)).forResult()
										/*if(result.bool){
											await player.discard(result.cards);
										}*/
									}
								},
							},
							ffdingjigai: {
								enable: "phaseUse",
								usable: 1,
								audio: "twhuanji",
								filterCard(card, player) {
									const target = player.maxHp + ui.selected.cards.length;
									return player.countCards("h") > target;
								},
								selectCard: [0, Infinity],
								filterOk() {
									const player = get.player();
									return player.countCards("h") <= (ui.selected.cards.length + player.maxHp);
								},
								check(card) {
									return 15 - get.value(card);
								},
								async content(event, trigger, player) {
									if (get.info("olsanyao").filter(event, player)) {
										const sanyao = player.chooseToUse();
										sanyao.set("openskilldialog", get.prompt2("olsanyao"));
										sanyao.set("norestore", true);
										sanyao.set("_backupevent", "olsanyao");
										sanyao.set("custom", {
											add: {},
											replace: { window() { } },
										});
										sanyao.backup("olsanyao");
										player
											.when("chooseButtonAfter")
											.filter(evt => evt.getParent() == sanyao)
											.step(async (event, trigger, player) => {
												if (!trigger?.result?.bool) {
													sanyao.cancel();
												}
											});
										const result1 = await sanyao.forResult();
									}
									if (get.info("olxvfa").filter(event, player)) {
										const xufa = player.chooseToUse();
										xufa.set("openskilldialog", get.prompt2("olxvfa"));
										xufa.set("norestore", true);
										xufa.set("_backupevent", "olxvfa");
										xufa.set("custom", {
											add: {},
											replace: { window() { } },
										});
										xufa.backup("olxvfa");
										player
											.when("chooseButtonAfter")
											.filter(evt => evt.getParent() == xufa)
											.step(async (event, trigger, player) => {
												if (!trigger?.result?.bool) {
													xufa.cancel();
												}
											});
										const result2 = await xufa.forResult();
									}
									if (player.countCards("h") >= player.maxHp) {
										return;
									}
									const result3 = await player.chooseBool("定基：是否摸至体力上限？").forResult();
									if (!result3?.bool) {
										return;
									}
									await player.drawTo(player.maxHp);
								},
							},
							ffchengguogai: {
								forced: true,
								trigger: {
									player: ["phaseChange", "phaseUseEnd"],
								},
								audio: "twjielv",
								filter(event, player) {
									if (event.name == "phaseUse") {
										return true;
									}
									const phases = ["phaseDraw", "phaseDiscard"];
									return phases.some(phase => event.phaseList[event.num].indexOf(phase) != -1);
								},
								async content(event, trigger, player) {
									if (trigger.name == "phaseUse") {
										const evts = player.getHistory("useCard", evt => evt.getParent(evtx => evtx == trigger, true));
										const num1 = player.maxHp - evts.length;
										if (num1 > 0) {
											await player.loseMaxHp(num1);
										} else if (num1 < 0) {
											await player.gainMaxHp(-num1);
										}
										const num2 = player.hp - evts.length;
										if (num2 > 0) {
											await player.loseHp(num2);
										} else if (num2 < 0) {
											await player.recover(-num2);
										}
									} else {
										trigger.phaseList[trigger.num] = `phaseUse|${event.name}`;
										await game.delayx();
									}
								},
								ai: {
									effect: {
										target(card, player, target) {
											if (get.type(card) == "delay") {
												return "zeroplayertarget";
											}
										},
									},
								},
							},
							ffjiujiegai: {
								zhuSkill: true,
								limited: true,
								skillAnimation: true,
								animationColor: "fire",
								trigger: {
									global: "die",
								},
								filter(event, player) {
									return event.player != player && event.player.group == "shu";
								},
								async cost(event, trigger, player) {
									event.result = await trigger.player
										.chooseBool(get.prompt2(event.skill, player, trigger.player))
										.set("choice", get.attitude(trigger.player, player) > 0)
										.set("forceDie", true)
										.set("forceOut", true)
										.forResult();
									event.result.targets = [trigger.player];
								},
								async content(event, trigger, player) {
									player.awakenSkill(event.name);
									player.insertPhase();
								},
							},
							jinshigai: {
								enable: "phaseUse",
								audio: ["sbtieji2.mp3", "sbtieji3.mp3"],
								group: ["jinshigai_one", "jinshigai_two", "jinshigai_three", "jinshigai_mark"],
								filter: function (event, player) {
									return !player.hasMark("jinshigai_one") ||
										!player.hasMark("jinshigai_two") ||
										!player.hasMark("jinshigai_three");
								},
								async content(event, trigger, player) {
									const choiceList = ["重铸所有基本牌", "重铸所有非基本牌", "重铸所有【杀】和装备牌",];
									const choices = ["选项一", "选项二", "选项三", "cancel2"];
									if (player.countMark("jinshigai_one") > 0) {
										choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
										choices.remove("选项一");
									};
									if (player.countMark("jinshigai_two") > 0) {
										choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
										choices.remove("选项二");
									};
									if (player.countMark("jinshigai_three") > 0) {
										choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + "</span>";
										choices.remove("选项三");
									};
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.set("choiceList", choiceList)
										.forResult();
									if (result.control == "选项一") {
										await player.recast(player.getCards("h", card => get.type(card) == "basic")),
											player.addMark("jinshigai_one", 1);
									} else if (result.control == "选项二") {
										await player.recast(player.getCards("he", card => get.type(card) != "basic")),
											player.addMark("jinshigai_two", 1);
									} else if (result.control == "选项三") {
										await player.recast(player.getCards("he", card => get.name(card) == "sha"
											|| get.type(card) == "equip")),
											player.addMark("jinshigai_three", 1);
									}
								},
								subSkill: {
									"mark": {
										forced: true,
										trigger: {
											player: "phaseUseBegin",
										},
										content: function () {
											player.clearMark("jinshigai_one");
											player.clearMark("jinshigai_two");
											player.clearMark("jinshigai_three");
										},
									},
								},
							},
							juejigai: {
								forced: true,
								locked: true,
								audio: "sbtieji1.mp3",
								trigger: {
									player: "useCard",
								},
								filter(event, player) {
									const evt = lib.skill.dcjianying.getLastUsed(player, event);
									if (!evt || !evt.card || evt.juejigai) {
										return false;
									}
									return get.type(evt.card) == get.type(event.card)
										|| get.type(evt.card) == "delay" && get.type(event.card) == "trick"
										|| get.type(evt.card) == "trick" && get.type(event.card) == "delay";
								},
								content() {
									player.draw(1)
									trigger.set("juejigai", true)
									player.addSkill(event.name + "_unlimit");
								},
								subSkill: {
									unlimit: {
										charlotte: true,
										mod: {
											cardUsable: () => Infinity,
											targetInRange: () => true,
										},
										trigger: {
											player: "useCard1",
										},
										forced: true,
										popup: false,
										firstDo: true,
										async content(event, trigger, player) {
											player.removeSkill(event.name);
											const { card } = trigger;
											if (trigger.addCount !== false) {
												trigger.addCount = false;
												player.getStat("card")[card.name]--;
											}
										},
										mark: true,
										intro: {
											content: "使用的下一张牌无任何次数与距离限制",
										},
										sub: true,
										sourceSkill: "juejigai",
									},
								},
							},
							ffdujianggai: {
								forced: true,
								locked: true,
								audio: "botu",
								group: ["ffdujianggai_jilu", "ffdujianggai_meihua", "ffdujianggai_fangpian", "ffdujianggai_heitao", "ffdujianggai_hongtao", "ffdujianggai_mark"],
								trigger: {
									player: "useCard",
								},
								filter(event, player) {
									if (get.suit(event.card) == "spade" && player.countMark("ffdujianggai_jilu") != player.countMark("ffdujianggai_heitao")) {
										return false;
									} else if (get.suit(event.card) == "heart" && player.countMark("ffdujianggai_jilu") != player.countMark("ffdujianggai_hongtao")) {
										return false;
									} else if (get.suit(event.card) == "diamond" && player.countMark("ffdujianggai_jilu") != player.countMark("ffdujianggai_fangpian")) {
										return false;
									} else if (get.suit(event.card) == "club" && player.countMark("ffdujianggai_jilu") != player.countMark("ffdujianggai_meihua")) {
										return false;
									} else {
										return true;
									}
								},
								content() {
									trigger.effectCount++;
									if (player.hasSkill("ffamenggai")) {
										var stat = player.getStat().skill
										delete stat.ffamenggai
									}
								},
								subSkill: {
									jilu: {
										name: "ffdujianggai_jilu",
										forced: true,
										locked: true,
										trigger: {
											player: "useCard",
										},
										filter(event, player) {
											return true;
										},
										popup: false,
										content: function () {
											player.addMark("ffdujianggai_jilu", 1);
											if (get.suit(trigger.card) == "spade") {
												player.addMark("ffdujianggai_heitao", 1);
											} else if (get.suit(trigger.card) == "heart") {
												player.addMark("ffdujianggai_hongtao", 1);
											} else if (get.suit(trigger.card) == "diamond") {
												player.addMark("ffdujianggai_fangpian", 1);
											} else if (get.suit(trigger.card) == "club") {
												player.addMark("ffdujianggai_meihua", 1);
											}
										},
										sub: true,
										sourceSkill: "ffdujianggai",
										intro: {
											name: "总使用次数",
											content: function (storage, player) {
												return
											},
										},
										marktext: "总",
										"_priority": 1,
									},
									meihua: {
										name: "ffdujianggai_meihua",
										sourceSkill: "ffdujianggai",
										intro: {
											name: "梅花",
											content: function (storage, player) {
												return
											},
										},
										marktext: "♣️"
									},
									heitao: {
										name: "ffdujianggai_heitao",
										sourceSkill: "ffdujianggai",
										intro: {
											name: "黑桃",
											content: function (storage, player) {
												return
											},
										},
										marktext: "♠️"
									},
									hongtao: {
										name: "ffdujianggai_hongtao",
										sourceSkill: "ffdujianggai",
										intro: {
											name: "红桃",
											content: function (storage, player) {
												return
											},
										},
										marktext: "♥️"
									},
									fangpian: {
										name: "ffdujianggai_fangpian",
										sourceSkill: "ffdujianggai",
										intro: {
											name: "方片",
											content: function (storage, player) {
												return
											},
										},
										marktext: "♦️"
									},
									"mark": {
										forced: true,
										trigger: {
											global: "roundEnd"
										},
										content: function () {
											player.clearMark("ffdujianggai_jilu");
											player.clearMark("ffdujianggai_meihua");
											player.clearMark("ffdujianggai_fangpian");
											player.clearMark("ffdujianggai_hongtao");
											player.clearMark("ffdujianggai_heitao");
										},
									},
								},
							},
							ffamenggai: {
								enable: "phaseUse",
								audio: ["qinxue", "qinxue2"],
								filterCard: true,
								position: "he",
								usable: 1,
								selectCard() {
									if (get.player().countMark("ffdujianggai_jilu") < 1) return [-1]
									return [1, get.player().countMark("ffdujianggai_jilu")]
								},
								async content(event, trigger, player) {
									player.recast(event.cards);
									const choices = ['增加X', '减小X'];
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.forResult();
									if (result.control == "增加X") {
										await player.addMark("ffdujianggai_jilu", event.cards.length);
									} else if (result.control == "减小X") {
										await player.removeMark("ffdujianggai_jilu", event.cards.length);
									}
								},
							},
							fftaipinggai: {
								group: ["fftaipinggai_fenpei"],
								audio: ["yizhao", "yizhao2"],
								trigger: {
									player: "damageEnd",
									source: "damageSource",
								},
								async content(event, trigger, player, card) {
									if (player.countCards("h") == 0) {
										return false
									}
									var result = await player.chooseCard()
										.set("position", "h")
										.set("selectCard", [1, Infinity])
										.forResult()
									var result1 = await player.showCards(result.cards)
									await player.draw(result.cards.length).gaintag.add("太平")
									await player.addGaintag(result1.cards, "太平")
									while (true) {
										let result3 = await player.chooseCardTarget({
											position: "h",
											filterCard(card, player) {
												return card.hasGaintag("太平")
											},
											selectCard: [1, 3],
											filterTarget(card, player, target) {
												return !player.getStorage("fftaipinggai_fenpei").includes(target)
											},
											selectTarget: 1,
											prompt: "太平：请分配这些牌"
										}).forResult()
										if (!result3 || !result3.bool || !result3.cards || !result3.targets.length) {
											break;
										}
										player.markAuto("fftaipinggai_fenpei", result3.targets[0]);
										if (result3.targets[0] == player) {
											player.removeGaintag("太平", result3.cards);
										} else {
											await player.give(result3.cards, result3.targets[0]);
										}
									}
									var discardCards = player.getCards("h").filter(card => card.hasGaintag("太平"));
									await player.discard(discardCards);
									player.setStorage("fftaipinggai_fenpei", null);
								},
							},
							fffushuigai: {
								trigger: {
									global: "dying"
								},
								audio: ["sijun", "sijun2"],
								forced: true,
								locked: false,
								group: ["fffushuigai_jijiu", "fffushuigai_mark"],
								filter(event, player) {
									return !player.getStorage("fffushuigai_jijiu").includes(event.player)
								},
								derivation: ["jijiu"],
								async content(event, trigger, player) {
									player.addSkill("jijiu");
									player.markAuto("fffushuigai_jijiu", trigger.player);
									player.useSkill("fftaipinggai");
								},
								subSkill: {
									"jijiu": {
										trigger: {
											global: ["dyingAfter", "dieAfter"]
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											player.removeSkill("jijiu");
										},
									},
								},
							},
							fftiangonggai: {
								zhuSkill: true,
								audio: ["sanshou", "sanshou2"],
								trigger: {
									global: "phaseBefore"
								},
								filter(event, player) {
									return event.player != player && event.player.group == "qun";
								},
								content() {
									player.useSkill("fftaipinggai");
								},
							},
							ffxianmou: {
								trigger: {
									player: ["loseAfter"]
								},
								audio: "xianmou",
								group: "ffxianmou_mark",
								filter(event, player) {
									return event.skill != "ffxianmou" && event.getParent().name != "ffxianmou" && event.getParent(2).name != "ffxianmou" && event.getParent(3).name != "ffxianmou" && event.cards.length > 0
								},
								async content(event, trigger, player) {
									if (player.countMark("ffxianmou_mark") == 0) {
										for (var j = 0; j < trigger.cards.length; j++) {
											player.chooseUseTarget(trigger.cards[j])
										}
										player.addMark("ffxianmou_mark", 1)
									} else if (player.countMark("ffxianmou_mark") == 1) {
										await player.gain(trigger.cards)
										await player.addGaintag(trigger.cards, "先谋")
										while (player.getCards("he", card => card.hasGaintag("先谋")).length > 0) {
											let result = await player.chooseCardTarget({
												position: "h",
												filterCard(card, player) {
													return card.hasGaintag("先谋")
												},
												selectCard: [1, Infinity],
												forced: true,
												filterTarget(card, player, target) {
													return player != target
												},
												selectTarget: 1,
												prompt: "先谋：请分配这些牌"
											}).forResult()
											if (!result || !result.bool || !result.cards || !result.targets.length) {
												break;
											}
											await player.give(result.cards, result.targets[0]);
										}
										player.addMark("ffxianmou_mark", 1)
									} else if (player.countMark("ffxianmou_mark") == 2) {
										await player.gain(trigger.cards)
										const cards3 = trigger.cards
										const cards2 = [];
										const cards4 = [];
										const lose_list = [];
										lose_list.push([player, cards3]);
										await game
											.loseAsync({
												lose_list: lose_list,
											})
											.setContent("chooseToCompareLose");
										var result = await player.chooseToMove()
											.set("list", [["手牌", cards3], ["牌堆顶", cards4], ["牌堆底", cards2]])
											.set("prompt", "将这些牌以任意顺序置于牌堆")
											.set("forced", true)
											.set('filterOk', function (moved) {
												return moved[0].length == 0;
											})
											.forResult();
										if (result) {
											var top = result.moved[1]
											if (top.length) {
												await player.lose(cards4, ui.cardPile);
												for (let i = 0; i < top.length; i++) {
													const card = top[i];
													card.fix();
													ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
												}
											}
											var bottom = result.moved[2]
											if (bottom.length) {
												await player.lose(cards2, ui.cardPile);
												for (let i = 0; i < bottom.length; i++) {
													const card = bottom[i];
													card.fix();
													ui.cardPile.appendChild(card);
												}
											}
										}
										player.setMark("ffxianmou_mark", 0)
									}
								},
							},
							ffgujuegai: {
								audio: "lunshi",
								trigger: {
									player: "damageEnd",
								},
								filter: function (event, player) {
									return player.countCards("h") > 0
								},
								getIndex(event) {
									return event.num
								},
								async content(event, trigger, player) {
									const choices = ["♦️", "♥️", "♠️", "♣️"];
									if (player.countCards("h", card => get.suit(card) == "diamond") == 0) {
										choices.remove('♦️')
									};
									if (player.countCards("h", card => get.suit(card) == "heart") == 0) {
										choices.remove('♥️')
									};
									if (player.countCards("h", card => get.suit(card) == "spade") == 0) {
										choices.remove('♠️')
									};
									if (player.countCards("h", card => get.suit(card) == "club") == 0) {
										choices.remove('♣️')
									};
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.forResult();
									if (result.control == "♦️") {
										await player.discard(player.getCards("h", card => get.suit(card) == "diamond"));
									} else if (result.control == "♥️") {
										await player.discard(player.getCards("h", card => get.suit(card) == "heart"));
									} else if (result.control == "♠️") {
										await player.discard(player.getCards("h", card => get.suit(card) == "spade"));
									} else if (result.control == "♣️") {
										await player.discard(player.getCards("h", card => get.suit(card) == "club"));
									}
									var cards = [];
									game.getGlobalHistory("cardMove", function (evt) {
										if (evt.name != "lose") {
											return false;
										}
										for (var i of evt.cards) {
											if ((get.type(i, false) == "basic" || get.type(i, false) == "trick")) {
												cards.push(i);
											}
										}
									});
									var result = await player.chooseButton(["孤决：获得一张基本牌或普通锦囊牌", cards], true).set("ai", function (button) {
										return get.value(button.link, _status.event.player);
									}).forResult()
									if (result.bool) {
										await player.gain(result.links, "gain2");
									};
								},
							},
							ffjianwugai: {
								trigger: {
									global: "loseAfter",
								},
								audio: ["sbxiaoji", "sbxiaoji2"],
								filter(event, player) {
									if (event.type == "use") {
										return false;
									}
									if (player.group == "shu") {
										return false;
									}
									if (player.countCards("h") == 0) {
										return false;
									}
									for (var i = 0; i < event.cards.length; i++) {
										if (get.type(event.cards[i]) == "equip") {
											if (get.position(event.cards[i], true) == "d") {
												return true;
											}
										}
									}
									return false;
								},
								async content(event, trigger, player) {
									var result = await player.chooseCard({
										position: "h",
										selectCard: [1, Infinity],
									}).forResult()
									await player.recast(result.cards);
									for (var j = 0; j < trigger.cards.length; j++) {
										if (get.type(trigger.cards[j]) == "equip") {
											if (get.position(trigger.cards[j], true) == "d") {
												await player.gain(trigger.cards[j]);
											}
										}
									}
									if (_status.currentPhase == player) {
										player.changeGroup("shu");
									}
								},
							},
							ffzhuchenggai: {
								enable: "phaseUse",
								audio: ["sbliangzhu", "sbliangzhu2"],
								filter(event, player) {
									if (player.group == "wu") {
										return false;
									}
									if (player.countCards("e") == player.countCards("h")) {
										return false;
									}
									return true
								},
								async content(event, trigger, player) {
									if (player.countCards("h") > player.countCards("e")) {
										var result = await player.chooseToDiscard(player.countCards("h") - player.countCards("e"), true).forResult()
										if (result && result.cards && result.cards.length > 1) {
											var result2 = await player.chooseTarget()
												.set("filterTarget", function (card, player, target) {
													return target.countCards("e") > 0
												})
												.set("selectTarget", 1)
												.set("prompt", "选择一名角色，获得其装备区内的一张牌")
												.forResult()
											player.gainPlayerCard("e", result2.targets[0])
										} else {
											player.changeGroup("wu");
										}
									} else if (player.countCards("e") > player.countCards("h")) {
										await player.draw(player.countCards("e") - player.countCards("h"))
										player.changeGroup("wu");
									}
								},
							},
							ffgumagai: {
								enable: "phaseUse",
								audio: ["olfeibian", "olfeibian2"],
								filter(event, player) {
									if (player.countCards("h") == player.hp) {
										return true;
									}
								},
								async content(event, trigger, player) {
									const choices = ['【杀】', '【过河拆桥】'];
									var result = await player
										.chooseControl()
										.set('controls', choices)
										.forResult();
									if (result.control == "【杀】") {
										var result2 = await player.chooseCard()
											.set("position", "he")
											.set("selectCard", 1)
											.forResult();
										if (result2.bool) {
											player.chooseUseTarget(result2.cards, { name: "sha" }, false);
										}
									} else if (result.control == "【过河拆桥】") {
										var result3 = await player.chooseCard()
											.set("position", "he")
											.set("selectCard", 1)
											.forResult();
										if (result3.bool) {
											player.chooseUseTarget(result3.cards, { name: "guohe" }, false);
										}
									}
								},
							},
							ffkuangbinggai: {
								enable: "phaseUse",
								audio: ["olkuangjuan", "olkuangjuan2"],
								group: ["ffkuangbinggai_storage"],
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技。出牌阶段，你可以弃置一张牌并";
										if (storage) return str + "与一名手牌数等于体力值的角色交换手牌或体力值";
										return str + "与一名手牌数不等于体力值的角色交换手牌或体力值";
									},
								},
								filter(event, player) {
									if (player.countCards("he") > 0) {
										return true;
									}
								},
								async content(event, trigger, player) {
									if (!player.storage.ffkuangbinggai) {
										var result = await player.chooseTarget()
											.set("filterTarget", function (card, player, target) {
												return player != target && target.countCards("h") == target.hp && !player.getStorage("ffkuangbinggai_storage").includes(target)
											})
											.set("selectTarget", 1)
											.set("prompt", "与一名其他角交换手牌或体力值")
											.forResult()
										if (result.bool) {
											player.chooseToDiscard("he", 1, true)
											const choices = ['交换手牌', '交换体力值'];
											var result2 = await player
												.chooseControl()
												.set('controls', choices)
												.forResult();
											if (result2.control == "交换手牌") {
												player.swapHandcards(result.targets[0])
											} else if (result2.control == "交换体力值") {
												var hp1 = player.hp;
												var hp2 = result.targets[0].hp;
												player.hp = Math.min(player.maxHp, hp2);
												result.targets[0].hp = Math.min(result.targets[0].maxHp, hp1);
												player.update();
												result.targets[0].update();
												game.log(player, "和", result.targets[0], "交换了体力值");
											}
											player.markAuto("ffkuangbinggai_storage", result.targets[0]);
											player.changeZhuanhuanji("ffkuangbinggai");
										}
									} else {
										var result = await player.chooseTarget()
											.set("filterTarget", function (card, player, target) {
												return player != target && target.countCards("h") != target.hp && !player.getStorage("ffkuangbinggai_storage").includes(target)
											})
											.set("selectTarget", 1)
											.set("prompt", "与一名其他角交换手牌或体力值")
											.forResult()
										if (result.bool) {
											player.chooseToDiscard("he", 1, true)
											const choices = ['交换手牌', '交换体力值'];
											var result2 = await player
												.chooseControl()
												.set('controls', choices)
												.forResult();
											if (result2.control == "交换手牌") {
												player.swapHandcards(result.targets[0])
											} else if (result2.control == "交换体力值") {
												var hp1 = player.hp;
												var hp2 = result.targets[0].hp;
												player.hp = Math.min(player.maxHp, hp2);
												result.targets[0].hp = Math.min(result.targets[0].maxHp, hp1);
												player.update();
												result.targets[0].update();
												game.log(player, "和", result.targets[0], "交换了体力值");
											}
											player.markAuto("ffkuangbinggai_storage", result.targets[0]);
											player.changeZhuanhuanji("ffkuangbinggai");
										}
									}
								},
								subSkill: {
									"storage": {
										forced: true,
										trigger: {
											player: "phaseUseBegin",
										},
										content: function () {
											player.setStorage("ffkuangbinggai_storage", null);
										},
									},
								},
							},
							ffluanchenggai: {
								limited: true,
								trigger: {
									global: "damageEnd"
								},
								audio: ["dcsbrushi", "dcsbrushi2"],
								filter(event, player) {
									return event.num > 1 && player.countCards("h") > 0 && event.ffluanchenggai != true
										&& player.hasCard(card => { return player.hasUseTarget(card, true, true); })
								},
								async content(event, trigger, player) {
									var result = await player.chooseTarget()
										.set("filterTarget", function (card, player, target) {
											return player != target && !target.hasSkill("ffluanchenggai")
										})
										.set("selectTarget", 1)
										.set("prompt", "令一名其他角色获得此技能")
										.forResult();
									if (result.bool) {
										result.targets[0].addSkill("ffluanchenggai");
										result.targets[0].restoreSkill("ffluanchenggai");
										trigger.ffluanchenggai = true;
									}
									player.removeSkill("ffluanchenggai");
									player.addSkill("ffluanchenggai_qiang");
									player.chooseToUse({
										selectCard: 1,
										prompt: "使用一张手牌",
										forced: true
									});
									player.removeSkill("ffluanchenggai_qiang");
								},
								subSkill: {
									"qiang": {
										forced: true,
										trigger: {
											player: "useCard",
										},
										content: function () {
											trigger.directHit.addArray(
												game.filterPlayer(function (current) {
													return true;
												})
											);
										},
									},
								},
							},
							fffujigai: {
								trigger: {
									player: "useCard",
								},
								audio: ["dcsbsushen", "dcsbsushen2"],
								group: ["fffujigai_mark", "fffujigai_mark2"],
								zhuanhuanji: true,
								mark: true,
								forced: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技。你可以将一张牌当";
										if (storage) return str + "【酒】使用";
										return str + "【杀】使用";
									},
								},
								filter(event, player) {
									return event.skill == "fffujigai_jiu" || event.skill == "fffujigai_sha"
								},
								async content(event, trigger, player) {
									player.changeZhuanhuanji("fffujigai");
									if (!player.storage.fffujigai) {
										player.removeSkill("fffujigai_sha")
										player.addSkill("fffujigai_jiu");
										var result = await player.chooseTarget()
											.set("filterTarget", function (card, player, target) {
												return player != target && !target.hasSkill("fffujigai_sha")
											})
											.set("selectTarget", 1)
											.set("prompt", "令一名其他角色获得复计【杀】效果")
											.forResult();
										if (result.bool) {
											result.targets[0].addSkill("fffujigai_sha");
										}
									} else {
										player.removeSkill("fffujigai_jiu")
										player.addSkill("fffujigai_sha");
										var result = await player.chooseTarget()
											.set("filterTarget", function (card, player, target) {
												return player != target && !target.hasSkill("fffujigai_jiu")
											})
											.set("selectTarget", 1)
											.set("prompt", "令一名其他角色获得复计【酒】效果")
											.forResult();
										if (result.bool) {
											result.targets[0].addSkill("fffujigai_jiu");
										}
									}
								},
								subSkill: {
									"jiu": {
										audio: "dcsbfumou",
										enable: ["chooseToUse"],
										position: "hes",
										selectCard: 1,
										filterCard(card, player) {
											return true
										},
										viewAs: {
											name: "jiu"
										},
									},
									"sha": {
										audio: "dcsbfumou",
										enable: ["chooseToUse"],
										position: "hes",
										selectCard: 1,
										filterCard(card, player) {
											return true
										},
										viewAs: {
											name: "sha"
										},
									},
									"mark": {
										trigger: {
											global: "gameStart",
										},
										forced: true,
										content() {
											player.addSkill("fffujigai_jiu");
										}
									},
									"mark2": {
										trigger: {
											player: "phaseBegin",
										},
										forced: true,
										async content(event, trigger, player) {
											const targets = game.players.sortBySeat().slice();
											for (let target of targets) {
												if (target == player) {
													continue;
												}
												await target.removeSkill("fffujigai_jiu")
												await target.removeSkill("fffujigai_sha")
											}
										},
									},
								},
							},
							ffshigonggai: {
								audio: "nzry_shicai_2",
								trigger: {
									target: "useCardToTargeted",
								},
								zhuanhuanji: true,
								mark: true,
								forced: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，你";
										if (storage) return str + "对使用者造成一点雷电伤害";
										return str + "重铸所有非伤害牌";
									},
								},
								filter(event, player) {
									if (!player.storage.ffshigonggai) {
										if (!get.tag(event.card, "damage")) {
											return true
										}
									} else {
										if (get.tag(event.card, "damage")) {
											return true
										}
									}
								},
								async content(event, trigger, player) {
									player.changeZhuanhuanji("ffshigonggai");
									if (player.storage.ffshigonggai) {
										await trigger.player.damage(1, "thunder")
									} else {
										await player.recast(player.getCards("h", card => !get.tag(card, "damage")))
									}
								},
							},
							ffqingmangai: {
								audio: "gzchenglve",
								trigger: {
									source: "damageSource",
								},
								filter(event, player) {
									return player.countCards("he") > 0
								},
								async content(event, trigger, player) {
									if (trigger.player != player) {
										trigger.player.useCard({
											name: "sha",
											isCard: false,
										}, player);
									}
									var list = get.inpileVCardList(info => {
										return ["basic"].includes(info[0]) && !player.getStorage("ffqingmangai_mark").includes(info[2])
									});
									const result = await player.chooseButton([`视为使用一张基本牌`, [list, "vcard"]]).forResult();
									if (result.bool) {
										await player.markAuto("ffqingmangai_mark", [result.links[0][2]]);
										await player.chooseUseTarget(result.links[0][2], true, false);
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											global: "phaseEnd",
										},
										forced: true,
										async content(event, trigger, player) {
											player.setStorage("ffqingmangai_mark", null);
										},
									},
								},
							},
							ffsiyangai: {
								audio: "gzshicai",
								trigger: {
									player: "damageEnd",
								},
								filter(event, player) {
									return player.countCards("he") > 0
								},
								async content(event, trigger, player) {
									const choices = ['翻面', '横置'];
									if (player.isLinked()) {
										choices.remove('横置')
									};
									var result2 = await player
										.chooseControl()
										.set('controls', choices)
										.forResult();
									if (result2.control == "翻面") {
										player.turnOver();
									} else if (result2.control == "横置") {
										player.link(true);
									}
									var list = get.inpileVCardList(info => {
										return ["trick"].includes(info[0]) && !player.getStorage("ffsiyangai_mark").includes(info[2])
									});
									const result = await player.chooseButton([`视为使用一张锦囊牌`, [list, "vcard"]]).forResult();
									if (result.bool) {
										await player.markAuto("ffsiyangai_mark", [result.links[0][2]]);
										await player.chooseUseTarget(result.links[0][2], true, false);
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											global: "phaseEnd",
										},
										forced: true,
										async content(event, trigger, player) {
											player.setStorage("ffsiyangai_mark", null);
										},
									},
								},
							},
							ffzaijiegai: {
								audio: "ext:重塑系列削弱版/audio:2",
								trigger: {
									global: "damageEnd",
								},
								filter(event, player) {
									return event.player.countCards("h") > 0
								},
								async content(event, trigger, player) {
									const choices = ["发动", "cancel2"];
									var result = await trigger.player
										.chooseControl()
										.set("controls", choices)
										.forResult();
									if (result.control == "发动") {
										const mingjian = trigger.player.chooseToUse();
										mingjian.set("openskilldialog", get.prompt2("mingjian"));
										mingjian.set("norestore", true);
										mingjian.set("_backupevent", "mingjian");
										mingjian.set("forced", true)
										mingjian.set("custom", {
											add: {},
											replace: { window() { } },
										});
										mingjian.backup("mingjian");
										const result1 = await mingjian.forResult();
										var result = await trigger.player.chooseTarget()
											.set("selectTarget", 1)
											.set("prompt", "是否发动【恢拓】？")
											.set("prompt2", "令一名角色进行判定，若结果为红色，该角色回复1点体力；若结果为黑色，该角色摸X张牌（X为此次伤害的伤害点数）。")
											.forResult();
										player.logSkill("huituo", [trigger.player], null, null);
										result.targets[0].judge(function (card) {
											if (get.color(card) == "red") {
												result.targets[0].recover()
											} else if (get.color(card) == "black") {
												result.targets[0].draw(trigger.num)
											}
										})
									}
								},
							},
							ffgongquegai: {
								audio: "ext:重塑系列削弱版/audio:2",
								enable: "phaseUse",
								group: ["ffgongquegai_max", "ffgongquegai_min"],
								filter(event, player) {
									if (player.countMark("ffgongquegai_min") > 0 && player.countMark("ffgongquegai_max") > 0) {
										return false
									}
									return true
								},
								async content(event, trigger, player) {
									const choices = ['最多', '最少', 'cancel2'];
									if (!game.findPlayer(current => current.isMinHandcard(true))) {
										choices.remove('最少')
									} else if (game.findPlayer(current => current.isMinHandcard(true)).countCards("he") == 0 || player.countMark("ffgongquegai_min") > 0) {
										choices.remove('最少')
									};
									if (!game.findPlayer(current => current.isMaxHandcard(true))) {
										choices.remove('最多')
									} else if (game.findPlayer(current => current.isMaxHandcard(true)).countCards("he") == 0 || player.countMark("ffgongquegai_max") > 0) {
										choices.remove('最多')
									};
									var result2 = await player
										.chooseControl()
										.set('controls', choices)
										.forResult();
									if (result2.control == "最多") {
										const max = game.findPlayer(current => current.isMaxHandcard(true))
										while (max.isMaxHandcard()) {
											var result = await max.chooseCard()
												.set("position", "he")
												.set("selectCard", 1)
												.set("forced", true)
												.forResult();
											await max.chooseUseTarget(result.cards, { name: "wugu" }, true, false);
											player.addMark("ffgongquegai_max", 1);
										}
									} else if (result2.control == "最少") {
										const min = game.findPlayer(current => current.isMinHandcard(true))
										while (min.isMinHandcard()) {
											var result = await min.chooseCard()
												.set("position", "he")
												.set("selectCard", 1)
												.set("forced", true)
												.forResult();
											await min.chooseUseTarget(result.cards, { name: "wuzhong" }, true, false);
											player.addMark("ffgongquegai_min", 1);
										}
									}
								},
								subSkill: {
									"max": {
										trigger: {
											player: "phaseUseBegin",
										},
										filter(event, player) {
											return true
										},
										forced: true,
										async content(event, trigger, player) {
											player.clearMark("ffgongquegai_max")
											player.clearMark("ffgongquegai_min")
										},
									},
								},
							},
							fflanggugai: {
								group: ["fflanggugai_top", "fflanggugai_bottom"],
								subSkill: {
									"top": {
										audio: "smyyingshi",
										enable: "phaseUse",
										async content(event, trigger, player) {
											const card = get.cards(1, true)[0];
											const content = ["牌堆顶", [card]];
											game.log(player, "观看了牌堆顶的一张牌");
											await player.chooseControl("ok").set("dialog", content);
											if (player.hasUseTarget(card, null, card.name === "sha") || (get.info(card).notarget && lib.filter.cardEnabled(card, player))) {
												const result = await player.chooseUseTarget(card).forResult();
												if (result.bool) {
													if (player.countMark("fflanggugai_bottom") == 1) {
														player.changeGroup("jin");
														player.setMark("fflanggugai_bottom", 0)
													}
													player.setMark("fflanggugai_top", 1)
												}
											}
										},
									},
									"bottom": {
										audio: "smyyingshi",
										enable: "phaseUse",
										async content(event, trigger, player) {
											const card = get.bottomCards(1, true)[0];
											const content = ["牌堆底", [card]];
											game.log(player, "观看了牌堆底的一张牌");
											await player.chooseControl("ok").set("dialog", content);
											if (player.hasUseTarget(card, null, card.name === "sha") || (get.info(card).notarget && lib.filter.cardEnabled(card, player))) {
												const result = await player.chooseUseTarget(card).forResult();
												if (result.bool) {
													if (player.countMark("fflanggugai_top") == 1) {
														player.changeGroup("wei");
														player.setMark("fflanggugai_top", 0)
													}
													player.setMark("fflanggugai_bottom", 1)
												}
											}
										},
									},
								},
							},
							ffmoubiangai: {
								audio: "quanbian",
								trigger: {
									global: "useCardAfter",
								},
								group: ["ffmoubiangai_mark"],
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，当以你为目标的牌结算后，你可以";
										if (storage) {
											return str + "用任意张手牌交换该牌。";
										} else {
											if (player.group == "wei") {
												return str + "用该牌交换牌堆顶X张牌。(X为上次交换的牌数)";
											} else if (player.group == "jin") {
												return str + "用该牌交换牌堆底X张牌。(X为上次交换的牌数)";
											}
										}
									},
								},
								filter(event, player) {
									if (player.storage.ffmoubiangai) {
										if (player.getCards("h", card => card.hasGaintag("谋变")).length == 0) {
											return false;
										}
									}
									return event.targets.includes(player) && player.countCards("he") > 0 && (get.type(event.card) == "basic" || get.type(event.card) == "trick")
								},
								async content(event, trigger, player) {
									if (!player.storage.ffmoubiangai) {
										var result = await player.chooseCard()
											.set("position", "he")
											.set("selectCard", [1, Infinity])
											.set("forced", true)
											.forResult();
										player.discard(result.cards, true);
										player.setMark("ffmoubiangai_mark", result.cards.length)
										player.gain(trigger.cards);
										player.changeZhuanhuanji("ffmoubiangai");
									} else {
										const cards1 = get.cards(player.countMark("ffmoubiangai_mark"), true);
										const cards2 = get.bottomCards(player.countMark("ffmoubiangai_mark"), true);
										const cards3 = player.getCards("h", card => card.hasGaintag("谋变"));
										const cards4 = [];
										const lose_list = [];
										lose_list.push([player, cards3]);
										if (player.group == "wei") {
											player.gain(cards1)
										} else if (player.group == "jin") {
											player.gain(cards2)
										}
										await game
											.loseAsync({
												lose_list: lose_list,
											})
											.setContent("chooseToCompareLose");
										var result = await player.chooseToMove()
											.set("list", [["手牌", cards3], ["牌堆", cards4]])
											.set("prompt", "将这些牌以任意顺序置于牌堆")
											.set("forced", true)
											.set('filterOk', function (moved) {
												return moved[0].length == 0;
											})
											.forResult();
										if (result) {
											if (player.group == "wei") {
												var top = result.moved[1]
												if (top.length) {
													await player.lose(cards4, ui.cardPile);
													for (let i = 0; i < top.length; i++) {
														const card = top[i];
														card.fix();
														ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
													}
												}
											} else if (player.group == "jin") {
												var bottom = result.moved[1]
												if (bottom.length) {
													await player.lose(cards4, ui.cardPile);
													for (let i = 0; i < bottom.length; i++) {
														const card = bottom[i];
														card.fix();
														ui.cardPile.appendChild(card);
													}
												}
											}
										}
										player.changeZhuanhuanji("ffmoubiangai");
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											player: "gainAfter"
										},
										filter(event, player) {
											return true
										},
										forced: true,
										async content(event, trigger, player) {
											await player.removeGaintag("谋变", player.getCards("h"));
											await player.addGaintag(trigger.cards, "谋变")
										}
									},
								},
							},
							ffyanzhaogai: {
								audio: ["nzry_zhizheng"],
								trigger: {
									player: "useCardBefore",
								},
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，你使用牌指定目标后，你可以将之改为";
										if (storage) {
											return str + "【五谷丰登】结算。";
										} else {
											return str + "【杀】结算。";
										}
									},
								},
								filter(event, player) {
									if (player.storage.ffyanzhaogai) {
										return event.targets.length > 0 && !event.targets.includes(player) && event.getParent(2).name != "ffyanzhaogai" && event.getParent(1).name != "ffyanzhaogai"
									}
									return event.targets.length > 0 && event.getParent(2).name != "ffyanzhaogai" && event.getParent(1).name != "ffyanzhaogai"
								},
								async content(event, trigger, player) {
									trigger.cancel();
									if (!player.storage.ffyanzhaogai) {
										player.useCard(trigger.cards, { name: "wugu" }, trigger.targets, true, false).set("skill", trigger.skill)
										player.changeZhuanhuanji("ffyanzhaogai");
									} else {
										player.useCard(trigger.cards, { name: "sha" }, trigger.targets, true, false).set("skill", trigger.skill)
										player.changeZhuanhuanji("ffyanzhaogai");
									}
								},
							},
							ffmouzhugai: {
								audio: ["nzry_kuizhu"],
								group: ["ffmouzhugai_mark", "ffmouzhugai_mark2", "ffmouzhugai_mark3"],
								enable: ["chooseToUse"],
								filter: function (event, player) {
									const targets = game.players.sortBySeat().slice();
									for (let target of targets) {
										if (target.getCards("h").filter(card => card.hasGaintag("谋诛")).length > 0) {
											for (var name of lib.inpile) {
												if (event.filterCard({ name: name, isCard: true }, player, event)) return true;
											}
										}
									}
								},
								onChooseToUse(event) {
									if (!game.online && !event.ffmouzhugai) {
										const cards = [];
										game.getGlobalHistory("cardMove", function (evt) {
											if (evt.name != "lose") {
												return false;
											}
											for (var i of evt.cards) {
												if ((get.type(i, false) == "basic" || get.type(i, false) == "trick")) {
													cards.push(i);
												}
											}
										});
										const list = [];
										list.push(["basic", "", "jiu"])
										for (let i = 0; i < cards.length; i++) {
											const card = cards[i];
											const type = get.type(card, false);
											if (["basic", "trick"].includes(type)) {
												list.push([type, i + 1, get.name(card, false), get.nature(card, false)]);
											}
										}
										event.set("ffmouzhugai", list);
									}
								},
								chooseButton: {
									dialog: function (event, player) {
										const list = event.ffmouzhugai;
										return ui.create.dialog(`视为使用一张牌`, [list, "vcard"])
									},
									filter: function (button, player) {
										return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
									},
									backup: function (links, player) {
										return {
											filterCard: () => false,
											selectCard: -1,
											popname: true,
											viewAs: { name: links[0][2], nature: links[0][3], isCard: true, },
										}
									},
								},
								hiddenCard: function (player, name) {
									if (!lib.inpile.includes(name)) return false;
									var type = get.type2(name);
									return ["basic", "trick"].includes(type);
								},
								subSkill: {
									"mark": {
										trigger: {
											global: "gainAfter"
										},
										forced: true,
										async content(event, trigger, player) {
											await trigger.player.addGaintag(trigger.cards, "谋诛")
										}
									},
									"mark2": {
										trigger: {
											global: "phaseBegin"
										},
										forced: true,
										async content(event, trigger, player) {
											const targets = game.players.sortBySeat().slice();
											for (let target of targets) {
												target.removeGaintag("谋诛", target.getCards("h"))
											}
										}
									},
									"mark3": {
										trigger: {
											player: "useCard"
										},
										filter(event, player) {
											return event.skill == "ffmouzhugai_backup"
										},
										audio: ["nzry_kuizhu"],
										forced: true,
										async content(event, trigger, player) {
											var result = await player.chooseTarget()
												.set("filterTarget", function (card, player, target) {
													var cards = target.getCards("h");
													for (var i = 0; i < cards.length; i++) {
														if (cards[i].hasGaintag("谋诛")) {
															return true;
														}
													}
													return false;
												})
												.set("selectTarget", 1)
												.set("forced", true)
												.set("prompt", "弃置一名角色手中其本回合获得的牌")
												.forResult()
											var discardCards = result.targets[0].getCards("h").filter(card => card.hasGaintag("谋诛"));
											var result2 = await result.targets[0].discard(discardCards, true);
											for (var j = 0; j < result2.cards.length; j++) {
												if (get.name(result2.cards[j]) == get.name(trigger.card)) {
													break;
												} else if (j + 1 == result2.cards.length) {
													player.loseHp(1);
												}
											}
										}
									}
								},
							},
							ffwufenggai: {
								audio: "nzry_lijun1",
								zhuSkill: true,
								group: ["ffwufenggai_mark"],
								forced: true,
								trigger: {
									global: ["loseAfter"]
								},
								filter(event, player) {
									return event.player != player && event.player.group == "wu";
								},
								async content(event, trigger, player) {
									player.addMark("ffwufenggai_mark", trigger.cards.length)
									if (player.countMark("ffwufenggai_mark") > 4) {
										while (player.countMark("ffwufenggai_mark") > 4) {
											player.recover();
											player.removeMark("ffwufenggai_mark", 5)
										}
									}
								},
							},
							//张瑾云
							ffyinsigai: {
								audio: "ext:重塑系列削弱版/audio:2",
								locked: true,
								/*clickableFilter(player) {
									return player.hasSkill("ffyinsigai");
								},
								clickable(player) {
									if (player.isUnderControl(true)) {
										const cards = lib.skill.ffyinsigai.getCards(player);
										function createDialogWithControl(result) {
											const dialog = ui.create.dialog("禋祀", "peaceDialog");
											result.length > 0 ? dialog.add(result, true) : dialog.addText("牌堆顶无牌");
											const control = ui.create.control("确定", () => dialog.close());
											dialog._close = dialog.close;
											dialog.hide = dialog.close = function (...args) {
												control.close();
												return dialog._close(...args);
											};
											if (_status.ffyinsigai_clickable) {
												_status.ffyinsigai_clickable.close();
											}
											_status.ffyinsigai_clickable = dialog;
											dialog.open();
										}
										if (cards instanceof Promise) {
											cards.then(([ok, result]) => createDialogWithControl(result));
										} else {
											createDialogWithControl(cards);
										}
									}
								},*/
								getCards(player) {
									let cards = [];
									if (game.online) {
										return game.requestSkillData("ffyinsigai", "getTopCards", 10000);
									} else {
										if (ui.cardPile.hasChildNodes !== false) {
											cards = Array.from(ui.cardPile.childNodes).slice(0, 3);
										}
									}
									return cards;
								},
								sync: {
									getTopCards(client) {
										if (ui.cardPile.hasChildNodes !== false) {
											return Array.from(ui.cardPile.childNodes).slice(0, 3);
										}
										return [];
									},
								},
								mark: true,
								marktext: "牌",
								intro: {
									mark(dialog, content, player, event) {
										if (player !== game.me) {
											return get.translation(player) + "观看牌堆中...";
										}
										if (!player.hasSkill("ffyinsigai")) {
											return "技能失效，不可观看";
										}
										const cards = get.info("ffyinsigai").getCards(player);
										if (cards instanceof Promise) {
											return cards.then(([ok, result]) => {
												if (!result.length) {
													dialog.addText("牌堆顶无牌");
												} else {
													dialog.addText("(从左往右看，最左边的是牌堆顶第一张)");
													dialog.add(result);
												}
											});
										}
										if (!cards.length) {
											return "牌堆顶无牌";
										}
										dialog.addText("(从左往右看，最左边的是牌堆顶第一张)");
										dialog.add(cards);
									},
								},
								/*intro: {
									markcount: () => 0,
									mark(dialog, count = 0, player, event, skill) {
										const intronode = ui.create.div(".menubutton.pointerdiv", "点击发动", function () {
											if (!this.classList.contains("disabled")) {
												this.classList.add("disabled");
												this.style.opacity = 0.5;
												lib.skill[skill].clickable(player);
											}
										});
										if (!_status.gameStarted || !player.isUnderControl(true) || !lib.skill[skill].clickableFilter(player)) {
											intronode.classList.add("disabled");
											intronode.style.opacity = 0.5;
										}
										dialog.add(intronode);
									},
								},*/
								enable: "chooseToUse",
								filter(event, player) {
									return event.ffyinsigai.some(list => {
										const cardx = get.autoViewAs({ name: list[2], nature: list[3], storage: { ffyinsigai: true } }, "unsure");
										return event.filterCard(cardx, player, event) && player.countCards("hes") >= list[1];
									});
								},
								onChooseToUse(event) {
									if (!game.online && !event.ffyinsigai) {
										const cards = get.cards(3, true);
										const list = [];
										const player = event.player;
										const storage = player.getStorage("ffyinsigai_used");
										for (let i = 0; i < cards.length; i++) {
											if (storage.includes(i + 1)) {
												continue;
											}
											const card = cards[i];
											const type = get.type(card, false);
											if (["basic", "trick"].includes(type)) {
												list.push([type, i + 1, get.name(card, false), get.nature(card, false)]);
											}
										}
										event.set("ffyinsigai", list);
									}
								},
								chooseButton: {
									dialog(event, player) {
										const list = event.ffyinsigai;
										const dialog = ui.create.dialog("禋祀", [list, (item, type, position, noclick, node) => {
											node = ui.create.buttonPresets.vcard(item, type, position, noclick);
											node.querySelector(".info").lastChild.innerHTML = `${item[1]}`;
											return node;
										}], "hidden");
										return dialog;
									},
									filter(button) {
										const player = get.player();
										const evt = get.event().getParent();
										const link = button.link
										const card = get.autoViewAs({ name: link[2], nature: link[3], storage: { ffyinsigai: true } }, "unsure");
										return evt.filterCard(card, player, evt) && player.countCards("hes") >= link[1];
									},
									backup(links, player) {
										return {
											audio: "ffyinsigai",
											filterCard: true,
											selectCard: links[0][1],
											viewAs: {
												name: links[0][2],
												nature: links[0][3],
												storage: { ffyinsigai: true },
											},
											log: false,
											async precontent(event, trigger, player) {
												player.logSkill("ffyinsigai");
												event.getParent().addCount = false;
												player.addTempSkill("ffyinsigai_used");
												player.markAuto("ffyinsigai_used", event.result.cards.length);
											},
											position: "hes",
										}
									},
									prompt(links, player) {
										const link = links[0];
										return `将${get.cnNumber(link[1])}张牌当作${get.translation(link[3]) || ""}【${get.translation(link[2])}】使用`
									}
								},
								mod: {
									cardUsable(card, player, num) {
										if (card?.storage?.ffyinsigai) {
											return Infinity;
										}
									}
								},
								subSkill: {
									used: {
										charlotte: true,
										onremove: true,
										intro: {
											content: "已转化过的序号：$",
										}
									},
									backup: {},
								},
							},
							ffjijiaogai: {
								audio: "dcjijiao",
								enable: "phaseUse",
								filter(event, player) {
									return !player.getStorage("ffjijiaogai_record").includes(player.countCards("h"));
								},
								manualConfirm: true,
								async content(event, trigger, player) {
									const num = player.countCards("h");
									player.addTempSkill(`${event.name}_record`);
									player.markAuto(`${event.name}_record`, num);
									const moved = [];
									const nodes = [["handcards", "手牌"], ["top", "牌堆顶"], ["bottom", "弃牌堆"]];
									while (moved.length < 3) {
										const result = await player
											.chooseButton([
												`继椒：请选择要交换的区域`,
												[nodes, "tdnodes"],
												[nodes.map(i => [i[0] + "x", i[1]]), "tdnodes"],
											], 2, !moved.length)
											.set("moved", moved)
											.set("filterButton", button => {
												if (!ui.selected?.buttons?.length) {
													return button.link.slice(-1) != "x" && !get.event().moved.includes(button.link);
												}
												return button.link.slice(-1) == "x" && button.link.slice(0, -1) != ui.selected.buttons[0].link;
											})
											.forResult();
										if (result?.bool && result.links?.length) {
											let { links } = result;
											links[1] = links[1].slice(0, -1);
											moved.push(links[0]);
											let cards_list = [];
											for (const i of links) {
												let cards;
												if (i == "handcards") {
													cards = player.getCards("h");
													await player.lose(cards, ui.ordering);
												}
												else {
													cards = (i == "top") ? Array.from(ui.cardPile.childNodes).slice(0, 3) : _status.discarded.randomGets(3);
													await game.cardsGotoOrdering(cards);
												}
												cards_list.push(cards);
											}
											cards_list.reverse();
											for (let i = 0; i < links.length; i++) {
												const link = links[i];
												let cards = cards_list[i];
												if (!cards.length) {
													continue;
												}
												if (link == "handcards") {
													await player.gain(cards, "draw");
												}
												else if (link == "top") {
													if (links.find(i => i != link) == "handcards") {
														const { result } = await player
															.chooseToMove("继椒：将牌按顺序置于牌堆顶（最左边为牌堆顶）", true)
															.set("list", [["牌堆顶", cards]])
															.set("reverse", _status.currentPhase?.next && get.attitude(player, _status.currentPhase.next) > 0)
															.set("processAI", function (list) {
																const cards = list[0][1].slice(0);
																cards.sort(function (a, b) {
																	return (_status.event.reverse ? 1 : -1) * (get.value(b) - get.value(a));
																});
																return [cards];
															});
														if (result?.bool) {
															cards = result.moved[0].slice().reverse();
														}
													}
													await game.cardsGotoPile(cards, "insert");
												}
												else {
													await game.cardsDiscard(cards.reverse());
												}
											}
										}
										else {
											break;
										}
									}
								},
								subSkill: {
									record: {
										charlotte: true,
										onremove: true,
										intro: {
											content(storage, player) {
												return `本回合已记录手牌数：${(storage.sort((a, b) => a - b).join("、"))}`;
											}
										}
									}
								}
							},
							//孙和
							ffpanqigai: {
								audio: "ext:重塑系列削弱版/audio:2",
								trigger: {
									global: "roundStart",
									player: "damageEnd",
								},
								filter(event, player) {
									return player.countCards("he") && game.hasPlayer(target => target.canAddJudge("shandian"));
								},
								async cost(event, trigger, player) {
									event.result = await player
										.chooseCardTarget({
											prompt: get.prompt2(event.skill),
											filterCard: true,
											position: "he",
											filterTarget(card, player, target) {
												return target.canAddJudge("shandian");
											}
										})
										.forResult();
								},
								async content(event, trigger, player) {
									const { cards, targets: [target] } = event;
									player.$giveAuto(cards, target, false);
									await target.addJudge({ name: "shandian" }, cards);
									cards[0].addGaintag("eternal_ffpanqigai_tag");
								},
								group: ["ffpanqigai_reset"],
								subSkill: {
									reset: {
										forced: true,
										trigger: {
											global: ["loseAfter", "loseAsyncAfter", "cardsDiscardAfter"],
										},
										filter(event, player) {
											if (event.name.startsWith("lose")) {
												if (event.getlx === false || event.position != ui.discardPile) {
													return false;
												}
												return game.hasPlayer2(target => Object.values(event.getl?.(target)?.gaintag_map).flat().includes("eternal_ffpanqigai_tag"));
											}
											else {
												const evt = event.getParent();
												const evt2 = evt.relatedEvent || evt.getParent();
												return game.hasPlayer2(target => {
													return target.hasHistory("lose", evtx => (evtx.relatedEvent || evtx.getParent()) == evt2 && Object.values(evtx.gaintag_map).flat().includes("eternal_ffpanqigai_tag"));
												})
											}
										},
										async content(event, trigger, player) {
											trigger.cards.forEach(i => i.removeGaintag("eternal_ffpanqigai_tag"));
											game.log(player, "重置了〖樟囚〗");
											player.unmarkAuto("ffzhangqiugai", player.getStorage("ffzhangqiugai"));
										}
									},
									tag: {},
								}
							},
							ffzhangqiugai: {
								audio: "ext:重塑系列削弱版/audio:2",
								global: "ffzhangqiugai_global",
								intro: {
									content: "已发动过的角色：$",
								},
								subSkill: {
									global: {
										enable: "chooseToUse",
										hiddenCard(player, name) {
											return ["tao", "sha"].includes(name);
										},
										getList(event, player) {
											return ["tao", "sha"].filter(name => {
												const card = get.autoViewAs({ name: name, isCard: true });
												return event.filterCard(card, player, event) && game.hasPlayer(function (target) {
													return target.hasSkill("ffzhangqiugai") && !target.getStorage("ffzhangqiugai").includes(player) && event.filterTarget?.(card, player, target);
												});
											});
										},
										filter(event, player) {
											return lib.skill.ffzhangqiugai_global.getList(event, player).length;
										},
										chooseButton: {
											dialog(event, player) {
												const dialog = ui.create.dialog("樟囚", [lib.skill.ffzhangqiugai_global.getList(event, player), "vcard"], "hidden");
												dialog.direct = true;
												return dialog;
											},
											filter(button) {
												const { link } = button;
												const player = get.player();
												const evt = get.event().getParent();
												const card = get.autoViewAs({ name: link[2], isCard: true });
												return evt.filterCard(card, player, evt);
											},
											backup(links, player) {
												return {
													filterCard: () => false,
													selectCard: -1,
													filterTarget(card, player, target) {
														const targets = ui.selected.targets.slice(0);
														const filter = target => target.hasSkill("ffzhangqiugai") && !target.getStorage("ffzhangqiugai").includes(player);
														if (!filter(target) && !targets.some(i => filter(i))) {
															return false;
														}
														return _status.event._backup.filterTarget.apply(this, arguments);
													},
													complexSelect: true,
													log: false,
													///ignoreMod: true,
													viewAs: {
														isCard: true,
														name: links[0][2],
														suit: "none",
														number: null,
													},
													async precontent(event, trigger, player) {
														const { targets } = event.result;
														player.logSkill("ffzhangqiugai");
														targets.forEach(target => {
															if (target.hasSkill("ffzhangqiugai") && !target.getStorage("ffzhangqiugai").includes(player)) {
																target.markAuto("ffzhangqiugai", player);
															}
														});
														let hs = player.getCards("h");
														player.$throw(hs.length, 1000);
														await player.lose(hs, ui.ordering);
														const cards = Array.from(ui.cardPile.childNodes).slice(0, 3);
														await game.cardsGotoOrdering(cards);
														if (hs.length) {
															const { result } = await player
																.chooseToMove("樟囚：将牌按顺序置于牌堆顶（最左边为牌堆顶）", true)
																.set("list", [["牌堆顶", hs]])
																.set("reverse", _status.currentPhase?.next && get.attitude(player, _status.currentPhase.next) > 0)
																.set("processAI", function (list) {
																	const cards = list[0][1].slice(0);
																	cards.sort(function (a, b) {
																		return (_status.event.reverse ? 1 : -1) * (get.value(b) - get.value(a));
																	});
																	return [cards];
																});
															if (result?.bool) {
																hs = result.moved[0].slice().reverse();
															}
															await game.cardsGotoPile(hs, "insert");
														}
														game.log(player, `从牌堆顶获得了${cards.length}张牌`);
														await player.gain(cards, "draw");
													}
												}
											},
											prompt(links, player) {
												return `请选择【${get.translation(links[0][2])}】的目标（前置操作：将手牌与牌堆顶三张牌交换）`;
											}
										},
										ai: {
											save: true,
											skillTagFilter(player, tag, arg) {
												return game.hasPlayer(function (target) {
													return target.hasSkill("ffzhangqiugai") && !target.getStorage("ffzhangqiugai").includes(player);
												});
											},
										}
									},
								}
							},
							fftianzhaogai: {
								audio: "ext:重塑系列削弱版/audio:2",
								trigger: {
									player: ["damageEnd", "phaseZhunbeiBegin"],
								},
								filter(event, player) {
									return player.countCards("he") > 0 && !player.isDisabledJudge();
								},
								async content(event, trigger, player) {
									var result = await player.chooseCard({
										position: "he",
										selectCard: [1, Infinity],
										prompt: "天照：重铸任意张牌"
									}).forResult()
									await player.recast(result.cards);
									const choices = ['选项一', '选项二'];
									const choiceList = ["用重铸牌蓄谋", "将蓄谋牌与牌堆顶等量张牌交换"];
									if (player.countCards("j", card => get.name(card) == "xumou_jsrg") == 0) {
										choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
										choices.remove("选项二");
									};
									var result2 = await player
										.chooseControl()
										.set('controls', choices)
										.set("choiceList", choiceList)
										.forResult();
									if (result2.control == "选项一") {
										for (var j = 0; j < result.cards.length; j++) {
											await player.addJudge({ name: "xumou_jsrg" }, result.cards[j]);
										}
									} else if (result2.control == "选项二") {
										const cards3 = player.getCards("j", card => get.name(card) == "xumou_jsrg");
										const cards4 = [];
										const lose_list = [];
										lose_list.push([player, cards3]);
										for (var j = 0; j < cards3.length; j++) {
											await player.addJudge({ name: "xumou_jsrg" }, get.cards());
										}
										await game
											.loseAsync({
												lose_list: lose_list,
											})
											.setContent("chooseToCompareLose");
										var result = await player.chooseToMove()
											.set("list", [
												[
													"蓄谋牌",
													[
														cards3,
														(item, type, position, noclick, node) => {
															node = ui.create.buttonPresets.vcard(item.cards[0], type, position, noclick);
															node.node.range.style.bottom = "2.5px";
															node.node.range.style.width = "100%";
															node.node.range.style.right = "0%";
															node.node.range.style.textAlign = "center";
															//node._link = node.link = [null, null, item];
															node._customintro = [node => "蓄谋牌", node => `实体牌：${taofen}`];
															return node;
														},
													],
												], ["牌堆顶", cards4]
											])
											.set("prompt", "将这些牌以任意顺序置于牌堆顶")
											.set("forced", true)
											.set('filterOk', function (moved) {
												return moved[0].length == 0;
											})
											.forResult();
										if (result) {
											var top = result.moved[1]
											if (top.length) {
												await player.lose(cards4, ui.cardPile);
												for (let i = 0; i < top.length; i++) {
													const card = top[i];
													card.fix();
													ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
												}
											}
										}
									}
								},
							},
							ffyaohuogai: {
								audio: "ext:重塑系列削弱版/audio:2",
								trigger: {
									global: "useCard",
								},
								filter(event, player) {
									return event.targets.length > 0 && event.getParent(2).name != "ffyaohuogai" && event.getParent(1).name != "ffyaohuogai" &&
										player.countCards("j", card => {
											const cards = card[card.cardSymbol].cards;
											if (!event.targets.includes(event.player)) {
												return (card.viewAs || card.name) == "xumou_jsrg" &&
													(get.type(cards[0]) == "basic" || get.type(cards[0]) == "trick") &&
													get.name(cards[0]) != "shan" && get.name(cards[0]) != "wuxie" &&
													get.name(cards[0]) != "jiedao";
											} else {
												return (card.viewAs || card.name) == "xumou_jsrg" &&
													(get.type(cards[0]) == "basic" || get.type(cards[0]) == "trick") &&
													get.name(cards[0]) != "shan" && get.name(cards[0]) != "wuxie" &&
													get.name(cards[0]) != "wanjian" && get.name(cards[0]) != "juedou" &&
													get.name(cards[0]) != "sha" && get.name(cards[0]) != "shunshou" &&
													get.name(cards[0]) != "guohe" && get.name(cards[0]) != "nanman" &&
													get.name(cards[0]) != "jiedao";
											}
										}) > 0
								},
								async content(event, trigger, player) {
									const cards3 = player.getCards("j", card => get.name(card) == "xumou_jsrg");
									const {
										result: { bool, links },
									} = await player
										.chooseButton(
											[
												"妖惑：移去区域里的一张蓄谋牌",
												player.getCards("j", card => {
													const cards = card[card.cardSymbol].cards;
													if (!trigger.targets.includes(trigger.player)) {
														return (card.viewAs || card.name) == "xumou_jsrg" &&
															(get.type(cards[0]) == "basic" || get.type(cards[0]) == "trick") &&
															get.name(cards[0]) != "shan" && get.name(cards[0]) != "wuxie" &&
															get.name(cards[0]) != "jiedao";
													} else {
														return (card.viewAs || card.name) == "xumou_jsrg" &&
															(get.type(cards[0]) == "basic" || get.type(cards[0]) == "trick") &&
															get.name(cards[0]) != "shan" && get.name(cards[0]) != "wuxie" &&
															get.name(cards[0]) != "wanjian" && get.name(cards[0]) != "juedou" &&
															get.name(cards[0]) != "sha" && get.name(cards[0]) != "shunshou" &&
															get.name(cards[0]) != "guohe" && get.name(cards[0]) != "nanman" &&
															get.name(cards[0]) != "jiedao";
													}
												}),
											],
											true
										)
										.set("filterButton", button => {
											return lib.filter.cardDiscardable(button.link, get.player(), "ffyaohuogai");
										})
									if (bool) {
										await player.discard(links);
										const card = links[0];
										const cards = card[card.cardSymbol].cards
										player.draw();
										trigger.cancel();
										trigger.player.useCard(trigger.cards, { name: get.name(cards[0]) }, trigger.targets, true, false)
									}
								},
							},
							ffhongtugai: {
								audio: "olsbhongtu",
								enable: "phaseUse",
								group: ["ffhongtugai_one", "ffhongtugai_two", "ffhongtugai_three", "ffhongtugai_mark"],
								filter: function (event, player) {
									return !player.hasMark("ffhongtugai_one") ||
										!player.hasMark("ffhongtugai_two") ||
										!player.hasMark("ffhongtugai_three");
								},
								async content(event, trigger, player) {
									const choiceList = ["令一名角色将一张牌当【树上开花】使用", "令一名角色将两张牌当【笑里藏刀】使用", "令一名角色将三张牌当【兵临城下】使用",];
									const choices = ["选项一", "选项二", "选项三", "cancel2"];
									if (player.countMark("ffhongtugai_one") > 0) {
										choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
										choices.remove("选项一");
									};
									if (player.countMark("ffhongtugai_two") > 0) {
										choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
										choices.remove("选项二");
									};
									if (player.countMark("ffhongtugai_three") > 0) {
										choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + "</span>";
										choices.remove("选项三");
									};
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.set("choiceList", choiceList)
										.forResult();
									if (result.control == "选项一") {
										var result2 = await player.chooseTarget()
											.set("filterTarget", function (card, player, target) {
												return target.countCards("he") > 0
											})
											.set("selectTarget", 1)
											.set("prompt", "令一名角色将一张牌当【树上开花】使用")
											.forResult()
										if (result2.bool) {
											var result3 = await result2.targets[0].chooseCard()
												.set("position", "he")
												.set("selectCard", 1)
												.set("forced", true)
												.set("prompt", "将一张牌当【树上开花】使用")
												.forResult();
											await result2.targets[0].chooseUseTarget(result3.cards, { name: "kaihua" }, true, false);
											if (result2.targets[0] != player) {
												await player.chooseUseTarget(result3.cards[0], false, false)
											}
											player.addMark("ffhongtugai_one", 1);
										}
									} else if (result.control == "选项二") {
										var result2 = await player.chooseTarget()
											.set("filterTarget", function (card, player, target) {
												return target.countCards("he") > 1
											})
											.set("selectTarget", 1)
											.set("prompt", "令一名角色将两张牌当【笑里藏刀】使用")
											.forResult()
										if (result2.bool) {
											var result3 = await result2.targets[0].chooseCard()
												.set("position", "he")
												.set("selectCard", 2)
												.set("forced", true)
												.set("prompt", "将两张牌当【笑里藏刀】使用")
												.forResult();
											await result2.targets[0].chooseUseTarget(result3.cards, { name: "wy_xiaolicangdao" }, true, false);
											if (result2.targets[0] != player) {
												await player.chooseUseTarget(result3.cards[0], false, false)
												await player.chooseUseTarget(result3.cards[1], false, false)
											}
											player.addMark("ffhongtugai_two", 1);
										}
									} else if (result.control == "选项三") {
										var result2 = await player.chooseTarget()
											.set("filterTarget", function (card, player, target) {
												return target.countCards("he") > 2
											})
											.set("selectTarget", 1)
											.set("prompt", "令一名角色将将三张牌当【兵临城下】使用")
											.forResult()
										if (result2.bool) {
											var result3 = await result2.targets[0].chooseCard()
												.set("position", "he")
												.set("selectCard", 3)
												.set("forced", true)
												.set("prompt", "将三张牌当【兵临城下】使用")
												.forResult();
											await result2.targets[0].chooseUseTarget(result3.cards, { name: "binglinchengxiax" }, true, false);
											if (result2.targets[0] != player) {
												await player.chooseUseTarget(result3.cards[0], false, false)
												await player.chooseUseTarget(result3.cards[1], false, false)
												await player.chooseUseTarget(result3.cards[2], false, false)
											}
											player.addMark("ffhongtugai_three", 1);
										}
									}
								},
								subSkill: {
									"mark": {
										forced: true,
										trigger: {
											player: "phaseUseBegin",
										},
										content: function () {
											player.clearMark("ffhongtugai_one");
											player.clearMark("ffhongtugai_two");
											player.clearMark("ffhongtugai_three");
										},
									},
								},
							},
							ffliancegai: {
								audio: "xinlianhuan",
								trigger: {
									global: "useCardAfter",
								},
								filter(event, player) {
									return _status.currentPhase == player && event.player != player
								},
								async content(event, trigger, player) {
									const choices = ['铁索', '火攻'];
									var result2 = await player
										.chooseControl()
										.set('controls', choices)
										.forResult();
									if (result2.control == "铁索") {
										await player.chooseUseTarget({ name: "tiesuo" }, { isCard: false }, true, false);
									} else if (result2.control == "火攻") {
										await player.chooseUseTarget({ name: "huogong" }, { isCard: false }, true, false);
									}
								},
							},
							ffhuanhuogai: {
								audio: "guhuo_guess",
								enable: "phaseUse",
								group: ["ffhuanhuogai_yinpai", "ffhuanhuogai_mark", "ffhuanhuogai_mark2"],
								trigger: {
									player: "damageEnd",
								},
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，";
										if (storage) {
											return str + "出牌阶段或当你受到伤害后，你可以令所有其他角色各明置一张牌";
										} else {
											return str + "你可以如手牌般使用或打出其他角色的明置牌";
										}
									},
								},
								filter(event, player) {
									return !player.storage.ffhuanhuogai
								},
								async content(event, trigger, player) {
									if (!player.storage.ffhuanhuogai) {
										var result = await player.chooseTarget()
											.set("filterTarget", function (card, player, target) {
												return target.countCards("h", card => !card.hasGaintag("幻惑")) > 0 && target != player
											})
											.set("selectTarget", [1, Infinity])
											.forResult()
										if (result.bool) {
											for (let i = 0; i < result.targets.length; i++) {
												var hp1 = result.targets[i].hp
												if (hp1 > result.targets[i].countCards("h", card => !card.hasGaintag("幻惑"))) {
													hp1 = result.targets[i].countCards("h", card => !card.hasGaintag("幻惑"))
												}
												var result2 = await result.targets[i].chooseCard()
													.set("position", "h")
													.set("filterCard", function (card, player, target) {
														return !card.hasGaintag("幻惑")
													})
													.set("selectCard", hp1)
													.set("forced", true)
													.set("prompt", `展示${hp1}张手牌`)
													.forResult();
												var result1 = await result.targets[i].showCards(result2.cards)
												await result.targets[i].addGaintag(result1.cards, "幻惑")
												console.log(result.targets[i].getCards("h").filter(card => card.hasGaintag("幻惑")).length)
											}
											player.changeZhuanhuanji("ffhuanhuogai");
										}
									}
								},
								subSkill: {
									"yinpai": {
										enable: ["chooseToUse"],
										filter: function (event, player) {
											const targets = game.players.sortBySeat().slice();
											for (let target of targets) {
												if (target.getCards("h").filter(card => card.hasGaintag("幻惑")).length > 0 && player.storage.ffhuanhuogai) {
													for (var name of lib.inpile) {
														if (event.filterCard({ name: name, isCard: true }, player, event)) return true;
													}
												}
											}
										},
										onChooseToUse(event) {
											if (!game.online && !event.ffhuanhuogai) {
												const cards = [];
												const targets = game.players.sortBySeat().slice();
												for (let target of targets) {
													const cards2 = target.getCards("h").filter(card => card.hasGaintag("幻惑"))
													if (cards2.length > 0) {
														for (let i = 0; i < cards2.length; i++) {
															cards.push(cards2[i])
														}
													}
												}
												const list = [];
												for (let i = 0; i < cards.length; i++) {
													const card = cards[i];
													const type = get.type(card, false);
													if (["basic", "trick"].includes(type)) {
														list.push([type, i + 1, get.name(card, false), get.nature(card, false)]);
													}
												}
												event.set("ffhuanhuogai", list);
											}
										},
										chooseButton: {
											dialog: function (event, player) {
												const list = event.ffhuanhuogai;
												return ui.create.dialog(`视为使用一张牌`, [list, "vcard"])
											},
											filter: function (button, player) {
												return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
											},
											backup: function (links, player) {
												return {
													filterCard: () => false,
													selectCard: -1,
													popname: true,
													viewAs: { name: links[0][2], nature: links[0][3], isCard: true, },
												}
											},
										},
										hiddenCard: function (player, name) {
											if (!lib.inpile.includes(name)) return false;
											var type = get.type2(name);
											return ["basic", "trick"].includes(type);
										},
									},
									"mark": {
										trigger: {
											player: "useCard"
										},
										filter(event, player) {
											return event.skill == "ffhuanhuogai_yinpai_backup" || event.getParent(1).name == "ffhuanhuogai_yinpai_backup"
										},
										audio: "guhuo_guess",
										forced: true,
										async content(event, trigger, player) {
											const targets = game.players.sortBySeat().slice();
											for (let target of targets) {
												const cards2 = target.getCards("h").filter(card => card.hasGaintag("幻惑"))
												if (cards2.length > 0) {
													for (let i = 0; i < cards2.length; i++) {
														if (get.name(cards2[i]) == get.name(trigger.card)) {
															player.markAuto("ffhuanhuogai_mark2", target);
															target.addGaintag(cards2[i], "1");
															break;
														}
													}
												}
											}
											var result = await player.chooseTarget()
												.set("filterTarget", function (card, player, target) {
													return player.getStorage("ffhuanhuogai_mark2").includes(target) && target != player
												})
												.set("selectTarget", 1)
												.set("forced", true)
												.forResult()
											result.targets[0].discard(result.targets[0].getCards("h").filter(card => card.hasGaintag("1")))
											for (let target of targets) {
												target.removeGaintag("1", target.getCards("h"));
											}
											player.setStorage("ffhuanhuogai_mark2", null);
											player.changeZhuanhuanji("ffhuanhuogai");
										}
									},
									"mark2": {
										trigger: {
											player: "phaseBegin",
										},
										forced: true,
										filter(event, player) {
											return player.storage.ffhuanhuogai
										},
										async content(event, trigger, player) {
											player.changeZhuanhuanji("ffhuanhuogai");
										}
									}
								},
							},
							ffshimugai: {
								trigger: {
									player: ["gainAfter", "loseAfter"],
								},
								forced: true,
								locked: true,
								audio: "ext:重塑系列削弱版/audio:2",
								group: ["ffshimugai_one", "ffshimugai_two", "ffshimugai_three"],
								filter: function (event, player) {
									return player.countCards("h") % 2 == 1
								},
								async content(event, trigger, player) {
									const choices = ["摸牌", "弃牌", "调整至体力值"];
									if (player.countMark("ffshimugai_one") > 0) {
										choices.remove("摸牌");
									};
									if (player.countMark("ffshimugai_two") > 0) {
										choices.remove("弃牌");
									};
									if (player.countMark("ffshimugai_three") > 0) {
										choices.remove("调整至体力值");
									};
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.forResult();
									if (result.control == "摸牌") {
										player.addMark("ffshimugai_one", 1);
										if (player.countMark("ffshimugai_two") > 0 && player.countMark("ffshimugai_one") > 0 && player.countMark("ffshimugai_three") > 0) {
											player.recover()
											player.clearMark("ffshimugai_one");
											player.clearMark("ffshimugai_two");
											player.clearMark("ffshimugai_three");
										}
										await player.draw()
									} else if (result.control == "弃牌") {
										player.addMark("ffshimugai_two", 1);
										if (player.countMark("ffshimugai_two") > 0 && player.countMark("ffshimugai_one") > 0 && player.countMark("ffshimugai_three") > 0) {
											player.recover()
											player.clearMark("ffshimugai_one");
											player.clearMark("ffshimugai_two");
											player.clearMark("ffshimugai_three");
										}
										var result2 = await player.chooseCard()
											.set("position", "h")
											.set("selectCard", 1)
											.set("forced", true)
											.forResult();
										await player.discard(result2.cards)
									} else if (result.control == "调整至体力值") {
										player.addMark("ffshimugai_three", 1);
										if (player.countMark("ffshimugai_two") > 0 && player.countMark("ffshimugai_one") > 0 && player.countMark("ffshimugai_three") > 0) {
											player.recover()
											player.clearMark("ffshimugai_one");
											player.clearMark("ffshimugai_two");
											player.clearMark("ffshimugai_three");
										}
										if (player.countCards("h") > player.hp) {
											await player.chooseToDiscard(player.countCards("h") - player.hp, true).forResult()
										} else if (player.countCards("h") < player.hp) {
											await player.drawTo(player.hp)
										}
									}
								},
							},
							ffbujigai: {
								group: ["ffbujigai_mark"],
								enable: "chooseToUse",
								usable: 2,
								position: "h",
								filterCard(card, player) {
									return true
								},
								selectCard() {
									return Math.ceil(_status.event.player.countCards("h") / 2)
								},
								viewAs: {
									name: "juedou",
								},
								viewAsFilter(player) {
									return player.countCards("h") > 0
								},
								subSkill: {
									"mark": {
										audio: "sbganglie",
										trigger: {
											player: "useCardAfter",
										},
										forced: true,
										filter(event, player) {
											return event.skill == "ffbujigai"
										},
										async content(event, trigger, player) {
											player.loseHp()
											if (player.hasHistory("sourceDamage", function (evt) {
												return evt.card == trigger.card
											})) {
												for (let i = 0; i < trigger.cards.length; i++) {
													await player.chooseUseTarget(trigger.cards[i], false, false);
												}
											}
										},
									},
								},
							},
							ffsizhigai: {
								group: ["ffsizhigai_mark"],
								trigger: {
									player: "useCard",
								},
								forced: true,
								filter(event, player) {
									return event.skill == "ffsizhigai_sha" || event.skill == "ffsizhigai_shan"
										|| event.skill == "ffsizhigai_tao" || event.skill == "ffsizhigai_jiu"
								},
								audio: "ext:重塑系列削弱版/audio:2",
								async content(event, trigger, player) {
									if (trigger.skill == "ffsizhigai_sha") {
										if (player.countCards("h") > 4) {
											await player.chooseToDiscard(player.countCards("h") - 4, true).forResult()
										} else if (player.countCards("h") < 4) {
											await player.drawTo(4)
										}
										player.removeSkill("ffsizhigai_sha")
									} else if (trigger.skill == "ffsizhigai_shan") {
										if (player.countCards("h") > 3) {
											await player.chooseToDiscard(player.countCards("h") - 3, true).forResult()
										} else if (player.countCards("h") < 3) {
											await player.drawTo(3)
										}
										player.removeSkill("ffsizhigai_shan")
									} else if (trigger.skill == "ffsizhigai_tao") {
										if (player.countCards("h") > 2) {
											await player.chooseToDiscard(player.countCards("h") - 2, true).forResult()
										} else if (player.countCards("h") < 2) {
											await player.drawTo(2)
										}
										player.removeSkill("ffsizhigai_tao")
									} else if (trigger.skill == "ffsizhigai_jiu") {
										if (player.countCards("h") > 1) {
											await player.chooseToDiscard(player.countCards("h") - 1, true).forResult()
										} else if (player.countCards("h") < 1) {
											await player.drawTo(1)
										}
										player.removeSkill("ffsizhigai_jiu")
									}
								},
								subSkill: {
									"sha": {
										enable: "chooseToUse",
										filterCard: () => false,
										selectCard: -1,
										viewAs: {
											name: "sha",
										},
									},
									"shan": {
										enable: "chooseToUse",
										filterCard: () => false,
										selectCard: -1,
										viewAs: {
											name: "shan",
										},
									},
									"tao": {
										enable: "chooseToUse",
										filterCard: () => false,
										selectCard: -1,
										viewAs: {
											name: "tao",
										},
									},
									"jiu": {
										enable: "chooseToUse",
										filterCard: () => false,
										selectCard: -1,
										viewAs: {
											name: "jiu",
										},
									},
									"mark": {
										trigger: {
											global: ["roundStart"]
										},
										forced: true,
										async content(event, trigger, player) {
											player.addSkill("ffsizhigai_sha")
											player.addSkill("ffsizhigai_shan")
											player.addSkill("ffsizhigai_tao")
											player.addSkill("ffsizhigai_jiu")
										}
									}
								}
							},
							ffzhengqinggai: {
								trigger: {
									player: "useCardAfter",
								},
								filter(event, player) {
									return get.type(event.card) == "basic"
								},
								audio: "clanjianzhi",
								async content(event, trigger, player) {
									var result = await player.chooseTarget()
										.set("filterTarget", function (card, player, target) {
											return target != player
										})
										.set("selectTarget", 1)
										.set("forced", true)
										.forResult()
									if (get.name(trigger.card) == "sha") {
										if (result.targets[0].countCards("h") > 4) {
											await result.targets[0].chooseToDiscard(result.targets[0].countCards("h") - 4, true).forResult()
										} else if (result.targets[0].countCards("h") < 4) {
											await result.targets[0].drawTo(4)
										}
										await result.targets[0].chooseUseTarget({ name: "sha" }, { isCard: false }, false, false);
									} else if (get.name(trigger.card) == "shan") {
										if (result.targets[0].countCards("h") > 3) {
											await result.targets[0].chooseToDiscard(result.targets[0].countCards("h") - 3, true).forResult()
										} else if (result.targets[0].countCards("h") < 3) {
											await result.targets[0].drawTo(3)
										}
									} else if (get.name(trigger.card) == "tao") {
										if (result.targets[0].countCards("h") > 2) {
											await result.targets[0].chooseToDiscard(result.targets[0].countCards("h") - 2, true).forResult()
										} else if (result.targets[0].countCards("h") < 2) {
											await result.targets[0].drawTo(2)
										}
										await result.targets[0].chooseUseTarget({ name: "tao" }, { isCard: false }, false, false);
									} else if (get.name(trigger.card) == "jiu") {
										if (result.targets[0].countCards("h") > 1) {
											await result.targets[0].chooseToDiscard(result.targets[0].countCards("h") - 1, true).forResult()
										} else if (result.targets[0].countCards("h") < 1) {
											await result.targets[0].drawTo(1)
										}
										await result.targets[0].chooseUseTarget({ name: "jiu" }, { isCard: false }, false, false);
									}
								},
							},
							ffbailiangai: {
								audio: "pyzhuren",
								group: ["ffbailiangai_mark"],
								enable: "phaseUse",
								async content(event, trigger, player) {
									var result = await player.chooseCard()
										.set("position", "hes")
										.set("filterCard", function (card, player, target) {
											return get.name(card) == "sha"
										})
										.set("selectCard", 1)
										.set("prompt", `重铸一张【杀】`)
										.forResult();
									if (result.bool) {
										player.recast(
											result.cards,
											null,
											(player, cards) => {
												let next = player.draw(cards.length);
												next.log = false;
												next.gaintag = ["百炼"];
											}
										)
										var result2 = await player.chooseCard()
											.set("position", "hes")
											.set("filterCard", function (card, player, target) {
												return get.tag(card, "damage")
											})
											.set("selectCard", 1)
											.set("prompt", `重铸一张伤害牌`)
											.forResult();
										if (result2.bool) {
											player.recast(
												result2.cards,
												null,
												(player, cards) => {
													let next = player.draw(cards.length);
													next.log = false;
													next.gaintag = ["百炼"];
												}
											)
											var result3 = await player.chooseCard()
												.set("position", "hes")
												.set("filterCard", function (card, player, target) {
													return get.type(card) == "equip"
												})
												.set("selectCard", 1)
												.set("prompt", `重铸一张装备牌`)
												.forResult();
											if (result3.bool) {
												player.recast(
													result3.cards,
													null,
													(player, cards) => {
														let next = player.draw(cards.length);
														next.log = false;
														next.gaintag = ["百炼"];
													}
												)
												var cards = [result.cards[0], result2.cards[0], result3.cards[0]]
												var result4 = await player.chooseButton(["百炼：获得其中一张牌", cards], true).set("ai", function (button) {
													return get.value(button.link, _status.event.player);
												}).forResult()
												if (result4.bool) {
													await player.gain(result4.links, "gain2");
													await player.addGaintag(result4.links, "百炼")
												};
											}
										}
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											player: "useCard1",
										},
										forced: true,
										filter(event, player) {
											return event.card.hasGaintag("百炼")
										},
										mod: {
											cardUsable(card) {
												if (card.cards?.some(card => card.hasGaintag("百炼"))) {
													return Infinity;
												}
											},
										},
									},
								},
							},
							ffyishuigai: {
								audio: "pytianjiang",
								trigger: { global: ["loseAfter", "loseAsyncAfter", "cardsDiscardAfter", "equipAfter"] },
								filter(event, player) {
									const cards = event.getd();
									if (!cards.length) {
										return false;
									}
									const prev = _status.discarded.slice(0).removeArray(cards);
									const cur = _status.discarded.slice(0);
									return (
										prev.map(card => get.suit(card)).unique().length < 4 &&
										cur.map(card => get.suit(card)).unique().length == 4 &&
										_status.discarded.some(card => !player.getStorage("ffyishuigai_gained").includes(get.name(card))) &&
										player.countDiscardableCards(player, "he")
									)
								},
								async cost(event, trigger, player) {
									event.result = await player
										.chooseToDiscard(get.prompt2(event.skill), 2, "chooseonly", "he")
										.set("complexCard", true)
										.set("filterCard", card => {
											if (!ui.selected?.cards?.length) {
												return true;
											}
											const cardx = ui.selected.cards[0];
											return get.suit(card) == get.suit(cardx) || get.name(card) == get.name(cardx);
										})
										.forResult();
								},
								async content(event, trigger, player) {
									const { cards } = event;
									await player.discard(cards);
									const storage = player.getStorage(`${event.name}_gained`);
									const cardsx = _status.discarded.filter(card => !storage.includes(get.name(card)));
									const num = Math.min(cardsx.map(i => get.name(i)).unique().length, 3);
									const result = await player
										.chooseButton([`易水：获得其中${get.cnNumber(num)}张牌`, cardsx], true, num)
										.set("filterButton", button => {
											if (!ui.selected.buttons?.length) {
												return true;
											}
											return !ui.selected.buttons?.some(i => get.name(i.link) == get.name(button.link));
										})
										.forResult();
									if (result?.bool && result.links?.length) {
										const { links } = result;
										player.addTempSkill(`${event.name}_gained`);
										player.markAuto(`${event.name}_gained`, links.map(card => get.name(card)));
										await player.gain(links, "gain2");
									}
								},
								subSkill: {
									gained: {
										charlotte: true,
										onremove: true,
									}
								}
							},
							ffxunzhigai: {
								trigger: {
									player: ["useSkill", "useCard", "logSkillBegin"]
								},
								forced: true,
								locked: true,
								filter(event, player) {
									if (["global", "equip"].includes(event.type)) {
										return false;
									}
									if (event.name == "useCard" && event.skill != "ffgouzhugai_qice_backup") {
										return false;
									}
									let skill = get.sourceSkillFor(event);
									if (skill == "ffxunzhigai" || skill == "oljieming") {
										return false
									}
									console.log(skill)
									var suits = [];
									player.getCards("he", card => suits.add(get.suit(card)));
									if (suits.length == 0) {
										return false;
									}
									return suits.length == player.countCards("he") || suits.length == 1
								},
								async content(event, trigger, player) {
									var suits = [];
									player.getCards("he", card => suits.add(get.suit(card)));
									if (suits.length == 1) {
										player.addSkill("clandaojie")
									} else {
										player.logSkill("oljieming", player, null, null);
										var result = await player.chooseTarget()
											.set("selectTarget", 1)
											.set("forced", true)
											.set("prompt", "对一名角色发动【节命】")
											.forResult()
										if (result.targets[0].maxHp > 5) {
											await result.targets[0].draw(5)
											if (result.targets[0].countCards("h") > 5) {
												await result.targets[0].chooseToDiscard(result.targets[0].countCards("h") - 5, true)
											}
										} else {
											await result.targets[0].draw(result.targets[0].maxHp)
											if (result.targets[0].countCards("h") > result.targets[0].maxHp) {
												await result.targets[0].chooseToDiscard(result.targets[0].countCards("h") - result.targets[0].maxHp, true)
											}
										}
									}
								}
							},
							ffgouzhugai: {
								group: ["quhu", "ffgouzhugai_qice"],
								trigger: {
									player: "damageEnd",
								},
								getIndex(event) {
									return event.num
								},
								forced: true,
								locked: true,
								async content(event, trigger, player) {
									player.logSkill("zhiyu", player, null, null);
									await player.draw()
									if (!player.countCards("h")) {
										event.finish();
									} else {
										await player.showHandcards();
									}
									if (!trigger.source) {
										return;
									}
									var cards = player.getCards("h");
									var color = get.color(cards[0], player);
									for (var i = 1; i < cards.length; i++) {
										if (get.color(cards[i], player) != color) {
											return;
										}
									}
									trigger.source.chooseToDiscard(true);
								},
								subSkill: {
									"qice": {
										enable: ["chooseToUse"],
										audio: "qice",
										usable: 1,
										filter: function (event, player) {
											if (player.countCards("h") == 0) {
												return false
											}
											for (var name of lib.inpile) {
												if (event.filterCard({ name: name, isCard: true }, player, event)) return true;
											}
										},
										onChooseToUse(event) {
											if (!game.online && !event.ffgouzhugai) {
												var list = get.inpileVCardList(info => {
													return ["trick"].includes(info[0])
												})
												event.set("ffgouzhugai", list);
											}
										},
										chooseButton: {
											dialog: function (event, player) {
												const list = event.ffgouzhugai;
												return ui.create.dialog(`奇策`, [list, "vcard"])
											},
											filter: function (button, player) {
												return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
											},
											backup: function (links, player) {
												return {
													audio: "ffgouzhugai_qice",
													filterCard: () => true,
													position: "h",
													selectCard: -1,
													popname: true,
													viewAs: { name: links[0][2], nature: links[0][3], isCard: true, },
												}
											},
										},
										hiddenCard: function (player, name) {
											if (!lib.inpile.includes(name)) return false;
											var type = get.type2(name);
											return ["trick"].includes(type);
										},
									},
								},
							},
							ffgeyuangai: {
								trigger: {
									player: ["useCard", "phaseZhunbeiBegin"]
								},
								filter(event, player) {
									return player.getStorage("ffgeyuangai").length < 13
								},
								audio: "dcgeyuan",
								mark: true,
								intro: {
									name: "本轮已记录点数",
									content: function (storage, player) {
										if (player.getStorage("ffgeyuangai").length > 0) {
											return `本轮已记录点数：${(storage.sort((a, b) => a - b).join("、"))}`;
										} else {
											return;
										}
									},
								},
								marktext: "割",
								forced: true,
								locked: true,
								group: ["ffgeyuangai_mark"],
								async content(event, trigger, player) {
									for (var i = 0; i < 3; i++) {
										player.draw()
										const choices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
										if (player.getStorage("ffgeyuangai").includes(1)) {
											choices.remove("1");
										}
										if (player.getStorage("ffgeyuangai").includes(2)) {
											choices.remove("2");
										}
										if (player.getStorage("ffgeyuangai").includes(3)) {
											choices.remove("3");
										}
										if (player.getStorage("ffgeyuangai").includes(4)) {
											choices.remove("4");
										}
										if (player.getStorage("ffgeyuangai").includes(5)) {
											choices.remove("5");
										}
										if (player.getStorage("ffgeyuangai").includes(6)) {
											choices.remove("6");
										}
										if (player.getStorage("ffgeyuangai").includes(7)) {
											choices.remove("7");
										}
										if (player.getStorage("ffgeyuangai").includes(8)) {
											choices.remove("8");
										}
										if (player.getStorage("ffgeyuangai").includes(9)) {
											choices.remove("9");
										}
										if (player.getStorage("ffgeyuangai").includes(10)) {
											choices.remove("10");
										}
										if (player.getStorage("ffgeyuangai").includes(11)) {
											choices.remove("11");
										}
										if (player.getStorage("ffgeyuangai").includes(12)) {
											choices.remove("12");
										}
										if (player.getStorage("ffgeyuangai").includes(13)) {
											choices.remove("13");
										}
										var result = await player
											.chooseControl()
											.set("controls", choices)
											.forResult();
										if (result.control == "1") {
											player.markAuto("ffgeyuangai", 1)
										} else if (result.control == "2") {
											player.markAuto("ffgeyuangai", 2)
										} else if (result.control == "3") {
											player.markAuto("ffgeyuangai", 3)
											if (player.getStorage("ffgeyuangai").includes(4) && player.getStorage("ffgeyuangai").includes(5)) {
												var result2 = await player.chooseTarget()
													.set("filterTarget", function (card, player, target) {
														return target.countCards("ej") > 0
													})
													.set("selectTarget", 1)
													.set("prompt", "选择一名角色，获得其区域内的一张牌")
													.forResult()
												if (result2.bool) {
													player.gainPlayerCard("ej", result2.targets[0])
												}
											}
										} else if (result.control == "4") {
											player.markAuto("ffgeyuangai", 4)
											if (player.getStorage("ffgeyuangai").includes(3) && player.getStorage("ffgeyuangai").includes(5)) {
												var result2 = await player.chooseTarget()
													.set("filterTarget", function (card, player, target) {
														return target.countCards("ej") > 0
													})
													.set("selectTarget", 1)
													.set("prompt", "选择一名角色，获得其区域内的一张牌")
													.forResult()
												if (result2.bool) {
													player.gainPlayerCard("ej", result2.targets[0])
												}
											}
										} else if (result.control == "5") {
											player.markAuto("ffgeyuangai", 5)
											if (player.getStorage("ffgeyuangai").includes(4) && player.getStorage("ffgeyuangai").includes(3)) {
												var result2 = await player.chooseTarget()
													.set("filterTarget", function (card, player, target) {
														return target.countCards("ej") > 0
													})
													.set("selectTarget", 1)
													.set("prompt", "选择一名角色，获得其区域内的一张牌")
													.forResult()
												if (result2.bool) {
													player.gainPlayerCard("ej", result2.targets[0])
												}
											}
										} else if (result.control == "6") {
											player.markAuto("ffgeyuangai", 6)
											if (player.getStorage("ffgeyuangai").includes(8) && player.getStorage("ffgeyuangai").includes(10)) {
												var result2 = await player.chooseTarget()
													.set("filterTarget", function (card, player, target) {
														return target.countCards("ej") > 0
													})
													.set("selectTarget", 1)
													.set("prompt", "选择一名角色，获得其区域内的一张牌")
													.forResult()
												if (result2.bool) {
													player.gainPlayerCard("ej", result2.targets[0])
												}
											}
										} else if (result.control == "7") {
											player.markAuto("ffgeyuangai", 7)
										} else if (result.control == "8") {
											player.markAuto("ffgeyuangai", 8)
											if (player.getStorage("ffgeyuangai").includes(6) && player.getStorage("ffgeyuangai").includes(10)) {
												var result2 = await player.chooseTarget()
													.set("filterTarget", function (card, player, target) {
														return target.countCards("ej") > 0
													})
													.set("selectTarget", 1)
													.set("prompt", "选择一名角色，获得其区域内的一张牌")
													.forResult()
												if (result2.bool) {
													player.gainPlayerCard("ej", result2.targets[0])
												}
											}
										} else if (result.control == "9") {
											player.markAuto("ffgeyuangai", 9)
										} else if (result.control == "10") {
											player.markAuto("ffgeyuangai", 10)
											if (player.getStorage("ffgeyuangai").includes(6) && player.getStorage("ffgeyuangai").includes(8)) {
												var result2 = await player.chooseTarget()
													.set("filterTarget", function (card, player, target) {
														return target.countCards("ej") > 0
													})
													.set("selectTarget", 1)
													.set("prompt", "选择一名角色，获得其区域内的一张牌")
													.forResult()
												if (result2.bool) {
													player.gainPlayerCard("ej", result2.targets[0])
												}
											}
										} else if (result.control == "11") {
											player.markAuto("ffgeyuangai", 11)
										} else if (result.control == "12") {
											player.markAuto("ffgeyuangai", 12)
										} else if (result.control == "13") {
											player.markAuto("ffgeyuangai", 13)
										}
										if (trigger.name == "useCard") {
											break;
										}
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											global: ["roundStart"]
										},
										async content(event, trigger, player) {
											player.setStorage("ffgeyuangai", null)
										},
										forced: true,
										mod: {
											cardSavable: card => {
												for (var i = 0; i < _status.event.player.getStorage("ffgeyuangai").length; i++) {
													if (card.number == _status.event.player.getStorage("ffgeyuangai")[i]) {
														return false
													}
												}
											},
											cardEnabled: card => {
												for (var i = 0; i < _status.event.player.getStorage("ffgeyuangai").length; i++) {
													if (card.number == _status.event.player.getStorage("ffgeyuangai")[i]) {
														return false
													}
												}
											},
										},
									},
								},
							},
							ffjieshugai: {
								enable: "phaseUse",
								group: "ffjieshugai_mark",
								audio: "dcjieshu",
								filter(event, player) {
									const nums = player.getStorage("ffgeyuangai")
										.unique()
										.sort((a, b) => a - b);
									let count = 0
									if (nums.length > player.countMark("ffjieshugai_mark")) {
										for (let i = 1; i < nums.length; i++) {
											if (nums[i] - nums[i - 1] === 1) {
												count++;
												if (count >= player.countMark("ffjieshugai_mark")) return true;
											} else {
												count = 0;
											}
										}
										return false;
									}
								},
								async content(event, trigger, player) {
									var result = await player.chooseTarget()
										.set("selectTarget", 1)
										.set("prompt", "分配1点伤害")
										.forResult()
									if (result.bool) {
										result.targets[0].damage(1)
										player.addMark("ffjieshugai_mark", 2)
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											global: "roundStart"
										},
										forced: true,
										async content(event, trigger, player) {
											player.setMark("ffjieshugai_mark", 5)
										},
										"_priority": 1,
									},
								},
							},
							ffduanxiegai: {
								audio: "duanxie",
								group: ["ffduanxiegai_mark"],
								enable: "chooseToUse",
								position: "hes",
								filterCard(card, player) {
									return true
								},
								selectCard() {
									return true;
								},
								viewAs: {
									name: "tiesuo",
								},
								viewAsFilter(player) {
									var card = _status.discarded
									return player.countCards("h") == player.hp || player.countCards("h") == player.countCards("e")
										|| player.countCards("h") == card.length
								},
								subSkill: {
									"mark": {
										trigger: {
											player: "useCardAfter",
										},
										forced: true,
										filter(event, player) {
											return event.skill == "ffduanxiegai"
										},
										async content(event, trigger, player) {
											for (var i = 0; i < trigger.targets.length; i++) {
												if (!trigger.targets[i].isLinked()) {
													trigger.targets[i].damage(1)
												}
											}
										}
									},
								},
							},
							fffenminggai: {
								audio: "fenming",
								trigger: {
									source: "damageSource",
								},
								async content(event, trigger, player) {
									const choices = ["失去体力", "弃装备牌", "横置"];
									if (player.getCards("hes", card => get.type(card) == "equip").length = 0) {
										choices.remove("弃装备牌");
									};
									if (player.isLinked()) {
										choices.remove("横置");
									};
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.forResult();
									if (result.control == "失去体力") {
										player.loseHp()
										if (trigger.player.getCards("hes", card => get.type(card) == "equip").length > 0) {
											var result = await trigger.player.chooseCard()
												.set("position", "hes")
												.set("filterCard", function (card, player, target) {
													return get.type(card) == "equip"
												})
												.set("selectCard", 1)
												.set("forced", true)
												.set("prompt", `弃置一张装备牌`)
												.forResult();
											trigger.player.discard(result.cards)
										}
										trigger.player.link(true)
									} else if (result.control == "弃装备牌") {
										var result = await player.chooseCard()
											.set("position", "hes")
											.set("filterCard", function (card, player, target) {
												return get.type(card) == "equip"
											})
											.set("selectCard", 1)
											.set("forced", true)
											.set("prompt", `弃置一张装备牌`)
											.forResult();
										player.discard(result.cards)
										trigger.player.loseHp()
										trigger.player.link(true)
									} else if (result.control == "横置") {
										player.link(true)
										trigger.player.loseHp()
										if (trigger.player.getCards("hes", card => get.type(card) == "equip").length > 0) {
											var result = await trigger.player.chooseCard()
												.set("position", "hes")
												.set("filterCard", function (card, player, target) {
													return get.type(card) == "equip"
												})
												.set("selectCard", 1)
												.set("forced", true)
												.set("prompt", `弃置一张装备牌`)
												.forResult();
											trigger.player.discard(result.cards)
										}
									}
								},
							},
							ffzhuozhanggai: {
								trigger: {
									player: "useCardAfter"
								},
								group: "ffzhuozhanggai_mark",
								audio: "twhuazhang",
								filter(event, player) {
									return get.name(event.card) == "jiu"
								},
								async content(event, trigger, player) {
									const choices = ["0", "1", "2", "3"];
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.forResult();
									if (result.control == "0") {
										trigger.set("ffzhuozhanggai", true);
										player.setMark("ffzhuozhanggai_mark", 3)
										player.addSkill(event.name + "_unlimit");
									} else if (result.control == "1") {
										player.draw()
										trigger.set("ffzhuozhanggai", true);
										player.setMark("ffzhuozhanggai_mark", 2)
										player.addSkill(event.name + "_unlimit");
									} else if (result.control == "2") {
										player.draw(2)
										trigger.set("ffzhuozhanggai", true);
										player.setMark("ffzhuozhanggai_mark", 1)
										player.addSkill(event.name + "_unlimit");
									} else if (result.control == "3") {
										player.draw(3)
									}
								},
								subSkill: {
									unlimit: {
										charlotte: true,
										mod: {
											cardUsable: () => Infinity,
											targetInRange: () => true,
										},
										trigger: {
											player: "useCard1",
										},
										forced: true,
										popup: false,
										firstDo: true,
										async content(event, trigger, player) {
											player.removeMark("ffzhuozhanggai_mark", 1)
											if (player.countMark("ffzhuozhanggai_mark") == 0) {
												player.removeSkill(event.name);
											}
											const { card } = trigger;
											if (trigger.addCount !== false) {
												trigger.addCount = false;
												player.getStat("card")[card.name]--;
											}
										},
										mark: true,
										intro: {
											content: "使用的下X张牌无任何次数与距离限制",
										},
										sub: true,
										sourceSkill: "ffzhuozhanggai",
									},
								}
							},
							ffhuaifanggai: {
								enable: "chooseToUse",
								hiddenCard(player, name) {
									return name === "jiu" && player.countCards("h") > 0
								},
								filter(event, player) {
									return event.filterCard({ name: "jiu", isCard: true }, player, event) && player.countCards("h")
								},
								audio: "oljiushi",
								filterCard(card, player, target) {
									return get.type(card) != "basic"
								},
								selectCard: 1,
								lose: false,
								discard: false,
								delay: false,
								log: false,
								prompt: "与牌堆顶议事，若意见：不同，你你将之当【酒】使用；相同，你将你的议事牌置于牌堆顶",
								async precontent(event, trigger, player) {
									player.logSkill("ffhuaifanggai");
									await player.showCards(event.result.cards[0])
									const cards = game.cardsGotoOrdering(get.cards()).cards;
									player.showCards(cards);
									if (get.color(event.result.cards[0]) == get.color(cards)) {
										ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
										player.lose(event.result.cards[0], ui.cardPile, "insert");
										const evt = event.getParent();
										evt.set("ffhuaifanggai", true);
										evt.goto(0);
										delete evt.openskilldialog;
										return;
									} else {
										ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
									}
								},
								viewAs: {
									name: "jiu",
									isCard: true,
								}
							},
							ffxunjingai: {
								trigger: {
									player: ["loseAfter", "gainAfter"],
								},
								group: "ffxunjingai_mark",
								forced: true,
								locked: true,
								async content(event, trigger, player) {
									if (player.countMark("ffzeliugai_mark") < 3) {
										player.addMark("ffzeliugai_mark", 1)
									} else {
										player.setMark("ffzeliugai_mark", 0)
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											player: "damageBegin",
											source: "damageBegin",
										},
										forced: true,
										async content(event, trigger, player) {
											if (player.countMark("ffzeliugai_mark") > 0) {
												player.removeMark("ffzeliugai_mark", 1)
											} else {
												player.setMark("ffzeliugai_mark", 3)
											}
										}
									}
								}
							},
							ffzeliugai: {
								trigger: {
									player: "useCardAfter"
								},
								audio: "xinfu_fuhai",
								forced: true,
								locked: true,
								group: ["ffzeliugai_mark"],
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，你使用牌结算后，你选择一项执行";
										if (player.countMark("ffzeliugai_mark") == 0) {
											return str + "①【将手牌摸至体力上限】或【弃置任意张牌】②【重铸任意张牌】或【受到一点无来源伤害】"
										} else if (player.countMark("ffzeliugai_mark") == 1) {
											return str + "①【受到一点无来源伤害】或【将手牌摸至体力上限】②【弃置任意张牌】或【重铸任意张牌】"
										} else if (player.countMark("ffzeliugai_mark") == 2) {
											return str + "①【重铸任意张牌】或【受到一点无来源伤害】②【将手牌摸至体力上限】或【弃置任意张牌】"
										} else if (player.countMark("ffzeliugai_mark") == 3) {
											return str + "①【弃置任意张牌】或【重铸任意张牌】②【受到一点无来源伤害】或【将手牌摸至体力上限】"
										}
									},
								},
								async content(event, trigger, player) {
									player.changeZhuanhuanji("ffzeliu")
									const choices = ["摸牌", "弃牌", "重铸", "受伤"];
									if (player.storage.ffzeliugai) {
										if (player.countMark("ffzeliugai_mark") > 1) {
											choices.remove("摸牌");
										};
										if (player.countMark("ffzeliugai_mark") == 1 || player.countMark("ffzeliugai_mark") == 2
											|| player.countCards("he") == 0) {
											choices.remove("弃牌");
										};
										if (player.countMark("ffzeliugai_mark") < 2 || player.countCards("he") == 0) {
											choices.remove("重铸");
										};
										if (player.countMark("ffzeliugai_mark") == 0 || player.countMark("ffzeliugai_mark") == 3) {
											choices.remove("受伤");
										};
									} else {
										if (player.countMark("ffzeliugai_mark") < 2) {
											choices.remove("摸牌");
										};
										if (player.countMark("ffzeliugai_mark") == 0 || player.countMark("ffzeliugai_mark") == 3
											|| player.countCards("he") == 0) {
											choices.remove("弃牌");
										};
										if (player.countMark("ffzeliugai_mark") > 1 || player.countCards("he") == 0) {
											choices.remove("重铸");
										};
										if (player.countMark("ffzeliugai_mark") == 1 || player.countMark("ffzeliugai_mark") == 2) {
											choices.remove("受伤");
										};
									}
									if (choices.length > 0) {
										var result = await player
											.chooseControl()
											.set("controls", choices)
											.forResult();
										if (result.control == "摸牌") {
											player.drawTo(player.maxHp)
										} else if (result.control == "弃牌") {
											player.chooseToDiscard([1, Infinity], true)
										} else if (result.control == "重铸") {
											var result2 = await player.chooseCard()
												.set("position", "he")
												.set("selectCard", [1, Infinity])
												.set("forced", true)
												.set("prompt", "重铸任意张牌")
												.forResult();
											player.recast(result2.cards)
										} else if (result.control == "受伤") {
											player.damage(1)
										}
									}
								},
							},
							w_hanlingai: {
								enable: 'phaseUse',
								audio: "mpjiusong",
								usable: 1,
								jiusha() {
									"step 0";
									player.addTempSkill('w_hanlingai1');
									var list = [];
									if (player.canUse('jiu', player, false)) list.push(['基本', '', 'jiu']);
									if (player.hasUseTarget(new lib.element.VCard({ name: 'sha', nature: 'ice' }), true, false)) list.push(['基本', '', 'sha', 'ice']);
									if (list.length) {
										player.chooseButton(["是否视为使用一张【酒】或冰【杀】？", [list, "vcard"]]).set("ai", button => {
											return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3], isCard: true });
										});
									} else event.finish();
									"step 1";
									if (result.bool) {
										player.chooseUseTarget(get.autoViewAs({ name: result.links[0][2], nature: result.links[0][3], isCard: true }), true, false);
									}
								},
								draw() {
									"step 0";
									player.addTempSkill('w_hanlingai2');
									"step 1";
									var num = player.getSkills().filter(skill => skill == "w_hanlingai1" || skill == "w_hanlingai2" || skill == "w_hanlingai3").length;
									if (num) player.draw(num);
								},
								qita() {
									"step 0";
									player.addTempSkill('w_hanlingai3');
									var list = [];
									var choiceList = [
										'视为使用一张无次数限制的【酒】或冰【杀】',
										'摸X张牌（X为本回合此技能发动过的选项数）',
									];
									var s = [];
									if (player.canUse('jiu', player, false)) s.push(['基本', '', 'jiu']);
									if (player.hasUseTarget(new lib.element.VCard({ name: 'sha', nature: 'ice' }), true, false)) s.push(['基本', '', 'sha', 'ice']);
									if (s.length) list.push('选项一');
									else choiceList[0] = '<span style="opacity:0.5; ">' + choiceList[0] + ('（不满足条件）') + '</span>';
									list.push('选项二');
									if (list.length == 1) {
										event._result = { control: list[0] };
									} else {
										player.chooseControl(list).set('prompt', get.prompt('w_hanlingai')).set('ai', () => {
											return list.randomGet();
										}).set('choiceList', choiceList);
									}
									"step 1";
									var map = {
										'选项一': 'jiusha',
										'选项二': 'draw',
									};
									var next = game.createEvent('w_hanlingai', false);
									next.player = player;
									next.setContent(lib.skill.w_hanlingai[map[result.control]]);
								},
								content() {
									"step 0";
									var list = [];
									var choiceList = [
										'视为使用一张无次数限制的【酒】或冰【杀】',
										'摸X张牌（X为本回合此技能发动过的选项数）',
										'执行另一项',
									];
									var s = [];
									if (player.canUse('jiu', player, false)) s.push(['基本', '', 'jiu']);
									if (player.hasUseTarget(new lib.element.VCard({ name: 'sha', nature: 'ice' }), true, false)) s.push(['基本', '', 'sha', 'ice']);
									if (s.length) list.push('选项一');
									else choiceList[0] = '<span style="opacity:0.5; ">' + choiceList[0] + ('（不满足条件）') + '</span>';
									list.push('选项二');
									list.push('选项三');
									player.chooseControl(list).set('prompt', get.prompt('w_hanlingai')).set('ai', () => {
										return list.randomGet();
									}).set('choiceList', choiceList);
									"step 1";
									var map = {
										'选项一': 'jiusha',
										'选项二': 'draw',
										'选项三': 'qita',
									};
									var next = game.createEvent('w_hanlingai', false);
									next.player = player;
									next.setContent(lib.skill.w_hanlingai[map[result.control]]);
								},
								ai: {
									order: 13,
									result: {
										player: 1,
									},
								},
							},
							w_hanlingai1: { charlotte: true },
							w_hanlingai2: { charlotte: true },
							w_hanlingai3: { charlotte: true },
							w_changyinggai: {
								forced: true,
								audio: "mpmaotao",
								trigger: {
									player: 'useCardAfter',
								},
								init(player) {
									if (!player.storage.w_changyinggai_jishu) player.storage.w_changyinggai_jishu = 0;
								},
								filter(event, player) {
									var num = player.getSkills().filter(skill => skill == "w_hanlingai1" || skill == "w_hanlingai2" || skill == "w_hanlingai3").length;
									return player.storage.w_changyinggai_jishu < num;
								},
								content() {
									player.addTempSkill('w_changyinggai_jishu');
									player.storage.w_changyinggai_jishu++;
									var num = player.storage.w_changyinggai_jishu;
									var next = game.createEvent('w_hanlingai', false);
									next.player = player;
									var map = {
										'1': 'jiusha',
										'2': 'draw',
										'3': 'qita',
									};
									next.setContent(lib.skill.w_hanlingai[map[num]]);
								},
								subSkill: {
									jishu: {
										charlotte: true,
										onremove(player) {
											player.storage.w_changyinggai_jishu = 0;
										},
									},
								},
							},
							ffchenghegai: {
								trigger: {
									player: "useCardBefore"
								},
								audio: "clanfangzhen",
								group: ["ffchenghegai_1", "ffchenghegai_mark"],
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，限定技，一名角色使用非基本牌时，你可以将之改为";
										if (storage) {
											return str + "【洞烛先机】。";
										} else {
											return str + "【顺手牵羊】。";
										}
									},
								},
								filter(event, player) {
									if (player.storage.ffchenghegai && !player.hasUseTarget({ name: 'shunshou' })) {
										return false
									}
									return event.targets.length > 0 && event.getParent(2).name != "ffchenghegai" && event.getParent(1).name != "ffchenghegai" && get.type(event.card) != "basic" && player.countMark("ffchenghegai_mark") == 0
								},
								async content(event, trigger, player) {
									let count1 = trigger.player.countCards("h")
									const targets = game.players.sortBySeat().slice();
									let count2 = 0
									for (let target of targets) {
										count2 += target.countCards("ej")
									}
									let count3 = player.countCards("hesj")
									player.setMark("ffchenghegai_1", 0)
									trigger.cancel();
									if (!player.storage.ffchenghegai) {
										await player.chooseUseTarget(trigger.cards, { name: "dongzhuxianji" }, true, false)
										player.addMark("ffchenghegai_mark", 1)
										player.changeZhuanhuanji("ffchenghegai");
									} else {
										await player.chooseUseTarget(trigger.cards, { name: "shunshou" }, true, false)
										player.addMark("ffchenghegai_mark", 1)
										player.changeZhuanhuanji("ffchenghegai");
									}
									if (trigger.player.countCards("h") != count1) {
										player.addMark("ffchenghegai_1", 1)
									}
									const targets2 = game.players.sortBySeat().slice();
									let count4 = 0
									for (let target of targets2) {
										count4 += target.countCards("ej")
									}
									if (count2 != count4) {
										player.addMark("ffchenghegai_1", 1)
									}
									if (player.countCards("hesj") != count3) {
										player.addMark("ffchenghegai_1", 1)
									}
									if (player.countMark("ffchenghegai_1") == 1) {
										player.setMark("ffchenghegai_mark", 0)
									} else if (player.countMark("ffchenghegai_1") > 1) {
										player.setMark("ffchenghegai_mark", 0)
										player.restoreSkill("clanxumin");
									}
								},
							},
							ffjieyigai: {
								enable: "chooseToUse",
								audio: "sbqianxun",
								group: "ffjieyigai_mark",
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，";
										if (storage) {
											return str + "你可以将手牌数调整至记录值以视为使用上一张使用的即时牌";
										} else {
											return str + "你可以记录手牌数以视为使用【无懈可击】";
										}
									},
								},
								hiddenCard(player, name) {
									if (!player.storage.ffjieyigai) {
										return name === "wuxie"
									} else {
										const evt = lib.skill.dcjianying.getLastUsed(player);
										if (evt && evt.card && get.type(evt.card) != "equip" && get.type(evt.card) != "delay") {
											return name === get.name(evt.card)
										}
									}
								},
								filter(event, player) {
									if (!player.storage.ffjieyigai) {
										return event.filterCard({ name: "wuxie", isCard: true }, player, event)
									}
									const evt = lib.skill.dcjianying.getLastUsed(player);
									if (!evt || !evt.card || get.type(evt.card) == "equip" || get.type(evt.card) == "delay") {
										return false
									}
									return event.filterCard({ name: get.name(evt.card), isCard: true }, player, event) && player.countCards("h") != player.countMark("ffjieyigai_mark")
								},
								async precontent(event, trigger, player) {
									player.logSkill("ffjieyigai");
									if (!player.storage.ffjieyigai) {
										player.setMark("ffjieyigai_mark", player.countCards("h"))
										player.changeZhuanhuanji(event.name.slice(4));
									} else {
										if (player.countCards("h") > player.countMark("ffjieyigai_mark")) {
											player.chooseToDiscard(player.countCards("h") - player.countMark("ffjieyigai_mark"), true)
										} else {
											player.drawTo(player.countMark("ffjieyigai_mark"))
										}
										player.changeZhuanhuanji(event.name.slice(4));
									}
								},
								viewAs(cards, player) {
									const evt = lib.skill.dcjianying.getLastUsed(player);
									if (!player.storage.ffjieyigai) {
										return { name: "wuxie" };
									} else {
										return { name: get.name(evt.card) };
									}
								},
								filterCard: () => false,
								selectCard: -1,
								prompt() {
									if (!_status.event.player.storage.ffjieyigai) {
										return "视为使用一张【无懈可击】";
									}
									return "视为使用上一张使用的即时牌";
								},
								log: false,
							},
							fffenyinggai: {
								group: ["fffenyinggai_mark"],
								enable: "chooseToUse",
								audio: "sblianying",
								position: "h",
								usable: 2,
								filterCard(card, player) {
									return true
								},
								selectCard: [1, Infinity],
								viewAs: {
									name: "huogong",
									audio: "fffenyinggai",
								},
								viewAsFilter(player) {
									return player.countCards("h") > 0
								},
								subSkill: {
									"mark": {
										trigger: {
											player: "useCardAfter",
										},
										forced: true,
										filter(event, player) {
											return event.skill == "fffenyinggai"
										},
										async content(event, trigger, player) {
											if (player.hasHistory("sourceDamage", function (evt) {
												return evt.card == trigger.card
											})) {
												var cards = player.getCards("h")
												var cards2 = _status.discarded
												await player.gain(cards2)
												await player.gain(trigger.cards)
												await player.discard(cards)
											}
										},
									},
								},
							},
							ffduliegai: {
								enable: "phaseUse",
								audio: "olsbdulie",
								filter(event, player) {
									return !player.isLinked()
								},
								async content(event, trigger, player) {
									player.link(true)
									player.draw(2)
									var result = await player.chooseCardTarget()
										.set("filterTarget", function (card, player, target) {
											return target != player
										})
										.set("selectTarget", 1)
										.set("position", "h")
										.set("filterCard", function (card, player, target) {
											return get.tag(card, "damage")
										})
										.set("selectCard", 1)
										.set("prompt", `令一名其他角色对你使用一张伤害牌`)
										.forResult();
									if (result.bool) {
										result.targets[0].useCard(result.cards[0], player, true, false)
									}
								},
							},
							ffchouyigai: {
								trigger: {
									target: "useCardToTargeted",
								},
								filter(event, player) {
									return event.player != player && _status.currentPhase == player
								},
								audio: "olsbdouchan",
								async content(event, trigger, player) {
									const choices = ["来源-", "来源+", "你-", "你+"];
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.forResult();
									if (result.control == "来源-") {
										trigger.player.loseHp()
									} else if (result.control == "来源+") {
										trigger.player.recover()
									} else if (result.control == "你-") {
										player.loseHp()
									} else if (result.control == "你+") {
										player.recover()
									}
									player
										.when({ global: 'useCardAfter' })
										.filter(evt => evt == trigger.getParent())
										.step(async (event, trigger, player) => {
											if (player.hp == trigger.player.hp) {
												player.link(false)
											} else {
												player.chooseToDiscard("he", 2, true)
											}
										})
								},
							},
							fffupangai: {
								trigger: {
									player: ["changeHp", "loseAfter"],
									global: ["loseAsyncAfter", "equipAfter", "addToExpansionAfter", "gainAfter", "addJudgeAfter"],
								},
								audio: "sppanqin",
								group: ["fffupangai_mark"],
								filter(event, player) {
									const bool1 = event.getg && event.getg(player)?.length
									const bool2 = event.getl && event.getl(player)?.hs?.length;
									if (event.name != "changeHp" && !bool1 && !bool2) {
										return false
									}
									return !player.hasSkill("fffupangai_used", null, null, false)
								},
								async content(event, trigger, player) {
									player.addTempSkill("fffupangai_used", ["phaseZhunbeiAfter", "phaseDrawAfter", "phaseJudgeAfter", "phaseUseAfter", "phaseDiscardAfter", "phaseJieshuAfter"]);
									const fupan = player.countMark("fffupangai_mark")
									const choiceList = [`将手牌数调整至${fupan}`, "邻项数值-1", `将体力值调整至${fupan}`, "将一种类型的所有牌当【南蛮入侵】使用"];
									const choices = ["选项一", "选项二", "选项三", "选项四"];
									if (player.countCards("he") == 0) {
										choiceList[3] = '<span style="opacity:0.5">' + choiceList[3] + "</span>";
										choices.remove("选项四");
									};
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.set("choiceList", choiceList)
										.forResult();
									if (result.control == "选项一") {
										if (player.countCards("h") > player.countMark("fffupangai_mark")) {
											player.chooseToDiscard(player.countCards("h") - player.countMark("fffupangai_mark"), true)
										} else {
											player.drawTo(player.countMark("fffupangai_mark"))
										}
										player.removeMark("fffupangai_mark", 1)
									} else if (result.control == "选项二") {
										player.removeMark("fffupangai_mark", 1)
										if (player.countCards("h") > player.countMark("fffupangai_mark")) {
											player.chooseToDiscard(player.countCards("h") - player.countMark("fffupangai_mark"), true)
										} else {
											player.drawTo(player.countMark("fffupangai_mark"))
										}
										if (player.hp > player.countMark("fffupangai_mark")) {
											player.loseHp(player.hp - player.countMark("fffupangai_mark"))
										} else if (player.hp < player.countMark("fffupangai_mark")) {
											player.recover(player.countMark("fffupangai_mark") - player.hp)
										}
									} else if (result.control == "选项三") {
										if (player.hp > player.countMark("fffupangai_mark")) {
											player.loseHp(player.hp - player.countMark("fffupangai_mark"))
										} else if (player.hp < player.countMark("fffupangai_mark")) {
											player.recover(player.countMark("fffupangai_mark") - player.hp)
										}
										player.removeMark("fffupangai_mark", 1)
										if (player.countCards("he") > 0) {
											const choices2 = ["基本牌", "锦囊牌", "装备牌"];
											if (player.getCards("h", card => get.type(card) == "basic").length == 0) {
												choices2.remove("基本牌");
											};
											if (player.getCards("h", card => get.type(card) == "trick" || get.type(card) == "delay").length == 0) {
												choices2.remove("锦囊牌");
											};
											if (player.getCards("he", card => get.type(card) == "equip").length == 0) {
												choices2.remove("装备牌");
											};
											var result2 = await player
												.chooseControl()
												.set("controls", choices2)
												.forResult();
											if (result2.control == "基本牌") {
												const cards = player.getCards("h", card => get.type(card) == "basic")
												player.chooseUseTarget(cards, { name: "nanman" }, true, false)
											} else if (result2.control == "锦囊牌") {
												const cards = player.getCards("h", card => get.type(card) == "trick" || get.type(card) == "delay")
												player.chooseUseTarget(cards, { name: "nanman" }, true, false)
											} else if (result2.control == "装备牌") {
												const cards = player.getCards("he", card => get.type(card) == "equip")
												player.chooseUseTarget(cards, { name: "nanman" }, true, false)
											}
										}
									} else if (result.control == "选项四") {
										if (player.countCards("he") > 0) {
											const choices2 = ["基本牌", "锦囊牌", "装备牌"];
											if (player.getCards("h", card => get.type(card) == "basic").length == 0) {
												choices2.remove("基本牌");
											};
											if (player.getCards("h", card => get.type(card) == "trick" || get.type(card) == "delay").length == 0) {
												choices2.remove("锦囊牌");
											};
											if (player.getCards("he", card => get.type(card) == "equip").length == 0) {
												choices2.remove("装备牌");
											};
											var result2 = await player
												.chooseControl()
												.set("controls", choices2)
												.forResult();
											if (result2.control == "基本牌") {
												const cards = player.getCards("h", card => get.type(card) == "basic")
												player.chooseUseTarget(cards, { name: "nanman" }, true, false)
											} else if (result2.control == "锦囊牌") {
												const cards = player.getCards("h", card => get.type(card) == "trick" || get.type(card) == "delay")
												player.chooseUseTarget(cards, { name: "nanman" }, true, false)
											} else if (result2.control == "装备牌") {
												const cards = player.getCards("he", card => get.type(card) == "equip")
												player.chooseUseTarget(cards, { name: "nanman" }, true, false)
											}
										}
										if (player.hp > player.countMark("fffupangai_mark")) {
											player.loseHp(player.hp - player.countMark("fffupangai_mark"))
										} else if (player.hp < player.countMark("fffupangai_mark")) {
											player.recover(player.countMark("fffupangai_mark") - player.hp)
										}
									}
								},
								subSkill: {
									"mark": {
										name: "fffupangai_mark",
										silent: true,
										sourceSkill: "fffupangai",
										intro: {
											name: "复叛数值",
											content: function (storage, player) {
												return
											},
										},
										marktext: "叛",
										trigger: {
											global: "gameStart"
										},
										forced: true,
										async content(event, trigger, player) {
											player.setMark("fffupangai_mark", 7)
										}
									},
									used: {
										charlotte: true,
										"skill_id": "fffupangai_used",
										sub: true,
										sourceSkill: "fffupangai",
										"_priority": 0,
									},
								},
							},
							ffyihangai: {
								trigger: {
									player: "phaseChange",
								},
								audio: "spmanwang",
								forced: true,
								locked: true,
								filter(event, player) {
									const num = player.maxHp - player.hp - 1
									const num1 = player.hp - 1
									const num2 = event.num - player.getHistory("skipped").length;
									return (num == num2 && !event.phaseList[event.num].startsWith("phaseDraw")) || (num1 == num2 && !event.phaseList[event.num].startsWith("phaseUse"))
								},
								async content(event, trigger, player) {
									const num = player.maxHp - player.hp - 1
									const num1 = player.hp - 1
									const num2 = trigger.num - player.getHistory("skipped").length;
									if (num == num1 && num == num2) {
										const choices = ["出牌阶段", "摸牌阶段"];
										var result = await player
											.chooseControl()
											.set("controls", choices)
											.forResult();
										if (result.control == "出牌阶段") {
											trigger.phaseList[trigger.num] = `phaseUse|${event.name}`
										} else if (result.control == "摸牌阶段") {
											trigger.phaseList[trigger.num] = `phaseDraw|${event.name}`
										}
									} else if (num == num2) {
										trigger.phaseList[trigger.num] = `phaseDraw|${event.name}`
									} else {
										trigger.phaseList[trigger.num] = `phaseUse|${event.name}`
									}
								},
							},
							ffjucuigai: {
								trigger: {
									player: "huogongBegin",
								},
								forced: true,
								locked: false,
								popup: false,
								group: ["ffjucuigai_viewAs", "ffjucuigai_mark", "ffjucuigai_put"],
								filter(event, player) {
									return event.skill == "ffjucuigai_viewAs"
								},
								content() {
									trigger.setContent(lib.skill.ffjucuigai.huogongContent);
								},
								async huogongContent(event, trigger, player) {
									const { target } = event;
									if (target.countCards("he") == 0) {
										return;
									}
									if (target.countCards("h") > 0) {
										var result = await target.chooseCard(1, true).forResult();
										await target.showCards(result.cards).setContent(function () { });
										event.dialog = ui.create.dialog(get.translation(target) + "展示的手牌", result.cards);
										event.videoId = lib.status.videoId++;
										game.broadcast("createDialog", event.videoId, get.translation(target) + "展示的手牌", result.cards);
										game.addVideo("cardDialog", null, [get.translation(target) + "展示的手牌", get.cardsInfo(result.cards), event.videoId]);
										var zhuangbei = [];
										zhuangbei.push(get.suit(result.cards[0]))
										game.log(target, "展示了", result.cards[0]);
										game.addCardKnower(result.cards, "everyone");
										event._result = {};
									}
									for (let i = 0; i < target.getCards("e").length; i++) {
										zhuangbei.push(get.suit(target.getCards("e")[i]))
									}
									var result2 = await player
										.chooseToDiscard("h", function (card) {
											return get.event().zhuangbei.includes(get.suit(card))
										}).set("zhuangbei", zhuangbei)
										.set("prompt", false)
										.forResult();
									if (result2.bool) {
										target.damage("fire");
									} else {
										target.addTempSkill("huogong2");
									}
									event.dialog.close();
									game.addVideo("cardDialog", null, event.videoId);
									game.broadcast("closeDialog", event.videoId);
								},
								subSkill: {
									viewAs: {
										enable: "chooseToUse",
										usable: 1,
										position: "hes",
										filterCard: () => true,
										selectCard: 1,
										viewAs: {
											name: "huogong",
										},
									},
									"mark": {
										trigger: {
											player: "useCard"
										},
										audio: "olsbqianfu",
										filter(event, player) {
											return event.skill == "ffjucuigai_viewAs"
										},
										forced: true,
										async content(event, trigger, player) {
											player.addMark("ffjucuigai_put", 1)
											const originalTarget = trigger.targets[0];
											const next = originalTarget.getNext();
											const previous = originalTarget.getPrevious();
											if (next == previous) {
												trigger.targets.push(next);
											} else {
												trigger.targets.push(next);
												trigger.targets.push(previous);
											}
										},
										"_priority": 2,
									},
								},
							},
							ffjinmiegai: {
								trigger: {
									player: "useCard"
								},
								limited: true,
								group: ["ffjinmiegai_mark"],
								audio: "olsbfenchao",
								filter(event, player) {
									return player.countMark("ffjinmiegai_mark") > 2 && event.targets.length > 0 && player.countMark("ffjucuigai_mark") == 0
								},
								async content(event, trigger, player) {
									player.addMark("ffjucuigai_mark", 1)
									player.setMark("ffjinmiegai_mark", 0);
									var result = await player.chooseTarget()
										.set("filterTarget", function (card, player, target) {
											return trigger.targets.includes(target)
										})
										.set("selectTarget", [1, Infinity])
										.set("forced", true)
										.set("prompt", "对任意名目标各造成1点火焰伤害")
										.forResult()
									for (let i = 0; i < result.targets.length; i++) {
										result.targets[i].damage("fire");
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											player: "useCard"
										},
										silent: true,
										forced: true,
										async content(event, trigger, player) {
											if (get.type(trigger.card) != "trick" && get.type(trigger.card) != "delay") {
												player.setMark("ffjinmiegai_mark", 0);
											} else {
												player.addMark("ffjinmiegai_mark", 1)
											}
										},
										"_priority": 1,
									},
								},
							},
							ffjinaogai: {
								trigger: {
									source: "damageBegin",
								},
								filter(event, player) {
									return player.countMark("ffjinaogai_mark") == 0 || event.num >= event.player.hp
								},
								forced: true,
								audio: "olsbyushi",
								group: ["ffjinaogai_mark", "ffjinaogai_mark2", "ffjinaogai_mark3"],
								async content(event, trigger, player) {
									if (player.countMark("ffjinaogai_mark") == 0) {
										player.setMark("ffjinaogai_mark", 1)
										var a = 1
										if (player.countMark("ffjucuigai_mark") > 0) {
											a++
										}
										if (player.countMark("ffjucuigai_put") > 0) {
											a++
										}
										player.draw(a)
									}
									if (trigger.num >= trigger.player.hp) {
										var stat = player.getStat().skill
										delete stat.ffjucuigai_viewAs
										player.restoreSkill("ffjinmiegai");
										player.setMark("ffjucuigai_put", 0)
										player.setMark("ffjucuigai_mark", 0)
										player.setMark("ffjinaogai_mark", 0)
									}
								},
								"_priority": 1,
								subSkill: {
									"mark": {
										trigger: {
											player: "phaseUseBegin",
										},
										forced: true,
										silent: true,
										async content(event, trigger, player) {
											player.setMark("ffjucuigai_put", 0)
										},
									},
									"mark2": {
										trigger: {
											player: "damageBegin",
										},
										filter(event, player) {
											return player.countMark("ffjinaogai_mark") == 0 || event.num >= player.hp
										},
										forced: true,
										audio: "olsbyushi",
										async content(event, trigger, player) {
											if (player.countMark("ffjinaogai_mark") == 0) {
												player.setMark("ffjinaogai_mark", 1)
												var a = 1
												if (player.countMark("ffjucuigai_mark") > 0) {
													a++
												}
												if (player.countMark("ffjucuigai_put") > 0) {
													a++
												}
												player.draw(a)
											}
											if (trigger.num >= player.hp) {
												var stat = player.getStat().skill
												delete stat.ffjucuigai_viewAs
												player.restoreSkill("ffjinmiegai");
												player.setMark("ffjucuigai_put", 0)
												player.setMark("ffjucuigai_mark", 0)
												player.setMark("ffjinaogai_mark", 0)
											}
										},
									},
									"mark3": {
										trigger: {
											global: "phaseBegin",
										},
										forced: true,
										silent: true,
										async content(event, trigger, player) {
											player.setMark("ffjinaogai_mark", 0)
										},
									}
								},
							},
							ffmanqigai: {
								enable: "phaseUse",
								usable: 2,
								group: "ffmanqigai_mark",
								audio: "dcmanhou",
								filter(event, player) {
									var c = player.getHistory("useCard", evt => {
										return evt.card.name == "sha" && evt.addCount !== false;
									}).length
									var b = player.getCardUsable("sha", true) - c
									return player.countCards("h") > 0 && player.hp > 0 && b > 0
								},
								async content(event, trigger, player) {
									const choices = ["体力", "手牌", "出杀次数"];
									const choices2 = ["体力", "手牌", "出杀次数"];
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.forResult();
									if (result.control == "体力") {
										choices2.remove("体力")
										var result2 = await player
											.chooseControl()
											.set("controls", choices2)
											.forResult();
										if (result2.control == "手牌") {
											var a = player.hp
											var b = player.countCards("h")
											if (a > b) {
												player.loseHp(a - b)
												player.drawTo(a)
											} else if (a < b) {
												player.recover(b - a)
												player.chooseToDiscard(b - a, true)
											}
											player.removeMark("ffmanqigai_mark", 1)
											player.chooseUseTarget({ isCard: false }, { name: "nanman" }, true, false)
										} else if (result2.control == "出杀次数") {
											var a = player.hp
											var c = player.getHistory("useCard", evt => {
												return evt.card.name == "sha" && evt.addCount !== false;
											}).length
											var b = player.getCardUsable("sha", true) - c
											if (a > b) {
												player.loseHp(a - b)
												player.setMark("ffmanqigai_mark", a + c)
											} else if (a < b) {
												player.recover(b - a)
												player.setMark("ffmanqigai_mark", a + c)
											}
											player.chooseToDiscard(1, true)
											player.chooseUseTarget({ isCard: false }, { name: "nanman" }, true, false)
										}
									} else if (result.control == "手牌") {
										choices2.remove("手牌")
										var result2 = await player
											.chooseControl()
											.set("controls", choices2)
											.forResult();
										if (result2.control == "体力") {
											var a = player.hp
											var b = player.countCards("h")
											if (a > b) {
												player.loseHp(a - b)
												player.drawTo(a)
											} else if (a < b) {
												player.recover(b - a)
												player.chooseToDiscard(b - a, true)
											}
											player.removeMark("ffmanqigai_mark", 1)
											player.chooseUseTarget({ isCard: false }, { name: "nanman" }, true, false)
										} else if (result2.control == "出杀次数") {
											var a = player.countCards("h")
											var c = player.getHistory("useCard", evt => {
												return evt.card.name == "sha" && evt.addCount !== false;
											}).length
											var b = player.getCardUsable("sha", true) - c
											if (a > b) {
												player.chooseToDiscard(a - b, true)
												player.setMark("ffmanqigai_mark", a + c)
											} else if (a < b) {
												player.drawTo(b)
												player.setMark("ffmanqigai_mark", a + c)
											}
											player.loseHp()
											player.chooseUseTarget({ isCard: false }, { name: "nanman" }, true, false)
										}
									} else if (result.control == "出杀次数") {
										choices2.remove("出杀次数")
										var result2 = await player
											.chooseControl()
											.set("controls", choices2)
											.forResult();
										if (result2.control == "体力") {
											var a = player.hp
											var c = player.getHistory("useCard", evt => {
												return evt.card.name == "sha" && evt.addCount !== false;
											}).length
											var b = player.getCardUsable("sha", true) - c
											if (a > b) {
												player.loseHp(a - b)
												player.setMark("ffmanqigai_mark", a + c)
											} else if (a < b) {
												player.recover(b - a)
												player.setMark("ffmanqigai_mark", a + c)
											}
											player.chooseToDiscard(1, true)
											player.chooseUseTarget({ isCard: false }, { name: "nanman" }, true, false)
										} else if (result2.control == "手牌") {
											var a = player.countCards("h")
											var c = player.getHistory("useCard", evt => {
												return evt.card.name == "sha" && evt.addCount !== false;
											}).length
											var b = player.getCardUsable("sha", true) - c
											if (a > b) {
												player.chooseToDiscard(a - b, true)
												player.setMark("ffmanqigai_mark", a + c)
											} else if (a < b) {
												player.drawTo(b)
												player.setMark("ffmanqigai_mark", a + c)
											}
											player.loseHp()
											player.chooseUseTarget({ isCard: false }, { name: "nanman" }, true, false)
										}
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											player: "phaseUseBegin",
										},
										forced: true,
										async content(event, trigger, player) {
											player.setMark("ffmanqigai_mark", player.getCardUsable("sha", true))
											player.addSkill("ffmanqigai_sha")
											player.when({
												player: "phaseUseEnd",
											})
												.step(async (event, trigger, player) => {
													player.removeSkill("ffmanqigai_sha")
												})
										},
									},
									"sha": {
										mod: {
											cardUsable(card, player, num) {
												if (card.name === 'sha') {
													return num = player.countMark("ffmanqigai_mark");
												}
											}
										},
									}
								},
							},
							ffchangbiaogai: {
								enable: ["chooseToRespond", "chooseToUse"],
								audio: "dctanluan",
								filterCard(card, player) {
									return false
								},
								selectCard: -1,
								async precontent(event, trigger, player) {
									const cards = _status.discarded
									for (let i = 0; i < cards.length; i++) {
										if (get.name(cards[i]) == "sha") {
											player.gain(cards[i])
											player.addToExpansion(player, "give", cards[i])
											break
										}
									}
									player.draw()
								},
								viewAs: {
									name: "sha",
									audio: "ffchangbiaogai",
								},
								viewAsFilter(player) {
									const cards = _status.discarded
									if (cards.length == 0) {
										return false
									}
									for (let i = 0; i < cards.length; i++) {
										if (get.name(cards[i]) == "sha") {
											break;
										} else if (i === cards.length - 1) {
											return false
										}
									}
								},
							},
							ffkuiruogai: {
								trigger: {
									player: "drawEnd",
									source: "damageSource",
								},
								audio: "xinzongxuan",
								group: "ffkuiruogai_mark",
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "韵律技，每回合限一次";
										if (!storage) {
											return str + "当你摸牌后，你可以分配1点伤害";
										} else {
											return str + "当你造成伤害后，你可以分配牌堆顶一张牌";
										}
									},
								},
								filter(event, player) {
									if (!player.storage.ffkuiruogai) {
										return event.name == "draw" && player.countMark("ffkuiruogai_mark") == 0
									} else {
										return event.name == "damage" && player.countMark("ffkuiruogai_mark") == 0
									}
								},
								async content(event, trigger, player) {
									if (!player.storage.ffkuiruogai) {
										player.setMark("ffkuiruogai_mark", 1)
										var result = await player.chooseTarget()
											.set("selectTarget", 1)
											.set("forced", true)
											.set("prompt", "分配1点伤害")
											.forResult()
										if (result.bool) {
											result.targets[0].damage(1)
											result.targets[0].addSkill("ffkuiruogai_damage")
										}
									} else {
										player.setMark("ffkuiruogai_mark", 1)
										const card = get.cards(1, true)[0];
										const content = ["牌堆顶", [card]];
										game.log(player, "观看了牌堆顶的一张牌");
										await player.chooseControl("ok").set("dialog", content);
										var result = await player.chooseTarget()
											.set("selectTarget", 1)
											.set("forced", true)
											.set("prompt", "分配牌堆顶的牌")
											.forResult()
										if (result.bool) {
											result.targets[0].gain(card)
											result.targets[0].addSkill("ffkuiruogai_draw")
										}
									}
								},
								subSkill: {
									"damage": {
										trigger: {
											global: "useCardToTarget",
										},
										forced: true,
										silent: true,
										filter(event, player) {
											return event.player.hasSkill("ffkuiruogai") && event.targets.includes(player)
										},
										async content(event, trigger, player) {
											player.damage(1, trigger.player)
											player.removeSkill("ffkuiruogai_damage")
										},
									},
									"draw": {
										trigger: {
											global: "useCardToTarget",
										},
										forced: true,
										silent: true,
										filter(event, player) {
											return event.player.hasSkill("ffkuiruogai") && event.targets.includes(player)
										},
										async content(event, trigger, player) {
											trigger.player.draw()
											player.removeSkill("ffkuiruogai_draw")
										},
									},
									"mark": {
										trigger: {
											global: "showCardsEnd",
										},
										forced: true,
										filter(event, player) {
											return event.cards.some(i => get.owner(i) == player);
										},
										async content(event, trigger, player) {
											player.changeZhuanhuanji("ffkuiruogai")
											player.setMark("ffkuiruogai_mark", 0)
										}
									}
								},
							},
							ffguanpinggai: {
								enable: "phaseUse",
								group: ["ffguanpinggai_mark", "ffguanpinggai_mark2"],
								audio: "olzhiyan",
								filter(event, player) {
									return player.countMark("ffguanpinggai_mark2") == 0
								},
								async content(event, trigger, player) {
									player.addMark("ffguanpinggai_mark", 1)
									await player.chooseUseTarget({ name: "huogong" }, { isCard: false }, true, false)
								},
								subSkill: {
									"mark": {
										trigger: {
											player: "useCard"
										},
										forced: true,
										silent: true,
										filter(event, player) {
											return get.name(event.card) == "huogong"
										},
										async content(event, trigger, player) {
											if (trigger.targets[0].countCards("h") < player.countMark("ffguanpinggai_mark")) {
												player.setMark("ffguanpinggai_mark2", 1)
											}
										},
									},
									"mark2": {
										trigger: {
											player: "phaseUseBegin",
										},
										forced: true,
										silent: true,
										async content(event, trigger, player) {
											player.setMark("ffguanpinggai_mark2", 0)
											player.setMark("ffguanpinggai_mark", 0)
										},
									},
								},
							},
							ffxishigai: {
								trigger: {
									global: ["loseAfter", "gainAfter", "equipAfter", "addJudgeAfter", "loseAsyncAfter", "addToExpansionAfter"],
								},
								audio: "dcsbzuojun",
								skillAnimation: false,
								animationColor: "gray",
								limited: true,
								filter(event, player) {
									const bool = event.getl && event.getl(event.player)?.hs?.length;
									const bool2 = event.getl && event.getl(event.player)?.j?.length;
									const bool3 = event.getl && event.getl(event.player)?.e?.length;
									if (event.name == "addJudge" || bool2) {
										const targets = game.players.sortBySeat().slice();
										for (let target of targets) {
											if (target == event.player) {
												continue;
											}
											if (target.countCards("j") == event.player.countCards("j")) {
												return false;
											}
										}
										return true
									} else if (event.name == "equip" || bool3) {
										const targets = game.players.sortBySeat().slice();
										for (let target of targets) {
											if (target == event.player) {
												continue;
											}
											if (target.countCards("e") == event.player.countCards("e")) {
												return false;
											}
										}
										return true
									} else if (event.name == "gain" || bool) {
										const targets = game.players.sortBySeat().slice();
										for (let target of targets) {
											if (target == event.player) {
												continue;
											}
											if (target.countCards("hs") == event.player.countCards("hs")) {
												return false;
											}
										}
										return true
									}
								},
								async content(event, trigger, player) {
									player.awakenSkill(event.name);
									event.cards = game.cardsGotoOrdering(get.cards(3)).cards;
									if (_status.connectMode) {
										game.broadcastAll(function () {
											_status.noclearcountdown = true;
										});
									}
									//event.given_map = {};
									if (event.cards.length > 0) {
										const result = await player
											.chooseCardButton("悉势：请选择要蓄谋的牌", true, { forced: true }, event.cards, 1).set("ai", function (button) {
												if (ui.selected.buttons.length == 0) {
													return 1;
												}
												return 0;
											})
											.forResult();
										const result2 = await player.chooseTarget()
											.set("selectTarget", 1)
											.set("forced", true)
											.set("prompt", "为选择角色蓄谋")
											.forResult()
										await result2.targets[0].addJudge({ name: "xumou_jsrg" }, result.links);
									}
								},
							},
							ffhuicegai: {
								enable: "chooseToUse",
								usable: 1,
								audio: "dcsbmuwang",
								hiddenCard(player, name) {
									return game.hasPlayer(target => target.hasVCard(card => card.cards.some(i => get.name(i) == name), "ej"));
								},
								getCards() {
									const cards = new Map();
									game.filterPlayer().forEach(target => {
										const map = {
											es: [],
											js: [],
										};
										["e", "j"].forEach(i => {
											map[`${i}s`].addArray(target.getVCards(i).map(card => card.cards).flat());
										});
										cards.set(target, map);
									});
									return cards;
								},
								filter(event, player) {
									const map = get.info("ffhuicegai").getCards();
									return map.keys().some(target => Object.values(map.get(target)).flat().some(card => lib.filter.canBeGained(card, player, target, "ffhuice") && event.filterCard(card, player, event)));
								},
								chooseButton: {
									dialog(event, player) {
										const dialog = ui.create.dialog("慧策", "hidden");
										const cards = get.info("ffhuicegai").getCards();
										for (const target of cards.keys()) {
											const map = cards.get(target);
											if (map.es?.length) {
												const title = dialog.add(`<div class="text center" style="margin: 0px;">${get.translation(target)}的装备区</div>`);
												title.style.margin = "0px";
												title.style.padding = "0px";
												dialog.add(map.es);
											}
											if (map.js?.length) {
												const title = dialog.add(`<div class="text center" style="margin: 0px;">${get.translation(target)}的判定区</div>`);
												title.style.margin = "0px";
												title.style.padding = "0px";
												dialog.add(map.js);
											}
											dialog.addText("");
										}
										return dialog;
									},
									filter(button) {
										const card = button.link;
										const target = get.owner(button.link);
										const event = get.event().getParent();
										const player = get.player();
										return lib.filter.canBeGained(card, player, target, "ffhuicegai") && event.filterCard(card, player, event);
									},
									backup(links, player) {
										return {
											audio: "ffhuicegai",
											filterCard: () => false,
											selectCard: -1,
											viewAs: links[0],
											card: links[0],
											log: false,
											async precontent(event, trigger, player) {
												player.logSkill("ffhuicegai");
												const card = get.info(event.name.slice(4)).card;
												event.result.cards = [card];
												const owner = get.owner(card);
												const vcard = owner.getCards(get.position(card), cardx => cardx[cardx.cardSymbol].cards.includes(card))[0];
												await player.gain(vcard || card, owner, "giveAuto", "bySelf");
											}
										};
									},
									prompt(links) {
										return `请选择${get.translation(links[0])}的目标`;
									}
								},
								group: "ffhuicegai_refresh",
								subSkill: {
									refresh: {
										forced: true,
										audio: "dcsbmuwang",
										trigger: {
											global: ["loseAfter", "loseAsyncAfter", "gainAfter", "equipAfter", "addJudgeAfter", "addToExpansionAfter"],
										},
										getIndex(event, player) {
											const nums = [0, 3];
											return game.filterPlayer(target => {
												if (event.player == target) {
													if (event.name == "equip" && nums.includes(target.countCards("e"))) {
														return true;
													}
													if (event.name == "addJudge" && nums.includes(target.countCards("j"))) {
														return true;
													}
												}
												if (event.name == "gain" || event.name == "loseAsync") {
													if (event.getg(target)?.length && nums.includes(target.countCards("h"))) {
														return true;
													}
												}
												return ["h", "e", "j"].some(pos => event.getl?.(target)?.[`${pos}s`]?.length && nums.includes(target.countCards(pos)));
											}).sortBySeat();
										},
										getList(player) {
											const skills = player.getSkills(null, false, false).filter(skill => {
												const info = get.info(skill);
												return info && !info.charlotte;
											});
											const resetSkills = [],
												suffixs = ["used", "round", "block", "blocker"];
											for (const skill of skills) {
												const info = get.info(skill);
												if (info.usable !== undefined) {
													if (typeof player.getStat("triggerSkill")[skill] == "number" && player.getStat("triggerSkill")[skill] >= 1) {
														resetSkills.add(skill);
													}
													if (typeof player.getStat("skill")[skill] == "number" && player.getStat("skill")[skill] >= 1) {
														resetSkills.add(skill);
													}
												}
												if (info.round && player.storage[skill + "_roundcount"]) {
													resetSkills.add(skill);
												}
												if (player.storage[`temp_ban_${skill}`]) {
													resetSkills.add(skill);
												}
												if (player.awakenedSkills.includes(skill)) {
													resetSkills.add(skill);
												}
												for (const suffix of suffixs) {
													if (player.hasSkill(skill + "_" + suffix)) {
														resetSkills.add(skill);
													}
												}
											}
											return resetSkills;
										},
										filter(event, player) {
											return get.info("ffhuicegai_refresh").getList(player).length;
										},
										async content(event, trigger, player) {
											const list = get.info(event.name).getList(player);
											const result = await player
												.chooseButton([`请选择重置一个技能`, [list, "skill"]], true)
												.forResult();
											if (result?.links?.length) {
												const [skill] = result.links;
												player.refreshSkill(skill);
											}
										},
									},
								}
							},
							ffweishengai: {
								enable: ["chooseToUse"],
								audio: "clanyunshen",
								group: ["ffweishengai_mark", "ffweishengai_mark2"],
								filter: function (event, player) {
									if (player.countCards("hes") < 2) {
										return false
									}
									for (var name of lib.inpile) {
										if (event.filterCard({ name: name, isCard: true }, player, event)) return true;
									}
								},
								onChooseToUse(event) {
									if (!game.online && !event.ffhuanhuo) {
										var list = get.inpileVCardList(info => {
											return ["basic"].includes(info[0])
										})
										list.push(["basic", "", "sha", "fire"])
										list.push(["basic", "", "sha", "thunder"])
										list.push(["basic", "", "sha", "ice"])
										event.set("ffweishengai", list);
									}
								},
								chooseButton: {
									dialog: function (event, player) {
										const list = event.ffweishengai;
										return ui.create.dialog(`慰身`, [list, "vcard"])
									},
									filter: function (button, player) {
										return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
									},
									backup: function (links, player) {
										return {
											audio: "ffweishengai",
											filterCard: () => true,
											position: "hes",
											selectCard: 2,
											popname: true,
											viewAs: { name: links[0][2], nature: links[0][3], isCard: true, },
										}
									},
								},
								hiddenCard: function (player, name) {
									if (!lib.inpile.includes(name)) return false;
									var type = get.type2(name);
									return ["basic"].includes(type);
								},
								subSkill: {
									"mark": {
										trigger: {
											player: "useCard"
										},
										forced: true,
										filter(event, player) {
											if (event.skill != "ffweishengai_backup") {
												return false
											}
											if (get.nature(event.card)) {
												return true
											}
											for (let i = 0; i < event.cards.length; i++) {
												if (get.nature(event.cards[i]) || get.name(event.cards[i]) == "huogong") {
													return true
												}
											}
											return false
										},
										async content(event, trigger, player) {
											trigger.targets[0].recover()
											for (let i = 0; i < trigger.cards.length; i++) {
												if (!get.tag(trigger.cards[i], "damage")) {
													trigger.targets[0].gain(trigger.cards[i])
												}
											}
										},
									},
									/*	"mark2": {
											trigger: {
												player: "useCardAfter",
											},
											forced: true,
											filter(event, player) {
												if (get.name(event.card) == "tao" && event.targets[0] != player && player.getStorage("ffweishengai_mark").length == 0) {
													return true
												}
											},
											async content(event, trigger, player) {
												player.markAuto("ffweishengai_mark", trigger.targets[0])
											},
										}*/
								},
							},
							fffenchaigai: {
								juexingji: true,
								forced: true,
								audio: "clanfenchai",
								trigger: {
									player: "useCardAfter",
								},
								forced: true,
								filter(event, player) {
									if (get.name(event.card) == "tao" && event.targets[0] != player && player.getStorage("ffweishengai_mark").length == 0) {
										return true
									}
								},
								async content(event, trigger, player) {
									player.awakenSkill(event.name);
									const skills = player.getSkills(null, false, false).filter(skill => {
										let info = get.info(skill);
										if (!info || info.charlotte || !get.is.locked(skill) || get.skillInfoTranslation(skill, player).length == 0) {
											return false;
										}
										return true;
									});
									const skills2 = trigger.targets[0].getSkills(null, false, false).filter(skill => {
										let info = get.info(skill);
										if (!info || info.charlotte || !get.is.locked(skill) || get.skillInfoTranslation(skill, player).length == 0) {
											return false;
										}
										return true;
									});
									var wanjia = trigger.targets[0]
									wanjia.markAuto("ffshangshengai", player);
									await wanjia.addSkills(skills);
									wanjia.insertPhase();
									player.markAuto("ffshangshengai", trigger.targets[0])
									var wanjia = player
									await wanjia.addSkills(skills2);
									player.insertPhase();
								},
								/*	forceDie: true,
									trigger: {
										global: "die"
									},
									filter(event, player) {
										return (event.player == player && player.getStorage("ffweishengai_mark").length > 0) || player.getStorage("ffweishengai_mark").includes(event.player)
									},
									async content(event, trigger, player) {
										player.awakenSkill(event.name);
										const skills = trigger.player.getSkills(null, false, false).filter(skill => {
											let info = get.info(skill);
											if (!info || info.charlotte || !get.is.locked(skill) || get.skillInfoTranslation(skill, player).length == 0) {
												return false;
											}
											return true;
										});
										if (trigger.player == player) {
											var wanjia = player.getStorage("ffweishengai_mark")[0];
											wanjia.markAuto("ffshangshengai", player);
											await wanjia.addSkills(skills);
										} else {
											player.markAuto("ffshangshengai", player.getStorage("ffweishengai_mark")[0])
											var wanjia = player
											await wanjia.addSkills(skills);
										}
									},*/
							},
							ffshangshengai: {
								forced: true,
								locked: true,
								audio: "clanshangshen",
								trigger: {
									global: "phaseOver",
								},
								filter(event, player) {
									return player.getStorage("ffshangshengai").includes(event.player) && !event.player.isAlive()
								},
								async content(event, trigger, player) {
									await player.recover();
									player.insertPhase();
								}
							},
							ffxiangzhonggai: {
								enable: "phaseUse",
								audio: "mbsuwang",
								group: "ffxiangzhonggai_mark",
								filter(event, player) {
									return player.countCards("hes") > 0 && player.countMark("ffxiangzhonggai_mark") > 0
								},
								async content(event, trigger, player) {
									const choices = ['【火攻】', '【决斗】', 'cancel2'];
									if (!player.hasUseTarget({ name: 'huogong' })) {
										choices.remove('【火攻】')
									}
									if (!player.hasUseTarget({ name: 'juedou' })) {
										choices.remove('【决斗】')
									}
									var result = await player
										.chooseControl()
										.set('controls', choices)
										.forResult();
									if (result.control == "【火攻】") {
										var result2 = await player.chooseCard()
											.set("position", "hes")
											.set("forced", true)
											.set("selectCard", 1)
											.forResult();
										player.removeMark("ffxiangzhonggai_mark", 1)
										await player.chooseUseTarget(result2.cards, { name: "huogong" }, true);
										player.useSkill("ffshuzhugai")
									} else if (result.control == "【决斗】") {
										var result2 = await player.chooseCard()
											.set("position", "hes")
											.set("forced", true)
											.set("selectCard", 1)
											.forResult();
										player.removeMark("ffxiangzhonggai_mark", 1)
										await player.chooseUseTarget(result2.cards, { name: "juedou" }, true);
										player.useSkill("ffshuzhugai")
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											player: "phaseUseBegin",
										},
										intro: {
											name: "相踵可发动次数",
											content: function (storage, player) {
												return
											},
										},
										marktext: "踵",
										forced: true,
										silent: true,
										async content(event, trigger, player) {
											player.setMark("ffxiangzhonggai_mark", 3)
										}
									},
								},
							},
							ffshuzhugai: {
								enable: "phaseUse",
								audio: "mbbifeng",
								group: "ffshuzhugai_mark",
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，出牌阶段，你可以选择一项：";
										if (storage) {
											return str + "1.摸牌至体力上限(至少为1)；2.本回合你的一个技能可发动次数+1。";
										} else {
											return str + "2.弃牌至体力上限(至少为1)；2.本回合你的一个技能可发动次数-1。";
										}
									},
								},
								filter(event, player) {
									if (player.storage.ffshuzhugai) {
										if (player.countCards("h") == 0 && player.countMark("ffxiangzhonggai_mark") == 0 && player.countMark("ffshuzhugai_mark") < 2) {
											return false
										}
									}
									return player.countMark("ffshuzhugai_mark") > 0
								},
								async content(event, trigger, player) {
									if (!player.storage.ffshuzhugai) {
										player.removeMark("ffshuzhugai_mark", 1)
										player.changeZhuanhuanji("ffshuzhugai")
										const choices = ['摸牌', '次数+1'];
										var result = await player
											.chooseControl()
											.set('controls', choices)
											.set("forced", true)
											.forResult();
										if (result.control == "摸牌") {
											if (player.countCards("h") < 3) {
												player.drawTo(3)
											} else {
												player.draw()
											}
										} else if (result.control == "次数+1") {
											player.addMark("ffshuzhugai_mark", 1)
											player.addMark("ffxiangzhonggai_mark", 1)
										}
									} else {
										player.removeMark("ffshuzhugai_mark", 1)
										player.changeZhuanhuanji("ffshuzhugai")
										const choices = ['弃牌', '次数-1'];
										if (player.countCards("he") == 0) {
											choices.remove('弃牌')
										}
										var result = await player
											.chooseControl()
											.set('controls', choices)
											.set("forced", true)
											.forResult();
										if (result.control == "弃牌") {
											if (player.countCards("h") > 3) {
												player.chooseToDiscard("h", player.countCards("h") - 3, true)
											} else {
												player.chooseToDiscard("h", 1, true)
											}
										} else if (result.control == "次数-1") {
											player.removeMark("ffshuzhugai_mark", 1)
											player.removeMark("ffxiangzhonggai_mark", 1)
										}
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											player: "phaseUseBegin",
										},
										intro: {
											name: "束躅可发动次数",
											content: function (storage, player) {
												return
											},
										},
										marktext: "束",
										forced: true,
										silent: true,
										async content(event, trigger, player) {
											player.setMark("ffshuzhugai_mark", 0)
										}
									},
								},
							},
							ffzuolonggai: {
								trigger: {
									global: "useCard",
								},
								forced: true,
								audio: "shoucheng",
								locked: true,
								group: "ffzuolonggai_mark",
								filter(event, player) {
									return get.tag(event.card, "damage") && player.countMark("ffzuolonggai_mark") == 0
								},
								async content(event, trigger, player) {
									const target = trigger.player;
									if (target.group == "shu") {
										player.addMark("ffzuolonggai_mark", 1)
									}
									let zhu = false;
									switch (get.mode()) {
										case "identity": {
											zhu = target.isZhu;
											break;
										}
										case "doudizhu": {
											zhu = target == game.zhu;
											break;
										}
									}
									if (zhu) {
										player.addMark("ffzuolonggai_mark", 1)
									}
									if (target.hp == 1) {
										player.addMark("ffzuolonggai_mark", 1)
									}
									if (get.color(trigger.card) == "red") {
										player.addMark("ffzuolonggai_mark", 1)
									}
									const a = target.getCards("e")
									if (a.length > 0) {
										for (let i = 0; i < a.length; i++) {
											if (get.color(a[i]) != "red") {
												break
											} else if (i == a.length - 1) {
												player.addMark("ffzuolonggai_mark", 1)
											}
										}
									}
									const b = target.getCards("j")
									if (b.length > 0) {
										for (let i = 0; i < b.length; i++) {
											if (get.color(b[i]) != "red") {
												break
											} else if (i == b.length - 1) {
												player.addMark("ffzuolonggai_mark", 1)
											}
										}
									}
									if (player.countMark("ffzuolonggai_mark") > 0) {
										player.chooseToGuanxing(player.countMark("ffzuolonggai_mark"))
									} else {
										player.addMark("ffzuolonggai_mark", 1)
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											global: "phaseBegin",
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											player.setMark("ffzuolonggai_mark", 0)
										},
									},
								},
							},
							ffchouyegai: {
								enable: "chooseToUse",
								audio: "shengxi",
								group: "ffchouyegai_mark",
								hiddenCard(player, name) {
									return name === "wuxie" && player.countMark("ffchouyegai") == 0
								},
								filter(event, player) {
									return event.filterCard({ name: "wuxie", isCard: true }, player, event) && player.countMark("ffchouyegai") == 0
								},
								filterCard: () => false,
								selectCard: -1,
								log: false,
								prompt: "从牌堆一端展示牌，若花色与本轮此前不同，视为使用【无懈可击】",
								async precontent(event, trigger, player) {
									player.logSkill("ffchouyegai");
									const choices = ['牌堆顶', '牌堆底'];
									var result = await player
										.chooseControl()
										.set('controls', choices)
										.set("forced", true)
										.forResult();
									if (result.control == "牌堆顶") {
										const cards = game.cardsGotoOrdering(get.cards()).cards;
										await player.showCards(cards);
										if (player.getStorage("ffchouyegai_mark").includes(get.suit(cards[0]))) {
											player.setStorage("ffchouyegai_mark", null);
										} else {
											player.markAuto("ffchouyegai_mark", get.suit(cards[0]))
										}
										player.gain(cards)
										await player.addToExpansion(player, "give", cards)
									} else if (result.control == "牌堆底") {
										const cards = game.cardsGotoOrdering(get.bottomCards()).cards;
										await player.showCards(cards);
										if (player.getStorage("ffchouyegai_mark").includes(get.suit(cards[0]))) {
											player.setStorage("ffchouyegai_mark", null);
										} else {
											player.markAuto("ffchouyegai_mark", get.suit(cards[0]))
										}
										player.gain(cards)
										await player.addToExpansion(player, "give", cards)
									}
									var arr = player.getStorage("ffchouyegai_mark")
									if (player.getStorage("ffchouyegai_mark").length > 0) {
									} else {
										var a = player.getCards("x")
										player.gain(a)
										player.setMark("ffchouyegai", 1)
										const evt = event.getParent();
										evt.set("ffchouyegai", true);
										evt.goto(0);
										delete evt.openskilldialog;
										return;
									}
								},
								viewAs: {
									name: "wuxie",
									isCard: true,
								},
								subSkill: {
									"mark": {
										trigger: {
											global: "roundEnd",
										},
										forced: true,
										async content(event, trigger, player) {
											var a = player.getCards("x")
											player.gain(a)
											player.discard(a)
											player.setMark("ffchouyegai", 0)
										},
									},
								},
							},
							ffduosigai: {
								trigger: {
									global: ["loseAfter", "loseAsyncAfter", "cardsDiscardAfter", "equipAfter", "gainAfter"]
								},
								audio: "dcjiwei",
								group: ["ffduosigai_mark", "ffduosigai_mark2"],
								filter(event, player) {
									if (event.name == "gain") {
										const cur = _status.discarded.slice(0);
										return event.ffduosigai == true && cur.length == 3
									} else {
										const cards = event.getd();
										if (!cards.length) {
											return false;
										}
										const prev = _status.discarded.slice(0).removeArray(cards);
										const cur = _status.discarded.slice(0);
										return (
											prev.length != 3 &&
											cur.length == 3 &&
											player.countCards("h") > 0
										)
									}
								},
								async content(event, trigger, player) {
									var result = await player.chooseTarget()
										.set("filterTarget", function (card, player, target) {
											return player.canCompare(target);
										})
										.set("selectTarget", 1)
										.set("prompt", "与一名角色拼点")
										.forResult()
									if (result.bool) {
										const bool = await player.chooseToCompare(result.targets[0]).forResultBool();
										if (bool) {
											player.chooseUseTarget({ name: "sha" }, { isCard: false }, false, false)
										}
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											player: ["changeHp", "loseAfter"],
											global: ["loseAsyncAfter", "equipAfter", "addToExpansionAfter", "gainAfter", "addJudgeAfter"],
										},
										audio: "dcjiwei",
										filter(event, player) {
											if (event.name == "changeHp") {
												return player.hp == 3
											} else {
												const bool1 = event.getg && event.getg(player)?.length
												const bool2 = event.getl && event.getl(player)?.hs?.length;
												return (bool1 || bool2) && player.countCards("h") == 3
											}
										},
										async content(event, trigger, player) {
											var result = await player.chooseTarget()
												.set("filterTarget", function (card, player, target) {
													return player.canCompare(target);
												})
												.set("selectTarget", 1)
												.set("prompt", "与一名角色拼点")
												.forResult()
											if (result.bool) {
												const bool = await player.chooseToCompare(result.targets[0]).forResultBool();
												if (bool) {
													player.chooseUseTarget({ name: "sha" }, { isCard: false }, false, false)
												}
											}
										},
										"_priority": 1,
									},
									"mark2": {
										trigger: {
											global: "gainBegin"
										},
										forced: true,
										popup: false,
										filter(event, player) {
											return event.cards && event.cards.some(card =>
												_status.discarded.includes(card)
											);
										},
										async content(event, trigger, player) {
											trigger.ffduosigai = true;
										},
									}
								},
							},
							ffdianlungai: {
								trigger: {
									player: "damageEnd",
									source: "damageSource",
								},
								usable: 1,
								audio: "dcdianlun",
								filter(event, player) {
									const cur = _status.discarded.slice(0);
									return cur.length > 0
								},
								async content(event, trigger, player) {
									var cards = _status.discarded
									var result = await player.chooseButton(["典论：获得任意张中央区内的牌", cards], true, [1, Infinity]).set("ai", function (button) {
										return get.value(button.link, _status.event.player);
									}).forResult()
									if (result.bool) {
										var a = result.links.length
										await player.gain(result.links, "gain2");
									};
									const choices = ['弃牌', '失去体力'];
									var result = await player
										.chooseControl()
										.set('controls', choices)
										.set("forced", true)
										.forResult();
									if (result.control == "弃牌") {
										await player.chooseToDiscard("he", a, true)
									} else if (result.control == "失去体力") {
										await player.loseHp(a)
									}
								},
							},
							ffhuaijugai: {
								trigger: {
									player: "useCardAfter",
								},
								zhuanhuanji: true,
								audio: "clanfennu",
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，你使用的指定目标的牌结算后：";
										if (storage) {
											return str + "你可以交给一名目标角色至多三张牌。";
										} else {
											return str + "你可以令一名目标角色重铸至多三张牌。";
										}
									},
								},
								filter(event, player) {
									if (!player.storage.ffhuaijugai) {
										if (event.targets.length == 1) {
											return event.targets[0] != player
										} else if (event.targets.length > 1) {
											return true
										}
									} else {
										return event.targets.length > 0
									}
									return false
								},
								async content(event, trigger, player) {
									player.changeZhuanhuanji("ffhuaijugai")
									if (player.storage.ffhuaijugai) {
										var result = await player.chooseCardTarget()
											.set("position", "he")
											.set("selectCard", [1, 3])
											.set("filterTarget", function (card, player, target) {
												return trigger.targets.includes(target) && target != player
											})
											.set("selectTarget", 1)
											.set("forced", true)
											.set("prompt", "交给目标角色至多三张牌")
											.forResult()
										await player.give(result.cards, result.targets[0]);
										await result.targets[0].addGaintag(result.cards, "怀橘")
									} else {
										var result = await player.chooseTarget()
											.set("filterTarget", function (card, player, target) {
												return trigger.targets.includes(target)
											})
											.set("selectTarget", 1)
											.set("forced", true)
											.set("prompt", "令目标角色重铸至多3张牌")
											.forResult()
										var result2 = await result.targets[0].chooseCard()
											.set("position", "he")
											.set("selectCard", [1, 3])
											.set("forced", true)
											.forResult()
										await result.targets[0].recast(
											result2.cards,
											null,
											(player, cards) => {
												let next = result.targets[0].draw(cards.length);
												next.log = false;
												next.gaintag = ["怀橘"];
											}
										);
									}
								},
							},
							ffhuntiangai: {
								trigger: {
									global: "loseAfter",
								},
								group: "ffhuntiangai_mark",
								audio: "clangailan",
								forced: true,
								locked: false,
								filter(event, player) {
									if (event.ffhuntiangai != true) {
										return false
									}
									var cards = event.player.getCards("h")
									for (let i = 0; i < cards.length; i++) {
										if (cards[i].hasGaintag("怀橘")) {
											return false
										}
									}
									return true
								},
								async content(event, trigger, player) {
									const choiceList = ["将所有基本牌当一张普通锦囊牌使用", "将所有锦囊牌当一张基本牌使用", "交给陆绩所有装备牌",];
									const choices = ["选项一", "选项二", "选项三", "cancel2"];
									if (trigger.player.getCards("h", card => get.type(card) == "basic").length == 0) {
										choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
										choices.remove("选项一");
									};
									if (trigger.player.getCards("h", card => get.type(card) == "trick" || get.type(card) == "delay").length == 0) {
										choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
										choices.remove("选项二");
									};
									if (trigger.player.getCards("he", card => get.type(card) == "equip").length == 0 || trigger.player == player) {
										choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + "</span>";
										choices.remove("选项三");
									};
									if (choices.length > 1) {
										var result = await trigger.player
											.chooseControl()
											.set("controls", choices)
											.set("choiceList", choiceList)
											.forResult();
										if (result.control == "选项一") {
											var cards = trigger.player.getCards("h", card => get.type(card) == "basic")
											var list = get.inpileVCardList(info => {
												return ["trick"].includes(info[0])
											});
											const result = await trigger.player.chooseButton([`将所有基本牌当一张普通锦囊牌使用`, [list, "vcard"]]).set("forced", true).forResult();
											await trigger.player.chooseUseTarget(result.links[0][2], cards, true, false);
										} else if (result.control == "选项二") {
											var cards = trigger.player.getCards("h", card => get.type(card) == "trick" || get.type(card) == "delay")
											var list = get.inpileVCardList(info => {
												return ["basic"].includes(info[0])
											});
											const result = await trigger.player.chooseButton([`将所有锦囊牌当一张基本牌使用`, [list, "vcard"]]).set("forced", true).forResult();
											await trigger.player.chooseUseTarget(result.links[0][2], cards, true, false);
										} else if (result.control == "选项三") {
											var cards = trigger.player.getCards("he", card => get.type(card) == "equip")
											await trigger.player.give(cards, player);
										}
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											global: "loseBegin"
										},
										forced: true,
										popup: false,
										filter(event, player) {
											for (let i = 0; i < event.cards.length; i++) {
												return event.cards[i].hasGaintag("怀橘")
											}
										},
										async content(event, trigger, player) {
											trigger.ffhuntiangai = true;
										},
									}
								}
							},
							ffshidugai: {
								trigger: {
									global: "useCardAfter",
								},
								usable: 1,
								audio: "dcjikun",
								group: "ffshidugai_targets",
								filter(event, player) {
									return event.player != player && event.targets.length > 0 && player.countCards("hes") > 0
								},
								async content(event, trigger, player) {
									await player.chooseToUse()
									console.log(trigger.targets)
									var targets = player.getStorage("ffshidugai")
									console.log(targets)
									if (targets.length > 0) {
										for (let i = 0; i < trigger.targets.length; i++) {
											if (!trigger.targets[i] || !trigger.targets[i].isIn()) continue;
											if (targets.includes(trigger.targets[i])) {
												if (trigger.targets[i].countCards("h") > player.countCards("h")) {
													await trigger.targets[i].chooseToDiscard(trigger.targets[i].countCards("h") - player.countCards("h"), true)
												} else {
													await trigger.targets[i].drawTo(player.countCards("h"))
												}
											}
										}
										for (let i = 0; i < trigger.targets.length; i++) {
											if (!trigger.targets[i] || !trigger.targets[i].isIn()) continue;
											if (!targets.includes(trigger.targets[i])) {
												if (trigger.targets[i].countCards("h") > trigger.player.countCards("h")) {
													await trigger.targets[i].chooseToDiscard(trigger.targets[i].countCards("h") - trigger.player.countCards("h"), true)
												} else {
													await trigger.targets[i].drawTo(trigger.player.countCards("h"))
												}
											}
										}
										for (let i = 0; i < targets.length; i++) {
											if (!targets[i] || !targets[i].isIn()) continue;
											if (!trigger.targets.includes(targets[i])) {
												if (targets[i].countCards("h") > trigger.player.countCards("h")) {
													await targets[i].chooseToDiscard(targets[i].countCards("h") - trigger.player.countCards("h"), true)
												} else {
													await targets[i].drawTo(trigger.player.countCards("h"))
												}
											}
										}
									}
									player.setStorage("ffshidugai", null);
								},
								subSkill: {
									"targets": {
										trigger: {
											player: "useCard"
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											for (let i = 0; i < trigger.targets.length; i++) {
												player.markAuto("ffshidugai", trigger.targets[i])
											}
										}
									}
								}
							},
							ffshudugai: {
								global: "ffshudugai_global",
								audio: "dcdujun",
								enable: ["chooseToUse"],
								position: "hes",
								selectCard: 1,
								filterCard(card, player) {
									return true
								},
								viewAs: {
									name: "sha"
								},
								filterTarget(card, player, target) {
									return target.countCards('h') !== player.countCards('h') && player.canUse({ name: 'sha' }, target)
								},
								subSkill: {
									"global": {
										enable: ["chooseToUse"],
										position: "hes",
										audio: "dcdujun",
										selectCard: 1,
										filterCard(card, player) {
											return true
										},
										viewAs: {
											name: "tao"
										},
										filterTarget(card, player, target) {
											return target.hasSkill("ffshudugai") && target.countCards('h') == player.countCards('h');
										},
									}
								}
							},
							fflilungai: {
								enable: "phaseUse",
								group: ["fflilungai_change", "fflilungai_change2", "fflilungai_mark"],
								audio: "clanlilun",
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "韵律技，出牌阶段限一次，你可以";
										if (!storage) {
											return str + "重铸一张可以使用的牌，使你使用的下一张牌无次数和距离限制。";
										} else {
											return str + "重铸一张不可使用的牌，使你使用下一张牌时，获得一张可以使用的牌。";
										}
									},
								},
								filter(event, player) {
									return player.countMark("fflilungai_change2") == 0
								},
								filterCard(card, player) {
									if (!player.storage.fflilungai) {
										return player.hasUseTarget(card, true, true);
									} else {
										return !player.hasUseTarget(card, true, true);
									}
								},
								selectCard: 1,
								lose: false,
								discard: false,
								async content(event, trigger, player) {
									player.setMark("fflilungai_change2", 1)
									player.recast(event.cards)
									if (!player.storage.fflilungai) {
										player.addSkill("fflilungai_unlimit");
									} else {
										if(!player.hasSkill("fflilungai_use")){
											player.addSkill("fflilungai_use")
											player.setMark("fflilungai_use",1)
										}else{
											player.addMark("fflilungai_use",1)
										}
									}
								},
								subSkill: {
									unlimit: {
										charlotte: true,
										mod: {
											cardUsable: () => Infinity,
											targetInRange: () => true,
										},
										trigger: {
											player: "useCard1",
										},
										forced: true,
										popup: false,
										firstDo: true,
										async content(event, trigger, player) {
											player.removeSkill("fflilungai_unlimit");
											const { card } = trigger;
											if (trigger.addCount !== false) {
												trigger.addCount = false;
												player.getStat("card")[card.name]--;
											}
										},
										mark: true,
										intro: {
											content: "使用的下一张牌无次数与距离限制",
										},
										sub: true,
										sourceSkill: "fflilungai",
									},
									use: {
										trigger: {
											player: "useCardAfter"
										},
										forced: true,
										async content(event, trigger, player) {
											for(let i=0;i<player.countMark("fflilungai_use",1);i++){
												var cards = [];
												var card = get.cardPile(function (card) { return player.hasUseTarget(card, true, true) });
												if (card) { cards.push(card) };
												if (cards.length) { await player.gain(cards, "gain2", "log"); }											
											}
											player.removeSkill("fflilungai_use")												
										}
									},
									change: {
										trigger: {
											player: ["loseAfter", "useCardAfter"]
										},
										forced: true,
										filter(event, player) {
											var a = player.getStorage("fflilungai_change")
											if (event.getParent(1).name == "fflilungai_change") {
												return false
											}
											if (a.length == 0) {
												return false
											}
											if (a.length == 1) {
												var b = a[0]
											} else {
												for (var i = 1; i < a.length; i++) {
													if (a[0] != a[i]) {
														var b = 0
														break
													} else if (i == a.length) {
														var b = a[0]
													}
												}
											}
											console.log(b)
											console.log(!player.hasCard(card => {
												return player.hasUseTarget(card, true, true);
											}))
											return (!player.hasCard(card => {
												return player.hasUseTarget(card, true, true);
											}) && b != 1) ||
												(player.countCards("h", card => {
													return player.hasUseTarget(card, true, true);
												}) == player.countCards("h") && b != 2);
										},
										async content(event, trigger, player) {
											player.setStorage("fflilungai_change", null)
											player.changeZhuanhuanji("fflilungai")
											player.setMark("fflilungai_change2", 0)
										},
										"_priority": 1,
									},
									change2: {
										trigger: {
											player: ["loseBegin"]
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											if (!player.hasCard(card => {
												return player.hasUseTarget(card, true, true);
											}) && trigger.cards[0].name != "sha" && trigger.cards[0].name != "jiu") { player.markAuto("fflilungai_change", 1) }
											else if (player.countCards("h", card => {
												return player.hasUseTarget(card, true, true);
											}) == player.countCards("h")) { player.markAuto("fflilungai_change", 2) }
											else { player.markAuto("fflilungai_change", 0) }
										}
									},
									mark: {
										trigger: {
											player: "phaseUseBegin",
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											player.setMark("fflilungai_change2", 0)
										},
									},
								},
							},
							ffjianjigai: {
								trigger: {
									global: "useCardAfter",
								},
								audio: "clanjianji",
								filter(event, player) {
									if (event.targets.includes(player)) {
										if (event.player == player) {
											return player.countCards("h", card => !get.info("_sxrm_connect").isConnect(card)) > 1
										} else {
											return player.countCards("h", card => !get.info("_sxrm_connect").isConnect(card)) > 0
												&& event.player.countCards("h", card => !get.info("_sxrm_connect").isConnect(card)) > 0
										}
									}
								},
								async content(event, trigger, player) {
									const target = trigger.player
									const connects = [];
									for (const current of [target, player].toUniqued()) {
										const result = await player
											.choosePlayerCard(current, "h", true, target == player ? 2 : 1)
											.set("filterButton", button => {
												return !get.info("_sxrm_connect").isConnect(button.link);
											})
											.forResult();
										if (result?.bool) {
											connects.addArray(result.links);
										}
									}
									if (connects.length) {
										get.info("_sxrm_connect").addConnect(connects);
										var a = player.countMark("fflilungai_change2")
										const fflilungai = player.chooseToUse();
										fflilungai.set("openskilldialog", get.prompt2("fflilungai"));
										fflilungai.set("norestore", true);
										fflilungai.set("_backupevent", "fflilungai");
										fflilungai.set("custom", {
											add: {},
											replace: { window() { } },
										});
										fflilungai.backup("fflilungai");
										await fflilungai.forResult();
										if (a == 0) {
											player.setMark("fflilungai_change2", 0)
										}
									}
								}
							},
							ffjiebinggai: {
								enable: ["chooseToUse"],
								audio: "ext:重塑系列削弱版/audio:2",
								group: "ffjiebinggai_mark",
								popup: false,
								usable: 1,
								filter: function (event, player) {
									if (player.countCards("hes") == 0 || !player.hasUseTarget({ name: 'tiesuo' })) {
										return false
									}
									for (var name of lib.inpile) {
										if (event.filterCard({ name: name, isCard: true }, player, event)) return true;
									}
								},
								onChooseToUse(event) {
									if (!game.online && !event.ffjiebinggai) {
										var list = get.inpileVCardList(info => {
											return ["basic", "trick"].includes(info[0])
										})
										event.set("ffjiebinggai", list);
									}
								},
								chooseButton: {
									dialog: function (event, player) {
										const list = event.ffjiebinggai;
										return ui.create.dialog(`皆兵：需要使用的牌`, [list, "vcard"])
									},
									filter: function (button, player) {
										return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
									},
									backup: function (links, player) {
										return {
											audio: "ffjiebinggai",
											async content(event, trigger, player) {
												var result = await player.chooseCard()
													.set("position", "hes")
													.set("selectCard", 1)
													.set("forced", true)
													.forResult()
												await player.chooseUseTarget(result.cards, { name: "tiesuo" }, true, false)
												var a = player.getStorage("ffjiebinggai_mark")
												for (var i = 0; i < a.length; i++) {
													if (!a[i].isLinked()) {
														a[i].removeSkill("ffjiebinggai_s")
														a[i].addSkill("ffjiebinggai_s")
														a[i].markAuto("ffjiebinggai_s", links[0][2])
													}
												}
												if (_status.currentPhase == player) {
													player.refreshSkill("ffjiebinggai")
												}
											},
										}
									},
								},
								hiddenCard: function (player, name) {
									if (!lib.inpile.includes(name)) return false;
									var type = get.type2(name);
									return ["basic", "trick"].includes(type);
								},
								subSkill: {
									"mark": {
										trigger: {
											player: "useCard"
										},
										forced: true,
										popup: false,
										filter(event, player) {
											return event.card.name == "tiesuo"
										},
										async content(event, trigger, player) {
											player.setStorage("ffjiebinggai_mark", null)
											for (var i = 0; i < trigger.targets.length; i++) {
												player.markAuto("ffjiebinggai_mark", trigger.targets[i])
											}
										}
									},
									"s": {
										trigger: {
											player: "useCard",
										},
										filter(event, player) {
											if (event.cards.length == 0) {
												return false
											}
											return true
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											player.removeSkill("ffjiebinggai_s")
										},
										onremove: true,
										mod: {
											cardname(card, player) {
												return player.getStorage("ffjiebinggai_s")[0];
											},
										},
									},
								},
							},
							ffshuzegai: {
								trigger: {
									player: ["turnOverEnd", "linkAfter", "useCardBegin", "phaseEnd"],
								},
								audio: "ext:重塑系列削弱版/audio:2",
								group: "ffshuzegai_mark",
								filter(event, player) {
									if (event.name == "turnOver") {
										return !player.isTurnedOver() && !player.getStorage("ffshuzegai_mark").includes(1)
									} else if (event.name == "link") {
										return !player.isLinked() && !player.getStorage("ffshuzegai_mark").includes(2)
									} else if (event.name == "useCard") {
										return player.hasSkill("jiu") && event.card.name == 'sha' && !player.getStorage("ffshuzegai_mark").includes(3)
									} else {
										return player.hasSkill("jiu") && !player.getStorage("ffshuzegai_mark").includes(3)
									}
								},
								async content(event, trigger, player) {
									if (trigger.name == "turnOver") {
										player.markAuto("ffshuzegai_mark", 1)
									} else if (trigger.name == "link") {
										player.markAuto("ffshuzegai_mark", 2)
									} else {
										player.markAuto("ffshuzegai_mark", 3)
									}
									const choices = ["【五谷丰登】", "【桃】"];
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.forResult();
									if (result.control == "【五谷丰登】") {
										player.chooseUseTarget({ name: "wugu" }, { isCard: false }, true, false)
									} else if (result.control == "【桃】") {
										player.chooseUseTarget({ name: "tao" }, { isCard: false }, true, false)
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											global: "phaseBegin"
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											player.setStorage("ffshuzegai_mark", null)
										}
									}
								}
							},
							ffhuaixingai: {
								audio: "olzhenlie",
								trigger: {
									player: "useCardToPlayered",
								},
								forced: true,
								group: "ffhuaixingai_mark",
								filter(event, player) {
									return event.targets.length == 1 && !player.getStorage("ffhuaixingai").includes(event.targets[0])
								},
								async content(event, trigger, player) {
									player.markAuto("ffhuaixingai", trigger.targets[0])
									const choices = ["【贞烈】", "【秘计】"];
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.forResult();
									if (result.control == "【贞烈】") {
										trigger.targets[0].useSkill("ffzhenliegai")
									} else if (result.control == "【秘计】") {
										trigger.targets[0].useSkill("ffmijigai")
									}
								},
								subSkill: {
									"mark": {
										trigger: {
											global: "phaseBegin"
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											player.setStorage("ffhuaixingai", null)
										}
									}
								}
							},
							ffzhenliegai: {
								enable: "phaseUse",
								audio: "ext:重塑系列削弱版/audio:2",
								usable: 1,
								async content(event, trigger, player) {
									var a = game.filterPlayer(current => current.isLinked()).length
									if (a != game.filterPlayer(current => current.isAlive()).length) {
										if (!player.isLinked()) {
											player.link(true)
										} else {
											var result = await player.chooseTarget()
												.set("filterTarget", function (card, player, target) {
													return !target.isLinked()
												})
												.set("selectTarget", 1)
												.set("forced", true)
												.set("prompt", "横置一名角色")
												.forResult()
											await result.targets[0].link(true)
										}
									}
									if (a > 1 && game.hasPlayer(current => current.isLinked())) {
										for (const target of game.filterPlayer(current => current.isLinked()).sortBySeat()) {
											if (player.countCards("he") == 0) {
												break;
											}
											if (target == player) {
												continue;
											}
											var result = await player.chooseCard()
												.set("position", "he")
												.set("selectCard", 1)
												.set("forced", true)
												.set("prompt", `交给${target.getName()}一张牌`)
												.forResult()
											await player.give(result.cards, target);
										}
									}
									if (a > 2 && game.hasPlayer(current => current.isLinked())) {
										for (const target of game.filterPlayer(current => current.isLinked()).sortBySeat()) {
											if (target == player || target.countCards("he") == 0) {
												continue;
											}
											player.gainPlayerCard(target, "he")
										}
									}
									if (a > 3) {
										player.damage("fire")
									}
								}
							},
							ffmijigai: {
								enable: "phaseUse",
								audio: "ext:重塑系列削弱版/audio:2",
								usable: 1,
								async content(event, trigger, player) {
									if (player.isTurnedOver() || player.isLinked()) {
										var c = 1
									} else {
										var c = 0
									}
									await player.turnOver(false);
									await player.link(false);
									var a = player.hp
									var b = player.countCards("h")
									if (c == 0) {
										if (a > b) {
											player.drawTo(a)
										} else if (a < b) {
											player.chooseToDiscard(b - a, true)
										}
									} else if (c == 1) {
										if (a > b) {
											player.loseHp(a - b)
										} else if (a < b) {
											player.recover(b - a)
										}
									}
								}
							},
							ffyucigai: {
								trigger: {
									player: "useCardAfter",
								},
								audio: "dczhaowen",
								forced: true,
								locked: true,
								filter(event, player) {
									for (let i = 0; i <= 5; i++) {
										if (player.hasEmptySlot(i) && event.cards.length == 1
											&& (get.type(event.card) == "basic" || get.type(event.card) == "trick")) {
											return true;
										}
									}
									return false;
								},
								async content(event, trigger, player) {
									for (let i = 1; i <= 5; i++) {
										if (player.hasEmptySlot(i)) {
											const card = get.autoViewAs(trigger.cards[0], trigger.cards);
											card.subtypes = [`equip${i}`]
											await player.equip(card);
											break;
										}
									}
									if (player.countCards("e") == get.cardNameLength(trigger.cards[0])) {
										player.draw()
									}
								}
							},
							ffxuanxingai: {
								enable: "phaseUse",
								usable: 1,
								audio: "dcboxuan",
								filter(event, player) {
									return player.countCards("e") > 0
								},
								async content(event, trigger, player) {
									var result = await player.chooseTarget()
										.set("selectTarget", 1)
										.set("forced", true)
										.set("prompt", "令一名角色改为从你的装备区摸牌")
										.forResult()
									await result.targets[0].addSkill("ffxuanxingai_draw")
									result.targets[0].clearMark("ffxuanxingai_draw")
									for (let i = 1; i <= 5; i++) {
										if (!player.getEquips(i)[0]) continue;
										if (!player.hasEmptySlot(i)) {
											result.targets[0].draw(get.cardNameLength(player.getEquips(i)[0]))
											break;
										}
									}
								},
								subSkill: {
									"draw": {
										trigger: {
											player: "drawBegin"
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											const targets = game.players.sortBySeat().slice();
											for (let target of targets) {
												if (target.hasSkill("ffxuanxingai")) {
													trigger.cancel()
													player.addMark("ffxuanxingai_draw", 1)
													if (target.countCards("e") > trigger.num) {
														await player.randomGain(target, "e", trigger.num)
														if (player.countMark("ffxuanxingai_draw") > 2) {
															player.clearMark("ffxuanxingai_draw")
															player.removeSkill("ffxuanxingai_draw")
														}
													} else if (target.countCards("e") == trigger.num) {
														await player.gain(target.getCards("e"))
														player.clearMark("ffxuanxingai_draw")
														player.removeSkill("ffxuanxingai_draw")
													} else {
														var a = target.countCards("e")
														await player.gain(target.getCards("e"))
														player.clearMark("ffxuanxingai_draw")
														player.removeSkill("ffxuanxingai_draw")
														await player.draw(trigger.num - a)
													}
												}
											}
										},
									},
								},
							},
							ffzuixiaogai: {
								trigger: {
									player: "useCard",
								},
								forced: true,
								locked: true,
								audio: "dcjiudun",
								filter(event, player) {
									return get.name(event.card) == "sha" && event.cards.length == 1 && get.type(event.cards[0]) == "equip"
								},
								async content(event, trigger, player) {
									const choices = ["废除", "恢复"];
									if (!player.hasEnabledSlot()) {
										choices.remove("废除")
									}
									if (!player.hasDisabledSlot()) {
										choices.remove("恢复")
									}
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.forResult();
									if (result.control == "废除") {
										player.chooseToDisable(true)
									} else if (result.control == "恢复") {
										player.chooseToEnable(true)
									}
								},
								mod: {
									cardname(card) {
										if (get.type(card, null, false) == "equip") {
											return "sha";
										}
									},
									cardUsable(card, player) {
										if (!card.cards || card.cards.length != 1) {
											return;
										}
										if (get.name(card) === "sha" && lib.card[card.cards[0].name]?.type == "equip") {
											return Infinity;
										}
									},
								},
							},
							ffjingcegai: {
								trigger: {
									global: "phaseEnd",
								},
								audio: "jingce",
								filter(event, player) {
									return player.hasHistory("useCard")
								},
								async content(event, trigger, player) {
									var a = 0
									while (true) {
										a++
										const choices = ["摸牌", "使用"];
										if (!player.hasCard(card => { return player.hasUseTarget(card, true, true) })) {
											choices.remove("使用")
										}
										var result = await player
											.chooseControl()
											.set("controls", choices)
											.forResult();
										if (result.control == "摸牌") {
											await player.draw(a)
										} else if (result.control == "使用") {
											for (let i = 0; i < a; i++) {
												if (player.hasCard(card => { return player.hasUseTarget(card, true, true) })) {
													await player.chooseToUse({
														selectCard: 1,
														prompt: "使用一张手牌",
														forced: true
													});
												}
											}
										}
										var suits = [];
										var use = player.getHistory("useCard").length
										player.getCards("h", card => suits.add(get.suit(card)));
										if (suits.length == player.countCards("h") && !player.getStorage("ffjingcegai").includes(1)) {
											player.markAuto("ffjingcegai", 1)
											continue;
										}
										if (player.hp == player.countCards("h") && !player.getStorage("ffjingcegai").includes(2)) {
											player.markAuto("ffjingcegai", 2)
											continue;
										}
										if (use == player.countCards("h") && !player.getStorage("ffjingcegai").includes(3)) {
											player.markAuto("ffjingcegai", 3)
											continue;
										}
										break;
									}
									player.setStorage("ffjingcegai", null)
								}
							},
							ffyingzhangai: {
								trigger: {
									global: "useCardAfter",
								},
								audio: "ext:重塑系列削弱版/audio:2",
								usable: 1,
								filter(event, player) {
									return event.targets.includes(player)
								},
								async content(event, trigger, player) {
									var result = await player
										.chooseButton(
											[
												"应战：请选择至多两项：",//输出的提示性语句
												[
													[
														[0, "视为使用一张【决斗】"],
														[1, "令当前手牌视为雷【杀】"],
														[2, "摸一张牌"],
													],
													"textbutton",]
											]).set("forced", true)
										.set("selectButton", [1, Infinity])
										.forResult();
									const choices = result.links
									for (const num of choices) {
										switch (num) {
											case 0:
												await player.chooseUseTarget({ name: "juedou" }, true)
												break;
											case 1:
												await player.addGaintag(player.getCards("h"), "应战")
												break;
											case 2:
												await player.draw()
												break;
										}
									}
									if (choices.length == 3) {
										await player.draw(2)
									}
								},
								mod: {
									cardname(card) {
										if (card.hasGaintag("应战")) {
											return "sha";
										}
									},
									cardnature(card, player) {
										if (card.hasGaintag("应战")) {
											return "thunder";
										}
									},
								},
							},
							ffqingjuegai: {
								trigger: {
									player: ["changeHp", "loseAfter"],
									global: ["loseAsyncAfter", "equipAfter", "addToExpansionAfter", "gainAfter", "addJudgeAfter"],
								},
								audio: "ext:重塑系列削弱版/audio:2",
								filter(event, player) {
									const bool1 = event.getg && event.getg(player)?.length
									const bool2 = event.getl && event.getl(player)?.hs?.length;
									if (event.name != "changeHp" && !bool1 && !bool2) {
										return false
									}
									return player.countCards("h") == player.hp
								},
								async content(event, trigger, player) {
									var result = await player.chooseTarget()
										.set("filterTarget", function (card, player, target) {
											return target.countCards("he") > 0
										})
										.set("selectTarget", 1)
										.set("prompt", "弃置一名角色一张牌")
										.forResult()
									await player.discardPlayerCard(result.targets[0], true)
									result.targets[0].refreshSkill()
								}
							},
							ffxuangugai: {
								trigger: {
									global: "useCardAfter",
								},
								audio: "tianren",
								group: ["ffxuangugai_mark"],
								forced: true,
								locked: true,
								filter(event, player) {
									if (player.countCards("h") == 1 && player.countCards("e") == 1 && player.countCards("j") == 1) {
										return false;
									}
									return event.targets.includes(player) && event.targets.length == 1 && player.countMark("ffxuangugai") == 0
								},
								async content(event, trigger, player) {
									player.setMark("ffxuangugai", 1)
									const choices = ["使用"];
									if (player.countCards("h") == 0) {
										choices.push("手牌区")
									}
									if (player.countCards("e") > 1) {
										choices.push("装备区")
									}
									if (player.countCards("j") > 1) {
										choices.push("判定区")
									}
									if (player.countCards("h") < 2) {
										choices.remove("使用")
									}
									if (!player.hasCard(card => {
										return ((get.type(card) === 'equip' && player.countCards("e") == 0)
											|| (get.name(card) === 'shandian') && player.countCards("j") == 0) && player.hasUseTarget(card, true, true)
									})) {
										if (choices.length == 0) {
											player.setMark("ffxuangugai", 0)
											return
										}
									} else {
										if (choices.length == 0) {
											choices.push("使用")
										}
									}
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.set("prompt", "选择调整的区域或方式")
										.forResult();
									if (result.control == "手牌区") {
										await player.drawTo(1)
										if (!player.getStorage("ffjinzhigai").includes(get.number(player.getCards("h")[0]))
											&& player.hasUseTarget("juedou", true, true)) {
											await player.chooseUseTarget(player.getCards("h"), { name: "juedou" }, true)
										}
										player.setMark("ffxuangugai", 0)
										return
									} else if (result.control == "装备区") {
										await player.chooseToDiscard("e", player.countCards("e") - 1, true)
										if (!player.getStorage("ffjinzhigai").includes(get.number(player.getCards("e")[0]))
											&& player.hasUseTarget("juedou", true, true)) {
											await player.chooseUseTarget(player.getCards("e"), { name: "juedou" }, true)
										}
										player.setMark("ffxuangugai", 0)
										return
									} else if (result.control == "判定区") {
										await player.discardPlayerCard(player, player.countCards("j") - 1, "j", true);
										if (!player.getStorage("ffjinzhigai").includes(get.number(player.getCards("j")[0]))
											&& player.hasUseTarget("juedou", true, true)) {
											await player.chooseUseTarget(player.getCards("j"), { name: "juedou" }, true)
										}
										player.setMark("ffxuangugai", 0)
										return
									}
									if (player.countCards("h") == 1) {
										player.markAuto("ffxuangugai_mark", "h")
									}
									if (player.countCards("e") == 1) {
										player.markAuto("ffxuangugai_mark", "e")
									}
									if (player.countCards("j") == 1) {
										player.markAuto("ffxuangugai_mark", "j")
									}
									while (true) {
										if (!player.hasCard(card => { return player.hasUseTarget(card, true, true) })) {
											break;
										}
										var result = await player.chooseToUse({
											selectCard: 1,
											prompt: "使用一张手牌",
										}).forResult();
										if (result.bool) {
											const choices = [];
											if (player.countCards("h") == 1 && !player.getStorage("ffxuangugai_mark").includes("h")) {
												choices.push("手牌区")
											}
											if (player.countCards("e") == 1 && !player.getStorage("ffxuangugai_mark").includes("e")) {
												choices.push("装备区")
											}
											if (player.countCards("j") == 1 && !player.getStorage("ffxuangugai_mark").includes("j")) {
												choices.push("判定区")
											}
											if (choices.length == 0) {
												continue;
											}
											var result = await player
												.chooseControl()
												.set("controls", choices)
												.forResult();
											if (result.control == "手牌区") {
												if (!player.getStorage("ffjinzhigai").includes(get.number(player.getCards("h")[0]))
													&& player.hasUseTarget("juedou", true, true)) {
													await player.chooseUseTarget(player.getCards("h"), { name: "juedou" }, true)
												}
											} else if (result.control == "装备区") {
												if (!player.getStorage("ffjinzhigai").includes(get.number(player.getCards("e")[0]))
													&& player.hasUseTarget("juedou", true, true)) {
													await player.chooseUseTarget(player.getCards("e"), { name: "juedou" }, true)
												}
											} else if (result.control == "判定区") {
												if (!player.getStorage("ffjinzhigai").includes(get.number(player.getCards("j")[0]))
													&& player.hasUseTarget("juedou", true, true)) {
													await player.chooseUseTarget(player.getCards("j"), { name: "juedou" }, true)
												}
											}
											player.setMark("ffxuangugai", 0)
											player.setStorage("ffxuangugai_mark", null)
											return
										} else {
											break;
										}
									}
									await player.chooseToDiscard("h", player.countCards("h") - 1, true)
									if (!player.getStorage("ffjinzhigai").includes(get.number(player.getCards("h")[0]))
										&& player.hasUseTarget("juedou", true, true)) {
										await player.chooseUseTarget(player.getCards("h"), { name: "juedou" }, true)
									}
									player.setMark("ffxuangugai", 0)
									player.setStorage("ffxuangugai_mark", null)
								}
							},
							ffjinzhigai: {
								trigger: {
									player: "damageBegin",
								},
								forced: true,
								audio: "pingxiang",
								group: ["ffjinzhigai_start"],
								mark: true,
								intro: {
									name: "悬孤不可转化点数",
									content: function (storage, player) {
										return `悬孤不可转化点数：${(storage.sort((a, b) => a - b).join("、"))}`;
									},
								},
								marktext: "烬",
								locked: true,
								filter(event, player) {
									const useEvent = event.getParent('useCard');
									if (!useEvent || !useEvent.cards || useEvent.cards.length != 1) {
										return false
									}
									return !player.getStorage("ffjinzhigai").includes(get.number(useEvent.cards[0]))
								},
								async content(event, trigger, player) {
									const useEvent = event.getParent('useCard');
									player.markAuto("ffjinzhigai", get.number(useEvent.cards[0]))
									const choiceList = ["防止此伤害", "获得中央区中不因使用进入弃牌堆的牌"];
									const choices = ["选项一", "选项二"];
									let cards = game
										.getGlobalHistory("cardMove", evt => {
											if (evt.name.indexOf("lose") == 0) {
												if (evt.position !== ui.discardPile) {
													return false;
												}
												return true;
											} else if (evt.name == "cardsDiscard") {
												const evtx = evt.getParent();
												const evt2 = evtx.relatedEvent || evtx.getParent();
												return evt2 && evt2.name != "useCard";
											}
										})
										.map(evt => {
											return evt.cards.filterInD("d");
										})
										.flat()
										.unique();
									if (cards.length == 0) {
										choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
										choices.remove("选项二");
									};
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.set("choiceList", choiceList)
										.forResult();
									if (result.control == "选项一") {
										trigger.cancel();
									} else if (result.control == "选项二") {
										await player.gain(cards);
									}
								},
								subSkill: {
									"start": {
										trigger: {
											global: "gameStart",
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											player.markAuto("ffjinzhigai", 1)
											player.markAuto("ffjinzhigai", 11)
											player.markAuto("ffjinzhigai", 12)
											player.markAuto("ffjinzhigai", 13)
										}
									}
								}
							},
							ffshizhenggai: {
								group: ["ffshizhenggai_spade", "ffshizhenggai_club", "ffshizhenggai_heart", "ffshizhenggai_diamond"],
								subSkill: {
									"spade": {
										enable: "chooseToUse",
										audio: "oltianhou",
										hiddenCard(player, name) {
											const cur = _status.discarded
											if (!player.hasCard(card => { return get.suit(card) === 'spade' }) || cur.map(card => get.suit(card)).unique().includes("spade")) {
												return false
											}
											const evt = lib.skill.dcjianying.getLastUsed(player);
											if (evt && evt.card && get.type(evt.card) != "equip" && get.type(evt.card) != "delay") {
												return name === get.name(evt.card)
											}
										},
										filter(event, player) {
											const cur = _status.discarded
											if (!player.hasCard(card => { return get.suit(card) === 'spade' }) || cur.map(card => get.suit(card)).unique().includes("spade")) {
												return false
											}
											const evt = lib.skill.dcjianying.getLastUsed(player);
											if (!evt || !evt.card || get.type(evt.card) == "equip" || get.type(evt.card) == "delay") {
												return false
											}
											return event.filterCard({ name: get.name(evt.card), isCard: true }, player, event)
										},
										viewAs(cards, player) {
											const evt = lib.skill.dcjianying.getLastUsed(player);
											return { name: get.name(evt.card) };
										},
										filterCard(card, player) {
											return get.suit(card) == "spade"
										},
										selectCard: -1,
										prompt() {
											return "将所有黑桃牌当【随机应变】使用";
										},
									},
									"club": {
										enable: "chooseToUse",
										audio: "oltianhou",
										hiddenCard(player, name) {
											const cur = _status.discarded
											if (!player.hasCard(card => { return get.suit(card) === 'club' }) || cur.map(card => get.suit(card)).unique().includes("club")) {
												return false
											}
											const evt = lib.skill.dcjianying.getLastUsed(player);
											if (evt && evt.card && get.type(evt.card) != "equip" && get.type(evt.card) != "delay") {
												return name === get.name(evt.card)
											}
										},
										filter(event, player) {
											const cur = _status.discarded
											if (!player.hasCard(card => { return get.suit(card) === 'club' }) || cur.map(card => get.suit(card)).unique().includes("club")) {
												return false
											}
											const evt = lib.skill.dcjianying.getLastUsed(player);
											if (!evt || !evt.card || get.type(evt.card) == "equip" || get.type(evt.card) == "delay") {
												return false
											}
											return event.filterCard({ name: get.name(evt.card), isCard: true }, player, event)
										},
										viewAs(cards, player) {
											const evt = lib.skill.dcjianying.getLastUsed(player);
											return { name: get.name(evt.card) };
										},
										filterCard(card, player) {
											return get.suit(card) == "club"
										},
										selectCard: -1,
										prompt() {
											return "将所有梅花牌当【随机应变】使用";
										},
									},
									"heart": {
										enable: "chooseToUse",
										audio: "oltianhou",
										hiddenCard(player, name) {
											const cur = _status.discarded
											if (!player.hasCard(card => { return get.suit(card) === 'heart' }) || cur.map(card => get.suit(card)).unique().includes("heart")) {
												return false
											}
											const evt = lib.skill.dcjianying.getLastUsed(player);
											if (evt && evt.card && get.type(evt.card) != "equip" && get.type(evt.card) != "delay") {
												return name === get.name(evt.card)
											}
										},
										filter(event, player) {
											const cur = _status.discarded
											if (!player.hasCard(card => { return get.suit(card) === 'heart' }) || cur.map(card => get.suit(card)).unique().includes("heart")) {
												return false
											}
											const evt = lib.skill.dcjianying.getLastUsed(player);
											if (!evt || !evt.card || get.type(evt.card) == "equip" || get.type(evt.card) == "delay") {
												return false
											}
											return event.filterCard({ name: get.name(evt.card), isCard: true }, player, event)
										},
										viewAs(cards, player) {
											const evt = lib.skill.dcjianying.getLastUsed(player);
											return { name: get.name(evt.card) };
										},
										filterCard(card, player) {
											return get.suit(card) == "heart"
										},
										selectCard: -1,
										prompt() {
											return "将所有红桃牌当【随机应变】使用";
										},
									},
									"diamond": {
										enable: "chooseToUse",
										audio: "oltianhou",
										hiddenCard(player, name) {
											const cur = _status.discarded
											if (!player.hasCard(card => { return get.suit(card) === 'diamond' }) || cur.map(card => get.suit(card)).unique().includes("diamond")) {
												return false
											}
											const evt = lib.skill.dcjianying.getLastUsed(player);
											if (evt && evt.card && get.type(evt.card) != "equip" && get.type(evt.card) != "delay") {
												return name === get.name(evt.card)
											}
										},
										filter(event, player) {
											const cur = _status.discarded
											if (!player.hasCard(card => { return get.suit(card) === 'diamond' }) || cur.map(card => get.suit(card)).unique().includes("diamond")) {
												return false
											}
											const evt = lib.skill.dcjianying.getLastUsed(player);
											if (!evt || !evt.card || get.type(evt.card) == "equip" || get.type(evt.card) == "delay") {
												return false
											}
											return event.filterCard({ name: get.name(evt.card), isCard: true }, player, event)
										},
										viewAs(cards, player) {
											const evt = lib.skill.dcjianying.getLastUsed(player);
											return { name: get.name(evt.card) };
										},
										filterCard(card, player) {
											return get.suit(card) == "diamond"
										},
										selectCard: -1,
										prompt() {
											return "将所有方片牌当【随机应变】使用";
										},
									},
								},
							},
							ffxuanfeigai: {
								trigger: {
									player: "useCard"
								},
								audio: "olchenshuo",
								forced: true,
								locked: true,
								async content(event, trigger, player) {
									var suit = get.suit(trigger.card)
									var num = player.getHistory("useCard").reduce((list, evt) => list.add(get.type2(evt.card)), []).length
									var a = 0
									if (num > 0) {
										var cards = player.getCards("h", card => get.suit(card) == suit)
										if (cards.length > 0) {
											a++
										}
										await player.addToExpansion(player, "give", cards)
									}
									if (num > 1) {
										var cards = _status.discarded.filter(card => get.suit(card) == suit);
										if (cards.length > 0) {
											a++
										}
										player.gain(cards)
										await player.addToExpansion(player, "give", cards)
									}
									if (num > 2) {
										const targets = game.players.sortBySeat().slice();
										for (let target of targets) {
											if (target == player) {
												continue;
											}
											var cards = target.getCards("he", card => get.suit(card) == suit)
											if (cards.length > 0) {
												a++
											}
											player.gain(cards)
											await player.addToExpansion(player, "give", cards)
										}
									}
									if (a == 0) {
										var a = player.getCards("x")
										await player.gain(a)
										await player.addGaintag(a, "玄非")
										while (player.getCards("h", card => card.hasGaintag("玄非")).length > 0) {
											let result = await player.chooseCardTarget({
												position: "h",
												filterCard(card, player) {
													return card.hasGaintag("玄非")
												},
												selectCard: [1, Infinity],
												filterTarget(card, player, target) {
													return player != target
												},
												selectTarget: 1,
												prompt: "玄非：分配这些牌"
											}).forResult()
											if (!result || !result.bool || !result.cards || !result.targets.length) {
												player.removeGaintag("玄非", player.getCards("h"))
												break;
											}
											await player.give(result.cards, result.targets[0]);
										}
									}
								}
							},
							fflifeigai: {
								mod: {
									cardSavable(card, player) {
										if (player.countCards("ej") > 0) {
											return false
										}
									},
									cardEnabled(card, player) {
										if (player.countCards("ej") > 0 && card.cards && card.cards.length > 0 && get.name(card) == get.name(card.cards[0])) {
											return false
										}
									},
								},
							},
							ffguisuigai: {
								audio: "starzhiji",
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，你可以将任意一张牌当任意一张延时锦囊牌对自己使用，然后你视为使用一张";
										if (storage) {
											return str + "基本牌";
										} else {
											return str + "锦囊牌";
										}
									},
								},
								enable: ["chooseToUse"],
								filter: function (event, player) {
									if (player.countCards("he") == 0) {
										return false
									}
									if (event.filterCard({ name: "shandian", isCard: true }, player, event)) return true;
									if (event.filterCard({ name: "lebu", isCard: true }, player, event)) return true;
									if (event.filterCard({ name: "bingliang", isCard: true }, player, event)) return true;
								},
								onChooseToUse(event) {
									if (!game.online && !event.ffguisuigai) {
										var list = get.inpileVCardList(info => {
											return ["delay"].includes(info[0])
										})
										event.set("ffguisuigai", list);
									}
								},
								chooseButton: {
									dialog: function (event, player) {
										const list = event.ffguisuigai;
										if (player.hasJudge('lebu')) {
											list.remove(list[1])
										}
										if (player.hasJudge('bingliang')) {
											list.remove(list[0])
										}
										return ui.create.dialog(`奇策`, [list, "vcard"])
									},
									filter: function (button, player) {
										return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
									},
									backup: function (links, player) {
										return {
											audio: "ffguisuigai",
											async precontent(event, trigger, player) {
												player.addTempSkill("ffguisuigai_effect")
											},
											position: "he",
											filterCard: () => true,
											selectCard: 1,
											filterTarget(card, player, target) {
												return target == player
											},
											popname: true,
											viewAs: { name: links[0][2], nature: links[0][3], isCard: true, },
										}
									},
								},
								hiddenCard: function (player, name) {
									if (!lib.inpile.includes(name)) return false;
									var type = get.type2(name);
									return ["delay"].includes(type);
								},
								subSkill: {
									"effect": {
										trigger: {
											player: "useCardAfter",
										},
										forced: true,
										popup: false,
										filter(event, player) {
											return event.skill == "ffguisuigai_backup"
										},
										async content(event, trigger, player) {
											player.changeZhuanhuanji("ffguisuigai")
											if (player.storage.ffguisuigai) {
												var list = get.inpileVCardList(info => {
													return ["basic"].includes(info[0])
												});
												const result = await player.chooseButton([`视为使用一张基本牌`, [list, "vcard"]]).forResult();
												if (result.bool) {
													await player.chooseUseTarget(result.links[0][2], true, false);
												}
											} else {
												var list = get.inpileVCardList(info => {
													return ["trick"].includes(info[0])
												});
												const result = await player.chooseButton([`视为使用一张锦囊牌`, [list, "vcard"]]).forResult();
												if (result.bool) {
													await player.chooseUseTarget(result.links[0][2], true, false);
												}
											}
										}
									}
								}
							},
							ffzeqigai: {
								trigger: {
									player: ["loseAfter"],
									global: ["loseAsyncAfter", "equipAfter", "addJudgeAfter", "gainAfter", "addToExpansionAfter"],
								},
								audio: "staranji",
								forced: true,
								locked: true,
								filter(event, player) {
									return event.getl(player)?.hs?.length && !player.countCards("h");
								},
								async content(event, trigger, player) {
									var skills = game.filterSkills(
										player.getStockSkills(true, true).filter(skill => {
											const info = get.info(skill);
											return !info.persevereSkill || !info.charlotte;
										}),
										player
									);
									var num = Math.min(player.countCards("ej"), skills.length);
									if (num == 0) { num = 1 }
									skills = skills.slice(0, num);
									player.disableSkill("ffzeqigai", skills);
									player.addTempSkill("ffzeqigai_restore");
									const choiceList = ["将你场上的所有牌交给一名其他角色", "弃置任意角色的共计X张牌"];
									const choices = ["选项一", "选项二"];
									if (player.countCards("ej") == 0) {
										choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
										choices.remove("选项一");
									};
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.set("choiceList", choiceList)
										.forResult();
									if (result.control == "选项一") {
										var result = await player.chooseTarget()
											.set("filterTarget", function (card, player, target) {
												return player != target
											})
											.set("selectTarget", 1)
											.set("forced", true)
											.set("prompt", "将你场上的所有牌交给其")
											.forResult()
										await result.targets[0].gain(player.getCards("ej"), true)
									} else if (result.control == "选项二") {
										for (let i = 0; i < num; i++) {
											var result = await player.chooseTarget()
												.set("filterTarget", function (card, player, target) {
													return target.countCards("hej") > 0
												})
												.set("selectTarget", 1)
												.set("prompt", "弃置一名角色一张牌")
												.forResult()
											await player.discardPlayerCard(result.targets[0], 1, "hej", true)
											if (!result.bool) {
												break;
											}
										}
									}
									player.draw(num)
								},
								subSkill: {
									restore: {
										charlotte: true,
										forced: true,
										popup: false,
										onremove(player) {
											player.enableSkill("ffzeqigai");
										},
										"skill_id": "ffzeqigai_restore",
										sub: true,
										sourceSkill: "ffzeqigai",
										"_priority": 0,
									},
								},
							},
							ffdingmougai: {
								enable: "chooseToUse",
								audio: "olsbwujing",
								group: ["ffdingmougai_mark", "ffdingmougai_dongzhu", "ffdingmougai_choose"],
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，你可以将手牌数调整至";
										if (storage) {
											return str + "你的体力值以视为使用";
										} else {
											return str + "你已损失体力值以视为使用";
										}
									},
								},
								hiddenCard(player, name) {
									if (player.countMark("ffdingmougai_mark") == 0) {
										return name === "dongzhuxianji"
									} else if (player.countMark("ffdingmougai_mark") == 1) {
										return name === "huogong"
									} else if (player.countMark("ffdingmougai_mark") == 2) {
										return name === "wuxie"
									}
								},
								filter(event, player) {
									if (!player.storage.ffdingmougai && (player.countCards("h") == player.hp ||
										(player.countMark("ffdingmougai_mark") == 2 && player.countCards("h") <= player.hp))) {
										return false
									}
									if (player.storage.ffdingmougai && (player.countCards("h") == player.maxHp - player.hp ||
										(player.countMark("ffdingmougai_mark") == 2 && player.countCards("h") <= player.maxHp - player.hp))) {
										return false
									}
									if (player.countMark("ffdingmougai_mark") == 0) {
										return event.filterCard({ name: "dongzhuxianji", isCard: true }, player, event)
									} else if (player.countMark("ffdingmougai_mark") == 1) {
										return event.filterCard({ name: "huogong", isCard: true }, player, event)
									} else if (player.countMark("ffdingmougai_mark") == 2) {
										return event.filterCard({ name: "wuxie", isCard: true }, player, event)
									}
								},
								async precontent(event, trigger, player) {
									player.logSkill("ffdingmougai");
									if (player.countMark("ffdingmougai_mark") == 1) {
										player.addSkill("ffdingmougai_huogong")
									}
									player.changeZhuanhuanji("ffdingmougai");
									player.addMark("ffdingmougai_mark", 1)
									if (player.countMark("ffdingmougai_mark") == 3) {
										player.setMark("ffdingmougai_mark", 0)
									}
									if (player.storage.ffdingmougai) {
										if (player.countCards("h") > player.hp) {
											const num = player.countCards("h") - player.hp
											var result = await player.chooseCard()
												.set("position", "h")
												.set("selectCard", num)
												.set("forced", true)
												.set("prompt", `弃置${num}张牌`)
												.forResult();
											await player.addGaintag(result.cards, "eternal_ffdingmougai")
											await player.discard(result.cards)
										} else {
											await player.drawTo(player.hp)
										}
									} else {
										if (player.countCards("h") > player.maxHp - player.hp) {
											const num = player.countCards("h") - (player.maxHp - player.hp)
											var result = await player.chooseCard()
												.set("position", "h")
												.set("selectCard", num)
												.set("forced", true)
												.set("prompt", `弃置${num}张牌`)
												.forResult();
											await player.addGaintag(result.cards, "eternal_ffdingmougai")
											await player.discard(result.cards)
										} else {
											await player.drawTo(player.maxHp - player.hp)
										}
									}
								},
								viewAs(cards, player) {
									if (player.countMark("ffdingmougai_mark") == 0) {
										return { name: "dongzhuxianji" }
									} else if (player.countMark("ffdingmougai_mark") == 1) {
										return { name: "huogong" }
									} else if (player.countMark("ffdingmougai_mark") == 2) {
										return { name: "wuxie" }
									}
								},
								filterCard(card, player) {
									if (player.countMark("ffdingmougai_mark") == 2) {
										return card.hasGaintag("eternal_ffdingmougai")
									} else {
										return false
									}
								},
								selectCard: -1,
								log: false,
								subSkill: {
									"dongzhu": {
										trigger: {
											player: "dongzhuxianjiBegin",
										},
										forced: true,
										locked: false,
										popup: false,
										filter(event, player) {
											return event.skill == "ffdingmougai"
										},
										content() {
											trigger.setContent(lib.skill.ffdingmougai_dongzhu.dongzhuxianjiContent);
										},
										async dongzhuxianjiContent(event, trigger, player) {
											const target = event.target;
											const cards = Array.from(ui.discardPile.childNodes).slice(0);
											const cards2 = Array.from(ui.discardPile.childNodes).slice(0);
											for (const card of cards2) {
												if (!card.hasGaintag("eternal_ffdingmougai")) {
													cards.remove(card)
												}
											}
											if (cards.length > 0) {
												player.removeGaintag("eternal_ffdingmougai", cards)
												const cards1 = [];
												const cards2 = [];
												var result = await player.chooseToMove()
													.set("list", [["卜算牌", cards], ["牌堆顶", cards1], ["牌堆底", cards2]])
													.set("prompt", "将这些牌以任意顺序置于牌堆")
													.set("forced", true)
													.set('filterOk', function (moved) {
														return moved[0].length == 0;
													})
													.forResult();
												var top = result.moved[1]
												if (top.length) {
													for (let i = 0; i < top.length; i++) {
														const card = top[i];
														card.fix();
														ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
													}
												}
												var bottom = result.moved[2]
												if (bottom.length) {
													for (let i = 0; i < bottom.length; i++) {
														const card = bottom[i];
														card.fix();
														ui.cardPile.appendChild(card);
													}
												}
											}
											await target.draw(2);
											game.addVideo("cardDialog", null, event.videoId);
											game.broadcast("closeDialog", event.videoId);
										},
									},
									"huogong": {
										enable: "chooseToDiscard",
										filter(event, player) {
											return event.getParent().name == "huogong";
										},
										async precontent(event, trigger, player) {
											const cards = Array.from(ui.discardPile.childNodes).slice(0);
											const cards2 = Array.from(ui.discardPile.childNodes).slice(0);
											for (const card of cards2) {
												if (!card.hasGaintag("eternal_ffdingmougai")) {
													cards.remove(card)
												}
											}
											const evt = event.getParent();
											const result = await player
												.chooseButton([`鼎谋：请选择一张牌作为此次“火攻”需要弃置的牌`, cards])
												.set("filterButton", button => {
													return get.event().links.includes(button.link);
												})
												.set(
													"links",
													cards.filter(card => evt.filterCard(card, player))
												)
												.set("ai", button => Math.random())
												.forResult();
											if (result?.links?.length) {
												const cards = result.links;
												event.result.bool = result.bool;
												event.result.cards = cards;
												player
													.when("discardBegin")
													.filter(evtx => evtx.getParent() == evt)
													.step(async (event, trigger, player) => {
														player.$throw(cards, 1000);
														game.log(player, "弃置了", "弃牌堆", "的", cards);
														trigger.setContent("cardsDiscard");
													});
											} else {
												evt.goto(0);
											}
										}
									},
									"mark": {
										trigger: {
											player: "useCardAfter"
										},
										filter(event, player) {
											return get.name(event.card) == "huogong" || get.name(event.card) == "wuxie"
										},
										mark: true,
										marktext: "鼎",
										intro: {
											content: function (storage, player) {
												if (player.countMark("ffdingmougai_mark") == 0) {
													return "【洞烛先机】"
												} else if (player.countMark("ffdingmougai_mark") == 1) {
													return "【火攻】"
												} else {
													return "【无懈可击】"
												}
											},
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											const cards = Array.from(ui.discardPile.childNodes).slice(0);
											const cards2 = Array.from(ui.discardPile.childNodes).slice(0);
											for (const card of cards2) {
												if (!card.hasGaintag("eternal_ffdingmougai")) {
													cards.remove(card)
												}
											}
											player.removeGaintag("eternal_ffdingmougai", cards)
											player.removeSkill("ffdingmougai_huogong")
										}
									},
									"choose": {
										trigger: {
											global: "phaseBefore",
											player: "enterGame",
										},
										audio: "olsbzhijue",
										forced: true,
										filter(event, player) {
											return event.name != "phase" || game.phaseNumber == 0;
										},
										async content(event, trigger, player) {
											const choices = ["阳", "阴"];
											var result = await player
												.chooseControl()
												.set("prompt", "请选择转换技状态")
												.set("controls", choices)
												.forResult();
											if (result.control == "阴") {
												player.changeZhuanhuanji("ffdingmougai")
											}
											const choices2 = ["天", "地", "人"];
											var result = await player
												.chooseControl()
												.set("prompt", "请选择转换技状态")
												.set("controls", choices2)
												.forResult();
											if (result.control == "地") {
												player.setMark("ffdingmougai_mark", 1)
											} else if (result.control == "人") {
												player.setMark("ffdingmougai_mark", 2)
											}
										},
										sub: true,
									}
								},
							},
							ffliaoyuangai: {
								enable: "phaseUse",
								audio: "olsbzhitian",
								async content(event, trigger, player) {
									var result = await player.chooseTarget()
										.set("selectTarget", 1)
										.set("forced", true)
										.set("prompt", "分配1点火焰伤害")
										.forResult()
									result.targets[0].damage(1, "fire")
									var result = await player.chooseTarget()
										.set("selectTarget", 1)
										.set("forced", true)
										.set("prompt", "分配1点火焰伤害")
										.forResult()
									result.targets[0].damage(1, "fire")
									player.die();
								}
							},
							fffuzhi: {
								enable: ["chooseToUse"],
								group: "fffuzhi_skip",
								audio: "xinrenjie",
								filter: function (event, player) {
									if (!player.getCards("h", card => get.tag(card, "damage")).length > 0) {
										return false
									}
									for (var name of lib.inpile) {
										if (event.filterCard({ name: name, isCard: true }, player, event)) return true;
									}
								},
								onChooseToUse(event) {
									if (!game.online && !event.fffuzhi) {
										var list = get.inpileVCardList(info => {
											return ["basic"].includes(info[0])
										})
										event.set("fffuzhi", list);
									}
								},
								chooseButton: {
									dialog: function (event, player) {
										const list = event.fffuzhi;
										return ui.create.dialog(`伏跖`, [list, "vcard"])
									},
									filter: function (button, player) {
										return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
									},
									backup: function (links, player) {
										return {
											audio: "fffuzhi",
											async precontent(event, trigger, player) {
												if (player.getCards("h", card => !card.hasGaintag("eternal_伏跖")).length != 0 && !player.getStorage("ffjinghuan").includes(1)) {
													await player.showCards(player.getCards("h"))
													await player.addGaintag(player.getCards("h"), "eternal_伏跖");
												} else if (player.getStorage("fffuzhi_skip").length == 0 && !player.getStorage("ffjinghuan").includes(2)) {
													if (player != _status.currentPhase) {
														player.markAuto("fffuzhi_skip", "phaseBegin")
														player.markAuto("fffuzhi_skip", "phaseJudge")
													} else {
														var a = 0
														for (const phase of lib.phaseName) {
															if (a == 1 || a == 2) {
																player.markAuto("fffuzhi_skip", phase)
																a++
															}
															const evt = event.getParent(phase);
															if (evt?.name === phase) { a++ }
														}
													}
												} else if (player.countCards("h") != player.maxHp && !player.getStorage("ffjinghuan").includes(3)) {
													if (player.countCards("h") > player.maxHp) {
														await player.chooseToDiscard(player.countCards("h") - player.maxHp, true)
													} else if (player.countCards("h") < player.maxHp) {
														await player.drawTo(player.maxHp)
													}
												} else if (!player.getStorage("ffjinghuan").includes(4)) {
													/*	let cards = game
														.getGlobalHistory("cardMove", evt => {
															if (evt.name.indexOf("lose") == 0) {
																if (evt.position !== ui.discardPile){
																	return false;
															}
															return true;
															}else if (evt.name == "cardsDiscard") {
																return true;
															}
														})
														.map(evt => {
															return evt.cards.filterInD("d");
														})
														.flat()
														.unique();
													*/
													const cards = Array.from(ui.discardPile.childNodes).slice(0);
													const cards2 = Array.from(ui.discardPile.childNodes).slice(0);
													for (const card of cards2) {
														if (!player.hasUseTarget(card, true, false) || !card.hasGaintag("eternal_伏跖")) {
															cards.remove(card)
														}
													}
													if (cards.length > 0) {
														/*	var result = await player.chooseButton(["伏跖：使用一张牌", cards], true).set("ai", function (button) {
																return get.value(button.link, _status.event.player);
															}).forResult()
														*/
														for (let i = 0; i < cards.length; i++) {
															await player.gain(cards[i])
															player.removeGaintag("eternal_伏跖", cards[i]);
															await player.chooseUseTarget(cards[i], true, false)
														}
													}
												}
											},
											filterCard(card) {
												return get.tag(card, "damage")
											},
											position: "h",
											selectCard: 1,
											popname: true,
											viewAs: { name: links[0][2], nature: links[0][3], isCard: true, },
										}
									},
								},
								hiddenCard: function (player, name) {
									if (!lib.inpile.includes(name)) return false;
									var type = get.type2(name);
									return ["basic"].includes(type);
								},
								subSkill: {
									"skip": {
										trigger: {
											global: ["phaseZhunbeiBefore", "phaseDrawBefore", "phaseJudgeBefore", "phaseUseBefore", "phaseDiscardBefore", "phaseJieshuBefore"]
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											for (const phase of lib.phaseName) {
												const evt = event.getParent(phase);
												if (evt?.name === phase) {
													if (player.getStorage("fffuzhi_skip").includes(evt?.name)) {
														trigger.cancel();
														let arr = player.getStorage('fffuzhi_skip')
														arr = arr.filter(name => name !== evt?.name);
														player.setStorage("fffuzhi_skip", arr)
													}
												}
											}
										}
									}
								}
							},
							ffjinghuan: {
								trigger: {
									player: "damageBefore",
								},
								audio: "xinbaiyin",
								filter(event, player) {
									return player.getStorage("ffjinghuan").length < 4 && event.source
								},
								async content(event, trigger, player) {
									const cards = Array.from(ui.discardPile.childNodes).slice(0);
									const cards2 = Array.from(ui.discardPile.childNodes).slice(0);
									for (const card of cards2) {
										if (!player.hasUseTarget(card, true, false) || !card.hasGaintag("eternal_伏跖")) {
											cards.remove(card)
										}
									}
									const choiceList = ["明置所有手牌", "跳过你下两个阶段", "将手牌调整至体力上限", "使用中央区内的一张牌"];
									const choices = ["选项一", "选项二", "选项三", "选项四"];
									if (player.getCards("h", card => !card.hasGaintag("eternal_伏跖")).length == 0) {
										choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
										choices.remove("选项一");
									};
									if (player.getStorage("fffuzhi_skip").length != 0) {
										choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
										choices.remove("选项二");
									};
									if (player.countCards("h") == player.maxHp) {
										choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + "</span>";
										choices.remove("选项三");
									};
									if (cards.length == 0) {
										choiceList[3] = '<span style="opacity:0.5">' + choiceList[3] + "</span>";
										choices.remove("选项四");
									};
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.set("choiceList", choiceList)
										.forResult();
									if (result.control == "选项一") {
										await player.showCards(player.getCards("h"))
										await player.addGaintag(player.getCards("h"), "eternal_伏跖");
										trigger.source.addSkill("ffjinghuan_damage")
										trigger.source.markAuto("ffjinghuan_damage", 1)
									} else if (result.control == "选项二") {
										if (player != _status.currentPhase) {
											player.markAuto("fffuzhi_skip", "phaseBegin")
											player.markAuto("fffuzhi_skip", "phaseJudge")
										} else {
											var a = 0
											for (const phase of lib.phaseName) {
												if (a == 1 || a == 2) {
													player.markAuto("fffuzhi_skip", phase)
													a++
												}
												const evt = event.getParent(phase);
												if (evt?.name === phase) { a++ }
											}
										}
										trigger.source.addSkill("ffjinghuan_damage")
										trigger.source.markAuto("ffjinghuan_damage", 2)
									} else if (result.control == "选项三") {
										if (player.countCards("h") > player.maxHp) {
											await player.chooseToDiscard(player.countCards("h") - player.maxHp, true)
										} else if (player.countCards("h") < player.maxHp) {
											await player.drawTo(player.maxHp)
										}
										trigger.source.addSkill("ffjinghuan_damage")
										trigger.source.markAuto("ffjinghuan_damage", 3)
									} else if (result.control == "选项四") {
										for (let i = 0; i < cards.length; i++) {
											await player.gain(cards[i])
											player.removeGaintag("eternal_伏跖", cards[i]);
											await player.chooseUseTarget(cards[i], true, false)
										}
										/*	var result = await player.chooseButton(["伏跖：使用一张牌", cards], true).set("ai", function (button) {
											return get.value(button.link, _status.event.player);
										}).forResult()
										await player.gain(result.links)
										await player.chooseUseTarget(result.links,true,false)
									*/
										trigger.source.addSkill("ffjinghuan_damage")
										trigger.source.markAuto("ffjinghuan_damage", 4)
									}
								},
								subSkill: {
									"damage": {
										trigger: {
											player: "damageEnd",
										},
										forced: true,
										popup: false,
										filter(event, player) {
											return event.source.hasSkill("ffjinghuan")
										},
										async content(event, trigger, player) {
											player.setStorage("ffjinghuan_damage", null)
											player.removeSkill("ffjinghuan_damage")
										}
									}
								}
							},
							ffshaozigai: {
								enable: "chooseToUse",
								audio: "olduanliang",
								group: "ffshaozigai_BanSkill",
								hiddenCard(player, name) {
									return name === "huogong"
								},
								filter(event, player) {
									return event.filterCard({ name: "huogong", isCard: true }, player, event)
								},
								filterCard: () => false,
								selectCard: -1,
								filterTarget(card, player, target) {
									if (target.countCards("h") == 0) {
										return false
									}
									if (target != player) {
										return target.countCards("h", card => !get.info("_sxrm_connect").isConnect(card)) + player.countCards("h", card => !get.info("_sxrm_connect").isConnect(card)) > 3
									} else {
										return player.countCards("h", card => !get.info("_sxrm_connect").isConnect(card)) > 3
									}
								},
								delay: false,
								log: false,
								async precontent(event, trigger, player) {
									player.logSkill("ffshaozigai");
									var a = 4 - player.countCards("h", card => !get.info("_sxrm_connect").isConnect(card))
									if (a < 1) { a = 0 }
									const connects = [];
									const target = event.result.targets[0];
									if (target == player) {
										const result1 = await player
											.choosePlayerCard(target, "h", true, 4)
											.set("filterButton", button => {
												return !get.info("_sxrm_connect").isConnect(button.link);
											})
											.set("forced", true)
											.forResult();
										if (result1?.bool) {
											connects.addArray(result1.links);
											var b = 0
										}
									} else {
										const result = await player
											.choosePlayerCard(target, "h", true, [a, 4])
											.set("filterButton", button => {
												return !get.info("_sxrm_connect").isConnect(button.link);
											})
											.set("forced", true)
											.forResult();
										if (result?.bool) {
											connects.addArray(result.links);
											var b = 4 - result.links.length
										}
									}
									if (b == 0) {
										if (connects.length) {
											get.info("_sxrm_connect").addConnect(connects);
										}
										return
									}
									const result2 = await player
										.choosePlayerCard(player, "h", true, b)
										.set("filterButton", button => {
											return !get.info("_sxrm_connect").isConnect(button.link);
										})
										.forResult();
									if (result2?.bool) {
										connects.addArray(result2.links);
									}
									if (connects.length) {
										get.info("_sxrm_connect").addConnect(connects);
									}
								},
								viewAs: {
									name: "huogong",
									isCard: true,
								},
								subSkill: {
									"BanSkill": {
										trigger: {
											player: "useCardAfter"
										},
										filter(event, player) {
											return event.skill == "ffshaozigai"
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											if (!player.hasHistory("sourceDamage", function (evt) {
												return evt.card == trigger.card
											})) {
												player.tempBanSkill("ffshaozigai", null, false);
											}
										},
									}
								}
							},
							ffxuzhangai: {
								enable: "phaseUse",
								audio: "sbshipo",
								usable: 1,
								filter(event, player) {
									return _status.discarded.length > 0
								},
								async content(event, trigger, player) {
									var result3 = await player.chooseTarget()
										.set("filterTarget", function (card, player, target) {
											return player != target
										})
										.set("selectTarget", 1)
										.set('forced', true)
										.set("prompt", "与一名其他角色依次获得中央区内的牌")
										.forResult();
									var a = 0
									while (_status.discarded.length > 0) {
										const cardsx = _status.discarded;
										if (a % 2 == 0) {
											const result = await player
												.chooseButton([`叙斩：获得其中一张牌`, cardsx], true, 1)
												.set("filterButton", button => {
													if (!ui.selected.buttons?.length) {
														return true;
													}
												})
												.forResult();
											if (result?.bool && result.links?.length) {
												const { links } = result;
												await player.gain(links, "gain2");
											}
										} else {
											const result2 = await result3.targets[0]
												.chooseButton([`叙斩：获得其中一张牌`, cardsx], true, 1)
												.set("filterButton", button => {
													if (!ui.selected.buttons?.length) {
														return true;
													}
												})
												.forResult();
											if (result2?.bool && result2.links?.length) {
												const { links } = result2;
												await result3.targets[0].gain(links, "gain2");
											}
										}
										a++
									}
								}
							},
							fflianliugai: {
								enable: "phaseUse",
								audio: "potdimeng",
								filter(event, player) {
									return player.countCards("h") > 0
								},
								filterTarget(card, player, target) {
									return player != target
								},
								selectTarget: 1,
								async content(event, trigger, player) {
									await player.give(player.getCards("h"), event.targets[0])
									var cards = event.targets[0].getCards("h")
									var result = await player
										.chooseButton(["联刘：是否使用其中一张牌？", cards])
										.set("filterButton", button => {
											var card = button.link;
											var cardx = {
												name: get.name(card, get.owner(card)),
												nature: get.nature(card, get.owner(card)),
												cards: [card],
											};
											return player.hasUseTarget(cardx, null, false);
										})
										.forResult();
									var card = result.links[0]
									var cardx = {
										name: get.name(card, get.owner(card)),
										nature: get.nature(card, get.owner(card)),
										cards: [card],
									};
									var next = player.chooseUseTarget(cardx, [card], true, false);
								}
							},
							fftaojingai: {
								round: 1,
								audio: "dingzhou",
								trigger: {
									player: "useCardAfter",
								},
								async content(event, trigger, player) {
									const card = get.cards(1, true)[0];
									const content = ["牌堆顶", [card]];
									game.log(player, "观看了牌堆顶的一张牌");
									await player.chooseControl("ok").set("dialog", content);
									var result = await player.chooseTarget()
										.set("selectTarget", 1)
										.set("forced", true)
										.set("prompt", "分配牌堆顶的牌")
										.forResult()
									if (result.bool) {
										await result.targets[0].gain(card)
									}
									var result2 = await player.chooseTarget()
										.set("selectTarget", 1)
										.set("forced", true)
										.set("prompt", "分配1点伤害")
										.forResult()
									if (result2.bool) {
										await result2.targets[0].damage(1)
									}
									const targets = game.players.sortBySeat().slice();
									var hp1 = 1000
									var h1 = 1000
									var hp2 = 1000
									var h2 = 1000
									if (result.targets[0].isAlive()) {
										h1 = result.targets[0].countCards("h")
										hp1 = result.targets[0].hp
									}
									if (result2.targets[0].isAlive()) {
										h2 = result2.targets[0].countCards("h")
										hp2 = result2.targets[0].hp
									}
									for (let target of targets) {
										var h = target.countCards("h")
										var hp = target.hp
										if (target != result.targets[0]) {
											if (h1 == h) { h1 = 1000 }
											if (hp1 == hp) { hp1 = 1000 }
										}
										if (target != result2.targets[0]) {
											if (h2 == h) { h2 = 1000 }
											if (hp2 == hp) { hp2 = 1000 }
										}
										if (h1 == 1000 && h2 == 1000 && hp1 == 1000 && hp2 == 1000) {
											player.refreshSkill("fftaojingai")
											break;
										}
									}
								}
							},
							ffzhenjugai: {
								enable: "chooseToUse",
								group: "ffzhenjugai_draw",
								audio: "olsbyipo",
								hiddenCard(player, name) {
									return name === "jiu"
								},
								filter(event, player) {
									if (_status.currentPhase != player) {
										return player.countCards("he") > 0 && _status.currentPhase.countCards("he") > 0 && event.filterCard({ name: "jiu", isCard: true }, player, event)
									} else {
										return player.countCards("he") > 1 && event.filterCard({ name: "jiu", isCard: true }, player, event)
									}
								},
								filterCard: () => false,
								selectCard: -1,
								delay: false,
								log: false,
								async precontent(event, trigger, player) {
									player.logSkill("ffzhenjugai");
									var cards = []
									if (_status.currentPhase != player) {
										var result = await player.choosePlayerCard(player, 1, true).forResult()
										var result2 = await player.choosePlayerCard(_status.currentPhase, 1, true).forResult()
										cards.add(result.cards[0])
										cards.add(result2.cards[0])
									} else {
										var result = await player.choosePlayerCard(player, 2, true).forResult()
										cards.add(result.cards[0])
										cards.add(result.cards[1])
									}
									event.result.card.cards = cards
									event.result.cards = cards
								},
								viewAs: {
									name: "jiu",
									isCard: true,
								},
								subSkill: {
									"draw": {
										trigger: {
											player: "useCardAfter",
										},
										forced: true,
										popup: false,
										filter(event, player) {
											return event.skill == "ffzhenjugai"
										},
										async content(event, trigger, player) {
											var num = get.cardNameLength(trigger.cards[0]) + get.cardNameLength(trigger.cards[1])
											if (player.countCards("h") > num) {
												await player.chooseToDiscard(player.countCards("h") - num, true)
											} else {
												await player.drawTo(num)
											}
											if (_status.currentPhase != player) {
												if (_status.currentPhase.countCards("h") > num) {
													await _status.currentPhase.chooseToDiscard(_status.currentPhase.countCards("h") - num, true)
												} else {
													await _status.currentPhase.drawTo(num)
												}
											}
										}
									}
								}
							},
							ffbingweigai: {
								enable: "chooseToUse",
								audio: "wulie",
								viewAs: {
									name: "sha",
									storage: {
										ffbingweigai: true,
									},
								},
								viewAsFilter(player) {
									return player.countCards("hes") > 0;
								},
								selectCard() {
									return _status.event.player.hp;
								},
								filterTarget(card, player, target) {
									return target.isMaxHandcard()
								},
								filterCard: true,
								position: "hes",
								mod: {
									cardUsable(card, player, num) {
										if (card.storage?.ffbingweigai) {
											return Infinity;
										}
									},
									targetInRange(card, player, num) {
										if (card.storage?.ffbingweigai) {
											return true;
										}
									}
								},
							},
							fflunxionggai: {
								enable: "phaseUse",
								group: "fflunxionggai_mark",
								audio: "spolzhujiu",
								usable: 1,
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var num = player.countMark("fflunxionggai_mark")
										var str = "转换技，出牌阶段限一次，你可以选择一名其他角色";
										if (storage) return str + `并交给其至少${num}张牌`;
										return str + `并令其交给你至少${num}张牌`;
									},
								},
								selectTarget: 1,
								filterTarget(card, player, target) {
									var num = player.countMark("fflunxionggai_mark")
									if (player.storage.fflunxionggai) {
										return target.countCards("he") >= num && target != player
									} else {
										return player.countCards("he") >= num && target != player
									}
								},
								async content(event, trigger, player) {
									player.changeZhuanhuanji("fflunxionggai");
									player.addMark("fflunxionggai_mark", 1)
									var num = player.countMark("fflunxionggai_mark")
									var target = event.targets[0]
									if (player.storage.fflunxionggai) {
										var result = await player.chooseCard()
											.set("position", "he")
											.set("selectCard", [num, Infinity])
											.set("forced", true)
											.set("prompt", `交给${target.getName()}至少${num}张牌`)
											.forResult();
										await player.give(result.cards, target);
									} else {
										var result = await target.chooseCard()
											.set("position", "he")
											.set("selectCard", [num, Infinity])
											.set("forced", true)
											.set("prompt", `交给${player.getName()}至少${num}张牌`)
											.forResult();
										await target.give(result.cards, player);
									}
									if (player.getCards("h").some(card => get.color(card) == "black") && target.getCards("h").some(card => get.color(card) == "black")) {
										return
									}
									player.refreshSkill("fflunxionggai")
								},
								subSkill: {
									"mark": {
										trigger: {
											player: "phaseUseBegin",
										},
										forced: true,
										popup: false,
										mark: true,
										marktext: "论",
										intro: {
											content: function (storage, player) {
												return
											},
										},
										async content(event, trigger, player) {
											player.setMark("fflunxionggai_mark", 0)
										}
									}
								}
							},
							ffjingleigai: {
								trigger: {
									player: "gainAfter",
								},
								audio: "spoljinglei",
								forced: true,
								locked: true,
								filter(event, plyaer) {
									return event.cards.some(card => get.suit(card) == "heart" || get.suit(card) == "spade")
								},
								async content(event, trigger, player) {
									if (trigger.cards.some(card => get.suit(card) == "spade") && player.isMinHandcard()) {
										while (player.isMinHandcard()) {
											await player.draw()
										}
									} else if (trigger.cards.some(card => get.suit(card) == "heart") && player.isMaxHandcard()) {
										while (player.isMaxHandcard()) {
											await player.chooseToDiscard("h", true)
										}
									}
								}
							},
							ffxingzuogai: {
								audio: "xingzuo",
								usable:3,
								enable: ["chooseToUse"],
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，你的最后一张";
										if (!storage) return str + `黑色手牌可当作任意即时牌使用`;
										return str + `红色手牌可当作任意即时牌使用`;
									},
								},
								filter(event, player) {
									if (!player.storage.ffxingzuogai) {
										var cards = player.getCards("h", { color: "black" });
										if (cards.length != 1) {
											return false;
										}
									} else {
										var cards = player.getCards("h", { color: "red" });
										if (cards.length != 1) {
											return false;
										}
									}
									return true
								},
								onChooseToUse(event) {
									if (!game.online && !event.ffxingzuogai) {
										var list = get.inpileVCardList(info => {
											return ["basic", "trick"].includes(info[0])
										})
										event.set("ffxingzuogai", list);
									}
								},
								chooseButton: {
									dialog: function (event, player) {
										const list = event.ffxingzuogai;
										return ui.create.dialog(`兴作`, [list, "vcard"])
									},
									filter: function (button, player) {
										return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
									},
									backup: function (links, player) {
										return {
											audio: "ffxingzuogai",
											async precontent(event, trigger, player) {
												player.changeZhuanhuanji("ffxingzuogai");
											},
											filterCard(card, player) {
												if (!player.storage.ffxingzuogai) {
													return get.color(card) == "black"
												} else {
													return get.color(card) == "red"
												}
											},
											selectCard: 1,
											popname: true,
											viewAs: { name: links[0][2], nature: links[0][3], isCard: true, },
										}
									},
								},
								hiddenCard: function (player, name) {
									if (!lib.inpile.includes(name)) return false;
									var type = get.type2(name);
									return ["basic", "trick"].includes(type);
								},
							},
							ffmiaoxiangai: {
								enable: "phaseUse",
								audio: "miaoxian",
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，出牌阶段，你可以弃置X张";
										if (!storage) {
											return str + "相同颜色的牌以获得X-1张另一颜色的牌";
										} else {
											return str + "相同类型的牌以获得X-1张另外类型的牌";
										}
									},
								},
								filterCard(card, player) {
									if (!ui.selected?.cards?.length) {
										return true;
									}
									const cardx = ui.selected.cards[0];
									if (!player.storage.ffmiaoxiangai) {
										return get.color(card) == get.color(cardx)
									} else {
										return get.type(card) == get.type(cardx) || (get.type(card) == "trick" && get.type(cardx) == "delay") || (get.type(cardx) == "trick" && get.type(card) == "delay")
									}
								},
								selectCard: [2, Infinity],
								position: "he",
								async content(event, trigger, player) {
									player.changeZhuanhuanji("ffmiaoxiangai");
									player.refreshSkill("ffxingzuogai")
									var cards = [];
									var color = get.color(event.cards[0])
									var type = get.type(event.cards[0])
									var num = event.cards.length - 1
									if (player.storage.ffmiaoxiangai) {
										for (let i = 0; i < num; i++) {
											var card = get.cardPile(function (card) { return get.color(card) != color && !cards.includes(card) });
											if (card) { cards.push(card) };
										}
									} else {
										for (let i = 0; i < num; i++) {
											var card = get.cardPile(function (card) { return get.type(card) != type && !cards.includes(card) });
											if (card) { cards.push(card) };
										}
									}
									if (cards.length) { player.gain(cards, "gain2", "log"); }
								}
							},
							ffxieguogai: {
								enable: ["chooseToUse"],
								audio: "staranshu",
								filter(event, player) {
									return player.countCards("h") > 0
								},
								onChooseToUse(event) {
									if (!game.online && !event.ffxieguogai) {
										var list = get.inpileVCardList(info => {
											return ["juedou", "wuzhong"].includes(info[2])
										})
										event.set("ffxieguogai", list);
									}
								},
								chooseButton: {
									dialog: function (event, player) {
										const list = event.ffxieguogai;
										return ui.create.dialog(`撷果`, [list, "vcard"])
									},
									filter: function (button, player) {
										return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
									},
									backup: function (links, player) {
										return {
											audio: "ffxieguogai",
											position: "h",
											filterCard: () => true,
											selectCard: -1,
											filterTarget(card, player, target) {
												if (links[0][2] == "wuzhong") {
													return target == player && !target.hasSkill("ffjianxionggai")
												} else {
													return target != player && !target.hasSkill("ffjianxionggai")
												}
											},
											async precontent(event, trigger, player) {
												await event.result.targets[0].addSkill("ffjianxionggai")
											},
											popname: true,
											viewAs: { name: links[0][2], nature: links[0][3], isCard: true, },
										}
									},
								},
								hiddenCard: function (player, name) {
									if (!lib.inpile.includes(name)) return false;
									return ["wuzhong", "juedou"].includes(name);
								},
							},
							ffyujuegai: {
								enable: "phaseUse",
								group: "ffyujuegai_begin",
								audio: "starkuangzuo",
								filter(event, player) {
									return player.getStorage("ffyujuegai").length < 3
								},
								async content(event, trigger, player) {
									const choiceList = ["获得所有技能数小于你的角色各一张牌", "获得所有技能数等于你的角色各一张牌", "获得所有技能数大于你的角色各一张牌",];
									const choices = ["选项一", "选项二", "选项三", "cancel2"];
									if (player.getStorage("ffyujuegai").includes(1)) {
										choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
										choices.remove("选项一");
									};
									if (player.getStorage("ffyujuegai").includes(2)) {
										choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
										choices.remove("选项二");
									};
									if (player.getStorage("ffyujuegai").includes(3)) {
										choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + "</span>";
										choices.remove("选项三");
									};
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.set("choiceList", choiceList)
										.forResult();
									const num = player.getSkills(null, false, false).filter(skill => {
										let info = get.info(skill);
										if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) {
											return false;
										}
										return true;
									}).length
									if (result.control == "选项一") {
										player.markAuto("ffyujuegai", 1)
										const targets = game.players.sortBySeat().slice();
										for (let target of targets) {
											if (target == player) {
												continue;
											}
											const num2 = target.getSkills(null, false, false).filter(skill => {
												let info = get.info(skill);
												if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) {
													return false;
												}
												return true;
											}).length
											if (num2 < num) {
												player.gainPlayerCard(target, "he", true)
											}
										}
									} else if (result.control == "选项二") {
										player.markAuto("ffyujuegai", 2)
										const targets = game.players.sortBySeat().slice();
										for (let target of targets) {
											if (target == player) {
												continue;
											}
											const num2 = target.getSkills(null, false, false).filter(skill => {
												let info = get.info(skill);
												if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) {
													return false;
												}
												return true;
											}).length
											if (num2 == num) {
												player.gainPlayerCard(target, "he", true)
											}
										}
									} else if (result.control == "选项三") {
										player.markAuto("ffyujuegai", 3)
										const targets = game.players.sortBySeat().slice();
										for (let target of targets) {
											if (target == player) {
												continue;
											}
											const num2 = target.getSkills(null, false, false).filter(skill => {
												let info = get.info(skill);
												if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) {
													return false;
												}
												return true;
											}).length
											if (num2 > num) {
												player.gainPlayerCard(target, "he", true)
											}
										}
									}
								},
								subSkill: {
									"begin": {
										forced: true,
										popup: false,
										trigger: {
											player: "phaseUseBegin",
										},
										async content(event, trigger, player) {
											player.setStorage("ffyujuegai", null)
										},
									},
								}
							},
							ffjianxionggai: {
								trigger: {
									player: "damageEnd",
								},
								audio: "jianxiong",
								forced: true,
								locked: true,
								async content(event, trigger, player) {
									await player.gain(trigger.cards)
									player.removeSkill("ffjianxionggai")
								}
							},
							ffyaofa: {
								audio: "potdaozhuan",
								group: ["ffyaofa_skill", "ffyaofa_mark"],
								trigger: {
									player: "damageEnd",
								},
								filter(event, player) {
									return event.source?.isAlive() && event.source != player && !player.getStorage("ffyaofa").includes(event.source)
								},
								async content(event, trigger, player) {
									player.markAuto("ffyaofa", trigger.source)
									const choiceList = ["将体力值调整至与伤害来源相同", "令伤害来源将体力值调整至与你相同"];
									const choices = ["选项一", "选项二"];
									var result = await player
										.chooseControl()
										.set("controls", choices)
										.set("choiceList", choiceList)
										.forResult();
									if (result.control == "选项一") {
										if (trigger.source.hp > player.hp) {
											player.recover(trigger.source.hp - player.hp)
										} else if (trigger.source.hp < player.hp) {
											player.loseHp(player.hp - trigger.source.hp)
										}
									} else if (result.control == "选项二") {
										if (trigger.source.hp > player.hp) {
											trigger.source.loseHp(trigger.source.hp - player.hp)
										} else if (trigger.source.hp < player.hp) {
											trigger.source.recover(player.hp - trigger.source.hp)
										}
									}
								},
								subSkill: {
									"skill": {
										audio: "potdaozhuan",
										trigger: {
											source: "damageSource",
										},
										filter(event, player) {
											return event.player?.isAlive() && event.player != player && !player.getStorage("ffyaofa").includes(event.player)
										},
										async content(event, trigger, player) {
											player.markAuto("ffyaofa", trigger.player)
											const choiceList = ["将体力值调整至与受伤角色相同", "令受伤角色将体力值调整至与你相同"];
											const choices = ["选项一", "选项二"];
											var result = await player
												.chooseControl()
												.set("controls", choices)
												.set("choiceList", choiceList)
												.forResult();
											if (result.control == "选项一") {
												if (trigger.player.hp > player.hp) {
													player.recover(trigger.player.hp - player.hp)
												} else if (trigger.player.hp < player.hp) {
													player.loseHp(player.hp - trigger.player.hp)
												}
											} else if (result.control == "选项二") {
												if (trigger.player.hp > player.hp) {
													trigger.player.loseHp(trigger.player.hp - player.hp)
												} else if (trigger.player.hp < player.hp) {
													trigger.player.recover(player.hp - trigger.player.hp)
												}
											}
										}
									},
									"mark": {
										trigger: {
											global: "roundStart",
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											player.setStorage("ffyaofa", null)
										}
									}
								}
							},
							ffjiyao: {
								audio: "potfuji",
								enable: "phaseUse",
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，出牌阶段";
										if (!storage) {
											return str + "你可以弃置任意张字数和为X的牌并摸至Y张牌(X为你的体力值,Y为你的体力上限)";
										} else {
											return str + "你可以使用一张牌名字数为X的牌并摸至Y张牌(X为你的体力值,Y为你的体力上限)";
										}
									},
								},
								filterCard(card, player) {
									var x = player.hp
									if (!player.storage.ffjiyao) {
										if (!ui.selected?.cards?.length) {
											return get.cardNameLength(card) <= x;
										}
										for (const cardx of ui.selected.cards) {
											x -= get.cardNameLength(cardx)
										}
										return get.cardNameLength(card) <= x
									} else {
										return get.cardNameLength(card) == x && player.hasUseTarget(card) && player.getCards("h").includes(card)
									}
								},
								selectCard() {
									if (!_status.event.player.storage.ffjiyao) {
										return [1, Infinity]
									} else {
										return 1
									}
								},
								filterOk(result) {
									if (!_status.event.player.storage.ffjiyao) {
										var x = 0
										for (const cardx of ui.selected.cards) {
											x += get.cardNameLength(cardx)
										}
										return x == _status.event.player.hp
									} else {
										return ui.selected.cards.length == 1
									}
								},
								complexCard: true,
								position: "he",
								async content(event, trigger, player) {
									player.changeZhuanhuanji("ffjiyao");
									var x = player.hp
									if (!player.storage.ffjiyao) {
										await player.chooseUseTarget(event.cards[0], true, false)
									}
									player.drawTo(player.maxHp)
								}
							},
							ffmingzhigai: {
								group: ["ffmingzhigai_use", "ffmingzhigai_hp", "ffmingzhigai_h"],
								trigger: {
									player: "phaseUseBegin"
								},
								forced: true,
								popup: false,
								async content(event, trigger, player) {
									await player.setMark("ffmingzhigai", 0)
									player.setMark("ffmingzhigai_use", player.getCardUsable("sha", true))
								},
								mod: {
									cardUsable(card, player, num) {
										if (card.name === 'sha') {
											return num + player.countMark("ffmingzhigai");
										}
									}
								},
								"_priority": 1,
								subSkill: {
									"use": {
										trigger: {
											player: ["useCard", "phaseUseBegin"]
										},
										audio: "xinfu_chenghao",
										filter(event, player) {
											var c = player.getHistory("useCard", evt => {
												return evt.card.name == "sha" && evt.addCount !== false && _status.event.getParent('phaseUse') == evt.getParent('phaseUse')
											}).length
											var b = player.getCardUsable("sha", true) - c
											if (event.name == "useCard") {
												return get.name(event.card) == "sha" && event.card.addCount !== false && b == 1
											} else {
												return b == 1
											}
										},
										async content(event, trigger, player) {
											await player.recover(player.maxHp - player.hp)
											await player.drawTo(player.maxHp)
										},
									},
									"hp": {
										trigger: {
											player: "changeHp"
										},
										filter(event, player) {
											return player.hp == 2
										},
										audio: "xinfu_chenghao",
										async content(event, trigger, player) {
											var c = player.getHistory("useCard", evt => {
												return evt.card.name == "sha" && evt.addCount !== false && _status.event.getParent('phaseUse') == evt.getParent('phaseUse')
											}).length
											var b = player.getCardUsable("sha", true) - c
											var a = player.countMark("ffmingzhigai_use") - b
											if (a > 0) {
												player.addMark("ffmingzhigai", a)
											}
											await player.drawTo(player.maxHp)
										},
									},
									"h": {
										trigger: {
											player: ["loseAfter"],
											global: ["loseAsyncAfter", "equipAfter", "addToExpansionAfter", "gainAfter", "addJudgeAfter"],
										},
										audio: "xinfu_chenghao",
										filter(event, player) {
											const bool1 = event.getg && event.getg(player)?.length
											const bool2 = event.getl && event.getl(player)?.hs?.length;
											if (!bool1 && !bool2) {
												return false
											}
											return player.countCards("h") == 3
										},
										async content(event, trigger, player) {
											var c = player.getHistory("useCard", evt => {
												return evt.card.name == "sha" && evt.addCount !== false && _status.event.getParent('phaseUse') == evt.getParent('phaseUse')
											}).length
											var b = player.getCardUsable("sha", true) - c
											var a = player.countMark("ffmingzhigai_use") - b
											if (a > 0) {
												player.addMark("ffmingzhigai", a)
											}
											await player.recover(player.maxHp - player.hp)
										},
									}
								}
							},
							ffjianzhigai: {
								trigger: {
									player: "phaseJieshuBegin",
								},
								audio: "xinfu_jianjie",
								async content(event, trigger, player) {
									const skills = player.getSkills(null, false, false).filter(skill => {
										let info = get.info(skill);
										if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) {
											return false;
										}
										return true;
									})
									const choices = ['1', '2', "3", "4", "5"];
									var result = await player
										.chooseControl()
										.set('controls', choices)
										.forResult();
									if (result.control == "1") {
										await player.chooseToGuanxing(1)
										var result = await player.chooseTarget()
											.set("selectTarget", 1)
											.set("forced", true)
											.set("prompt", "令一名角色执行一个准备阶段")
											.forResult();
										if (result.targets[0] != player) {
											var result2 = await player
												.chooseButton(["荐之：交给其一个技能", [skills, "skill"]])
												.set("displayIndex", false)
												.set("listx", skills)
												.forResult();
											if (result2?.bool && result2?.links?.length) {
												await player.removeSkills(result2.links);
												await result.targets[0].addSkills(result2.links)
											}
											await result.targets[0]["phaseZhunbei"]()
										} else {
											const evt = trigger.getParent("phase", true, true);
											evt.phaseList.splice(evt.num + 1, 0, "phaseZhunbei|ffjianzhigai")
										}
									} else if (result.control == "2") {
										await player.chooseToGuanxing(2)
										var result = await player.chooseTarget()
											.set("selectTarget", 1)
											.set("forced", true)
											.set("prompt", "令一名角色执行一个判定阶段")
											.forResult();
										if (result.targets[0] != player) {
											var result2 = await player
												.chooseButton(["荐之：交给其一个技能", [skills, "skill"]])
												.set("displayIndex", false)
												.set("listx", skills)
												.forResult();
											if (result2?.bool && result2?.links?.length) {
												await player.removeSkills(result2.links);
												await result.targets[0].addSkills(result2.links)
											}
											await result.targets[0]["phaseJudge"]()
										} else {
											const evt = trigger.getParent("phase", true, true);
											evt.phaseList.splice(evt.num + 1, 0, "phaseJudge|ffjianzhigai")
										}
									} else if (result.control == "3") {
										await player.chooseToGuanxing(3)
										var result = await player.chooseTarget()
											.set("selectTarget", 1)
											.set("forced", true)
											.set("prompt", "令一名角色执行一个摸牌阶段")
											.forResult();
										if (result.targets[0] != player) {
											var result2 = await player
												.chooseButton(["荐之：交给其一个技能", [skills, "skill"]])
												.set("displayIndex", false)
												.set("listx", skills)
												.forResult();
											if (result2?.bool && result2?.links?.length) {
												await player.removeSkills(result2.links);
												await result.targets[0].addSkills(result2.links)
											}
											await result.targets[0]["phaseDraw"]()
										} else {
											const evt = trigger.getParent("phase", true, true);
											evt.phaseList.splice(evt.num + 1, 0, "phaseDraw|ffjianzhigai")
										}
									} else if (result.control == "4") {
										await player.chooseToGuanxing(4)
										var result = await player.chooseTarget()
											.set("selectTarget", 1)
											.set("forced", true)
											.set("prompt", "令一名角色执行一个出牌阶段")
											.forResult();
										if (result.targets[0] != player) {
											var result2 = await player
												.chooseButton(["荐之：交给其一个技能", [skills, "skill"]])
												.set("displayIndex", false)
												.set("listx", skills)
												.forResult();
											if (result2?.bool && result2?.links?.length) {
												await player.removeSkills(result2.links);
												await result.targets[0].addSkills(result2.links)
											}
											await result.targets[0]["phaseUse"]()
										} else {
											const evt = trigger.getParent("phase", true, true);
											evt.phaseList.splice(evt.num + 1, 0, "phaseUse|ffjianzhigai")
										}
									} else if (result.control == "5") {
										await player.chooseToGuanxing(5)
										var result = await player.chooseTarget()
											.set("selectTarget", 1)
											.set("forced", true)
											.set("prompt", "令一名角色执行一个弃牌阶段")
											.forResult();
										if (result.targets[0] != player) {
											var result2 = await player
												.chooseButton(["荐之：交给其一个技能", [skills, "skill"]])
												.set("displayIndex", false)
												.set("listx", skills)
												.forResult();
											if (result2?.bool && result2?.links?.length) {
												await player.removeSkills(result2.links);
												await result.targets[0].addSkills(result2.links)
											}
											await result.targets[0]["phaseDiscard"]()
										} else {
											const evt = trigger.getParent("phase", true, true);
											evt.phaseList.splice(evt.num + 1, 0, "phaseDiscard|ffjianzhigai")
										}
									}
								},
							},
							ffhunjuegai: {
								trigger: {
									player: "useCardAfter",
								},
								audio: "jsrgshanzheng",
								forced: true,
								locked: true,
								filter(event, player) {
									return event.targets.length == 1 && event.targets[0] != player && event.targets[0].isAlive()
								},
								async content(event, trigger, player) {
									var p = trigger.targets[0]
									const choiceList = ["本轮获得【毒逝】", "对贾南风发动【鸩毒】"];
									const choices = ["选项一", "选项二"];
									if (p.hasSkill("dushi")) {
										choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
										choices.remove("选项一");
									};
									if (p.countCards("h") == 0) {
										choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
										choices.remove("选项二");
									};
									if (choices.length > 0) {
										var result = await player
											.chooseControl()
											.set("controls", choices)
											.set("choiceList", choiceList)
											.forResult();
										if (result.control == "选项一") {
											p.addSkill("dushi")
											p.addSkill("ffhunjuegai_end")
										} else if (result.control == "选项二") {
											var result2 = await p.chooseCard()
												.set("position", "h")
												.set("selectCard", 1)
												.set("forced", true)
												.set("prompt", "对贾南风发动【鸩毒】")
												.set("prompt2", "其他角色的出牌阶段开始时，你可以弃置一张手牌，然后该角色视为使用一张【酒】，你对其造成1点伤害")
												.forResult()
											p.logSkill("zhendu")
											await p.discard(result2.cards)
											await player.useCard({
												name: "jiu",
												isCard: false,
											}, player, true, false);
											await player.damage(1, p)
										}
									}
								},
								subSkill: {
									"end": {
										trigger: {
											global: "roundEnd"
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											await player.removeSkill("dushi")
											player.removeSkill("ffhunjuegai_end")
										}
									}
								}
							},
							ffduiyuangai: {
								trigger: {
									player: "damageEnd",
								},
								audio: "jsrgliedu",
								zhuanhuanji: true,
								forced: true,
								locked: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "转换技，当你受到伤害后";
										if (storage) {
											return str + "你发动一次【间书】";
										} else {
											return str + "你使用一张因弃置进入中央区的牌";
										}
									},
								},
								async content(event, trigger, player) {
									const skills = player.getSkills(null, false, false).filter(skill => {
										let info = get.info(skill);
										if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) {
											return false;
										}
										return true;
									})
									player.changeZhuanhuanji("ffduiyuangai")
									if (player.storage.ffduiyuangai) {
										if (get.info("jianshu").filter(event, player)) {
											const jianshu = player.chooseToUse();
											jianshu.set("openskilldialog", get.prompt2("jianshu"));
											jianshu.set("norestore", true);
											jianshu.set("_backupevent", "jianshu");
											jianshu.set("custom", {
												add: {},
												replace: { window() { } },
											});
											jianshu.backup("jianshu");
											const result1 = await jianshu.forResult();
											if (!result1.bool) {
												var result2 = await player
													.chooseButton(["怼怨：失去一个技能直到回合结束", [skills, "skill"]])
													.set("forced", true)
													.set("displayIndex", false)
													.set("listx", skills)
													.forResult();
												player.disableSkill("ffduiyuangai", result2.links);
												player.addTempSkill("ffduiyuangai_restore");
											}
										} else {
											var result2 = await player
												.chooseButton(["怼怨：失去一个技能直到回合结束", [skills, "skill"]])
												.set("forced", true)
												.set("displayIndex", false)
												.set("listx", skills)
												.forResult();
											player.disableSkill("ffduiyuangai", result2.links);
											player.addTempSkill("ffduiyuangai_restore");
										}
									} else {
										let cards = game
											.getGlobalHistory("cardMove", evt => {
												if (evt.name.indexOf("lose") == 0) {
													if (evt.position !== ui.discardPile) {
														return false;
													}
													return true;
												} else if (evt.name == "cardsDiscard") {
													const evtx = evt.getParent();
													const evt2 = evtx.relatedEvent || evtx.getParent();
													return evt2 && evt2.name != "useCard";
												}
											})
											.map(evt => {
												return evt.cards.filterInD("d");
											})
											.flat()
											.unique();
										var cards2 = []
										for (const card of cards) {
											if (player.hasUseTarget(get.name(card), true, false)) {
												cards2.push(card)
											}
										}
										if (cards2.length > 0) {
											var result = await player.chooseButton(["怼怨：使用一张不因使用而进入中央区的牌", cards2], true).set("forced", true).forResult()
											if (result.bool) {
												player.gain(result.links, "gain2");
												player.chooseUseTarget(result.links, true, false)
											}
										} else {
											var result2 = await player
												.chooseButton(["怼怨：失去一个技能直到回合结束", [skills, "skill"]])
												.set("forced", true)
												.set("displayIndex", false)
												.set("listx", skills)
												.forResult();
											player.disableSkill("ffduiyuangai", result2.links);
											player.addTempSkill("ffduiyuangai_restore");
										}
									}
								},
								subSkill: {
									restore: {
										charlotte: true,
										forced: true,
										popup: false,
										onremove(player) {
											player.enableSkill("ffduiyuangai");
										},
										"skill_id": "ffduiyuangai_restore",
										sub: true,
										sourceSkill: "ffduiyuangai",
										"_priority": 0,
									},
								},
							},
							ffqlxuezao: {
								init(player, skill) {
									player.setStorage(skill, ["yang", "yin"]);
								},
								onremove: true,
								audio:"zaoli",
								trigger: {
									player: "useCard",
								},
								forced: true,
								mark: true,
								marktext: "☯",
								zhuanhuanji(player, skill) {
									player.setStorage(skill, player.getStorage(skill).reverse());
								},
								intro: {
									markcount(_1, player, skill) {
										const list = player.getStorage(skill);
										if (list?.length && list[0] === "yin") {
											return "阴";
										}
										return "阳";
									},
									content(_1, player, skill) {
										const list = player.getStorage(skill);
										if (list?.length && list[0] === "yin") {
											return "锁定技，转换技，你于出牌阶段内使用牌时，回复1点体力，然后将手牌弃至体力值（未以此法失去牌则弃置两张牌）。";
										}
										return "锁定技，转换技，你于出牌阶段内使用牌时，失去1点体力，然后将手牌摸至体力值（未以此法获得牌则摸两张牌）。";
									},
								},
								filter(event, player) {
									return player.isPhaseUsing();
								},
								async content(event, trigger, player) {
									const list = player.getStorage(event.name).slice(0);
									player.changeZhuanhuanji(event.name);
									if (list?.length && list[0] === "yin") {
										await player.recover();
										const num = Math.max(0, player.countDiscardableCards(player, "h") - player.getHp());
										if (num > 0) {
											await player.chooseToDiscard("h", num, true);
										}
										if (!player.hasHistory("lose", evt => evt.getParent(3) === event)) {
											const numx = Math.min(2, player.countDiscardableCards(player, "he"));
											if (numx > 0) {
												await player.chooseToDiscard("he", numx, true);
											}
										}
									} else {
										await player.loseHp();
										const num = Math.max(0, player.getHp() - player.countCards("h"));
										if (num > 0) {
											await player.draw(num);
										}
										if (!player.hasHistory("gain", evt => evt.getParent(2) === event)) {
											await player.draw(2);
										}
									}
								},
							},
							ffqlxiaozhen: {
								audio:"syjiqiao",
								enable: "phaseUse",
								sunbenSkill: true,
								filter(event, player) {
									if (!player.hasSkill("ffqlxuezao", null, null, false)) {
										return false;
									}
									const list = player.getStorage("ffqlxuezao");
									return list?.length > 1 || player.countDiscardableCards(player, "he");
								},
								filterCard(card, player) {
									const list = player.getStorage("ffqlxuezao");
									if (list?.length > 1) {
										return false;
									}
									return lib.filter.cardDiscardable(card, player, "ffqlxiaozhen");
								},
								selectCard() {
									const player = get.player(),
										list = player.getStorage("ffqlxuezao");
									if (list?.length > 1) {
										return -1;
									}
									return 1;
								},
								prompt() {
									const player = get.player(),
										list = player.getStorage("ffqlxuezao");
									if (list?.length > 1) {
										return "昂扬技，出牌阶段，你可摸一张牌并令你本回合使用的下一张牌无次数限制且不计入次数限制，然后移去〖血躁〗的一项直到本回合结束。激昂：使用两张牌。";
									}
									return "昂扬技，出牌阶段，你可弃置一张牌并令你本回合使用的下一张牌无次数限制且不计入次数限制，然后恢复〖血躁〗的一项。激昂：使用两张牌。";
								},
								manualConfirm: true,
								position: "he",
								async content(event, trigger, player) {
									player.addSkill("ffqlxiaozhen_re")
									player.setMark("ffqlxiaozhen_re",0)									
									const name = event.name;
									player.awakenSkill(name);
									const list = player.getStorage("ffqlxuezao"),
										map = {
											yang: "<span class='firetext'>阳</span>",
											yin: "<span class='bluetext'>阴</span>",
										};
									if (list.length > 1) {
										await player.draw();
									}
									player.addTip(name, "骁阵 不计次数");
									const { skill } = player
										.when({
											global: ["phaseBegin", "phaseAfter"],
											player: "useCard",
										})
										.assign({
											mod: {
												cardUsable: () => Infinity,
											},
										})
										.step(async (event, trigger, player) => {
											player.removeTip(name);
											if (trigger.name == "phase") {
												return;
											}
											if (trigger.addCount !== false) {
												trigger.addCount = false;
												const stat = player.getStat().card,
													name = trigger.card.name;
												if (typeof stat[name] === "number" && stat[name] > 0) {
													stat[name]--;
												}
												game.log(trigger.card, "不计入次数");
											}
										});
									game.broadcast(name => {
										lib.skill[name].mod = {
											cardUsable: () => Infinity,
										};
									}, skill);
									if (list.length > 1) {
										const result = await player
											.chooseButton(
												[
													"骁阵：选择删去【血躁】的一个分支",
													[
														[
															["yang", "<span class='firetext'>锁定技，转换技，你于出牌阶段内使用牌时，失去1点体力，然后将手牌摸至体力值（未以此法获得牌则摸两张牌）。</span>"],
															["yin", "<span class='bluetext'>锁定技，转换技，你于出牌阶段内使用牌时，回复1点体力，然后将手牌弃至体力值（未以此法失去牌则弃置两张牌）。</span>"],
														],
														"textbutton",
													],
												],
												true
											)
											.set("ai", () => Math.random())
											.forResult();
										if (result?.bool && result.links?.length) {
											game.log(player, "删去了", "#g【血躁】", `的${map[result.links[0]]}分支`);
											player.setStorage("ffqlxuezao", list.removeArray(result.links), true);
											player
												.when({
													global: "phaseAfter",
												})
												.step(async (event, trigger, player) => {
													const types = player.getStorage("ffqlxuezao"),
														adds = ["yang", "yin"].removeArray(types);
													if (adds?.length) {
														game.log(player, "恢复了", "#g【血躁】", `的${map[adds[0]]}分支`);
														player.setStorage("ffqlxuezao", types.addArray(adds), true);
													}
												});
										}
										return;
									}
									const adds = ["yang", "yin"].removeArray(list);
									if (adds?.length) {
										game.log(player, "恢复了", "#g【血躁】", `的${map[adds[0]]}分支`);
										player.setStorage("ffqlxuezao", list.addArray(adds), true);
									}
								},
								subSkill:{
									"re":{
										trigger:{
											player: "useCard",
										},
										forced:true,
										popup:false,
										async content(event, trigger, player) {
											const name = "ffqlxiaozhen"
											player.addMark("ffqlxiaozhen_re",1)
											if (!player.hasSkill(name) && player.hasSkill(name, null, null, false) && player.countMark("ffqlxiaozhen_re") > 1) {
												player.popup(get.translation(name));
												player.restoreSkill(name);
												game.log(player, "恢复了技能", `#g【${get.translation(name)}】`);
											}
											if(player.countMark("ffqlxiaozhen_re") > 1){
												player.removeSkill("ffqlxiaozhen_re")
											}											
										},
										"_priority": 1,
									}
								}
							},
							ffyeqiangai: {
								trigger: {
									global: "damageEnd"
								},
								audio: "ext:重塑系列削弱版/audio:2",
								global: "ffyeqiangai_global",
								filter(event, player) {
									const cur = _status.discarded.slice(0);
									return _status.currentPhase == player && cur.length + player.countCards("h") >= 3
								},
								async content(event, trigger, player) {
									const cur = _status.discarded;
									const cards1 = cur
									const cards2 = player.getCards("h")
									const cards3 = []
									const cards4 = []
									const cards5 = cards1.concat(cards2)
									const lose_list = []
									await player.addGaintag(cards2, "eternal_手牌")
									lose_list.push([player, cards2])
									game.cardsGotoOrdering(cards1)
									await game
										.loseAsync({
											lose_list: lose_list,
										})
										.setContent("chooseToCompareLose")
									var result = await player.chooseToMove()
										.set("list", [["中央区和手牌", cards5], ["牌堆顶", cards3], ["牌堆底", cards4]])
										.set("prompt", "将中央区与手牌中的共计三张牌分配到牌堆顶和牌堆底。")
										.set('filterOk', function (moved) {
											return moved[1].length + moved[2].length == 3 && moved[0].filter(card => card.hasGaintag('eternal_手牌')).length < cards2.length
										})
										.forResult();
									if (result?.bool) {
										await player.removeGaintag("eternal_手牌", cards2)
										var top = result.moved[1]
										var bottom = result.moved[2]
										var hand = []
										var discard = []
										var cards = top.concat(bottom)
										for (const card of result.moved[0]) {
											if (cards1.includes(card)) {
												discard.push(card)
											} else {
												hand.push(card)
											}
										}
										top.reverse();
										for (const card1 of cards) {
											card1.storage = cards
										}
										game.cardsGotoPile(top.concat(bottom), ["top_cards", top], function (event, card) {
											if (event.top_cards.includes(card)) return ui.cardPile.firstChild;
											return null;
										})
										const gain_list = [];
										if (hand.length) {
											gain_list.push([player, hand])
										}
										game.loseAsync({
											gain_list: gain_list,
											giver: player,
											animate: "gain2",
										}).setContent("gaincardMultiple");
										game.cardsDiscard(discard)
									} else {
										await player.gain(cards2, 'gain2');
										await player.removeGaintag("eternal_手牌", cards2)
										game.cardsDiscard(cards1)
									}
								},
								subSkill: {
									global: {
										trigger: {
											player: "gainAfter",
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											for (const card1 of trigger.cards) {
												if (card1?.storage?.length > 0) {
													await player.gain(card1.storage)
													delete card1.storage
												}
											}
										}
									}
								}
							},
							ffhuchenggai: {
								enable: ["chooseToUse"],
								group: "ffhuchenggai_use",
								audio: "ext:重塑系列削弱版/audio:2",
								filter(event, player) {
									return player.countCards("he") > 0
								},
								onChooseToUse(event) {
									if (!game.online && !event.ffhuchenggai) {
										var list = []
										list.push(['锦囊', '', 'binglinchengxiax'])
										list.push(['锦囊', '', 'yiyi'])
										event.set("ffhuchenggai", list);
									}
								},
								chooseButton: {
									dialog: function (event, player) {
										const list = event.ffhuchenggai;
										return ui.create.dialog(`呼城`, [list, "vcard"])
									},
									filter: function (button, player) {
										return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
									},
									backup: function (links, player) {
										return {
											audio: "ffhuchenggai",
											position: "he",
											filterCard: () => true,
											selectCard: 1,
											popname: true,
											viewAs: { name: links[0][2], nature: links[0][3], isCard: true, },
										}
									},
								},
								hiddenCard: function (player, name) {
									if (!lib.inpile.includes(name)) return false;
									return ["binglinchengxiax", "yiyi"].includes(name);
								},
								subSkill: {
									"use": {
										trigger: {
											player: "useCardAfter"
										},
										forced: true,
										popup: false,
										filter(event, player) {
											return event.skill == "ffhuchenggai_backup"
										},
										async content(event, trigger, player) {
											const targets = game.players.sortBySeat().slice();
											for (let target of targets) {
												if (target == player) {
													continue;
												}
												if (target.countCards("h") == player.countCards("h")) {
													player.tempBanSkill("ffhuchenggai")
												}
											}
										}
									}
								}
							},
							ffxunyegai: {
								enable: "phaseUse",
								group:"ffxunyegai_end",
								audio: "ext:重塑系列削弱版/audio:2",
								selectCard() {
									var allCounts = game.players
									.filter(function(p) { return p != _status.event.player; })
									.map(function (p) {
										return p.countCards("h");
									});
									var uCounts = [...new Set(allCounts)].sort(function (a, b) {
										return a - b;
									})									
									return [1,uCounts.length]
								},
								position: "he",
								discard: false,
								lose: false,
								filterCard: () => true,
								filterOk() {
									const player = get.player();
									for (const number of player.getStorage("ffxunyegai")) {
										if (ui.selected.cards.length == number) return false
									}
									return true
								},
								async content(event, trigger, player) {
									player.markAuto("ffxunyegai", event.cards.length)
									await player.discard(event.cards)
									var allCounts = game.players
									.filter(function(p) { return p != player; })
									.map(function (p) {
										return p.countCards("h");
									});
									var uCounts = [...new Set(allCounts)].sort(function (a, b) {
										return a - b;
									})
									var cts = uCounts[event.cards.length - 1]
									if (player.countCards("h") > cts) {
										await player.chooseToDiscard("h", player.countCards("h") - cts, true)
									} else {
										await player.drawTo(cts)
									}
								},
								subSkill:{
									"end":{
										trigger:{
											player: "phaseUseBegin",
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											player.setStorage("ffxunyegai", null)
											player.setStorage("ffdanqigai_use", null)
										},										
									}									
								}
							},
							ffdanqigai: {
								enable: ["chooseToUse"],
								round: 1,
								group: "ffdanqigai_mark",
								zhuanhuanji: true,
								mark: true,
								marktext: "☯",
								intro: {
									content: function (storage, player) {
										var str = "韵律技，每轮限一次，你可以分配牌堆顶的牌并视为使用";
										if (storage) {
											return str + "伤害牌。转韵：手牌数唯一最多的角色变化。";
										} else {
											return str + "非伤害牌。转韵：手牌数唯一最多的角色变化。";
										}
									},
								},
								filter: function (event, player) {
									if (!player.storage.ffdanqigai) {
										for (var name of lib.inpile) {
											const card = get.autoViewAs({ name }, "unsure")
											if (!get.tag(card, "damage") && !player.getStorage("ffdanqigai_use").includes(name)){
												if (event.filterCard({ name: name, isCard: true }, player, event)) return true;
											}
										}
									} else {
										for (var name of lib.inpile) {
											const card = get.autoViewAs({ name }, "unsure")
											if (get.tag(card, "damage")&& !player.getStorage("ffdanqigai_use").includes(name)) {
												if (event.filterCard({ name: name, isCard: true }, player, event)) return true;
											}
										}
									}
								},
								onChooseToUse(event) {
									if (!game.online && !event.ffdanqigai) {
										var list = [];
										for (var i = 0; i < lib.inpile.length; i++) {
											var name = lib.inpile[i];
											if(_status.event.player.getStorage("ffdanqigai_use").includes(name))continue
											const card = get.autoViewAs({ name }, "unsure")
											if (!_status.event.player.storage.ffdanqigai) {
												if (get.type(name) == 'trick' && !get.tag(card, "damage")) list.push(['锦囊', '', name]);
												if (get.type(name) == 'basic' && !get.tag(card, "damage")) list.push(['基本', '', name]);
											} else {
												if (get.type(name) == 'trick' && get.tag(card, "damage")) list.push(['锦囊', '', name]);
												if (get.type(name) == 'basic' && get.tag(card, "damage")) list.push(['基本', '', name]);
											}
										}
										event.set("ffdanqigai", list);
									}
								},
								chooseButton: {
									dialog: function (event, player) {
										const list = event.ffdanqigai;
										return ui.create.dialog(`啖妻`, [list, "vcard"])
									},
									filter: function (button, player) {
										return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
									},
									backup: function (links, player) {
										return {
											async precontent(event, trigger, player) {
												if (!player.storage.ffdanqigai) {
													game.broadcastAll((p) => {
														game.playAudio(`../extension/重塑系列削弱版/audio/ffdanqigai${[1].randomGet()}.mp3`);
													}, player);
												}else{
													game.broadcastAll((p) => {
														game.playAudio(`../extension/重塑系列削弱版/audio/ffdanqigai${[2].randomGet()}.mp3`);
													}, player);													
												}												
												player.markAuto("ffdanqigai_use",links[0][2])
												player.logSkill("ffdanqigai");
												const card = get.cards(1, true)[0];
												const content = ["牌堆顶", [card]];
												game.log(player, "观看了牌堆顶的一张牌");
												await player.chooseControl("ok").set("dialog", content);
												var result = await player.chooseTarget()
													.set("selectTarget", 1)
													.set("filterTarget", function (card, player, target) {
														return player != target
													})
													.set("forced", true)
													.set("prompt", "分配牌堆顶的牌至一名其他角色")
													.forResult()
												if (result.bool) {
													await result.targets[0].gain(card)
												}
											},
											filterCard: () => false,
											selectCard: -1,
											popname: true,
											viewAs: { name: links[0][2], nature: links[0][3], isCard: true, },
										}
									},
								},
								hiddenCard: function (player, name) {
									if (!lib.inpile.includes(name)) return false;
									var type = get.type2(name);
									return ["basic", "trick"].includes(type);
								},
								log: false,
								subSkill: {
									"mark": {
										trigger: { global: ["loseAfter", "loseAsyncAfter", "cardsDiscardAfter", "equipAfter", "gainAfter"] },
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											const max = game.findPlayer(current => current.isMaxHandcard(true))
											if (max) {
												if (player.getStorage("ffdanqigai_mark").length == 0 || player.getStorage("ffdanqigai_mark")[0] != max) {
													player.markAuto("ffdanqigai_mark", max)
													player.refreshSkill("ffdanqigai")
													player.changeZhuanhuanji("ffdanqigai")
												}
												if (player.getStorage("ffdanqigai_mark").length > 1) {
													let arr = player.getStorage('ffdanqigai_mark')
													arr.splice(0, 1)
													player.setStorage("ffdanqigai_mark", arr)
												}
											} else { player.setStorage("ffdanqigai_mark", null) }
										}
									},
								},
							},
							ffgoudao: {
								group: "ffgoudao_re",
								audio: "ext:重塑系列削弱版/audio:4",
								enable: ["chooseToUse"],
								onChooseToUse(event) {
									if(!game.online && !event.ffgoudao){
										const x = Array.from(ui.discardPile.childNodes).at(-1)
										event.set("ffgoudao", x);
									}
								},														
								filter(event, player) {
									const x = event.ffgoudao
									return x && get.type(x) != "equip" && get.type(x) != "delay"
								},
								position: "hes",
								selectCard: 1,
								filterCard(card, player) {
									return true
								},
								viewAs(cards, player) {
									const x = _status.event.ffgoudao
									return { name: get.name(x) };
								},
								prompt(event) {
									const x = event.ffgoudao
									return `使用${get.translation(x)}`
								},
								subSkill: {
									"re": {
										trigger: {
											player: "useCardAfter",
										},
										filter(event, player) {
											return event.skill == "ffgoudao"
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											const skills = player.getSkills(null, false, false).filter(skill => {
												let info = get.info(skill);
												if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) {
													return false;
												}
												return true;
											})
											var result = await player
												.chooseButton(["狗盗：重置一个技能", [skills, "skill"]])
												.set("displayIndex", false)
												.set("listx", skills)
												.forResult();
											if (result?.bool && result?.links?.length) {
												await player.refreshSkill(result.links);
												if (result.links == "ffzhiheng") {
													var index = player.skills.indexOf('ffzhiheng')
													let arr = player.getStorage('ffzhiheng')
													arr = arr.filter(name => name !== index);
													player.setStorage("ffzhiheng", arr)
													console.log(player.getStorage('ffzhiheng'))
												}
											}
										},
									}
								}
							},
							fffenquan: {
								enable: "phaseUse",
								audio: "ext:重塑系列削弱版/audio:4",
								usable: 1,
								forced: true,
								popup: false,
								async content(event, trigger, player) {
									player.setMark("fffenquan", 0)
									while (player.countMark("fffenquan") == 0) {
										player.when({
											player: "useCardAfter",
										})
											.step(async (event, trigger, player) => {
												player.removeSkill("ffmanqigai_sha")
												if (!player.hasHistory("sourceDamage", function (evt) {
													return evt.card == trigger.card
												})) {
													player.setMark("fffenquan", 1)
												}
											})
										await player.drawTo(player.maxHp)
										await player.chooseUseTarget({ name: "huogong", storage: { fffenquan: 1 } }, true, false)
									}
								},
							},
							ffsanku: {
								forced: true,
								audio: "ext:重塑系列削弱版/audio:4",
								trigger: {
									player: ["loseBegin", "gainAfter"],
									global: "phaseBefore",
								},
								filter(event, player) {
									if (event.name != "phase") {
										const cards = event.cards;
										if (!cards.length) {
											console.log("1")
											return false;
										}
										const prev = player.getCards("h").removeArray(cards);
										const cur = player.getCards("h");
										return (
											prev.map(card => get.type2(card)).unique().length !=
											cur.map(card => get.type2(card)).unique().length
										)
									} else {
										return game.phaseNumber == 0
									}
								},
								async content(event, trigger, player) {
									if (event.triggername != "phase") {
										var cards = trigger.cards;
									}
									player.addSkill("ffgoudao")
									var skills = player.skills;
									var index = skills.indexOf("ffgoudao");
									if (index != 0) {
										var removedSkill = skills.splice(index, 1)[0];
										skills.splice(0, 0, removedSkill);
									}
									player.addSkill("fffenquan")
									var skills = player.skills;
									var index = skills.indexOf("fffenquan");
									if (index != 1) {
										var removedSkill = skills.splice(index, 1)[0];
										skills.splice(1, 0, removedSkill);
									}
									player.addSkill("oldniepan")
									var skills = player.skills;
									var index = skills.indexOf("oldniepan");
									if (index != 2) {
										var removedSkill = skills.splice(index, 1)[0];
										skills.splice(2, 0, removedSkill);
									}
									if (event.triggername == "loseBegin") {
										var cur = player.getCards("h").removeArray(cards).map(card => get.type2(card)).unique().length - 1;
									} else {
										var cur = player.getCards("h").map(card => get.type2(card)).unique().length - 1;
									}
									if (cur < 0) {
										player.removeSkill("ffzhiheng")
									} else {
										player.removeSkill(player.skills[cur])
										if (!player.hasSkill("ffzhiheng")) {
											player.addSkill("ffzhiheng")
										}
										var skills = player.skills;
										var index = skills.indexOf("ffzhiheng");
										if (index != cur) {
											var removedSkill = skills.splice(index, 1)[0];
											skills.splice(cur, 0, removedSkill);
										}
										if (player.hasSkill("oldniepan") && player.hasSkill("fffenquan") && player.hasSkill("ffgoudao")) {
											player.removeSkill("oldniepan")
										}
									}
								},
							},
							ffzhiheng: {
								enable: "phaseUse",
								audio: "rezhiheng",
								group: ["ffzhiheng_re"],
								selectCard: [1, Infinity],
								position: "he",
								discard: false,
								lose: false,
								filterCard: () => true,
								filter(event, player) {
									var index = player.skills.indexOf('ffzhiheng')
									if (player.getStorage("ffzhiheng").includes(index)) { return false }
									return player.countCards("he") > 0
								},
								async content(event, trigger, player) {
									var index = player.skills.indexOf('ffzhiheng')
									player.markAuto("ffzhiheng", index)
									await player.discard(event.cards)
									if (player.countCards("h") == 0) {
										await player.draw(event.cards.length + 1)
									} else {
										await player.draw(event.cards.length)
									}
								},
								subSkill: {
									"re": {
										trigger: {
											player: "phaseUseBegin",
										},
										forced: true,
										popup: false,
										async content(event, trigger, player) {
											player.setStorage("ffzhiheng", null)
										}
									},
								}
							}																																																																																																																										
						},
					};					
					/*if(lib.device||lib.node){
						for(var i in whmx3.character){whmx3.character[i][4].push('ext:物华弥新/'+i+'.jpg');}
					}else{
						for(var i in whmx3.character){whmx3.character[i][4].push('db:extension-物华弥新:'+i+'.jpg');}
					}*/
					return csxl2;
				});
				lib.config.all.characters.push('csxl2');
				if (!lib.config.characters.contains('csxl2')) lib.config.characters.push('csxl2');
				lib.translate['csxl2_character_config'] = '重塑系列削弱版';					
			};
		}, help: {}, package: {
			character: {
				character: {
				},
				translate: {
				},
			},
			card: {
				card: {
				},
				translate: {
				},
				list: [],
			},
			skill: {
				skill: {
				},
				translate: {
				},
			},
			intro: "",
			author: ["ff", "秋礼"],
			diskURL: "",
			forumURL: "",
			version: "1.0",
		}, files: { "character": [], "card": [], "skill": [], "audio": [] }, connect: false
	}
};