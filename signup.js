
// Sign up page Script:

const signup_input_form = document.querySelector(".signup_input_form");
const signup_name = document.querySelector(".signup_name");
const signup_email = document.querySelector(".signup_email");
const signup_password = document.querySelector(".signup_password");

signup_input_form.addEventListener('submit', (e) =>{
    e.preventDefault();

    // to get the values of the input fields.
    const signup_name_value = signup_name.value;
    const signup_email_value = signup_email.value;
    const signup_password_value = signup_password.value;

    // getting all the data in the localstorage and setting it into an array.
    let users_array = JSON.parse(localStorage.getItem('userinput_details')) || [];
    console.log(users_array);

    if(users_array !=""){

        users_array.forEach((users) => {
            if(users.password != signup_password_value && users.email != signup_email_value){
                
                // storing the input values in an object.
                const userinput_details = {
                    name: signup_name_value,
                    email: signup_email_value,
                    password: signup_password_value
                };
    
                // pushing the object into the array.
                users_array.push(userinput_details);
    
                //storing the object in the local storage.
                localStorage.setItem('userinput_details', JSON.stringify(users_array));
                
                // clearing the values of the input fields.
                signup_name.value = "";
                signup_email.value = "";
                signup_password.value = "";

    
                //redirecting to sign in page.
                location.href= "./signin.html";
    
             }else {
                console.log("Already have an acount, Please sign in.");
                signup_name.value = "";
                signup_email.value = "";
                signup_password.value = "";

             }
        });

    }
    else{
            // storing the input values in an object.
            const userinput_details = {
                name: signup_name_value,
                email: signup_email_value,
                password: signup_password_value
            };

            // pushing the object into the array.
            users_array.push(userinput_details);

            //storing the object in the local storage.
            localStorage.setItem('userinput_details', JSON.stringify(users_array));
            
            // clearing the values of the input fields.
            signup_name.value = "";
            signup_email.value = "";
            signup_password.value = "";

            //redirecting to sign in page.
            location.href= "./signin.html";
    }

});