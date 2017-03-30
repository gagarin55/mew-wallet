process.env.ethTest = 'simpleCalsTests'

module.exports = function (config) {
  config.set({
    browserNoActivityTimeout: 60000,
    frameworks: ['browserify', 'detectBrowsers', 'mocha'],
    files: [
      './test/*.js'
    ],
    preprocessors: {
      'test/*.js': ['browserify']
    },
    singleRun: true,
    plugins: [
      'karma-browserify',
      'karma-mocha',
      'karma-firefox-launcher',
      'karma-chrome-launcher',
      'karma-safari-launcher',
      'karma-detect-browsers'
    ],
    detectBrowsers: {
      enabled: true,
      usePhantomJS: false
    }
  })
}
