import { DotPatternLg } from './dot-pattern-lg.svg'
import { ProjectComp } from './project'
import ProjectData from './projects.json'
const HomeProjectsSection = () => {
  return <section
    className='relative w-full max-w-[1000px] px-4 md:px-10 py-20 mx-auto '
  >
    <div className='flex relative'>
      <div className='my-auto'>
      <span id="projects"/>
        <p className='text-xl font-bold text-theme-accent'>
          Recent
        </p>
        <p className='headerFont mb-1 text-theme-text-main text-3xl font-[800] leading-[3.2rem] lg:leading-[4.3rem] '>
          Projects
        </p>
      </div>
      <div className='absolute -top-10 left-[300px]'>
        <DotPatternLg className='text-theme-accent'/>
      </div>
    </div>
    <div className='pt-32'>
      {
        ProjectData.map((item, index) => {
          const flip = !!(index % 2)
          return <ProjectComp
            key={'ProjectComp' + index}
            {...item}
            flip={flip}
          />
        })
      }
    </div>
  </section>
}
export default HomeProjectsSection
