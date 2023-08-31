const isSafe = (row, col, board, n) => {
    let dupRow = row;
    let dupCol = col;

    while (row >= 0 && col >= 0) {
        if (board[row][col] === 'Q')
            return false;
        row--;
        col--;
    }

    col = dupCol;
    row = dupRow;

    while (col >= 0) {
        if (board[row][col] === 'Q')
            return false;
        col--;
    }

    row = dupRow;
    col = dupCol;

    while (row < n && col >= 0) {
        if (board[row][col] === 'Q')
            return false;
        row++;
        col--;
    }

    return true;
};

const solve = (col, board, ans, n) => {
    if (col === n) {
        ans.push([...board]);
        return;
    }

    for (let row = 0; row < n; row++) {
        if (isSafe(row, col, board, n)) {
            board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);
            solve(col + 1, board, ans, n);
            board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1);
        }
    }

    return ans;
};

const solveNQueens = n => {
    const board = Array(n).fill('.'.repeat(n));

    return solve(0, board, [], n);
};

export default solveNQueens