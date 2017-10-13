/*===================================
=            GLOBAL VARS            =
===================================*/
var scrollMagicIsDestroyed = false;
var scrollMagicController = new ScrollMagic({

});




/*=================================
=            DOM READY            =
=================================*/
$(function() {

    $('#siteNav a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 100
        }, 500);
        return false;
    });

    if ($(window).width() > 768 && !is_touch_device() && !is_ie()) {
        createScrollMagic();
        //scrollDown();
    } else {
        $('body').addClass('no-scroll-magic');
    }
});




/*===================================
=            WINDOW LOAD            =
===================================*/
$(window).load(function() {
    $('body').addClass('show-site');
});




/*=====================================
=            WINDOW RESIZE            =
=====================================*/
$(window).resize(function() {

    // Kill for small screens
    if ($(window).width() <= 768 && !scrollMagicIsDestroyed) {
        destroyScrollMagic();
        scrollMagicIsDestroyed = true;
        $('body').addClass('no-scroll-magic');
    }

    // Force better DOM repainting hack. Helps on mobile
    $('html').addClass('force-gpu').removeClass('force-gpu');
});



/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/

function createScrollMagic() {
var navTween = TweenMax.fromTo('#siteNav', 6,
    {
        backgroundColor: "transparent"
    },
    {
        backgroundColor: "#75e5f1"
    }
    );
    var nav9Scene = new ScrollScene({
    triggerElement: '#ScrollDown',
    duration: 200, 
    offset: 0
    })
    .addTo(scrollMagicController)
    .setTween(navTween);


/* ##################################################### */
    var navTween9 = TweenMax.fromTo('.nav9', 6,
    {
        backgroundColor: "transparent"
    },
    {
        backgroundColor: "#6e88e8"
    }
    );
    var nav9Scene = new ScrollScene({
    triggerElement: '#ScrollDown',
    duration: 200, 
    offset: 0
    })
    .addTo(scrollMagicController)
    .setTween(navTween9)
/* ##################################################### */
    var navTween3 = TweenMax.fromTo('.nav3', 6,
    {
        backgroundColor: "transparent"
    },
    {
        backgroundColor: "#75e5f1"
    }
    );
    var nav3Scene = new ScrollScene({
    triggerElement: '#ScrollDown',
    duration: 200,
    offset: 0
    })
    .addTo(scrollMagicController)
    .setTween(navTween3)
/* ##################################################### */
    
    //.addIndicators({name:"1 (duration:200)"})
/* ##################################################### */
    var thirdContentTween = TweenMax.fromTo('#triggarThirdContent', 8,
    {
        backgroundPosition: '0px 0px'
    },
    {
        backgroundPosition: '0px -200px'
    }
    );
    var thirdContentScene = new ScrollScene({
    triggerElement: '#triggarThirdContent',
    duration:1100,
    offset: 0
    })
    .addTo(scrollMagicController)
    .setTween(thirdContentTween)




/* ##################################################### */
    var thirdContentTween1 = TweenMax.staggerFromTo('.fc3', 0.1,
    {
        y:30,
        opacity:0
    },
    {
        y:0,
        opacity:1
    },
    0.3);
    var thirdContentScene1 = new ScrollScene({
    triggerElement: '#triggarThirdContent',
    duration: 0,
    offset: 0
    })
    .addTo(scrollMagicController)
    .setTween(thirdContentTween1)

/* ##################################################### */
    var firstContentTween = TweenMax.fromTo('#triggarFirstContent', 1.2,
    {
        opacity: 0,
       y: 500
    },
    {
        opacity:1,
        y:-62
    }
    );
    var firstContentScene = new ScrollScene({
    triggerElement: '#ScrollDown',
    duration:0,
    offset: 0
    })
    .addTo(scrollMagicController)
    .setTween(firstContentTween)
/* ##################################################### */
    var contactTween = TweenMax.staggerFromTo('.fcContact', 0.2,
    {
        y:5,
        scale:0.8,
        opacity:0
    },
    {
        y:0,
        scale:1,
        opacity:1
    },
    0.15);
    var contactScene = new ScrollScene({
    triggerElement: '#contact'
    })
    .addTo(scrollMagicController)
    .setTween(contactTween)
/* ##################################################### */
    var aboutTween = TweenMax.staggerFromTo('.about1', 0.2,
    {
        y:30,
        opacity: 0
    },
    {
        y:0,
        opacity: 1
    },
    0.2);
    var aboutScene = new ScrollScene({
    triggerElement: '#triggarAbout'
    })
    .addTo(scrollMagicController)
    .setTween(aboutTween)
/* ##################################################### */
var bottomTween = TweenMax.fromTo('.bottomP', 1.25,
    {
        opacity: 0,
        scale: 0.5
    },
    {
        opacity:1,
        scale: 1
    }
    );
    var bottomScene = new ScrollScene({
    triggerElement: '#bottom',
    triggerHook: 'onEnter'
    })
    .addTo(scrollMagicController)
    .setTween(bottomTween)
    /* ##################################################### */
var forthTween = TweenMax.fromTo('#triggarFourthContent', 1.0,
    {
        opacity: 0,
        y: 30,
        scale: 0.85
    },
    {
        opacity:1,
        y: 0,
        scale: 1
    }
    );
    var forthScene = new ScrollScene({
    triggerElement: '#triggarFourthContent',
    triggerHook: 'onEnter'
    })
    .addTo(scrollMagicController)
    .setTween(forthTween)
    /* ##################################################### */
var fifthTween = TweenMax.fromTo('#triggarFifthContent', 1.0,
    {
        opacity: 0,
        y: 30,
        scale: 0.85
    },
    {
        opacity:1,
        y: 0,
        scale: 1
    }
    );
    var fifthScene = new ScrollScene({
    triggerElement: '#triggarFifthContent',
    triggerHook: 'onEnter'
    })
    .addTo(scrollMagicController)
    .setTween(fifthTween)

/* ##################################################### */
/*var bmiTween = TweenMax.fromTo('.bmi', 0.5,
    {
        opacity: 0,
        scale: 0.1
    },
    {
        opacity:1,
        scale: 1,
        ease:Back.easeOut
    }
    );
    var bmiScene = new ScrollScene({
    triggerElement: '.bmi',
    triggerHook: 'onEnter'
    })
    .addTo(scrollMagicController)
    .setTween(bmiTween)*/
}


function scrollDown()
{
    $('html, body').animate({scrollTop:316}, 600);
}


function destroyScrollMagic() {
    scrollMagicController.destroy(true)
    scrollMagicController = null;
    $('*').removeAttr('style');
}


function is_touch_device() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
};

function is_ie() {
    // Disable for IE
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
        return true;
    }
}


