import Header from "../components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Header />

      <section className="mx-auto max-w-3xl px-4 py-16 text-sm leading-relaxed text-neutral-300">
        <div className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
          About / Contact
        </div>

        <h1 className="mt-2 text-3xl font-semibold text-white leading-tight">
          I build AI agents that survive reality.
        </h1>

        <p className="mt-4 text-neutral-300">
          I design and ship applied AI systems in high-pressure,
          high-accountability environments: fraud investigation, clinical
          triage, trading, and live city traffic ops.
        </p>

        <p className="mt-4 text-neutral-400 text-[13px]">
          My work is not “ask GPT a question.” It’s:
          get high-quality signal, explain it,
          make it actionable in under a minute,
          and keep it running when things are on fire.
        </p>

        {/* Recent builds */}
        <section className="mt-10 space-y-4">
          <h2 className="text-white text-lg font-semibold">
            Selected work
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="text-white font-medium">
                CityFlow — AI traffic operations agent for London:
              </span>{" "}
              Watches TfL live data, predicts spillover, and recommends reroutes
              in natural language. Fully Dockerised.
            </li>

            <li>
              <span className="text-white font-medium">
                Fraud Intelligence:
              </span>{" "}
              ranks suspicious insurance claims, explains why they’re risky,
              and gives investigators a defensible reason to act first on the
              highest-risk ones.
            </li>

            <li>
              <span className="text-white font-medium">
                Clinical Triage Support:
              </span>{" "}
              real-time decision support for trauma teams, with reasoning that a
              clinician can trust and defend.
            </li>

            <li>
              <span className="text-white font-medium">
                Trading Forecast & Alerting:
              </span>{" "}
              time-series forecasting + alert loop that pushes signals to
              traders with sub-second latency instead of waiting for end-of-day
              reports.
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="mt-10 rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 text-sm text-neutral-300">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-indigo-400">
            Contact
          </div>

          <div className="mt-4 space-y-3 text-[13px]">
            <div>
              Email:{" "}
              <a
                href="mailto:YOUR_EMAIL_HERE"
                className="text-indigo-400 hover:text-indigo-300"
              >
                adityaiyer30@gmail.com
              </a>
            </div>

            <div>
              LinkedIn:{" "}
              <a
                href="YOUR_LINKEDIN_URL_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                https://www.linkedin.com/in/aditya-iyer-3447711aa/
              </a>
            </div>
          </div>

          <div className="mt-6 text-[12px] text-neutral-500">
            Want to see CityFlow mapped to your ops (transport, logistics,
            emergency response, last-mile)? Reach out and I’ll walk you through
            a live run.
          </div>
        </section>

        <section className="mt-10 text-[12px] text-neutral-500 leading-relaxed">
          I’m interested in building the agent that actually runs part of your
          operation — not just a slide that says you’re “exploring AI.”
        </section>
      </section>

      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-xs text-neutral-500">
          <div>Designed & built by ADITYA IYER.</div>
          <div className="mt-2 text-[10px] text-neutral-600">
            I build AI agents that make real decisions in high-pressure
            environments.
          </div>
        </div>
      </footer>
    </main>
  );
}
