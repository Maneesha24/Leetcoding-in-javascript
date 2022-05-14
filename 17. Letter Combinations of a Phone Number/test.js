const letterCombinations = require('./index.js');

test('should pass the test cases', () => {
    expect(letterCombinations("23")).toStrictEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
    expect(letterCombinations("")).toStrictEqual([]);
    expect(letterCombinations("2")).toStrictEqual(["a","b","c"]);
});