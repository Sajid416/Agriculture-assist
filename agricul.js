    var papay =document.querySelector('.papaya');
    var blog1  =document.querySelector('.blg1');
    var blog2  =document.querySelector('.blg2');
    var blog3  =document.querySelector('.blg3');
    var age=document.querySelector('.ager_page');
  
    age.addEventListener('click',(e)=>{
        papay.classList.remove('show_papaya');       
        blog1.classList.remove('blg1toggle');
        blog2.classList.remove('blg2toggle');
        blog3.classList.remove('blg3toggle');   
    
    });