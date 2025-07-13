const { Prisma, PrismaClient } = require("../src/generated/prisma");

const prisma = new PrismaClient();

const pesoData = [
    {
        peso: new Prisma.Decimal("3.370"),
        data_peso: new Date("2025-06-19")
    },
    {
        peso: new Prisma.Decimal("3.355"),
        data_peso: new Date("2025-06-21")
    },
    {
        peso: new Prisma.Decimal("3.5"),
        data_peso: new Date("2025-06-23")
    },
    {
        peso: new Prisma.Decimal("4.150"), // Corrigido aqui!
        data_peso: new Date("2025-07-09")
    }
];

async function main() {
    console.log("Iniciado inserção de dados...");
    for (const data of pesoData) {
        try {
            await prisma.peso.create({ data: data });
            console.log(`Registro de peso Inserido: ${data.peso.toString()}`);
        } catch (error) {
            console.error(`Erro ao inserir o registro: ${data.peso.toString()}, Erro:`, error);
        }
    }
    await prisma.$disconnect();
    console.log("Inserção de dados concluída.");
}

main().catch((e) => {
    console.error("Erro inesperado", e);
    prisma.$disconnect();
    process.exit(1);
});
