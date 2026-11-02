const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const menuLabel = document.querySelector(".menu-toggle-label");
const currentYear = document.querySelector("#current-year");

document.body.classList.add("js-enabled");
currentYear.textContent = String(new Date().getFullYear());

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  navigation.classList.toggle("is-open", isOpen);
  menuLabel.textContent = isOpen ? "Zavrieť" : "Menu";
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});
