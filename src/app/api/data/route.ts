import { NextResponse } from "next/server";
import daj from "@/daj/gateway.js";

export async function POST(request) {
  const { objName, obj } = await request.json();

  const res = await daj.postAsync(objName, json);

  return NextResponse.json(res);
}

export async function PUT(request) {
  const { objName, obj } = await request.json();

  const res = await daj.postAsync(objName, json);

  return NextResponse.json(res);
}

export async function DELETE(request) {
  const { objName, obj } = await request.json();

  const res = await daj.postAsync(objName, json);

  return NextResponse.json(res);
}
