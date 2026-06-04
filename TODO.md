# TODO — Gente Moderna Web

## Próxima sesión — integración Systeme.io y DNS

- [ ] Obtener endpoint real de Systeme.io (panel → formularios → URL de integración)
- [ ] Actualizar `data-systeme-endpoint` en index.html y cartas.html
- [ ] Probar flujo completo: envío de email → confirmación en Systeme.io
- [ ] Verificar que Vercel sirve bien la web en URL provisional antes de tocar DNS
- [ ] Revisar registros DNS actuales antes del cambio (MX, A, CNAME) — no tocar MX
- [ ] Añadir dominio personalizado en Vercel y apuntar CNAME


## DNS — cuando Systeme.io esté listo y verificado

- [ ] Revisar registros DNS actuales del dominio (MX, A, CNAME) antes de tocar nada
- [ ] Añadir el CNAME de Vercel **sin borrar** los registros MX del correo
- [ ] Esperar propagación (minutos/horas) y verificar que el correo sigue funcionando
- [ ] Añadir dominio personalizado en Vercel: `gentemoderna.com` y `www.gentemoderna.com`

## Crítico (bloquea el lanzamiento)

- [ ] Añadir favicon (`.ico` + `apple-touch-icon.png`) y `<meta name="theme-color">`
- [ ] Completar contenido real en `cartas.html`, `escritos.html`, `sobre-mi.html`, `legal.html`
- [ ] Verificar política de privacidad conforme a RGPD antes de publicar el formulario

## Contenido

- [ ] Escribir los tres primeros artículos reales para "Últimos escritos" en `index.html`
- [ ] Crear páginas individuales de artículo (o decidir si se publican en Systeme.io y se enlaza)
- [ ] Foto o ilustración para `sobre-mi.html`

## Mejoras técnicas

- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`) en todas las páginas
- [ ] `sitemap.xml` y `robots.txt`

## Mejoras de diseño (no urgentes)

- [ ] Revisar menú en móviles muy pequeños — considerar toggle hamburguesa
- [ ] Sección de carta de presentación más personal entre hero y pilares
