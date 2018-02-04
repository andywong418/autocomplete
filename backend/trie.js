function Node(value) {
  this.value = value;
  this.children = {};
  this.terminal = false;
}

function Trie() {
  this.root = new Node("");

  this.add = function(string) {
    var currentNode = this.root;
    for(var i = 0; i < string.length; i++) {
      if(!currentNode.children.hasOwnProperty(string[i])) {
        currentNode.children[string[i]] = new Node(string[i]);
      }
      currentNode = currentNode.children[string[i]];
    }
    currentNode.terminal = string;
  }

  this.autoComplete = function(prefix) {
    var currentNode = this.root;

    for(var i =0; i < prefix.length; i++) {
      if(!currentNode.children[prefix[i]]) {
        return []; //Doesn't exist in the dictionary
      }
      currentNode = currentNode.children[prefix[i]];
    }
    //perform bfs now
    var queue = [];
    var returnArr = [];
    queue.push(currentNode);
    while(queue.length > 0) {
      var item = queue.shift();
      if(item.terminal) {
        returnArr.push(item.terminal);
      }
      for(var key in item.children) {
        queue.push(item.children[key]);
      }
    }
    return returnArr;

  }
};

module.exports = Trie;
