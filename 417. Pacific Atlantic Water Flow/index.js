/**
 * @author maneeshavenigalla
 * There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean
 * touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges. The
 * island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c]
 * represents the height above sea level of the cell at coordinate (r, c). The island receives a lot of rain, and the
 * rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is
 * less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean. 
 * Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    const oceanMap = Array(heights.length).fill().map(_ => Array(heights[0].length).fill(0))
    const pTrack = new Set(), aTrack = new Set();
    const res = [];
    
    for (let i = 0; i < heights[0].length; i++) {
      traverse(0, i, pTrack)
      traverse(heights.length - 1, i, aTrack)
    }
    
    for (let i = 1; i < heights.length; i++) {
      traverse(i, 0, pTrack)
      traverse(heights.length - 1 - i, heights[i].length - 1, aTrack)
    }
      
    return res
    
    function traverse(row, col, ocean) {
      if (ocean.has(`${row}-${col}`)) return;
      ocean.add(`${row}-${col}`);
      oceanMap[row][col]++;
      if (oceanMap[row][col] === 2) res.push([row, col]);
      (row > 0 && heights[row][col] <= heights[row - 1][col]) && traverse(row - 1, col, ocean);
      (row < heights.length - 1 && heights[row][col] <= heights[row + 1][col]) && traverse(row + 1, col, ocean);
      (col > 0 && heights[row][col] <= heights[row][col - 1]) && traverse(row, col - 1, ocean);
      (col < heights[row].length - 1 && heights[row][col] <= heights[row][col + 1]) && traverse(row, col + 1, ocean)
    }
  };
module.exports = pacificAtlantic;