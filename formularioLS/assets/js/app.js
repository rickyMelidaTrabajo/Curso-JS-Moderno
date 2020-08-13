const listaTweet = document.querySelector('#lista-tweets');

eventListeners();

function eventListeners() {
  //cuando se envia el formulario
  document.querySelector('#formulario').addEventListener('submit', agregarTweet);

  //Borrar tweets
  listaTweet.addEventListener('click', borrarTweet);

  //contenido cargado
  document.addEventListener('DOMContentLoaded', localStorageListo);
}

//Agregar tweet al formulario
function agregarTweet(e) {
  e.preventDefault();

  //leer el valor del textarea
  const tweet = document.querySelector('#tweet').value;

  const btnBorrar = document.createElement('a');
  btnBorrar.classList = 'borrar-tweet';
  btnBorrar.innerText = 'X';

  // Crear elemento y añadirle el contenido a la lista
  const li = document.createElement('li');
  li.innerText = tweet;

  //añade el boton de borrar el tweet 
  li.appendChild(btnBorrar);

  //añade el tweet a la lista
  listaTweet.appendChild(li);

  //Añadir al Local Storage
  agregarTweetLocalStorage(tweet);

}

//Elimina el Tweet del DOM
function borrarTweet(e) {
  e.preventDefault();
  if (e.target.className === 'borrar-tweet') {
    alert('Tweet eliminado')
    console.log(e.target.parentElement.remove());
  }
}

//Agrega el tweet al local storage
function agregarTweetLocalStorage(tweet) {
  let tweets;
  tweets = obtenerTweetsLocalStorage();

  //Añadir un nuevo tweet
  tweets.push(tweet);

  //Convertir de String a arreglo para local storage
  localStorage.setItem('tweets', JSON.stringify(tweets))

}

//Comprobar que haya elementos en local storage, retorna un arreglo
function obtenerTweetsLocalStorage() {
  let tweets;
  //Revisamos los valores de local storage

  if (localStorage.getItem('tweets') === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }

  return tweets;
}

//Mostrar datos del local storage en la lista 
function localStorageListo() {
  let tweets;

  tweets = obtenerTweetsLocalStorage();

  tweets.forEach(tweet => {
    const btnBorrar = document.createElement('a');
    btnBorrar.classList = 'borrar-tweet';
    btnBorrar.innerText = 'X';

    // Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;

    //añade el boton de borrar el tweet 
    li.appendChild(btnBorrar);

    //añade el tweet a la lista
    listaTweet.appendChild(li);
  });
}