"use strict";
// DOM

const greeting = document.querySelector(".info__details__greeting");
const currentTime = document.querySelector(".info__details__time");
const currentLocation = document.querySelector(".info__details__location");

// IP

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

// Appelle la fonction pour obtenir et afficher l'IP

// IP & location

const fetchIpData = async function (ip) {
  try {
    const response = await fetch(
      `https://api.ipbase.com/v2/info?apikey=ipb_live_tUCTl0qTbACJvV5AqOqV3FOpdCxUIJZbbRZJfiVX&ip=${ip}`
    );
    const data = await response.json();

    const location = data.data.location.country.timezones[0];
    console.log(location);
    return location;
  } catch (err) {
    console.log(err);
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

const fetchTimeZone = async function (timezone) {
  try {
    const response = await fetch(
      `http://worldtimeapi.org/api/timezone/${timezone}`
    );
    const data = await response.json();

    const dataString = data.utc_datetime;

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
