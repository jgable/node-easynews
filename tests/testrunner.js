var testrunner = require("qunit");

testrunner.run({
    code:  "../lib/easynews.js",
    tests: "./easynews-test.js"
}, function(err, report) {
    console.dir(report);
});
