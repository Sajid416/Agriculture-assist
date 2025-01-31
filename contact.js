
document.getElementById('submit').addEventListener('click',()=>{
    const name= document.getElementById('name').value;
    const email = document.getElementById('email').value;   
    const comment = document.getElementById('textarea').value;    

    const data = {
       email:email,
       name:name,
       comment:comment,
       
    }
    
        try{
            fetch('http://localhost:5501/contact/contacts',{
                method:"POST",
                body:JSON.stringify(data),
                headers:{
                    "Content-type":"application/json; charset=UTF-8",
                }
            }
            )           //api for the get request
            .then(response => response.json())
            .then(data => {
                if(data.success){ 
                    alert(data.message);
                    // history.pushState(null,null,'Login_page.html');
                    // location.reload();
                }else{
                    alert(data.message)
                }
            });
           }catch(err){
            console.log(err);
           }
    
   
})