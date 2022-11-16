import { isMultiple } from './utils';

describe('isMultiple', () => {
  it('check multiple - 2', () => {
    expect(isMultiple(4, 2)).toBe(true);
  });

  it('check multiple - prime number', () => {
    expect(isMultiple(14, 7)).toBe(true);
  });

  it('check multiple - of itself', () => {
    expect(isMultiple(23, 23)).toBe(true);
  });

  it('check multiple - not multiple', () => {
    expect(isMultiple(16, 9)).toBe(false);
  });
});
