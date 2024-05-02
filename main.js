const password_field = document.querySelector("#password")
const confirm_password_field = document.querySelector("#confirm_password");

password_field.addEventListener('input', validate);
confirm_password_field.addEventListener('input', validate);

function validate() {
  if (password_field.value !== confirm_password_field.value || password_field === "") {
    password_field.classList.add('invalid');
    confirm_password_field.classList.add('invalid');
  }
  
  if (password_field.value === confirm_password_field.value) {
    password_field.classList.remove('invalid');
    confirm_password_field.classList.remove('invalid');
  }
}

const submit_button = document.querySelector('button');
submit_button.addEventListener('click', (e) =>{
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    if (!input.checkValidity() || input.classList.contains('invalid')) {
      e.preventDefault();
    }
  })
})