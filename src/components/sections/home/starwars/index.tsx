"use client";
import { FalconSvg } from "./falcon-svg";
import useSound from "use-sound";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  start: {
    y: [0, -2000],
    x: [0, -2000],
    // opacity: [1, 0, 1],
    transition: { type: "Tween", duration: 3 },
  },
  stop: {
    y: [2000, 0],
    x: [2000, 0],
    transition: { type: "Tween", duration: 2 },
  },
};

export const HomeStarWarsSection = () => {
  const [playSound] = useSound("/sounds/falcon-jump.mp3", {
    volume: 0.05,
    playbackRate: 1,
  });
  const [active, setActive] = useState(false);
  const [falconFlag, setFalconFlag] = useState(false);

  return (
    <div className="py-32 justify-center">
      <div
        className="flex mx-auto w-[300px] cursor-pointer"
        onClick={() => {
          setFalconFlag(true);
          setTimeout(() => {
            setActive(false);
          }, 3000);
          playSound();
          setTimeout(() => {
            setActive(true);
          }, 500);
        }}
      >
        <motion.p
          className="my-auto ml-8 text-theme-text-accent mr-8 headerFont leading-loose"
          animate={
            falconFlag
              ? {}
              : { rotate: [0, 0, 0, 0, 0, 0, 0, 0, 0, -7, 7, 0, 7, -7, 0] }
          }
          transition={{ duration: 2, repeat: Infinity }}
        >
          Click Me
        </motion.p>
        <div className="w-[112px] h-[112px]  relative z-[99]">
          <motion.div variants={variants} animate={active ? "start" : "stop"}>
            <FalconSvg className="text-theme-accent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
