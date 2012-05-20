var scraper = require("scraper"),
    models = require("./models.js"),
    promised = models.promised;
    
if(!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
      return this.replace(/{([^{}]*)}/g,
          function (a, b) {
              var r = o[b];
              return typeof r === 'string' || typeof r === 'number' ? r : a;
          }
      );
  };
}

var EasynewsSearcher = function(user, pass) {
  this.user = user;
  this.pass = pass;
};

// Original Search URL: http://members.easynews.com/global5/index.html?&gps=bought+zoo&fty%5B%5D=VIDEO&s1=dtime&s1d=-&s2=dsize&s2d=-&s3=nsubject&s3d=%2B&pby=250&u=1&hthm=1&fly=2&pno=1&sS=0

EasynewsSearcher.searchURL = "http://{user}:{pass}@members.easynews.com/global5/index.html?&gps={terms}&fty%5B%5D=VIDEO&s1=dtime&s1d=-&s2=dsize&s2d=-&s3=nsubject&s3d=%2B&pby=250&u=1&hthm=1&fly=2&pno=1&sS=0";

EasynewsSearcher.encodeTerms = function(terms) {
  return encodeURIComponent(str).replace("%20", "+").replace(/[!'()*]/g, escape)
};

EasynewsSearcher.prototype.search = function(terms) {

  var url = this.searchURL.supplant({
    user: this.user,
    pass: this.pass, 
    terms: this.encodeTerms(terms)
  }),
    that = this;
  
  return promised(function(done, fail) {

    scraper(url, function(err, $) {
      if(err) { return fail(err); }
      
      done(that.getSearchResults($));
      
    });
  
  });

};

EasynewsSearcher.prototype.getSearchResults = function($) {

  var results, 
      id, descr, size, date, name, group, fileLink,
      $resultRow, $part,
      getRowPart = function(sel, assigner, assignee) {
        $part = $resultRow.find(sel);
        if($part) {
          assignee = assigner.apply($part, [$part, $resultRow]);
        }
      };

  $("body > table table tr.rRow1, body > table table tr.rRow2").each(function() {
  
    // Process each result row.
    $resultRow = $(this);
    
    // Get the id from the checkbox
    gerRowPart("td > input[type=checkbox]", function() { this.attr("value"); }, id);
    
    getRowPart("td.subject a:first", function() { return this.text(); }, descr );
    
    getRowPart("td.timeStamp", function() { return this.text(); }, date );
    
    getRowPart("td.fSize", function() { return this.text(); }, size );
    
    getRowPart("td.fileName a:first", function() { return this.text(); }, name );
    getRowPart("td.fileName a:first", function() { return this.attr("href"); }, fileLink );
    
    getRowPart("td.group a:first", function() { return this.text(); }, group );
    
    results.push(new models.SearchResult(id, desc, date, size, name, fileLink, group));
    
  });

  return results;

};

module.exports = EasynewsSearcher;