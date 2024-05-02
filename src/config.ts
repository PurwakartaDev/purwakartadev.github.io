import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://purwakartadev.github.io/", // replace this with your deployed domain
  author: "Farizdotid",
  desc: "Learn - Execute - Collaboration",
  title: "PWKDev",
  ogImage: "logo_pwk_dev_transparent.png",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/PurwakartaDev",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/purwakartadev/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/purwakartadev",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
];
