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
