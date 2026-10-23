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
      text: 'XCF Sync',
      href: getPermalink('/xcf-sync'),
    },
    {
      text: 'PowerCordKit',
      href: getPermalink('/powercordkit'),
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
        { text: 'XCF Sync', href: getPermalink('/xcf-sync') },
        { text: 'PowerCordKit', href: getPermalink('/powercordkit') },
        { text: 'Blog', href: getPermalink('/blog') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/EmjayBot' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `© ${new Date().getFullYear()} Emjay · Lore CC-BY · Code MIT · <a class="underline underline-offset-2" href="/rss.xml">RSS</a>`,
};
