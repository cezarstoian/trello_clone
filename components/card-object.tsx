"use client";

import { Card } from "@prisma/client";
import axios from "axios";
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CardInfoModal } from "./card-info-modal";

interface CardObjectProps {
  data: Card;
};

export const CardObject = ({
  data,
}: CardObjectProps) => {
  const router = useRouter()

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddCardClick = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleCardSave = (data: Card, newTitle: string, newDescription: string) => {
    axios.post('/api/cards/updateName', { data, newTitle, newDescription})
    .then(() => {
      toast.success('Successfully updated!')
      router.refresh()
    })
    .catch(() => {
      toast.error('Something went wrong!')
    })
    .finally(() => setModalOpen(false))
  }

  const handleCardDelete = (data: Card) => {
    axios.delete(`/api/cards/${data.id}`)
    .then(() => {
      toast.success('Successfully deleted card!')
      router.refresh()
    })
    .catch(() => {
      toast.error('Something went wrong!')
    })
    .finally(() => setModalOpen(false))
  }

  return (
    <div className="bg-white p-2 mb-2 rounded border border-gray-300 hover:bg-gray-400 cursor-pointer transition duration-300 justify-center flex">
      <div onClick={handleAddCardClick}>{data.title}</div>
      <CardInfoModal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          onSaveCard={handleCardSave}
          onDeleteCard={handleCardDelete}
          data={data}
        />
    </div>
  )
}
