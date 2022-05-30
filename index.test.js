it('should pass only sometimes', () => {
  const random = Math.random() * 100

  expect(random > 25).toBe(true);
});
