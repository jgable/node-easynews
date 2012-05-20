var easynews = require("../lib/easynews.js"),
    models = easynews.models,
    settings = require("./user-testDetails.js"),
    section = QUnit.module;

section("setup tests");

test("Has easynews", function() {
  
  ok(easynews, "Found easynews");
  
});

section("model tests");

test("Has models", function() { 

  ok(models.SearchResult, "Found SearchResult");
  ok(models.ZipQueue, "Found ZipQueue");

});

section("search tests");

test("Has search function", function() {

  ok(easynews.search, "Found search");

});

asyncTest("Can search", function() {

  easynews.init(settings.user, settings.pass);
  easynews.search("nodejs")
    .then(function(results) {
    
      ok(results, "Found results");
      ok(results.length > 0, "Found at least one result");
      start();
    
    }, function() { ok(false, "failure during search"); start(); });

});