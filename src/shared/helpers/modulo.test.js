import { modulo } from './modulo';

describe('modulo', () => {
  it('should modulo for 15 return true', () => {
    expect(modulo(15, 15)).toBeTruthy();
  });

  it('should modulo for 15 return false', () => {
    expect(modulo(5, 15)).toBeFalsy();
  });
});
