import type { Metadata } from 'next'
import { breadcrumbJsonLd } from '@/lib/seo'
import HeroSection from '@/components/AboutUs/AboutHero'
import CoreValues from '@/components/AboutUs/CoreValues'
import FutureRoadmap from '@/components/AboutUs/FutureRoadmap'
import JoinTheMovement from '@/components/AboutUs/JoinTheMovement'
import OurMission from '@/components/AboutUs/OurMission'
import SylvenPhilosophy from '@/components/AboutUs/Philosophy'
import OurStory from '@/components/AboutUs/Story'
import OurVision from '@/components/AboutUs/Vision'
import WhatWeBuild from '@/components/AboutUs/WhatWeBuild'
import WhoWeAre from '@/components/AboutUs/Who'
import WhoCanJoin from '@/components/AboutUs/WhoCanJoin'

export const metadata: Metadata = {
  title: 'About Sylven OS',
  description:
    'Learn the story, mission, vision, and philosophy behind Sylven OS — a community-driven open-source organization built on Learn, Build, Educate.',
  keywords: [
    'about Sylven OS',
    'Sylven OS mission',
    'Sylven OS vision',
    'open source community story',
    'open source organization philosophy',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Sylven OS',
    description:
      'The story, mission, vision, and philosophy behind Sylven OS, and how to join the community.',
    url: '/about',
  },
}

const page = () => {
  const jsonLd = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ])

  return (
    <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HeroSection/>
        <OurStory/>
        <WhoWeAre/>
        <OurMission/>
        <OurVision/>
        <CoreValues/>
        <SylvenPhilosophy/>
        <WhatWeBuild/>
        <WhoCanJoin/>
        <FutureRoadmap/>
        <JoinTheMovement/>
    </main>
  )
}

export default page
