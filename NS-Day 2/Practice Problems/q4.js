/*Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
Change its color to purple. */

let newDiv3 = document.createElement('div');

document.body.appendChild(newDiv3);

let newHeading = document.createElement('h1');
newHeading.textContent = "DOM Practice";

newHeading.style.textDecoration = 'underline'; // Underline the text
newHeading.style.color = 'purple'; // Change the color to purple

newDiv3.appendChild(newHeading);
