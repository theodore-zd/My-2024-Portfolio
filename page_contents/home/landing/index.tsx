// import { motion } from 'framer-motion'
// import { useRouter } from 'next/router'
// import { Button } from '../../../components/button'
// import { fadeIn } from '../../../lib/animation/fadeIn'
// import { textTopIn } from '../../../lib/animation/textTopIn'
// import { useStore } from '../../../lib/state'

import { Button } from '../../../components/button'

const HomeLandingSection = () => {
  // const Theme = useStore((state:any) => state.Theme)
  // const router = useRouter()
  // const { mouseY, mouseX } = useStore((state:any) => state.mousePos)
  // const scrollData = useStore((state:any) => state.scrollData)
  // const scale = 1.5

  return <section
    className='relative min-h-[80vh] w-full text-theme-text-main '
  >
    <div className='w-[46rem] max-w-[100vw] mt-[15rem] lg:mt-[20rem] mx-auto'>
      <div className='lg:-ml-28 p-4'>
        <p className='text-lg font-bold text-theme-accent'>Hi, my name is</p>
        <h1 className='headerFont text-4xl lg:text-6xl mt-4 mb-12 font-[800] leading-[3.2rem] lg:leading-[4.3rem] '>
          <span>Theodore Zurek-Dunne<br/></span>
          <span className='text-theme-text-accent block'>
            I design & build things <span className='sm:block'>for the web.</span>
          </span>
        </h1>
        <p className='mb-12 text-theme-text-accent w-[38rem] max-w-[100vw] text-lg'>
          I believe in creating awesome accessible, human-centered experiences and writing clean and concise code. I love a good challenge and learning new technologies.
        </p>
        <div className='flex'>
          <a
            target='_blank'
            href="mailto:hello@zurekcreative.com"
            rel="noreferrer"
          >
            <Button
              onClick={() => {

              }}
            >
              Let&apos;s Talk
            </Button>
          </a>
          <a
            target='_blank'
            href="/Theodore%20Zurek-Dunne%20Resume%202022.pdf"
          >
            <Button
              outline={true}
              onClick={() => {

              }}
            >
              Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
}
export default HomeLandingSection
