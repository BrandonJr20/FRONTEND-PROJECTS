document.addEventListener('DOMContentLoaded', () =>{
    const emailInput = document.getElementById('email')
    const errorEmailInput = document.getElementById('errorEmail')
    const vistaFormulario = document.getElementById('vistaFormulario')
    const vistaSucessfull = document.getElementById('vistaSucessfull')


    emailInput.addEventListener('keyup', validateEmail)

    function validateEmail(){
        const value = emailInput.value
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(!emailPattern.test(value)){
            errorEmailInput.textContent = 'Valid email required'
        }else{
            errorEmailInput.textContent = ''
        }
    }

    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault()
        validateEmail()

        if(errorEmailInput.textContent){
            alert('Corrige los errores antes de enviar')
        }else{
            alert('Registro exitoso')
            window.location.href = "sucefull.html"
            document.getElementById('email').value = ''
        }
    })
})