interface SiteConfig {
  /** Framer project publish URL */
  framerUrl: string;
  /** Production domain — no trailing slash */
  domain: string;
  /** Site name appended to every page title: "Page | {name}" */
  name: string;
}

const siteConfig: SiteConfig = {
  framerUrl: "https://content-teammates-221259.framer.app",
  domain: "https://softwarize.graycup.org",
  name: "Softwarize by Gray Cup",
};

export default siteConfig;
