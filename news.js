var blog1  =document.querySelector('.blg1');
var govnew =document.querySelector('.govnews');
var blog2  =document.querySelector('.blg2');
var blog3  =document.querySelector('.blg3');
var back=document.querySelector('.previous');
var blgsec=document.querySelector('.blog-section');
var papay =document.querySelector('.papaya');

blog1.addEventListener('click',(e)=>{

govnew.classList.toggle('show_news');
blog1.classList.toggle('blg1toggle');
blog2.classList.toggle('blg2toggle');
blog3.classList.toggle('blg3toggle');

});
back.addEventListener('click',(e)=>{
    govnew.classList.remove('show_news');       
    blog1.classList.remove('blg1toggle');
    blog2.classList.remove('blg2toggle');
    blog3.classList.remove('blg3toggle');
   

});

blog2.addEventListener('click',(e)=>{

    papay.classList.toggle('show_papaya');
    blog1.classList.toggle('blg1toggle');
    blog2.classList.toggle('blg2toggle');
    blog3.classList.toggle('blg3toggle');
    
    });

    back.addEventListener('click',(e)=>{
        papay.classList.remove('show_papaya');       
        blog1.classList.remove('blg1toggle');
        blog2.classList.remove('blg2toggle');
        blog3.classList.remove('blg3toggle');
       
    
    });