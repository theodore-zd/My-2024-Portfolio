"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../lib/animation/fadeIn";
import { Image } from "../image";
import { useStore } from "../../lib/state";
export const ThemeChanger = () => {
  const [open, setOpen] = useState(false);
  // const Theme = useStore((state:any) => state.Theme)
  const setTheme = useStore((state: any) => state.setTheme);

  return (
    <div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="relative p-px mt-6 ml-6 mr-6 md:mr-0 h-10 w-10 rounded-full bg-white text-theme-accent cursor-pointer transition-colors hover:text-theme-text-main hover:bg-theme-accent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mx-auto mt-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </div>
      {
        <motion.div
          className="relative"
          initial="hidden"
          animate={open ? "visible" : "hidden"}
          variants={fadeIn({ delay: 0, direction: "y" })}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="absolute top-6 bg-white rounded shadow-lg p-2">
            <div className="absolute -top-2 ml-7 ">
              <div className="bg-white rounded h-4 w-4 rotate-45" />
            </div>
            <div className="flex">
              <div
                className="p-1 hover:scale-105 hover:shadow-sm rounded-full overflow-hidden cursor-pointer"
                onClick={() => {
                  setTheme("green-light");
                }}
              >
                <Image
                  src="/theme_img/green_light.png"
                  alt="green_white"
                  height={30}
                  width={30}
                />
              </div>
              <div
                className="p-1 hover:scale-105 hover:shadow-sm rounded-full overflow-hidden cursor-pointer"
                onClick={() => {
                  setTheme("green-dark");
                }}
              >
                <Image
                  src="/theme_img/green_dark.png"
                  alt="green_white"
                  height={30}
                  width={30}
                />
              </div>
            </div>
            <div className="flex">
              <div
                className="p-1 hover:scale-105 hover:shadow-sm rounded-full overflow-hidden cursor-pointer"
                onClick={() => {
                  setTheme("red-light");
                }}
              >
                <Image
                  src="/theme_img/red_light.png"
                  alt="green_white"
                  height={30}
                  width={30}
                />
              </div>
              <div
                className="p-1 hover:scale-105 hover:shadow-sm rounded-full overflow-hidden cursor-pointer"
                onClick={() => {
                  setTheme("red-dark");
                }}
              >
                <Image
                  src="/theme_img/red_dark.png"
                  alt="green_white"
                  height={30}
                  width={30}
                />
              </div>
            </div>
          </div>
        </motion.div>
      }
    </div>
  );
};
