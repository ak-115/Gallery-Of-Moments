// Open the lightbox
function openLightbox(src) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    
    lightbox.style.display = "flex";  
    lightboxImg.src = src; 
}

// Close the lightbox
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; 
}

// Add event listener for keydown to detect Esc key press
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" || event.key === "Esc") {  
        closeLightbox();  
    }
});
