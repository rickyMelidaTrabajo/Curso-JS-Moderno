const listaTweet = document.querySelector('#lista-tweets');

eventListeners();

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);


}

function agregarTweet(e) {
  e.preventDefault();

  const tweet = document.querySelector('#tweet').value;

  const btnBorrar = document.createElement('a');
  btnBorrar.classList = 'borrar-tweet';
  btnBorrar.innerText = 'X';

  const li = document.createElement('li');
  li.innerText = tweet;
  li.appendChild(btnBorrar);
  listaTweet.appendChild(li);

  console.log(tweet);

}
