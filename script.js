// ─── Dark mode ───────────────────────────────────────────
const root = document.documentElement;
const button = document.querySelector("[data-theme-toggle]");

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("gm-theme", theme);
  if (button) {
    button.textContent = theme === "dark" ? "Encender la luz" : "Apagar la luz";
    button.setAttribute("aria-label", theme === "dark" ? "Cambiar a fondo claro" : "Cambiar a fondo oscuro");
  }
}

const savedTheme = localStorage.getItem("gm-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (prefersDark ? "dark" : "light"));

if (button) {
  button.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
}

// ─── Formulario de suscripción ────────────────────────────
document.querySelectorAll("[data-letters-form]").forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('button[type="submit"]');
    const checkbox = form.querySelector('input[type="checkbox"]');
    const email = emailInput?.value?.trim();

    if (!email) return;

    if (checkbox && !checkbox.checked) {
      showFormError(form, "Debes aceptar la política de privacidad para continuar.");
      return;
    }

    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando…";

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        form.innerHTML = `<p style="padding: 12px 0; font-family: var(--sans); font-size: 0.9rem;">
          Hecho. Ya recibirás las próximas cartas.
        </p>`;
      } else {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        showFormError(form, "Algo ha fallado. Inténtalo de nuevo.");
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      showFormError(form, "Error de conexión. Inténtalo de nuevo.");
    }
  });
});

function showFormError(form, message) {
  let err = form.querySelector(".form-error");
  if (!err) {
    err = document.createElement("p");
    err.className = "form-error micro";
    err.style.color = "#c0392b";
    err.style.marginTop = "8px";
    form.appendChild(err);
  }
  err.textContent = message;
}
