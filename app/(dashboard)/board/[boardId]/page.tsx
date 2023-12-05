interface BoardIdPageProps {
  params: {
    boardId: string;
  };
};

const BoardIdPage = async ({
  params,
}: BoardIdPageProps) => {
  return (
    <div className="p-4 h-full overflow-x-auto">
      ID: {params.boardId}
    </div>
  );
};

export default BoardIdPage;
