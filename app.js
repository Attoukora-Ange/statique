
let soumission = document.querySelector('.soumission');
let chp1 = document.querySelector('.chp1');
chp1.addEventListener('keyup',(e)=>{
    if (chp1.value.length < 3) {
        let nom = document.querySelector('.nom');
        nom.classList.add('bleu');
        nom.innerHTML='Veuillez renseigner au moins 3 caracteres !';  
    }else{
        let nom = document.querySelector('.nom');
        nom.classList.remove('bleu');
        nom.innerHTML=''; 
        aller();
    }
})
soumission.addEventListener('click', (e)=>{
let chp1 = document.querySelector('.chp1');
let chp2 = document.querySelector('.chp2');
let chp3 = document.querySelector('.chp3');
let chp4 = document.querySelector('.chp4');

let nom = document.querySelector('.nom');
let prenom = document.querySelector('.prenom');
let email = document.querySelector('.email');
let password = document.querySelector('.password');



if (chp1.value == '' || chp1.value.length < 3) {
    e.preventDefault();
    nom.classList.add('rouge');
    nom.innerHTML='Veuillez renseigner le nom !';
}else{
    nom.innerHTML=''
    if (chp2.value == '') {
        e.preventDefault();
        prenom.classList.add('rouge');
        prenom.innerHTML='Veuillez renseigner le prenom !' 
    }else{
        prenom.innerHTML=''
        if (chp3.value == '') {
            e.preventDefault();
            email.classList.add('rouge');
            email.innerHTML='Veuillez renseigner le mail!' 
        }else{
            email.innerHTML=''
            if (chp4.value == '') {
                e.preventDefault();
                password.classList.add('rouge');
                password.innerHTML='Veuillez renseigner le password !'
            }else{
                password.innerHTML=''

            }
        }
    }
}

})