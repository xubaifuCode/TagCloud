/*
x=rsinθcosφ
y=rsinθsinφ
z=rcosθ
r = 250
θ == y
φ == x
*/

var baseLeft = $("#ball").offset().left + 20;
var tags = $(".tag_base");
var tgArr = new Array();
var r = 250;
var speed = 30;
var oppo;
setPosition();
setMove();
function setMove() {
	setInterval(function() {
		for (var i = 0; i < tgArr.length; i++) {
			tagMove(tgArr[i], tgArr[i].getDeress());
		}
	}, speed);	
}

function tagMove(_tag, _degree) {
	if (_degree > 0 && _degree < 180) {
		oppo = 1 + _degree / 360;
	} else {
		oppo = 180 / _degree;
	}
	_tag.toNextPosition(oppo, _tag.getNextPosition());
}
function setPosition() {
	for (var i = 0; i < tags.length; i++) {
		tgArr[i] = new tagModel($("#tg" + i), Math.random() * 360);
		tgArr[i].setCss("left", baseLeft + (Math.random() * 400) + "px");
	}
}

function tagModel(_tg, _degree) {
	var $tg = _tg;
	var degree = _degree;
	var thr;

	this.getNextPosition = function() {
		degree = degree % 360;
		thr = Math.PI / 180 * (degree++);
		return r * Math.cos(thr) + r;
	}

	this.toNextPosition = function(_oppo, _tz) {
		$tg.css("top", _tz + "px")
		$tg.css("width", (60 * _oppo) + "px");
		$tg.css("height", (30 * _oppo) + "px");
		$tg.css("fontSize", (15 * _oppo) + "px");
		$tg.css("opacity", _oppo);
	}

	this.getDeress = function() {
		return degree;
	}

	this.setCss = function(_attr, _value) {
		$tg.css(_attr, _value);
	}
}