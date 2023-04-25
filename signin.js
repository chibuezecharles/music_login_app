const input_form = document.querySelector(".input_form");
const signin_email = document.querySelector(".signin_email");
const signin_password = document.querySelector(".signin_password");

// looping through the local Storage objects and
input_form.addEventListener("submit", (e) => {
    e.preventDefault();

    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let key_value = JSON.parse(localStorage.getItem(key));
    
        key_value.forEach((users) => {
            if(users.email == signin_email.value && users.password == signin_password.value){

                let params = new URLSearchParams();
                params.append('email', signin_email.value);
                params.append('password', signin_password.value);
                params.append('name', users.name);
                

                signin_email.value ="";
                signin_password.value = "";

                //redirect to the dashboard
                location.href = "./dashboard.html?"+ params.toString();

            }
        })
    
    }

});




