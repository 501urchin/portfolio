import { For } from "solid-js";
import EntryCard from "./components/EntryCard";
import ProfileCard from "./components/ProfileCard";
import TextCard from "./components/TextCard";
import Navbar from "./components/NavBar";

const myWorkCards = [
  {
    description:
      "Agentic marketing platform. From competitor analysis to publishing winning ads, Revala's agent does it all.",
    title: "Revala",
    tags: ["Go", "Postgres", "SolidJS", "Weaviate"],
    slug: "2025",
    projectUrl: "https://www.revala.io",
  },
  {
    description:
      "The fastest steganography library in the Go ecosystem. Features variable-bit encoding, audio steganography, Reed–Solomon error correction, etc.",
    title: "Stegano",
    tags: ["Go"],
    slug: "2024",
    projectUrl: "https://github.com/501urchin/stegano",
  },
  {
    description:
      "Search engine supporting lexical and semantic search indexed on over a million pages. Uses custom built ranking algorithm based on google's pagerank",
    title: "Eximius",
    tags: ["Rust", "Postgres", "Ollama", "Svelte"],
    slug: "Ongoing",
    projectUrl: "https://github.com/501urchin/eximius",
  },
  {
    description:
      "CLI tool to provision and deploy to remote servers using a simple config file. Supports rolling releases and rollbacks.",
    title: "Oxide",
    tags: ["C++", "Docker"],
    slug: "Ongoing",
    projectUrl: "https://github.com/501urchin/oxide",
  },
];

const ContactCard = [
  {
    platform: "Github",
    handle: "@501urchin",
    url: "https://github.com/501urchin",
  },
  {
    platform: "X",
    handle: "@jayac_sh",
    url: "https://x.com/jayac_sh",
  },
];

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div class="flex flex-col w-full sm:w-[60ch] gap-5">
        <ProfileCard />

        <TextCard title="About">
          I'm a self taught software engineer with a focus on Go, PostgreSQL,
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
              slug={card.slug}
              projectUrl={card.projectUrl}
            />
          )}
        </For>
      </div>
    </>
  );
}
