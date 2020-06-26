describe('create Person object', () => {
  test('should return object with age property', () => {
    const person = new Person(34);
    expect(person.age).toBe(34);
  });
});