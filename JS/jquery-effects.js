document.getElementById("animate").addEventListener('click', function(){
    $("#result").animate({width: "200px", height: "200px", padding: "20px"}, 1000);
})

document.getElementById("reset").addEventListener('click', function(){
    $("#result").animate({width: "100px", height: "100px"});
})




// (selector).animate({styles},speed,easing,callback)