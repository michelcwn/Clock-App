"use strict";

const fetchIpData = async (ip) => {
  try {
    const apiKey = "854307c784774bf9bd848ba9c7e54e36";
    const response = await fetch(
      `https://api.findip.net/${ip}/?token=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(
        `Erreur lors de la récupération des données : ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log(data);
    const timezone = data.location.time_zone;

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
        ? "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(assets/desktop/bg-image-daytime.jpg)"
        : "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),url(assets/img/bg2.jpg)";
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

// HANDLER
let appliedEffects = false;

btn.addEventListener("click", function (e) {
  e.preventDefault();

  quote.classList.toggle("hidden");
  expand.classList.toggle("hidden");
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
});
