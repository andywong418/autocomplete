const express = require('express');
const router = express.Router();
const trie = require('./buildTrie');
// YOUR API ROUTES HERE

// SAMPLE ROUTE
router.use('/users', (req, res) => {
    res.json({ success: true });
});

router.use('/autocompleteQuery', (req, res) => {
  var prefix = req.query.prefix;
  console.log("PREFIX", prefix);
  const wordArray = trie.autoComplete(prefix);
  console.log("BACKEND ARRAY", wordArray);
  res.send(wordArray.slice(0, 10));
});

module.exports = router;
