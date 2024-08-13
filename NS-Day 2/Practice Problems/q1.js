/*Qsl. Create a new input and button element on the page using JavaScript only. Set the
text of button to "Click me'
 */
let newDiv1 = document.createElement('div');
let newDiv2 = document.createElement('div');

document.body.appendChild(newDiv1);
document.body.appendChild(newDiv2);

let inputElement = document.createElement('input');
inputElement.placeholder = 'Enter the damn text!'
newDiv1.appendChild(inputElement);

let newButton = document.createElement('button');
newButton.textContent = 'CLICK ME';
newDiv2.appendChild(newButton);

