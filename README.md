# Revista de Ingeniería UCT - Astro

Migración del prototipo de diagramación a Astro 6 con Tailwind 4. Mantiene el diseño y
el contenido del stack vanilla, pero con componentes, datos tipados y rutas reales.

## Comandos

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # genera dist/ y el sitemap
pnpm preview    # sirve dist/
```

## Contenido de muestra

Los datos están en `src/data/journal.ts`: números, artículos, autores, comité y avisos.
Los identificadores (e-ISSN, DOI, ORCID) son de ejemplo y no resuelven; el sitio lo indica
en la ficha de cada artículo. Los correos usan el dominio `prototype.cl`.

## Rutas

- `/` portada con el número actual
- `/numeros/` archivo y aceptados para el próximo número
- `/numeros/[id]/` sumario del número
- `/articulos/[id]/` artículo con resumen bilingüe, ficha e historial editorial
- `/buscar/` buscador con filtros por año, sección y número
- `/autores/`, `/acerca/`, `/comite/`, `/politicas/`
- `/enviar/` formulario por pasos (isla Svelte)
- `/404` página de error

`robots.txt`, `sitemap-index.xml` y la imagen social (`og-default.png`) se generan o
sirven desde `public/` y la configuración de Astro.
