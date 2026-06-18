import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Worldbuilding',
      href: getPermalink('/worldbuilding'),
    },
    {
      text: 'Wayfield Labs',
      href: getPermalink('/wayfield'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/EmjayBot', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Projects',
      links: [
        { text: 'Worldbuilding', href: getPermalink('/worldbuilding') },
        { text: 'Wayfield Labs', href: getPermalink('/wayfield') },
        { text: 'Blog', href: getPermalink('/blog') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/EmjayBot' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `© ${new Date().getFullYear()} Emjay · Built with AstroWind`,
};
