document.getElementById('submit').addEventListener('click',()=>{
    const email = document.getElementById('email').value;
    const cnum= document.getElementById('cnum').value;
    const pass = document.getElementById('pass').value;
    const repass = document.getElementById('repass').value;
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;    
    const country = document.getElementById('country').value;
    

    const data = {
       email:email,
       phn:cnum,
       password:pass,
       fname:fname,
       lname:lname,
       gender:'male',
       country:country
    }

    if(pass ===repass){
        try{
            fetch('http://localhost:5501/home/registration',{
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
                    history.pushState(null,null,'Login_page.html');
                    location.reload();
                }else{
                    alert(data.message)
                }
            });
           }catch(err){
            console.log(err);
           }
    }else{
        alert('password does not match')
    }
   
})