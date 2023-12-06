import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface IParams {
  listId?: string;
}

// API to DELETE a list by its id
export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const { listId } = params

    const deletedList = await db.list.delete({
      where: {
        id: listId,
      },
    });

    return NextResponse.json(deletedList)
  } catch (err: any) {
    console.log("List delete error", err)
    return new NextResponse("Internal server error", { status: 500 });
  }
}
