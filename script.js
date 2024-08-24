//funcion para btn-reload
document.getElementById("logo-reload").onclick = function(){
    location.reload();
};

// Función para encriptar el texto
function encriptar() {
    const texto = document.getElementById("encriptar").value.toLowerCase();

    if (!texto) {
        alert("Ningún mensaje fue encontrado");
        return;
    }

    if (!/^[a-z\s]+$/.test(texto)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    const mapaEncriptacion = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    };

    const textoEncriptado = texto.replace(/[eioua]/g, match => mapaEncriptacion[match]);
    
    actualizarResultado(textoEncriptado);
}

// Función para desencriptar el texto
function desencriptar() {
    const texto = document.getElementById("encriptar").value;

    const mapaDesencriptacion = {
        enter: "e",
        imes: "i",
        ai: "a",
        ober: "o",
        ufat: "u"
    };

    const textoDesencriptado = texto.replace(/enter|imes|ai|ober|ufat/g, match => mapaDesencriptacion[match]);

    actualizarResultado(textoDesencriptado);
}

// Función para actualizar el resultado y la interfaz
function actualizarResultado(texto) {
    document.getElementById("resultadoTexto").value = texto;
    document.getElementById("ocultarImagen").style.display = "none";
    document.getElementById("btnCopiar").style.display = "block";
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    let texto = document.getElementById("resultadoTexto");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}