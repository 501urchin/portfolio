import { For, Show } from "solid-js";
import ArrowIcon from "./ArrowIson";

interface Props {
  slug: string;
  title?: string;
  description?: string;

  projectUrl?: string;
  tags?: string[];
  iconUrl?: string;
}

export default function EntryCard(p: Props) {
  const hasLink = () => p.projectUrl && p.projectUrl.trim() !== "";
  const hasIcon = () => p.iconUrl && p.iconUrl.trim() !== "";
  const hasDescription = () => p.description && p.description.trim() !== "";
  const hasDTags = () => p.tags && p.tags.length !== 0;

  return (
    <div class="flex flex-row gap-2 text-sm antialiased">
      <h1 class="text-text-muted-extra hidden sm:flex w-[12ch]  select-none text-start">
        {p.slug}
      </h1>

      <div class="flex flex-col w-full sm:w-[53ch] gap-1">
        <Show when={hasIcon()}>
          <div class="flex select-none items-center rounded-sm overflow-hidden justify-center size-10">
            <img src={p.iconUrl} class="h-full w-full"></img>
          </div>
        </Show>
        <Show when={hasLink()} fallback={<h2 class="text-text">{p.title}</h2>}>
          <div class="flex flex-row gap-2 w-full">
            <a
              href={p.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={p.title}
              class="text-text select-none flex flex-row items-center gap-1 hover:underline duration-300 cursor-pointer ease-in-out"
            >
              {p.title}
              <ArrowIcon />
            </a>

            <div class="text-text-muted-extra flex sm:hidden select-none">
              •
            </div>
            <h1 class="text-text-muted-extra flex sm:hidden select-none text-start">
              {p.slug}
            </h1>
          </div>
        </Show>

        <Show when={hasDescription()}>
          <p class="text-text-muted">{p.description}</p>
        </Show>

        <Show when={hasDTags()}>
          <div class="overflow-clip flex flex-row gap-1">
            <For each={p.tags}>
              {(t, i) => (
                <>
                  <div class="text-text-muted-extra ">{t}</div>
                  {i() + 1 === p.tags?.length ? null : (
                    <div class="text-text-muted-extra select-none">•</div>
                  )}
                </>
              )}
            </For>
          </div>
        </Show>
      </div>
    </div>
  );
}
