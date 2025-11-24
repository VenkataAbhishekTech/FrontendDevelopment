const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalContent = document.getElementById("modalContent");

const images = document.querySelectorAll(".gallery-img");

images.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = image.src; 
    });
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});
modalContent.addEventListener("click", function(event) {
    event.stopPropagation();
});
