export default function CodePortfolio() {
  return (
    <>
      <pre class="text-text-muted text-xs">
        {`
<div class="flex flex-col w-[60ch] h-screen items-center justify-center gap-5">
  <EntryCard
    description="CLI tool to provision and deploy to remote servers using a simple config file. Supports rolling releases and rollbacks."
    title="Eximius"
    tags={["C++", "Postgres", "Ollama", "Svelte"]}
    date="Ongoing"
    projectUrl="https://github.com/501urchin/eximius"
  />
  <EntryCard
    description="CLI tool to provision and deploy to remote servers using a simple config file. Supports rolling releases and rollbacks."
    title="Oxide"
    tags={["C++", "Docker"]}
    date="Ongoing"
    projectUrl="https://github.com/501urchin/oxide"
  />
  <EntryCard
    description="Agentic marketing platform. From competitor analysis to publishing winning ads, Revala's agent does it all."
    title="Revala"
    tags={["Go", "Postgres", "SolidJS", "Weaviate"]}
    date="2025"
    projectUrl="https://www.revala.io"
  />
  <EntryCard
    description="The fastest steganography library in the Go ecosystem. Features include variable bit encoding, audio steganography, and Reed–Solomon error correction."
    title="Stegano"
    tags={["Go", "Library"]}
    date="2024"
    projectUrl="https://github.com/501urchin/stegano"
  />
</div>
`}
      </pre>
    </>
  );
}
