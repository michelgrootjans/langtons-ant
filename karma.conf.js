module.exports = function(config) {
  config.set({
    autoWatch: true,

    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    files: [
      "lib/**/*.js",
      "spec/helpers/**/*.js",
      "spec/**/*[sS]pec.js"
    ],
  });
};
