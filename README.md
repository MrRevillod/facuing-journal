# Revista de Ingeniería UCT — Astro

Migración del prototipo de diagramación a Astro 6 con Tailwind 4. Mantiene el diseño y
el contenido de `../revista-draft/`, pero con componentes, datos tipados y rutas reales.

## Comandos

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # genera dist/
pnpm preview    # sirve dist/
```

## Estructura

```
src/
├── data/
│   ├── journal.ts      metadatos, volúmenes, números y artículos (tipados)
│   └── preheader.ts    enlaces y redes institucionales UCT
├── lib/
│   ├── journal.ts      helpers: fechas, citas, URLs, etiquetas
│   └── submission.ts   schema Valibot del formulario + esquemas por paso
├── layouts/
│   └── BaseLayout.astro  head + preheader + masthead + footer + toast
├── components/
│   ├── Search.svelte       isla: buscador con filtros
│   ├── SubmissionForm.svelte  isla: formulario por pasos
│   ├── Select.svelte       select accesible sobre Bits UI
│   ├── Preheader.astro     barra azul institucional
│   ├── Masthead.astro      cabecera y navegación
│   ├── Footer.astro
│   ├── Cover.astro         portada de número
│   ├── IssueCard.astro     tarjeta de número
│   └── ArticleListItem.astro
├── pages/
│   ├── index.astro             portada
│   ├── numeros/index.astro     archivo
│   ├── numeros/[id].astro      sumario de un número
│   ├── articulos/[id].astro    artículo
│   ├── buscar.astro            buscador (isla Svelte)
│   ├── autores.astro · acerca.astro · comite.astro · politicas.astro
│   └── enviar.astro            formulario (isla Svelte)
└── styles/global.css    Tailwind 4, fuentes y tokens (@theme)
```

## Rutas

| Antes | Ahora |
|---|---|
| `index.html` | `/` |
| `numeros.html` | `/numeros/` |
| `numero.html?id=v1n2` | `/numeros/v1n2/` |
| `articulo.html?id=art-005` | `/articulos/art-005/` |
| `buscar.html` | `/buscar/` |
| `autores.html` | `/autores/` |
| `acerca.html` | `/acerca/` |
| `comite.html` | `/comite/` |
| `politicas.html` | `/politicas/` |
| `enviar.html` | `/enviar/` |

## Qué cambió respecto del prototipo HTML

- **Sin Tailwind CDN**: el CSS se compila en build.
- **Sin render en cliente**: los números y artículos se generan como HTML estático con
  `getStaticPaths()`. El contenido ya está en el HTML servido.
- **Componentes**: una sola cabecera, un solo pie, portadas y tarjetas reutilizables.
- **Metadatos**: canonical, Open Graph y, en artículos, `citation_*` (Google Scholar) y
  JSON-LD `ScholarlyArticle`.
- **Datos tipados**: `journal.ts` valida la forma de volúmenes, números y artículos.
- **Islas Svelte**: buscador y formulario. El resto del sitio es HTML estático.
- **Select**: componente propio sobre Bits UI (teclado, foco y `aria-*` incluidos),
  con el estilo de campo de la revista; reemplaza al `<select>` nativo.
- **Validación**: schema de Valibot compartido (`src/lib/submission.ts`), con
  esquemas parciales por paso. El envío se valida antes de mostrar el folio.
- **Transiciones**: MPA puro, sin router. Las transiciones entre documentos las hace el
  navegador con `@view-transition { navigation: auto; }` (CSS, 0 KB de JS). Incluye
  prefetch de enlaces al pasar el mouse (`prefetch.prefetchAll`). El soporte es de
  Chrome 126+ y Safari 18.2+; en el resto no hay animación y la navegación funciona igual.

## Lo que sigue siendo de muestra

- Artículos, comité, ISSN y PDF son ficticios.
- El formulario de envío simula la recepción: no sube archivos ni envía correos.
- No hay CMS: los datos se editan en `src/data/journal.ts`.

## Pendientes

- Migrar artículos a content collections (Markdown/MDX) cuando haya contenido real.
- Conectar el formulario a un endpoint.
- Definir ISSN y política de indexación.
