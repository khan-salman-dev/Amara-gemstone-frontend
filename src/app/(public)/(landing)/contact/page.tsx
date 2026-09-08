"use client";

import { useState } from "react";
import Image from "next/image";
import morganite from "../../../../../public/stones/stone-morganite.jpg";

// Metadata cannot be exported from a Client Component, so page-level
// metadata for this route is set via the sibling layout.tsx file.

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 pt-24">
      <p className="label-eyebrow text-moss">Visit us</p>
      <h1 className="mt-6 max-w-2xl text-5xl leading-tight md:text-6xl">
        Stones are best seen <span className="italic">in daylight</span>
      </h1>

      <div className="mt-20 grid gap-16 md:grid-cols-[1.1fr_1fr]">
        <div>
          {sent ? (
            <div className="border-t border-border pt-10">
              <h2 className="text-3xl">Your note is on the bench.</h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                We answer by hand, usually within two working days. If you asked about a
                particular stone, we&apos;ll send daylight photographs with it.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="label-eyebrow mt-10 border-b border-foreground/30 pb-2 hover:border-foreground"
              >
                Write another
              </button>
            </div>
          ) : (
            <form
              className="space-y-8 border-t border-border pt-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="block">
                  <span className="label-eyebrow text-muted-foreground">Your name</span>
                  <input
                    required
                    type="text"
                    className="mt-3 w-full border-b border-border bg-transparent pb-3 text-base outline-none transition-colors focus:border-moss"
                  />
                </label>
                <label className="block">
                  <span className="label-eyebrow text-muted-foreground">Email</span>
                  <input
                    required
                    type="email"
                    className="mt-3 w-full border-b border-border bg-transparent pb-3 text-base outline-none transition-colors focus:border-moss"
                  />
                </label>
              </div>

              <label className="block">
                <span className="label-eyebrow text-muted-foreground">
                  Stone or subject
                </span>
                <input
                  type="text"
                  placeholder="Riverbed Sapphire, 12.04 ct"
                  className="mt-3 w-full border-b border-border bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-moss"
                />
              </label>

              <label className="block">
                <span className="label-eyebrow text-muted-foreground">Your note</span>
                <textarea
                  required
                  rows={5}
                  className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 text-base outline-none transition-colors focus:border-moss"
                />
              </label>

              <button
                type="submit"
                className="label-eyebrow bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-forest"
              >
                Send to the bench
              </button>
            </form>
          )}
        </div>

        <aside>
          <div className="leaf-mask relative aspect-[4/5] w-full">
            <Image
              src={morganite}
              alt="Raw morganite crystal cluster on dried leaves"
              fill
              className="object-cover"
            />
          </div>

          <dl className="mt-12 space-y-6 text-sm">
            {[
              ["Workshop", "Old Mill Road 4, Ratnapura, Sri Lanka"],
              ["Hours", "Thursday to Sunday, 9–4, by appointment"],
              ["Email", "studio@verdantore.earth"],
              ["Telephone", "+94 45 220 4188"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-border pb-5">
                <dt className="label-eyebrow text-muted-foreground">{k}</dt>
                <dd className="mt-2">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
            Viewings happen at the north window between ten and two, when the light is
            honest. Bring a loupe if you have one; we keep spares.
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Contact;
