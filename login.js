

document.getElementById('login_button').addEventListener('click',()=>{
    console.log('button clicked');
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    const user_info = {
       email:email,
       password:password,
    }

    if(email && password){
        try{
            fetch('http://localhost:5501/home/login',{
                method:"POST",
                body:JSON.stringify(user_info),
                headers:{
                    "Content-type":"application/json; charset=UTF-8",
                }
            }
            )  
            .then(response => response.json())
            .then(data => {
                if(data.success){ 
                    alert(data.message);
                    history.pushState(null,null,'admin.html');                    
                    location.reload();
                }else{
                    alert(data.message)
                }
            });
           }catch(err){
            alert('login failed')
           }
    }else{
        alert('data incomplete')
    }
   
})