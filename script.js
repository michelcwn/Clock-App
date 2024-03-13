"use strict";

const fetchIpData = async (ip) => {
  try {
    const apiKey = "715345b38ac446829cefc5657eafe8a4";
    const response = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`
    );
    if (!response.ok) {
      throw new Error(
        `Erreur lors de la récupération des données : ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log(data);
    const { name } = data.time_zone;

    return name;
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

const fetchTimeZone = async function (timezone) {
  try {
    const response = await fetch(
      `http://worldtimeapi.org/api/timezone/${timezone}`
    );
    const data = await response.json();

    const dataString = data.utc_datetime;
    // url(assets/img/bg-test.jpg)
    bodyBackground.style.backgroundImage =
      getCurrentHour(dataString) < 18
        ? "url(assets/img/bg1.jpg)"
        : "url(assets/img/bg2.jpg)";
    greeting.textContent =
      getCurrentHour(dataString) < 12
        ? "Good Morning, it's currently"
        : getCurrentHour(dataString) < 18
        ? "Good Afternoon, it's currently"
        : "Good Evening, it's currently";
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
