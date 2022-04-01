const frequencySort = require('./index.js');

test('should pass the test cases', () => {
    expect(frequencySort("tree")).toBe("eert");
    expect(frequencySort("cccaaa")).toBe("aaaccc");
    expect(frequencySort("Aabb")).toBe("bbAa");
});
