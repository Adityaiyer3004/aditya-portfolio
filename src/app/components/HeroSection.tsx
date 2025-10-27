import Link from "next/link";
import Badge from "./Badge";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900 px-4 py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* LEFT SIDE */}
        <div className="max-w-2xl">
          {/* badges */}
          

          {/* headline */}
          <h1 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-4xl">
            I build AI agents that make real decisions in high-pressure
            environments.
          </h1>

          {/* subheadline */}
          <p className="mt-4 text-base leading-relaxed text-neutral-300 md:text-lg">
            Fraud investigation. Clinical triage. Trading signals. Live city
            traffic ops. I design and ship production-grade AI systems that
            people actually rely on — not demo theatre.
          </p>

          {/* buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects/cityflow"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500"
            >
              View CityFlow (AI Traffic Agent)
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm font-medium text-neutral-200 hover:border-neutral-600 hover:bg-neutral-800"
            >
              Talk to me
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 text-sm text-neutral-300 shadow-[0_30px_120px_-15px_rgba(99,102,241,0.3)]">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-indigo-400">
            Where my agents run
          </div>

          <ul className="mt-3 space-y-3 text-[13px] leading-relaxed text-neutral-300">
            <li>• Insurance fraud triage: surfacing high-risk claims first.</li>
            <li>• Trauma response support: assisting clinicians in real time.</li>
            <li>• Trading alerting: forecasting + pushing signals under load.</li>
            <li>
              • CityFlow: live London traffic ops, spillover prediction, reroute
              recommendations.
            </li>
          </ul>

          <div className="mt-4 text-[11px] text-neutral-500">
            My job is to move teams from “AI pilot” to “AI is now how we run.”
          </div>
        </div>
      </div>
    </section>
  );
}
