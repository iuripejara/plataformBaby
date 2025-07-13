"use client";

import { useEffect, useState } from "react";
import DadosBaby from "./components/dadosBaby";
import GraficoSimpges from "./components/graficoSimples";

type PesoBaby = {
  data: string;
  peso: number;
};

export default function Home() {
  const [pesogeral, setPesogeral] = useState<PesoBaby[]>([]);

  async function fetchPesos() {
    const res = await fetch("/api/peso", { cache: "no-store" });
    const data = await res.json();
    setPesogeral(
      data.map((p: any) => ({
        data: p.data_peso.split("T")[0],
        peso: parseFloat(p.peso),
      }))
    );
  }

  useEffect(() => {
    fetchPesos();
  }, []);

  return (
    <div className="bg-white rounded-t-lg">
      <div className="bg-amber-50 h-screen rounded-t-3xl relative overflow-hidden -mt-3">
        <DadosBaby />
        <GraficoSimpges
          pesogeral={pesogeral}
          onNovoPesoAdicionado={fetchPesos}
        />
      </div>
    </div>
  );
}
