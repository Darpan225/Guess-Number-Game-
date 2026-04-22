'use strict';

let ext_num = document.querySelector(".exact_num").textContent 

ext_num = Math.floor(Math.random() * 20) + 1
console.log (ext_num);

// document.querySelector(".exact_num").textContent = ext_num;

let scor_num = document.querySelector("#scr_num").textContent; 

let hg_scr = document.querySelector("#high_scr").textContent;

 /* --------- check Section -------- */

let btn = document.querySelector("#checkbtn")

btn.addEventListener("click", function(){

 let numbr = document.querySelector("#number").value;
 numbr = Number(numbr);

//  console.log(numbr);
//  console.log(typeof(numbr));

if(ext_num === numbr){
   
   document.querySelector(".exact_num").textContent = ext_num;

   document.querySelector("#msg1").textContent = " Bingo!!! You Guessed It Right 🏆🏆 ";
    
   document.querySelector(".exact_num").style .backgroundColor = "#B1FF8A";

}

  else if ((ext_num+2)===numbr || (ext_num+1)===numbr ||(ext_num-2)===numbr ||(ext_num-1)===numbr) {

    document.querySelector("#msg1").textContent = " Too Close 😯 "; 

 }

 else if (numbr<1 || numbr>20) {

    document.querySelector("#msg1").textContent = " Enter Between 1 to 20 😅 ";
 }
 
 else if ( ((ext_num+2) >numbr) || ((ext_num-2) < numbr) ) {

    document.querySelector("#msg1").textContent = " Nope 😪 ";

 }

//  else if(scor_num === 0) {
//    document.querySelector("#msg1").textContent = " Sorry ";
// }
 else {

    document.querySelector("#msg1").textContent = " Invalid Input ❌❌";
 }

 /* --------- Score Section -------- */

scor_num = Number(scor_num)-1
if(scor_num>=0){

   document.querySelector("#scr_num").textContent = scor_num;
}

 if(scor_num===0 || scor_num<0 ){
 document.querySelector("#msg1").textContent = " Sorry Out Of Chances 😐";

}

 /* --------- High Score Section -------- */

if(ext_num === numbr){
   document.querySelector("#high_scr").textContent = scor_num;
}

});

 /* --------- End Check Section -------- */


 /* --------- Again Section -------- */

 // Again button

let ag_btn = document.querySelector(".again_btn")

ag_btn.addEventListener("click", function(){

// To clear input box

  document.querySelector("#number").value = " ";

//To reset text of any element
   
   document.querySelector("#msg1").textContent = "Start guessing....";
 
   scor_num = document.querySelector("#scr_num").textContent = "20";

   document.querySelector("#high_scr").textContent = " ";


// New random number

document.querySelector(".exact_num").textContent 

ext_num = Math.floor(Math.random() * 20) + 1;

document.querySelector(".exact_num").textContent = "?";

// Background color

document.querySelector(".exact_num").style .backgroundColor = "whitesmoke";


});

 /* --------- Again Section ends -------- */

 