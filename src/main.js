import "./style.css";

const userLang = navigator.language || navigator.userLanguage;

const widgets = [...document.querySelectorAll(".widget")];

widgets.forEach(widget => {
  widget.addEventListener("drag", e => {
    console.log(e)
    if (e.screenX === 0) return;
    widget.style.left = `${e.x}px`;
    widget.style.top = `${e.y}px`;
  });
});

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
async function weather() {
  const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&forecast_days=1");
  const json = await response.json();
  const deg = json.hourly.temperature_2m[12];
  weatherWidget.textContent = `${deg}°C`;
  weatherWidget.classList.toggle("invisible");
}

const btnWeather = document.querySelector("#btn-weather");
btnWeather.addEventListener("click", weather);

const searchWidget = document.querySelector("#search");
function search() {
  searchWidget.classList.toggle("invisible");
}
const btnSearch = document.querySelector("#btn-search");
btnSearch.addEventListener("click", search);

const gameWidget = document.querySelector("#game");
function game() {
  gameWidget.classList.toggle("invisible");
}
let btnGame = document.querySelector("#btn-game");

btnGame.addEventListener("click", game);
