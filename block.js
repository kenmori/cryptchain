class Block {
  constructor(lastHash, timestamp, data, hash) {
    this.lastHash = lastHash
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
  }
}

const block1 = new Block('foo-lastHash', "01/01/01", 'foo-data', 'foo-hash');


module.exports = Block;
