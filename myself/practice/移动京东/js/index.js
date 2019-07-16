$(function  () {
    searchOpacity();
    timeBack();
    carousel();
    category();
});
function category () {
    window.addEventListener('load', function() {
        FastClick.attach(document.body);
    }, false);
    $('.jd_nav').find('a').on('click', function() {
        console.log('msg')
        window.location.href = 'category.html';
        });
    }
function searchOpacity () {
    $(window).on('scroll',function() {
        var opc = 0;
        if ($(window).scrollTop()<$('.jd_bannerImg').find('img').height()) {
            opc = $(window).scrollTop()/$('.jd_bannerImg').find('img').height();
        }else{
            opc = 1;
        }
        $('.jd_search').css('background','rgb(233,35,34,'+opc+')');
    });
}
function timeBack () {
    var tbSpan = $('.jd_sk_time').find('span');
    var myTime = 3600*24*2;
    setInterval(function () {
        myTime--;
        var myH = Math.floor(myTime/3600);
        var myM = Math.floor((myTime%3600)/60);
        var myS = Math.floor((myTime%3600)%60);
        var d_1 = Math.floor(myH/10);
        var d_2 = myH%10;
        var d_4 = Math.floor(myM/10);
        var d_5 = myM%10;
        var d_7 = Math.floor(myS/10);
        var d_8 = myS%10;
        tbSpan.eq(0).text(d_1);
        tbSpan.eq(1).text(d_2);
        tbSpan.eq(3).text(d_4);
        tbSpan.eq(4).text(d_5);
        tbSpan.eq(6).text(d_7);
        tbSpan.eq(7).text(d_8);
        // 1小时1分钟1秒 = 1*60*60   1*60   1 = 3661
    },1000);
}
var bo = true;
function carousel () {
    var myRound = $('.jd_bannerIndicator').find('li');
    var i = 1;
    var timerId = null;
    timerId = setInterval(crs,2500);
    var touchStartX,touchEndX,distanceX,bannerLeft;
    var bo = true;
    $('.jd_bannerImg').find('img').on('touchstart', function(event) {
        clearInterval(timerId);
        timerId = 0;
        touchStartX = event.originalEvent.targetTouches[0].pageX;
        bannerLeft = parseFloat($('.jd_bannerImg').css('left'));
    }).on('touchmove',function(event) {
        touchEndX = event.originalEvent.targetTouches[0].pageX;
        distanceX = touchEndX - touchStartX;
        $('.jd_bannerImg').css({'left':bannerLeft + distanceX});
    }).on('touchend',function(event) {
        if (Math.abs(distanceX) < 100) {
            $('.jd_bannerImg').animate({'left':bannerLeft},500);
            setTimeout(function () {timerId = setInterval(crs,2500);bo = true;},0);
        }else if(Math.abs(distanceX) > 100){
            if (bo) {
                i--;
                bo = false;
            }
            if (distanceX > 0 ) {
                i--;
            }else{
                i++;
            }
            crs ();
            setTimeout(function () {i++;timerId = setInterval(crs,2500);bo = true;},0);
        }
    });
    function crs () {
        function act_1 () {
            $('.jd_bannerImg').animate({'left':''+(-100-100*i)+'%'},500);
        }
        function act_2 (length,i_val) {
            $('.jd_bannerImg').animate({'left':''+(-100-100*i)+'%'},500,function(){
                    $('.jd_bannerImg').css({'left':length});
                });
            i = i_val;
        }
        if (timerId) {
            if (i != 0 && i <= 7) {
                act_1 ();
            }else if(i == 0){
                $('.jd_bannerImg').css({'left':'0'}).animate({'left':''+(-100-100*i)+'%'},500);
                console.log('0')
            }
            else if (i > 7) {
                $('.jd_bannerImg').css({'left':'0'}).animate({'left':'-100%'},500);
                    console.log('dayu7')
            }
        }else{
            if(i < 0){
                act_2 ('-800%',7);
            }else if(i >= 0 && i <= 7){
                act_1 ();
            }else{
                act_2 ('-100%',0);
            }
        }
        myRound.removeClass('active');
        myRound.eq(i).addClass('active');
        if(timerId){
            if (i == 7) {
                i=-1;
                i++;
            }else if (i > 7) {
                myRound.removeClass('active');
                myRound.eq(0).addClass('active');
                i = 1;
            }else if(i < 7){
                i++;
            }
        }
    }

}


