import type { NextPage } from 'next'
import SiteNavigation from '../../components/navigation'
import Footer from '../../components/footer'
import HomeLandingSection from './landing'
import HomeSkillsSection from './skills'
import HomeAboutSection from './about'
import { useStore } from '../../lib/state'
import { HomeStarwarsSection } from './starwars'
import HomeProjectsSection from './projects'
import HomeExperienceSection from './experience'
import HomeContactSection from './contact'

const Home: NextPage = () => {
  const { screenWidth, NAVBAR_BREAKPOINT } = useStore((state:any) => state)

  return (
    <div className='bg-theme-main-bg'>
      <main
        className='overflow-hidden '
      >
        <SiteNavigation collapse={(screenWidth > NAVBAR_BREAKPOINT)} />
        <HomeLandingSection/>
        <HomeAboutSection/>
        <HomeSkillsSection/>
        <HomeStarwarsSection/>
        <HomeProjectsSection/>
        <HomeExperienceSection/>
        <HomeContactSection/>
      </main>
      <Footer />
    </div>
  )
}

export default Home
