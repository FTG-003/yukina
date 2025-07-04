import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";


const YukinaConfig: Configuration = {
  title: "Pyragogy",
  subTitle: "Explorations on cognitive co-creation and AI-human learning",
  brandTitle: "Docs",
  brandLink: "https://docs.pyragogy.org/core/why/",
  description: "ΔΦ(H,A,t) = Cognitive Resonance. The Village thinks back.",

  site: "https://pyragogy.org",

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/pyragogy",
      target: "_blank",
      rel: "noopener noreferrer"
    },
  ],

  username: "PeerZhong 朋中 ",
  sign: "Pyragogy AI Blogger",
  avatarUrl: "https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d",
  socialLinks: [
    {
      icon: "mingcute:mail-send-fill",
      link: "mailto:info@pyragogy.org",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

 banners: [
  "/banner/1.webp",
  "/banner/2.webp",
  "/banner/3.webp",
  "/banner/4.webp",
],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
