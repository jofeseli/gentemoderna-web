# TODO — Gente Moderna Web

## Pendiente urgente — antes de cualquier otra cosa

- [ ] Configurar git remote y hacer push de los docs pendientes (CLAUDE.md, TODO.md, LOG.md):
  ```bash
  git remote add origin https://github.com/jofeseli/gentemoderna-web.git
  git push origin master:main
  ```
  Pedirá usuario `jofeseli` y contraseña = token nuevo de github.com/settings/tokens

## PRÓXIMO PASO — Depurar error en formulario

- [ ] Abrir Vercel → proyecto → **Functions** → ver logs de `/api/subscribe` para ver el error exacto
- [ ] Verificar que la variable `SYSTEME_API_KEY` está presente en el entorno de producción
- [ ] Probar la función directamente con curl:
  ```bash
  curl -X POST https://gentemoderna-web.vercel.app/api/subscribe \
    -H "Content-Type: application/json" \
    -d '{"email":"test@test.com"}'
  ```
- [ ] Una vez funcionando, probar flujo completo: envío → contacto aparece en Systeme.io → email de confirmación llega

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

## Legal / Cookies (no urgente)

- [ ] Añadir banner de cookies o nota "Este sitio no utiliza cookies de seguimiento" según corresponda
- [ ] Revisar si Systeme.io instala cookies propias y documentarlo en legal.html

## Mejoras de diseño (no urgentes)

- [ ] Revisar menú en móviles muy pequeños — considerar toggle hamburguesa
- [ ] Sección de carta de presentación más personal entre hero y pilares
