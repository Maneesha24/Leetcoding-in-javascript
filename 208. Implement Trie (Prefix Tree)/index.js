/**
 * @author maneeshavenigalla
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to 
 * efficiently store and retrieve keys in a dataset of strings. There are various 
 * applications of this data structure, such as autocomplete and spellchecker.
 */

 class Trie {

    constructor() {
        this.root = {};
    }

    /** 
     *  Inserts the string word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert(word) {

        let node = this.root;

        for(const char of word) {
            if(node[char] == null) {
                node[char] = {};
            }

            node = node[char];
        }

        node['#'] = true;
    };

    traverse(word) {
        let node = this.root;

        for(const char of word) {
            node = node[char];

            if(!char in node) {
                node[char] = {};
            }
        }

        return node;
    }

    /** 
     * Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const node = this.traverse(word);
        return node !== null && node['#'] == true;
    };

    /** 
     * Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return this.traverse(prefix) !== null;
    };


};

module.exports = Trie;