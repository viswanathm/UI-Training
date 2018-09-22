
            var articles = [
                {name: "Viswanath", role: "admin"},
                {name: "Arun", role: "normal"},
                {name: "Mahesh", role: "normal"}
            ];

            var container = document.getElementById("container");


            for(var i = 0; i<articles.length; i++){

                // step 1
                var p = document.createElement("p");

                // step2
                p.innerText = articles[i].name + "-" + articles[i].role;

                //step3
                container.appendChild(p);
            }