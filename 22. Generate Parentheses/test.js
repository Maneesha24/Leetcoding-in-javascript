const generateParenthesis = require('./index.js');

test('should pass the test cases', () => {
    expect(generateParenthesis(n = 3)).toStrictEqual(["((()))","(()())","(())()","()(())","()()()"]);
    expect(generateParenthesis(n = 1)).toStrictEqual(["()"]);
});