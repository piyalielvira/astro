jQuery(document).ready(function($) {


    //Nav top
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 100) {
        jQuery("header").addClass("topmines");
    } else {
        jQuery("header").removeClass("topmines");
    }
    if (jQuery(this).scrollTop() > 250) {
        jQuery("header").addClass("nav-active");
    } else {
        jQuery("header").removeClass("nav-active");
    }

});






var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {        hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
    }, false);
    });
}
//menu
var pull = jQuery('#pull');
menu = jQuery('#menu-bg');
menuHeight	= menu.height();
jQuery(pull).on('click', function(e) {
e.preventDefault();
menu.slideToggle(500);
});
jQuery(window).resize(function(){
var w = $(window).width();
if(w > 320 && menu.is(':hidden')) {
menu.removeAttr('style');
}
});
//menu


//scroll top
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 100) {
        jQuery(".scrollup").addClass("active");
    } else {
        jQuery(".scrollup").removeClass("active");
    }
});
jQuery(".scrollup").click(function() {
    jQuery("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

//scroll top

// Banner Slider
$('#banner-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	items:1,
	dots: true,
	navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"], 
	autoplay:false,
    autoplayTimeout:6000,
	autoplayHoverPause:false,
	singleItem: true,
	animateIn: 'fadeIn',
	animateOut: 'fadeOut',
});

 
// Kundli 
$('#kundli-slide').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false, 
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    autoplay:true,
    autoplayTimeout:3000,
	autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// Our Astrologer 
$('#our-astrologer-slide').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false, 
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    autoplay:true,
    autoplayTimeout:3000,
	autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// Our Astrologer 
$('#customer-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false, 
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    autoplay:true,
    autoplayTimeout:3000,
	autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

// Owl Slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

//machheight
jQuery(".matchHeight").matchHeight(); 
});
 

//tabs//
 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    /*$(".tabs").css("margin-top", function(){ 
       return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
    });*/
    });
    $(".tab_container").css("min-height", function(){ 
      return $(".tabs").outerHeight() + 20;
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to bottom side
	   of last tab 
	$('ul.tabs li').last().addClass("tab_last");*/
	