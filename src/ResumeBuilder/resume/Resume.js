import React from 'react'
import AchievementList from './AchievementList'
import EducationList from './EducationList'
import EducationSection from '../components/EducationSection'
import ExperienceList from './ExperienceList'
import IntroductionSection from './IntroductionSection'
import ParentWrapper from '../molecules/atoms/ParentWrapper'
import PersonalSection from './PersonalSection'
import SkillList from './SkillList'

function Resume() {
  return (
    <>
    <ParentWrapper className="resume-main previewResume">

        <ParentWrapper className="left">
          <IntroductionSection/>
          <PersonalSection />
        </ParentWrapper>

        <ParentWrapper className="right">
           <EducationList />
           <ExperienceList />
           <SkillList />
           <AchievementList/>
        </ParentWrapper>
        
    </ParentWrapper>
    </>
   
  )
}

export default Resume