"use client";

import { LinkButton } from "../../../button/linkButton";
import { Image } from "../../../image";
import { useStore } from "../../../../lib/state";

interface projectInterface {
  image: string;
  title: string;
  desc: string;
  tools: string[];
  live: string;
  git: string;
  flip: boolean;
}

export const ProjectComp = ({
  image,
  title,
  desc,
  tools,
  live,
  git,
  flip,
}: projectInterface) => {
  const screenWidth = useStore((state: any) => state.screenWidth);
  const Theme = useStore((state: any) => state.Theme);

  let imageUrl = image;

  if (Theme.includes("red")) {
    imageUrl = "/projects/red" + image;
  } else {
    imageUrl = "/projects/green" + image;
  }

  return (
    <div className="relative py-10 lg:py-32">
      <div
        className={
          "rounded overflow-hidden mx-auto max-w-fit -mb-24 lg:-mt-24 lg:mb-0 lg:absolute lg:scale-[0.8] scale-[.90] " +
          (flip ? "lg:-right-32 " : "lg:-left-32 ")
        }
      >
        <Image
          src={imageUrl}
          alt={title + " illustration image"}
          width={screenWidth < 560 ? 480 : 600}
          height={screenWidth < 560 ? 380 : 500}
          layout={"responsive"}
        />
      </div>
      <div className="max-w-[32rem] lg:max-w-full mx-auto pt-32 lg:pt-9 p-4 md:p-9 bg-white text-slate-900 lg:grid lg:grid-cols-2 rounded-md shadow-lg">
        <div />
        {/* spacing div */}
        <div className={flip ? "col-start-1 " : " "}>
          <h4 className="font-bold headerFont text-2xl">
            {title}
            <span className="text-theme-accent">{"  />"}</span>
          </h4>
          <p className="mt-2">{desc}</p>
          <div className="mt-3 text-sm">
            <span>{"["}</span>
            {tools.map((tool, index) => {
              return (
                <span className="font-medium" key={"tool-" + title + index}>
                  <span className="text-theme-accent">{" " + tool}</span>
                  {index === tools.length - 1 ? " " : ","}
                </span>
              );
            })}
            <span>{"]"}</span>
          </div>
          <div className="flex mt-8">
            {live !== "" ? (
              <a href={live}>
                <LinkButton text="Live Demo" />
              </a>
            ) : null}
            {git !== "" ? (
              <a href={git}>
                <LinkButton secondary text="Git" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
