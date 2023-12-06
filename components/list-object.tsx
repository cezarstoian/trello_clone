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
    <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 mb-4 bg-gray-300 mr-4">
      <div>
        {data.title}
      </div>
      <CardContainer data={data.cards} />
    </div>
  );
};
