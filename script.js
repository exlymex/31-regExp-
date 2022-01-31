const nameInput = document.getElementById('input__name'),
      surnameInput = document.getElementById('input__surname'),
      emailInput = document.getElementById('input__email'),
      passwordInput = document.getElementById('input__password'),
      inputBox = document.getElementsByClassName('input__box'),
      mistakeName = document.getElementById('mistake_name'),
      mistakeSurname = document.getElementById('mistake_surname'),
      mistakeEmail = document.getElementById('mistake_email'),
      mistakePassword = document.getElementById('mistake_password'),
      containerBox = document.getElementById('container'),
      checkbox = document.getElementById('checkbox'),
      nextPage = document.getElementById('sign__up__button'),
      nextContainer = document.getElementById('info-container'),
      regex = /^[a-zA-Z0-9_-]{2,15}$/;

let check = false;

checkbox.addEventListener('click',()=>{
    check = !check
})
nameInput.onkeydown = function(){
    if(regex.test(nameInput.value)){
        mistakeName.style.display = 'none'
        event.target.style.border = '1px solid green'
    }else{
        mistakeName.style.display = 'block'
        event.target.style.border = '1px solid red'
    }
}
surnameInput.onkeydown = function(){
    if(regex.test(surnameInput.value)){
        mistakeSurname.style.display = 'none'
        event.target.style.border = '1px solid green'
    }else{
        mistakeSurname.style.display = 'block'
        event.target.style.border = '1px solid red'
    }
}
emailInput.onkeydown = function(){
    const testEmail = /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if(testEmail.test(emailInput.value)){
        mistakeEmail.style.display = 'none'
        event.target.style.border = '1px solid green'
    }else{
        mistakeEmail.style.display = 'block'
        event.target.style.border = '1px solid red'
    }
}
passwordInput.onkeydown = function(){
    const testPass = /^[a-zA-Z0-9_-]{6,15}$/
    if(testPass.test(passwordInput.value)){
        mistakePassword.style.display = 'none'
        event.target.style.border = '1px solid green'
    }else{
        mistakePassword.style.display = 'block'
        event.target.style.border = '1px solid red'
    }
}

nextPage.addEventListener('click',()=> {
    if(check){
        nextContainer.style.display = 'block'
    }else{
        alert('Введіть всі поля')
    }
})