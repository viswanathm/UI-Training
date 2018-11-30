var test = "abc";
var Color;
(function (Color) {
    Color[Color["Pink"] = 1] = "Pink";
    Color[Color["Pinky"] = 2] = "Pinky";
    Color[Color["pinker"] = 3] = "pinker";
})(Color || (Color = {}));
;
console.log(Color.Pink);
