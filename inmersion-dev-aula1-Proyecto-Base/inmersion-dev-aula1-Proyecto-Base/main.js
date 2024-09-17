let cantidad = document.getElementById("cantidad");
let botonGenerar = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let botonLimpiar = document.getElementById("limpiar");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar() {

    let numeroDigitado = parseInt(cantidad.value);

    if ((numeroDigitado < 8) ) {
        alert("La cantidad de caracteres debe ser mayor a 8");
    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        
        password += caracterAleatorio;

    }

    contrasena.value = password;

    let validarCaracteres = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;

    if(validarCaracteres.test(password)){
        alert("La contraseña generada es fuerte");
        
    }else{
        alert("La contraseña generada es débil");
    }

}

function limpiar(){
    cantidad.value = '';
    contrasena.value = '';   
}