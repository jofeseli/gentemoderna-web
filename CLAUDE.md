# Gente Moderna — Web

Sitio estático de Gente Moderna: newsletter editorial sobre dinero, decisiones, Bitcoin, IA y libertad personal.

## Estructura de archivos

```
gentemoderna-web/
├── index.html        Página principal (Home)
├── sobre-mi.html     Página personal
├── pala.html         Historia del desierto + metáfora de la pala
├── cartas.html       Página de suscripción (sin enlace en nav, existe como landing)
├── legal.html        Política de privacidad y aviso legal
├── styles.css        Estilos globales (tokens, componentes, responsive)
├── script.js         Dark mode + integración Systeme.io + banner no-cookies
└── assets/
    ├── logo-negro.png
    ├── logo-blanco.png
    └── hombre-pala.jpg   ← PENDIENTE: copiar manualmente
```

## Navegación activa

Tres pestañas: **Home** (logo) | **Sobre mí** | **Pala**

Tela de araña: Home → Sobre mí ("¿Quién escribe esto? →") → Pala ("¿ya, pero quién eres tú? →") → formulario email

## Stack

HTML estático + CSS vanilla + JS mínimo. Sin frameworks, sin build step. Desplegable en cualquier hosting estático (Netlify, Vercel, GitHub Pages).

## Sistema de diseño

Tokens definidos en `:root` dentro de `styles.css`:

- `--bg`, `--text`, `--muted`, `--soft`, `--line` — superficies y texto
- `--accent`, `--accent-light`, `--accent-ink` — color de énfasis (verde oscuro en claro, dorado en oscuro)
- `--field` — fondo de inputs
- `--sans`, `--serif` — familias tipográficas
- `--max` (700px), `--wide` (960px) — anchos de columna

## Dark mode

Aplicado vía `data-theme` en `<html>`. El script en `<head>` lo inicializa antes del primer paint para evitar flash. Preferencia guardada en `localStorage` bajo la clave `gm-theme`.

## Formulario de suscripción

Usa `data-letters-form` + `data-systeme-endpoint` para integrarse con Systeme.io. Mientras el endpoint no esté configurado, el formulario apunta a `https://www.gentemoderna.com`. El método es POST. Ver `script.js` para la lógica.

## Despliegue

- Repositorio: https://github.com/jofeseli/gentemoderna-web (rama `main`)
- Hosting: Vercel — conectado al repo, despliega automáticamente en cada push
- URL provisional: `gentemoderna-web.vercel.app` (dominio propio pendiente)
- DNS: **no tocados todavía** — el dominio `gentemoderna.com` sigue apuntando al sistema actual

## Sesión 2026-06-03

- Corregidos bugs técnicos: flash de tema, method GET→POST en form, inline style, nota de desarrollo eliminada
- Rediseño CSS: grid de pilares con bordes compartidos, lista de escritos editorial con categoría fija, transiciones, tokens consolidados, breakpoint móvil ajustado a 640px
- Documentación creada: CLAUDE.md, TODO.md, LOG.md
- Repositorio GitHub creado: github.com/jofeseli/gentemoderna-web
- Desplegado en Vercel — pipeline automático desde GitHub activo

## Sesión 2026-06-04

- Reescritura completa del copy en index.html, cartas.html, escritos.html y sobre-mi.html
- Voz más segura, directa y con humor seco puntual — sin sarcasmo, sin disculparse por existir
- Corregidos bugs restantes en cartas.html: method GET→POST, nota de dev eliminada, enlace de privacidad apunta a legal.html local
- Subida de cambios a GitHub vía API (workaround por conflicto de locks de git en sandbox)

## Sesión 2026-06-08

- Investigación integración formulario Systeme.io
- Confirmado: Systeme.io usa doble opt-in, gestiona el formulario por JS (no hay endpoint HTML estático)
- sa del formulario identificado: sa01933177488b6f2031679d2041bd54a2be659078
- Decisión: integrar vía API de Systeme.io + Vercel Function (no iframe)
- Pendiente: obtener API Key de Systeme.io para completar la integración

## Sesión 2026-06-10

- Checkbox de privacidad arreglado: separado label/input con for+id, corregido `appearance:none` en CSS que impedía marcar el checkbox
- Vercel Function `/api/subscribe.js` creada y desplegada
- API Key de Systeme.io configurada como variable de entorno en Vercel (`SYSTEME_API_KEY`)
- Copy pilar Claridad actualizado: "grupo de WhatsApp de los padres"
- Función corregida a CommonJS (`module.exports`) — el formulario sigue dando error al enviar, pendiente depurar con logs de Vercel

## Sesión 2026-06-11

- Formulario funcionando: causa del error era que Systeme.io devuelve 422 para emails ya registrados — corregido tratándolo como éxito
- Embed de Systeme.io probado y descartado: iframe con estilos propios, branding ajeno, visualmente inaceptable
- Decisión: single opt-in con checkbox — válido bajo RGPD, funciona hoy
- Tag `Suscriptor-home` (ID: 1157284) asignado automáticamente en cada suscripción vía `POST /api/contacts/{id}/tags` con `{ tagId: 1157284 }`
- Mensaje de éxito actualizado: "Hecho. Ya recibirás las próximas cartas."
- `sobre-mi.html` reescrito: máximo aire, frases como párrafos individuales, clase `.gap` para respiros extra
- Añadido `.section p + p { margin-top: 1.1em }` y `.gap { margin-top: 2.8em }` a styles.css
- Quote actualizada: "No quiero una vida diferente. Quiero afinar la que ya tengo."

## Sesión 2026-06-12

- Leída Masterclass "Tela de araña" (Isra Bravo, 14 páginas) — principios aplicados a la web
- `index.html` reescrito: formulario en el hero, sección burla del mercado, sección autoridad por experiencia, h1 definitivo, lede sin "sin recetas ni gurús"
- H1 definitivo: "Todo el mundo tiene un método. Pero, ¿tienen criterio?"
- Lede: "Para quien ya tiene suficiente información y todavía no tiene claro qué hacer con ella."
- `sobre-mi.html` reescrito: apertura con historia del desierto (Melilla→Sáhara, coches encallados, hombre con pala), metáfora de la pala como autoridad, cero credentials profesionales
- `<img class="prose-img" src="assets/hombre-pala.jpg">` añadida al final de la historia — **pendiente: copiar el archivo a assets/**
- CSS `.prose-img`: grayscale(60%), opacity 0.88, editorial treatment
- `cartas.html` y `escritos.html`: lede y secciones mejoradas, formulario en escritos
- `legal.html` reescrito con datos reales (José Félix Martínez Moratinos, NIF, dirección, email, tel)
- Banner no-cookies en `script.js` + estilos en `styles.css`
- Prohibiciones de copy confirmadas: NUNCA "no soy un gurú", "no vendo humo", "sin recetas ni gurús"
- Lead magnet audio: buena idea, pendiente de grabar. No añadir promesa sin contenido real.
- Todos los cambios subidos a GitHub vía API REST

## Sesión 2026-06-13

- `escritos.html` eliminada de la navegación — página huérfana, sin enlaces activos
- Creada `pala.html`: historia completa del desierto (Melilla→Sáhara, hombre con pala) + "por qué te cuento esto" + formulario. Esta es la historia que antes abría sobre-mi.html
- `sobre-mi.html` reescrito: abre con "Soy Jof." + teaser "¿No te convence? Normal. Acabamos de conocernos. / ¿ya, pero quién eres tú? →" enlazando a pala.html. Sección de historia del desierto eliminada de aquí
- Sección "Últimos escritos" eliminada de `index.html` (tenía placeholders sin contenido real)
- Link "O leer los escritos primero →" en hero cambiado a "¿Quién escribe esto? →" apuntando a sobre-mi.html
- Nav unificado en todas las páginas: Sobre mí | Pala | toggle tema
- Footers actualizados: sin referencias a escritos ni cartas
- Estructura final: 3 pestañas activas — Home (logo) | Sobre mí | Pala
- Tela de araña completa: Home → Sobre mí → Pala → email
