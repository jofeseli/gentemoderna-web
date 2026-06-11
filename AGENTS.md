# AGENTS.md — Gente Moderna Web

> Sitio estático de Gente Moderna: newsletter editorial sobre dinero, decisiones, Bitcoin, IA y libertad personal. Propiedad de José Félix.
>
> Este archivo es un **mapa**, no una biblia. Lee solo las secciones que necesites para la tarea concreta.

---

## Antes de empezar

1. Lee este archivo entero — son ~3 minutos.
2. Lee `CLAUDE.md` para ver el historial de sesiones y decisiones técnicas tomadas.
3. Si la tarea implica escribir o editar copy, **lee `guia-estilo.md` antes de escribir una sola línea**.
4. No hay build step. El proyecto es HTML estático. No hay que arrancar nada local.

---

## Stack y comandos

- **Frontend**: HTML estático + CSS vanilla + JS mínimo. Sin frameworks, sin build step.
- **Backend**: Vercel Serverless Function (`api/subscribe.js`) en Node.js CommonJS.
- **Email marketing**: Systeme.io (API + tags). API Key en Vercel como variable de entorno.
- **Despliegue**: Vercel — conectado a GitHub, deploy automático en cada push a `main`.
- **Repositorio**: https://github.com/jofeseli/gentemoderna-web (rama `main`)
- **URL provisional**: `gentemoderna-web.vercel.app`
- **DNS**: no tocados. `gentemoderna.com` sigue apuntando al sistema antiguo.

### Comandos esenciales

```bash
# No hay servidor local. Abrir los HTML directamente en el navegador.

# Deploy: push a GitHub → Vercel despliega automáticamente
# Push via GitHub API (workaround por locks de git en sandbox):
# Ver script en CLAUDE.md sección "Sesión 2026-06-03"
```

---

## Mapa del repositorio

| Ruta | Qué contiene | Cuándo leerlo |
|------|--------------|---------------|
| `index.html` | Página principal — hero, pilares, formulario, últimos escritos | Si tocas el home |
| `cartas.html` | Página de suscripción — formulario principal + descripción newsletter | Si tocas el formulario |
| `escritos.html` | Archivo de artículos — lista de títulos | Si añades artículos |
| `sobre-mi.html` | Página personal — historia, filosofía, CTA | Si tocas el sobre mí |
| `legal.html` | Política de privacidad (pendiente redactar) | Si tocas lo legal |
| `styles.css` | Todos los estilos — tokens, componentes, responsive | Siempre que toques diseño |
| `script.js` | Dark mode toggle + submit del formulario vía fetch | Si tocas JS |
| `api/subscribe.js` | Vercel Function — crea contacto en Systeme.io y asigna tag | Si tocas la suscripción |
| `CLAUDE.md` | Historial de sesiones y decisiones técnicas | Al arrancar sesión nueva |
| `LOG.md` | Decisiones de diseño y producto con razonamiento | Si necesitas entender por qué algo está como está |
| `TODO.md` | Pendientes organizados por área | Al arrancar para saber dónde estamos |
| `guia-estilo.md` | Guía de voz y estilo para todo el copy | **Siempre antes de escribir** |
| `DESIGN.md` | Sistema de diseño — tokens, componentes, patrones | Siempre que toques diseño visual |
| `global/` | Plantillas arnés-agentes del usuario. No tocar. | Solo para referencia |

---

## Convenciones de código

- **HTML/CSS/JS**: sin frameworks, sin build. Lo que ves es lo que hay.
- **CSS**: tokens en `:root`, componentes por clase semántica (`.section`, `.hero`, `.pillar`, etc.). No añadir estilos inline.
- **JS**: mínimo. Sin librerías externas. `script.js` maneja dark mode y submit del formulario.
- **Vercel Functions**: CommonJS (`module.exports`). Sin `package.json` = sin ES modules.
- **Comentarios**: ninguno por defecto. Solo si el porqué no se deduce del código.
- **Dark mode**: via `data-theme` en `<html>`. El script anti-FOUC va en `<head>` inline. Guardado en `localStorage` bajo clave `gm-theme`.

---

## Reglas específicas del proyecto

- **Antes de tocar `styles.css`, leer `DESIGN.md`** — los tokens no se cambian sin justificación.
- **Antes de escribir cualquier copy, leer `guia-estilo.md`** — voz, ritmo, léxico vetado.
- **No tocar DNS** — el dominio `gentemoderna.com` sigue en el sistema antiguo. No pedir credenciales DNS ni sugerir cambios hasta que el formulario esté verificado con suscriptores reales.
- **Secrets**: la API Key de Systeme.io está en Vercel como `systemeapykey`. No mostrarla en el chat. Si hay que referirla, usar el nombre de la variable.
- **Git en sandbox**: hay un `.git/HEAD.lock` persistente en el sandbox que bloquea los commits normales. Workaround: usar la GitHub REST API para subir archivos. Ver patrón en sesiones anteriores de `CLAUDE.md`.
- **Systeme.io**: la función crea el contacto y asigna el tag `Suscriptor-home` (ID: 1157284). Single opt-in — sin email de confirmación. El checkbox de privacidad cubre el consentimiento RGPD.

---

## Estado actual del proyecto *(2026-06-11)*

- Formulario de suscripción: **funcionando** — crea contacto en Systeme.io + asigna tag `Suscriptor-home`.
- Todas las páginas principales tienen copy revisado y conforme a `guia-estilo.md`.
- `sobre-mi.html`: contenido nuevo con historia personal **pendiente** (placeholder marcado).
- `legal.html`: pendiente redactar política de privacidad real.
- DNS: **no tocados** — esperando verificación con suscriptores reales antes de migrar.

---

## Cierre de sesión

Al terminar un bloque de trabajo:
1. Actualizar `CLAUDE.md` con la sección de la sesión.
2. Actualizar `TODO.md` con nuevos pendientes o items resueltos.
3. Si hay decisiones de diseño o producto, añadirlas a `LOG.md`.
4. Subir todos los archivos modificados a GitHub vía API.

---

## Cuándo este archivo miente

Si el código contradice lo que dice este archivo:
1. Confía en el código actual.
2. Avisa al usuario de la discrepancia.
3. Actualiza este archivo en el mismo push que el cambio.
