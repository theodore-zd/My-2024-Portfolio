// import { motion } from 'framer-motion'
// import { useRouter } from 'next/router'
// import { Button } from '../../../components/button'
// import { fadeIn } from '../../../lib/animation/fadeIn'
// import { textTopIn } from '../../../lib/animation/textTopIn'
// import { useStore } from '../../../lib/state'

import { SkillsComp } from "./skills";
import { resume } from "../../../resume";

const HomeSkillsSection = () => {
  // const Theme = useStore((state:any) => state.Theme)
  // const router = useRouter()
  // const { mouseY, mouseX } = useStore((state:any) => state.mousePos)
  // const scrollData = useStore((state:any) => state.scrollData)
  // const scale = 1.5

  const favTools: string[] = resume.skills.slice(0, 14);
  const toolBox: string[] = resume.skills.slice(14, 100);

  return (
    <section className="relative w-full">
      <div className="max-w-[1000px] px-4 md:px-10 py-12 mx-auto">
        <div className="pb-20">
          <span id="skills" />
          <h3 className="font-semibold text-2xl mb-6 lg:text-4xl text-theme-text-main headerFont">
            My Favorite Tools
          </h3>
          <SkillsComp skills={favTools} />
        </div>
        <div>
          <h3 className="font-semibold text-2xl mb-6 lg:text-4xl text-theme-text-main headerFont">
            My Toolbox
          </h3>
          <SkillsComp skills={toolBox} />
        </div>
      </div>
    </section>
  );
};
export default HomeSkillsSection;
