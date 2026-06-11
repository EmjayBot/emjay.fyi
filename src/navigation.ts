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
      text: 'Ima.gs',
      href: getPermalink('/imags'),
    },
    {
      text: 'Kainoa Apps',
      href: getPermalink('/kainoa'),
    },
    {
      text: 'Anoatech',
      href: getPermalink('/anoatech'),
    },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/EmjayBot', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Portfolio',
      links: [
        { text: 'Worldbuilding', href: getPermalink('/worldbuilding') },
        { text: 'Ima.gs', href: getPermalink('/imags') },
        { text: 'Kainoa Apps', href: getPermalink('/kainoa') },
        { text: 'Anoatech', href: getPermalink('/anoatech') },
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
