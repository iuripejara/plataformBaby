-- CreateTable
CREATE TABLE "Peso" (
    "Id" SERIAL NOT NULL,
    "peso" INTEGER NOT NULL,
    "data_peso" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Peso_pkey" PRIMARY KEY ("Id")
);
