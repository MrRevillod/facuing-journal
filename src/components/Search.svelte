<script lang="ts">
  import Select from "./Select.svelte";

  interface Item {
    id: string;
    title: string;
    section: string;
    year: number | null;
    issueId: string;
    issue: string;
    pages: string;
    doi: string;
    authors: string[];
    text: string;
  }

  let {
    items = [],
    years = [],
    sections = [],
    issues = [],
    initial = {},
  }: {
    items?: Item[];
    years?: string[];
    sections?: string[];
    issues?: { id: string; label: string }[];
    initial?: { q?: string; year?: string; section?: string; issue?: string };
  } = $props();

  const yearItems = $derived(years.map((value) => ({ value, label: value })));
  const sectionItems = $derived(sections.map((value) => ({ value, label: value })));
  const issueItems = $derived(issues.map((item) => ({ value: item.id, label: item.label })));

  let q = $state(initial.q ?? "");
  let year = $state(initial.year ?? "");
  let section = $state(initial.section ?? "");
  let issue = $state(initial.issue ?? "");

  const filtered = $derived(
    items.filter((item) => {
      if (year && String(item.year) !== year) return false;
      if (section && item.section !== section) return false;
      if (issue && item.issueId !== issue) return false;
      const term = q.trim().toLowerCase();
      if (!term) return true;
      return item.text.includes(term);
    })
  );

  const authorLine = (names: string[], max = 6) =>
    names.length <= max
      ? names.join(", ")
      : `${names.slice(0, max).join(", ")} y ${names.length - max} más`;

  const doiLabel = (doi: string) =>
    doi ? doi.replace(/^https?:\/\/(dx\.)?doi\.org\//, "doi: ") : "";

  $effect(() => {
    const next = new URLSearchParams();
    if (q.trim()) next.set("q", q.trim());
    if (year) next.set("year", year);
    if (section) next.set("section", section);
    if (issue) next.set("issue", issue);
    const query = next.toString();
    history.replaceState(null, "", query ? `?${query}` : location.pathname);
  });
</script>

<section class="border-y border-line py-4">
  <div class="grid gap-5 md:grid-cols-[1.8fr_0.7fr_1fr_1fr_auto] md:items-end">
    <label class="block">
      <span class="block text-[11px] uppercase tracking-[0.14em] text-muted">Buscar</span>
      <input
        bind:value={q}
        type="search"
        placeholder="Título, autor o palabra clave"
        class="mt-1.5 w-full border-b border-line bg-transparent py-1.5 text-[13px] outline-none transition placeholder:text-muted focus:border-ink"
      />
    </label>
    <div class="block">
      <span class="block text-[11px] uppercase tracking-[0.14em] text-muted">Año</span>
      <div class="mt-1.5">
        <Select bind:value={year} items={yearItems} placeholder="Todos" ariaLabel="Año" />
      </div>
    </div>
    <div class="block">
      <span class="block text-[11px] uppercase tracking-[0.14em] text-muted">Sección</span>
      <div class="mt-1.5">
        <Select bind:value={section} items={sectionItems} placeholder="Todas" ariaLabel="Sección" />
      </div>
    </div>
    <div class="block">
      <span class="block text-[11px] uppercase tracking-[0.14em] text-muted">Número</span>
      <div class="mt-1.5">
        <Select bind:value={issue} items={issueItems} placeholder="Todos" ariaLabel="Número" />
      </div>
    </div>
    <button
      type="button"
      onclick={() => {
        q = "";
        year = "";
        section = "";
        issue = "";
      }}
      class="pb-1.5 text-left text-[12px] text-muted underline decoration-line underline-offset-4 transition hover:text-ink hover:decoration-ink md:text-right"
    >
      Limpiar
    </button>
  </div>
  <p class="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted">
    {filtered.length} {filtered.length === 1 ? "artículo" : "artículos"}
  </p>
</section>

<section class="py-4">
  <ul class="divide-y divide-line">
    {#each filtered as item (item.id)}
      <li class="py-5">
        <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <a
            href={`/articulos/${item.id}/`}
            class="min-w-0 flex-1 font-serif text-[18px] leading-snug text-ink underline decoration-transparent underline-offset-2 transition hover:decoration-ink"
          >
            {item.title}
          </a>
          <span class="shrink-0 text-[11px] text-muted">{item.issue} · pp. {item.pages}</span>
        </div>
        <p class="mt-1.5 text-[12px] text-muted">{authorLine(item.authors)}</p>
        <div class="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted">
          <span>{item.section}</span>
          {#if item.doi}
            <a
              href={item.doi}
              target="_blank"
              rel="noopener"
              class="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
            >
              {doiLabel(item.doi)}
            </a>
          {/if}
          <a
            href={`/articulos/${item.id}/`}
            class="underline decoration-line underline-offset-2 transition hover:text-ink hover:decoration-ink"
          >
            Ver artículo
          </a>
        </div>
      </li>
    {/each}
  </ul>

  {#if filtered.length === 0}
    <p class="py-12 text-center text-[14px] text-muted">
      No se encontraron artículos con esos criterios.
    </p>
  {/if}
</section>
