var scraper = require("scraper"),
    models =  require("./models.js");

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
    
    if(!this.settings.username || !this.settings.password) {
      throw "Must have username and password before searching";
    }
    
    // Do some searchin
    
    
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