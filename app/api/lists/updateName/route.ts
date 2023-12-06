import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// API to update the list's name
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
    const newList = await db.list.update({
      where: {
        id: data.id,
      },
      data: {
        title: newTitle,
      }
    });
    return NextResponse.json(newList)
  } catch (err) {
    console.log("Title update error", err)
    return new NextResponse('Internal Error', { status: 500 })
  }
}