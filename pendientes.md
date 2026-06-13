# Pendientes — Gente Moderna Web

Última actualización: 2026-06-13

---

## 🔴 Bloqueante / próxima sesión

- [ ] **Foto hombre-pala.jpg** — copiar manualmente a `assets/hombre-pala.jpg`. El `<img>` ya existe en `pala.html`. La imagen se compartió en el chat; no se puede copiar desde el sandbox.
- [ ] **Bullets personales en `sobre-mi.html`** — bloque TODO comentado en el HTML. Añadir 4-6 párrafos estilo Álvaro Sánchez: edad, algo que dejaste, algo que empezaste, rareza. Sin credentials profesionales.

---

## 🟡 Importante pero no urgente

- [ ] **Email de bienvenida** — actualmente no llega ningún email tras suscribirse. Opción recomendada: automatización en Systeme.io (trigger: tag `Suscriptor-home` añadido → email de bienvenida).
- [ ] **Audio lead magnet** — grabar nota de voz (5-10 min, historia o insight). Subir, añadir enlace en el email de bienvenida, actualizar copy del formulario con la promesa concreta. No añadir promesa antes de que el audio exista.
- [ ] **Anti-FOUC en todas las páginas** — el script inline de tema solo está en `index.html` y `pala.html`. Falta en `sobre-mi.html`, `cartas.html` y `legal.html`.

---

## 🟢 Técnico / SEO (cuando el dominio esté activo)

- [ ] **DNS** — apuntar `gentemoderna.com` y `www.gentemoderna.com` a Vercel. No tocar registros MX del correo. Solo cuando el formulario esté probado end-to-end.
- [ ] **Favicon** — `.ico` + `apple-touch-icon.png` + `<meta name="theme-color">`.
- [ ] **Open Graph** — `og:title`, `og:description`, `og:image` en todas las páginas.
- [ ] **sitemap.xml** y **robots.txt**.

---

## 📝 Contenido

- [ ] Artículos reales para archivar — decidir si viven en Vercel (HTML estático) o en Systeme.io blog.
- [ ] Primeras 2-3 cartas enviadas para tener historial cuando el archivo exista.
