
        var btn = document.getElementById("change");
        btn.addEventListener("click", function(){
            console.log("Btn clicked");
        });

        btn.addEventListener("mouseover", function(){
            console.log("Btn mouse overed");
        });
        

        btn.addEventListener("mouseout", function(){
            console.log("Btn mouse out");
        });

        var pwd = document.getElementById("password");
        pwd.addEventListener("keyup", function(){
            console.log(event.target.value.length);
        });


        // function listener(){
        //     console.log(new Date())
        // };
        // btn.addEventListener("click", listener);

        // $("#change").on("click", function(){
        //     alert("Hi");
        // })