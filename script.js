const root = document.documentElement;
const button = document.querySelector("[data-theme-toggle]");
const savedTheme = localStorage.getItem("gm-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const LETTERS_FALLBACK_URL = "https://www.gentemoderna.com";

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("gm-theme", theme);
  if (button) {
    button.textContent = theme === "dark" ? "Encender la luz" : "Apagar la luz";
    button.setAttribute("aria-label", theme === "dark" ? "Cambiar a fondo claro" : "Cambiar a fondo oscuro");
  }
}

setTheme(savedTheme || (prefersDark ? "dark" : "light"));

if (button) {
  button.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
}

document.querySelectorAll("[data-letters-form]").forEach((form) => {
  // Replace data-systeme-endpoint with the real Systeme.io endpoint when it is available.
  const endpoint = form.dataset.systemeEndpoint || LETTERS_FALLBACK_URL;
  const method = form.dataset.systemeMethod || "get";
  form.setAttribute("action", endpoint);
  form.setAttribute("method", method);
});
