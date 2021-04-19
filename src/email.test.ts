import isValidEmail from './';

const validEmails = [
  'emmanuel@hibernate.org',
  'emma+nuel@hibernate.org',
  'emma=nuel@hibernate.org',
  'max.evan.test+123@gmail.com',
  '*@example.net',
  'fred&barny@example.com',
  '---@example.com',
  'foo-bar@example.net',
  'prettyandsimple@example.com',
  'very.common@example.com',
  'disposable.style.email.with+symbol@example.com',
  'other.email-with-dash@example.com',
  'x@example.com',
  'example-indeed@strange-example.com',
  "#!$%&'*+-/=?^_`{}|~@example.org",
  'example@s.solutions',
  'xn--80ahgue5b@xn--p-8sbkgc5ag7bhce.xn--ba-lmcq',
  'nothing@xn--fken-gra.no',
  'me.@example.com',
  'me.@example.test.com.tw',
  '.me@example.com',
  'john..doe@example.com',
];

const invalidEmails = [
  'me.@example.test.com.t',
  'mailbox.sub1.sub2@this-domain',
  'emmanuel@hibernate',
  'emmanuel.hibernate.org',
  'emma nuel@hibernate.org',
  'emma(nuel@hibernate.org',
  'emmanuel@',
  'emma\nnuel@hibernate.org',
  'emma@nuel@hibernate.org',
  'emma@nuel@.hibernate.org',
  'Just a string',
  'string',
  'me@',
  '@example.com',
  'me@example..com',
  'me\\@example.com',
  'Abc.example.com',
  'A@b@c@example.com',
  'a"b(c)d,e:f;g<h>i[j\\k]l@example.com',
  'just"not"right@example.com',
  'this is"not\\allowed@example.com',
  'this\\ still\\"not\\\\allowed@example.com',
  'john.doe@example..com.test',
  'max..@gmail.',
];

it('should be valid email', function () {
  // All the valid emails should pass
  expect(validEmails.every((email) => isValidEmail(email))).toBe(true);
});

it('should be invalid email', function () {
  // All the invalid emails should fail
  expect(invalidEmails.every((email) => !isValidEmail(email))).toBe(true);
});
