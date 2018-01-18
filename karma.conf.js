module.exports = function (config) {
    config.set({
        singleRun: true,
        frameworks: ['mocha', 'chai'],
        browsers: ['ChromeHeadless'],
        files: [
            'dist/dom-exist.js',
            'test.js'
        ]
    })
}
