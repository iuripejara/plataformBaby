import DadosBaby from "./components/dadosBaby";
import GraficoSimpges from "./components/graficoSimples";

const pesogeral = [
    {data: "2025-06-19",peso:3.370},
    {data: "2025-06-21", peso: 3.355},
    {data: "2025-06-23", peso: 3.5}
    
]

export default function Home() {
  return (
    <div className="bg-white rounded-t-lg">

   
      <div className="bg-amber-50 h-screen rounded-t-3xl relative overflow-hidden -mt-3">
        <DadosBaby/>
        <GraficoSimpges pesogeral={pesogeral}/>
      </div>
     </div>
  );
}
