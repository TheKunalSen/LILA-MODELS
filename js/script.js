var counter = 0;
var c = 0;
let loader = document.querySelector('.loader');
let herotext = document.querySelector('.herotext');
let logo = document.querySelector('.logo');
let header = document.querySelector('header');
let section = document.querySelector('section');
let elements = [herotext,header,logo,section];
elements.forEach((e)=> {
    e.style.opacity =0;
    e.style.transform = 'scale(1.5)';
})
window.addEventListener('load', ()=> {
var i = setInterval(function () {
  $(".loader h1").html(c + "%");
 

  counter++;
  c++;

  if (counter == 101) {
    clearInterval(i);
  }
}, 17);

setTimeout(() => {
    loader.style.transform = "translateY(100%)";
}, 2650);
setTimeout(() => {
    section.style.opacity = 1;
    section.style.transform = "scale(1)";
}, 3200);
elements.pop();
console.log(elements);
setTimeout(() => {
   elements.forEach((e)=>{
    e.style.opacity = 1;
    e.style.transform = 'scale(1)';
   });
},4200);
setTimeout(() => {
    loader.style.display = "none";
}, 4200);
});

