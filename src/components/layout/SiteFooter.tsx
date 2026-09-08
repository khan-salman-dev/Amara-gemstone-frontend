import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="surface-soil mt-32">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl">
              Verdant <span className="italic">&amp; Ore</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-75">
              Stones lifted from riverbeds, forest gravels and highland clay — traced,
              recorded and cut with a light hand. Nothing rushed, nothing stripped from
              land we cannot return to.
            </p>
          </div>

          <div>
            <p className="label-eyebrow opacity-60">Wander</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/collection" className="opacity-80 hover:opacity-100">
                  The Collection
                </Link>
              </li>
              <li>
                <Link href="/origins" className="opacity-80 hover:opacity-100">
                  Origins &amp; Earth Care
                </Link>
              </li>
              <li>
                <Link href="/journal" className="opacity-80 hover:opacity-100">
                  Field Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100">
                  Visit the Workshop
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-eyebrow opacity-60">Find Us</p>
            <ul className="mt-5 space-y-3 text-sm opacity-80">
              <li>Old Mill Road 4, Ratnapura</li>
              <li>studio@verdantore.earth</li>
              <li>+94 45 220 4188</li>
              <li>Thu – Sun, by appointment</li>
            </ul>
          </div>
        </div>

        <div className="rule-vine mt-16 opacity-40" />
        <p className="mt-6 text-xs opacity-55">
          © {new Date().getFullYear()} Verdant &amp; Ore — every stone recorded with its
          soil of origin.
        </p>
      </div>
    </footer>
  );
}
