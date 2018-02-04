var fs = require('fs');
const path = require('path');

var text = fs.readFileSync(path.join(__dirname, "./dict.txt")).toString('utf-8');;
var textByLine = text.split("\n");
var Trie = require('./trie');

var builtTrie = new Trie();

textByLine.forEach(function(string) {
  builtTrie.add(string);
});
module.exports = builtTrie;
