import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { stones, heroImage } from "@/lib/stones";

export const metadata: Metadata = {
  title: "Verdant & Ore — Gemstones Traced to Their Soil",
  description:
    "Raw and lightly cut gemstones gathered from forest gravels, riverbeds and highland clay — each recorded with the ground it came from.",
  openGraph: {
    title: "Verdant & Ore — Gemstones Traced to Their Soil",
    description:
      "Raw and lightly cut gemstones gathered from forest gravels, riverbeds and highland clay.",
  },
};

export default function Home() {
  const lead = stones[0]!;
  const rest = stones.slice(1);

  return (
    <>
      <section className="relative min-h-[86vh] overflow-hidden">
        <Image
          src={heroImage}
          alt="Raw emerald crystal resting on damp forest moss"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-canopy)" }}
        />
        <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-end px-6 pb-24 pt-32">
          <div className="animate-rise max-w-2xl text-primary-foreground">
            <p className="label-eyebrow opacity-80">Season of the wet gravels</p>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">
              Stones that still
              <span className="block italic">remember the forest.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed opacity-85">
              We follow rain-cut seams and monsoon streams, lift a handful of stones a
              season, and record the soil each one slept in. No blasting, no bleaching,
              no hurry.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link
                href="/collection"
                className="label-eyebrow border-b border-current pb-2 transition-opacity hover:opacity-70"
              >
                See this season&apos;s stones
              </Link>
              <Link
                href="/origins"
                className="label-eyebrow opacity-70 transition-opacity hover:opacity-100"
              >
                How we dig
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grain-soil border-y border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3">
          {[
            {
              t: "Hand-panned",
              d: "Gravel washed by hand in the stream it came from, so the riverbank stays a riverbank.",
            },
            {
              t: "Soil-recorded",
              d: "Every stone carries the habitat it grew in: schist, pegmatite pocket, volcanic clay.",
            },
            {
              t: "Cut lightly",
              d: "We remove as little as the crystal allows. Some stones we never cut at all.",
            },
          ].map((item) => (
            <div key={item.t}>
              <p className="label-eyebrow text-moss">{item.t}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-md text-4xl leading-tight md:text-5xl">
            Four stones out of the ground <span className="italic">this season</span>
          </h2>
          <Link
            href="/collection"
            className="label-eyebrow border-b border-foreground/30 pb-2 hover:border-foreground"
          >
            Full collection
          </Link>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.15fr_1fr]">
          <article className="group">
            <div className="leaf-mask relative aspect-[4/5] w-full">
              <Image
                src={lead.image}
                alt={`${lead.name} in its natural setting`}
                fill
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-8 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl">{lead.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {lead.carat} · {lead.origin}
                </p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {lead.note}
                </p>
              </div>
              <span className="label-eyebrow whitespace-nowrap text-clay">
                {lead.price}
              </span>
            </div>
          </article>

          <div className="space-y-12">
            {rest.map((stone) => (
              <article key={stone.slug} className="group flex items-center gap-6">
                <div className="pebble-mask relative size-28 shrink-0 md:size-36">
                  <Image
                    src={stone.image}
                    alt={`${stone.name} photographed in situ`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl">{stone.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {stone.carat} · {stone.habitat}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {stone.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-soil">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <p className="label-eyebrow opacity-65">A note from the streambed</p>
          <p className="mt-8 font-display text-3xl italic leading-snug md:text-4xl">
            “The stone was already finished when we found it. Our work is mostly
            knowing when to stop.”
          </p>
          <p className="mt-8 text-sm opacity-70">Nadun Perera — lapidary, second generation</p>
          <Link
            href="/journal"
            className="label-eyebrow mt-12 inline-block border-b border-current pb-2 hover:opacity-70"
          >
            Read the field journal
          </Link>
        </div>
      </section>
    </>
  );
}
