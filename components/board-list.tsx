import { User2 } from "lucide-react";
import getBoards from "@/actions/getBoards";
import { BoardAdd } from "./board-add";
import { BoardData } from "./board-data";

export const BoardList = async () => {
  const boards = await getBoards()
  
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {boards?.map((board) => (
          <BoardData key={board.id} data={board} />
        ))}
        <BoardAdd />
      </div>
    </div>
  )
}
