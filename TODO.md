# TODO — Gente Moderna Web

## Contenido pendiente

- [ ] Historia personal para `sobre-mi.html` — momento concreto y vivido que ancle el texto. Cuando esté lista, va entre la intro y "Lo que descubrí"
- [ ] Escribir primeros artículos reales para `escritos.html` (ahora tiene placeholders)
- [ ] Decidir si los artículos viven en Vercel (HTML estático) o en Systeme.io blog (y se enlaza)
- [ ] Foto o ilustración para `sobre-mi.html`

## Email de bienvenida

- [ ] Actualmente no llega ningún email al suscribirse — single opt-in funciona pero sin feedback por email
- [ ] Opción A: automatización en Systeme.io con trigger "tag Suscriptor-home añadido" → enviar email de bienvenida
- [ ] Opción B: Resend (gratis hasta 3.000/mes) para email transaccional desde la Vercel Function

## Legal

- [ ] Completar `legal.html` con política de privacidad real conforme a RGPD
- [ ] Revisar si Systeme.io instala cookies y documentarlo
- [ ] Añadir banner de cookies o nota "este sitio no usa cookies de seguimiento"

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
