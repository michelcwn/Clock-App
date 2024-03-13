"use strict";
// DOM

const greeting = document.querySelector(".info__details__greeting");
const currentTime = document.querySelector(".info__details__time");
const currentLocation = document.querySelector(".info__details__location");

const formatTime = function (dateString) {
  const date = new Date(dateString);

  let hours = date.getHours(); // Pas besoin de convertir pour le format 24 heures
  let minutes = date.getMinutes();

  // Formate les minutes pour avoir toujours deux chiffres
  const minutesFormatted = minutes < 10 ? "0" + minutes : minutes;

  // Construit et retourne la chaîne de caractères de l'heure au format "normal" (24 heures)
  return `${hours}:${minutesFormatted}`;
};

const getCurrentHour = function (dateString) {
  const date = new Date(dateString);

  let hours = date.getHours();
  return hours;
};

// console.log(getCurrentHour("2024-03-23T18:20:33.800783+00:00"));

const fetchTimeZone = async function (timezone) {
  try {
    const response = await fetch(
      `http://worldtimeapi.org/api/timezone/${timezone}`
    );
    const data = await response.json();

    const dataString = data.utc_datetime;
    // console.log(dataString);
    //2024-03-13T10:19:33.800783+00:00

    greeting.textContent =
      getCurrentHour(dataString) < 12
        ? "Good Morning, it's currently"
        : getCurrentHour(dataString) < 18
        ? "Good Afternoon, it's currently"
        : "Good Evening, it's currently";
    currentLocation.textContent = data.timezone;
    currentTime.textContent = formatTime(dataString);
  } catch (error) {
    console.log(error);
  }
};

fetchTimeZone("Europe/Paris");
