"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
// import { fadeIn } from '../../lib/animation/fadeIn'
import {
  navCollapse,
  navIgationFadeIn,
} from "../../lib/animation/navIgationFadeIn";
import { MenuItem } from "../navigation/menuItem";
import { Image } from "../image";
import { ThemeChanger } from "./themeChanger";
// import { useStore } from '../../lib/state'

const menuItems = [
  { label: "Skills", link: "#skills" },
  // { label: "Projects", link: "#projects" },
  { label: "Contact", link: "mailto:hello@zurekcreative.com" },
];

const SiteNavigation = ({ collapse }: { collapse: boolean }) => {
  // const { setTheme, Theme } = useStore((state:any) => state)
  // eslint-disable-next-line prefer-const
  const [hover, setHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={"w-full h-30 z-50 flex " + (menuOpen ? "fixed " : "absolute ")}
    >
      <div className="relative h-[60px] flex mt-[10px] headerFont text-theme-text-main">
        <Link href="/" className="flex z-50 flex-row ml-6 md:ml-12 lg:ml-20 ">
          <div className="block w-[50px] h-[50px] mt-2 rounded-full overflow-hidden ">
            <Image
              height={50}
              width={50}
              src="/theodore_small.png"
              alt="theodore zurek-dunne photo"
            />
          </div>
          <p
            className={
              "font-bold text-lg mt-5 ml-4 " +
              (menuOpen ? "text-theme-text-main " : "opacity-80 ")
            }
          >
            Theodore
          </p>
        </Link>
      </div>
      <div
        style={{ display: collapse ? "none" : "block" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setMenuOpen(!menuOpen)}
        className="relative ml-auto mt-6 mr-2 z-50 sm:mr-5 lg:mr-15 cursor-pointer"
      >
        <div
          className={
            "h-[3px] mt-2 transition-all transform  shadow-lg " +
            (hover
              ? "w-6 ml-1 mr-1 bg-theme-accent "
              : menuOpen
              ? "w-8 bg-theme-text-main "
              : "w-8 bg-theme-text-main ") +
            (menuOpen ? "-rotate-45 translate-y-[0.6rem]" : "rotate-0 ")
          }
        />
        <div
          className={
            "h-[3px] mt-2 transition-all transform  shadow-lg " +
            (hover
              ? "w-4 ml-2 mr-2 bg-theme-accent "
              : menuOpen
              ? "w-8 bg-theme-text-main "
              : "w-8 bg-theme-text-main ") +
            (menuOpen ? "opacity-0 " : "opacity-1 ")
          }
        />
        <div
          className={
            "h-[3px] mt-2 transition-all transform  shadow-lg " +
            (hover
              ? "w-6 ml-1 mr-1 bg-theme-accent "
              : menuOpen
              ? "w-8 bg-theme-text-main "
              : "w-8 bg-theme-text-main ") +
            (menuOpen ? "rotate-45 translate-y-[-0.8rem] " : "rotate-0 ")
          }
        />
      </div>
      <motion.div
        className="z-40 ml-auto"
        initial="hidden"
        animate={menuOpen ? "visible" : "hidden"}
        variants={collapse ? navCollapse() : navIgationFadeIn()}
      >
        <div
          className={
            collapse
              ? " mt-8 right-8 md:right-10 lg:right-20 "
              : "fixed top-0 left-0 w-full h-full bg-theme-main-bg "
          }
        >
          <nav
            className={
              collapse
                ? "flex "
                : "mt-[8%] flex justify-center text-theme-text-main "
            }
          >
            <ol
              className={
                collapse
                  ? "flex flex-row "
                  : "text-center tracking-widest mt-20 font-black "
              }
            >
              {menuItems.map((item, index) => {
                return (
                  <MenuItem
                    setMenuOpen={setMenuOpen}
                    collapse={collapse}
                    key={"menuItem" + index}
                    item={item}
                    index={index}
                    menuOpen={menuOpen}
                  />
                );
              })}
              <div className="flex justify-center pt-10">
                <a
                  target="_blank"
                  href="/Theodore%20Zurek-Dunne%20Resume%202024.pdf"
                  className="block md:hidden h-fit mt-6 mx-6 w-28 text-center py-1.5 rounded-md border-2 border-theme-accent text-theme-accent hover:tracking-[1px] hover:bg-black/10"
                >
                  Resume
                </a>
              </div>
            </ol>
          </nav>
        </div>
      </motion.div>

      <ThemeChanger />

      {/* resume button */}
      <a
        target="_blank"
        href="/Theodore%20Zurek-Dunne%20Resume%202024.pdf"
        className="hidden md:block h-fit mt-6 mx-6 w-28 text-center py-1.5 rounded-md border-2 border-theme-accent text-theme-accent hover:tracking-[1px] hover:bg-black/10"
      >
        Resume
      </a>
    </div>
  );
};
export default SiteNavigation;
