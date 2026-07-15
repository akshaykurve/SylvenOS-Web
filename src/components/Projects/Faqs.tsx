"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/lib/data/faqs";


interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const faqs: FAQItem[] = faqData;
  // Track the active open ID. If null, all items are collapsed.
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative px-6 md:px-[8%] py-[100px] text-[var(--text)]">
      {/* Structural Minimal Gridline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-left">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--heading)] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-xs md:text-sm text-[var(--subtitle)] font-normal leading-relaxed">
            Quick answers to the most common questions about onboarding, code standards, and getting started.
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="border-t border-[var(--card-border)] divide-y divide-[var(--card-border)]">
          {faqs.map((item) => {
            const isOpen = item.id === openId;

            return (
              <div key={item.id} className="w-full">
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between py-5 text-left font-medium transition-colors duration-150 text-[var(--heading)] hover:text-[var(--text)] group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base pr-4 tracking-tight group-hover:translate-x-0.5 transition-transform duration-150">
                    {item.question}
                  </span>
                  
                  {/* Premium Minimal Chevron Indicator */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[var(--subtitle)] group-hover:text-[var(--text)]"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                {/* Animated Collapsible Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.25, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.2 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.2, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.15 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-xs md:text-sm text-[var(--subtitle)] font-normal leading-relaxed pr-6 max-w-2xl">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}