import type { Metadata } from "next";
import Image from "next/image";
import sapphire from "../../../../../public/stones/stone-sapphire.jpg";
import morganite from "../../../../../public/stones/stone-morganite.jpg";
import opal from "../../../../../public/stones/stone-opal.jpg";

export const metadata: Metadata = {
  title: "Field Journal — Verdant & Ore",
  description:
    "Notes from the stream valleys and the lapidary bench: how gemstones form, how monsoons move gravel, and what we choose not to cut.",
  openGraph: {
    title: "Field Journal — Verdant & Ore",
    description:
      "Notes from the stream valleys and the lapidary bench on how gemstones form and travel.",
  },
};

const entries = [
  {
    date: "May",
    title: "What the monsoon carries down",
    excerpt:
      "Three weeks of rain rearranges a streambed entirely. We map the new gravel bars before we lift a single basket — the water has already done the prospecting.",
    image: sapphire,
    read: "6 min",
  },
  {
    date: "March",
    title: "Beryl grows where granite breathes",
    excerpt:
      "Pegmatite pockets are the slow lungs of a mountain: cooling fluid, room to grow, and a few million years of quiet. That is all morganite ever asks for.",
    image: morganite,
    read: "8 min",
  },
  {
    date: "January",
    title: "In defence of the uncut stone",
    excerpt:
      "Faceting is not the only respect you can pay a crystal. Some terminations are more beautiful than any table we could grind onto them.",
    image: opal,
    read: "5 min",
  },
];

export default function Journal() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-24">
      <p className="label-eyebrow text-moss">Field journal</p>
      <h1 className="mt-6 max-w-2xl text-5xl leading-tight md:text-6xl">
        Notes from the valleys <span className="italic">and the bench</span>
      </h1>
      <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
        Written in the season it happened — geology, weather, and the small decisions
        that decide what a stone becomes.
      </p>

      <div className="mt-20 space-y-20">
        {entries.map((entry) => (
          <article
            key={entry.title}
            className="group grid gap-10 border-t border-border pt-10 md:grid-cols-[220px_1fr]"
          >
            <div className="pebble-mask relative aspect-square w-full max-w-[220px]">
              <Image
                src={entry.image}
                alt={entry.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div>
              <p className="label-eyebrow text-clay">
                {entry.date} · {entry.read}
              </p>
              <h2 className="mt-4 max-w-lg text-3xl leading-snug">{entry.title}</h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {entry.excerpt}
              </p>
              <p className="label-eyebrow mt-7 inline-block border-b border-foreground/30 pb-2 group-hover:border-foreground">
                Read the entry
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
