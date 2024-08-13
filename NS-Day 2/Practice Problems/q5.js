/*Create a p tag on the page and set its text to "Chainsaw Man",
where Chainsaw is bold.*/

let newDiv4 = document.createElement('div');
document.body.appendChild(newDiv4);

let newPara = document.createElement('p');

let boldPart = document.createElement('strong');
boldPart.textContent = 'Spider-';

let normalText = document.createTextNode(' Man');

newPara.appendChild(boldPart);
newPara.appendChild(normalText);

newDiv4.appendChild(newPara);




