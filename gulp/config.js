var dest = './build';
var src = './src';

// Assign each task object to module.exports
module.exports = {
  html: {
    src: src + '/**/*.html',
    dest: dest
  },
  sass: {
    src: src + '/**/*.{sass,scss}',
    dest: dest,
    settings: {
      // Enable .sass syntax
      indentedSyntax: true
    }
  },
  images: {
    src: src + '/components/**/*.{png,jpg}',
    dest: dest + '/images'
  },
  fonts: {
    src: src + '/fonts/**/*',
    dest: dest + '/fonts/',
    extensions: ['woff2', 'woff', 'eot', 'ttf']
  },
  icons: {
    src: src + '/components/**/*.svg',
    dest: dest + '/icons'
  },
  webpack: {
    src: src + '/**/*.js',
    dest: dest + '/js/',
    entryPoint: src + '/app.js',
  },
  server: {
    serverFile: './server.js'
  }
};
