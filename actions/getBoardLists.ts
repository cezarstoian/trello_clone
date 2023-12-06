import { db } from "@/lib/db"

const getBoardLists = async (boardId: string) => {
  try {
    const lists = await db.list.findMany({
      where: {
        boardId: boardId,
      },
      include: {
        cards: {
          orderBy: {
            title: "asc",
          },
        },
      },
      orderBy: {
        title: "asc",
      },
    })

    return lists
  } catch (err: any) {
    return null
  }
}

export default getBoardLists;
