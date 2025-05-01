import type {
  CommentConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Awan Zone ID',
  subtitle: 'Semua Tentang Musik dan Lirik.',
  lang: 'id',         // 'en', 'zh_CN', 'zh_TW', 'ja'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    LinkPreset.Contact,
    //{
    //  name: 'GitHub',
    //  url: 'https://github.com/saicaca/fuwari',     // Internal links should not include the base path, as it is automatically added
    //  external: true,                               // Show an external link icon and will open in a new tab
    //},
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Awan Zone ID',
  bio: 'Mengenal dan mengetahui apa itu.',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:x-twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://twitter.com/fooiskandar05',
    },
    {
      name: 'Facebook',
      icon: 'fa6-brands:facebook',
      url: 'https://facebook.com/fooiskandar',
    },
    {
      name: 'Bluesky',
      icon: 'fa6-brands:bluesky',
      url: 'https://bsky.app/profile/fooiskandar.bsky.social',
    },
    {
      name: 'Pinterest',
      icon: 'fa6-brands:square-pinterest',
      url: 'https://pinterest.com/fooiskandar/',
    },
    
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/fooiskandar/',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

export const commentConfig: CommentConfig = {
  //disqus: {
  //  shortname: 'fooiskandar',
  //},
  //giscus: {
    //repo: 'fooiskandar/Ningnung',
    //repoId: 'R_kgDOOiayEA',
    //category: 'Announcements',
    //categoryId: 'DIC_kwDOOiayEM4Cppj8',
    //mapping: 'title',
    //strict: '0',
    //reactionsEnabled: '1',
    //emitMetadata: '1',
    //inputPosition: 'top',
    //theme: 'preferred_color_scheme',
    //lang: 'id',
    //loading: 'lazy',
 //},
  twikoo: {
     envId: 'https://twikoo-tau-flame.vercel.app',
   },
}
