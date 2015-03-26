var externalIp = require('./externalIp.js');

module.exports = function(grunt) {
  grunt.config('protractor', {
    options: {
      noColor: false,
      args: {
        baseUrl: 'http://' + externalIp + ':8080/',
        specs: ['test/e2e/*_spec.js']
      }
    },
    local: {
      options: {
        configFile: 'test/local.desktop.config.js'
      }
    },
    devices: {
      options: {
        configFile: 'test/local.devices.config.js'
      }
    },
    sauce: {
      options: {
        configFile: 'test/sauce.config.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-protractor-runner');
};
