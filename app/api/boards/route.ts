import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// API to create a new board
export async function POST(
  request: Request,
) {
  try {
    const body = await request.json()
    const {
      title,
    } = body;

    const newBoard = await db.board.create({
      data: {
        title: title,
      }
    });
    
    return NextResponse.json(newBoard)
  } catch (err) {
    console.log("Board create error", err)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
