
// Answer1

function showAlert() {
    alert("Link was clicked!");
};

// Answer2

function showMessage() {
    alert("Thanks for purchasing a mobile from us!");
};

// Answer3

function deleteRow(button) {
    button.parentNode.parentNode.remove();
};

// Answer4

function changeImage(img) {
    img.src = "https://images.priceoye.pk/apple-17-pro-max-pakistan-priceoye-5k9fi-500x500.webp";
};

function resetImage(img) {
    img.src = "https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FSAMSUNG_GALAXY_S26_ULTRA_5_G_9232e2ad7e.png&w=256&q=75";
};

// Answer5

let  counter = 0;

function increase() {
    counter++;
    document.getElementById("count").innerHTML = counter;
};

function decrease() {
    counter--;
    document.getElementById("count").innerHTML = counter;
};