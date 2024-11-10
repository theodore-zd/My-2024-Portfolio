"use client";

import { Button } from "../../../button";

const HomeLandingSection = () => {

  return (
    <section className="relative min-h-[80vh] w-full text-theme-text-main ">
      <div className="w-[46rem] max-w-[100vw] mt-[8rem] lg:mt-[10rem] mb-[10rem] mx-auto">
        <div className="lg:-ml-28 p-4">
          <p className="text-lg font-bold text-theme-accent">Hi, my name is</p>
          <h1 className="headerFont text-4xl lg:text-6xl mt-4 mb-12 lg:leading-[1.2] ">
            <span className="font-[800]">
              Theodore Zurek-Dunne
              <br />
            </span>
            <span className="text-theme-text-accent block font-[700] pt-2">
              Full-Stack Developer with 7+ years of experience.
              {/* I design & build things{" "}
              <span className="sm:block">for the web.</span> */}
            </span>
          </h1>
          <p className="mb-12 text-theme-text-accent max-w-[38rem] lg:max-w-[46rem] text-lg">
            {/* I believe in creating awesome accessible, human-centered experiences
            and writing clean and concise code. I love a good challenge and
            learning new technologies. */}
          </p>
          <div className="flex flex-col  xs:flex-row gap-3">
            <a
              target="_blank"
              href="mailto:hello@zurekcreative.com"
              rel="noreferrer"
            >
              <Button onClick={() => {}}>Let&apos;s Talk</Button>
            </a>
            <a
              target="_blank"
              href="/Theodore_Zurek-Dunne_Resume-2024.pdf"
            >
              <Button outline={true} onClick={() => {}}>
                Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeLandingSection;
