import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface IParams {
  cardId?: string;
}

// API to DELETE a card by its id
export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const { cardId } = params

    const deletedCard = await db.card.delete({
      where: {
        id: cardId,
      },
    });

    return NextResponse.json(deletedCard)
  } catch (err: any) {
    console.log("Card delete error", err)
    return new NextResponse("Internal server error", { status: 500 });
  }
}
