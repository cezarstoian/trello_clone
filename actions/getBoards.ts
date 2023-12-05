import { db } from "@/lib/db"

const getBoards = async () => {
  try {
    const boards = await db.board.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })

    return boards
  } catch (err: any) {
    return null
  }
}

export default getBoards;
