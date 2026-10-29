
// ==============================
// MENU DE NAVIGATION MOBILE
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fermer le menu" : "Ouvrir le menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Fermer le menu après la sélection d'une rubrique
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Ouvrir le menu");
            menuToggle.textContent = "☰";
        });
    });

    // Fermer le menu avec la touche Échap
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Ouvrir le menu");
            menuToggle.textContent = "☰";
            menuToggle.focus();
        }
    });
}

// ==============================
// ANNEE AUTOMATIQUE
// ==============================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ==============================
// MESSAGE DANS LA CONSOLE
// ==============================

console.log("Portfolio de Marvin Tchakounte chargé avec succès !");
