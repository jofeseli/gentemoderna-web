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
