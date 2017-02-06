import expect from 'expect';
import {isRealString} from '../utils/validation';

describe('isRealString', () => {
  it('should reject non-string values', () => {
    let number = 123;

    expect(isRealString(number)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    let emptyString = '   ';

    expect(isRealString(emptyString)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    let realString = 'JooHyung';

    expect(isRealString(realString)).toBe(true);
  });
});
