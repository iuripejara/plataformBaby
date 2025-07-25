// app/api/peso/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { peso, data_peso } = body;

  if (!peso || !data_peso) {
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  }

  try {
    const novoPeso = await prisma.peso.create({
      data: {
        peso: peso.toString(),
        data_peso: new Date(data_peso),
      },
    });

    return NextResponse.json(novoPeso);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao inserir peso", details: `${error}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const pesos = await prisma.peso.findMany({
      orderBy: { data_peso: "asc" },
    });

    return NextResponse.json(pesos);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar pesos", details: `${error}` },
      { status: 500 }
    );
  }
}
