let title = document.querySelector(".title");
let storyOpening = document.querySelector(".story-opening");
let buttons = document.querySelector (".buttons");
let optionOne = document.querySelector (".option-one");
let optionTwo = document.querySelector (".option-two");
let h1 = document.querySelector (".subtitle1");
let optionTwoScreen = document.querySelector (".option-two-screen");
let optionOneScreen = document.querySelector (".option-one-screen");
let optionTwoEnd = document.querySelector (".option-two-end");
let hearts = document.querySelector (".hearts");
let broke = document.querySelector (".broke");
let optionOneEnd= document.querySelector (".option-one-end");

optionOne.onclick=function(){
title.style.display="none";
buttons.style.display="none";
h1.style.display="none";
storyOpening.style.display="none";
optionTwoScreen.style.display="none";
optionOneScreen.style.display="block";
};




broke.onclick=function(){
optionOneScreen.style.display="none";
optionOneEnd.style.display="block";
}


optionTwo.onclick=function(){
title.style.display="none";
buttons.style.display="none";
h1.style.display="none";
storyOpening.style.display="none";
optionOneScreen.style.display="none"; 
optionTwoScreen.style.display="block"; 
};

optionOneScreen.style.display="none"; 
optionTwoScreen.style.display="none"; 

hearts.onclick=function(){
optionTwoScreen.style.display="none";
optionTwoEnd.style.display="block";
}

  


    



