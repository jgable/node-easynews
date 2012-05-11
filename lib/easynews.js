var scraper = require("scraper");

var defaults = {
  username: "",
  password: ""
};

module.exports = {
  
  init: function(opts) {
    // Extend defaults with passed in opts, assing to settings.
  },
  
  search: function(keywords) {
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
  }
};