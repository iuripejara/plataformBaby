"use client"
import {LineChart,Line, CartesianGrid, XAxis, YAxis, Tooltip} from "recharts"
import {Nunito,Lora} from "next/font/google"
import Buntton from "./button"

const nunito = Nunito({
    weight:"600",
    subsets:["latin"],
   
})
const lora = Lora({
    weight:"400",
    subsets:["latin"],
   
})


type PesoBaby = {
    data : string,
    peso : number
};

type PesoProps = {
    pesogeral : PesoBaby[],
    onNovoPesoAdicionado : () =>void ;
}

export default function GraficoSimpges({pesogeral,onNovoPesoAdicionado} :PesoProps){
    return(
        <div className="flex justify-center items-center mt-10 p-2 ">
            <div 
                className="
                
                    bg-pink-100 w-[380px] rounded-2xl p-4 shadow-lg shadow-gray-600
                "
            >
                <h1 
                    className={`text-2xl text-zinc-700 text-center mb-4 gap-2 ${lora.className}`}
                >
                    Peso da <span className="text-pink-500">Ivy</span>
                </h1>
                
                    <LineChart width={350} height={200} data={pesogeral} >
                        <CartesianGrid stroke="#030000" />
                        <XAxis dataKey="data"/>
                        <YAxis/>
                        <Tooltip/>
                        <Line type="bump" dataKey="peso" stroke="#030000" />
                    </LineChart>
               
                

                <div className="flex justify-center">
                    <Buntton
                        
                        className={`
                            text-md mt-5 mb-3  bg-white text-pink-600 border
                            border-pink-300 px-4 py-2 rounded-md hover:bg-pink-200 transition-colors ${nunito.className}
                        `}
                        textInf=" Adicionar peso"
                        onNovoPesoAdicionado={onNovoPesoAdicionado}
                    />
                </div>
            </div>
        </div>
        
    )    
}