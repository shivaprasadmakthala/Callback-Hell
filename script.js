"use strict";

let main = document.createElement("div");
main.className = "row bg-info bg-gradient";
main.id = "main";

let countDown = document.createElement("div");
countDown.className = "h1 mt-5 pt-5 offset-4 col-4 text-danger text-center";

let eventDay = document.createElement("div");
eventDay.className = "h1 offset-4 col-4 my-3 text-warning text-center";
eventDay.innerHTML = "Happy Independence Day !!";
eventDay.style.visibility = "hidden";

countDown.innerHTML = 10;
setTimeout(function (){
    countDown.innerHTML = 9;
    setTimeout(function (){
        countDown.innerHTML = 8;
        setTimeout(function (){
            countDown.innerHTML = 7;
            setTimeout(function (){
                countDown.innerHTML = 6;
                setTimeout(function (){
                    countDown.innerHTML = 5;
                    setTimeout(function (){
                        countDown.innerHTML = 4;
                        setTimeout(function (){
                            countDown.innerHTML = 3;
                            setTimeout(function (){
                                countDown.innerHTML = 2;
                                setTimeout(function (){
                                    countDown.innerHTML = 1;
                                    setTimeout(function(){
                                        eventDay.style.visibility = "visible";
                                        countDown.style.visibility = "hidden";
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);

document.body.append(main);
main.append(countDown, eventDay);