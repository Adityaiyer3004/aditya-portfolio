import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SectionHeader from "./components/SectionHeader";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* navbar */}
      <Header />

      {/* hero section */}
      <HeroSection />

      {/* work preview */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeader
          eyebrow="Selected work"
          title="AI systems I've built and shipped"
          subtitle="These aren’t academic demos. These are agents and decision systems designed to operate under pressure."
        />

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 text-sm text-neutral-300">
          <div className="text-neutral-100 font-medium">
            CityFlow — AI Traffic Ops Agent
          </div>

          <div className="mt-2 text-neutral-300 text-[14px] leading-relaxed">
            End-to-end, Dockerised traffic operations agent for London. Watches
            TfL live road data, diagnoses what just went wrong, predicts
            spillover, and tells ops exactly what to do next.
          </div>

          <div className="mt-4 text-[12px] text-neutral-500">
            Stack: FastAPI • LangChain • Groq Llama 3.3 70B • FAISS memory •
            Streamlit console • Docker
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-xs text-neutral-500">
          <div>Designed & built by Aditya Iyer.</div>
          <div className="mt-2 text-[10px] text-neutral-600">
            I build AI agents that make real decisions in high-pressure
            environments.
          </div>
        </div>
      </footer>
    </main>
  );
}
