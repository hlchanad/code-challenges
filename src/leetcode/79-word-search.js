/**
 *
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
module.exports.exists = (board, word) => {
    const rowSize = board.length;
    const colSize = board[0].length;

    /**
     *
     * @param {{ row: number, col: number }} coordinate
     * @param {string} target
     * @param {boolean[][]?} travelled
     * @return {boolean}
     */
    const isExistsFromChar = ({ row, col }, target, travelled) => {
        if (!travelled) {
            travelled = Array.from(new Array(rowSize))
                .fill(null)
                .map(() => Array.from(new Array(colSize)).fill(false));
        }

        if (target.length === 0) {
            return true;
        }

        if (row < 0 || row >= rowSize || col < 0 || col >= colSize) {
            return false;
        }

        if (travelled[row][col]) {
            return false;
        }

        const char = board[row][col];

        if (!target.startsWith(char)) {
            return false;
        }

        travelled[row][col] = true;
        target = target.slice(1);

        if (
            isExistsFromChar({ row: row + 1, col }, target, travelled) ||
            isExistsFromChar({ row: row - 1, col }, target, travelled) ||
            isExistsFromChar({ row, col: col + 1 }, target, travelled) ||
            isExistsFromChar({ row, col: col - 1 }, target, travelled)
        ) {
            return true;
        }

        // reset travelled if the above dfs does not find the target word
        travelled[row][col] = false;

        return false;
    }

    for (let row = 0; row < rowSize; row ++) {
        for (let col = 0; col < colSize; col ++) {
            if (isExistsFromChar({ row, col }, word)) {
                return true;
            }
        }
    }

    return false;
};
