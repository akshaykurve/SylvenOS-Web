import HeroSection from '@/components/AboutUs/AboutHero'
import CoreValues from '@/components/AboutUs/CoreValues'
import FutureRoadmap from '@/components/AboutUs/FutureRoadmap'
import HowCommunityWorks from '@/components/Contributors/HowCommunityWorks'
import JoinTheMovement from '@/components/AboutUs/JoinTheMovement'
import OurMission from '@/components/AboutUs/OurMission'
import SylvenPhilosophy from '@/components/AboutUs/Philosophy'
import OurStory from '@/components/AboutUs/Story'
import OurVision from '@/components/AboutUs/Vision'
import WhatWeBuild from '@/components/AboutUs/WhatWeBuild'
import WhoWeAre from '@/components/AboutUs/Who'
import WhoCanJoin from '@/components/AboutUs/WhoCanJoin'
import React from 'react'

const page = () => {
  return (
    <main>
        <HeroSection/>
        <OurStory/>
        <WhoWeAre/>
        <OurMission/>
        <OurVision/>
        <CoreValues/>
        <SylvenPhilosophy/>
        {/* <HowCommunityWorks/> */}
        <WhatWeBuild/>
        <WhoCanJoin/>
        <FutureRoadmap/>
        <JoinTheMovement/>
    </main>
  )
}

export default page
