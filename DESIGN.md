# DESIGN.md — Sistema de diseño Gente Moderna

> Editorial limpio. Tipografía serif en cuerpo, sans en UI. Dos columnas de color (crema/oscuro en claro, casi negro/dorado en oscuro). Sin decoración superflua.
>
> **Recordatorio**: leer este archivo antes de cualquier cambio visual. Los tokens no se cambian sin justificación.

---

## Dirección visual

Sello editorial de newsletter. Limpio, con aire, sin ruido visual. Referencia: revistas de largo formato, no landing pages de SaaS. Los pilares del diseño son la tipografía y el espacio en blanco — no los colores ni los efectos.

---

## Tokens base

Definidos en `:root` de `styles.css`. **No tocar sin discutir primero.**

### Color — modo claro

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#faf9f6` | Fondo general |
| `--text` | `#141414` | Texto principal |
| `--muted` | `#6b6560` | Texto secundario, leades, notas |
| `--soft` | `#f0ece3` | Superficies suaves (hover, fondos secundarios) |
| `--line` | `#e0d9ce` | Bordes, separadores |
| `--accent` | `#0e5c47` | Verde oscuro — énfasis, botones, eyebrows |
| `--accent-light` | `#e6f2ed` | Fondo suave del acento |
| `--accent-ink` | `#ffffff` | Texto sobre acento |
| `--field` | `#ffffff` | Fondo de inputs |

### Color — modo oscuro (`data-theme="dark"`)

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#0e0d0c` | Fondo casi negro |
| `--text` | `#f2ede4` | Texto principal |
| `--muted` | `#9e9690` | Texto secundario |
| `--soft` | `#1c1a18` | Superficies suaves |
| `--line` | `#312e2a` | Bordes |
| `--accent` | `#c9b56a` | Dorado — acento en oscuro |
| `--accent-light` | `#26220e` | Fondo suave del acento oscuro |
| `--accent-ink` | `#100f0d` | Texto sobre dorado |
| `--field` | `#181614` | Fondo de inputs |

### Tipografía

| Token | Valor |
|-------|-------|
| `--serif` | `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif` |
| `--sans` | `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` |

- **Body**: `--serif`, 18px base, line-height 1.6
- **UI** (nav, botones, eyebrows, meta): `--sans`
- **h1**: serif, `clamp(2.4rem, 6vw, 3.8rem)`, weight 400, line-height 1.05
- **h2**: serif, `clamp(1.5rem, 3.5vw, 2.1rem)`, weight 400, line-height 1.15
- **h3**: serif, `1.05rem`, weight 500
- **lede**: `clamp(1.05rem, 2.2vw, 1.28rem)`, color `--muted`, line-height 1.55
- **eyebrow**: sans, `0.72rem`, weight 700, uppercase, letter-spacing 0.1em, color `--accent`
- **micro**: sans, `0.76rem`, color `--muted`

### Layout

| Token | Valor | Uso |
|-------|-------|-----|
| `--max` | `700px` | Ancho columna de texto |
| `--wide` | `960px` | Ancho máximo del layout |

- Contenedor: `min(var(--wide), calc(100% - 48px))`, centrado con `margin-inline: auto`
- Secciones de texto: `min(var(--max), 100%)` — columna estrecha editorial

---

## Espaciado

- **Entre párrafos** dentro de `.section`: `p + p { margin-top: 1.1em }`
- **Respiro extra** (clase `.gap`): `margin-top: 2.8em`
- **Secciones** (`.section`): `padding: 60px 0`, `border-top: 1px solid var(--line)`
- **Header**: `padding: 32px 0 52px`
- **Hero**: `padding: 20px 0 80px`

---

## Componentes y patrones

### Header (`.site-header`)
- Logo a la izquierda, nav a la derecha.
- Logos con clases `.light` y `.dark` — visibilidad controlada por CSS según `data-theme`.
- Botón de dark mode: texto "Apagar la luz" / "Encender la luz".

### Botones (`.button`)
- Fondo `--text`, texto `--bg`. Borde 1.5px `--text`. Border-radius: 3px.
- Hover: fondo y borde `--accent`, texto `--accent-ink`.
- Variante `.secondary`: fondo transparente, texto `--text`.
- Altura mínima: 44px. Padding: `0 20px`.

### Eyebrow
- Sans, 0.72rem, uppercase, letter-spacing 0.1em, color `--accent`, weight 700.
- Va encima del h1 en page-intro y hero.

### Quote (`.quote`)
- Serif estándar pero con indentación o tratamiento visual de cita.
- Se usa para frases de impacto dentro del texto. No para citas atribuidas a terceros.

### Grid de pilares (`.grid`)
- 2 columnas en desktop, 1 en móvil.
- Bordes compartidos entre celdas — sin tarjetas con fondo propio.
- Borde superior en la cuadrícula, bordes laterales entre celdas.

### Lista editorial (`.list`)
- Ítems enlazables con meta (categoría/fecha) a la izquierda.
- Meta: sans, 0.72rem, uppercase, color `--muted`.
- Sin bullets, sin decoración. Solo texto + hover en color `--accent`.

### Formulario de suscripción (`.signup`)
- Input email + botón en fila (`.form-row`).
- Checkbox de privacidad separado debajo (`.consent`).
- Input: `appearance: none` solo en `input:not([type="checkbox"])`.
- Checkbox: `accent-color: var(--accent)`.

### Secciones de página (`.section`)
- Siempre con `border-top: 1px solid var(--line)`.
- Padding 60px vertical.
- Ancho máximo `--max` (700px) para columna de texto.

---

## Responsive (breakpoint: 640px)

- Columna de layout: padding lateral reducido.
- Grid de pilares: 1 columna.
- Hero h1: escala con `clamp`.
- Nav: posiblemente colapsado (pendiente hamburguesa).

---

## Dark mode

- Activado vía `data-theme="dark"` en `<html>`.
- Script anti-FOUC en `<head>` de cada página (inline, antes del CSS).
- Preferencia guardada en `localStorage` clave `gm-theme`.
- Los logos tienen clases `.light` (visible en claro) y `.dark` (visible en oscuro), controladas por CSS.

---

## Lo que NO funciona

Decisiones ya validadas como malas. No revivir.

- **Embed iframe de Systeme.io** — iframe con estilos propios, badge de branding, botón genérico "Clic aquí". Visualmente inaceptable. Descartado en sesión 2026-06-11.
- **`appearance: none` en todos los inputs** — rompe los checkboxes. Siempre usar `input:not([type="checkbox"])`.
- **Formulario con `method="get"`** — el email aparece en la URL. Siempre POST.
- **Script de dark mode al final del body** — causa flash de fondo claro en usuarios dark. Siempre en `<head>` inline.
