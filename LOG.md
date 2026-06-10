# LOG — Decisiones de diseño y producto

## 2026-06-03

### Diseño visual

**Grid de pilares con bordes compartidos** — se descartaron las tarjetas con fondo/sombra propias. Los cuatro pilares comparten una cuadrícula de líneas finas. Más editorial, menos "landing page SaaS".

**Lista de escritos con categoría como columna fija** — la categoría (Dinero, Tecnología, Decisiones) ocupa 80px fijos a la izquierda, el título fluye al lado. Referencia: estilo índice de revista.

**`font-weight: 400` en títulos** — se bajó de 500 a 400 para los headings. Más refinado con las fuentes serif del sistema.

**Color acento en modo oscuro: dorado `#c9b56a`** — en vez de mantener el verde oscuro (ilegible sobre fondo oscuro), se usa un dorado que mantiene la calidez editorial.

**Eyebrow en color acento** — antes era gris (`--muted`). Cambiado a `--accent` para dar más personalidad sin añadir elementos nuevos.

### Técnicas

**Script de tema en `<head>` (inline)** — se mueve la inicialización del tema fuera del bundle principal para eliminar el flash de fondo claro en usuarios de dark mode. El bundle `script.js` sigue manejando el toggle interactivo.

**`method="post"` en formulario** — el email no debe aparecer en la URL ni en logs de servidor. Cambiado de GET a POST. Pendiente confirmar que Systeme.io acepta POST (casi seguro que sí).

**Breakpoint móvil a 640px** — el anterior era 720px, demasiado ancho. A 720px muchos tablets en landscape recibían el layout móvil innecesariamente.

**Variables `--sans` y `--serif`** — la stack tipográfica completa se declaraba inline en cada regla. Consolidada en tokens para facilitar cambios futuros.

### Infraestructura

**Vercel como hosting, no Systeme.io** — la web vive en Vercel (HTML estático, deploy automático desde GitHub). Systeme.io se usa solo como backend del formulario de suscripción. Separación limpia: front en Vercel, gestión de suscriptores en Systeme.io.

**DNS: cambio diferido hasta verificar Systeme.io** — decisión consciente de no tocar los registros DNS hasta que el formulario esté probado end-to-end con el endpoint real. El dominio `gentemoderna.com` sigue en el sistema actual. La web se puede probar en la URL provisional de Vercel sin riesgo.

**Registros DNS son independientes por tipo** — MX (correo) y A/CNAME (web) no se interfieren. Cuando se haga el cambio DNS solo se modificará el CNAME/A apuntando a Vercel; los registros MX del correo no se tocan.

## 2026-06-04

### Copy

**Voz editorial: segura, directa, humor seco puntual** — se descarta el tono autoconsciente que pedía perdón por existir ("ya vamos justos de ficción", "hasta respirar raro"). La nueva voz es más adulta: sabe lo que vale, no necesita subrayarlo.

**Humor solo donde emerge de forma natural** — tres momentos concretos en toda la web: "en una hoja de cálculo optimista escrita un domingo por la tarde" (pilar Libertad), "Para eso ya existe Twitter" (sobre-mí), "Sin newsletter de 47 pasos" (hero). Fuera de esos puntos, el copy es limpio y directo.

**"Elimina" en vez de "simplifica"** — en el pilar de Decisiones. "Simplifica" sugiere reorganizar; "elimina" sugiere cortar de raíz. Más honesto con la filosofía del proyecto.

**h1 cambiado a "Pensar mejor antes de moverse más"** — el h1 anterior ("Claridad para vivir, decidir e invertir mejor") era correcto pero genérico. El nuevo es la tesis del proyecto en una línea.

**Referencia de estilo** — voz inspirada en newsletters editoriales directas: frases cortas, sin adornos, con una idea por párrafo. Cada frase gana su sitio o sale.

## 2026-06-08

### Integración Systeme.io

**Systeme.io no expone endpoint HTML estático** — el formulario se gestiona completamente por JavaScript. No hay un `action` URL en el HTML que se pueda copiar directamente. Intentos de fetch y Chrome inspector confirmaron esto.

**Identificado el `sa` del formulario**: `sa01933177488b6f2031679d2041bd54a2be659078`. Útil como referencia pero no suficiente para integración directa.

**Decisión: API de Systeme.io + Vercel Function** — en vez de iframe (que rompería el diseño) o intentar replicar el JS de Systeme.io, la integración correcta es: formulario custom → Vercel serverless function → API `https://api.systeme.io/api/contacts`. La API Key nunca queda expuesta en el frontend.

**DNS: no tocar hasta que el formulario funcione** — el dominio `gentemoderna.com` sigue en Systeme.io. La web nueva vive en Vercel con URL provisional hasta que la integración esté probada end-to-end.
