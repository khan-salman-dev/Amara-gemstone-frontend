import type { Metadata } from "next";
import Image from "next/image";
import hero from "../../../../../public/stones/hero-emerald-moss.jpg";
import opal from "../../../../../public/stones/stone-opal.jpg";



export const metadata: Metadata = {
  title: "Origins & Earth Care — Verdant & Ore",
  description:
    "How we find gemstones without tearing the ground: hand-panned gravels, refilled pits, replanted banks and season limits.",
  openGraph: {
    title: "Origins & Earth Care — Verdant & Ore",
    description:
      "Hand-panned gravels, refilled pits, replanted banks and strict season limits.",
  },
};

const steps = [
  {
    n: "01",
    t: "Read the land",
    d: "We walk the stream after the rains and read what the water has already exposed. No survey blasting, no test trenches through living root systems.",
  },
  {
    n: "02",
    t: "Pan by hand",
    d: "Gravel is lifted in baskets and washed in the same water it came from. Silt settles back into the bed rather than into the fields downstream.",
  },
  {
    n: "03",
    t: "Close the ground",
    d: "Every pit is refilled and replanted with native ferns and pioneer saplings before the season ends. We return to check them for three years.",
  },
  {
    n: "04",
    t: "Cut with restraint",
    d: "In the workshop we orient to the crystal's own axes and take the minimum. Some stones stay raw because that is simply where they are best.",
  },
];

export default function Origins() {
  return (
    <>
      <section className="relative h-[52vh] overflow-hidden">
        <Image
          src={hero}
          alt="Emerald crystal in wet forest moss"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-canopy)" }}
        />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-14 text-primary-foreground">
          <p className="label-eyebrow opacity-80">Origins</p>
          <h1 className="mt-5 max-w-2xl text-5xl leading-tight md:text-6xl">
            We take a little, <span className="italic">and we put the ground back.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-[1fr_1.1fr]">
          <p className="font-display text-2xl leading-snug md:text-3xl">
            Two families, four stream valleys, one season of digging a year.
          </p>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Verdant &amp; Ore began as a lapidary bench behind a tea kitchen in
              Ratnapura. We still work the same valleys our grandparents did, which is
              the whole reason we work them gently — a stripped bank yields nothing to
              the generation after.
            </p>
            <p>
              Our limit is simple and unglamorous: forty stones a season, no mechanised
              extraction, no mercury, no washing into paddy water. If the rains come
              short, we take fewer.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-x-14 gap-y-16 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-border pt-8">
              <p className="label-eyebrow text-clay">{s.n}</p>
              <h2 className="mt-4 text-2xl">{s.t}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grain-soil border-y border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
          <div className="pebble-mask relative aspect-square w-full">
            <Image
              src={opal}
              alt="Fire opal in red clay soil with wildflowers"
              fill
              className="animate-sway object-cover"
            />
          </div>
          <div>
            <p className="label-eyebrow text-moss">Certification, plainly</p>
            <h2 className="mt-5 text-4xl leading-tight">
              A report card, and a soil card
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Each stone ships with an independent gemmological report — species,
              treatment, dimensions, refractive index — and beside it our own habitat
              card: the pit or stream, the host rock, the month it came up, and a photo
              of the replanting.
            </p>
            <dl className="mt-10 space-y-5 text-sm">
              {[
                ["Treatment", "None. No heat, no oil, no fracture filling."],
                ["Traceability", "Named valley and pit for every stone."],
                ["Restoration", "Pits refilled and replanted within the season."],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-6 border-b border-border pb-4">
                  <dt className="label-eyebrow w-32 shrink-0 text-muted-foreground">
                    {k}
                  </dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
