// Función para comprobar la primera respuesta
function comprobarRespuesta1() {
    const respuesta = document.getElementById("respuesta1").value;
    const resultado1 = document.getElementById("resultado1");
    if (respuesta == "26") {  // 011010 en binario es 26
        resultado1.textContent = "¡Correcto! Primer dígito: 2.";
        resultado1.style.color = "#00ff00";
        document.getElementById("pista2").style.display = "block";
    } else {
        resultado1.textContent = "Error en la desencriptación.";
        resultado1.style.color = "red";
    }
}

// Función para la segunda pista (contraseña en el comentario)
function comprobarRespuesta2() {
    const respuesta = document.getElementById("respuesta2").value;
    const resultado2 = document.getElementById("resultado2");
    if (respuesta == "7") {
        resultado2.textContent = "¡Contraseña aceptada! Segundo dígito: 7.";
        resultado2.style.color = "#00ff00";
        document.getElementById("pista3").style.display = "block";
    } else {
        resultado2.textContent = "Contraseña incorrecta.";
        resultado2.style.color = "red";
    }
}

// Función para la tercera pista (descifrado César)
function comprobarRespuesta3() {
    const respuesta = document.getElementById("respuesta3").value;
    const resultado3 = document.getElementById("resultado3");
    if (respuesta.toLowerCase() == "con encontrado") {
        resultado3.textContent = "¡Código descifrado! Último dígito: 9.";
        resultado3.style.color = "#00ff00";
        document.getElementById("claveFinal").style.display = "block";
        document.getElementById("claveCompleta").textContent = "2-7-9";
    } else {
        resultado3.textContent = "Descifrado incorrecto.";
        resultado3.style.color = "red";
    }
}
