var scraper = require("scraper"),
    models =  require("./models.js"),
    promised = models.promised,
    Searcher = require("./searcher.js");

var defaults = {
    username: "",
    password: ""
  }, 
  extend = function(obj, extObj) {
    
    if (arguments.length > 2) {
        for (var a = 1; a < arguments.length; a++) {
            extend(obj, arguments[a]);
        }
    } else {
        for (var i in extObj) {
          if(!extObj.hasOwnProperty(i)) { continue; }
            
          obj[i] = extObj[i];
        }
    }
    
    return obj;
};

module.exports = {
  
  init: function(opts) {
    // Extend defaults with passed in opts, assing to settings.
    this.settings = extend(defaults, opts);
  },
  
  search: function(keywords) {
    
    var that = this;
    
    return promised(function(done, fail) {
      
      if(!that.settings.username || !that.settings.password) {
        return fail("Must have username and password before searching");
      }

      // Do some searchin
      var easySearch = new Searcher(that.settings.username, that.settings.password);
    
      easySearch
        .search(keywords)
        .then(function(results) {
        
          done(results);
        
        }, fail);
    
    });
    
  },
  
  zipmanager: {
    list: function() {
      // Do some listin
    },
    queueByFile: function(fileName) {
      // Do some findin
    },
    deleteQueues: function(index) {
      // Do some deletin
    }
  },
  
  // Export our models for testing...
  models: models
  
};