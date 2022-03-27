/**
 * @author maneeshavenigalla
 * Given a text string and words (a list of strings), return all index pairs [i, j] so that the
 * substring text[i]...text[j] is in the list of words.
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */

var IndexPairsOfString = (text, words) => {

    let trie = {};

    for(const word of words) {
        let node = trie;

        for(const char of word) {
            if(!(char in node)) {
                node[char] = {};
            }
            node = node[char];
        }

        node['#'] = true;
    }
    
    let result = [];

    for(let i = 0; i < text.length; i++) {
        node = trie;
        let char = text[i];

        let j = i;
        
        while(char in node) {
            node = node[char];

            if('#' in node) {
                result.push([i, j]);
            }
            j++;

            if(j == text.length) {
                break;
            } else {
                char = text[j];
            }
        }
    }

    return result;
}

module.exports = IndexPairsOfString;