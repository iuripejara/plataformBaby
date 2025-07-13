"use client";
import { useState } from "react"
import {Nunito} from "next/font/google"

const nunito = Nunito({
    weight:"600",
    subsets:["latin"],
   
})

type InvoProps = {
    className : string,
    textInf : string,
    onNovoPesoAdicionado : () =>void ;
}

export default function Buntton ({className,textInf,onNovoPesoAdicionado} : InvoProps){
    const [ open, setOpen ] =  useState(false);
    const [peso, setPeso] = useState("")
    const [dataPeso, setDataPeso] = useState("")

    async function handleSubmit() {
        if (!peso || !dataPeso) {
            alert("Preencha todos os campos");
            return
        }

        try {
            const res = await fetch("/api/peso",{
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({
                    peso: peso.toString(),
                    data_peso: dataPeso
                })
            });

            if (res.ok) {
                alert("Peso adicionado com sucesso!");
                setPeso("");
                setDataPeso("");
                setOpen(false);
                if (onNovoPesoAdicionado) {
                    onNovoPesoAdicionado();
                }
            }else{
                const error = await res.json();
                alert ("Erro ao adicionar peso: " + error?.error);
            }
        }catch(error){
            alert("Erro ao enviar os dados.")
            console.error(error)
        }
    }
    
    return (
        <div>
            <button
                onClick={()=> setOpen(true) } className={className}
            >
                {textInf}
            </button>
            {
                open &&(
                    <div className="fixed inset-0  flex items-center justify-center z-50 " >
                        <div className=" p-6 bg-pink-100 rounded shadow-2xl w-96">
                            <h2 className="text-xl font-bold mb-4">Adicionar Peso</h2>

                            <div className={`space-y-3.5 ${nunito.className}`}>
                                <div> 
                                    <label>Data do peso: </label>
                                
                                    <input 
                                        type="date"
                                        value={dataPeso}
                                        onChange={(e) => setDataPeso(e.target.value)} 
                                    />
                                </div>
                                <div>
                                    <label>Peso(kg): </label>
                                
                                    <input 
                                        type="number"
                                        value={peso}
                                        onChange={(e) => setPeso(e.target.value)}
                                        step="0.01"
                                        className="
                                                border border-zinc-950 outline outline-pink-300 rounded-sm p-1.5
                                            "
                                        />
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className={`
                                        text-md mt-5 mb-3 w-full bg-white text-pink-600 border
                                        border-pink-300 px-4 py-2 rounded-md hover:bg-pink-200 transition-colors ${nunito.className}
                                    `}
                                >
                                Enviar
                            </button>


                            <button 
                                onClick={()=> setOpen(false)}
                                 className="
                                    absolute top-[325px] right-10
                                    mt-2 px-4 py-2 text-black text-2xl 
                                "
                            >
                                X
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
        
    )
}