// Models for the easynews library.

var SearchResult = function(desc, dateStr, sizeStr, fileName, group) {
  this.description = desc;
  this.date = dateStr;
  this.size = sizeStr;
  this.fileName = fileName;
  this.group = group;
};

var ZipQueue = function(index, files, size, state, downloadLinks) {
  this.index = index;
  this.files = files;
  this.size = size;
  this.state = state;
  this.downloadLinks = downloadLinks;
};

module.exports = {
  SearchResult: SearchResult,
  ZipQueue: ZipQueue
};