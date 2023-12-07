"use client";

import { ListWithCards } from "@/types";
import { List } from "@prisma/client";
import { ListObject } from "./list-object";
import { ListAdd } from "./list-add";

interface ListContainerProps {
  data: ListWithCards[],
  boardId: string,
}

export const ListContainer = ({
  data,
  boardId,
}: ListContainerProps) => {

  return (
    <div className="flex flex-wrap overflow-auto">
      {data.map((list: ListWithCards) => (
        <ListObject key={list.id} data={list} />
      ))}
      <ListAdd boardId={boardId} />
    </div>
  )
}
