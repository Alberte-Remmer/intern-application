function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Simple fix for anchor navigation
document.addEventListener("DOMContentLoaded", function () {
  // Lyt efter hash changes (når anchor links klikkes)
  window.addEventListener("hashchange", function () {
    const targetId = window.location.hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Find alle hidden elementer i target sektionen og vis dem
      const allHiddenInSection = targetElement.querySelectorAll(".hidden, .hidden2");

      // Tilføj også target elementet selv hvis det har hidden klasse
      const elementsToShow = [targetElement, ...allHiddenInSection];

      elementsToShow.forEach((el) => {
        if (el.classList.contains("hidden")) {
          el.classList.add("show");
        }
        if (el.classList.contains("hidden2")) {
          el.classList.add("show2");
        }
      });
    }
  });

  // Kør også ved page load hvis der er en hash i URL'en
  if (window.location.hash) {
    window.dispatchEvent(new Event("hashchange"));
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show2");
    }
  });
});
const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el) => observer.observe(el));
