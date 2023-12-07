import getBoard from "@/actions/getBoard";
import getBoardLists from "@/actions/getBoardLists";
import { ListContainer } from "@/components/list-container";
import { db } from "@/lib/db";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
};

const BoardIdPage = async ({
  params,
}: BoardIdPageProps) => {
  const board = await getBoard(params.boardId)
  // console.log(board)
  // const lists = await getBoardLists(params.boardId)
  // console.log(lists)
  const lists = await db.list.findMany({
    where: {
      boardId: params.boardId,
    },
    include: {
      cards: {
        orderBy: {
          title: "asc",
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="p-4 h-full overflow-x-auto">
        Board Name: {board?.title} (ID: {params.boardId})
      </div>
      <ListContainer data={lists} boardId={params.boardId} />
    </div>
  );
};

export default BoardIdPage;
