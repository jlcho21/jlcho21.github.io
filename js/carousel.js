const images = [
    "img/datoCurioso4.jpg",
    "img/datoCurioso1.jpg",
    "img/datoCurioso2.jpg",
    "img/datoCurioso3.jpg",
    
    "img/datoCurioso5.jpg"
];

let currentImageIndex = 0;
const imageElement = document.getElementById("image");

function changeImage(offset) {
    currentImageIndex += offset;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    imageElement.src = images[currentImageIndex];
}

// Cargar la primera imagen
imageElement.src = images[currentImageIndex];
