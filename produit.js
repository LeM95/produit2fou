// Variables pour l'affichage de l'image
let currentImageIndex = 0;
const images = [
    "/img/img tasseaux.jpg", 
    "/img/IMAge tasseaux.jpg",
    // Ajouter des chemins d'autres images
];

// Fonction pour ouvrir le modal avec l'image sélectionnée
function openProductModal(index) {
    currentImageIndex = index;
    document.getElementById("modalImage").src = images[currentImageIndex];
    document.getElementById("productModal").style.display = "block";
}

// Fonction pour fermer le modal
function closeProductModal() {
    document.getElementById("productModal").style.display = "none";
}

// Fonction pour changer d'image (défiler)
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
   
}
function toggleDetailsproduit(button) {
    const details = button.nextElementSibling;
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        button.textContent = "Voir Nos produit";
        document.addEventListener('DOMContentLoaded', startSlideshow);
    } else {
        details.style.display = "none";
        button.textContent = "Voir nos produit";
    }
}

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        button.textContent = "Masquer les détails";
    } else {
        details.style.display = "none";
        button.textContent = "Détails et Dimensions";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease ${index * 0.2}s forwards`;
    });
});
// Affiche la fenêtre modale au chargement
window.onload = function () {
    const modal = document.getElementById('promoModal');
    const closeBtn = document.querySelector('.close-btn');

    // Afficher la fenêtre
    modal.style.display = 'flex';

    // Fermer la fenêtre quand on clique sur le bouton
    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    // Fermer la fenêtre quand on clique à l'extérieur du contenu
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
};
