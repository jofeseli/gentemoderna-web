# Gente Moderna — Web

Sitio estático de Gente Moderna: newsletter editorial sobre dinero, decisiones, Bitcoin, IA y libertad personal.

## Estructura de archivos

```
gentemoderna-web/
├── index.html        Página principal
├── cartas.html       Página de suscripción a la newsletter
├── escritos.html     Archivo de artículos
├── sobre-mi.html     Página personal
├── legal.html        Política de privacidad y aviso legal
├── styles.css        Estilos globales (tokens, componentes, responsive)
├── script.js         Dark mode + integración Systeme.io
└── assets/
    ├── logo-negro.png
    └── logo-blanco.png
```

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

## Sesión 2026-06-03

- Corregidos bugs técnicos: flash de tema, method GET→POST en form, inline style, nota de desarrollo eliminada
- Rediseño CSS: grid de pilares con bordes compartidos, lista de escritos editorial con categoría fija, transiciones, tokens consolidados, breakpoint móvil ajustado a 640px
