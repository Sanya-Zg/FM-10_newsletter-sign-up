const spanError = document.getElementById('error_msg');
const form = document.getElementById('form');
const email = document.getElementById('email');
const inputEmail = document.getElementById('inp_email');
const subCont = document.getElementById('sub_cont');
const container = document.querySelector('.outer');
const dismit = document.getElementById('dismit_msg');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = email.value;

    if(!validEm(emailValue)){
        spanError.style.display = 'block';
        email.classList.add('email_error');
    } else {
        spanError.textContent = "";
        container.classList.add('hidden');

        subCont.classList.remove('hidden');
        inputEmail.textContent = emailValue;
        form.reset();
    }
});

function validEm(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
dismit.addEventListener('click', () => {
    subCont.classList.add('hidden');
    container.classList.remove('hidden');
})