"use client";
import React, { createContext, useEffect, useState } from "react";
import { useStore } from "./state";
import Footer from "@/components/footer";
import SiteNavigation from "@/components/navigation";

export type LayoutContextProps = {
  setMousePos: (mousePos: any) => void;
  setScroll: (scroll: number) => void;
  setScreenWidth: (width: number) => void;
  Theme: string;
  setTheme: (theme: string) => void;
};

// Create a new context
export const LayoutContext = createContext<LayoutContextProps>({
  setMousePos: () => {},
  setScroll: () => {},
  setScreenWidth: () => {},
  Theme: "",
  setTheme: () => {},
});

export function LayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    setMousePos,
    setScroll,
    setScreenWidth,
    Theme,
    setTheme,
    screenWidth,
    NAVBAR_BREAKPOINT,
  } = useStore((state: any) => state);

  useEffect(() => {
    if (
      localStorage.getItem("theme") &&
      localStorage.getItem("theme") !== Theme
    ) {
      setTheme(localStorage.getItem("theme"));
    }
    // mouse
    const mouseMoveHandler = (e: any) => {
      setMousePos({
        mouseX: e.pageX,
        mouseY: e.pageY,
      });
    };
    window.addEventListener("mousemove", mouseMoveHandler);

    // scroll
    const scrollHandler = (e: any) => {
      const scrolled =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // eslint-disable-next-line no-unused-vars
      const scrollPercent = scrolled / height;
      setScroll(scrolled);
    };
    window.addEventListener("scroll", scrollHandler);

    // width
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("resize", () =>
        setScreenWidth(window.innerWidth)
      );
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div id="rootDiv" className={Theme ? "theme-" + Theme : "theme-green-dark"}>
      <div className="bg-theme-main-bg">
        <SiteNavigation collapse={screenWidth > NAVBAR_BREAKPOINT} />
        {children}
        <Footer />
      </div>
    </div>
  );
}
