it('should pass only sometimes', () => {
  const random = Math.random() * 100

  expect(random > 40).toBe(true);
});
