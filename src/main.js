import "./style.css";

const userLang = navigator.language || navigator.userLanguage;

const clockWidget = document.querySelector("#clock");
function timing() {
  window.requestAnimationFrame(timing);

  const date = new Date();
  const dateFormatter = new Intl.DateTimeFormat(userLang, {
    second: "numeric",
    minute: "numeric",
    hour: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  clockWidget.textContent = `${dateFormatter.format(date)}`;
}

const btnTime = document.querySelector("#btn-time");

btnTime.addEventListener("click", () => {
  timing();
  clockWidget.classList.toggle("invisible");
});

const weatherWidget = document.querySelector("#weather");
function weather() {
  weatherWidget.textContent = "WIP";
  weatherWidget.classList.toggle("invisible");
}

const btnWeather = document.querySelector("#btn-weather");
btnWeather.addEventListener("click", weather);

const searchWidget = document.querySelector("#search");
function search() {
  searchWidget.textContent = "WIP";
  searchWidget.classList.toggle("invisible");
}
const btnSearch = document.querySelector("#btn-search");
btnSearch.addEventListener("click", search);

const gameWidget = document.querySelector("#game");
function game() {
  gameWidget.textContent = "WIP";
  gameWidget.classList.toggle("invisible");
}
let btnGame = document.querySelector("#btn-game");

btnGame.addEventListener("click", game);
