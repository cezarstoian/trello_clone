import React, { useState } from "react";
import Modal from "react-modal";

interface CardAddModalProps {
  isOpen: boolean
  onRequestClose: () => void
  onAddCard: (title: string, description: string, listId: string) => void
  listId: string
}

export const CardAddModal: React.FC<CardAddModalProps> = ({
  isOpen,
  onRequestClose,
  onAddCard,
  listId,
}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")
  // console.log(listId)

  const handleCreateClick = () => {
    if (title.trim() === "") {
      setError("Card title cannot be empty")
      return;
    }

    setError("")

    onAddCard(title, description, listId)
    setTitle("")
    setDescription("")
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
      contentLabel="Add Card Modal"
    >
      <div className="text-xl mb-4">Enter Card Title</div>
       <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Card Title"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Card Description"
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

