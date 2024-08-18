let url = "https://icanhazdadjoke.com/";

let button = document.querySelector("button");

button.addEventListener("click", clickJokes);

async function clickJokes() {
  let joke = await dadJokes();
  let para = document.querySelector("p");
  para.textContent = joke;
}

async function dadJokes() {
  try {
    // let res = await fetch(url); //using fetch
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url, config);
    return (res.data.joke);
  } catch (error) {
    console.log("ERROR: " + error);
  }
}

