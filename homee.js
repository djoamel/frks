function change1() {
    document.getElementById('page').innerHTML='u clicked once';
}

function change2() {
    document.getElementById('page').innerHTML='u clicked twice';
}

var myinput= document.getElementById('input');
/*if(myinput.hasAttribute('src')){
    alert('yes 3ando');
}else{
    alert('nn makanch');
    myinput.setAttribute('src',('#'));
}*/
var mydiv=document.getElementById('div');
var my3omla=document.getElementById('3omla');

my3omla.onchange=function calc() {
    mydiv.innerHTML = myinput.value *my3omla.value;
    
}

var mydit=document.getElementById('dit');
// mydit.onmouseout=function(){
    
// };

mydit.addEventListener('mouseon', () => {
    mydit.innerHTML='u hoverd on me';
})


const myFunction = () => {
    console.log("I am A function");
}



/*document.title
           .images
            .forms
            .body
            .anchors a without href
*/

var myform=document.getElementById('show');
//myform.innerHTML=document.forms[1].x4.placeholder;
//myform.innerHTML=document.body.innerText

var myanh=document.getElementById('anh');
myanh.innerHTML=document.links[1].innerText; 

var myhtml=document.getElementById('html');
//alert(myhtml.innerText);
myhtml.innerText='this is me med djamel';
//prompt(myhtml.innerText);

var mychild=document.getElementById('child');
console.log(mychild.lastElementChild);
console.log(mychild.childNodes);
console.log(mychild.children);
mynwelement=document.createElement('div');
mynwtxt=document.createTextNode('hello mother fucker');
mychild.appendChild(mynwelement);
mynwelement.appendChild(mynwtxt);
mychild.insertBefore(mynwelement,mychild.childNodes[3]);
//mychild.removeChild(mychild.childNodes[3]);
console.log(mychild.childNodes[3].childNodes[0].nodeName);

var hide=document.getElementById('hide');
mybtn=document.getElementById('btn');


var isdisplayed=0;
function clc(){

if(isdisplayed==1){

    document.getElementById('byn').style.display='none';
    //this.nextElementSibling.style.display='none';
    isdisplayed=0;

}else{
    document.getElementById('byn').style.display='inline';
    isdisplayed=1;
}

}

var mykoul=document.getElementById('koul');
var mypower=document.getElementById('pop');
mykoul.onclick = function(){
    document.getElementById('m1').style.display='none';
}
mypower.onclick =function(){
   mykoul.addEventListener('click',function(){
    document.getElementById('m2').style.display='none';

   }) ;
}

var myscroll=document.getElementById('scrol');

myscroll.onclick=function(){
    'use strict';
    document.body.scrollTop +=100;
    console.log(document.body.scrollTop);
    if(document.body.scrollTop>=1000){
        this.classList.add('active')
    }
}

var mystl=document.getElementById('stl');

mystl.style.backgroundColor='#092F00';
mystl.style.color='deeppink';
mystl.style.padding='10px';
mystl.style.border='solid 2px black'

function chng(){
    mystl.classList.add('active');
}

console.log(document.URL);

window.onresize=function(){
    alert('you resized');
}
  var myevnt=document.getElementById('events');
  var mynote=document.getElementById('note');
  myevnt.onclick= function() {
    mynote.textContent='hahahaha u clicked';

  }

  myevnt.ondblclick= function() {
    mynote.textContent='';

  }