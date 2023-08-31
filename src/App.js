import './App.css';
import ChessBoard from "./components/ChessBoard";
import React, { useState } from 'react';
import BoardSizeModal from './components/BoardSizeModal';

const App = () => {
    const [boardSize, setBoardSize] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(true);

    const handleModalClose = () => {
        setModalIsOpen(false);
    };

    const handleBoardSizeSubmit = (size) => {
        setBoardSize(size);
        setModalIsOpen(false);
    };

    return (
        <div className="app-container">
            <h1 className="app-title">N Queen Solutions for N = {boardSize}</h1>
            <BoardSizeModal
                isOpen={modalIsOpen}
                onRequestClose={handleModalClose}
                onSubmit={handleBoardSizeSubmit}
            />
            {boardSize && <ChessBoard n={boardSize} style={{'--n': boardSize}} />}
        </div>
    );
};

export default App;
