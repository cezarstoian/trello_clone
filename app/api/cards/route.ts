import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// API to create a new card
export async function POST(
  request: Request,
) {
  try {
    const body = await request.json()
    const {
      title,
      description,
      listId,
    } = body;

    const newCard = await db.card.create({
      data: {
        title: title,
        description: description,
        listId: listId
      }
    });
    
    return NextResponse.json(newCard)
  } catch (err) {
    console.log("Card create error", err)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
