'use strict';

module.exports = function (gulp, plugins, options) {
  return function () {
    var stream = gulp.src('./stylesheets/ie.styl')
      .pipe(plugins.stylus({
        use: [
          plugins.poststylus([
            'lost',
            plugins.autoprefixer({
              browsers: ['ie < 10']
            }),
            'rucksack-css',
            'laggard',
            require('postcss-flexibility')
          ])
        ]
      }))
      .pipe(gulp.dest(options.paths.styles))

    return stream;
  };
};
