"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeIn } from "./exFadeIn";
import { resume } from "../../../resume";

interface stateInterface {
  index?: number;
  title: string;
  desc?: string;
  role?: string;
  info: string[] | [];
}

const HomeExperienceSection = () => {
  const [animateState, setAnimateState] = useState(true);
  const [state, setState] = useState<stateInterface>({
    index: 0,
    title: "",
    role: "",
    desc: "",
    info: [],
  });

  useEffect(() => {
    setState({
      index: 0,
      ...resume.experiences[0],
    });
  }, []);

  return (
    <section className="relative w-full max-w-[1000px] px-4 md:px-10 py-20 mx-auto ">
      <div className="relative">
        <div className="my-auto">
          <p className="text-xl font-bold text-theme-accent">Previous</p>
          <p className="headerFont mb-1 text-theme-text-main text-3xl font-[800] leading-[3.2rem] lg:leading-[4.3rem] ">
            Experience
            <span className="text-theme-accent ml-2">{"/>"}</span>
          </p>
        </div>
        <div className="lg:hidden whitespace-nowrap text-sm text-theme-text-main/50 text-center mt-14 -mb-16">
          {"<-- Drag/Scroll -->"}
        </div>
        <div className="md:grid md:grid-cols-3 pt-20 min-h-[52vh]">
          <div className="flex md:grid md:grid-cols-1 lg:min-h-[17rem] w-fit max-w-[95vw] lg:overflow-hidden overflow-x-scroll text-lg text-theme-text-main font-bold headerFont">
            {resume.experiences.map((ele: any, index: any) => {
              return (
                <div
                  className={
                    "p-3 whitespace-nowrap md:whitespace-normal border-theme-accent border-2 cursor-pointer transition-colors hover:bg-theme-accent hover:text-theme-main-bg " +
                    (index === 0 ? " " : "md:border-t-0 ") +
                    (index === state.index ? "bg-theme-accent " : " ")
                  }
                  key={"resumeItem" + index}
                  onClick={() => {
                    setAnimateState(false);
                    setTimeout(() => {
                      setAnimateState(true);
                      setState({
                        index,
                        ...ele,
                      });
                    }, 300);
                  }}
                >
                  {ele.title}
                </div>
              );
            })}
          </div>
          <motion.div
            initial="hidden"
            animate={animateState ? "visible" : "hidden"}
            variants={fadeIn({ delay: 0, direction: "x" })}
            className="ml-8 col-span-2 md:mt-0 mt-12"
          >
            <h5 className="text-2xl text-theme-text-main headerFont">
              {state.title} {state.role && <><br /><span style={{ opacity: 0.5 }}>({state.role})</span></>}
            </h5>
            {state?.desc && <p className="text-theme-accent mt-2 mb-4 font-bold ">
              {state.desc}
            </p>}
            <ul className="text-theme-text">
              {state.info.map((text: string, index: number) => {
                return (
                  <li key={state.title + "-" + index} className="flex py-2">
                    <div className="p-2 text-theme-accent">{"✦"}</div>
                    <p className="text-theme-text-main font-normal">{text}</p>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HomeExperienceSection;
