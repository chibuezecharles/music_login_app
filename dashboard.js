// to get the data that was passed to this page.
let params = new URLSearchParams(window.location.search);
const email = params.get('email');
const password = params.get('password');
const Name = params.get('name');


// accessing the dom
 const user_name = document.querySelector(".user_name");
 const user_email = document.querySelector(".user_email");

 user_name.textContent = Name;
 user_email.textContent = email;



