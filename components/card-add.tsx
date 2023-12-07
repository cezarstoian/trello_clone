'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from 'react-hot-toast';
import { CardAddModal } from "./card-add-modal";

interface CardAddProps {
  listId: string,
}

export const CardAdd = ({
  listId,
}: CardAddProps) => {
  const router = useRouter()

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddCardClick = () => {
    setModalOpen(true)
  };

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleAddCard = (title: string, description: string, listId: string) => {
    axios.post('/api/cards', { title, description, listId })
    .then(() => {
      toast.success('Successfully created card!.')
      router.refresh()
    })
    .catch(() => {
      toast.error('Something went wrong!')
    })
    .finally(() => setModalOpen(false))
    console.log("Create card with title:", title);
  }

  return (
    <>
      <div className="p-2 mb-2 rounded border border-gray-300 hover:bg-gray-400 cursor-pointer transition duration-300 justify-center flex">
        <div onClick={handleAddCardClick} className="cursor-pointer">Add Card +</div>
        <CardAddModal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          onAddCard={handleAddCard}
          listId={listId}
        />
      </div>
    </>
  )
}
