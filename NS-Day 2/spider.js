/*
//Selecting collection of small images by class name
let smallImages = document.getElementsByClassName("smallImages");

//Image object
for(i=0; i<smallImages.length; i++){
    console.dir(smallImages[i]);
}

//every object's src
for(i=0; i<smallImages.length; i++){
    console.dir(smallImages[i].src);
}

//changing the image
for(i=0; i<smallImages.length; i++){
    smallImages[i].src = "spiderman.png";
    console.log("Small Image "+"index: "+i);
}

//Selecting collection using querySelector & querySelectorAll

let smallImages = document.querySelector(".smallImages");
console.dir(smallImages);

let smallImages = document.querySelectorAll(".smallImages");
console.dir(smallImages); 

//Manipulating Styles
console.log("Manipulating Styles using classList");
let newObj = document.querySelector("h1");
console.log(newObj.classList);

//classList.contains
console.log(newObj.classList.contains("green"));
console.log(newObj.classList.contains("bigFont"));

//classList.remove
newObj.classList.remove("green");

//classList toggle
newObj.classList.toggle("green"); //adds green since it doesnt exist
newObj.classList.toggle("bigFont"); //remove bigFont since it exists

//Navigation
let navObj = document.querySelector(".smallImages");
let navObj2 = document.querySelector("#creation")
//parentElement
console.log(navObj.parentElement);
//children
console.log(navObj.children); //doesnt have children
console.log(navObj2.children);
console.log(navObj2.childElementCount); //prints number of children
//sibling
console.log(navObj2.nextElementSibling);
console.log(navObj2.previousElementSibling);

// Removes the whole body
let body = document.querySelector("body");
body.remove();

*/