module.exports = function(grunt) {
  return {
    server: {
      options: {
        hostname: '<%= page_hostname %>',
        port: grunt.option('port') || 8080,
        keepalive: grunt.option('keepalive') ? true : false
      }
    }
  };
};
