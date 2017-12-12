//создание переменных для валидации формы
var form = document.querySelector(".form");
var submitBtn = form.querySelector(".btn-submit");
var userName = document.getElementById("name");
var userSurname = document.getElementById("surname");
var userGenderMan = document.getElementById("man");
var userGenderWoman = document.getElementById("wooman");
var userAge = document.getElementById("age");
var userPhone = document.getElementById("phone");
var userEmail = document.getElementById("email");
var userCountry = document.getElementById("country");
var fields = form.querySelectorAll(".field");



//проверка заполнения поля 
function checkFill() {
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      var error = generateError();
      form[i].parentElement.insertBefore(error, fields[i]);
    };
  };
}



//удаление сообщения об ошибке 
function removeError() {
  var errors = form.querySelectorAll(".error");
  
  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  };
};



//вывод сообщения о незаполененном поле
function generateError() {
  var error = document.createElement("div");
  
  error.className = "error";
  error.style.color = "orange";
  error.innerHTML = "field must be filled in";
  return error;
};



//события по клику на кнопку "отправить"
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  removeError();
  checkFill();
});