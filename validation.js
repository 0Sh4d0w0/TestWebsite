const form = document.getElementById("form");
const firstnameInput = document.getElementById("firstname_input");
const lastnameInput = document.getElementById("lastname_input");
const emailInput = document.getElementById("email_input");
const passwordInput = document.getElementById("password_input");
const confirmPasswordInput = document.getElementById("confirm_password_input");
const errorMessage = document.getElementById("error_message");


form.addEventListener('submit', (e) =>{
  // e.preventDefault();

  let errors = [];

  if(firstnameInput){
    errors = getSignUpFormErrors(firstnameInput.value, lastnameInput.value, emailInput.value, passwordInput.value, confirmPasswordInput.value);
  }
  else{
    errors = getLogInFormErrors(emailInput.value, passwordInput.value);
  }

  if(errors.length > 0){
    e.preventDefault();
    errorMessage.innerText = errors.join(". ");
  }
})

function getSignUpFormErrors(firstname, lastname, email, password, confirmPassword){
  let errors = [];

  if(firstname === '' || firstname == null){
    errors.push("First name is required");
    firstnameInput.parentElement.classList.add('incorrect');
  }
  if(email === '' || email == null){
    errors.push("Email is required");
    emailInput.parentElement.classList.add('incorrect');
  }
  if(password === '' || password == null){
    errors.push("Password is required");
    passwordInput.parentElement.classList.add('incorrect');
  }

  if(password.length < 8){
    errors.push("Password must be at least 8 characters long");
    passwordInput.parentElement.classList.add('incorrect');
  }

  if(password !== confirmPassword){
    errors.push("Passwords do not match");
    passwordInput.parentElement.classList.add('incorrect');
    confirmPasswordInput.parentElement.classList.add('incorrect');
  }

  return errors;
}

function getLogInFormErrors(email, password){
  let errors = [];

  if(email === '' || email == null){
    errors.push("Email is required");
    emailInput.parentElement.classList.add('incorrect');
  }
  if(password === '' || password == null){
    errors.push("Password is required");
    passwordInput.parentElement.classList.add('incorrect');
  }

  return errors;
}

const allInputs = [firstnameInput, lastnameInput, emailInput, passwordInput, confirmPasswordInput].filter(input => input !== null);

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.parentElement.classList.contains('incorrect')) {
      input.parentElement.classList.remove('incorrect');
    }
  });
});