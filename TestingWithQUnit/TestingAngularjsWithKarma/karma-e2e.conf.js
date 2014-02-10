module.exports = function (config) {
    config.set({


        basePath: '',

        files: [
            'Tests/e2e/*.js'
        ],

        autoWatch: false,

        browsers: ['Chrome', 'Firefox'],

        frameworks: ['ng-scenario'],

        singleRun: true,

        // Replace the port with whatever port the app is running on
        proxies: {
            '/': 'http://localhost:65108/'
        },

        plugins: [
                'karma-junit-reporter',
                'karma-chrome-launcher',
                'karma-firefox-launcher',
                'karma-jasmine',
                'karma-ng-scenario'
        ],

        junitReporter: {
            outputFile: 'test_out/e2e.xml',
            suite: 'e2e'
        }

    })
}
