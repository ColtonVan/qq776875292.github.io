window.onload = function  () {
     var ct_cLeft = document.querySelector('.ct_cLeft');
     var ulBox = ct_cLeft.querySelector('ul:first-of-type');
     var lis = ulBox.querySelectorAll('li');
     var startY = 0;
     var moveY = 0;
     var distanceY = 0;
     var currentY = 0
     var maxTop_1 = 0;
     var minTop_1 = ct_cLeft.offsetHeight - ulBox.offsetHeight;
     var length = 80;
     var maxTop_2 = maxTop_1 + length;
     var minTop_2 = minTop_1 - length;
     ulBox.addEventListener('touchstart',function (event) {
        startY = event.targetTouches[0].clientY;
     });
     ulBox.addEventListener('touchmove',function (event) {
        moveY = event.targetTouches[0].clientY;
        distanceY = moveY - startY;
        ulBox.style.transition = 'none';
        if (currentY + distanceY <= maxTop_2 && currentY + distanceY >= minTop_2) {
        ulBox.style.top = currentY + distanceY + 'px';
        }
     });
     ulBox.addEventListener('touchend',function (event) {
        currentY += distanceY;
        if(currentY + distanceY >= maxTop_1){
            ulBox.style.transition = 'top 0.2s';
            ulBox.style.top = maxTop_1 + 'px';
            currentY = maxTop_1;
        }else if(currentY + distanceY <= minTop_1){
            ulBox.style.transition = 'top 0.2s';
            ulBox.style.top = minTop_1 + 'px';
            currentY = minTop_1;
        }
     });
     for(var i = 0; i<lis.length; i++){
        // lis[i].setAttribute('index',i);
        lis[i].index = i;
     }
    //  itcast.tap(ulBox,function (e) {
    //     for(var i = 0; i < lis.length; i++){
    //         lis[i].classList.remove('active');
    //         var now_a = e.target;
    //         var now_li = now_a.parentNode;
    //         now_li.classList.add('active');
    //         var li_height = now_li.offsetHeight;
    //         var left_height = document.querySelector('.ct_cLeft').offsetHeight;
    //         if ((lis.length - now_li.index)*li_height >= left_height) {
    //         // ulBox.style.top = - li_height*now_li.getAttribute('index') + 'px';
    //         ulBox.style.top = - li_height*now_li.index + 'px';
    //         currentY = - li_height*now_li.index;
    //         }else{
    //             ulBox.style.top = minTop_1 + 'px';
    //             currentY = minTop_1;
    //         }
    //     }
    // });
    window.addEventListener('load', function() {
        FastClick.attach(document.body);
    }, false);
    ulBox.addEventListener('click',function (e) {
        for(var i = 0; i < lis.length; i++){
            lis[i].classList.remove('active');
            var now_a = e.target;
            var now_li = now_a.parentNode;
            now_li.classList.add('active');
            var li_height = now_li.offsetHeight;
            var left_height = document.querySelector('.ct_cLeft').offsetHeight;
            if ((lis.length - now_li.index)*li_height >= left_height) {
            // ulBox.style.top = - li_height*now_li.getAttribute('index') + 'px';
            ulBox.style.top = - li_height*now_li.index + 'px';
            currentY = - li_height*now_li.index;
            }else{
                ulBox.style.top = minTop_1 + 'px';
                currentY = minTop_1;
            }
        }
    });
    $('.ct_back').on('click', function(event) {
        window.location.href='index.html';
    });
}