console.log("by michelcwn");
console.log("https://github.com/michelcwn");

// IMAGES
import bgImageDaytimeMobile from "./assets/mobile/bg-image-daytime.jpg";
import bgImageDaytimeTablet from "./assets/tablet/bg-image-daytime.jpg";
import bgImageDaytimeDesktop from "./assets/desktop/bg-image-daytime.jpg";
import bgImageNighttimeMobile from "./assets/mobile/bg-image-nighttime.jpg";
import bgImageNighttimeTablet from "./assets/tablet/bg-image-nighttime.jpg";
import bgImageNighttimeDesktop from "./assets/desktop/bg-image-nighttime.jpg";

// DOM ELEMENTS
const greeting = document.querySelector(".info__details__greeting");
const currentTime = document.querySelector(".info__details__time");
const currentLocation = document.querySelector(".info__details__location");
const bodyBackground = document.querySelector("body");
const main = document.querySelector(".main");
const info = document.querySelector(".info");
const infoDetails = document.querySelector(".info__details");
const quote = document.querySelector(".main__quote");
const btn = document.querySelector(".info__more__button");
const btnText = document.querySelector(".info__more__button__text");
const btnDown = document.querySelector(".arrow-down");
const btnUp = document.querySelector(".arrow-up");

// quote
const quoteText = document.querySelector(".main__quote__text");
const quoteAuthor = document.querySelector(".main__quote__author");
const quoteIcon = document.querySelector(".main__quote__icon");

// expand
const expand = document.querySelector(".expand");
const expandValueTimezone = document.querySelector(".expand__value-timezone");
const expandValueDayWeek = document.querySelector(".expand__value-days-week");
const expandValueDays = document.querySelector(".expand__value-days");
const expandValueWeekNumber = document.querySelector(
  ".expand__value-week-number"
);

// GET IP //

async function getUserIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    console.log("User IP:", data.ip); // Affiche l'adresse IP de l'utilisateur
    return data.ip;
  } catch (error) {
    console.error("Unable to get user IP:", error);
  }
}

// GET QUOTES //
let category = "life";

async function fetchQuote() {
  const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": process.env.API_NINJAS_KEY,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const { quote } = data[0];
    const { author } = data[0];
    quoteText.textContent = `"${quote}"`;
    quoteAuthor.textContent = author;
  } catch (error) {
    console.error("Could not fetch the quote:", error);
  }
}

quoteIcon.addEventListener("click", fetchQuote);

fetchQuote();

// FETCH IP DATA //

const fetchIpData = async (ip) => {
  try {
    const apiKey = process.env.API_FETCH_IP_KEY;
    // Utilisation de AllOrigins
    const allOriginsUrl = "https://api.allorigins.win/raw?url=";
    const targetUrl = encodeURIComponent(
      `https://api.findip.net/${ip}/?token=${apiKey}`
    );
    const response = await fetch(allOriginsUrl + targetUrl);

    if (!response.ok) {
      throw new Error(
        `Erreur lors de la récupération des données : ${response.statusText}`
      );
    }

    const data = await response.json();
    // Assurez-vous que le chemin d'accès à la timezone est correct selon la structure de l'objet JSON retourné
    const timezone = data?.location?.time_zone;

    return timezone;
  } catch (error) {
    console.error("Erreur lors de la récupération des informations IP:", error);
  }
};

// Location & Time

const formatTime = function (dateString) {
  const date = new Date(dateString);

  let hours = date.getHours(); // Pas besoin de convertir pour le format 24 heures
  let minutes = date.getMinutes();

  // Formate les minutes pour avoir toujours deux chiffres
  const minutesFormatted = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutesFormatted}`;
};

const getCurrentHour = function (dateString) {
  const date = new Date(dateString);

  let hours = date.getHours();
  return hours;
};

// TIMEZONE //
const fetchTimeZone = async function (timezone) {
  try {
    const response = await fetch(
      `https://worldtimeapi.org/api/timezone/${timezone}`
    );
    const data = await response.json();
    const dataString = data.utc_datetime;
    const currentHour = getCurrentHour(dataString);

    // Sélection des icônes
    const iconSun = document.querySelector(".info__icon--sun");
    const iconMoon = document.querySelector(".info__icon--moon");

    // Initialisation des variables pour les images
    let imageUrl;

    // Déterminer quelle icône afficher et choisir l'image correspondante
    if (currentHour >= 6 && currentHour < 18) {
      iconSun.classList.remove("hidden");
      iconMoon.classList.add("hidden");
      imageUrl =
        window.innerWidth <= 375
          ? bgImageDaytimeMobile
          : window.innerWidth <= 768
          ? bgImageDaytimeTablet
          : bgImageDaytimeDesktop;
      greeting.textContent = "Good Morning, it's currently";
      expand.style.backgroundColor = "rgba(255, 255, 255, 0.65)";
      expand.style.color = "var(--color-black)";
    } else {
      iconSun.classList.add("hidden");
      iconMoon.classList.remove("hidden");
      imageUrl =
        window.innerWidth <= 375
          ? bgImageNighttimeMobile
          : window.innerWidth <= 768
          ? bgImageNighttimeTablet
          : bgImageNighttimeDesktop;
      greeting.textContent =
        currentHour < 6
          ? "Good Night, it's currently"
          : "Good Evening, it's currently";
      expand.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
      expand.style.color = "var(--color-white)";
    }

    // Appliquer l'image de fond
    bodyBackground.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),url(${imageUrl})`;

    // Mettre à jour les contenus textuels
    currentLocation.textContent = data.timezone;
    expandValueTimezone.textContent = data.timezone;
    currentTime.textContent = formatTime(dataString);
  } catch (error) {
    console.log(error);
  }
};

// Exécution asynchrone pour chaîner les appels de fonction

(async () => {
  try {
    const userIp = await getUserIP();
    const timezone = await fetchIpData(userIp);

    await fetchTimeZone(timezone);
  } catch (error) {
    console.error(error);
  }
})();

// HANDLER
let appliedEffects = false;

btn.addEventListener("click", function (e) {
  e.preventDefault();

  quote.classList.toggle("hidden");
  expand.classList.toggle("hidden");
  btnDown.classList.toggle("hidden");
  btnUp.classList.toggle("hidden");

  main.style.minHeight = main.style.minHeight === "50vh" ? "100vh" : "50vh";

  if (appliedEffects) {
    // Si les effets sont déjà appliqués, les retirer
    document.documentElement.style.setProperty("--after-left", "10");
    document.documentElement.style.setProperty("--after-right", "10");
    document.documentElement.style.setProperty("--after-bottom", "10");
    document.documentElement.style.setProperty("--after-filter", "none");
    appliedEffects = false; // Réinitialiser l'indicateur
  } else {
    // Si les effets ne sont pas appliqués, les appliquer
    document.documentElement.style.setProperty("--after-left", "-10px");
    document.documentElement.style.setProperty("--after-right", "-10px");
    document.documentElement.style.setProperty("--after-bottom", "-10px");
    document.documentElement.style.setProperty("--after-filter", "blur(10px)");
    appliedEffects = true; // Mettre à jour l'indicateur
  }

  btnText.textContent = btnText.textContent === "more" ? "less" : "more";
});

// EXPAND //

function dayOfTheYear() {
  const currentDay = new Date();
  const startYear = new Date(currentDay.getFullYear(), 0, 0);
  const difference = currentDay - startYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(difference / oneDay);

  expandValueDays.textContent = `${day}`;
}

dayOfTheYear();

function dayOfTheWeek() {
  const now = new Date();
  const dayOfTheWeek = now.getDay();
  const correctedDay = dayOfTheWeek === 0 ? 7 : dayOfTheWeek;

  expandValueDayWeek.textContent = `${correctedDay}`;
}

dayOfTheWeek();

function getWeekNumber() {
  const now = new Date();
  const FirstJanuary = new Date(now.getFullYear(), 0, 1);
  const days = Math.floor((now - FirstJanuary) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((now.getDay() + 1 + days) / 7);

  expandValueWeekNumber.textContent = `${weekNumber}`;
}

getWeekNumber();
