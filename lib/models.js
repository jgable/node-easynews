var Deferred = require("node-promise").defer;

// Common / Models for the easynews library.

var promised = function(handler) {
  var def = Deferred(),
      done = function(d) { def.resolve(d); },
      fail = function(d) { def.reject(d); };
      
    handler(done, fail);
    
    return def.promise;
};

var SearchResult = function(id, desc, dateStr, sizeStr, fileName, fileLink, group) {
  this.id = id;
  this.description = desc;
  this.date = dateStr;
  this.size = sizeStr;
  this.fileName = fileName;
  this.group = group;
  this.fileLink = fileLink;
};

var ZipQueue = function(index, files, size, state, downloadLinks) {
  this.index = index;
  this.files = files;
  this.size = size;
  this.state = state;
  this.downloadLinks = downloadLinks;
};

module.exports = {
  promised: promised,
  SearchResult: SearchResult,
  ZipQueue: ZipQueue
};