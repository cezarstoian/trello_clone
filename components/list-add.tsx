"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import toast from 'react-hot-toast';
import { useState } from "react";
import { ListAddModal } from "./list-add-modal";

interface ListAddProps {
  boardId: string,
}


export const ListAdd = ({
  boardId,
}: ListAddProps) => {
  const router = useRouter()

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddListClick = () => {
    setModalOpen(true)
  };

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleAddList = (title: string, boardId: string) => {
    axios.post('/api/lists', { title, boardId })
    .then(() => {
      toast.success('Successfully created list!.')
      router.refresh()
    })
    .catch(() => {
      toast.error('Something went wrong!')
    })
    .finally(() => setModalOpen(false))
    console.log("Create list with title:", title);
  }

  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 mb-4 mr-4 hover:bg-gray-400 justify-center items-center flex">
      <div onClick={handleAddListClick} className="cursor-pointer">
        Add List +
      </div>
      <ListAddModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onAddList={handleAddList}
        boardId={boardId}
      />
    </div>
  )
}
