"use client";

import { ListWithCards } from "@/types";
import { List } from "@prisma/client";
import { ListObject } from "./list-object";
import { ListAdd } from "./list-add";

interface ListContainerProps {
  data: ListWithCards[];
};

export const ListContainer = ({
  data,
}: ListContainerProps) => {

  return (
    <div className="flex">
      {data.map((list: ListWithCards) => (
        <ListObject key={list.id} data={list} />
      ))}
      <ListAdd />
    </div>
  )
}
