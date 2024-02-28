"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "../../lib/animation/fadeIn";

const MenuItem = ({
  item,
  index,
  menuOpen,
  collapse,
  setMenuOpen,
}: {
  item: any;
  index: number;
  menuOpen: any;
  setMenuOpen: Function;
  collapse: boolean;
}) => {
  // const [hover, setHover] = useState(false)
  // const { mouseY, mouseX } = useStore((state:any) => state.mousePos)

  return (
    <motion.div
      className="relative"
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
      key={"menuItemKey" + index}
      initial="hidden"
      animate={menuOpen || collapse ? "visible" : "hidden"}
      variants={fadeIn({ delay: 0.4 + index / 5, direction: "y" })}
    >
      <li
        className={
          "relative " +
          (collapse
            ? "ml-8 tracking-wider font-medium text-theme-text-main hover:text-theme-accent "
            : "h-20 w-[20rem] flex justify-center mt-10 md:mt-20 text-[2rem] md:text-[3rem] text-center font-medium")
        }
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={"z-20 " + (menuOpen || collapse) ? "" : "absolute"}
        >
          {item.link.includes("mailto:") ? (
            <a href={"" + item.link} target="_blank" rel="noreferrer">
              <span className="text-theme-accent">{"</> "}</span>
              {item.label}
            </a>
          ) : (
            <Link href={"" + item.link}>
              <span className="text-theme-accent">{"</> "}</span>
              {item.label}
            </Link>
          )}
        </div>
      </li>
    </motion.div>
  );
};

export { MenuItem };
