const Block = require('./block');

describe('Block', () => {
  const hash = 'foo-hash';
  const lastHash = 'foo-lastHash';
  const timestamp = '01/01/01';
  const data = 'foo-data';
  it("has timestamp, lastHash, hash, data", () => {
    const block = new Block(lastHash, timestamp, data, hash);
    expect(block.hash).toEqual(hash);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.timestamp).toEqual(timestamp);
    expect(block.data).toEqual(data);
  })
})
