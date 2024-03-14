"use strict";
console.log("by michelcwn");
console.log("https://github.com/michelcwn");
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
          ? "assets/mobile/bg-image-daytime.jpg"
          : window.innerWidth <= 768
          ? "assets/tablet/bg-image-daytime.jpg"
          : "assets/desktop/bg-image-daytime.jpg";
      greeting.textContent = "Good Morning, it's currently";
    } else {
      iconSun.classList.add("hidden");
      iconMoon.classList.remove("hidden");
      imageUrl =
        window.innerWidth <= 375
          ? "assets/mobile/bg-image-nighttime.jpg"
          : window.innerWidth <= 768
          ? "assets/tablet/bg-image-nighttime.jpg"
          : "assets/desktop/bg-image-nighttime.jpg";
      greeting.textContent =
        currentHour < 6
          ? "Good Night, it's currently"
          : "Good Evening, it's currently";
    }

    // Appliquer l'image de fond
    bodyBackground.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),url(${imageUrl})`;
    expand.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    expand.style.color = "var(--color-white)";

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
