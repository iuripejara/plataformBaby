import {Nunito,Lora} from "next/font/google"
import IdadeFornatada from "./caculadoraIdade"
const nunito = Nunito({
    weight:"600",
    subsets:["latin"],
   
})
const lora = Lora({
    weight:"400",
    subsets:["latin"],
   
})

export default function DadosBaby () {
    const dataDeNascimentoDoBebe  = "2025-06-19";
    return(
        <div className={`py-5 flex flex-col justify-center items-center shadow-2xl ${lora.className} `}>
            {/* Nome */}
            <div className="pb-2">
                <p className={`text-gray-500 text-md mb-1 ${nunito.className} `}>My baby's name is</p>
                <h1 className="text-3xl text-center font-bold text-gray-900 ">Ivy</h1>
            </div>
            
            <div className="pb-4 gap-2.5 grid grid-cols-2 text-center items-center ">
                {/* Ano */}
                <div className="pb-2">
                    <p className={`text-gray-500 text-sm ${nunito.className}`}>Idade</p>
                    <h1 className="text-shadow-md text-md font-semibold text-pink-400"><IdadeFornatada dataNacimento={dataDeNascimentoDoBebe }/></h1>
                </div>
                {/* Genero */}
                <div className="pb-2">
                    <p className={`text-gray-500 text-sm mb-1 ${nunito.className}`}>Genero</p>
                    <p className="text-shadow-md text-md font-semibold text-pink-400 ">Girl</p>
                </div>
            </div>
        </div>
    )
}