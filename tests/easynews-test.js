var easynews = require("../lib/easynews.js"),
    models = easynews.models,
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

// TODO: search tests

test("Has search function", function() {

  ok(easynews.search, "Found search");

});
