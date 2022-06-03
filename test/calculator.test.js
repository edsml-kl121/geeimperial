const calculator = require('./calculator')
 
test('string with a single number should result in the number itself', () => {
    expect(calculator.add(2,3)).toBe(5);
  });