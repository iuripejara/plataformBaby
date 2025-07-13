import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";



const prisma = new PrismaClient();

export async function POST(req: Request) {
    
    const body = await req.json();

    const { peso, data_peso } = body;

    if (!peso || !data_peso) {
        return NextResponse.json({ error: "Datos invalidos" }, { status: 400 });
    }

    try{
        const novoPeso = await prisma.peso.create({
            data: {
                peso: peso.toString(),
                data_peso: new Date(data_peso)
            }
        });
        return NextResponse.json(novoPeso)
    }catch(error){
        return NextResponse.json({ error: "Erro ao inserir peso", details: error }, { status:500 })
    }
}

export async function GET() {
    const prisma = new PrismaClient();
    const pesos = await prisma.peso.findMany({
        orderBy: { data_peso: "asc" },
    });
    return NextResponse.json(pesos);
}
