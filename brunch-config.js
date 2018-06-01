module.exports = {
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'app.js'
    }
  },

  paths: {
    watched: ['app/frontend'],
    public: 'public/assets'
  },

  conventions: {
    assets: /^(app\/frontend\/images)/
  },

  npm: {
    globals: {
      $: 'jquery',
      jQuery: 'jquery',
      breakfast: 'breakfast-rails'
    }
  }
};
