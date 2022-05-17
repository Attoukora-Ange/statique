
const valider = document.querySelector('.valider')

valider.addEventListener('click', async (e)=>{
    const livre = document.querySelector('.livre').value
    const chapitre = document.querySelector('.chapitre').value
    const verset = document.querySelector('.verset').value
    const texte = document.querySelector('.text')
    const reference = document.querySelector('.reference')
    e.preventDefault()
	
   await fetch(`https://bible-api.com/${livre}${chapitre}:${verset}`)
	.then(data => data.json())
        .then(donne =>  {
                reference.innerHTML = donne.reference;
                texte.innerHTML = donne.text;          
        }).catch(() => {
 	reference.innerHTML = 'Problème de connexion',
            texte.innerHTML = 'Merci de verifier la connexion internet'
}
           
        )
})
