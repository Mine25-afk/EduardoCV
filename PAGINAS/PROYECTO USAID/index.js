var formulario = document.getElementById('formulario');
var correcto = document.getElementById('correcto');
var usuario = document.getElementById('user');
var passwrod = document.getElementById('password');
boton.addEventListener('click', (e) =>{
    e.preventDefault()
    if (usuario.value == 'David') {
        if (passwrod.value == '123456') {
            window.location.href = 'paginaPrincipal.html';
        } else {
            correcto.setAttribute('class', 'incorrecto listo');
        }
        
        
    } else {
        correcto.setAttribute('class', 'incorrecto listo');
    }

})


