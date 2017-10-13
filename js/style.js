$(document).ready(function(){
    $(window).scroll(function (event) {
    	var a=$(window).scrollTop();
		
    });
});
	$('.imagesLoaded').imagesLoaded({ background: true }, function() {
  	
  		$(document).ready(function(){
                $('.example-animation').DrSlider(); //Yes! that's it!
            });
	  	$(document).ready(function(){
	  		$('body').addClass('loaded', 500);
	  		TweenMax.to('#sectionbmi', 2,{x:-70});
	  		TweenMax.to('#call', 2,{x:-70});
	  	});
	});

var e11=0;
function element1over1()
{
	if(e11==0)
	{
		e11++;
		TweenMax.to('#firstContentHead1', .4,{y:-250, boxShadow: 'none', ease:Back.easeOut});
		TweenMax.to('#firstContentText1', .4,  {opacity:0.95});
		TweenMax.to('#firstContentText1P', .4,  {opacity:1, y:150, ease:Back.easeOut});
	}	
}

function element1leave1()
{
	if(e11==1)
	{
		e11--;
		TweenMax.to('#firstContentText1P', .4,  {opacity:0, y:0});
		TweenMax.to('#firstContentText1', .4,  {opacity:0.3});
		TweenMax.to('#firstContentHead1', .4,{y:0});
	}
}

var e12=0;
function element1over2()
{
	if(e12==0)
	{
		e12++;
		TweenMax.to('#firstContentHead2', .4,{y:-250, boxShadow: 'none', ease:Back.easeOut});
		TweenMax.to('#firstContentText2', .4,  {opacity:0.95});
		TweenMax.to('#firstContentText2P', .4,  {opacity:1, y:150, ease:Back.easeOut});
	}	
}

function element1leave2()
{
	if(e12==1)
	{
		e12--;
		TweenMax.to('#firstContentText2P', .4,  {opacity:0, y:0});
		TweenMax.to('#firstContentText2', .4,  {opacity:0.3});
		TweenMax.to('#firstContentHead2', .4,{y:0});
	}
}


/* ################################################################################################### */

var e41=0;
function element4over1()
{
	if(e41==0)
	{
		e41++;
		TweenMax.to('#fs4Top1', .8,{opacity:0,y:-100,scale:0.2});
		TweenMax.to('#fs4Bottom1', .8,  {opacity:1});
	}
}

function element4leave1()
{
	if(e41==1)
	{
		e41--;
		TweenMax.to('#fs4Bottom1', .5, {opacity:0});
		TweenMax.to('#fs4Top1', .5, {opacity:1,y:0,scale:1});
	}
}

var e42=0;
function element4over2()
{
	if(e42==0)
	{
		e42++;
		TweenMax.to('#fs4Top2', .8, {opacity:0,y:-100,scale:0.2});
		TweenMax.to('#fs4Bottom2', .8, {opacity:1});
	}
}

function element4leave2()
{
	if(e42==1)
	{
		e42--;
		TweenMax.to('#fs4Bottom2', .5, {opacity:0});
		TweenMax.to('#fs4Top2', .5, {opacity:1,y:0,scale:1});
	}
}


/* ################################################################################################### */

var e51=0;
function element5over1()
{
	if(e51==0)
	{
		e51++;
		TweenMax.to('#fs5Top1', .8,{opacity:0,y:-100,scale:0.2});
		TweenMax.to('#fs5Bottom1', .8,  {opacity:1});
	}
}

function element5leave1()
{
	if(e51==1)
	{
		e51--;
		TweenMax.to('#fs5Bottom1', .5, {opacity:0});
		TweenMax.to('#fs5Top1', .5, {opacity:1,y:0,scale:1});
	}
}

var e52=0;
function element5over2()
{
	if(e52==0)
	{
		e52++;
		TweenMax.to('#fs5Top2', .8, {opacity:0,y:-100,scale:0.2});
		TweenMax.to('#fs5Bottom2', .8, {opacity:1});
	}
}

function element5leave2()
{
	if(e52==1)
	{
		e52--;
		TweenMax.to('#fs5Bottom2', .5, {opacity:0});
		TweenMax.to('#fs5Top2', .5, {opacity:1,y:0,scale:1});
	}
}

/* ############################################################################################################# */
/*
var loadedCount = 0;
var imagesToLoad = $('.bcg').length;
var loadingProgress = 0;
console.log(imagesToLoad);
$('.bcg').imagesLoaded({
    background: true
}).progress( function( instance, image ) {
    loadProgress();
});
 
function loadProgress(imgLoad, image)
{
    loadedCount++;
 
    loadingProgress = (loadedCount/imagesToLoad);
 
    TweenLite.to(progressTl, 0.7, {progress:loadingProgress, ease:Linear.easeNone});
 
}

var progressTl = new TimelineMax({
    paused: true,
    onUpdate: progressUpdate,
    onComplete: loadComplete
});
 
progressTl
    .to($('.progress span'), 1, {width:100, ease:Linear.easeNone});
 
function progressUpdate()
{
    loadingProgress = Math.round(progressTl.progress() * 100);
    $(".txt-perc").text(loadingProgress + '%');
 
}

function loadComplete() {
 
    // preloader out
    var preloaderOutTl = new TimelineMax();
 
    preloaderOutTl
        .to($('.progress'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn})
        .to($('.txt-perc'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn}, 0.1)
        .set($('body'), {className: '-=is-loading'})
        .to($('#preloader'), 0.7, {yPercent: 100, ease:Power4.easeInOut})
        .set($('#preloader'), {className: '+=is-hidden'})
 
    return preloaderOutTl;
}
*/

/* ############################################################################################################# */
/*var ab11=0;
var ab12=0;
var ab13=0;
var ab14=0;


function ab1()
{
		var highlights = new TimelineMax({
		    paused: true
		});
		highlights.insert(TweenLite.set('#ab1', {
		    css: { className: '+=glow' },
		    immediateRender: false
		}), 1);
		highlights.insert(TweenLite.set('#ab1', { 
		    css: { className: '-=glow' },
		    immediateRender: false
		}), 2);
		highlights.play();
}
function ab2()
{
	var highlights = new TimelineMax({
		    paused: true
		});
		highlights.insert(TweenLite.set('#ab2', {
		    css: { className: '+=glow' },
		    immediateRender: false
		}), 3);
		highlights.insert(TweenLite.set('#ab2', { 
		    css: { className: '-=glow' },
		    immediateRender: false
		}), 4);
		highlights.play();
}
function ab3()
{
	var highlights = new TimelineMax({
		    paused: true
		});
		highlights.insert(TweenLite.set('#ab3', {
		    css: { className: '+=glow' },
		    immediateRender: false
		}), 5);
		highlights.insert(TweenLite.set('#ab3', { 
		    css: { className: '-=glow' },
		    immediateRender: false
		}), 6);
		highlights.play();
}
function ab4()
{

	var highlights = new TimelineMax({
		    paused: true
		});
		highlights.insert(TweenLite.set('#ab4', {
		    css: { className: '+=glow' },
		    immediateRender: false
		}), 7);
		highlights.insert(TweenLite.set('#ab4', { 
		    css: { className: '-=glow' },
		    immediateRender: false
		}), 8);
		highlights.play();
}
*/