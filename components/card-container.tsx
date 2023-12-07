"use client";

import { Card } from "@prisma/client";
import { CardObject } from "./card-object";
import { CardAdd } from "./card-add";


interface CardContainerProps {
  data: Card[],
  listId: string
};

export const CardContainer = ({
  data,
  listId,
}: CardContainerProps) => {
  // console.log(data)
  // console.log(listId)
  
  return (
    <div>
      {data.map((card) => (
        <CardObject key={card.id} data={card} />
      ))}
      <CardAdd listId={listId} />
    </div>
  )
}
