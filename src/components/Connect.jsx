import { useState } from "react";
import SectionTitle from "./SectionTitle.jsx";

import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  DiscordIcon,
  CopyIcon,
} from "../assets/icons/icons.js";

export const links = [
  {
    label: "GitHub",
    href: "https://github.com/HannaJ95",
    display: "github.com/HannaJ95",
    Icon: GithubIcon,
  },
  {
    label: "Email",
    href: "mailto:hannajohansson16@hotmail.com",
    display: "hannajohansson16@hotmail.com",
    Icon: EmailIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hanna-johansson-b84aba289",
    display: "linkedin.com/in/hanna-johansson",
    Icon: LinkedInIcon,
  },
  {
    label: "Discord",
    copyValue: "hannaj8390",
    display: "hannaj8390",
    Icon: DiscordIcon,
  },
];

export default function Connect() {
  const [copied, setCopied] = useState(false);

  function handleCopy(value) {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 300);
  }

  return (
    <section
      id="connect"
      className="min-w-xs scroll-mt-14 mt-20 bg-black md:mr-20 max-w-6xl py-6 md:py-10"
    >
      <div className="p-4 w-full sm:pl-12 sm:py-10 md:pl-20">
        <SectionTitle title="Connect" />
        <div className="w-full pl-16 sm:pl-20 md:pl-26 md:pt-8">
          <ul className="flex flex-col gap-6 md:gap-8 p-2 w-full">
            {links.map(({ label, href, display, copyValue, Icon }) => (
              <li
                key={label}
                className="flex items-center gap-1 sm:gap-3 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                <Icon
                  aria-label={label}
                  className="size-6 sm:size-7 text-white"
                />

                {copyValue ? (
                  <button
                    onClick={() => handleCopy(copyValue)}
                    aria-label={`Copy ${label} username`}
                    className="flex items-center gap-2 text-white bg-black px-1 hover:invert cursor-pointer">
                    {display}
                    <CopyIcon
                      className={`w-4 h-4 transition-transform ${copied ? "scale-90" : ""}`}
                    />
                  </button>
                ) : (
                  <a
                    href={href}
                    target="_blank"
                    className="text-white bg-black px-1 hover:invert transition-all duration-300 break-all">
                    {display}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
