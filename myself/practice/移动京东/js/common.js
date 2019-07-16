var itcast = {
    tap:function  (dom,callback) {
        if (!dom || typeof dom != 'object') {
            return;
        }
        var startX,startY,startTime,endTime,endX,endY;
        dom.addEventListener('touchstart',function  (e) {
            if (e.targetTouches.length > 1) {
                return;
            }
            startTime = Date.now();
            startX = e.targetTouches[0].clientX;
            startY = e.targetTouches[0].clientY;
        });
        dom.addEventListener('touchend',function (e) {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            endTime = Date.now();
            if(Math.abs(endX - startX) > 6 || Math.abs(endY - startY) > 6){
                return;
            }
            if(endTime - startTime < 150){
                console.log('点击所用时间:'+(endTime - startTime)+'ms');
                callback && callback(e);
            }
        });
    }
}