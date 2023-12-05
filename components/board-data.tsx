'use client'

import { useState } from "react";
import { Board } from "@prisma/client";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";
import axios from 'axios';
import toast from 'react-hot-toast';

interface BoardProps {
  data: Board,
}

export const BoardData: React.FC<BoardProps> = ({ data }) => {
  const router = useRouter()

  const [isEditing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(data.title)

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setEditing(true);
  };

  const handleSaveClick = () => {
    const body = {data, newTitle}

    axios.post('/api/boards/updateName', body)
      .then(() => {
        toast.success('Successfully changed board title!.')
      })
      .catch(() => {
        setNewTitle(data.title)
        toast.error('Something went wrong!')
      })
      // .finally(() => setNewTitle(data.title))

    setEditing(false)
  };

  const handleOpenBoardClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    router.push(`/board/${data.id}`);
  };

  const handleDeleteClick = (id: string) => {
    axios.delete(`/api/boards/${data.id}`)
    .then(() => {
      toast.success(`Successfully deleted board ${data.title}!`)
      router.refresh()
    })
    .catch(() => {
      toast.error('Something went wrong!')
    })
  }

  return (
    <div className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-gray-600 rounded-sm h-full w-full p-2 overflow-hidde">
      <div className="flex flex-col justify-between h-full">
        <div>
          {isEditing ? (
            <input className="bg-gray-300"
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          ) : (
            <div className="flex justify-between p-4">
              <div className="flex items-center">
                <p className="font-semibold text-white mr-2">{newTitle}</p>
              </div>
              <div className="flex items-center">
                <Trash className="w-6 h-6 cursor-pointer text-white hover:text-gray-400" onClick={() => handleDeleteClick(data.id)}/>
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto w-full flex items-center justify-between space-x-2">
          <button
            className={`bg-transparent text-white mt-2 ${
              isEditing ? 'hover:bg-gray-400 hover:rounded-full transform hover:scale-105 transition-all duration-300' : 'hover:bg-gray-400 hover:rounded-full transform hover:scale-105 transition-all duration-300'
            }`}
            onClick={isEditing ? handleSaveClick : handleEditClick}
          >
            {isEditing ? 'Save' : 'Edit Board'}
          </button>
          <button
            className={`bg-transparent text-white mt-2 hover:bg-gray-400 hover:rounded-full transform hover:scale-105 transition-all duration-300`}
            onClick={handleOpenBoardClick}
          >
            Open Board
          </button>
        </div>
      </div>
    </div>
  )
}