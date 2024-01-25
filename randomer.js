
        const toUpperCase = document.getElementById('toUpperCase');
        const fname = document.getElementById('fname');
    
        const color1 = document.querySelector('.Color1');
        const h1Element = color1.querySelector('h1');

        const color2 = document.querySelector('.Color2');
        const h1Element2 = color2.querySelector('h1');

        const color3 = document.querySelector('.Color3');
        const h1Element3 = color3.querySelector('h1');

        const randomColor = document.getElementById('randomColor');
        

        const randColors = ["white", "blue", "yellow", "orange", "pink", "red"];
        function randoColrs(){
            result = Math.floor(Math.random() * 6);
            return randColors[result];
        }
        //console.log(randoColrs());
        


        function randomColor1(){    

            let randomOne = Math.floor(Math.random() * 7);
            let xx = randoColrs();


           // console.log(xx);
            if (randomOne < 1) {
                    // 60% chance of getting 0
                    randomOne = 0;
                } else {
                    // 40% chance of getting a non-zero value (1 to 6)
                    randomOne = Math.floor(Math.random() * 6) + 1;
                }

            switch(randomOne){
                case 0:
                color1.style.backgroundColor = xx;
                h1Element.innerHTML = `the random number is 0 ${xx.toUpperCase()}`;
                
               // console.log(`"THE COLOR IS EMPTY:" ${randomOne}`); 
               break;

                case 1: 
                color1.style.backgroundColor = xx;
                h1Element.innerHTML = `the random number is 1 ${xx.toUpperCase()}`;
               // console.log(`"THE COLOR IS BLUE:" ${randomOne}`); 
               break;

                case 2: 
                color1.style.backgroundColor = xx;
                h1Element.innerHTML = `the random number is 2 ${xx.toUpperCase()}`;
               // console.log(`"THE COLOR IS YELLOW:" ${randomOne}`); 
               break;

                case 3: 
                color1.style.backgroundColor = xx;
                h1Element.innerHTML = `the random number is 3 ${xx.toUpperCase()}`;
               // console.log(`"THE COLOR IS GREEN:" ${randomOne}`); 
               break;

                case 4: 
                color1.style.backgroundColor = xx;
                h1Element.innerHTML = `the random number is 4 ${xx.toUpperCase()}`;
                //console.log(`"THE COLOR IS ORANGE:" ${randomOne}`);
                break;

                case 5: 
                color1.style.backgroundColor = xx;
                h1Element.innerHTML = `the random number is 5 ${xx.toUpperCase()}`;
               // console.log(`"THE COLOR IS PINK:" ${randomOne}`); 
               break;

                case 6: 
                color1.style.backgroundColor = xx;
                h1Element.innerHTML = `the random number is 6 ${xx.toUpperCase()}`;
                //console.log(`"THE COLOR IS RED:" ${randomOne}`); 
                break;
                }
        }

        function randomColor2(){


            let randomTwo = Math.floor(Math.random() * 7);
            let yy = randoColrs();
            
            if (randomTwo < 1) {
                // 60% chance of getting 0
                randomTwo = 0;
            } else {
                // 40% chance of getting a non-zero value (1 to 6)
                randomTwo = Math.floor(Math.random() * 6) + 1;
            }
            
            switch(randomTwo){
                case 0: 
                color2.style.backgroundColor = yy;
                h1Element2.innerHTML = yy.toUpperCase();
                //console.log(`"THE COLOR IS EMPTY:" ${randomTwo}`); 
                break;

                case 1: 
                color2.style.backgroundColor = yy;
                h1Element2.innerHTML = yy.toUpperCase();
                //console.log(`"THE COLOR IS BLUE:" ${randomTwo}`); 
                break;

                case 2: 
                color2.style.backgroundColor = yy;
                h1Element2.innerHTML = yy.toUpperCase();
                //console.log(`"THE COLOR IS YELLOW:" ${randomTwo}`); 
                break;

                case 3: 
                color2.style.backgroundColor = yy;
                h1Element2.innerHTML = yy.toUpperCase();
               // console.log(`"THE COLOR IS GREEN:" ${randomTwo}`); 
               break;

                case 4: 
                color2.style.backgroundColor = yy;
                h1Element2.innerHTML = yy.toUpperCase();
               // console.log(`"THE COLOR IS ORANGE:" ${randomTwo}`); 
               break;

                case 5: 
                color2.style.backgroundColor = yy;
                h1Element2.innerHTML = yy.toUpperCase();
                //console.log(`"THE COLOR IS PINK:" ${randomTwo}`);
                 break;

                case 6: 
                color2.style.backgroundColor = yy;
                h1Element2.innerHTML = yy.toUpperCase();
                //console.log(`"THE COLOR IS RED:" ${randomTwo}`); 
                break;
                }
        }

        function randomColor3(){

            
            let randomThree = Math.floor(Math.random() * 7);
            let zz = randoColrs();

            if (randomThree < 1) {
                // 30% chance of getting 0
                randomThree = 0;
            } else {
                // 40% chance of getting a non-zero value (1 to 6)
                randomThree = Math.floor(Math.random() * 6) + 1;
            }

            switch(randomThree){
                case 0: 
                color3.style.backgroundColor = zz;
                h1Element3.innerHTML = zz.toLowerCase();
                //console.log(`"THE COLOR IS EMPTY:" ${randomThree}`); 
                break;

                case 1: 
                color3.style.backgroundColor = zz;
                h1Element3.innerHTML = zz.toLowerCase();
               // console.log(`"THE COLOR IS BLUE:" ${randomThree}`); 
               break;

                case 2: 
                color3.style.backgroundColor = zz;
                h1Element3.innerHTML = zz.toLowerCase();
                //console.log(`"THE COLOR IS YELLOW:" ${randomThree}`); 
                break;

                case 3: 
                color3.style.backgroundColor = zz;
                h1Element3.innerHTML = zz.toLowerCase();
               // console.log(`"THE COLOR IS GREEN:" ${randomThree}`); 
               break;

                case 4: 
                color3.style.backgroundColor = zz;
                h1Element3.innerHTML = zz.toLowerCase();
               // console.log(`"THE COLOR IS ORANGE:" ${randomThree}`); 
               break;

                case 5: 
                color3.style.backgroundColor = zz;
                h1Element3.innerHTML = zz.toLowerCase();
               // console.log(`"THE COLOR IS PINK:" ${randomThree}`); 
               break;

               // console.log(`"THE COLOR IS RED:" ${randomThree}`); 
               break;
                }
        }

        function handleAllFunctions() {
            randomColor1();randomColor2();randomColor3();   
        }

        randomColor.addEventListener('click', handleAllFunctions);
     
