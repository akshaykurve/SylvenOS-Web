import Link from 'next/link'
import React from 'react'

export function OldData  ()  {
  return (
    <div className="w-full max-w-[620px] text-center lg:text-left flex flex-col items-center lg:items-start">
        <div className="inline-block px-[18px] py-2 rounded-[999px] bg-[var(--glass)] border border-[var(--border)] mb-[30px] text-sm">
          Community Driven • Open Source
        </div>

        <h1 className="text-4xl md:text-[4rem] font-bold leading-[1.08] mb-7">
          From One Seed.
          <br />
          To A <span className="text-[var(--accent)]">Forest</span> of
          Builders.
        </h1>

        <p className="text-base md:text-[1.1rem] leading-[1.8] text-[var(--muted)] mb-10">
          Sylven OS is a global community where developers learn, build,
          contribute, and grow together through open-source collaboration. Every
          project begins with one idea—and every contributor helps expand the
          ecosystem.
        </p>

        <div className="flex gap-5 justify-center lg:justify-start w-full">
          <Link
            href="#"
            className="px-8 py-[15px] rounded-xl font-semibold transition-transform duration-300 bg-[var(--primary)] text-white no-underline hover:-translate-y-[3px]"
          >
            Join Community
          </Link>
          <Link
            href="#"
            className="px-8 py-[15px] rounded-xl font-semibold transition-all duration-300 border border-[var(--border)] text-[var(--text)] no-underline hover:bg-[var(--glass)]"
          >
            Explore Projects
          </Link>
        </div>
      </div>
  )
}

