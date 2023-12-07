"use client";

import { ListWithCards } from "@/types";
import { CardContainer } from "./card-container";
import { Settings } from "lucide-react";
import axios from "axios";
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ListInfoModal } from "./list-info-modal";
import { List } from "@prisma/client";

interface ListObjectProps {
  data: ListWithCards,
};

export const ListObject = ({
  data,
}: ListObjectProps) => {
  // console.log(data)
  const router = useRouter()

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddListClick = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleListSave = (data: List, newTitle: string) => {
    axios.post('/api/lists/updateName', { data, newTitle })
    .then(() => {
      toast.success('Successfully updated list name!')
      router.refresh()
    })
    .catch(() => {
      toast.error('Something went wrong!')
    })
    .finally(() => setModalOpen(false))
    console.log("Create list with title:", newTitle);
  }

  const handleListDelete = (data: List) => {
    axios.delete(`/api/lists/${data.id}`)
    .then(() => {
      toast.success('Successfully deleted list!')
      router.refresh()
    })
    .catch(() => {
      toast.error('Something went wrong!')
    })
    .finally(() => setModalOpen(false))
  }

  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 mb-4 bg-white mr-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          {data.title}
        </div>
        <Settings className="cursor-pointer" onClick={handleAddListClick} />
        <ListInfoModal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          onSaveList={handleListSave}
          onDeleteList={handleListDelete}
          data={data}
        />
      </div>
      <CardContainer data={data.cards} listId={data.id} />
    </div>
  );
};
