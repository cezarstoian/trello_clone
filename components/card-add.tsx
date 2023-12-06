'use client'

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
// import { CardAddModal } from "./board-add-modal";
import axios from "axios";
import toast from 'react-hot-toast';

export const CardAdd: React.FC = () => {
  // const router = useRouter()

  // const [isModalOpen, setModalOpen] = useState(false);

  // const handleAddBoardClick = () => {
  //   setModalOpen(true)
  // };

  // const handleModalClose = () => {
  //   setModalOpen(false)
  // }

  // const handleAddBoard = (title: string) => {
  //   axios.post('/api/boards', { title })
  //   .then(() => {
  //     toast.success('Successfully created board!.')
  //     router.refresh()
  //   })
  //   .catch(() => {
  //     toast.error('Something went wrong!')
  //   })
  //   .finally(() => setModalOpen(false))
  //   console.log("Create board with title:", title);
  // };

  return (
    <>
      {/* <button
        className="bg-gray-300 text-gray-700 py-2 px-4 rounded flex items-center hover:bg-gray-400"
        onClick={handleAddBoardClick}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Board
      </button>
      <CardAddModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onAddBoard={handleAddBoard}
      /> */}
      <div className="bg-gray-300 p-2 mb-2 rounded border border-gray-300 hover:bg-gray-400 cursor-pointer transition duration-300 justify-center flex">
        <div>Add Card +</div>
      </div>
    </>
  )
}
