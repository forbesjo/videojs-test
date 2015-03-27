exports.config = {

  multiCapabilities: [{
      browserName: 'chrome',
      chromeOptions: {
        // http://peter.sh/experiments/chromium-command-line-switches/
        args: [
          // Disables installation of default apps on first run. This is used during automated testing.
          'disable-default-apps',
          // Disables default browser checking
          'no-default-browser-check',
          // Skip First Run tasks
          'no-first-run',
          // Disables the sandbox for all process types that are normally sandboxed.
          'no-sandbox',
          // Disables extensions
          'disable-extensions'
        ]
      }
    },

    {
      browserName: 'safari'
    },

    {
      browserName: 'firefox',
      loggingPrefs: {
        browser: 'SEVERE'
      }
    }
  ],

  onPrepare: function() {
    var HtmlReporter = require('protractor-html-screenshot-reporter');
    // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'test/screenshots'
    }));

    browser.ignoreSynchronization = true;
  }
};
