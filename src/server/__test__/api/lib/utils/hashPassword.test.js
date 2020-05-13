const { hashPassword } = require('../../../../api/lib/utils/hashPassword');
/**
 * testing we get a 60 char string back
 */
it('should has my password', () => {
  const password = '123123123';
  const result = hashPassword(password);

  expect(result.length).toBe(60);
});
