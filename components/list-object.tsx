"use client";

import { ListWithCards } from "@/types";
import { CardContainer } from "./card-container";


interface ListObjectProps {
  data: ListWithCards;
};

export const ListObject = ({
  data,
}: ListObjectProps) => {
  // console.log(data)
  return (
    <div className="flex-shrink-0 w-64 p-4 bg-gray-200 mr-4">
      <div>{data.title}</div>
      <CardContainer data={data.cards} />
    </div>
  );
};
