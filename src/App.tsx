import { For } from "solid-js";
import EntryCard from "./components/EntryCard";
import ProfileCard from "./components/ProfileCard";
import TextCard from "./components/TextCard";

const myWorkCards = [
  {
    description:
      "Agentic marketing platform. From competitor analysis to publishing winning ads, Revala's agent does it all.",
    title: "Revala",
    tags: ["Go", "Postgres", "SolidJS", "Weaviate"],
    date: "2025",
    projectUrl: "https://www.revala.io",
  },
  {
    description:
      "The fastest steganography library in the Go ecosystem. Features variable-bit encoding, audio steganography, Reed–Solomon error correction, etc.",
    title: "Stegano",
    tags: ["Go", "OSS"],
    date: "2024",
    projectUrl: "https://github.com/501urchin/stegano",
  },
  {
    description:
      "CLI tool to provision and deploy to remote servers using a simple config file. Supports rolling releases and rollbacks.",
    title: "Eximius",
    tags: ["C++", "Postgres", "Ollama", "Svelte"],
    date: "Ongoing",
    projectUrl: "https://github.com/501urchin/eximius",
  },
  {
    description:
      "CLI tool to provision and deploy to remote servers using a simple config file. Supports rolling releases and rollbacks.",
    title: "Oxide",
    tags: ["C++", "Docker"],
    date: "Ongoing",
    projectUrl: "https://github.com/501urchin/oxide",
  },
];

export default function App() {
  return (
    <>
      <div class="flex flex-col w-full sm:w-[60ch] gap-5">
        <ProfileCard />

        <TextCard title="About">
          I'm a self-taught software engineer with a focus on Go, PostgreSQL,
          and SolidJS. I build everything from web applications and quant
          trading models to complete, production ready systems. I enjoy picking
          up new technologies and am always open to working with different
          stacks.
        </TextCard>

        <p class="text-text text-sm mt-5 mb-3">My Work</p>

        <For each={myWorkCards}>
          {(card) => (
            <EntryCard
              description={card.description}
              title={card.title}
              tags={card.tags}
              date={card.date}
              projectUrl={card.projectUrl}
            />
          )}
        </For>
      </div>
    </>
  );
}
