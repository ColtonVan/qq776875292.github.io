	var container = document.getElementsByClassName('container')[0];
	var arr = [];
	for(var i = 0;i<10;i++){
	var r = getRandom(0,255);
	var g = getRandom(0,255);
	var b = getRandom(0,255);
	var box = new Box(container,{
		backgroundColor:'rgb('+r+','+g+','+b+')'
	});
	arr.push(box);
	}
	setInterval(function  () {
		for(var i = 0;i<arr.length;i++){
         arr[i].random();
		}
	}, 500)
