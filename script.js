const x = document.getElementById('btn')
const y = document.getElementById('nav')

x.addEventListener('click', () => {/*SERIA IGUAL TER function() /ARROW FUNCTION */
    y.classList.toggle ('ativo')     /*classList pode ser add class, remove class ou toggle que vai add ou remove conforme a class já esteja presente ou não */
})