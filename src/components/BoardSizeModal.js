import React, { useState } from 'react';
import Modal from 'react-modal';
import './BoardSizeModal.css';

Modal.setAppElement('#root');

const BoardSizeModal = ({ isOpen, onRequestClose, onSubmit }) => {
    const [boardSize, setBoardSize] = useState('');

    const handleSizeChange = (event) => {
        setBoardSize(event.target.value);
    };

    const handleSubmit = () => {
        if (boardSize) {
            onSubmit(parseInt(boardSize, 10));
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal"
            overlayClassName="modal-overlay"
        >
            <div className="modal-content">
                <h2>Choose Board Size</h2>
                <p>Remember that the larger the board, larger the load time, try to not go beyond 12</p>
                <input
                    type="number"
                    placeholder="Enter board size"
                    className="input-field"
                    value={boardSize}
                    onChange={handleSizeChange}
                />
                <div className="button-container">
                    <button className="button" onClick={handleSubmit}>
                        Start
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default BoardSizeModal;
