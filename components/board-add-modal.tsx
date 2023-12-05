import React, { useState } from "react";
import Modal from "react-modal";

interface BoardAddModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onAddBoard: (title: string) => void;
}

export const BoardAddModal: React.FC<BoardAddModalProps> = ({
  isOpen,
  onRequestClose,
  onAddBoard,
}) => {
  const [title, setTitle] = useState("");

  const handleCreateClick = () => {
    onAddBoard(title);
    setTitle("");
    onRequestClose();
  };

  const handleCancelClick = () => {
    setTitle("");
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Board Modal"
    >
      <div className="text-xl mb-4">Enter Board Title</div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Board Title"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="flex justify-center">
        <button
          onClick={handleCreateClick}
          className="bg-green-500 text-white py-2 px-4 rounded mr-2 hover:bg-green-600"
        >
          Create
        </button>
        <button
          onClick={handleCancelClick}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

