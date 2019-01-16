var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a'];
//Enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
var bgcolor = color.red;
