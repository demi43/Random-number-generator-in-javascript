const mybutton=document.getElementById("mybutton");
const mylabel1=document.getElementById("mylabel1");
const mylabel2=document.getElementById("mylabel2");
const mylabel3=document.getElementById("mylabel3");
const min=1;
const max=6;

let randonum1;
let randonum2;
let randonum3;

mybutton.onclick=function(){
    randonum1=Math.floor(Math.random() * max) + min;
    randonum2=Math.floor(Math.random() * max) + min;
    randonum3=Math.floor(Math.random() * max) + min;
    mylabel1.textContent= randonum1;
    mylabel2.textContent= randonum2;
    mylabel3.textContent= randonum3;
}