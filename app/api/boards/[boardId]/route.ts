import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface IParams {
  boardId?: string;
}

// API to DELETE a user by its id
export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const { boardId } = params

    const deletedBoard = await db.board.delete({
      where: {
        id: boardId,
      },
    });

    return NextResponse.json(deletedBoard)
  } catch (err: any) {
    console.log("Board delete error", err)
    return new NextResponse("Internal server error", { status: 500 });
  }
}
