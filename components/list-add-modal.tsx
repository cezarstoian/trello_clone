import React, { useState } from "react";
import Modal from "react-modal";

interface ListAddModalProps {
  isOpen: boolean
  onRequestClose: () => void
  onAddList: (title: string, boardId: string) => void
  boardId: string
}

export const ListAddModal: React.FC<ListAddModalProps> = ({
  isOpen,
  onRequestClose,
  onAddList,
  boardId,
}) => {
  const [title, setTitle] = useState("")
  const [error, setError] = useState("");

  const handleCreateClick = () => {
    if (title.trim() === "") {
      setError("List title cannot be empty")
      return;
    }

    setError("")

    onAddList(title, boardId)
    setTitle("")
    onRequestClose()
  }

  const handleCancelClick = () => {
    setTitle("")
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add List Modal"
    >
      <div className="text-xl mb-4">Enter List Title</div>
       <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="List Title"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        {error && <div className="text-red-500 mb-4">{error}</div>}
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

