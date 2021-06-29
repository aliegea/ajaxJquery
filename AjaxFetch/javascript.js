showJoke = () => {
  let display = document.getElementById("displayJoke");
  let url = "http://api.icndb.com/jokes/random";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jokeData) => {
      display.textContent = jokeData.value.joke;
    });
  let face = document.getElementById("norrisFace");
  face.classList.toggle("rot");
};
showJoke();
