var $w = $(window),
	$b = $('body'),
	_e = 'click',
	_t = '300',
	validarNom = false,
    validarMail = false,
    validarFono = false;
	
var load = {
	intro: {
		base: 'img/',
		imgs: ['isotipo.png', 'bg-guiller.png', 'bg-pinera.png', 'guiller-intro-over.png', 'pinera-intro-over.png']
	}
}


var App = {
	resize : function(){
				
	},    
	events: {
		init: function(){
			
			
			//ANIMACION ENTRADA HOME
			setTimeout(function(){
				$('#section1').find('.intro').addClass('active');
				setTimeout(function(){
					$('.bg-candidatos').find('.presi').addClass("active");	
				}, 300);
			}, 300);

			
			$w.resize(function() {
				App.resize();   
			});		
			
			
			
			
			$('#bloque-iconos').slick({
			  arrow: false,
			  dots: true,
			  infinite: false,
			  speed: 300,
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 4,
			        infinite: true,
			        dots: false
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]
			});
			
			
				
			
			$('#pagepiling').pagepiling({
	    		menu: null,
	    		//anchors: ['Inicio', 'Como Funciona', 'Mapa', 'Donación'],
	    		scrollingSpeed: 700,
				easing: 'swing',	    		
		        afterLoad: function(anchorLink, index){
			    	console.log(index);
			    	
			    	//$('.ctx-menu').find('.move').velocity("transition.slideLeftOut", { stagger: 50 });
					
					setTimeout(function(){
						$('.ctx-menu').removeClass('active');
						
						setTimeout(function(){
							$('.ctx-menu').hide();
							$('.hamburger').removeClass('is-active');
						}, 300);	
					}, 600);  
					
					if(index==2){
						setTimeout(function(){
							$('.ctx-candidatos').find('.bg-guiller').velocity("transition.slideLeftIn");
							$('.ctx-candidatos').find('.bg-pinera').velocity("transition.slideRightIn");
						}, 100);
						
						$('.bloque-iconos').find('li img').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.guiller-habla').find('.cuadro').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.pinera-habla').find('.cuadro').css({"opacity": "0", "display":"none", "transform": "initial"});
						
						
					}else if(index==3){
						setTimeout(function(){
							$('.pinera-habla').find('.cuadro').velocity("transition.slideRightIn");
						}, 100);
						
						$('.ctx-candidatos').find('.bg-guiller').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.ctx-candidatos').find('.bg-pinera').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.bloque-iconos').find('li img').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.guiller-habla').find('.cuadro').css({"opacity": "0", "display":"none", "transform": "initial"});
						
						
					}else if(index==4){
						setTimeout(function(){
							$('.guiller-habla').find('.cuadro').velocity("transition.slideLeftIn");	
						}, 100);
						
						$('.ctx-candidatos').find('.bg-guiller').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.ctx-candidatos').find('.bg-pinera').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.bloque-iconos').find('li img').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.pinera-habla').find('.cuadro').css({"opacity": "0", "display":"none", "transform": "initial"});
						
					}else if(index==5){
						setTimeout(function(){
							$('.bloque-iconos').find('li img').velocity("transition.slideUpIn", { stagger: 150 });	
						}, 100);
						
						$('.ctx-candidatos').find('.bg-guiller').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.ctx-candidatos').find('.bg-pinera').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.guiller-habla').find('.cuadro').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.pinera-habla').find('.cuadro').css({"opacity": "0", "display":"none", "transform": "initial"});
						
					}else{
						$('.ctx-candidatos').find('.bg-guiller').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.ctx-candidatos').find('.bg-pinera').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.bloque-iconos').find('li img').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.guiller-habla').find('.cuadro').css({"opacity": "0", "display":"none", "transform": "initial"});
						$('.pinera-habla').find('.cuadro').css({"opacity": "0", "display":"none", "transform": "initial"});
					}
					
					
		        },
		        keyboardScrolling: false,
				navigation: null
			});
			//'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
			
			//MENU
			$('.ctx-menu').find('a').each(function(){
				var $this = $(this),
					_id = $this.attr("data-id");
					
				$this.off(_e).on(_e, function(){
					$('.ctx-menu').find('.move').removeClass('active');
					$.fn.pagepiling.moveTo(_id);
					$this.addClass('active');
				});
				
			});
			
			
			//HABLA CON
			$('.ctx-candidatos').find('.imagen-candidato').each(function(){
				var $this = $(this),
					_id = $this.attr("data-id"),
					_name = $this.attr("data-name");
					
				$this.off(_e).on(_e, function(){
					$('.ctx-menu').find('.move').removeClass('active');
					$.fn.pagepiling.moveTo(_id);
					$('.ctx-menu').find('.'+_name).addClass('active');
				});
				
			});
			
			
			
			//FLECHA DOWN
			$('.section').find('.down').each(function(){
				var $this = $(this),
					_id = $this.attr("data-id"),
					_name = $this.attr("data-name");
					
				$this.off(_e).on(_e, function(){
					$('.ctx-menu').find('.move').removeClass('active');
					$.fn.pagepiling.moveTo(_id);
					$('.ctx-menu').find('.'+_name).addClass('active');
				});
				
			});
			
			$('.section').find('.mas').each(function(){
				var $this = $(this),
					_id = $this.attr("data-id"),
					_name = $this.attr("data-name");
					
				$this.off(_e).on(_e, function(){
					$('.ctx-menu').find('.move').removeClass('active');
					$.fn.pagepiling.moveTo(_id);
					$('.ctx-menu').find('.'+_name).addClass('active');
				});
				
			});
			
			
			
			$.fn.pagepiling.setAllowScrolling = function (value){
				if(value){
				$.fn.pagepiling.setMouseWheelScrolling(true);
					addTouchHandler();
				}else{
				$.fn.pagepiling.setMouseWheelScrolling(false);
					removeTouchHandler();
				}
			};
			
			$.fn.pagepiling.setMouseWheelScrolling();
											
			
			
			
			//MENU MOBILE
			$('.hamburger').off(_e).on(_e, function(){					
				if($('.hamburger').hasClass('is-active')){
					//$('.ctx-menu').find('.move').velocity("transition.slideLeftOut", { stagger: 50 });
					setTimeout(function(){
						$('.ctx-menu').removeClass('active');
						setTimeout(function(){
							$('.ctx-menu').hide();
							$('.hamburger').removeClass('is-active');
						}, 300);	
					}, 600);									
					
				}else{									
					$('.ctx-menu').show();
					setTimeout(function(){						
						$('.ctx-menu').addClass('active');
						setTimeout(function(){
							//$('.ctx-menu').find('.move').velocity("transition.slideLeftIn", { stagger: 50 });
							$('.hamburger').addClass('is-active');
						}, 300);
					}, 300);
				}
			});
			
			
								
			
		}
	},
	intro: function intro(){						
		var loading = function(){
			var items = load.intro.imgs,
				loaded = 0,
				len = items.length;
			
			$.each(load.intro.imgs, function(index, el) {
				var img = new Image();
					img.src ='img/' + el;
				img.onload = function(){
					loaded ++;
					var p = loaded / len * 100;
					$('.loader').find('.loader-barra').css({ width: p + '%'});
					if(loaded === len){
						loaderend();
					}
				};
			});
		};
		function loaderend(){
			var c = $('.loader-barra');
			
			TweenMax.to(c, 0.6, {
				opacity: 1,
				onComplete: function(){
					$('.loader').removeClass('show').addClass('hide');
					$('.wrapper').show().addClass('active');
					App.resize();
					App.events.init();
				}
			});
		}
		loading();
	}	
};




$(function(){ 
	App.intro();	
});