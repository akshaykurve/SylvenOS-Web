import FeaturesList from "./features/FeatureList";

export default function Features() {
  return (
    <section className="relative px-6 md:px-[8%] py-16 md:py-[140px] bg-[var(--bg)] overflow-hidden text-[var(--text)] transition-colors duration-[var(--transition-normal)]">

      {/* Premium Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--text)_1px,transparent_1px),linear-gradient(to_bottom,var(--text)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_40%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Ambient Radial Glows */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--primary)]/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Header Container */}
      <div data-speakable="about" className="relative z-10 max-w-[900px] mx-auto text-center mb-[90px]">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--glass)] border border-[var(--card-border)] text-[var(--text)] tracking-wide uppercase mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--logo)] animate-pulse" />
          The Ecosystem
        </span>

        <h2 className="text-4xl md:text-[3.5rem] font-black tracking-tight mb-6 bg-gradient-to-b from-[var(--text)] to-[var(--text)]/75 bg-clip-text text-transparent leading-none">
          What is Sylven OS?
        </h2>

        <p className="text-lg md:text-xl text-[var(--subtitle)] max-w-[700px] mx-auto leading-relaxed mb-6 font-light">
          Sylven OS is an open-source community built around one simple idea:
        </p>

        <div className="text-xl md:text-2xl font-semibold px-6 py-3 rounded-xl bg-[var(--glass)] border border-[var(--card-border)] inline-block text-[var(--primary)] tracking-wide shadow-2xl backdrop-blur-md">
          People learn faster when they build together.
        </div>

        <p className="mt-8 text-sm md:text-base text-[var(--subtitle)] max-w-[750px] mx-auto leading-[1.8]">
          Instead of learning technologies in isolation, contributors collaborate
          on production-ready projects, improve engineering skills, share
          knowledge, and grow through real-world experience.
        </p>
      </div>

      <FeaturesList/>
    </section>
  );
}