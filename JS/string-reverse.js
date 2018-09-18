var str = "this is js";
var arr = str.split(" ");
var reverseArr = arr.reverse();
console.log(reverseArr.join(" "));

//------------------------- ARRAY JOIN -------------

var emptyStr = "";
for(var i=0; i<reverserArr.length; i++){
   emptyStr = emptyStr + reverserArr[i] + " ";
}

//----------------- ARRAY REVERSE -----------------
var arr = ["this", "is", "js", "class", "abc"];
var arr1 = ["this", "is", "js", "class"];
var arr2 = ["this", "is", "js"];
var arr3 = ["this", "is"];

var emptyArr = [];
for(var i = arr.length-1; i >= 0  ; i--){
    emptyArr.push(arr[i]);
}
console.log(emptyArr);

function reverseArray(arr){
    var emptyArr = [];
    for(var i = arr.length-1; i >= 0  ; i--){
        emptyArr.push(arr[i]);
    }
    console.log(emptyArr);
};

reverseArray(arr);
reverseArray(arr1);
reverseArray(arr2);
reverseArray(arr3);