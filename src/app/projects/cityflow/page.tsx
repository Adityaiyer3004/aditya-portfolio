import Header from "../../components/Header";

export default function CityFlowPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Header />

      <section className="mx-auto max-w-3xl px-4 py-16 text-neutral-300 text-sm leading-relaxed">
        <div className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
          Case study
        </div>

        <h1 className="mt-2 text-3xl font-semibold text-white leading-tight">
          CityFlow — AI Traffic Operations Agent for London
        </h1>

        <p className="mt-4 text-neutral-400 text-sm">
          Everyone’s talking about AI agents. I built one that runs a city.
        </p>

        {/* Problem */}
        <section className="mt-10 space-y-3">
          <h2 className="text-white text-lg font-semibold">The problem</h2>
          <p>
            When something breaks on a major London route; tunnel congestion,
            collision, lane closures operations, emergency response, and
            comms all ask the same questions:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>What just happened?</li>
            <li>Who’s impacted?</li>
            <li>What will break next if we do nothing?</li>
            <li>What do we tell people right now?</li>
          </ul>
          <p className="text-neutral-400">
            Right now they get noise (alerts, dashboards, feeds). They don’t
            get one clear instruction.
          </p>
        </section>

        {/* What CityFlow does */}
        <section className="mt-10 space-y-3">
          <h2 className="text-white text-lg font-semibold">
            What CityFlow does
          </h2>
          <p>
            CityFlow is an end-to-end, Dockerised traffic operations agent for
            London. It:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Watches live TfL road data</li>
            <li>Diagnoses what just went wrong</li>
            <li>Predicts spillover and escalation</li>
            <li>Tells you what to do next</li>
          </ul>
          <p className="italic text-neutral-400 text-[13px]">
            “Severe southbound congestion through Blackwall Tunnel. Spillover
            will hit A13 eastbound in 10–15 mins. Push reroute messaging to HGV
            traffic now.”
          </p>
          <p>
            That’s not a dashboard. That’s an on-call ops analyst — as an AI
            agent.
          </p>
        </section>

        {/* Architecture */}
        <section className="mt-10 space-y-4">
          <h2 className="text-white text-lg font-semibold">
            How it works (architecture)
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="text-white font-medium">FastAPI service</span>{" "}
              streams live incident / road status data from TfL into SQLite, and
              exposes health endpoints (
              <code className="bg-neutral-800 px-1 py-0.5 rounded text-[11px]">
                /health
              </code>
              ,{" "}
              <code className="bg-neutral-800 px-1 py-0.5 rounded text-[11px]">
                /summary
              </code>
              ) so the dashboard only shows fresh data.
            </li>

            <li>
              <span className="text-white font-medium">
                LangChain + Groq Llama 3.3 70B
              </span>{" "}
              act as the reasoning agent. It doesn’t just “answer questions,” it
              decides what’s important, who’s affected, and what should happen
              next.
            </li>

            <li>
              <span className="text-white font-medium">
                FAISS short-term memory
              </span>{" "}
              lets the agent understand escalation over time: “is this isolated?”
              vs “is this spreading east?”
            </li>

            <li>
              <span className="text-white font-medium">Streamlit console</span>{" "}
              for ops / control rooms. You can literally ask:
              <span className="block italic text-neutral-400 text-[13px] mt-2">
                “Where is the highest-risk corridor right now and who’s
                affected?”
              </span>
            </li>

            <li>
              <span className="text-white font-medium">
                Fully containerised with Docker
              </span>{" "}
              — API and dashboard are separate services on the same internal
              network, share a volume for persistence, inject secrets via env
              (no hardcoded keys), and come up clean with health checks.
            </li>
          </ul>
        </section>

        {/* Why it matters */}
        <section className="mt-10 space-y-3">
          <h2 className="text-white text-lg font-semibold">
            Why this matters
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>One actionable instruction instead of 50 noisy alerts.</li>
            <li>
              Spillover prediction (“what breaks next”) not just “what broke.”
            </li>
            <li>
              Traceable output — every call maps back to timestamped source
              data.
            </li>
            <li>
              Behaves like a 24/7 traffic ops analyst without adding headcount.
            </li>
          </ul>
        </section>

        {/* My role */}
        <section className="mt-10 space-y-3">
          <h2 className="text-white text-lg font-semibold">My role</h2>
          <p>
            I built the whole thing: ingestion pipeline, data store, health
            signalling, reasoning agent, FAISS memory, operator UI, and
            Dockerised runtime.
          </p>
        </section>

        {/* Status / CTA */}
        <section className="mt-10 rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-indigo-400">
            Status
          </div>

          <p className="mt-3 text-neutral-300 text-sm leading-relaxed">
            CityFlow is running locally in containers. It’s ready to adapt for
            live operations teams (transport, logistics, emergency response,
            last-mile).
          </p>

          <p className="mt-4 text-neutral-400 text-[13px] leading-relaxed">
            I design these agents for high-pressure environments where AI
            can’t be theatre. This is what I do.
          </p>
        </section>

        <section className="mt-10 text-[13px] text-neutral-400 leading-relaxed">
          <div className="font-medium text-neutral-200">
            Demo video + GitHub available.
          </div>
          <div>Message me and I’ll walk you through it live.</div>
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
