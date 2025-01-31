var moreText = document.querySelector(".more");
var btnText = document.querySelector(".myBtn1");
var moreText2 = document.querySelector(".more2");
var btnText2 = document.querySelector(".myBtn2");
var moreText3 = document.querySelector(".more3");
var btnText3 = document.querySelector(".myBtn3");
// var blgtext1=document.querySelector(".blg1");

btnText.addEventListener('click',(e)=>{
    moreText.classList.toggle('show_more');
    // blgtext1.classList.toggle('blgmore');
  
    
 if (btnText.innerText=== "Read More..") {
  
  btnText.innerText = "Read Less";
 
} else {
  
  btnText.innerText = "Read More..";

 
  
}
});
btnText2.addEventListener('click',(e)=>{
  moreText2.classList.toggle('show_more');
  // blgtext1.classList.toggle('blgmore');

  
if (btnText2.innerText=== "Read More..") {

btnText2.innerText = "Read Less";

} else {

btnText2.innerText = "Read More..";



}
});
btnText3.addEventListener('click',(e)=>{
  moreText3.classList.toggle('show_more');
  // blgtext1.classList.toggle('blgmore');

  
if (btnText3.innerText=== "Read More..") {

btnText3.innerText = "Read Less";

} else {

btnText3.innerText = "Read More..";



}
});
