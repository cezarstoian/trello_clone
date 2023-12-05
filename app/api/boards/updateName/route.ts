import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// API to update the board's name
export async function POST(
  request: Request,
) {
  try {
    const body = await request.json()
    const {
      data,
      newTitle,
    } = body;

    console.log(data)
    console.log(newTitle)
    const newBoard = await db.board.update({
      where: {
        id: data.id,
      },
      data: {
        title: newTitle,
      }
    });
    return NextResponse.json(newBoard)
  } catch (err) {
    console.log("Title update error", err)
    return new NextResponse('Internal Error', { status: 500 })
  }
}