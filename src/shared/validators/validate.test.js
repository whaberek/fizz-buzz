import { validateConstants } from 'shared/constants';
import { validate } from './validate';

describe('validate', () => {
  it('should return error for 0 given as argument', () => {
    const expectResult = {
      number: validateConstants.TOO_SMALL
    };

    expect(validate(0)).toEqual(expectResult);
  });

  it('should return error for 1001 given as argument', () => {
    const expectResult = {
      number: validateConstants.TOO_HIGH
    };

    expect(validate(1001)).toEqual(expectResult);
  });

  it('should return error for null given as argument', () => {
    const expectResult = {
      number: validateConstants.INTEGER
    };

    expect(validate(null)).toEqual(expectResult);
  });

  it('should return error for string given as argument', () => {
    const expectResult = {
      number: validateConstants.INTEGER
    };

    expect(validate('foo')).toEqual(expectResult);
  });
});