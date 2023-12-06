"use client";

import { Card } from "@prisma/client";


interface CardObjectProps {
  data: Card;
};

export const CardObject = ({
  data,
}: CardObjectProps) => {
  return (
    <div className="bg-white p-2 mb-2 rounded border border-gray-300 hover:bg-gray-400 cursor-pointer transition duration-300 justify-center flex">
      <div>{data.title}</div>
    </div>
  )
}
