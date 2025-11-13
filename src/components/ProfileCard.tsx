export default function ProfileCard() {
  return (
    <>
      <div class="flex flex-row full gap-2 ">
        <div class="size-16 select-none bg-white rounded-lg overflow-hidden">
          <img src="/pig.png" class="h-full w-full"></img>
        </div>
        <div class="flex flex-col">
          <h1 class="text-text">Jayac</h1>
          <p class="text-text-muted-extra text-sm">Software Engineer</p>
          <a href="https://github.com/501urchin" target="_blank" class="select-none text-text-muted-extra text-sm hover:underline duration-300 ease-in-out cursor-pointer">@501urchin</a>
        </div>
      </div>
    </>
  );
}
