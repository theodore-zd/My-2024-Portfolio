import HomeAboutSection from "@/components/sections/home/about";
import HomeContactSection from "@/components/sections/home/contact";
import HomeExperienceSection from "@/components/sections/home/experience";
import HomeLandingSection from "@/components/sections/home/landing";
import HomeProjectsSection from "@/components/sections/home/projects";
import HomeSkillsSection from "@/components/sections/home/skills";
import { HomeStarWarsSection } from "@/components/sections/home/starwars";
import type { NextPage } from "next";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeLandingSection />
      <HomeAboutSection />
      <HomeSkillsSection />
      <HomeStarWarsSection />
      {/* <HomeProjectsSection /> */}
      <HomeExperienceSection />
      <HomeContactSection />
    </main>
  );
}
