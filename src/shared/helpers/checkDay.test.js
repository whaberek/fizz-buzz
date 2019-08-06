import MockDate from 'mockdate';

import { checkDay } from './checkDay';

describe('checkDay', () => {
  it('should return true for monday', () => {
    MockDate.set('2019-07-08');
    expect(checkDay(1)).toBeTruthy();
  });

  it('should return false for monday', () => {
    MockDate.set('2019-07-08');
    expect(checkDay(5)).toBeFalsy();
  });

  it('should return true for friday', () => {
    MockDate.set('2019-07-12');
    expect(checkDay(5)).toBeTruthy();
  });

  it('should return false for friday', () => {
    MockDate.set('2019-07-12');
    expect(checkDay(1)).toBeFalsy();
  });

  it('should return true for wednesday', () => {
    MockDate.set('2019-07-10');
    expect(checkDay(3)).toBeTruthy();
  });
});
