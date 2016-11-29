var screenWidth = $(window).width();
var screenHeight = $(window).height();

$(function() {	
	//----------------------Banner
	$('#carousel-banner').owlCarousel({
		items:1,
		loop:true,			
		autoplay:true,
		autoplayTimeout:1000000,
		paginationSpeed : 1,
		lazyFollow:false,
		responsiveRefreshRate: 1,
		autoHeight: false,
	});
	
	//----------------------Owl slide
	buildSilder(".owl-carousel",4,5,8,10);
	
	//----------------------Search my clip
	searchMyclip();
	
	//----------------------Menu left
	menuConfig();
	
	//----------------------Set min height
	setMinHeight();
});	

function resizeImage() {
	//----------------------Call functions set height for images
	$('.ratio-image-16-9 img').each(function(index, element) {
       setHeightImage16x9($(this));
    });
	
	$('.ratio-image-2-3 img').each(function(index, element) {
       setHeightImage2x3($(this));
    });
	
	$('.ratio-image-4-4 img').each(function(index, element) {
       setHeightImage4x4($(this));
    });	
	
	$('.ratio-image-4-3 img').each(function(index, element) {
       setHeightImage4x3($(this));
    });
	
}
	
//----------------------Thiết lập width cho tên của list channel; tên video
	function setWidth(){
		var screenWidth = $(window).width();
		var leftWidth = $(".list-schedule .list-group-item .time").width();
		var rightWith = $(".list-schedule .list-group-item .more").width();
		var rightWithIcon = $(".list-schedule .list-group-item .icon-right").width();		
		//Tính chiều rộng của item list channel
		var itemWidth = screenWidth - (leftWidth + rightWith + rightWithIcon);
		$(".list-schedule .list-group-item .name").css({"width":itemWidth});
		
		//Tính chiều rộng của name video
		var itemWidthName = screenWidth - ($(".top-player .pull-right").outerWidth() + 20);//20 là padding của element cha
		$(".top-player .name").css({"width":itemWidthName});

	}
	
//----------------------Thiết lập min-height div chứa nội dung
	function setMinHeight(){
		$("#closedMenu").css("min-height",screenHeight);
		
	}	
	
//----------------------Slide item	
	function buildSilder(clazz,numItem,numItem2,numItem3,numItem4){
		$(clazz).owlCarousel({
				stagePadding: 15,
				loop:false,
				dots:false,
				margin:10,
				nav:false,
				dotData:true,
				lazyLoad:true,
				smartSpeed:500,
				responsive:{
					0:{
						items:numItem
					},
					480:{
						items:numItem2
					},
					640:{
						items:numItem3
					},
					980:{
						items:numItem4
					}
				}
			});
	}
	
//----------------------Selectpicker for schedule
	function datePicker(classD,widthD){
		if($(classD).size() > 0){
			$(classD).selectpicker({
			  width: widthD	,
			  style: 'btn-sm date-select'
			});	
		}
	}

//----------------------Selectpicker for schedule
	function searchMyclip(){
		$(".btn-search").click(function() {
			var heightBody = $(window).height();
			$(".popup-search").toggle(0, function(){
				$(".container").css({"height": 0, "overflow": "hidden"});
			});
			
			$(".box-search-suggess").css("height", heightBody - 40);
		});
		
		$("#closeBox").click(function() {
			$(".popup-search").hide(20);
			$(".container").css({"height": "inherit", "overflow": "inherit"});
		});
		
		$(".ipt-search").focus(function() {
			$(".box-search-suggess").toggle(50);
		});		
		
		$("#clearSuggess").click(function() {
			$(".box-search-suggess").hide();
		});	
	
	}
	
//----------------------Thiết lập height cho khung live cam
	function setHeightLiveCam(){
		var screenHeight = $(window).height();
		var height01 = $(".mdl-live-cam .item-typing").outerHeight();
		var height02 = $(".mdl-live-cam .top-control").outerHeight();
		var height03 = $(".mdl-live-cam .title").outerHeight();
		var heightObject = $(".mdl-live-cam .scroll-content").outerHeight();		
		var chatHeight = screenHeight - (height01 + height02 + height03 + 10);
		
		$(".mdl-live-cam").css({"height":screenHeight});
		
		//Kiểm tra điều kiện trước khi thiết lập chiều cao cho khung chat
		if(heightObject > chatHeight){
			$(".mdl-live-cam .chat-control .scroll-content").css({"height":chatHeight});
		}
	}	
	
//----------------------Thiết lập height cho banner theo tỉ lệ 16/9
	function setHeightBanner(){
		var screenWidth = $(window).width();
		var heightBanner = ((screenWidth*9) / 16) + 2;
		$("#carousel-banner").css("height",heightBanner);
		$("#carousel-banner .owl-item").css("width",screenWidth);
		
		//$("#carousel-banner .owl-item ").css("width","100%");		
		//$("#carousel-banner .owl-item img").css("width",screenWidth);				
		$("#carousel-banner").css("overflow","hidden");
	}
	
//----------------------Thiết lập height cho images theo tỉ lệ 16/9
	function setHeightImage16x9(item){
		var imageWidth = item.width();
		var imageHeight = ((imageWidth*9) / 16);
		item.css("height",imageHeight);
	}
	
//----------------------Thiết lập height cho images theo tỉ lệ 2/3
	function setHeightImage2x3(item){
		var imageWidth = item.width();
		var imageHeight = ((imageWidth*3) / 2);
		item.css("height",imageHeight);
	}
	
//----------------------Thiết lập height cho images theo tỉ lệ 4/4
	function setHeightImage4x4(item){
		var imageWidth = item.width();
		item.css("height",imageWidth);
	}
	
//----------------------Thiết lập height cho images theo tỉ lệ 4/3
	function setHeightImage4x3(item){
		var imageWidth = item.width();
		var imageHeight = ((imageWidth*3) / 4);
		item.css("height",imageHeight);
	}	
	
//----------------------Thiết lập height cho images theo tỉ lệ 4/4
	function paddingModule(){
		var sw = $(window).width();
		var marginLeft = (sw - $(".list-dramas .content").width()) / 2;
	}
	
//---------------------	
	function stickyVideo() {
		$(window).scroll(function(){
			$('.embed').css("height","auto");
			$('.sub-embed').removeClass("fixed-video");
				
			var heightScreen = $(window).height();
			var heightEmbed  = $('.embed').height();
			var heightBody   = $('body').height();
			
			if((heightScreen > (heightEmbed * 2)) && (heightBody > heightScreen)){
				$('.embed').css("height",heightEmbed);
				$('.sub-embed').addClass("fixed-video");
			}
		  });
	}
	
//--------------------------Menu config--------------
	function menuConfig(){
		// Create a new instance of Slidebars
		var controller = new slidebars();
	
		// Events
		$( controller.events ).on( 'opening', function ( event, id ) {
			$(".close-menu").css("display","block");
		} );
	
		$( controller.events ).on( 'closed', function ( event, id ) {
			$(".close-menu").css("display","none");
		} );
	
		// Initialize Slidebars
		controller.init();
	
		// Left Slidebar controls	
		$( '.js-toggle-left-slidebar' ).on( 'click', function ( event ) {
			event.stopPropagation();
			controller.toggle( 'slidebar-1' );
		} );
		
		// Close any
		$( controller.events ).on( 'opened', function () {
			$( '[canvas="container"]' ).addClass( 'js-close-any-slidebar' );
		} );
	
		$( controller.events ).on( 'closed', function () {
			$( '[canvas="container"]' ).removeClass( 'js-close-any-slidebar' );
		} );
	
		$( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
			event.stopPropagation();
			controller.close();
		} );
	
		
		$(".close-menu").on("touchend", function ( event ) {
			event.stopPropagation();
			controller.close();	
		});
	
	
	}	
	
//--------------------------Select dd--------------	
	function selectDd(){
		var pages = $("#pages").msDropdown({on:{change:function(data, ui) {
				var val = data.value;
					if(val!="")
					window.location = val;
			}}}).data("dd");
	}	