const reorderLogFiles = require('./index.js');

test('should pass the test cases', () => {
  expect(reorderLogFiles(logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])).toStrictEqual(["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]);
  expect(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"])).toStrictEqual(["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]);
});