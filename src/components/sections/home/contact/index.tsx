import { GitHubIcon } from "./icons/github.svg";
import { InstagramIcon } from "./icons/instagram.svg";
import { LinkedInIcon } from "./icons/linkedin.svg";

const HomeContactSection = () => {
  return (
    <section className="relative w-full max-w-[1000px] px-4 md:px-10 py-20 mx-auto ">
      <h5 className="font-extrabold py-20 pt-36 text-theme-text-main text-6xl headerFont">
        Let’s make something <br /> awesome! 👍
      </h5>
      <a
        className="font-extrabold py-20 pt-36 text-theme-accent text-2xl md:text-3xl lg:text-5xl underline headerFont"
        target="_blank"
        href="mailto:hello@zurekcreative.com"
        rel="noreferrer"
      >
        hello@zurekcreative.com
      </a>
      <div className="flex pt-20 text-theme-text-main gap-11">
        <a
          className="hover:text-theme-accent cursor"
          target="_blank"
          href="https://www.linkedin.com/in/theodore-zurek-dunne-37885b164/"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        {/* <a
          className="hover:text-theme-accent cursor"
          target="_blank"
          href="https://www.instagram.com/theodore_zd/"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a> */}
        <a
          className="hover:text-theme-accent cursor"
          target="_blank"
          href="https://github.com/TheSodaPopPanda"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
    </section>
  );
};
export default HomeContactSection;
