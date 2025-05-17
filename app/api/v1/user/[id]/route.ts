import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  return new Response(
    JSON.stringify({
      message: "Detail User GET Response",
      data: {
        id: id,
        name: "John Doe",
      }
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
