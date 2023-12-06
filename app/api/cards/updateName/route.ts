import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// API to update the card's name
export async function POST(
  request: Request,
) {
  try {
    const body = await request.json()
    const {
      data,
      newTitle,
      newDescription,
    } = body;

    console.log(data)
    console.log(newTitle)
    console.log(newDescription)
    
    const newCard = await db.card.update({
      where: {
        id: data.id,
      },
      data: {
        title: newTitle,
        description: newDescription
      }
    });
    return NextResponse.json(newCard)
  } catch (err) {
    console.log("Card update error", err)
    return new NextResponse('Internal Error', { status: 500 })
  }
}