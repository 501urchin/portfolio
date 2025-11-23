import { JSX, children } from "solid-js";

interface Props {
  title?: string;
  children?: JSX.Element;
}

export default function TextCard(props: Props) {
  const c = children(() => props.children);

  return (
    <div class="w-full flex flex-col gap-1">
      {props.title && <h1 class="text-text text-sm">{props.title}</h1>}
      <p class="text-text-muted text-sm">{c()}</p>
    </div>
  );
}
