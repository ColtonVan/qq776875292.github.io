/*
* @Author: Marte
* @Date:   2019-06-06 09:16:30
* @Last Modified by:   Marte
* @Last Modified time: 2019-06-06 21:33:13
*/
function Box (parent,options) {
	var options = options || {};
	this.backgroundColor = options.backgroundColor || 'red';
	this.width = options.width || 20;
	this.height = options.height || 20;
	this.x = options.x || 0;
	this.y = options.y || 0;

	this.div = document.createElement('div');
	parent.appendChild(this.div);
	this.parent = parent;

	this.init();
}
Box.prototype.init = function  () {
	var div = this.div;
	div.style.width = this.width + 'px';
	div.style.height = this.height + 'px';
	div.style.backgroundColor = this.backgroundColor;
	div.style.left = this.x + 'px';
	div.style.top = this.y + 'px';
	div.style.position = 'absolute';
}
Box.prototype.random = function  () {
	var x = getRandom(0,this.parent.offsetWidth/this.width-1)*this.width;
	var y = getRandom(0,this.parent.offsetHeight/this.height-1)*this.height;
	this.div.style.left = x + 'px';
    this.div.style.top = y + 'px';
}