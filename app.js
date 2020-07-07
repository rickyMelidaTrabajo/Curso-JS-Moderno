const documento = document.querySelector('#elemento');
const input = document.querySelector('#buscar');

//input.addEventListener('keypress', obtenerDatos);

//input.addEventListener('keydown', obtenerDatos);

//input.addEventListener('focus', obtenerDatos);

input.addEventListener('blur', obtenerDatos);


function obtenerDatos(e) {
    //documento.innerHTML = input.value;
    console.log(e.type);
}