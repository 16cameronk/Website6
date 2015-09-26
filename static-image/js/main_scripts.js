/* ------ One Page Navigation ----------
------------------------------------------ */

$('.navigation').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});

 $(window).load(function(){
      $("#nav-anchor").sticky({ topSpacing: 0 });
    });

/* ------ Responsive Navigation ----------
------------------------------------------ */

	jQuery(document).ready(function($){
		$.daisyNav();
	});

         $('.menu-list a').click(function() {
         $('.menu-list').removeClass('show-for-devices').addClass("collapse");
     });



/* ------ Stats Counter ------------------
------------------------------------------ */

    jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 8,
            time: 1000
        });
    });

/* ------ Pretty Photo Lightbox ----------
------------------------------------------ */

 $(window).load(function(){
   $(".gallery:first a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square', default_width: 750,
default_height: 450, autoplay: false                              });
  });

/* ------ Owl Carousel -------------------
------------------------------------------ */
        
    $("#owl-news").owlCarousel({
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
        singleItem : false,
      });

$("#owl-testim").owlCarousel({
        autoPlay: 3000,
        items : 1,
         itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
        singleItem : false,
      });    
           
/* ------ Skills Counter -----------------
------------------------------------------ */

    $(function(){
    var isGraph1Viewed=false;

    $(window).scroll(function() {   
       if(isScrolledIntoView($('#myStat, #myStat2, #myStat3, #myStat4, #myStat5, #myStat6, #myStat7, #myStat8')) && isGraph1Viewed==false){$('#myStat, #myStat2, #myStat3, #myStat4, #myStat5, #myStat6, #myStat7, #myStat8').circliful();isGraph1Viewed=true;}
    });

    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height() + 20; //the 20 is the amount pixels from the bottom to consider the element in view
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom < docViewBottom) && (elemTop > docViewTop));
    }
});
    
/* ------ Js Preloader -------------------
------------------------------------------ */

$(document).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
	
});


/* ------ Filter Gallery ----------
------------------------------------------ */

		 $(window).load(function(){
			/* initialize shuffle plugin */
			var $grid = $('#grid');

			$grid.shuffle({
				itemSelector: '.item' // the selector for the items in the grid
			});

			/* reshuffle when user clicks a filter item */
			$('#filter a').click(function (e) {
				e.preventDefault();

				// set active class
				$('#filter a').removeClass('active');
				$(this).addClass('active');

				// get group name from clicked item
				var groupName = $(this).attr('data-group');

				// reshuffle grid
				$grid.shuffle('shuffle', groupName );
			});

		});

/* ------ Wow Effect ---------------------
------------------------------------------ */

  wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       100,        // default
      mobile:       true,       // default
      live:         true        // default
    }
  )
  wow.init();

/* ------ End Document ----------
------------------------------------------ */