import assert from 'assert';
import Add from '../Add';

describe('#Add', () => {
  describe('when an empty string is provided', () => {
    it('should return 0', () => {
      assert.equal(Add(""), 0);
    });
  });

  describe('when only 1 number is provided', () => {
    it('should return the number', () => {
      assert.equal(Add("4"), 4);
    });
  });
});
