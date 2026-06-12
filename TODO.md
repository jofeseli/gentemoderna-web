# TODO — Gente Moderna Web

## Contenido pendiente

- [ ] **Foto del hombre de la pala** — añadir la imagen a `assets/hombre-pala.jpg`. El `<img>` ya está en `sobre-mi.html` con ese src. Solo falta copiar el archivo. La imagen se compartió en el chat como inline; hay que guardarla manualmente y pegarla en la carpeta `assets/`.
- [ ] **Bullets personales en `sobre-mi.html`** — hay un bloque TODO comentado debajo de "Soy padre". Añadir 4-6 párrafos en estilo Álvaro Sánchez: edad, algo que dejaste de hacer, algo que empezaste, rareza. Sin credentials profesionales.
- [ ] Escribir primeros artículos reales para `escritos.html` (ahora tiene placeholders)
- [ ] Decidir si los artículos viven en Vercel (HTML estático) o en Systeme.io blog (y se enlaza)
- [ ] Audio lead magnet — grabar nota de voz (5-10 min, historia o insight). Subir a hosting, añadir link al email de bienvenida en Systeme.io, actualizar copy del formulario con la promesa concreta.

## Email de bienvenida

- [ ] Actualmente no llega ningún email al suscribirse — single opt-in funciona pero sin feedback por email
- [ ] Opción A (recomendada): automatización en Systeme.io — trigger "tag Suscriptor-home añadido" → enviar email de bienvenida manual
- [ ] Opción B: Resend (gratis hasta 3.000/mes) para email transaccional desde la Vercel Function

## Legal

- [x] ~~Completar `legal.html` con política de privacidad real conforme a RGPD~~ — hecho sesión 2026-06-12
- [x] ~~Revisar si Systeme.io instala cookies y documentarlo~~ — hecho, no usa cookies
- [x] ~~Añadir banner de cookies o nota "este sitio no usa cookies de seguimiento"~~ — hecho sesión 2026-06-12

## DNS y dominio

- [ ] Verificar formulario con suscriptores reales antes de tocar DNS
- [ ] Revisar registros DNS actuales (MX, A, CNAME) — **no tocar MX del correo**
- [ ] Añadir `gentemoderna.com` y `www.gentemoderna.com` en Vercel
- [ ] Apuntar CNAME a Vercel y esperar propagación

## Técnico

- [ ] Favicon (`.ico` + `apple-touch-icon.png`) y `<meta name="theme-color">`
- [ ] Open Graph tags en todas las páginas
- [ ] `sitemap.xml` y `robots.txt`
- [ ] Script anti-FOUC en `<head>` de todas las páginas (ahora solo está en `index.html`)

## Diseño (no urgente)

- [ ] Menú hamburguesa en móviles muy pequeños
