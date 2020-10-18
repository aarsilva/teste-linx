/**
 * Test Project - Linx
 * Newsletter Form Functions File, for control and validation
 */

/**
 * Email Validator, for the email field on form
 * @param email Email string
 */
function emailValidator(email) {

  if (!email) {
    return false;
  }

  const formatted = email.replace(/\s/g,'');

  if (formatted === "") {
    return false;
  }

  const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regExp.test(formatted);
}

/**
 * Form submit handler, form validation of the fields
 * @param e Event data
 */
function formSubmit(e) {
  e.preventDefault();

  let isInvalid = false;

  const name = document.getElementById("newsName");
  const formattedName = name.value.replace(/\s/g,'');
  const nameHelper = document.getElementById("newsNameHelper");

  const email = document.getElementById("newsEmail");
  const emailHelper = document.getElementById("newsEmailHelper");

  nameHelper.innerHTML = "";
  emailHelper.innerHTML = "";

  if (name.classList.contains("is-valid") || name.classList.contains("is-invalid")) {
    name.classList.remove("is-valid");
    name.classList.remove("is-invalid");
  }

  if (email.classList.contains("is-valid") || email.classList.contains("is-invalid")) {
    email.classList.remove("is-valid");
    email.classList.remove("is-invalid");
  }

  if (formattedName === "") {
    name.classList.add("is-invalid");
    nameHelper.innerHTML = "O campo de Nome deve ser preenchido.";

    isInvalid = true;
  }

  if (formattedName.length <= 2) {
    name.classList.add("is-invalid");
    nameHelper.innerHTML = "O campo de Nome deve possuir mais de 2 caracteres.";

    isInvalid = true;
  }

  if (!emailValidator(email.value)) {
    email.classList.add("is-invalid");
    emailHelper.innerHTML = "O campo de email deve conter um email válido.";

    isInvalid = true;
  }

  if (isInvalid) {
    return false;
  }

  name.classList.add("is-valid");
  email.classList.add("is-valid");

  return true;
}


export default {formSubmit};
