import assert from 'assert';
import Add from '../Add';

describe('#Add', () => {
  describe('invalid input', () => {
    describe('when no argument is provided', () => {
      it('should return 0', () => {
        assert.equal(Add(), 0);
      });
    });

    describe('when null is provided as argument', () => {
      it('should return 0', () => {
        assert.equal(Add(null), 0);
      });
    });

    describe('when undefined is provided as argument', () => {
      it('should return 0', () => {
        assert.equal(Add(undefined), 0);
      });
    });

    describe('when an empty string is provided', () => {
      it('should return 0', () => {
        assert.equal(Add(""), 0);
      });
    });

    describe('when contiguous delimiters are provided', () => {
      it('should return 0', () => {
        assert.equal(Add('1,,'), 0);
      });
    });

    describe('when negative numbers are given', () => {
      it('should throw an error', () => {
        assert.throws(() => { Add('-1,-2,-3,4,5') }, RangeError, 'negatives not allowed -1,-2,-3');
      });
    });
  });

  describe('valid input', () => {
    describe('when only 1 number is provided', () => {
      it('should return the number', () => {
        assert.equal(Add("4"), 4);
      });
    });

    describe('when 2 numbers are provided', () => {
      it('should return the sum of the numbers', () => {
        assert.equal(Add("1,4"), 5);
      });
    });

    describe('when N numbers are provided', () => {
      it('should return the sum of the numbers', () => {
        assert.equal(Add("1,2,3,4"), 10);
      });
    });

    describe('when a custom delimiter is provided', () => {
      it('should return the sum of the numbers', () => {
        assert.equal(Add("//;\n1;2;3;4"), 10);
      });
    });
  });
});
