import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// API to create a new list
export async function POST(
  request: Request,
) {
  try {
    const body = await request.json()
    const {
      title,
      boardId,
    } = body;

    const newList = await db.list.create({
      data: {
        title: title,
        boardId: boardId,
      }
    });
    
    return NextResponse.json(newList)
  } catch (err) {
    console.log("List create error", err)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
