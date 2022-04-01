const exist = require('./index.js');

test('should pass the test cases', () => {
    expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")).toBe(true);
    expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")).toBe(true);
    expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")).toBe(false);
});