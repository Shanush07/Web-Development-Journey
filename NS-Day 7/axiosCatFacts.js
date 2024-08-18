let url = "https://catfact.ninja/fact";

let button = document.querySelector("button");

button.addEventListener("click",clickMew);

async function clickMew(){
    let fact = await catFacts();
    let para = document.querySelector("p");
    para.textContent = fact;
}

async function catFacts() {
    try {
        // let res = await fetch(url); //using fetch
        let res = await axios.get(url);
        return res.data.fact;
    } catch (error) {
        console.log("ERROR: "+error);
    }
}