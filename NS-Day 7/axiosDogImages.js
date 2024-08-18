let url = "https://dog.ceo/api/breeds/image/random";

let button = document.querySelector("button");

button.addEventListener("click",clickBow);

async function clickBow(){
    let imgLink = await dogImg();
    let imageTag = document.querySelector("#result");
    imageTag.setAttribute("src",imgLink);
}

async function dogImg() {
    try {
        // let res = await fetch(url); //using fetch
        let res = await axios.get(url);
        return res.data.message;
    } catch (error) {
        console.log("ERROR: "+error);
        return 1;
    }
}