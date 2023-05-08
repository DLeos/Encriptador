const textEncriptar = document.querySelector(".text-encriptar");
const textMensaje = document.querySelector(".text-mensaje");
const copiarResultado = document.querySelector(".boton-copiar")

function btnEncriptar(){
    const textoEncriptado = encriptar(textEncriptar.value);
    textMensaje.value = textoEncriptado;
    textEncriptar.value = "";    
}

function encriptar (stringEncriptada) {
    let arregloCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < arregloCodigo.length; i++) {
        if (stringEncriptada.includes(arregloCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(arregloCodigo[i][0], arregloCodigo [i][1])
            
        }
        
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textEncriptar.value);
    textMensaje.value = textoEncriptado;
    textEncriptar.value = "";    
}

function desencriptar (stringDesencriptada) {
    let arregloCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < arregloCodigo.length; i++) {
        if (stringDesencriptada.includes(arregloCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(arregloCodigo [i][1], arregloCodigo[i][0])
            
        }
        
    }
    return stringDesencriptada
}

function copiarMensaje () {
    let mensajeResultado = textMensaje.value;
    navigator.clipboard.writeText(mensajeResultado);
    textMensaje.value = "";
}

copiarResultado.onclick = copiarMensaje;
