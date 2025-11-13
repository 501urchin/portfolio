import type { Component } from "solid-js";
import EntryCard from "./components/EntryCard";
import ProfileCard from "./components/ProfileCard";
import TextCard from "./components/TextCard";

export default function App() {
  return (
    <>
      {/* <div class="w-full h-12"></div> */}
      <div class="flex flex-col w-[60ch] h-screen justify-center gap-5">
        <ProfileCard />
        <TextCard title="About">
          I am a freelance full-stack developer specializing in backend
          development with Go. On the frontend, I work with Next.js and Tailwind
          to create clean, functional interfaces. Outside of coding, I explore
          3D modeling and enjoy making music, constantly pushing myself to grow
          creatively and expand my skill set.
        </TextCard>
        <p class="text-text text-sm mt-5 mb-3">Side Projects</p>
        <EntryCard
          description="Cli tool to provision and deploy to remote servers using a simpel config file. Supports rolling releases and rollbacks"
          title="Eximius"
          tags={["C++", "Postgres", "Ollama", "Svelte"]}
          date="Ongoing"
          projectUrl="https://github.com/501urchin/eximius"
        />
        <EntryCard
          description="Cli tool to provision and deploy to remote servers using a simpel config file. Supports rolling releases and rollbacks"
          title="Oxide"
          tags={["C++", "Docker"]}
          date="Ongoing"
          projectUrl="https://github.com/501urchin/oxide"
        />
        <EntryCard
          description="Agentic marketing platform. From competitor analysis to publishing winning ads, Revala's agent does it all."
          title="Revala"
          tags={["Go", "Postgres", "Solidjs", "Weviate"]}
          date="2025"
          projectUrl="https://www.revala.io"
        />
        <EntryCard
          description="The fastest steganography library in the golang ecosystem. Features include variable bit encoding, audio steganography, reed solomon error correction etc."
          title="Stegano"
          tags={["Go", "Library"]}
          date="2024"
          projectUrl="https://github.com/501urchin/stegano"
        />
      </div>
    </>
  );
}
