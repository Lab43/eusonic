import autoprefixer from 'autoprefixer';
import type { Configuration } from 'underdot';
import { bust } from 'underdot-bust';
import { collections } from 'underdot-collections';
import { ejs } from 'underdot-ejs';
import { helpers } from 'underdot-helpers';
import { postcss } from 'underdot-postcss';
import { sass } from 'underdot-sass';
import { srcset } from 'underdot-srcset';

const srcsetPresets = {
  thumbnail: {
    sizes: '(max-width: 640px) 100vw, 640px',
    widths: [1280, 1000, 800, 600],
  },
};

export default {
  destination: 'docs', // required by Github pages
  globals: {
    siteTitle: 'eusonic',
  },
  plugins: [
    ejs({
      views: ['_includes'],
    }),
    sass(),
    collections({ posts: 'posts' }),
    postcss({ plugins: [autoprefixer()] }),
    srcset({ presets: srcsetPresets }),
    bust(),
    helpers(),
  ],
} satisfies Configuration;
