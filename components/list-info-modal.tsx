import { List } from "@prisma/client";
import React, { useState } from "react";
import Modal from "react-modal";

interface ListInfoModalProps {
  isOpen: boolean
  onRequestClose: () => void
  onSaveList: (data: List, newTitle: string) => void
  onDeleteList: (data: List) => void
  data: List
}

export const ListInfoModal: React.FC<ListInfoModalProps> = ({
  isOpen,
  onRequestClose,
  onSaveList,
  onDeleteList,
  data,
}) => {
  const [newTitle, setNewTitle] = useState(data.title)
  const [error, setError] = useState("");

  const handleSaveClick = () => {
    if (newTitle.trim() === "") {
      setError("List title cannot be empty")
      return;
    }

    setError("")

    onSaveList(data, newTitle)
    onRequestClose()
  }

  const handleCancelClick = () => {
    setNewTitle(data.title)
    onRequestClose()
  }

  const handleDeleteClick = () => {
    // console.log(data)
    onDeleteList(data)
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
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="List Title"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      {error && <div className="text-red-500 mb-4">{error}</div>}
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

