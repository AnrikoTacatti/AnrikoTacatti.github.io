$(document).ready(function () {
    
       $("input[type='tel']").mask("+7 (999) 999-99-99");
    
   $('.j-header-front__slider').slick({
        dots: false
        , speed: 300
        , slidesToShow: 1
        , slidesToScroll: 1
        , vertical: true
    });
    
    
    /* счетчик слайдера на главной   */
   $('.j-header-front__slider').append('<div class="slider-cout-box"><div class="count-prew" data-count="1"  >01</div><div class="count-current" data-count="2"  >02</div><div class="count-next" data-count="3" >03</div> </div>');
    var currentSlide1;
    $('.j-header-front__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        if (currentSlide >= 1) {
            $('.j-header-front__slider').find(".count-prew").text("0" + currentSlide);
            $('.count-next-next').hide();
            $('.j-header-front__slider').find(".count-prew").attr("data-count",currentSlide);
            $('.j-header-front__slider').find(".count-prew").show();
        }
       else {
            $('.j-header-front__slider').find(".count-next-next").remove()
            $('.j-header-front__slider').find(".count-prew").hide();
            $('.j-header-front__slider').find(".count-prew").text('');
           
           var append ='<div class="count-next-next" data-count="' + (currentSlide + 3) + '" >' + "0"  + (currentSlide + 3) + '</div>';
           $('.j-header-front__slider').find(".slider-cout-box").append(append);
           /* $('.j-header-front__slider').find(".slider-cout-box").append(`<div class="count-next-next" data-count="${(currentSlide + 3)}" > ${ "0" + (currentSlide + 3)}</div>`)*/
           
        }
        $('.j-header-front__slider').find(".count-current").text("0" + (currentSlide + 1));
        $('.j-header-front__slider').find(".count-current").attr("data-count",(currentSlide + 1));
        
        if ((currentSlide + 2) <= $('.j-header-front__slider').slick("getSlick").slideCount) {
            $('.j-header-front__slider').find(".count-next").text("0" + (currentSlide + 2));
            $('.j-header-front__slider').find(".count-next").attr("data-count",(currentSlide + 2));
        }
        else {
            $('.j-header-front__slider').find(".count-next").text('');
        }
        
    
           
        
        
        
    });
    
   
     $('.slider-cout-box').find("div").click(function(e){
         
         var count = +($(this).attr("data-count"));
         count = count-1;
         $('.j-header-front__slider').slick('slickGoTo', count);
         
         
     });
    
    
    $('.j-header-front-bottom_slider').slick({
        dots: false
        , speed: 300
        , slidesToShow: 3
        , slidesToScroll: 1
             ,responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
           
               
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
             
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
            }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
              
            }
        
        }]
        
        
    });
    $('.j-header-front-bottom__slide-box').click(function () {
        $('.j-header-front-bottom__slide-box').removeClass("active");
        $(this).addClass("active");
    });
    
     $('.j-brends-slider').slick({
        dots: false
        , speed: 300
        , slidesToShow: 6
        , slidesToScroll: 1
              ,responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
           
               
            }
        }, {
            breakpoint: 760,
            settings: {
                slidesToShow: 3,
             
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
              
            }
        }]
    });
    
    
       $('.j-news_slider').slick({
        dots: false
        , speed: 300
        , slidesToShow: 4
        , slidesToScroll: 1
            ,responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
           
               
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
             
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
              
            }
        }]
    });
    
    
     $('.j-slider-for-cart-many-info-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.j-cart-many-info-slider'
});
$('.j-cart-many-info-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.j-slider-for-cart-many-info-slider',
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0px',
   responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
           
               
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
              
            }
        }] 
    
});
    
 $('.about-fireplace-slider').slick({
       
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
        
     
      });
      

      $('.about-fireplace-slider-nav').slick({
        slidesToShow: 4,
          slidesToScroll: 1,
          centerPadding: '0px',
          asNavFor: '.about-fireplace-slider',
          dots: false,
          centerMode: true,
          focusOnSelect: true,
           responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 50,
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
    
    
    
      
       $('.tab-slider').slick({
        dots: false
        , speed: 300
        , slidesToShow: 4
        , slidesToScroll: 1
            ,responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                 slidesToScroll: 1
               
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                 slidesToScroll: 1
             
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
  
  /*------.drop-down-list-----------*/   
     $(".j-drop-down-list").find(".drop-down-list__tab").click(function (e) {
         
         if($(e.target).hasClass("drop-down-list__tab")){
             $(e.target).toggleClass("active") ;
         }
         
     });
    
  
     $(".drop-down-list__tab_content").find("li").click(function (e) {
         //$(e.target).parent(".drop-down-list__tab_content").find("li").removeClass("active");
          $(e.target).toggleClass("active") ;
         
     });

    
    
    
    
     /*-----end-.drop-down-list-----------*/  
    
    $(".j-open-scroll-menu").click(function () {
        $(".j-menu__menu-box__scroll-menu").toggleClass("opened");
    });
    
         $(window).scroll(function (event) {
    if($(window).scrollTop() >= ($('.j-menu__menu-box__scroll-menu').height()) ){
         $(".j-menu__menu-box__scroll-menu").removeClass("opened");
        
    }
     });
    $(".j-open-search-form").click(function () {
        $(".search-form").toggleClass("opened");
    });
    $("form").find(".j-close").click(function (e) {
        $(this).parents(".form").removeClass("active");
        $(this).parents("form").removeClass("opened");
      
    });
     $(".j-menu__menu-box__scroll-menu").find(".j-close").click(function (e) {
           $(".j-menu__menu-box__scroll-menu").removeClass("opened");
     });
    
    
    $(".js-btn-opened__cart-many-info-form").click(function (e) {

        $(".js-cart-many-info-form").addClass("opened");
      
    });
      $(".js-found-cheaper-btn").click(function (e) {

        $(".j-form-found-cheaper").addClass("opened");
      
    });
       $(".j-btn-form-сallback").click(function (e) {

        $(".j-form-сallback").addClass("opened");
      
    });
     $(".j-btn-form-contact").click(function (e) {

        $(".j-form-contact").addClass("opened");
      
    });
  
     
    
     $("form").submit(function (e) {
       
         if(!$(this).hasClass("search-form")|| !$(this).hasClass("form-comments") ){
           $("#message-send-ok").addClass("opened");

         }
      return false;
    });
    
     $(".j-switch").click(function(){
        if($(this).is(':checked')){
              $(this).prev().css("color","#000");
        } 
         else{
             $(this).prev().css("color","");
         }
     });
    
 $(".j-btn-filter").click(function(){
    $(".j-drop-down-filter").toggleClass("opened"); 
    $(".j-drop-down-list-category").removeClass("opened"); 
 });
    
     $(".j-btn-category").click(function(){
    $(".j-drop-down-list-category").toggleClass("opened"); 
    $(".j-drop-down-filter").removeClass("opened");
 });
    
    
     
     //menu scroll yakora# скрол по якорям
    $(".totop").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'), //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
   
        
    });
     $(window).scroll(function (event) {
    if($('.totop').offset().top < ($('body').height()/2) ){
        $(".totop").css("visibility","hidden");
        
    }
    else{
      $(".totop").css("visibility","visible");  
    }
     });
    
    
        // плюс/минус количества
         
                $('.product-count .btn-count').on('click', function () {
                    var input = $('.product-count input#n1');
                    var count = parseInt(input.val());
                    if ($(this).hasClass("btn-count-minus")) {
                        count = count - 1;
                    }
                    else if ($(this).hasClass("btn-count-plus")) {
                        count = count + 1;
                    }

                    if (count < 1) {
                        count = 1;
                    }

                    input.val(count);
                });
         
    
     // open cart product
         $('.j-card-list-ifo-box-specification').on('click', function () {
         $(this).prev('.j-card-list-ifo-box-ifo').toggleClass("opened");
         $(this).toggleClass("active"); 
             $(this).parents(".j-card-list").toggleClass("opened");
             
             
             
         });
    
 // jquery.nicescroll.
     
              $.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
				
            $("#j-comparison-tab-content").mCustomScrollbar({axis:"x",advanced:{ updateOnSelectorChange: "string" } });
       
    if( $(window).width() < 768){
          
           $(".j-table-castom-box").mCustomScrollbar({axis:"x",advanced:{ updateOnSelectorChange: "string" } });
       }
    
        $(window).resize(function () {
       if( $(window).width() < 768){
          
           $(".j-table-castom-box").mCustomScrollbar({axis:"x",advanced:{ updateOnSelectorChange: "string" } });
       }}); 
    
   
        
});


 /* Плагин шаблона для ввода телефона */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});   