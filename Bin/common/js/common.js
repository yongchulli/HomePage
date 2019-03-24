//공통 ////////////////////////////////////////////////////////////////////////////////////////////////////
//top_navigation
$(function(){
	var navHgt = $("#menu > ul").height();
	var navTop = - parseInt($("#menu > ul").css("marginTop"));
	
	$("#menu > ul").css({"height": navTop});
	$("#menu > ul").mouseenter(function(){	
		$(this).animate({height: navHgt}, 200);
	}).mouseleave(function(){
		$(this).stop().animate({height: navTop}, 200);
	});

	//class on
	$("#menu > ul > li").mouseover(function(){
		$("#menu > ul > li").removeClass("on");
		$(this).addClass("on");
	}).mouseleave(function(){
		$("#menu > ul > li, #menu ul ul li").removeClass("on");
	});
	$("#menu ul ul li").on("mouseover", function(){
		$("#menu ul ul li").removeClass("on");
		$(this).addClass("on");
		$("#menu > ul > li").removeClass("on");
		$(this).parent().parent("li").addClass("on");
	});	
});










//메인 ////////////////////////////////////////////////////////////////////////////////////////////////////
(function($){
	$.fn.motionj_fadeBanner = function(o){
		o = $.extend({
			width : 10,
			height: 10,
			speed : 1000,
			delay : 1000,
			minWidth : 980
		}, o || {});

		return this.each(function(j){
			$(this).attr("idx", j);
			var n = $(this).attr("idx");

			num = 0;
			maxnum = 6;

			var e = $(this);
			var n_h = e.find('ul.page').height();
			var pause = false;
			var no = 1, ext;
			var len = e.find('ul.list li').length-1;
			var replace_img = function(o, s, ext){
				if(s) o.attr('src', o.attr('src').replace('off.'+ext, 'on.'+ext));
				else o.attr('src', o.attr('src').replace('on.'+ext, 'off.'+ext));
			}
			var find_ext = function(imgE){
				var xt = imgE.find('img').attr('src').lastIndexOf('.') + 1;
				xt = imgE.find('img').attr('src').substr(xt);
				return xt;
			}
			e.css({
				position : 'relative',
				overflow : 'hidden',
				width : o.width,
				minWidth : o.minWidth
				
			}).find('ul.list').css({
				position : 'relative',
				'z-index' : 0,
				height : o.height
			}).find('li').css({
				position : 'absolute'
			});
			e.find('ul.list > li:not(:eq(0))').hide();
			e.find('ul.page').css({
				'z-index' : 1,
				'text-align' : 'center',
				'margin-top' : -(n_h)
			}).find('span').css('cursor', 'pointer');
			e.find('ul.list li:eq(0)').addClass('on');
			e.find('ul.page li:eq(0)').addClass('on');
			ext = find_ext(e.find('ul.page li'));
			replace_img(e.find('ul.page li:eq(0)').find('img'), true, ext);
			
			var ani = function(num, m){
				if(!e.find('ul.page li:eq(' + num + ')').hasClass('on')){
					if(e.find('ul.page li.on').length > 0){
						ext = find_ext(e.find('ul.page li.on'));
						replace_img(e.find('ul.page li.on').find('img'), false, ext);
						e.find('ul.page li.on').removeClass('on');
					}
					e.find('ul.page li:eq(' + num + ')').addClass('on');
					ext = find_ext(e.find('ul.page li:eq(' + num + ')'));
					replace_img(e.find('ul.page li:eq(' + num + ')').find('img'), true, ext);
					if(m){
						e.find('ul.list li').fadeOut('fast');
						e.find('ul.list li').removeClass('on');
						e.find('ul.list li:eq(' + num + ')').queue( function(){
							$(this).addClass('on');
							$(this).clearQueue();
							$(this).fadeIn('fast');
						});
					}else{
						e.find('ul.list li.on').fadeOut(o.speed);
						e.find('ul.list li.on').removeClass('on');
						e.find('ul.list li:eq(' + num + ')').fadeIn(o.speed);
						e.find('ul.list li:eq(' + num + ')').addClass('on');
					}
					if(num >= len) no = 0;
					else{ no = num; no++; }
				}

				//console.log(no + " , " + num + " , " + len + " , " + m);

				if (num == 0){
					e.find(".roll_list01 div.roll_con .tit").css({marginLeft : "-40px", opacity : "0"});
					e.find(".roll_list01 div.roll_con .tit").animate({marginLeft : "0", opacity : "1"}, 1600, "easeInOutQuint");
					e.find(".roll_list01 div.roll_con .txt").css({marginLeft : "-40px", opacity : "0"});
					e.find(".roll_list01 div.roll_con .txt").delay(300).animate({marginLeft : "0", opacity : "1"}, 1600, "easeInOutQuint");
				} else if (num == 1){
					e.find(".roll_list02 div.roll_con .tit").css({marginLeft : "-40px", opacity : "0"});
					e.find(".roll_list02 div.roll_con .tit").animate({marginLeft : "0", opacity : "1"}, 1600, "easeInOutQuint");
					e.find(".roll_list02 div.roll_con .txt").css({marginLeft : "-40px", opacity : "0"});
					e.find(".roll_list02 div.roll_con .txt").delay(300).animate({marginLeft : "0", opacity : "1"}, 1600, "easeInOutQuint");
				} else if (num == 2){
					e.find(".roll_list03 div.roll_con .tit").css({marginLeft : "40px", opacity : "0"});
					e.find(".roll_list03 div.roll_con .tit").animate({marginLeft : "0", opacity : "1"}, 1600, "easeInOutQuint");
					e.find(".roll_list03 div.roll_con .txt").css({marginLeft : "40px", opacity : "0"});
					e.find(".roll_list03 div.roll_con .txt").delay(300).animate({marginLeft : "0", opacity : "1"}, 1600, "easeInOutQuint");
				} else if (num == 3){
					e.find(".roll_list04 div.roll_con .tit").css({marginTop : "-20px", opacity : "0"});
					e.find(".roll_list04 div.roll_con .tit").animate({marginTop : "0", opacity : "1"}, 1600, "easeInOutQuint");
					e.find(".roll_list04 div.roll_con .txt").css({marginTop : "20", opacity : "0"});
					e.find(".roll_list04 div.roll_con .txt").delay(300).animate({marginTop : "0", opacity : "1"}, 1600, "easeInOutQuint");
				} else if (num == 4){
					e.find(".roll_list05 div.roll_con .tit").css({marginTop : "-20px", opacity : "0"});
					e.find(".roll_list05 div.roll_con .tit").animate({marginTop : "0", opacity : "1"}, 1600, "easeInOutQuint");
					e.find(".roll_list05 div.roll_con .txt").css({marginTop : "20", opacity : "0"});
					e.find(".roll_list05 div.roll_con .txt").delay(300).animate({marginTop : "0", opacity : "1"}, 1600, "easeInOutQuint");
				} else if (num == 5){
					e.find(".roll_list06 div.roll_con .tit").css({marginTop : "-20px", opacity : "0"});
					e.find(".roll_list06 div.roll_con .tit").animate({marginTop : "0", opacity : "1"}, 1600, "easeInOutQuint");
					e.find(".roll_list06 div.roll_con .txt").css({marginTop : "20", opacity : "0"});
					e.find(".roll_list06 div.roll_con .txt").delay(300).animate({marginTop : "0", opacity : "1"}, 1600, "easeInOutQuint");
				};
			}
			
			e.find('ul.page li').each(function(i){
				$(this).mouseover( function(){
					ani(i, true);
				});
			});
			//e.mouseover( function(){ pause = true; }).mouseleave( function(){ pause = false; }); //마우스오버시 정지
			setInterval(function(){ if(pause == false) ani(no, false); }, o.delay);
			
			e.find('ul.ctrl li .next').on("click", function(){
				if (no >= maxnum){
					no = 0;
				};
				ani(no , true);

			});
			e.find('ul.ctrl li .prev').on("click", function(){
				if (no <= 0){
					no = maxnum;
					//console.log(num);
				};
				no--;
				no = no-1;
				ani(no, true);
			});
		});
	}
})(jQuery);

$(function(){
	$(".roll_list01 div.roll_con .tit").css({marginLeft : "-40px", opacity : "0"});
	$(".roll_list01 div.roll_con .tit").delay(500).animate({marginLeft : "0", opacity : "1"}, 1600, "easeInOutQuint");
	$(".roll_list01 div.roll_con .txt").css({marginLeft : "-40px", opacity : "0"});
	$(".roll_list01 div.roll_con .txt").delay(800).animate({marginLeft : "0", opacity : "1"}, 1600, "easeInOutQuint");
});








//서브 ////////////////////////////////////////////////////////////////////////////////////////////////////
$(function(){
	//Location pc-ver
	var locNav = (function(){
		var locNav = {};
		locNav.scroll = function(){
			$(window).scroll(function(){
				var winScroll = $(window).scrollTop()

				if(winScroll > 199){
					$('.loc_area').css({
						top:'80px',
						position:'fixed'
					})
				} else {
					$('.loc_area').css({
						top:'280px',
						position:'absolute'
					})
				}
			})
		}
		locNav.scroll()
		return locNav;
	})();

	var onePage = (function(){
		var onePage = {}
			$('.anchor-move a').each(function(){
				$(this).on('click', function(e){
					e.preventDefault();
					var target = $(this).attr('href');
					var targetOffset = $(target).offset();
					var targetPos = targetOffset.top;
					$('html, body').animate({scrollTop : targetPos/*-160*/}, 1200, 'easeInOutQuint', function(){
						$(this).addClass('current').siblings().removeClass('current');
					});
				})
			})

			$(window).scroll(function () {
				var winScroll = $(this).scrollTop();
				var stopPoint = [];
				var count;

				$('.one-page .con_area').each(function () {
					stopPoint.push(parseInt($(this).offset().top));
				});
				for (count = 0; count < $('.one-page .con_area').length; count++){
					if (winScroll >= stopPoint[count]-160){
						$('.anchor-move a').eq(count).addClass('current').siblings().removeClass();
					}
				}
			});
		return onePage;
	})();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////document ready end
