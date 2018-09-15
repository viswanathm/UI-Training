// setTimeout(function(){ alert("abc") }, 3000);

// setTimeout(function(){
//     alert('abc');
// }, 2000)


// function callback(){ 
//     alert("abc");
// }
// setTimeout(callback, 3000);


setInterval(function(){
    var ele = document.getElementById("time");
    var d = new Date();

    ele.innerText = d.toString();
}, 1000)