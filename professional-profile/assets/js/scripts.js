// Funkcja do automatycznego przewijania
function autoScroll(container, direction) {
    const speed = 4; // Szybkość przewijania
    let scrollInterval = setInterval(() => {
        container.scrollLeft += direction * speed;
    }, 10);

    // Zatrzymanie przewijania po opuszczeniu strzałki
    container.addEventListener("mouseleave", () => clearInterval(scrollInterval));
}

// Pobierz kontener i strzałki
const cardContainer = document.getElementById("cardContainer");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

// Przewijanie w lewo po najechaniu na lewą strzałkę
leftArrow.addEventListener("mouseenter", () => autoScroll(cardContainer, -1));

// Przewijanie w prawo po najechaniu na prawą strzałkę
rightArrow.addEventListener("mouseenter", () => autoScroll(cardContainer, 1));