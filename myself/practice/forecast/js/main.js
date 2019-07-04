$(function() {
    $('#headerGet').on('keydown',function(event) {
        var val = $(this).val();
        if (event.keyCode == 13) {
            getData(val);
        }
    });
    function getData (value){
        value = value ? value : '北京';
        $.ajax({
            // url: 'https://api.jisuapi.com/weather/query?appkey=3f421b0b93378528&city='+val,
            url: 'https://api.jisuapi.com/weather/query',
            data:{appkey:'3f421b0b93378528',city:value},
            type: 'get',
            dataType: 'jsonp',
            success:function(data){
                //console.log(data);
                var temp = template('temp',data);
                $('#ulLists').html(temp);
            }
        });
    }
});