<script lang="ts">
  import { Select as SelectPrimitive } from "bits-ui";

  interface Item {
    value: string;
    label: string;
    disabled?: boolean;
  }

  let {
    items = [],
    placeholder = "Seleccionar",
    value = $bindable(""),
    disabled = false,
    id,
    ariaLabel,
  }: {
    items?: Item[];
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    id?: string;
    ariaLabel?: string;
  } = $props();
</script>

<SelectPrimitive.Root
  type="single"
  {value}
  {items}
  {disabled}
  onValueChange={(next) => {
    value = next;
  }}
>
  <SelectPrimitive.Trigger
    {id}
    aria-label={ariaLabel}
    class="inline-flex w-full items-center border-b border-line bg-transparent py-1.5 text-left text-[13px] text-ink outline-none transition hover:border-ink/40 focus:border-ink data-disabled:cursor-not-allowed data-disabled:opacity-50 data-placeholder:text-muted"
  >
    <span class="min-w-0 flex-1 truncate">
      <SelectPrimitive.Value {placeholder} />
    </span>
    <svg
      class="ml-2 size-3 shrink-0 text-muted"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      stroke-width="1.4"
      aria-hidden="true"
    >
      <path d="m2.5 4.5 3.5 3.5 3.5-3.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </SelectPrimitive.Trigger>

  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      class="z-50 max-h-64 w-(--bits-select-anchor-width) overflow-hidden rounded-sm border border-line bg-paper p-1 shadow-md"
      sideOffset={4}
    >
      <SelectPrimitive.Viewport>
        {#each items as item (item.value)}
          <SelectPrimitive.Item
            value={item.value}
            label={item.label}
            disabled={item.disabled}
            class="flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-[13px] text-ink outline-none data-disabled:cursor-not-allowed data-disabled:opacity-40 data-highlighted:bg-paper-deep"
          >
            {#snippet children({ selected })}
              <span class="flex-1">{item.label}</span>
              {#if selected}
                <svg
                  class="size-3 shrink-0 text-accent"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  aria-hidden="true"
                >
                  <path d="m2.5 6.2 2.2 2.2 4.8-5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              {/if}
            {/snippet}
          </SelectPrimitive.Item>
        {/each}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
</SelectPrimitive.Root>
