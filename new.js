
var agrii=document.querySelector('.agriculture');
var prev=document.querySelector('.agerpage');


blog3.addEventListener('click',(e)=>{

    agrii.classList.toggle('show_agri');
    blog1.classList.toggle('blgg1toggle');
    blog2.classList.toggle('blgg2toggle');
    blog3.classList.toggle('blgg3toggle');


});
prev.addEventListener('click',(e)=>{
    agrii.classList.remove('show_agri');
    blog1.classList.remove('blgg1toggle');
    blog2.classList.remove('blgg2toggle');
    blog3.classList.remove('blgg3toggle');
})






