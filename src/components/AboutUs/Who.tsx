"use client";

import { motion, Variants } from "motion/react";

export default function WhoWeAre() {
  // Graceful fade-in-up variants for staggered text and blocks
  const elementVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    }),
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[140px]  overflow-hidden text-[var(--text)]">
      {/* Background Decorative Tech Grid Highlight */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px)] bg-[size:10rem] opacity-[0.03] pointer-events-none" />
      
      {/* Soft Ambient Light Glow behind content */}
      <div 
        className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full filter blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--info) 0%, transparent 80%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core Identity & Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.span
              custom={0}
              variants={elementVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="self-start text-xs font-mono font-bold tracking-widest text-[var(--primary)] uppercase px-3 py-1 bg-[var(--glass)] border border-[var(--card-border)] rounded-full mb-6"
            >
              // Identity
            </motion.span>

            <motion.h2
              custom={1}
              variants={elementVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black tracking-tight text-[var(--heading)] leading-tight mb-6"
            >
              Who We Are
            </motion.h2>

            <motion.p
              custom={2}
              variants={elementVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg md:text-xl text-[var(--body)] font-medium leading-relaxed mb-6 border-l-2 border-[var(--primary)] pl-6"
            >
              Sylven OS is an open-source organization dedicated to creating practical software while helping developers gain real engineering experience through collaboration.
            </motion.p>

            <motion.p
              custom={3}
              variants={elementVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-base text-[var(--subtitle)] font-light leading-relaxed max-w-2xl"
            >
              We believe open source is not only about writing code—it is about sharing knowledge, mentoring others, documenting critical solutions, and engineering systems transparently to lift the next generation of builders.
            </motion.p>
          </div>

          {/* Right Column: Key Cultural Metrics / Values */}
          <div className="lg:col-span-5 w-full flex flex-col gap-4">
            {[
              {
                title: "Practical Codebases",
                desc: "No sandbox exercises. We construct real tools designed for active deployment and production environments.",
                color: "var(--info)"
              },
              {
                title: "Radical Knowledge Sharing",
                desc: "We ensure context is never siloed. Peer documentation and architectural reviews form our structural baseline.",
                color: "var(--logo)"
              },
              {
                title: "Ecosystem Mentorship",
                desc: "Senior and junior engineers collaborate directly, breaking down technical isolation through structured support.",
                color: "var(--primary)"
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                custom={idx + 3}
                variants={elementVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 6, borderColor: value.color }}
                className="p-5 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--gradient-surface)] shadow-[var(--shadow-sm)] backdrop-blur-sm transition-all duration-[var(--transition-fast)] flex gap-4 items-start"
              >
                <div 
                  className="w-2 h-2 rounded-full mt-2 shrink-0" 
                  style={{ backgroundColor: value.color, boxShadow: `0 0 8px ${value.color}` }}
                />
                <div>
                  <h4 className="text-base font-bold text-[var(--heading)] mb-1 tracking-tight">{value.title}</h4>
                  <p className="text-xs md:text-sm text-[var(--subtitle)] leading-relaxed font-light">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}