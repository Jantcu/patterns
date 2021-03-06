'use strict';

/*
 * Require the Fractal module
 */
 const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Crispus');

/*
 * A place to build the project to
 */
fractal.web.set('builder.dest', __dirname + '/public');

/*
 * Tell Fractal where to look for components.
 */
fractal.set('components.path', 'components');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.set('docs.path', 'docs');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', __dirname + '/assets');

/*
 * Tell the Fractal web preview plugin to use this template for previews.
 */
fractal.set('components.default.preview', '@preview');

/*
 * Configure the server
 */
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
  open: true,
  notify: true,
  https: true,
});
