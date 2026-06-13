# Decisions Log — Gente Moderna Web

Decisiones de producto, estructura y copy. Por qué se tomaron y qué se descartó.

---

## Estructura y navegación

**2026-06-13 — Tres pestañas: Home | Sobre mí | Pala**
Se elimina Escritos del nav y se crea Pala como tercera pestaña. La lógica es la tela de araña: cada página tiene un único paso siguiente hacia el email. Con Escritos sin contenido real, el tab era ruido. Pala da identidad y ancla la voz del autor.

**2026-06-13 — `escritos.html` huérfana, sin enlace activo**
El archivo sigue existiendo en el repo pero no enlaza desde ningún sitio. Decisión deliberada: no eliminarlo por si se reactiva, pero no tiene presencia en la web hasta que haya contenido real.

---

## Copy

**2026-06-13 — Historia del desierto se mueve a `pala.html`, no en `sobre-mi.html`**
La historia del hombre de la pala merecía su propio espacio. En sobre-mi quedaba enterrada entre secciones de filosofía. En Pala es el centro. Sobre-mi pasa a ser más directo: "Soy Jof." + teaser que apunta a Pala.

**2026-06-13 — Teaser de sobre-mi: "¿ya, pero quién eres tú?"**
El escalón entre Sobre mí y Pala usa la pregunta que el lector escéptico ya se está haciendo. No se explica nada — se invita a hacer clic. Consistente con la mecánica de tela de araña: cada página tiene una sola salida.

**2026-06-13 — Hero link cambiado: "O leer los escritos primero →" → "¿Quién escribe esto? →"**
El link anterior apuntaba a Escritos (ya sin contenido). El nuevo apunta a Sobre mí y es el primer escalón de la tela de araña desde el hero.

**2026-06-12 — H1 definitivo: "Todo el mundo tiene un método. Pero, ¿tienen criterio?"**
Se probaron varias versiones. Esta ganó porque "¿tienen?" activa al lector: le hace preguntarse si él tiene criterio, no solo si otros lo tienen.

**2026-06-12 — Prohibiciones permanentes de copy**
Nunca usar: "no soy un gurú", "no vendo humo", "sin recetas ni gurús". Generan el efecto contrario: convocan exactamente la imagen que niegan.

**2026-06-12 — Lede sin "sin recetas ni gurús"**
Eliminado del subtítulo del hero. Reemplazado por: "Para quien ya tiene suficiente información y todavía no tiene claro qué hacer con ella." Más específico, más honesto, no reactivo.

---

## Formulario y suscripción

**2026-06-11 — Single opt-in con checkbox**
El doble opt-in de Systeme.io solo funciona con sus formularios nativos (iframe). Se opta por single opt-in con checkbox de consentimiento explícito. Válido bajo RGPD, más simple, funciona hoy.

**2026-06-11 — Embed de Systeme.io descartado**
Se probó el iframe embed. Visualmente inaceptable: estilos propios, badge "Funciona con systeme.io", botón genérico. Decisión: formulario custom propio vía API.

**2026-06-08 — Vercel Function + API Systeme.io**
No hay endpoint HTML estático en Systeme.io. La integración correcta es: formulario propio → Vercel serverless function → `POST /api/contacts`. La API Key nunca queda expuesta en el frontend.

---

## Legal y cookies

**2026-06-12 — "Esta página no usa cookies. Puedes navegar en paz."**
El sitio usa `localStorage` (no cookies) para tema y banner. localStorage no es una cookie — es almacenamiento local que no sale del dispositivo. La afirmación es legalmente correcta. El banner lo confirma visualmente al entrar.

---

## Infraestructura

**2026-06-03 — Vercel como hosting, Systeme.io solo para newsletter**
Separación limpia: front en Vercel (HTML estático, deploy automático desde GitHub), gestión de suscriptores en Systeme.io. El dominio `gentemoderna.com` sigue en el sistema actual hasta que el formulario esté probado end-to-end.

**Decisión permanente — No tocar DNS hasta verificar el formulario con suscriptores reales**
Los registros MX del correo no se tocan en ningún caso. El cambio DNS se hace solo cuando la web esté completa y el formulario probado.

---

## Sesión 2026-06-13 (segunda parte)

**2026-06-13 — Estructura home en dos fases con toggle**
La home se divide en fase 1 (siempre visible) y fase 2 (oculta tras un botón). El botón es un `<details>/<summary>` nativo estilizado como `.button`. La frase del botón es "¿Cómo puedo mejorar lo que ya tengo?" — es la pregunta-pivote que conecta la fase 1 (quiénes son esas personas) con la fase 2 (por qué el mercado falla y qué sí funciona). Sin JS, accesible por defecto.

**2026-06-13 — "¿Cómo?" eliminado como sección independiente**
La sección collapsible "¿Cómo?" (Echando el freno macareno... hasta PAZ) se eliminó de la fase 1. La pregunta "¿Cómo?" queda implícita en el texto "Haciéndose una única pregunta." y el botón la responde al abrirse. Más tensión, menos explicación.

**2026-06-13 — "Pero igual cuela..." añadido al hero**
Después de "Es coña." el lector necesita un micro-respiro cómplice antes del formulario. "Pero igual cuela..." cumple esa función sin romper el ritmo.

**2026-06-13 — Testimonios con guiones, sin cursiva**
Los tres testimonios de lectores van con guión largo y sin `<em>`. Más directos, menos publicitarios.

**2026-06-13 — Jim Carrey quote como .quote**
La cita de Jim Carrey ("Ojalá todos pudieran ser ricos y famosos...") va en bloque `.quote` (borde izquierdo accent, color muted) sin cursiva. Contraste visual claro respecto al texto corrido.

**2026-06-13 — "Permiso de rodillas" como contraste final**
Versión definitiva del contraste negativo: "Si vas a seguir pidiendo permiso de rodillas a tu jefe para llevar a tu hijo al médico, no te suscribas." La versión anterior ("toda la vida") se suavizaba sola. "De rodillas" es más visual e incómodo — que es el objetivo.
