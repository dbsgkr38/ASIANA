//datepicker 異붽� �댁긽�� 2017-11-02
(function(factory) {
	if ( typeof define === "function" && define.amd ) {
		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {
		// Browser globals
		factory( jQuery.datepicker );
	}
}

(function(datepicker){
	 $.datepicker._updateDatepicker_original = $.datepicker._updateDatepicker;
		$.datepicker._updateDatepicker = function(inst) {
			$.datepicker._updateDatepicker_original(inst);
			var afterShow = this._get(inst, 'afterShow');
			var monthMove = '';
			if (afterShow) {
				afterShow.apply((inst.input ? inst.input[0] : null));  // trigger custom callback
				inst.input.find('a[data-handler="prev"]').attr('href','#none');
				inst.input.find('a[data-handler="next"]').attr('href','#none');
			};

			inst.input.find('.ui-datepicker-group').each(function(){
				// 罹섎┛�� Table Caption 異붽�
				var _capThis = $(this);
				var capText = _capThis.find('.ui-datepicker-title').text();
				var _capTarget = _capThis.find('.ui-datepicker-calendar');
				
				_capTarget.prepend('<caption>'+capText+' '+_calendarLangs.J0001+'</caption>')
			});
			
			$('.ui-datepicker-next').on('click',function(){
				monthMove = 'left';
				if( inst.input.find('.ui-datepicker-next').hasClass('ui-state-disabled') ){
					$(inst.input.find('.ui-datepicker-group-last a.ui-state-default')[0]).focus();
				}else{
					inst.input.find('.ui-datepicker-next').focus();
				};
			});
			$('.ui-datepicker-prev').on('click',function(){
				monthMove = 'right';
				if( inst.input.find('.ui-datepicker-prev').hasClass('ui-state-disabled') ){
					$(inst.input.find('.ui-datepicker-group-first a.ui-state-default')[0]).focus();
				}else{
					inst.input.find('.ui-datepicker-prev').focus();
				};
			});
			monthMove = '';
			

			// �ъ빱�� �꾩썐��, �덉씠�� �먮룞 �ロ옒
			inst.input.parents('.calendar_layer').on('keydown', function(e) {
				if ( e.keyCode == 9 && e.shiftKey ) {
					console.log($('*:focus'));
					console.log($(this).find('button, a, select').first().attr('class'));
					if( $('*:focus').attr('class') == $(this).find('button, a, select').first().attr('class') ){
						e.preventDefault();
						$(this).find('.btn_cal_close').trigger('click');
					}
				}else if (e.keyCode == 9) {
					if( $('*:focus').attr('class') == $(this).find('button, a, select').last().attr('class') ){
						e.preventDefault();
						$(this).find('.btn_cal_close').trigger('click');
					}
				};
			});
		}

	datepicker.regional.en = {
		closeText: "Close",
		prevText: "Previous Month",
		nextText: "Next Month",
		currentText: "Today",
		monthNames: [ "01","02","03","04","05","06",
		"07","08","09","10","11","12" ],
		monthNamesShort: [ "1","2","3","4","5","6",
		"7","8","9","10","11","12" ],
		dayNames: [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ],
		dayNamesShort: [ "(SU)","(MO)","(TU)","(WE)","(TH)","(FR)","(SA)" ],
		dayNamesMin: [ "SU","MO","TU","WE","TH","FR","SA" ],
		weekHeader: "Week",
		dateFormat: "y.mm.dd D",
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "."
	};
	
	datepicker.regional.ja = {
		closeText: "�됥걯��",
		prevText: "�띲겗��",
		nextText: "�ζ쐢",
		currentText: "餓딀뿥",
		monthNames: [ "01","02","03","04","05","06",
		"07","08","09","10","11","12" ],
		monthNamesShort: [ "1","2","3","4","5","6",
		"7","8","9","10","11","12" ],
		dayNames: [ "�ζ썫��","�덃썫��","�ユ썫��","麗닸썫��","�ⓩ썫��","�묉썫��","�잍썫��" ],
		dayNamesShort: [ "(��)","(��)","(��)","(麗�)","(��)","(甸�)","(��)" ],
		dayNamesMin: [ "��","��","��","麗�","��","甸�","��" ],
		weekHeader: "�깁뼋",
		dateFormat: "y.mm.dd D",
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "."
	};
	
	datepicker.regional.ch = {
		closeText: "�녜뿭",
		prevText: "訝듾릉��",
		nextText: "訝뗤릉��",
		currentText: "餓듿ㄹ",
		monthNames: [ "01","02","03","04","05","06",
		"07","08","09","10","11","12" ],
		monthNamesShort: [ "1","2","3","4","5","6",
		"7","8","9","10","11","12" ],
		dayNames: [ "�잍쐿鸚�","�잍쐿訝�","�잍쐿雅�","�잍쐿訝�","�잍쐿��","�잍쐿雅�","�잍쐿��" ],
		dayNamesShort: [ "(��)","(訝�)","(雅�)","(訝�)","(��)","(雅�)","(筌�)" ],
		dayNamesMin: [ "��","訝�","雅�","訝�","��","雅�","筌�" ],
		weekHeader: "��",
		dateFormat: "y.mm.dd D",
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "."
	};

	datepicker.regional.de = {
		closeText: "Schlie횩en",
		prevText: "Vorheriger Monat",
		nextText: "N채chsten Monat",
		currentText: "Heute",
		monthNames: [ "01","02","03","04","05","06",
		"07","08","09","10","11","12" ],
		monthNamesShort: [ "1","2","3","4","5","6",
		"7","8","9","10","11","12" ],
		dayNames: [ "Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag" ],
		dayNamesShort: [ "(SO)","(MO)","(DI)","(MI)","(DO)","(FR)","(SA)" ],
		dayNamesMin: [ "SO","MO","DI","MI","DO","FR","SA" ],
		weekHeader: "Woche",
		dateFormat: "y.mm.dd D",
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "."
	};

	datepicker.regional.fr = {
		closeText: "Fermer",
		prevText: "Mois pr챕c챕dent",
		nextText: "Le mois prochain",
		currentText: "Aujourd'hui",
		monthNames: [ "01","02","03","04","05","06",
		"07","08","09","10","11","12" ],
		monthNamesShort: [ "1","2","3","4","5","6",
		"7","8","9","10","11","12" ],
		dayNames: [ "Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi" ],
		dayNamesShort: [ "(DI)","(LU)","(MA)","(ME)","(JE)","(VE)","(SA)" ],
		dayNamesMin: [ "DI","LU","MA","ME","JE","VE","SA" ],
		weekHeader: "la semaine",
		dateFormat: "y.mm.dd D",
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "."
	};

	datepicker.regional.ru = {
		closeText: "�逵克����",
		prevText: "��筠畇�畇��龜橘 劇筠���",
		nextText: "� �剋筠畇���筠劇 劇筠���筠",
		currentText: "�筠均棘畇戟�",
		monthNames: [ "01","02","03","04","05","06",
		"07","08","09","10","11","12" ],
		monthNamesShort: [ "1","2","3","4","5","6",
		"7","8","9","10","11","12" ],
		dayNames: [ "勻棘�克�筠�筠戟�筠","極棘戟筠畇筠剋�戟龜克","勻�棘�戟龜克","��筠畇逵","�筠�勻筠�均","極��戟龜�逵","��閨閨棘�逵" ],
		dayNamesShort: [ "(��)","(�戟)","(��)","(鬼�)","(槻�)","(��)","(鬼閨)" ],
		dayNamesMin: [ "��","�戟","��","鬼�","槻�","��","鬼閨" ],
		weekHeader: "戟筠畇筠剋�",
		dateFormat: "y.mm.dd D",
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "."
	};

	datepicker.regional.zh = {
		closeText: "�쒒뻾",
		prevText: "訝듿�뗦쐢",
		nextText: "訝뗥�뗦쐢",
		currentText: "餓듿ㄹ",
		monthNames: [ "01","02","03","04","05","06",
		"07","08","09","10","11","12" ],
		monthNamesShort: [ "1","2","3","4","5","6",
		"7","8","9","10","11","12" ],
		dayNames: [ "�잍쐿鸚�","�잍쐿訝�","�잍쐿雅�","�잍쐿訝�","�잍쐿��","�잍쐿雅�","�잍쐿��" ],
		dayNamesShort: [ "(��)","(訝�)","(雅�)","(訝�)","(��)","(雅�)","(筌�)" ],
		dayNamesMin: [ "��","訝�","雅�","訝�","��","雅�","筌�" ],
		weekHeader: "��",
		dateFormat: "y.mm.dd D",
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "."
	};	
	
	datepicker.regional.ko = {
		closeText: "�リ린",
		prevText: "�댁쟾��",
		nextText: "�ㅼ쓬��",
		currentText: "�ㅻ뒛",
		monthNames: [ "01","02","03","04","05","06",
		"07","08","09","10","11","12" ],
		monthNamesShort: [ "1","2","3","4","5","6",
		"7","8","9","10","11","12" ],
		dayNames: [ "�쇱슂��","�붿슂��","�붿슂��","�섏슂��","紐⑹슂��","湲덉슂��","�좎슂��" ],
		dayNamesShort: [ "(��)","(��)","(��)","(��)","(紐�)","(湲�)","(��)" ],
		dayNamesMin: [ "��","��","��","��","紐�","湲�","��" ],
		weekHeader: "二�",
		dateFormat: "y.mm.dd D",
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "."
	};

	datepicker.regional.es = {
		closeText: "Cerrar",
		prevText: "Mes anterior",
		nextText: "Pr처ximo mes",
		currentText: "Hoy",
		monthNames: [ "01","02","03","04","05","06",
		"07","08","09","10","11","12" ],
		monthNamesShort: [ "1","2","3","4","5","6",
		"7","8","9","10","11","12" ],
		dayNames: [ "domingo", "lunes", "martes", "mi챕rcoles", "jueves", "viernes", "s찼bado" ],
		dayNamesShort: [ "(dom)", "(lun)", "(mar)", "(mi챕)", "(jue)", "(vie)", "(s찼b)" ],
		dayNamesMin: [ "dom", "lun", "mar", "mi챕", "jue", "vie", "s찼b" ],
		weekHeader: "Semana",
		dateFormat: "y.mm.dd D",
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "."
	};
	
	datepicker.regional.vi = {
			closeText: "휂처ng",
			prevText: "Th찼ng tr튼沼쌵",
			nextText: "Th찼ng ti梳퓈 theo",
			currentText: "h척m nay",
			monthNames: [ "01","02","03","04","05","06",
			"07","08","09","10","11","12" ],
			monthNamesShort: [ "1","2","3","4","5","6",
			"7","8","9","10","11","12" ],
			dayNames: [ "Ch沼� Nh梳춗","Th沼� Hai","Th沼� Ba","Th沼� T튼","Th沼� N훱m","Th沼� S찼u","Th沼� B梳즭"  ],
			dayNamesShort: [ "(SU)","(MO)","(TU)","(WE)","(TH)","(FR)","(SA)" ],
			dayNamesMin: [ "SU","MO","TU","WE","TH","FR","SA" ],
			weekHeader: "Tu梳쬷",
			dateFormat: "y.mm.dd D",
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: true,
			yearSuffix: "."
		};
	
	switch(_languageCode) {
		case 'KO' :
			datepicker.setDefaults( datepicker.regional.ko );
			return datepicker.regional.ko;
			break;
		case 'EN' :
			datepicker.setDefaults( datepicker.regional.en );
			return datepicker.regional.en;
			break;
		case 'JA' :
			datepicker.setDefaults( datepicker.regional.ja );
			return datepicker.regional.ja;
			break;
		case 'CH' :
			datepicker.setDefaults( datepicker.regional.ch );
			return datepicker.regional.ch;
			break;
		case 'DE' :
			datepicker.setDefaults( datepicker.regional.de );
			return datepicker.regional.de;
			break;
		case 'FR' :
			datepicker.setDefaults( datepicker.regional.fr );
			return datepicker.regional.fr;
			break;
		case 'RU' :
			datepicker.setDefaults( datepicker.regional.ru );
			return datepicker.regional.ru;
			break;
		case 'ZH' :
			datepicker.setDefaults( datepicker.regional.zh );
			return datepicker.regional.zh;
		case 'ES' :
			datepicker.setDefaults( datepicker.regional.es );
			return datepicker.regional.es;
			break;
		case 'VI' :
			datepicker.setDefaults( datepicker.regional.vi );
			return datepicker.regional.vi;
			break;
	}

})
);

var _languageCode = $(location).attr('pathname').split('/')[3].toUpperCase(),
	_calendarLangs = {};

switch(_languageCode) {
	case 'KO' :
		_calendarLangs.J0001 = '�щ젰'; 
		_calendarLangs.J0002 = '媛��� ��'; 
		_calendarLangs.J0003 = '�ㅻ뒗 ��'; 
		_calendarLangs.J0004 = '�ㅼ쓬��'; 
		_calendarLangs.J0005 = '�댁쟾��';
		_calendarLangs.J0006 = '�좏깮��'; 
		_calendarLangs.J0007 = '�쒖옉�쇨낵 醫낅즺�� �좏깮��';
		_calendarLangs.J0008 = '醫낅즺�� �좏깮��';
		_calendarLangs.J0009 = '�쒖옉�� �좏깮��';
		break;
	case 'EN' :
		_calendarLangs.J0001 = 'Calendar'; 
		_calendarLangs.J0002 = 'Departure Date'; 
		_calendarLangs.J0003 = 'Return Date'; 
		_calendarLangs.J0004 = 'Next Month'; 
		_calendarLangs.J0005 = 'Previous Month';
		_calendarLangs.J0006 = 'Selected';
		_calendarLangs.J0007 = 'Start and end dates selected';
		_calendarLangs.J0008 = 'End date selected';
		_calendarLangs.J0009 = 'Start date selected';
		break;
	case 'JA' :
		_calendarLangs.J0001 = '�ャ꺃�녈���'; 
		_calendarLangs.J0002 = '孃�瓮�눣�뷸뿥'; 
		_calendarLangs.J0003 = '孃⑵러�븀쇇��'; 
		_calendarLangs.J0004 = '�ζ쐢'; 
		_calendarLangs.J0005 = '�띲겗��';
		_calendarLangs.J0006 = '�멩뒢歷덀겳';
		_calendarLangs.J0007 = '�뗥쭓�γ겏永귚틙�ι겦�욁걬';
		_calendarLangs.J0008 = '永귚틙�ι겦�욁걬';
		_calendarLangs.J0009 = '�뗥쭓�ι겦�욁걬';
		break;
	case 'CH' :
		_calendarLangs.J0001 = '�ε럣'; 
		_calendarLangs.J0002 = '�사쮮�ζ쐿'; 
		_calendarLangs.J0003 = '�욅쮮�ζ쐿'; 
		_calendarLangs.J0004 = '訝뗤릉��'; 
		_calendarLangs.J0005 = '訝듾릉��';
		_calendarLangs.J0006 = '藥꿴�됪떓';
		_calendarLangs.J0007 = '�됪떓凉�冶뗥뭽瀯볠씇�ζ쐿';
		_calendarLangs.J0008 = '�됪떓瀯볠씇�ζ쐿';
		_calendarLangs.J0009 = '�됪떓凉�冶뗦뿥��';
		break;
	case 'DE' :
		_calendarLangs.J0001 = 'Kalender'; 
		_calendarLangs.J0002 = 'Abflugdatum'; 
		_calendarLangs.J0003 = 'R체ckflugdatum'; 
		_calendarLangs.J0004 = 'N채chsten Monat'; 
		_calendarLangs.J0005 = 'Vorheriger Monat';
		_calendarLangs.J0006 = 'Ausgew채hlt';
		_calendarLangs.J0007 = 'Start- und Enddatum ausgew채hlt';
		_calendarLangs.J0008 = 'Enddatum ausgew채hlt';
		_calendarLangs.J0009 = 'Startdatum ausgew채hlt';
		break;
	case 'FR' :
		_calendarLangs.J0001 = 'Calendrier'; 
		_calendarLangs.J0002 = 'Date de d챕part'; 
		_calendarLangs.J0003 = 'Date de retour'; 
		_calendarLangs.J0004 = 'Le mois prochain'; 
		_calendarLangs.J0005 = 'Mois pr챕c챕dent';
		_calendarLangs.J0006 = 'S챕lectionn챕';
		_calendarLangs.J0007 = 'Dates de d챕but et de fin s챕lectionn챕es';
		_calendarLangs.J0008 = 'Date de fin s챕lectionn챕e';
		_calendarLangs.J0009 = 'Date de d챕but s챕lectionn챕e';
		break;
	case 'RU' :
		_calendarLangs.J0001 = '�逵剋筠戟畇逵��'; 
		_calendarLangs.J0002 = '�逵�逵 ��畇逵'; 
		_calendarLangs.J0003 = '�逵�逵 棘閨�逵�戟棘'; 
		_calendarLangs.J0004 = '� �剋筠畇���筠劇 劇筠���筠'; 
		_calendarLangs.J0005 = '��筠畇�畇��龜橘 劇筠���';
		_calendarLangs.J0006 = '��閨�逵戟棘';
		_calendarLangs.J0007 = '��閨�逵戟戟�筠 畇逵�� 戟逵�逵剋逵 龜 棘克棘戟�逵戟龜�';
		_calendarLangs.J0008 = '�逵�逵 棘克棘戟�逵戟龜� 勻�閨�逵戟逵';
		_calendarLangs.J0009 = '�逵�逵 戟逵�逵剋逵 勻�閨�逵戟逵';
		break;
	case 'ZH' :
		_calendarLangs.J0001 = '�ζ썓'; 
		_calendarLangs.J0002 = '�사쮮�ζ쐿'; 
		_calendarLangs.J0003 = '�욅쮮�ζ쐿'; 
		_calendarLangs.J0004 = '訝뗥�뗦쐢'; 
		_calendarLangs.J0005 = '訝듿�뗦쐢';
		_calendarLangs.J0006 = '藥꿴겦��';
		_calendarLangs.J0007 = '�멩뱡�뗥쭓�뚨탳�잍뿥��';
		_calendarLangs.J0008 = '�멩뱡永먩씇�ζ쐿';
		_calendarLangs.J0009 = '�멩뱡�뗥쭓�ζ쐿';
		break;
	case 'ES' :
		_calendarLangs.J0001 = 'Calendario'; 
		_calendarLangs.J0002 = 'Fecha de salida'; 
		_calendarLangs.J0003 = 'Fecha de llegada'; 
		_calendarLangs.J0004 = 'Pr처ximo mes'; 
		_calendarLangs.J0005 = 'Mes anterior';
		_calendarLangs.J0006 = 'Seleccionado'; 
		_calendarLangs.J0007 = 'Fechas de inicio y final seleccionadas';
		_calendarLangs.J0008 = 'Fecha de finalizaci처n seleccionada';
		_calendarLangs.J0009 = 'Fecha de inicio seleccionada';
		break;
	case 'VI' :
		_calendarLangs.J0001 = 'L沼땉h'; 
		_calendarLangs.J0002 = 'Ng횪y kh沼웙 h횪nh'; 
		_calendarLangs.J0003 = 'Ng횪y quay l梳죍'; 
		_calendarLangs.J0004 = 'Th찼ng ti梳퓈 theo'; 
		_calendarLangs.J0005 = 'Th찼ng tr튼沼쌵';
		_calendarLangs.J0006 = '휂찾 ch沼뛫';
		_calendarLangs.J0007 = 'Start and end dates selected';
		_calendarLangs.J0008 = 'End date selected';
		_calendarLangs.J0009 = 'Start date selected';
		break;
}

$.datepicker.setDefaults($.datepicker.regional[_languageCode.toLowerCase()]);

/*
* @author sy.lee
* @description 怨듯넻�덉씠�� �リ린 �⑥닔異붽� �쒓굅�쒖뿉 臾몄쓽�붾쭩!!
* @class shadow_layer / calendar_layer  <-- �덉빟�대옒��
*/
var layerAllClose = function(){
	$('.shadow_layer').hide();
	$('.calendar_layer').hide();
	$('.hdlayer_wrap').hide();
};

/*
* @author 		: sy.lee
* @description	: 怨듯넻�덉씠�� �щ젰遺�遺� �섏젙
* @version		: 0.1
* @history		:
*/
var closeCalendar = true;
function Calendar(param){
	'use strict';
	var build_ui = {
		$_this : $(param),											//�⑥닔�ㅽ뻾�� 留ㅺ컻蹂��섎� this�� ����
		createdCal : [],
		init : function(){
			this.$_this.each(function(){							//媛곴컖 this瑜� CALENDAR�� ���ν븯�� 諛곗뿴�� push
				var target = $(this);
				build_ui.createdCal.push(new CALENDAR(target));
			});
		}
	}
	var CALENDAR = function(_target){
		var owner = _target;										//諛쏆븘�� this瑜� ownwer�� ���ν븯�� �ъ슜
		owner._cal_wrap = $(owner).parents('.calendar_wrap'); 		//owner�� 媛� �꾨줈�쇳떚 �앹꽦 �� selector�� �곷�寃쎈줈濡� 媛곴컖 吏���
		owner._txt_wrap = owner._cal_wrap.find('.txt_round_trip'); 	//owner�� 媛� �꾨줈�쇳떚 �앹꽦 �� selector�� �곷�寃쎈줈濡� 媛곴컖 吏���
		owner._cal_layer = owner._cal_wrap.next('.calendar_layer'); //owner�� 媛� �꾨줈�쇳떚 �앹꽦 �� selector�� �곷�寃쎈줈濡� 媛곴컖 吏���
		owner._month_selector = owner._cal_layer.find('.calendar_top'); //owner�� 媛� �꾨줈�쇳떚 �앹꽦 �� selector�� �곷�寃쎈줈濡� 媛곴컖 吏���
		owner._cal_box = owner._cal_layer.find('.compareCalendar'); //owner�� 媛� �꾨줈�쇳떚 �앹꽦 �� selector�� �곷�寃쎈줈濡� 媛곴컖 吏���
		owner._btn_close = owner._cal_layer.find('.btn_cal_close'); //owner�� 媛� �꾨줈�쇳떚 �앹꽦 �� selector�� �곷�寃쎈줈濡� 媛곴컖 吏���
		owner._btn_refresh = owner._cal_layer.find('.cal_reset');   //owner�� 媛� �꾨줈�쇳떚 �앹꽦 �� selector�� �곷�寃쎈줈濡� 媛곴컖 吏���
		owner._subtitle = owner._cal_layer.find('.cal_status');   //owner�� 媛� �꾨줈�쇳떚 �앹꽦 �� selector�� �곷�寃쎈줈濡� 媛곴컖 吏���
		owner._label = owner._cal_wrap.find('.spot_place');			//owner�� 媛� �꾨줈�쇳떚 �앹꽦 �� selector�� �곷�寃쎈줈濡� 媛곴컖 吏���
		owner._btn_step = owner._cal_layer.find('.btn_step_wrap button'); //owner�� 媛� �꾨줈�쇳떚 �앹꽦 �� selector�� �곷�寃쎈줈濡� 媛곴컖 吏���
		owner._btn_calopen = owner.siblings('.calendar_focus'); 	//owner�� 媛� �꾨줈�쇳떚 �앹꽦 �� selector�� �곷�寃쎈줈濡� 媛곴컖 吏���
	var titleDay = false;

		owner.txt_round_click = function(){
			this._txt_wrap.on("click", function(){
				owner._cal_layer.show();
			});
		};
		owner.sibling_click = function(){
			owner._btn_calopen.on("click", function(){
				var _this = $(this).siblings('.datepicker');
				//owner.refresh();
				
				layerAllClose();							//�대젮�덈뒗 layer popup �꾩껜 �リ린
				owner._label.hide();
				owner.showLayer();
				var singleAttr = _this.attr('data-type');

				if(singleAttr == "single"){
					owner.singleCal();
				} else if (singleAttr == "single_checkin"){
					owner.singleCheckIn();
				} else if (singleAttr == "single_rev"){
					owner.single_revCal();
				} else if (singleAttr == "single_last"){
					owner.single_lastCal();
				} else if (singleAttr == "single_rev_mzP"){
					owner.single_revCal_mzP();
				} else if (singleAttr == "single_last_mzP"){
					owner.single_lastCal_mzP();
				} else if (singleAttr == "single_infinite"){
					owner.single_infiniteCal();
				} else if (singleAttr == "single_infinite_last"){
					owner.single_infinite_lastCal();
				} else if (singleAttr == "single_omission"){
					owner.single_omissionCal();
				} else if (singleAttr == "single_past"){
					owner.single_pastCal();
				} else if (singleAttr == "full"){
					owner.multiCal_full();
					owner._subtitle.text(_calendarLangs.J0002);
				} else if(singleAttr == "single_search"){
					owner.single_searchCal();
				} else if(singleAttr == "single_searchLast"){
					owner.single_searchLastCal();
				} else if(singleAttr == "multi_step"){
					owner.multiCal_step();
					owner._subtitle.text(_calendarLangs.J0002);
				} else if(singleAttr == "single_step"){
					owner.singleCal_step();
				}else{
					owner.multiCal();
					owner._subtitle.text(_calendarLangs.J0002);
				};
				
				if($(this).parents('.relative_calendar').length > 0) {
					owner._cal_layer.css({
						'left' : $('.container').offset().left -_this.offset().left + 'px',
						'top'  : _this.position().top + _this.outerHeight() + 'px'
					});
				}else{
					owner._cal_layer.css({
						'top' : _this.position().top + _this.outerHeight() + 'px'
					});
				}
			});
		};
		owner.showLayer = function(){								//.calendar_layer show湲곕뒫�� �섎뒗 硫붿냼�� �앹꽦
			this._cal_layer.show();
		};
		owner.closeLayer = function(){								//.calendar_layer �レ쓣 �� �대깽�� 諛쒖깮 硫붿냼�� �앹꽦
			if($(this).val().length > 0){
				owner._label.hide();								//異�/�꾩갑吏� label 留덊겕�� show hide
			}else {
				owner._label.show();
			}
			owner._cal_layer.hide();
			owner._cal_wrap.removeClass('on');
			owner.btnFocus();
//			owner._cal_box.datepicker( "destroy" );
		};
		owner.refresh = function(){									//�덈줈怨좎묠 踰꾪듉 �대┃�� �대깽�� 諛쒖깮 硫붿냼�� �앹꽦
			$(this).val('');													//input value 珥덇린��
			owner._txt_wrap.find('span').text('');
			owner._label.show();									//異�/�꾩갑吏� label 留덊겕�� show hide
			$(this).siblings('input[type="hidden"]').val('');	//Refresh�� hidden媛� 珥덇린��
			//owner._subtitle.text(_calendarLangs.J0002);
			owner._cal_box.datepicker( "destroy" );
			var singleAttr = $(this).attr('data-type');

			if(singleAttr == "single"){
				owner.singleCal();
			} else if (singleAttr == "single_checkin"){
				owner.singleCheckIn();
			} else if (singleAttr == "single_rev"){
				owner.single_revCal();
			} else if (singleAttr == "single_last"){
				owner.single_lastCal();
			} else if (singleAttr == "single_rev_mzP"){
				owner.single_revCal_mzP();
			} else if (singleAttr == "single_last_mzP"){
				owner.single_lastCal_mzP();
			} else if (singleAttr == "single_infinite"){
				owner.single_infiniteCal();
			} else if (singleAttr == "single_infinite_last"){
				owner.single_infinite_lastCal();
			} else if (singleAttr == "single_omission"){
				owner.single_omissionCal();
			} else if (singleAttr == "single_past"){
				owner.single_pastCal();
			} else if (singleAttr == "full"){
				owner.multiCal_full();
				owner._subtitle.text(_calendarLangs.J0002);
			} else if(singleAttr == "single_search"){
				owner.single_searchCal();
			} else if(singleAttr == "single_searchLast"){
				owner.single_searchLastCal();
			} else if(singleAttr == "multi_step"){
				owner.multiCal_step();
				owner._subtitle.text(_calendarLangs.J0002);
			} else if(singleAttr == "single_step"){
				owner.singleCal_step();
			}else{
				owner.multiCal();
				owner._subtitle.text(_calendarLangs.J0002);
			}
		}
//		redmine 5446
//		ex) <input type="hidden" id="departureDate1" value="20171124">
//		1. �뺣났
//		媛��붾궇 : departureDate1
//		�ㅻ뒗�� : arrivalDate1
//
//		2. �몃룄
//		媛��붾궇 : departureDate1
//
//		3. �ㅺ뎄媛�
//		ex) 珥� 3媛쒖쓽 �ъ젙�� 寃쎌슦
//		departureDate1, departureDate2, departureDate3

		//single datepicker
		owner.singleCal = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			if(owner._cal_wrap.find('[id^="departureDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'departureDate1',
					val: ''
				}));
			}
			
			//�붿꽑�� 諛뺤뒪 
			for (var i = 0; i < 13; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);
			
			
			this._cal_box.datepicker({
				showButtonPanel: false,
				numberOfMonths: 2,
				minDate: 0,
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date){
					owner._label.hide();
					_that.val(date);
					_that.startDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
					_that.data().startDate = _that.startDate;
					_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
					_that.next().trigger('textchange');
					$(this).datepicker('refresh');
					if(closeCalendar) {
						owner.closeLayer();
					}
				},
				beforeShowDay: function(date) {
					if(_that.startDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						if(date.getTime() == dateStart.getTime()){
							return [true, "startDay" ];
						}

					}
					return [true, ""];
				},
				afterShow: function(e){
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
					$(this).find('.startDay a').attr('title', _calendarLangs.J0006);
				}
			});
		}
		
		//singleCheckIn
		owner.singleCheckIn = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			if(owner._cal_wrap.find('[id^="departureDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'departureDate1',
					val: ''
				}));
			}
			
			//�붿꽑�� 諛뺤뒪 
			for (var i = 0; i < 13; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);
			
			
			this._cal_box.datepicker({
				showButtonPanel: false,
				numberOfMonths: 2,
				minDate: "-1D",
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date){
					owner._label.hide();
					_that.val(date);
					_that.startDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
					_that.data().startDate = _that.startDate;
					_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
					_that.next().trigger('textchange');
					$(this).datepicker('refresh');
					if(closeCalendar) {
						owner.closeLayer();
					}
				},
				beforeShowDay: function(date) {
					if(_that.startDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						if(date.getTime() == dateStart.getTime()){
							return [true, "startDay" ];
						}

					}
					return [true, ""];
				},
				afterShow: function(e){
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
					$(this).find('.startDay a').attr('title', _calendarLangs.J0006);
				}
			});
		}
		
		//single_omissionCal datepicker
		owner.single_omissionCal = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			if(owner._cal_wrap.find('[id^="departureDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'departureDate1',
					val: ''
				}));
			}
			
			//�붿꽑�� 諛뺤뒪 
			for (var i = -12; i < 1; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(12)').prop('selected',true);
			
			
			this._cal_box.datepicker({
				showButtonPanel: false,
				numberOfMonths: 2,
				minDate: "-12M",
				maxDate: "-3D",
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date){
					owner._label.hide();
					_that.val(date);
					_that.startDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
					_that.data().startDate = _that.startDate;
					_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
					_that.next().trigger('textchange');
					$(this).datepicker('refresh');
					if(closeCalendar) {
						owner.closeLayer();
					}
				},
				beforeShowDay: function(date) {
					if(_that.startDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						if(date.getTime() == dateStart.getTime()){
							return [true, "startDay" ];
						}

					}
					return [true, ""];
				},
				afterShow: function(e){
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
					$(this).find('.startDay a').attr('title', _calendarLangs.J0006);
				}
			});
		}
		
		//single_omissionCal datepicker �� -9D ����
		owner.single_pastCal = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			if(owner._cal_wrap.find('[id^="departureDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'departureDate1',
					val: ''
				}));
			}
			
			//�붿꽑�� 諛뺤뒪 
			for (var i = -12; i < 1; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(12)').prop('selected',true);
			
			
			this._cal_box.datepicker({
				showButtonPanel: false,
				numberOfMonths: 2,
				minDate: "-12M",
				maxDate: "-9D",
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date){
					owner._label.hide();
					_that.val(date);
					_that.startDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
					_that.data().startDate = _that.startDate;
					_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
					_that.next().trigger('textchange');
					$(this).datepicker('refresh');
					if(closeCalendar) {
						owner.closeLayer();
					}
				},
				beforeShowDay: function(date) {
					if(_that.startDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						if(date.getTime() == dateStart.getTime()){
							return [true, "startDay" ];
						}

					}
					return [true, ""];
				},
				afterShow: function(e){
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
					$(this).find('.startDay a').attr('title', _calendarLangs.J0006);
				}
			});
		}
		
		//single step(main) datepicker
		owner.singleCal_step = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			if(owner._cal_wrap.find('[id^="departureDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'departureDate1',
					val: ''
				}));
			}
			
			//�붿꽑�� 諛뺤뒪 
			for (var i = 0; i < 13; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);
			
			
			this._cal_box.datepicker({
				showButtonPanel: false,
				numberOfMonths: 2,
				minDate: 0,
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date){
					owner._label.hide();
					_that.val(date);
					_that.startDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
					_that.data().startDate = _that.startDate;
					_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
					_that.next().trigger('textchange');
					$(this).datepicker('refresh');
					owner._btn_step.removeClass('gray').addClass('red');
				},
				beforeShowDay: function(date) {
					if(_that.startDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						if(date.getTime() == dateStart.getTime()){
							return [true, "startDay" ];
						}

					}
					return [true, ""];
				},
				afterShow: function(e){
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
					$(this).find('.startDay a').attr('title', _calendarLangs.J0006);
				}
			});
		}

		//single datepicker rev calrendar (援щℓ�댁뿭 湲곌컙-�쒖옉 ; 12媛쒖썡 �댁쟾源뚯� 寃��됯���)
		owner.single_revCal = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			if(owner._cal_wrap.find('[id^="departureDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'departureDate1',
					val: ''
				}));
			}
			
			
			//�붿꽑�� 諛뺤뒪 
			for (var i = -12; i < 1; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);
			
			
			this._cal_box.datepicker({
				showButtonPanel: false,
				numberOfMonths: 2,
				minDate: "-12m",
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date){
					owner._label.hide();
					_that.val(date);
					_that.startDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
					_that.data().startDate = _that.startDate;
					_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
					_that.next().trigger('textchange');
					$(this).datepicker('refresh');
					if(closeCalendar) {
						owner.closeLayer();
					}
				},
				beforeShowDay: function(date) {
					if(_that.startDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						if(date.getTime() == dateStart.getTime()){
							return [true, "startDay" ];
						}

					}
					return [true, ""];
				},
				afterShow: function(e){
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
					$(this).find('.startDay a').attr('title', _calendarLangs.J0006);
				}
			});
		}

		//single datepicker last calendar
		owner.single_lastCal = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			if(owner._cal_wrap.find('[id^="arrivalDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'arrivalDate1',
					val: ''
				}));
			}
			
			//�붿꽑�� 諛뺤뒪 
			for (var i = -12; i < 1; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);
			
			
			this._cal_box.datepicker({
				showButtonPanel: false,
				numberOfMonths: 2,
				minDate: "-12m",
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date){
					owner._label.hide();
					var endDate;
					endDate = date;
					_that.val(endDate);
					_that.endDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
					_that.data().endDate = _that.endDate;
					_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
					_that.next().trigger('textchange');
					$(this).datepicker('refresh');
					if(closeCalendar) {
						owner.closeLayer();
					}
				},
				beforeShowDay: function(date) {
					if(_that.endDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.endDate);
						if(date.getTime() == dateStart.getTime()){
							return [true, "endDay" ];
						}

					}
					return [true, ""];
				},
				afterShow: function(e){
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
					$(this).find('.startDay a').attr('title', _calendarLangs.J0006);
				}
			});
		}



		//single datepicker rev calrendar 援щℓ�댁뿭 �섏씠吏� 20201203 �� 硫붽�議� �뚯냽 �쇰툝由ъ뀛媛� 異붽� �섏��듬땲�� 
		//  single_revCal �뚯뀡�� 蹂듭궗�섏뿬 single_revCal_mzP 留뚮뱾�덉쑝硫� �붿꽑�앸컯�ㅻ쭔 24濡� 蹂�寃쏀븯怨� 異붽��섏��듬땲��
		owner.single_revCal_mzP = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			if(owner._cal_wrap.find('[id^="departureDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'departureDate1',
					val: ''
				}));
			}
			
			
			//�붿꽑�� 諛뺤뒪 
			for (var i = -24; i < 1; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);
			
			
			this._cal_box.datepicker({
				showButtonPanel: false,
				numberOfMonths: 2,
				minDate: "-24m",
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date){
					owner._label.hide();
					_that.val(date);
					_that.startDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
					_that.data().startDate = _that.startDate;
					_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
					_that.next().trigger('textchange');
					$(this).datepicker('refresh');
					if(closeCalendar) {
						owner.closeLayer();
					}
				},
				beforeShowDay: function(date) {
					if(_that.startDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						if(date.getTime() == dateStart.getTime()){
							return [true, "startDay" ];
						}

					}
					return [true, ""];
				},
				afterShow: function(e){
					// �묎렐�� title �좏깮�� 異붽� 180531 JKJ
					$(this).find('.startDay a').attr('title', _calendarLangs.J0006);
				}
			});
		}

		//single datepicker last calendar
		owner.single_lastCal_mzP = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			if(owner._cal_wrap.find('[id^="arrivalDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'arrivalDate1',
					val: ''
				}));
			}
			
			//�붿꽑�� 諛뺤뒪 
			for (var i = -24; i < 1; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);
			
			
			this._cal_box.datepicker({
				showButtonPanel: false,
				numberOfMonths: 2,
				minDate: "-24m",
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date){
					owner._label.hide();
					var endDate;
					endDate = date;
					_that.val(endDate);
					_that.endDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
					_that.data().endDate = _that.endDate;
					_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
					_that.next().trigger('textchange');
					$(this).datepicker('refresh');
					if(closeCalendar) {
						owner.closeLayer();
					}
				},
				beforeShowDay: function(date) {
					if(_that.endDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.endDate);
						if(date.getTime() == dateStart.getTime()){
							return [true, "endDay" ];
						}

					}
					return [true, ""];
				},
				afterShow: function(e){
					// �묎렐�� title �좏깮�� 異붽� 180531 JKJ
					$(this).find('.startDay a').attr('title', _calendarLangs.J0006);
				}
			});
		}
		// 20201203 �섏젙肄붾뱶�� �ш린源뚯�  

		
		//single datepicker rev calrendar (援щℓ�댁뿭 湲곌컙-�쒖옉 ; 12媛쒖썡 �댁쟾源뚯� 寃��됯���)
		owner.single_infiniteCal = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			if(owner._cal_wrap.find('[id^="departureDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'departureDate1',
					val: ''
				}));
			}
			
			
			//�붿꽑�� 諛뺤뒪 
			for (var i = -360; i < 1; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);
			
			
			this._cal_box.datepicker({
				showButtonPanel: false,
				numberOfMonths: 2,
				//minDate: "-12m",
				maxDate: "0",
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date){
					owner._label.hide();
					_that.val(date);
					_that.startDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
					_that.data().startDate = _that.startDate;
					_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
					_that.next().trigger('textchange');
					$(this).datepicker('refresh');
					if(closeCalendar) {
						owner.closeLayer();
					}
				},
				beforeShowDay: function(date) {
					if(_that.startDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						if(date.getTime() == dateStart.getTime()){
							return [true, "startDay" ];
						}

					}
					return [true, ""];
				},
				afterShow: function(e){
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
					$(this).find('.startDay a').attr('title', _calendarLangs.J0006);
				}
			});
		}

		//single datepicker last calendar
		owner.single_infinite_lastCal = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			if(owner._cal_wrap.find('[id^="arrivalDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'arrivalDate1',
					val: ''
				}));
			}
			
			//�붿꽑�� 諛뺤뒪 
			for (var i = -360; i < 1; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);
			
			
			this._cal_box.datepicker({
				showButtonPanel: false,
				numberOfMonths: 2,
				//minDate: "-12m",
				maxDate: "0",
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date){
					owner._label.hide();
					var endDate;
					endDate = date;
					_that.val(endDate);
					_that.endDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
					_that.data().endDate = _that.endDate;
					_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
					_that.next().trigger('textchange');
					$(this).datepicker('refresh');
					if(closeCalendar) {
						owner.closeLayer();
					}
				},
				beforeShowDay: function(date) {
					if(_that.endDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.endDate);
						if(date.getTime() == dateStart.getTime()){
							return [true, "endDay" ];
						}

					}
					return [true, ""];
				},
				afterShow: function(e){
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
					$(this).find('.startDay a').attr('title', _calendarLangs.J0006);
				}
			});
		}

		// 湲곕궡 �좎떎臾� 議고쉶�먯꽌 �ъ슜
		owner.single_searchCal = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			var _that = $(this);
			if(owner._cal_wrap.find('[id^="departureDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'departureDate1',
					val: ''
				}));
			}
			//�붿꽑�� 諛뺤뒪 
			for (var i = -3; i < 1; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);

			//date 踰붿쐞 泥섎━=================================
			var $fromCal = $(".compareCalendar").eq(1);
			var fromDate = new Date();

			if($fromCal.html() != ""){
				fromDate = new Date($fromCal.datepicker('getDate'));
			}
			//=================================

			this._cal_box.datepicker({
				showButtonPanel: false,
				numberOfMonths: 2,
				minDate: "-3m",
				maxDate: fromDate,
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date){
					owner._label.hide();

					//date 踰붿쐞 泥섎━=================================
					if($fromCal.html() != ""){
						var toDate = new Date($(this).datepicker('getDate'));
						$fromCal.datepicker('option', 'minDate', toDate);
					}
					//=================================

					_that.val(date);
					_that.startDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
					_that.data().startDate = _that.startDate;
					_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
					_that.next().trigger('textchange');
					$(this).datepicker('refresh');
					if(closeCalendar) {
						owner.closeLayer();
					}
				},
				beforeShowDay: function(date) {
					if(_that.startDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						if(date.getTime() == dateStart.getTime()){
							return [true, "startDay" ];
						}

					}
					return [true, ""];
				},
				afterShow: function(e){
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
					$(this).find('.startDay a').attr('title', _calendarLangs.J0006);
				}
			});
		}

		owner.single_searchLastCal = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			if(owner._cal_wrap.find('[id^="arrivalDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'arrivalDate1',
					val: ''
				}));
			}
			
			//�붿꽑�� 諛뺤뒪 
			for (var i = -3; i < 1; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);
			
			//date 踰붿쐞 泥섎━=================================
			var $toCal = $(".compareCalendar").eq(0);
			var toDate = new Date();

			if($toCal.html() != ""){
				toDate = new Date($toCal.datepicker('getDate'));
			}else{
				toDate.setMonth(toDate.getMonth()-3);
			}
			//=================================

			this._cal_box.datepicker({
				showButtonPanel: false,
				numberOfMonths: 2,
				minDate: toDate,
				maxDate: "+0m",
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date){
					owner._label.hide();

					//date 踰붿쐞 泥섎━=================================
					if($toCal.html() != ""){
						var fromDate = new Date($(this).datepicker('getDate'));
						$toCal.datepicker('option', 'maxDate', fromDate);
					}
					//=================================

					var endDate;
					endDate = date;
					_that.val(endDate);
					_that.endDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
					_that.data().endDate = _that.endDate;
					_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
					_that.next().trigger('textchange');
					$(this).datepicker('refresh');
					if(closeCalendar) {
						owner.closeLayer();
					}
				},
				beforeShowDay: function(date) {
					if(_that.endDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.endDate);
						if(date.getTime() == dateStart.getTime()){
							return [true, "endDay" ];
						}

					}
					return [true, ""];
				},
				afterShow: function(e){
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
					$(this).find('.startDay a').attr('title', _calendarLangs.J0006);
				}
			});
		}// 湲곕궡 �좎떎臾� 議고쉶�먯꽌 �ъ슜 ��

		//multi datepicker
		owner.multiCal = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist, dataFocus='';
			if(owner._cal_wrap.find('[id^="departureDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'arrivalDate1',
					val: ''
				}));
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'departureDate1',
					val: ''
				}));
			}

			owner.txt_round_click();
			//owner.sibling_click();
			//�붿꽑�� 諛뺤뒪 
			for (var i = 0; i < 13; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);
//			
			
			this._cal_box.datepicker({
				numberOfMonths	: 2,
				showButtonPanel	: false,
				minDate			: 0,
				maxDate			: '+361D',
				dateFormat		: dateFormat,
				nextText		: _calendarLangs.J0004,
				prevText		: _calendarLangs.J0005,
				onSelect		: function(date, inst) {
					var prevDisabled = $(this).datepicker('getDate');// �좏깮�� �좎쭨 �댁쟾 �좎� �좏깮 諛⑹� 蹂��� ����
					var startDate = date;
					var endDate;
					owner._label.hide();
					//�щ젰 �좏깮�곸뿭 �쒖꽦��(�꾩떆)
					//if(_that.val().length > 0){
					if(_that.startDate != undefined && _that.endDate == undefined && $.datepicker.parseDate('yy/mm/dd', _that.startDate) <= $(this).datepicker('getDate')){ // 媛��붾궇 �낅젰
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						var dateCur = $(this).datepicker('getDate');

						startDate = _that.val().split(" -")[0];
						endDate = date;

						// 媛��� �� �좏깮�� �ロ옒.
						_that.data().endDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
						_that.endDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
						_that.next().next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))).trigger('textchange');; // 媛쒕컻履� �щ㎎
//						_that.next().next().trigger('textchange');
						_that.val(startDate + " - " + endDate);

						//異뷀썑 �섏젙 �좉굅
						if(owner._txt_wrap.length > 0 ){
							var owner__txt_wrap_findSpan	= owner._txt_wrap.find('span');
							owner__txt_wrap_findSpan.eq(2).text(" -  " + endDate.split(" ")[0]);
							owner__txt_wrap_findSpan.eq(3).text(endDate.split(" ")[1]);
						}
						if(closeCalendar) {
							owner.closeLayer();
						}

						dataFocus = 'end';
					
					} else if(_that.startDate != undefined && _that.endDate != undefined) { // �ㅻ뒗�� 媛��붾궇 紐⑤몢 �낅젰�쒗썑 �ъ엯�μ떆(�ㅻ뒗�좊��� �ㅼ떆 �낅젰)
						//owner._txt_wrap.find('p').text('');

						_that.startDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
						_that.data().startDate= _that.startDate; // input.data �쒖옉�좎쭨
						_that.endDate = undefined;
						_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))).trigger('textchange');; // 媛쒕컻履� �щ㎎
//						_that.next().trigger('textchange');
						owner._subtitle.text(_calendarLangs.J0003);
						//異뷀썑 �섏젙 �좉굅
						if(owner._txt_wrap.length > 0 ){
							var owner__txt_wrap_findSpan	= owner._txt_wrap.find('span');
							owner__txt_wrap_findSpan.eq(0).text(startDate.split(" ")[0]);
							owner__txt_wrap_findSpan.eq(1).text(startDate.split(" ")[1]);
						}
						_that.val(startDate);
						
						dataFocus = 'start';

					} else { // �ㅻ뒗�� �낅젰
						_that.startDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
						_that.data().startDate= _that.startDate; // input.data �쒖옉�좎쭨
						_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))).trigger('textchange');; // 媛쒕컻履� �щ㎎
//						_that.next().trigger('textchange');
						owner._subtitle.text(_calendarLangs.J0003);
						//異뷀썑 �섏젙 �좉굅
						if(owner._txt_wrap.length > 0 ){
							var owner__txt_wrap_findSpan	= owner._txt_wrap.find('span');
							owner__txt_wrap_findSpan.eq(0).text(startDate.split(" ")[0]);
							owner__txt_wrap_findSpan.eq(1).text(startDate.split(" ")[1]);
						}

						//�곗륫 �좏깮�� �ㅼ떆 洹몃━湲� �뚮Ц�� minDate �곹뼢�쇰줈 �쇱そ�쇰줈 �대룞�섎뒗 �꾩긽�� �덉쓬
//						 $(this).datepicker('option','minDate', prevDisabled);// �좏깮�� �좎쭨 �댁쟾 �좎� �좏깮 諛⑹�
						_that.val(startDate);
						
						dataFocus = 'start';
					}
					
				},
				beforeShowDay: function(date) {
					if(_that.startDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						//�곗륫 �좏깮�� �ㅼ떆 洹몃━湲� �뚮Ц�� minDate �곹뼢�쇰줈 �쇱そ�쇰줈 �대룞�섎뒗 �꾩긽�� �덉쓬 ==> �쒖옉�좎쭨蹂대떎 �댁쟾�쇨꼍�� 鍮꾪솢�깆쿂由�

						// if( dateStart.getTime() > date.getTime()){
						// 	return [false, "" ]; // �좏깮�좎쭨 �댁쟾 �� 鍮꾪솢�깊솕
						// }

						if(date.getTime() == dateStart.getTime()){ // �쒖옉��
							if(_that.endDate != undefined && date.getTime() == $.datepicker.parseDate('yy/mm/dd', _that.endDate).getTime()){
								return [true, "startDay endDay startDaySub" ];
							}
							return [true, "startDay startDaySub" ];
						}

					}
					if(_that.startDate ==undefined || _that.endDate == undefined){
						return [true, "" ];
					}
					var dateEnd = $.datepicker.parseDate('yy/mm/dd', _that.endDate);
					var inClass ='';
					//date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2))
					if(date.getTime() == dateEnd.getTime()){
						inClass = 'endDay'
					}else if(dateEnd && date >= dateStart && date <= dateEnd){
						inClass = 'dp-highlight';
					}
					return [true, inClass];
				},
				afterShow: function(e) {
					$(this).find('td[data-handler="selectDay"]').mouseenter(function(e) {
						e.preventDefault();
						
						if(_that.startDate == undefined || _that.endDate != undefined) {
							return;
						}
						var currentDate	= new Date($(this).attr('data-year')+"/"+(parseInt($(this).attr('data-month'))+1)+"/"+$(this).text());
						var selectedDate	= $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						if(selectedDate === null) {
							selectedDate = new Date();
						}
						var allTds = $(this).parents('div.compareCalendar').find('td[data-handler="selectDay"]');
						allTds.removeClass('dp-highlight');
						allTds.removeClass('endDay');
						var found = true;
						if(currentDate > selectedDate) {
							var flag_start_check = false;
							for(var i = 0; i < allTds.length; i++) {
								if(found) {
									if($(allTds[i]).hasClass('startDaySub'))
 										flag_start_check = true;
									
									if(flag_start_check)
										$(allTds[i]).addClass('dp-highlight');
								}
								if ($(allTds[i]).hasClass('ui-datepicker-today') || $(allTds[i]).hasClass('ui-datepicker-current-day')) {
									found = true;
								}
								if (allTds[i] == this) {
									$(allTds[i]).addClass('endDay');
									break;
								}
							}
						};
					});

					$(this).find('.ui-datepicker-calendar > tbody').mouseleave(function(e) {
						e.preventDefault();
						
						if( _that.startDate == undefined) {
							return;
						}
						var allTds = $(this).parents('div.compareCalendar').find('td[data-handler="selectDay"]');
						allTds.removeClass('dp-highlight');
						allTds.removeClass('endDay');

						var flag_start_check = false;
						if(_that.endDate != undefined) {
							var found = true;
							for(var i = 0; i < allTds.length; i++) {
								if(found) {
									if($(allTds[i]).hasClass('startDaySub'))
 										flag_start_check = true;
									
 									if(flag_start_check)
 										$(allTds[i]).addClass('dp-highlight');
								}
								if ($(allTds[i]).hasClass('ui-datepicker-current-day')) {
									found = false;
									$(allTds[i]).addClass('endDay');
									break;
									
								}
							}
						}
					});
					
		            if( dataFocus == 'start' ){
		            	$('.startDay a').focus();
		            }else if( dataFocus == 'end' ){
		            	//$('.endDay a').focus();
		            	$(this).parents('.layer_content').find('.btn_bottom_area .btn_floating').focus();
		            };
		            
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
		            if( $(this).find('.startDay').hasClass('endDay') ){
		            	$(this).find('.startDay a').attr('title', _calendarLangs.J0007);
		            }else{
						$(this).find('.endDay a').attr('title', _calendarLangs.J0008);
						$(this).find('.startDay a').attr('title', _calendarLangs.J0009);
		            };
		        }
			});
		}

		//multi datepicker
		owner.multiCal_full = function() {								// datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that		= $(this);
			var dateFormat	= _that.attr("data-dateFormat");			// input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist;
			if(owner._cal_wrap.find('[id^="departureDate"]').length == 0) {  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				
				$(this).after($('<input>', {
					type: 'hidden',
					id: 'arrivalDate1',
					val: ''
				}));
				$(this).after($('<input>', {
					type: 'hidden',
					id	: 'departureDate1',
					val	: ''
				}));
			}

			//�붿꽑�� 諛뺤뒪 
			for (var i = 0; i < 13; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);
			
			this._cal_box.datepicker({
				numberOfMonths: 2,
				showButtonPanel: false,
				minDate: 0,
				maxDate: '+361D',
				dateFormat: dateFormat,
				nextText: _calendarLangs.J0004,
				prevText: _calendarLangs.J0005,
				onSelect: function(date, inst){
					var prevDisabled = $(this).datepicker('getDate');// �좏깮�� �좎쭨 �댁쟾 �좎� �좏깮 諛⑹� 蹂��� ����
					var startDate = date;
					var endDate;
					owner._label.hide();
					//�щ젰 �좏깮�곸뿭 �쒖꽦��(�꾩떆)
					//if(_that.val().length > 0){
					if(_that.startDate != undefined && _that.endDate == undefined && $.datepicker.parseDate('yy/mm/dd', _that.startDate) <= $(this).datepicker('getDate')){ // 媛��붾궇 �낅젰
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						var dateCur = $(this).datepicker('getDate');
						
						/*if(dateStart.getTime() > dateCur.getTime()){
							console.log("�ㅻ뒗 �좎쭨媛� 媛��� �좎쭨蹂대떎 �꾩씪�낅땲��.");
							return false;
						}*/
						
						startDate = _that.val().split(" -")[0];
						endDate = date;
						
						// 媛��� �� �좏깮�� �ロ옒.
						_that.data().endDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
						_that.endDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
						_that.next().next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
						_that.next().next().trigger('textchange');
						_that.val(startDate + " - " + endDate);
						
						//異뷀썑 �섏젙 �좉굅
						if(owner._txt_wrap.length > 0 ){
							owner._txt_wrap.find('span').eq(2).text("  " + endDate.split(" ")[0]);
							owner._txt_wrap.find('span').eq(3).text(endDate.split(" ")[1]);
						}
						if(closeCalendar) {
							owner.closeLayer();
						}
						
					} else if(_that.startDate != undefined && _that.endDate != undefined) { // �ㅻ뒗�� 媛��붾궇 紐⑤몢 �낅젰�쒗썑 �ъ엯�μ떆(�ㅻ뒗�좊��� �ㅼ떆 �낅젰)
						owner._txt_wrap.find('span').text('');
						
						_that.startDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
						_that.data().startDate= _that.startDate; // input.data �쒖옉�좎쭨
						_that.endDate = undefined;
						_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
						_that.next().trigger('textchange');
						owner._subtitle.text(_calendarLangs.J0003);
						//異뷀썑 �섏젙 �좉굅
						if(owner._txt_wrap.length > 0 ){
							owner._txt_wrap.find('span').eq(0).text(startDate.split(" ")[0]);
							owner._txt_wrap.find('span').eq(1).text(startDate.split(" ")[1]);
						}
						_that.val(startDate);
						
					} else { // �ㅻ뒗�� �낅젰
						_that.startDate = $.datepicker.formatDate("yy/mm/dd",new Date($(this).datepicker('getDate')));
						_that.data().startDate= _that.startDate; // input.data �쒖옉�좎쭨
						_that.next().val($.datepicker.formatDate("yymmdd",new Date($(this).datepicker('getDate')))); // 媛쒕컻履� �щ㎎
						_that.next().trigger('textchange');
						owner._subtitle.text(_calendarLangs.J0003);
						//異뷀썑 �섏젙 �좉굅
						if(owner._txt_wrap.length > 0 ){
							owner._txt_wrap.find('span').eq(0).text(startDate.split(" ")[0]);
							owner._txt_wrap.find('span').eq(1).text(startDate.split(" ")[1]);
						}
						
						//�곗륫 �좏깮�� �ㅼ떆 洹몃━湲� �뚮Ц�� minDate �곹뼢�쇰줈 �쇱そ�쇰줈 �대룞�섎뒗 �꾩긽�� �덉쓬
//						 $(this).datepicker('option','minDate', prevDisabled);// �좏깮�� �좎쭨 �댁쟾 �좎� �좏깮 諛⑹�
						_that.val(startDate);
					}
				},
				beforeShowDay: function(date) {
					if(_that.startDate !=undefined ){
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						//�곗륫 �좏깮�� �ㅼ떆 洹몃━湲� �뚮Ц�� minDate �곹뼢�쇰줈 �쇱そ�쇰줈 �대룞�섎뒗 �꾩긽�� �덉쓬 ==> �쒖옉�좎쭨蹂대떎 �댁쟾�쇨꼍�� 鍮꾪솢�깆쿂由�

						// if( dateStart.getTime() > date.getTime()){
						// 	return [false, "" ]; // �좏깮�좎쭨 �댁쟾 �� 鍮꾪솢�깊솕
						// }

						if(date.getTime() == dateStart.getTime()){ // �쒖옉��
							if(_that.endDate != undefined && date.getTime() == $.datepicker.parseDate('yy/mm/dd', _that.endDate).getTime()){
								return [true, "startDay endDay startDaySub" ];
							}
							return [true, "startDay startDaySub" ];
						}

					}
					if(_that.startDate ==undefined || _that.endDate == undefined){
						return [true, "" ];
					}
					var dateEnd = $.datepicker.parseDate('yy/mm/dd', _that.endDate);
					var inClass ='';
					//date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2))
					if(date.getTime() == dateEnd.getTime()){
						inClass = 'endDay'
					}else if(dateEnd && date >= dateStart && date <= dateEnd){
						inClass = 'dp-highlight';
					}
					return [true, inClass];
				},
				afterShow: function(e) {

					$(this).find('td[data-handler="selectDay"]').mouseenter(function(e) {
						e.preventDefault();
						if( _that.startDate == undefined ||  _that.endDate != undefined) {
							return;
						}
						var currentDate = new Date($(this).attr('data-year')+"/"+(parseInt($(this).attr('data-month'))+1)+"/"+$(this).text());
						var selectedDate = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						if (selectedDate === null) {
							selectedDate = new Date();
						}
						var allTds = $(this).parents('div.compareCalendar').find('td[data-handler="selectDay"]');
						allTds.removeClass('dp-highlight');
						allTds.removeClass('endDay');
						var found = true;
						if (currentDate > selectedDate) {
							var flag_start_check = false;
							for (var i = 0; i < allTds.length; i++) {
								if (found) {
									if($(allTds[i]).hasClass('startDaySub'))
 										flag_start_check = true;
									
									if(flag_start_check)
										$(allTds[i]).addClass('dp-highlight');
								}
								if ($(allTds[i]).hasClass('ui-datepicker-today') || $(allTds[i]).hasClass('ui-datepicker-current-day')) {
									found = true;
								}
								if (allTds[i] == this) {
									$(allTds[i]).addClass('endDay');
									break;
								}
							}
						}
					});

					$(this).find('.ui-datepicker-calendar > tbody').mouseleave(function(e) {
						e.preventDefault();
						if( _that.startDate == undefined) {
							return;
						}
						var allTds = $(this).parents('div.compareCalendar').find('td[data-handler="selectDay"]');
						allTds.removeClass('dp-highlight');
						allTds.removeClass('endDay');

						var flag_start_check = false;
						if( _that.endDate != undefined){
							var found = true;
							for(var i = 0; i < allTds.length; i++) {
								if(found) {
									if($(allTds[i]).hasClass('startDaySub'))
 										flag_start_check = true;

 									if(flag_start_check)
 										$(allTds[i]).addClass('dp-highlight');
								}
								if ($(allTds[i]).hasClass('ui-datepicker-current-day')) {
									found = false;
									$(allTds[i]).addClass('endDay');
									break;
									
								}
							}
						}

					});

		            
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
		            if( $(this).find('.startDay').hasClass('endDay') ){
		            	$(this).find('.startDay a').attr('title', _calendarLangs.J0007);
		            }else{
						$(this).find('.endDay a').attr('title', _calendarLangs.J0008);
						$(this).find('.startDay a').attr('title', _calendarLangs.J0009);
		            };
				}
			});
		}
		
		//multiCal_step (for main)
		owner.multiCal_step = function(){								//datepicker �쎌엯�섎뒗 硫붿냼�� �앹꽦
			var _that = $(this);
			var dateFormat = _that.attr("data-dateFormat");			//input.datepicker �� data �띿꽦 媛��몄� 蹂��� ����
			var monthlist, dataFocus='';
			if(owner._cal_wrap.find('[id^="departureDate"]').length == 0){  // input hidden �앹꽦
				console.log('hidden �앹꽦...');
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'arrivalDate1',
					val: ''
				}));
				$(this).after( $('<input>', {
					type: 'hidden',
					id: 'departureDate1',
					val: ''
				}));
			}

			owner.txt_round_click();
			//owner.sibling_click();
			//�붿꽑�� 諛뺤뒪 
			for (var i = 0; i < 13; i++) {
				monthlist += "<option value='" + moment().add(i, 'M').format('MM/DD/YYYY') + "'> " + moment().add(i, 'M').format('YYYY.MM') + "</option>";
			}
			this._month_selector.find('select').html(monthlist);
			this._month_selector.find('option:eq(0)').prop('selected',true);
//			
			
			this._cal_box.datepicker({
				numberOfMonths	: 2,
				showButtonPanel	: false,
				minDate			: 0,
				maxDate			: '+361D',
				dateFormat		: dateFormat,
				nextText		: _calendarLangs.J0004,
				prevText		: _calendarLangs.J0005,
				onSelect		: function(date, inst) {
					var $onSelect_this			= $(this);
					var jsOnSelect_this_getDate	= $onSelect_this.datepicker('getDate');				// �좏깮�� �좎쭨 �댁쟾 �좎� �좏깮 諛⑹� 蹂��� ����
//					$onSelect_this.datepicker('option', 'minDate', jsOnSelect_this_getDate);		// �좏깮�� �좎쭨 �댁쟾 �좎� �좏깮 諛⑹�
					
					var startDate = date;
					var endDate;
					owner._label.hide();
					
					// �щ젰 �좏깮�곸뿭 �쒖꽦��(�꾩떆)
					// if(_that.val().length > 0) {
					if(_that.startDate != undefined && _that.endDate == undefined && $.datepicker.parseDate('yy/mm/dd', _that.startDate) <= $(this).datepicker('getDate')){ // 媛��붾궇 �낅젰
//						$onSelect_this.datepicker('option', 'minDate', -1);							// �좏깮�� �좎쭨 �댁쟾 �좎� �좏깮 諛⑹� �댁젣
						
						var dateStart	= $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						var dateCur		= jsOnSelect_this_getDate;
						
						/*if(dateStart.getTime() > dateCur.getTime()) {
							console.log("�ㅻ뒗 �좎쭨媛� 媛��� �좎쭨蹂대떎 �꾩씪�낅땲��.");
							return false;
						}*/
						
						startDate	= _that.val().split(" -")[0];
						endDate		= date;
						
						// 媛��� �� �좏깮�� �ロ옒.
						_that.data().endDate	= $.datepicker.formatDate("yy/mm/dd", new Date(jsOnSelect_this_getDate));
						_that.endDate			= $.datepicker.formatDate("yy/mm/dd", new Date(jsOnSelect_this_getDate));
						
						// 媛쒕컻履� �щ㎎
						_that.next().next().val($.datepicker.formatDate("yymmdd", new Date(jsOnSelect_this_getDate)))
										   .trigger('textchange');
						_that.val(startDate + " - " + endDate);

						//異뷀썑 �섏젙 �좉굅
						if(owner._txt_wrap.length > 0 ) {
							var owner__txt_wrap_findSpan	= owner._txt_wrap.find('span');
							owner__txt_wrap_findSpan.eq(2).text(" -  " + endDate.split(" ")[0]);
							owner__txt_wrap_findSpan.eq(3).text(endDate.split(" ")[1]);
						}
						owner._btn_step.removeClass('gray').addClass('red');
						dataFocus = 'end';

					} else if(_that.startDate != undefined && _that.endDate != undefined) { // �ㅻ뒗�� 媛��붾궇 紐⑤몢 �낅젰�쒗썑 �ъ엯�μ떆(�ㅻ뒗�좊��� �ㅼ떆 �낅젰)
						var owner__txt_wrap_findSpan	= owner._txt_wrap.find('span');
						owner__txt_wrap_findSpan.text('');

						_that.startDate			= $.datepicker.formatDate("yy/mm/dd", new Date(jsOnSelect_this_getDate));
						_that.data().startDate	= _that.startDate; // input.data �쒖옉�좎쭨
						_that.endDate			= undefined;
						
						// 媛쒕컻履� �щ㎎
						_that.next().val($.datepicker.formatDate("yymmdd", new Date(jsOnSelect_this_getDate)))
									.trigger('textchange');
						owner._subtitle.text(_calendarLangs.J0003);
						// 異뷀썑 �섏젙 �좉굅
						if(owner._txt_wrap.length > 0 ) {
							owner__txt_wrap_findSpan.eq(0).text(startDate.split(" ")[0]);
							owner__txt_wrap_findSpan.eq(1).text(startDate.split(" ")[1]);
						}
						_that.val(startDate);
						owner._btn_step.removeClass('red').addClass('gray');
						dataFocus = 'start';
					} else { // �ㅻ뒗�� �낅젰
						_that.startDate			= $.datepicker.formatDate("yy/mm/dd",new Date(jsOnSelect_this_getDate));
						_that.data().startDate	= _that.startDate; // input.data �쒖옉�좎쭨
						
						// 媛쒕컻履� �щ㎎
						_that.next().val($.datepicker.formatDate("yymmdd",new Date(jsOnSelect_this_getDate)))
									.trigger('textchange');
						owner._subtitle.text(_calendarLangs.J0003);
						// 異뷀썑 �섏젙 �좉굅
						if(owner._txt_wrap.length > 0 ) {
							var owner__txt_wrap_findSpan	= owner._txt_wrap.find('span');
							owner__txt_wrap_findSpan.eq(0).text(startDate.split(" ")[0]);
							owner__txt_wrap_findSpan.eq(1).text(startDate.split(" ")[1]);
						}

						// �곗륫 �좏깮�� �ㅼ떆 洹몃━湲� �뚮Ц�� minDate �곹뼢�쇰줈 �쇱そ�쇰줈 �대룞�섎뒗 �꾩긽�� �덉쓬
//						 $onSelect_this.datepicker('option','minDate', jsOnSelect_this_getDate);	// �좏깮�� �좎쭨 �댁쟾 �좎� �좏깮 諛⑹�
						_that.val(startDate);
						dataFocus = 'start';
					}

					
				},
				beforeShowDay	: function(date) {
					if(_that.startDate != undefined) {
						var dateStart = $.datepicker.parseDate('yy/mm/dd', _that.startDate);
						//�곗륫 �좏깮�� �ㅼ떆 洹몃━湲� �뚮Ц�� minDate �곹뼢�쇰줈 �쇱そ�쇰줈 �대룞�섎뒗 �꾩긽�� �덉쓬 ==> �쒖옉�좎쭨蹂대떎 �댁쟾�쇨꼍�� 鍮꾪솢�깆쿂由�

						 /*if( dateStart.getTime() > date.getTime()){
						 	return [false, "" ]; // �좏깮�좎쭨 �댁쟾 �� 鍮꾪솢�깊솕
						 }*/

						if(date.getTime() == dateStart.getTime()){ // �쒖옉��
							if(_that.endDate != undefined && date.getTime() == $.datepicker.parseDate('yy/mm/dd', _that.endDate).getTime()){
								return [true, "startDay endDay startDaySub" ];
							}
							return [true, "startDay startDaySub" ];
						}

					}
					if(_that.startDate == undefined || _that.endDate == undefined) {
						return [true, "" ];
					}
					var dateEnd = $.datepicker.parseDate('yy/mm/dd', _that.endDate);
					var inClass = '';
					//date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2))
					if(date.getTime() == dateEnd.getTime()) {
						inClass = 'endDay'
					} else if(dateEnd && date >= dateStart && date <= dateEnd) {
						inClass = 'dp-highlight';
					}
					return [true, inClass];
				},
				afterShow		: function(e) {
					$(this).find('td[data-handler="selectDay"]').mouseenter(function(e) {
						e.preventDefault();
						
						if ( !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) ) {
						    return false;
					    }else{
							
							if(_that.startDate == undefined || _that.endDate != undefined) {
								return;
							}
							var currentDate	= new Date($(this).attr('data-year')+"/"+(parseInt($(this).attr('data-month'))+1)+"/"+$(this).text());
							var selectedDate	= $.datepicker.parseDate('yy/mm/dd', _that.startDate);
							if(selectedDate === null) {
								selectedDate = new Date();
							}
							var allTds = $(this).parents('div.compareCalendar').find('td[data-handler="selectDay"]');
							allTds.removeClass('dp-highlight');
							allTds.removeClass('endDay');
							var found = true;
							if(currentDate > selectedDate) {
								var flag_start_check = false;
								for(var i = 0; i < allTds.length; i++) {
									if(found) {
										if($(allTds[i]).hasClass('startDaySub'))
	 										flag_start_check = true;
										
										if(flag_start_check)
											$(allTds[i]).addClass('dp-highlight');
									}
									if ($(allTds[i]).hasClass('ui-datepicker-today') || $(allTds[i]).hasClass('ui-datepicker-current-day')) {
										found = true;
									}
									if (allTds[i] == this) {
										$(allTds[i]).addClass('endDay');
										break;
									}
								}
							}
						}
					});

					$(this).find('.ui-datepicker-calendar > tbody').mouseleave(function(e) {
						e.preventDefault();
						
						if( _that.startDate == undefined) {
							return;
						}
						var allTds = $(this).parents('div.compareCalendar').find('td[data-handler="selectDay"]');
						allTds.removeClass('dp-highlight');
						allTds.removeClass('endDay');

						var flag_start_check = false;
						if(_that.endDate != undefined) {
							var found = true;
							for(var i = 0; i < allTds.length; i++) {
								if(found) {
									if($(allTds[i]).hasClass('startDaySub'))
 										flag_start_check = true;
									
 									if(flag_start_check)
 										$(allTds[i]).addClass('dp-highlight');
								}
								if ($(allTds[i]).hasClass('ui-datepicker-current-day')) {
									found = false;
									$(allTds[i]).addClass('endDay');
									break;
									
								}
							}
						}
					});

					if ( dataFocus == 'start' ){
						$(this).find('.startDay a').focus();
					}else if ( dataFocus == 'end' ){
						$(this).siblings('.btn_cal_close').focus();
					};
					
		            // �묎렐�� title �좏깮�� 異붽� 180531 JKJ
		            if( $(this).find('.startDay').hasClass('endDay') ){
		            	$(this).find('.startDay a').attr('title', _calendarLangs.J0007);
		            }else{
						$(this).find('.endDay a').attr('title', _calendarLangs.J0008);
						$(this).find('.startDay a').attr('title', _calendarLangs.J0009);
		            };
				}
			});
		}
		owner.btnFocus = function(){
			owner._btn_calopen.focus();
		};
		owner.eventBinder = function(){						//�대깽�� �� 怨녹뿉�� �쒖뼱�섎뒗 硫붿냼�� �앹꽦

			this.on('focus', function(){
				var singleAttr = $(this).attr('data-type');
				layerAllClose();							//�대젮�덈뒗 layer popup �꾩껜 �リ린
				owner._label.hide();
				owner.showLayer();
				if(singleAttr == "single"){
					owner.singleCal();
				} else if (singleAttr == "single_checkin"){
					owner.singleCheckIn();
				} else if (singleAttr == "single_rev"){
					owner.single_revCal();
				} else if (singleAttr == "single_last"){
					owner.single_lastCal();
				} else if (singleAttr == "single_rev_mzP"){
					owner.single_revCal_mzP();
				} else if (singleAttr == "single_last_mzP"){
					owner.single_lastCal_mzP();
				} else if (singleAttr == "single_infinite"){
					owner.single_infiniteCal();
				} else if (singleAttr == "single_infinite_last"){
					owner.single_infinite_lastCal();
				} else if (singleAttr == "single_omission"){
					owner.single_omissionCal();
				} else if (singleAttr == "single_past"){
					owner.single_pastCal();
				} else if (singleAttr == "full"){
					owner.multiCal_full();
					owner._subtitle.text(_calendarLangs.J0002);
				} else if(singleAttr == "single_search"){
					owner.single_searchCal();
				} else if(singleAttr == "single_searchLast"){
					owner.single_searchLastCal();
				}else if(singleAttr == "multi_step"){
					owner.multiCal_step();
					owner._subtitle.text(_calendarLangs.J0002);
				} else if(singleAttr == "single_step"){
					owner.singleCal_step();
				}else{
					owner.multiCal();
					owner._subtitle.text(_calendarLangs.J0002);
				}
				// var today = owner._cal_box.find('.ui-datepicker-today');
				// var linkToday = today.find('a');
				// linkToday.append('<em class="txt_today">�ㅻ뒛</em>');

				//171124 異붽� lyr
				if($(this).parents('.relative_calendar').length > 0) {
					owner._cal_layer.css({
						'left' : $('.container').offset().left - $(this).offset().left + 'px',
						'top'  : $(this).position().top + $(this).outerHeight() + 'px'
					});
				}else{
					owner._cal_layer.css({
						'top' : $(this).position().top + $(this).outerHeight() + 'px'
					});
				}
			});
			this.on('focusout', function(){
				var singleAttr = $(this).attr('data-type');
				if(singleAttr == "single"){
					if(owner.val().trim()==""){
						owner._label.show();
					}
				}else{
					if(owner._txt_wrap.text().trim()==""){
						owner._label.show();
					}
				}
				
			});
			owner._btn_close.on('click', function(){
				owner.closeLayer();
				owner.btnFocus();
			});
			owner._btn_refresh.on('click', function(){
				owner.refresh();
			});
			owner._month_selector.find('select').on('change', function(){
				owner._cal_box.datepicker( "setDate", $.datepicker.formatDate('y.mm.dd D', new Date($(this).val()) ));
			});
			owner._btn_step.on('click', function(){
				//main  �ㅻ쭏�몄“��
				if($(this).hasClass('red')){

					// owner.closeLayer(); //�リ린異⑸룎濡� �⑥닔 蹂꾨룄泥섎━
					if($(this).val().length > 0){
						owner._label.hide();								//異�/�꾩갑吏� label 留덊겕�� show hide
					}else {
						owner._label.show();
					}
					owner._cal_wrap.removeClass('on');
					owner.btnFocus();

					$('#psng').focus();
				}
			});
		}
		
		owner.eventDestroy = function(){
			//TODO
			owner.refresh();
			owner._cal_box.datepicker( "destroy" );
			owner._btn_step.removeClass('red').addClass('gray');
			owner.closeLayer();
			secFoldTrigger();
		}
		owner.init = function(){
			owner.eventBinder();									//�대깽�� 諛쒖깮 硫붿냼�� �ㅽ뻾
			owner.sibling_click();
		};
		owner.init();
		return owner;
	}
	
	
	
	build_ui.init();
	return build_ui;
	

}

var calc1 = new Calendar('.datepicker');
// key event 留됯린
$(document).on('keydown', '.datepicker', function(event){
	var code = event.keyCode;
	if((window.event.keyCode == 13 || event.keyCode == 9)){
		
	}else {
		return false;
	}
});

// �대떦�� 留덉�留됱썡 怨꾩궛
function getYearLastMonth(date, flag) {
	var tmp	= new Date(parseInt(date.substring(0,4),10), 0, 0);
	var result = tmp.getMonth()+1;

	if (flag != null) {
		result = "" + result;
		if (result.length == 1) result = "0" + result;
	}

	return result;
}

// �대떦�� 留덉�留됱씪 怨꾩궛
function getMonthLastDay(date) {
	return (new Date(Number(date.substring(0,4)), Number(date.substring(4,6)), 0)).getDate();
}


/**
 * Date: 2013.10.28
 * Desc: �뚮씪誘명꽣濡� 諛쏆� �쇱옄�� 媛� �묒듅媛� ���낅퀎 �섏씠�� 理쒕��쇱옄�� 理쒖냼�쇱옄瑜� �뚮젮以� 
 * getPaxAgeLimitDate("20140102", "ADT", "I") �� ret.minDate = "19140131", ret.maxDate = "20010102"
 */
var getPaxAgeLimitDate = function (targetDate, paxType, domIntType) {
	
	var ret = {};
	
	var MAX_CHD_AGE = domIntType == "I" ? 12 : 13;
	
	var tmpDate = null;
	
	if (paxType == "ADT") { 
		ret.maxDate = addDate("yyyy", -MAX_CHD_AGE, targetDate, "");

		tmpDate = addDate("yyyy", -100, targetDate, "");
		tmpDate = addDate("d", 1, tmpDate, "");
		
		var maxDay = getMonthLastDay(tmpDate);
		ret.minDate = tmpDate.substring(0, 6) + String(maxDay);
	} else if (paxType == "CHD") {
		ret.maxDate = addDate("yyyy", -2, targetDate, "");
		
		tmpDate = addDate("yyyy", -MAX_CHD_AGE, targetDate, "");
		ret.minDate = addDate("d", 1, tmpDate, "");
	} else { 
		ret.maxDate = targetDate;
		
		tmpDate = addDate("yyyy", -2, targetDate, "");
		ret.minDate = addDate("d", 1, tmpDate, "");
	}
	
	return ret;
};




// �ㅻ뒛 �쇱옄 諛섑솚 - yyyyMMdd
function getCurrentDate() {
	var current = new Date();
	
	var year = current.getFullYear();
	var month = current.getMonth()+1;
	var day = current.getDate();
	
	if (month < 10) {
		month = "0" + month;
	}
	if (day < 10) {
		day = "0" + day;
	}
	
	return "" + year + month + day;
}

// �꾩옱 �쒓컙 諛섑솚 - yyyyMMddHHmmSS
function getCurrentTime() {
	var current = new Date();
	
	var year = current.getFullYear();
	var month = current.getMonth()+1;
	var day = current.getDate();
	var hour = current.getHours();
	var min = current.getMinutes();
	var sec = current.getSeconds();
	
	if (month < 10) {
		month = "0" + month;
	}
	if (day < 10) {
		day = "0" + day;
	}
	if (hour < 10) {
		hour = "0" + hour;
	}
	if (min < 10) {
		min = "0" + min;
	}
	if (sec < 10) {
		sec = "0" + sec;
	}
	
	return "" + year + month + day + hour + min + sec;
}

//2012.11.28
//bdlee 
//�ㅻ뒛 �쇱옄 諛섑솚 - yyyy-MM-dd
function getToday() {
	var current = new Date();
	
	var year = current.getFullYear();
	var month = current.getMonth()+1;
	var day = current.getDate();
	
	if (month < 10) {
		month = "0" + month;
	}
	if (day < 10) {
		day = "0" + day;
	}
	return year + "-" + month +"-"+ day;
}

//�뱀젙 �쇱옄�� �붿씪�� �レ옄濡� 諛섑솚
function getDayNum(dateStr) {
	var day;
	
	if (dateStr != undefined) {
		var yyyymmdd = dateStr.replace(/-/g, "");

	    var yyyy     = yyyymmdd.substr(0,4);
	    var mm       = yyyymmdd.substr(4,2);
	    var dd       = yyyymmdd.substr(6,2);
	    var dateObj  = new Date(yyyy, mm - 1, dd);
	    
	    day = dateObj.getDay();
	} else {
		day = "";
	}
    
    return day;
}

//�뱀젙 �쇱옄�� �붿씪 議고쉶*(�몄뼱蹂�)
function getDayByLang(dateStr, lang) {
	var day = "";
	var week;
	if(lang == "ko" || lang == "KO"){
		week     = new Array("\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0");
	} else if(lang == "en" || lang == "EN"){
		week     = new Array("SU", "MO", "TU", "WE", "TH", "FR", "SA");
	} else if(lang == "ja" || lang == "JA"){
		//week     = new Array("��", "��", "��", "麗�", "��", "甸�", "��");
		week     = new Array("\u65E5","\u6708","\u706B","\u6C34","\u6728","\uF90A","\u571F");
	} else if(lang == "ch" || lang == "CH"){
		//week     = new Array("�ⓩ뿥", "�ⓧ�", "�ⓧ틠", "�ⓧ툒", "�ⓨ썪", "�ⓧ틪", "�ⓨ뀷");
		week     = new Array("\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D");
	} else if(lang == "ru" || lang == "RU"){
		//week     = new Array("�棘�克�",  "�棘戟", "��", "鬼�", "槻筠�", "���",  "鬼�閨閨");
		week     = new Array("\u0412\u043E\u0441\u043A\u0440","\u041F\u043E\u043D","\u0412\u0442","\u0421\u0440","\u0427\u0435\u0442","\u041F\u044F\u0442","\u0421\u0443\u0431\u0431");
	} else if(lang == "de" || lang == "DE"){
		week     = new Array("SO","MO","DI","MI","DO","FR","SA");
	} else if(lang == "fr" || lang == "FR"){
		week     = new Array("DI","LU","MA","ME","JE","VE","SA");
	} else if(lang == "zh" || lang == "ZH"){
		week     = new Array("\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\uf9d1");
	} else if(lang == "es" || lang == "ES"){
		//week = new Array(dom, lun, mar, mi챕, jue, vie, s찼b);
		week     = new Array("dom","lun","mar","\u006d\u0069\u00e9","jue","vie","\u0073\u00e1\u0062");
	}else if(lang == "vi" || lang == "VI"){ //踰좏듃�⑥뼱 異붽�
		week = new Array("Ch沼� Nh梳춗", "th沼� hai", "Th沼� Ba", "Th沼� T튼", "th沼� n훱m", "Th沼� S찼u", "th沼� b梳즭");
	}
	
	if (dateStr != undefined) {
		var yyyymmdd = dateStr.replace(/-/g, "");

	    var yyyy     = yyyymmdd.substr(0,4);
	    var mm       = yyyymmdd.substr(4,2);
	    var dd       = yyyymmdd.substr(6,2);
	    var dateObj  = new Date(yyyy, mm - 1, dd);
	    
	    day = week[dateObj.getDay()];
	}
    
    return day;
}

// �섏씠 怨꾩궛
function getAge(baseDate, birthDate) {
	var result = parseInt(baseDate.substring(0,4)) - parseInt(birthDate.substring(0,4)) - 1;
	if (parseInt(baseDate.substring(4,8)) >= parseInt(birthDate.substring(4,8))) {
		result++;
	}
	
	return result;
}

// 李⑥씠 �쒓컙 怨꾩궛
function getDifferentTime(firstDate, secondDate, changeType) {
	
	if (firstDate.length == 8) {
		firstDate += "000000";
	}
	if (secondDate.length == 8) {
		secondDate += "000000";
	}
	
	var firstDateObject = new Date(firstDate.substring(0,4), parseInt(firstDate.substring(4,6),10) - 1, firstDate.substring(6,8), firstDate.substring(8,10), firstDate.substring(10,12), firstDate.substring(12,14)).valueOf();
	var secondDateObject = new Date(secondDate.substring(0,4), parseInt(secondDate.substring(4,6),10) - 1, secondDate.substring(6,8), secondDate.substring(8,10), secondDate.substring(10,12), secondDate.substring(12,14)).valueOf();
	
	var differentTime = secondDateObject - firstDateObject;
	var differentTimeParse;
	
	if (changeType == "DAY") {
		differentTimeParse = Math.floor(differentTime / (24 * 60 * 60 * 1000) * 1);
	} else if (changeType == "HOUR") {
		differentTimeParse = Math.floor(differentTime / (60 * 60 * 1000) * 1);
	} else if (changeType == "MIN") {
		differentTimeParse = Math.floor(differentTime / (60 * 1000) * 1);
	} else if (changeType == "SEC") {
		differentTimeParse = Math.floor(differentTime / 1000 * 1);
	}
	
	return differentTimeParse;
}

/* ----------------------------------------------------------------------------
 * �뱀젙 �좎쭨�� ���� 吏��뺥븳 媛믩쭔�� 媛�媛�(+-)�� �좎쭨瑜� 諛섑솚
 * 
 * �낅젰 �뚮씪誘명꽣 -----
 * pInterval : "yyyy" �� �곕룄 媛�媛�, "m" �� �� 媛�媛�, "d" �� �� 媛�媛�
 * pAddVal  : 媛�媛� �섍퀬�� �섎뒗 媛� (�뺤닔��)
 * pYyyymmdd : 媛�媛먯쓽 湲곗��� �섎뒗 �좎쭨
 * pDelimiter : pYyyymmdd 媛믪뿉 �ъ슜�� 援щ텇�먮� �ㅼ젙 (�놁쑝硫� "" �낅젰)
 * 
 * 諛섑솚媛� ----
 * yyyymmdd �먮뒗 �⑥닔 �낅젰�� 吏��뺣맂 援щ텇�먮� 媛�吏��� yyyy?mm?dd 媛�
 *
 * �ъ슜�� ---
 * 2008-01-01 �� 3 �� �뷀븯湲� ==> addDate("d", 3, "2008-08-01", "-");
 * 20080301 �� 8 媛쒖썡 �뷀븯湲� ==> addDate("m", 8, "20080301", "");
 --------------------------------------------------------------------------- */
function addDate(pInterval, pAddVal, pYyyymmdd, pDelimiter) {
	var yyyy;
	var mm;
	var dd;
	var cDate;
	var cYear, cMonth, cDay;

	if (pDelimiter != "") {
		pYyyymmdd = pYyyymmdd.replace(eval("/\\" + pDelimiter + "/g"), "");
	}

	yyyy = pYyyymmdd.substr(0, 4);
	mm  = pYyyymmdd.substr(4, 2);
	dd  = pYyyymmdd.substr(6, 2);

	if (pInterval == "yyyy") {
		yyyy = (yyyy * 1) + (pAddVal * 1); 
	} else if (pInterval == "m") {
		mm  = (mm * 1) + (pAddVal * 1);
	} else if (pInterval == "d") {
		dd  = (dd * 1) + (pAddVal * 1);
	}

	cDate = new Date(yyyy, mm - 1, dd); // 12��, 31�쇱쓣 珥덇낵�섎뒗 �낅젰媛믪뿉 ���� �먮룞�쇰줈 怨꾩궛�� �좎쭨媛� 留뚮뱾�댁쭚.
	cYear = cDate.getFullYear();
	cMonth = cDate.getMonth() + 1;
	cDay = cDate.getDate();

	cMonth = cMonth < 10 ? "0" + cMonth : cMonth;
	cDay = cDay < 10 ? "0" + cDay : cDay;

	if (pDelimiter != "") {
		return cYear + pDelimiter + cMonth + pDelimiter + cDay;
	} else {
		return String(cYear) + String(cMonth) + String(cDay);
	}
}
