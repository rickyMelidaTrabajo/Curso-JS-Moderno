// Agregamos a local Storage
//localStorage.setItem('nombre', 'Ricardo');

//Session storage
//sessionStorage.setItem('nombre', 'Ricardo');

const nombre = localStorage.getItem('nombre');

console.log(nombre);

sessionStorage.removeItem('nombre');
