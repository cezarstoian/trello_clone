"use client";

import { Card } from "@prisma/client";
import { CardObject } from "./card-object";
import { CardAdd } from "./card-add";


interface CardContainerProps {
  data: Card[];
};

export const CardContainer = ({
  data,
}: CardContainerProps) => {
  return (
    <div>
      {data.map((card) => (
        <CardObject key={card.id} data={card} />
      ))}
      <CardAdd />
    </div>
  )
}
