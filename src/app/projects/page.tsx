import Header from "../components/Header";
import Link from "next/link";

export default function ProjectsIndexPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Header />

      {/* Top section */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-neutral-300 text-sm leading-relaxed">
        <div className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
          Projects
        </div>

        <h1 className="mt-2 text-3xl font-semibold text-white leading-tight">
          Systems and agents I’ve built.
        </h1>

        <p className="mt-4 text-neutral-400 text-[14px] leading-relaxed">
          I build AI systems that operate in high-pressure environments:
          traffic operations, insurance fraud triage, clinical decision
          support, and trading alerting. These are not toy demos — they’re
          built to inform real decisions in real time.
        </p>

        {/* GRID OF PROJECT CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* CityFlow */}
          <Link
            href="/projects/cityflow"
            className="group rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
          >
            <div className="text-[11px] font-semibold uppercase tracking-wide text-indigo-400">
              CityFlow
            </div>
            <div className="mt-2 text-white text-lg font-semibold leading-snug">
              AI Traffic Operations Agent for London
            </div>
            <p className="mt-3 text-[13px] text-neutral-400 leading-relaxed">
              Watches TfL live road data, diagnoses incidents, predicts
              spillover, and tells ops teams what to do next in plain
              language. Fully Dockerised: FastAPI, LangChain + Groq Llama
              3.3 70B, FAISS memory, Streamlit console.
            </p>
            <div className="mt-4 inline-block text-[12px] text-indigo-400 group-hover:text-indigo-300">
              View case study →
            </div>
          </Link>

          {/* Fraud Intelligence */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-indigo-400">
              Fraud Intelligence
            </div>
            <div className="mt-2 text-white text-lg font-semibold leading-snug">
              Claim Risk Triage & Investigator Assist
            </div>
            <p className="mt-3 text-[13px] text-neutral-400 leading-relaxed">
              Ranks suspicious insurance claims by fraud likelihood and
              explains “why this one first” so investigators can act
              confidently. Reduces noise, surfaces the right 5 claims instead
              of the loudest 50.
            </p>
            <div className="mt-4 inline-block text-[12px] text-neutral-500">
              Private work. Summary on request.
            </div>
          </div>

          {/* Clinical Triage */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-indigo-400">
              Clinical Triage Support
            </div>
            <div className="mt-2 text-white text-lg font-semibold leading-snug">
              Real-time assist for trauma teams
            </div>
            <p className="mt-3 text-[13px] text-neutral-400 leading-relaxed">
              Decision support for clinicians in high-acuity scenarios.
              Surfaces likely risk factors and next actions in language a
              clinician can defend. Focus is on explainability and safety, not
              “black box guesses.”
            </p>
            <div className="mt-4 inline-block text-[12px] text-neutral-500">
              Private work. Clinical demo only.
            </div>
          </div>

          {/* Trading / Alerting */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-indigo-400">
              Trading Forecast & Alerting
            </div>
            <div className="mt-2 text-white text-lg font-semibold leading-snug">
              Time-series signal + push alert loop
            </div>
            <p className="mt-3 text-[13px] text-neutral-400 leading-relaxed">
              Forecasts market movements and pushes actionable alerts to
              humans with sub-second latency, instead of waiting for end of
              day summaries. Built for actual decision speed.
            </p>
            <div className="mt-4 inline-block text-[12px] text-neutral-500">
              Internal stack. Walkthrough available live.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 text-[13px] leading-relaxed text-neutral-400">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-indigo-400 mb-2">
            Work with me
          </div>
          <p className="text-neutral-300">
            I build agents that sit in the middle of live operations — not
            “dashboards,” but systems that say:
          </p>
          <p className="italic text-neutral-400 mt-3">
            “Here’s what just happened. Here’s who’s affected. Here’s what to
            do right now.”
          </p>
          <p className="mt-4 text-neutral-400">
            If you’re under pressure to move from “we’re exploring AI” to
            “AI is now how we run,” let’s talk.
          </p>
          <div className="mt-4 text-[12px] text-neutral-500">
            Contact: adityaiyer30@gmail.com
          </div>
        </div>
      </section>

      {/* footer */}
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
