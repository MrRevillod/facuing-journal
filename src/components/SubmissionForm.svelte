<script lang="ts">
  import { safeParse } from "valibot";
  import Select from "./Select.svelte";
  import {
    collectIssues,
    emptyAuthor,
    emptySubmission,
    stepSchemas,
    submissionSchema,
    type Author,
    type Submission,
  } from "../lib/submission";

  let { keywordSuggestions = [] }: { keywordSuggestions?: string[] } = $props();

  let data = $state<Submission>(emptySubmission());
  let step = $state(1);
  let errors = $state<Record<string, string>>({});
  let submitted = $state(false);
  let folio = $state("");

  let kwEs = $state("");
  let kwEn = $state("");
  let manuscriptName = $state("");
  let coverName = $state("");
  let supplementaryName = $state("");

  const DECLARATIONS = [
    ["original", "El manuscrito es original, inédito y no está sometido simultáneamente a otra publicación."],
    ["authorship", "Todas las personas firmantes conocen y aprueban la autoría y el contenido del envío."],
    ["conflict", "Declaro los conflictos de interés, incluso cuando no existan."],
    ["ethics", "El estudio cuenta con aprobación ética cuando involucra personas o datos sensibles."],
    ["ai", "Declaro el uso de herramientas de inteligencia artificial en el manuscrito."],
    ["license", "Acepto la licencia de acceso abierto y las políticas editoriales de la revista."],
  ] as const;

  const STEPS = ["Artículo", "Autores", "Archivos", "Declaraciones", "Revisión"];

  const typeItems = [
    { value: "Artículo de investigación", label: "Artículo de investigación" },
    { value: "Nota técnica", label: "Nota técnica" },
    { value: "Artículo de revisión", label: "Artículo de revisión" },
  ];

  function validate(value: number) {
    const schema = value === 5 ? submissionSchema : stepSchemas[value as 1 | 2 | 3 | 4];
    const result = safeParse(schema, data);
    if (result.success) {
      errors = {};
      return true;
    }
    errors = collectIssues(result.issues);
    return false;
  }

  function next() {
    if (!validate(step)) return;
    step = Math.min(5, step + 1);
  }

  function previous() {
    step = Math.max(1, step - 1);
  }

  function goTo(target: number) {
    if (target < step) step = target;
  }

  function addKeyword(lang: "es" | "en") {
    const value = (lang === "es" ? kwEs : kwEn).trim();
    if (!value) return;
    if (lang === "es") {
      if (data.keywordsEs.length < 6 && !data.keywordsEs.includes(value)) {
        data.keywordsEs = [...data.keywordsEs, value];
      }
      kwEs = "";
    } else {
      if (data.keywordsEn.length < 6 && !data.keywordsEn.includes(value)) {
        data.keywordsEn = [...data.keywordsEn, value];
      }
      kwEn = "";
    }
  }

  function removeKeyword(lang: "es" | "en", index: number) {
    if (lang === "es") data.keywordsEs = data.keywordsEs.filter((_, i) => i !== index);
    else data.keywordsEn = data.keywordsEn.filter((_, i) => i !== index);
  }

  function addAuthor() {
    data.authors = [...data.authors, emptyAuthor(data.authors.length === 0)];
  }

  function removeAuthor(index: number) {
    if (data.authors.length <= 1) return;
    const nextAuthors = data.authors.filter((_, i) => i !== index);
    if (!nextAuthors.some((author) => author.corresponding)) nextAuthors[0].corresponding = true;
    data.authors = nextAuthors;
  }

  function setCorresponding(index: number) {
    data.authors = data.authors.map((author, i) => ({
      ...author,
      corresponding: i === index,
    }));
  }

  function handleFile(event: Event, kind: "manuscript" | "cover" | "supplementary") {
    const input = event.target as HTMLInputElement;
    const name = input.files?.[0]?.name ?? "";
    if (kind === "manuscript") {
      manuscriptName = name;
      data.manuscript = !!name;
    }
    if (kind === "cover") coverName = name;
    if (kind === "supplementary") supplementaryName = name;
  }

  function useSample(kind: "manuscript" | "cover") {
    if (kind === "manuscript") {
      manuscriptName = "manuscrito-ejemplo.pdf";
      data.manuscript = true;
    } else {
      coverName = "carta-ejemplo.pdf";
    }
  }

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (!validate(5)) return;
    folio = `RIUCT-2026-${String(Math.floor(Math.random() * 900) + 100)}`;
    submitted = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const err = (key: string) => errors[key];

  const input =
    "mt-1.5 w-full border-b border-line bg-transparent py-2 text-[14px] outline-none placeholder:text-muted focus:border-ink";
  const label = "block text-[11px] uppercase tracking-[0.14em] text-muted";
  const errorText = "mt-1 text-[11px] text-red-600";
</script>

<div class="min-w-0">
  {#if submitted}
    <section class="border-y border-line py-10">
      <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Envío recibido</p>
      <h2 class="mt-3 font-serif text-[28px] leading-tight">Gracias por enviar tu manuscrito</h2>
      <p class="mt-3 max-w-[60ch] text-[14px] leading-relaxed text-muted">
        El comité editorial revisará el cumplimiento de los requisitos y te contactará por
        correo. Guarda tu folio de recepción.
      </p>
      <dl class="mt-6 max-w-md border-t border-line pt-4 text-[13px]">
        <div class="flex justify-between border-b border-line py-2">
          <dt class="text-muted">Folio</dt>
          <dd class="font-medium text-ink">{folio}</dd>
        </div>
        <div class="flex justify-between py-2">
          <dt class="text-muted">Correo de contacto</dt>
          <dd class="text-ink">{data.authors[0]?.email || "—"}</dd>
        </div>
      </dl>
      <a href="/" class="mt-6 inline-block text-[12px] text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
        Volver al inicio
      </a>
    </section>
  {:else}
    <nav class="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.14em] text-muted" aria-label="Pasos del envío">
      {#each STEPS as name, index (name)}
        {#if index > 0}<span class="text-line">/</span>{/if}
        <button
          type="button"
          onclick={() => goTo(index + 1)}
          class="border-b-2 pb-0.5 {step === index + 1
            ? 'border-accent text-ink'
            : 'border-transparent hover:text-ink'}"
        >
          {index + 1}. {name}
        </button>
      {/each}
    </nav>

    <form onsubmit={handleSubmit} novalidate>
      <!-- PASO 1 -->
      <section class="space-y-6" class:hidden={step !== 1}>
        <div>
          <label class={label} for="f-type">Tipo de manuscrito</label>
          <div class="mt-1.5">
            <Select
              id="f-type"
              bind:value={data.type}
              items={typeItems}
              placeholder="Seleccionar"
              ariaLabel="Tipo de manuscrito"
            />
          </div>
          {#if err("type")}<p class={errorText}>{err("type")}</p>{/if}
        </div>

        <div>
          <label class={label} for="f-title">Título</label>
          <input id="f-title" bind:value={data.title} class={input} placeholder="Título del manuscrito" />
          {#if err("title")}<p class={errorText}>{err("title")}</p>{/if}
        </div>

        <div>
          <label class={label} for="f-abstract-es">Resumen en español</label>
          <textarea
            id="f-abstract-es"
            bind:value={data.abstractEs}
            rows="5"
            class="mt-1.5 w-full resize-y border border-line bg-transparent p-3 font-serif text-[15px] leading-relaxed outline-none placeholder:text-muted focus:border-ink"
            placeholder="150 a 250 palabras"
          ></textarea>
          {#if err("abstractEs")}<p class={errorText}>{err("abstractEs")}</p>{/if}
        </div>

        <div>
          <label class={label} for="f-abstract-en">Abstract en inglés</label>
          <textarea
            id="f-abstract-en"
            bind:value={data.abstractEn}
            rows="5"
            class="mt-1.5 w-full resize-y border border-line bg-transparent p-3 font-serif text-[15px] leading-relaxed outline-none placeholder:text-muted focus:border-ink"
            placeholder="Abstract in English"
          ></textarea>
          {#if err("abstractEn")}<p class={errorText}>{err("abstractEn")}</p>{/if}
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          <div>
            <label class={label} for="kw-es">Palabras clave en español</label>
            <div class="mt-1.5 flex gap-2">
              <input
                id="kw-es"
                bind:value={kwEs}
                onkeydown={(event) => event.key === "Enter" && (event.preventDefault(), addKeyword("es"))}
                class="min-w-0 flex-1 border-b border-line bg-transparent py-2 text-[13px] outline-none placeholder:text-muted focus:border-ink"
                placeholder="Escribe una palabra clave"
              />
              <button type="button" onclick={() => addKeyword("es")} class="shrink-0 border border-line px-3 text-[11px] uppercase tracking-[0.12em] text-muted transition hover:border-ink hover:text-ink">
                Añadir
              </button>
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              {#each data.keywordsEs as keyword, index (keyword)}
                <button type="button" onclick={() => removeKeyword("es", index)} class="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted hover:border-ink hover:text-ink">
                  {keyword} ×
                </button>
              {/each}
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              {#each keywordSuggestions.filter((item) => !data.keywordsEs.includes(item)).slice(0, 6) as suggestion (suggestion)}
                <button type="button" onclick={() => { kwEs = suggestion; addKeyword("es"); }} class="text-[11px] text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent">
                  {suggestion}
                </button>
              {/each}
            </div>
            {#if err("keywordsEs")}<p class={errorText}>{err("keywordsEs")}</p>{/if}
          </div>

          <div>
            <label class={label} for="kw-en">Keywords en inglés</label>
            <div class="mt-1.5 flex gap-2">
              <input
                id="kw-en"
                bind:value={kwEn}
                onkeydown={(event) => event.key === "Enter" && (event.preventDefault(), addKeyword("en"))}
                class="min-w-0 flex-1 border-b border-line bg-transparent py-2 text-[13px] outline-none placeholder:text-muted focus:border-ink"
                placeholder="Add a keyword"
              />
              <button type="button" onclick={() => addKeyword("en")} class="shrink-0 border border-line px-3 text-[11px] uppercase tracking-[0.12em] text-muted transition hover:border-ink hover:text-ink">
                Añadir
              </button>
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              {#each data.keywordsEn as keyword, index (keyword)}
                <button type="button" onclick={() => removeKeyword("en", index)} class="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted hover:border-ink hover:text-ink">
                  {keyword} ×
                </button>
              {/each}
            </div>
            {#if err("keywordsEn")}<p class={errorText}>{err("keywordsEn")}</p>{/if}
          </div>
        </div>
      </section>

      <!-- PASO 2 -->
      <section class="space-y-4" class:hidden={step !== 2}>
        <div class="flex items-baseline justify-between gap-4 border-b border-line pb-2">
          <h2 class="font-serif text-[22px]">Autores</h2>
          <button type="button" onclick={addAuthor} class="text-[11px] uppercase tracking-[0.12em] text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
            Añadir autor
          </button>
        </div>

        {#each data.authors as author, index (index)}
          <div class="space-y-4 border-t border-line pt-4">
            <div class="flex items-baseline justify-between gap-4">
              <p class="text-[11px] uppercase tracking-[0.14em] text-muted">Autor {index + 1}</p>
              {#if data.authors.length > 1}
                <button type="button" onclick={() => removeAuthor(index)} class="text-[11px] text-muted underline decoration-line underline-offset-2 hover:text-red-600">
                  Quitar
                </button>
              {/if}
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <label class="block">
                <span class={label}>Nombre</span>
                <input bind:value={author.name} class={input} placeholder="Nombre completo" />
              </label>
              <label class="block">
                <span class={label}>Correo</span>
                <input bind:value={author.email} type="email" class={input} placeholder="nombre@uct.cl" />
              </label>
            </div>
            <label class="block">
              <span class={label}>Filiación</span>
              <input bind:value={author.affiliation} class={input} placeholder="Departamento, Universidad" />
            </label>
            <label class="block">
              <span class={label}>ORCID (opcional)</span>
              <input bind:value={author.orcid} class={input} placeholder="https://orcid.org/0000-0000-0000-0000" />
            </label>
            <label class="flex items-center gap-2 text-[12px] text-muted">
              <input
                type="radio"
                name="corresponding"
                checked={author.corresponding}
                onchange={() => setCorresponding(index)}
                class="size-4 accent-corp-blue"
              />
              Autor de correspondencia
            </label>
          </div>
        {/each}

        {#if err("authors")}<p class={errorText}>{err("authors")}</p>{/if}
      </section>

      <!-- PASO 3 -->
      <section class="space-y-6" class:hidden={step !== 3}>
        <div>
          <h2 class="border-b border-line pb-2 font-serif text-[22px]">Archivos</h2>
          <p class="mt-2 text-[12px] leading-relaxed text-muted">
            En esta versión de muestra los archivos no se envían. En producción se almacenarán de forma privada.
          </p>
        </div>

        <div class="border-t border-line pt-4">
          <label class={label} for="f-manuscript">Manuscrito (PDF)</label>
          <input
            id="f-manuscript"
            type="file"
            accept=".pdf,.doc,.docx"
            onchange={(event) => handleFile(event, "manuscript")}
            class="mt-2 block w-full text-[13px] text-muted file:mr-4 file:border file:border-line file:bg-transparent file:px-3 file:py-1.5 file:text-[11px] file:uppercase file:tracking-[0.12em] file:text-muted hover:file:border-ink hover:file:text-ink"
          />
          <button type="button" onclick={() => useSample("manuscript")} class="mt-2 text-[11px] text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
            Usar archivo de muestra
          </button>
          {#if manuscriptName}<p class="mt-1 text-[11px] text-muted">{manuscriptName}</p>{/if}
          {#if err("manuscript")}<p class={errorText}>{err("manuscript")}</p>{/if}
        </div>

        <div class="border-t border-line pt-4">
          <label class={label} for="f-cover">Carta de presentación</label>
          <input
            id="f-cover"
            type="file"
            accept=".pdf,.doc,.docx"
            onchange={(event) => handleFile(event, "cover")}
            class="mt-2 block w-full text-[13px] text-muted file:mr-4 file:border file:border-line file:bg-transparent file:px-3 file:py-1.5 file:text-[11px] file:uppercase file:tracking-[0.12em] file:text-muted hover:file:border-ink hover:file:text-ink"
          />
          <button type="button" onclick={() => useSample("cover")} class="mt-2 text-[11px] text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
            Usar archivo de muestra
          </button>
          {#if coverName}<p class="mt-1 text-[11px] text-muted">{coverName}</p>{/if}
        </div>

        <div class="border-t border-line pt-4">
          <label class={label} for="f-supplementary">Material complementario (opcional)</label>
          <input
            id="f-supplementary"
            type="file"
            onchange={(event) => handleFile(event, "supplementary")}
            class="mt-2 block w-full text-[13px] text-muted file:mr-4 file:border file:border-line file:bg-transparent file:px-3 file:py-1.5 file:text-[11px] file:uppercase file:tracking-[0.12em] file:text-muted hover:file:border-ink hover:file:text-ink"
          />
          {#if supplementaryName}<p class="mt-1 text-[11px] text-muted">{supplementaryName}</p>{/if}
        </div>
      </section>

      <!-- PASO 4 -->
      <section class="space-y-4" class:hidden={step !== 4}>
        <h2 class="border-b border-line pb-2 font-serif text-[22px]">Declaraciones</h2>
        <p class="text-[13px] leading-relaxed text-muted">Marca todas las declaraciones obligatorias.</p>
        <div class="space-y-3 text-[13px] leading-relaxed text-ink/90">
          {#each DECLARATIONS as [key, text] (key)}
            <label class="flex items-start gap-3">
              <input type="checkbox" bind:checked={data.declarations[key]} class="mt-1 size-4 shrink-0 accent-corp-blue" />
              <span>{text}</span>
            </label>
          {/each}
        </div>
        {#if err("declarations.original")}
          <p class={errorText}>{err("declarations.original")}</p>
        {/if}

        <div class="border-t border-line pt-4">
          <label class={label} for="f-notes">Comentarios para el comité (opcional)</label>
          <textarea
            id="f-notes"
            bind:value={data.notes}
            rows="3"
            class="mt-1.5 w-full resize-y border border-line bg-transparent p-3 text-[13px] outline-none focus:border-ink"
          ></textarea>
        </div>
      </section>

      <!-- PASO 5 -->
      <section class="space-y-6" class:hidden={step !== 5}>
        <h2 class="border-b border-line pb-2 font-serif text-[22px]">Revisión del envío</h2>
        {#if Object.keys(errors).length}
          <p class="text-[12px] leading-relaxed text-red-600">
            Revisa los pasos anteriores: hay campos obligatorios sin completar.
          </p>
        {/if}
        <div class="space-y-4 text-[13px] leading-relaxed">
          <p><span class="text-muted">Título:</span> {data.title || "—"}</p>
          <p><span class="text-muted">Tipo:</span> {data.type || "—"}</p>
          <p><span class="text-muted">Autores:</span> {data.authors.map((author) => author.name || "—").join(", ")}</p>
          <p><span class="text-muted">Palabras clave:</span> {data.keywordsEs.join(" · ") || "—"}</p>
          <p><span class="text-muted">Keywords:</span> {data.keywordsEn.join(" · ") || "—"}</p>
        </div>
        <p class="text-[12px] leading-relaxed text-muted">
          Al enviar, recibirás un folio de recepción. El comité revisará el cumplimiento de los requisitos antes de iniciar la evaluación.
        </p>
      </section>

      <!-- NAVEGACIÓN -->
      <div class="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
        <button
          type="button"
          onclick={previous}
          class="text-[12px] text-muted underline decoration-line underline-offset-4 transition hover:text-ink hover:decoration-ink"
          class:invisible={step === 1}
        >
          Anterior
        </button>
        {#if step < 5}
          <button type="button" onclick={next} class="inline-flex h-9 items-center rounded-sm bg-accent px-4 text-[12px] font-medium tracking-wide text-white transition hover:bg-[#00679e]">
            Siguiente
          </button>
        {:else}
          <button type="submit" class="inline-flex h-9 items-center rounded-sm bg-accent px-4 text-[12px] font-medium tracking-wide text-white transition hover:bg-[#00679e]">
            Enviar manuscrito
          </button>
        {/if}
      </div>
    </form>
  {/if}
</div>
