import React, { useState, useEffect } from 'react';
import solveNQueens from "../core/n-queen";

const ChessBoard = ({ n }) => {
    const [solutions, setSolutions] = useState([]);
    const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);

    useEffect(() => {
        setSolutions(solveNQueens(n));
        setCurrentSolutionIndex(0);
    }, [n]);

    const solution = solutions[currentSolutionIndex];

    const showNextSolution = () => {
        if (currentSolutionIndex < solutions.length - 1) {
            setCurrentSolutionIndex(currentSolutionIndex + 1);
        }
    };

    const showPrevSolution = () => {
        if (currentSolutionIndex > 0) {
            setCurrentSolutionIndex(currentSolutionIndex - 1);
        }
    };

    const reloadWithDifferentSize = () => {
        window.location.reload();
    };

    const getQueenColor = (row, col) => {
        const queenIndex = solution[row].indexOf('Q');
        return queenIndex === col ? `hsl(${(row * 40) % 360}, 70%, 60%)` : 'transparent';
    };

    return (
        <div className="solved-board">
            <div className="board">
                {solution && solution.map((solutionRow, j) => (
                    <div key={j} className="board-row">
                        {solutionRow.split("").map((symbol, k) => (
                            <div
                                key={k}
                                className={`cell ${k % 2 === (j % 2) ? "even" : ""}`}
                                style={{
                                    '--cell-size': `calc(100% / ${n})`,
                                    '--content-size': `calc(100% / ${n} - 2px)`,
                                    backgroundColor: k % 2 === (j % 2) ? "#f0d9b5" : "#fff",
                                    border: "1px solid #ccc",
                                    boxShadow: "inset 0 0 4px rgba(0, 0, 0, 0.1)",
                                    ...{
                                        backgroundColor: getQueenColor(j, k),
                                    },
                                }}
                            >
                                {symbol === "." ? " " : "♛"}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="timer">
                Solution {currentSolutionIndex + 1} of {solutions.length}
            </div>
            <div className="board-navigation">
                <button className="navigation-button" onClick={showPrevSolution} disabled={currentSolutionIndex === 0}>
                    <span>&lt;</span> Prev
                </button>
                <button className="navigation-button" onClick={showNextSolution} disabled={currentSolutionIndex === solutions.length - 1}>
                    Next <span>&gt;</span>
                </button>
            </div>
            <button className="reload-button" onClick={reloadWithDifferentSize}>
                Reload with Different Size
            </button>
        </div>
    );
};

export default ChessBoard;
