
 // Karma configuration
// Generated on Wed Jul 13 2016 23:43:48 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	    './node_modules/angular/angular.js',                             // angular
	    './node_modules/angular-ui-router/release/angular-ui-router.js', // ui-router
	    './node_modules/angular-mocks/angular-mocks.js',                 // loads our modules for tests                                 // our Users factory
		'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
		'./node_modules/lodash/lodash.js',
		'./js/dirPagination.js',
		'./js/angular-clipboard.js',		
		'./js/main.js',
		'./js/factories/api.js',
		'./js/backand.js',
		'./js/factories/backand.js',
		'./js/factories/textAPI.js',
		'./js/controllers/headerController.js',		
		'./js/controllers/imageSearch.js',
		'./js/controllers/textController.js',
		'./js/controllers/login.js',
		'./js/controllers/register.js',
		'./js/controllers/profileController.js',
		'./js/controllers/test/main.spec.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}