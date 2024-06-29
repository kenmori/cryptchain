
const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

class Block {
  constructor({ timestamp, lastHash, hash, data, nonce, difficulty }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
    this.difficulty = difficulty;
  }

  static genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const { difficulty } = lastBlock;
    // マイニングアルゴリズム実行中にnonceを調整できるようにするため
    let nonce = 0;

    return new this({
      timestamp: Date.now(),
      lastHash: lastBlock.hash,
      data,
      hash: `${"0".repeat(lastBlock.difficulty)}${cryptoHash(timestamp, lastHash, data)}`,
      nonce: lastBlock.nonce,
      difficulty: lastBlock.difficulty
    });
  }
}

module.exports = Block;
