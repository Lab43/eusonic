const Underdot = require('underdot')
    , sass = require('underdot-sass')
    , postcss = require('underdot-postcss')
    , autoprefixer = require('autoprefixer')
    , srcset = require('underdot-srcset')
    , ejs = require('underdot-ejs')
    , cname = require('underdot-cname')
    , hash = require('underdot-hash')
    , collection = require('underdot-collection')
    , templateHelpers = require('underdot-template-helpers')
;



const srcsetPresets = {
  youtube: {
    sizes: '(max-width: 640px) 100vw, 640px',
    srcset: [1280, 1000, 800, 600],
  },
}


const underdot = new Underdot({
  destination: 'docs', // required by Github pages
  globals: {
    siteTitle: 'eusonic',
  },
  plugins: [
    ejs({
      views: ['source/_includes'],
    }),
    sass({
      sourceMap: true,
      outputStyle: 'expanded',
    }),
    collection({
      name: 'posts',
      directory: 'posts',
    }),
    postcss([autoprefixer]),
    srcset({presets: srcsetPresets}),
    cname('eusonic.com'),
    hash(),
    templateHelpers(),
  ]
});

underdot.build();
