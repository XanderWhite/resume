const LOGO = "XW_IT";

const logoElem = document.querySelector(".logo__span");

function printLogo(index = 0) {
  if (index < LOGO.length)
    setTimeout(() => {
      logoElem.textContent += LOGO[index]
      printLogo(++index);
    }, 500);
}

printLogo();

//===========================

const contactBtn = document.querySelector('.btn_contact'),
modal = document.querySelector('.modal'),
modalCloseBtn = modal.querySelector('.modal__btn-close'),
form = document.querySelector('.form-contact');

contactBtn.addEventListener('click',()=>{
modal.showModal();
})

modalCloseBtn.addEventListener('click',()=>{
    modal.close();
})

form.addEventListener('submit', formSend);

async function formSend(event){
    event.preventDefault();

// let error = formValidate(form);

// let formData = new FormData(form);

if(!formValidate(form)){
    form.classList.add('sending');

let response = await fetch('sendmail.php', {
    method: 'POST',
    body: new FormData(form)
});

if(response.ok){
let result = await response.json();
alert(result.message);
//после отправки очищаем все данные с формы
form.reset();
form.classList.remove('sending');
}
else{
alert('Ошибка');
form.classList.remove('sending');
}
}
else{
    alert('Заполните все поля')
}

}


function formValidate(form){
    let error;

   form.querySelectorAll('._req').forEach(item =>  {
    formRemoveError(item);
    if(item.value===''){
        formAddError(item);
    error=true;
    }}
);

if(!checkEmail(form.email)){
    formAddError(form.email);
    error=true;
}
    return error;
}

function formAddError(input){
input.classList.add('error');
}

function formRemoveError(input){
input.classList.remove('error');
}

function checkEmail(input){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}