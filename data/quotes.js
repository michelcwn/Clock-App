let category = "life";
async function fetchQuote() {
  const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": "Ig0Y8WaBtSgFrRAAASmwgA==pDN7ZAyflo3Z6JhK",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
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
