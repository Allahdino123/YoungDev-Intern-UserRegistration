var user = document.getElementById('first');
var user2 = document.getElementById('second');
var user3 = document.getElementById('third');
var user4 = document.getElementById('four');


user.addEventListener('input', ()=>{
    var username =document.getElementById('name');
     if(user.value.length == 0){
         username.innerHTML ='Please enter your name';
         username.style.color = "red";
         return false;
     }
     if(!user.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
         username.innerHTML='Write full name';
         username.style.color = "green";
         return false;
     }
     username.innerHTML='Successful';
     username.style.color = "yellow"; 
         return true;
 })


 user2.addEventListener('input', () =>{
    var userEmail = document.getElementById('email');
    if(user2.value.length == 0){
            userEmail.innerHTML ='Please enter your Email';
           userEmail.style.color = "red";
            return false;
    
    }

    if(!user2.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        userEmail.innerHTML ='Invaild Email';
        userEmail.style.color = "green";
         return false;
    }
    userEmail.innerHTML = 'Successful';
    userEmail.style.color = "yellow";
    return true;

 } )

 
user4.addEventListener('input', ()=>{
    var userNumber = document.getElementById('number');
    if(user4.value.length == 0){
        userNumber.innerHTML ='!Please enter your Mobile No';
        userNumber.style.color = "red";
        return false;
}

if(user4.value.length <=10 ){
    userNumber.innerHTML ="Mobile No Invalid";
    userNumber.style.color ="green";
    return false;
}

userNumber.innerHTML = 'Successful';
userNumber.style.color = "yellow";
    return true;  

 
})


user3.addEventListener('input', ()=>{
    var userPass = document.getElementById('password');
    if(user3.value.length == 0){
        userPass.innerHTML ='!Please enter your Email';
       userPass.style.color = "red";
        return false;
}

if(user3.value.length<4){
   userPass.innerHTML ="!Password is weak";
    userPass.style.color ="seagreen";
    return false;
}
if(user3.value.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}&/)){
    userPass.innerHTML ="!Password must be strong characters";
     userPass.style.color ="gray";
     return false;
 }

if(user4.value.length >=4 && pass.value.length <8){
    userPass.innerHTML ="Password is medium";
    userPass.style.color ="white";
    return false;
}

    userPass.innerHTML = 'Successful';
    userPass.style.color = "yellow";
    return true;  

 
})