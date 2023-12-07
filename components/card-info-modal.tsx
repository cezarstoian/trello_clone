import { Card } from "@prisma/client";
import React, { useState } from "react";
import Modal from "react-modal";

interface CardInfoModalProps {
  isOpen: boolean
  onRequestClose: () => void
  onSaveCard: (data: Card, newTitle: string, newDescription: string) => void
  onDeleteCard: (data: Card) => void
  data: Card
}

export const CardInfoModal: React.FC<CardInfoModalProps> = ({
  isOpen,
  onRequestClose,
  onSaveCard,
  onDeleteCard,
  data,
}) => {
  const [newTitle, setNewTitle] = useState(data.title)
  const [newDescription, setNewDescription] = useState(data.description ?? '')
  const [error, setError] = useState("");

  const handleSaveClick = () => {
    if (newTitle.trim() === "") {
      setError("Card title cannot be empty")
      return;
    }

    setError("")

    onSaveCard(data, newTitle, newDescription)
    onRequestClose()
  }

  const handleCancelClick = () => {
    setNewTitle(data.title)
    setNewDescription(data.description ?? '')
    onRequestClose()
  }

  const handleDeleteClick = () => {
    // console.log(data)
    onDeleteCard(data)
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
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Card Title"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <input
        type="text"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="Card Description"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="flex justify-center">
        <button
          onClick={handleSaveClick}
          className="bg-green-500 text-white py-2 px-4 rounded mr-2 hover:bg-green-600"
        >
          Save
        </button>
        <button
          onClick={handleCancelClick}
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={handleDeleteClick}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

