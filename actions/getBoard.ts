import { db } from "@/lib/db"

const getBoard = async (boardId: string) => {
  try {
    const board = await db.board.findUnique({
      where: {
        id: boardId,
      },
    })

    return board
  } catch (err: any) {
    return null
  }
}

export default getBoard;
