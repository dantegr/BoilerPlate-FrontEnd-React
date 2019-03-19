const add = (a,b) => a+b;
const generateGreeting =(name) =>`Hello ${name}`;

test('should add 2 numbers', () => {
  const result = add(3,4);
  expect(result).toBe(7);
 
});

test('should get the correct name ', () => {
  const result = generateGreeting('Pantelis');
  expect(result).toBe('Hello Pantelis');
 
});