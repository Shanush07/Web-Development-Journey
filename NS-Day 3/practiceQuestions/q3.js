document.getElementById("nameInput").addEventListener("input", function() {
    let input = this.value;
    let filteredInput = input.replace(/[^a-zA-Z ]/g, '');
    this.value = filteredInput;
    document.getElementById("displayHeading").innerText = filteredInput;
});