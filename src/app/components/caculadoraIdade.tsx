"use client";

type idadeProps = {
  dataNacimento :string
}

export default function IdadeFornatada({dataNacimento}: idadeProps){

    function calcularIdadeFormatada (dataNasc: string): string {
        const hoje = new Date();
        const nacimento = new Date(dataNasc)

         // Validação básica para datas inválidas
        if (isNaN(nacimento.getTime())) {
            return "Data invalida"
        }

        // Calcular a diferença em milissegundos
        const diffMs = hoje.getTime() - nacimento.getTime();

        // Se a data de nascimento for no futuro, retorna 0 dias ou uma mensagem apropriada
        if (diffMs < 0 ) {
            return `0 dias`;
        }

        //  --- Cálculo de Anos, Meses e Dias ---
        let anos = hoje.getFullYear() - nacimento.getFullYear();
        let meses = hoje.getMonth() - nacimento.getMonth();
        let dias = hoje.getDate() - nacimento.getDate();

       
        // Ajusta os dias se o dia atual for menor que o dia de nascimento
        if(dias < 0) {
            meses--;// Subtrai um mês
            // Calcula o número de dias no mês anterior ao mês atual
            const ultimoDiaMesAnterior = new Date(
                hoje.getFullYear(),
                hoje.getMonth(),//mes atual
                0// Dia 0 do mês atual é o último dia do mês anterior
            ).getDate();
            dias = ultimoDiaMesAnterior + dias // Adiciona os dias restantes do mês anterior
        }

        if (meses < 0 ) {
            anos-- // Subtrai um ano
            meses += 12 // Adiciona 12 meses
        }

        // --- Formatação da Saída ---
        const formatarPlural = (valor:number,unidadeSingular:string,unidadePlural: string) => {
            return `${valor} ${valor === 1 ? unidadeSingular : unidadePlural}`
        }
        if (anos > 0 ) {
            // Se tiver anos, mostra anos e meses
            if (meses > 0) {
                return `${formatarPlural(anos, "ano", "anos")} e ${formatarPlural(meses, "mês", "meses")}`
            }
            return formatarPlural(anos, "ano", "anos");
        }else if (meses > 0) {
        // Se não tiver anos, mas tiver meses, mostra meses e dias
      if (dias > 0) {
        return `${formatarPlural(meses, "mês", "meses")} e ${formatarPlural(dias, "dia", "dias")}`;
      }
      return formatarPlural(meses, "mês", "meses");
    } else {
      // Se não tiver anos nem meses, mostra apenas dias
      return formatarPlural(dias, "dia", "dias");
    }
  }
  return (
    <p className="text-lg font-semibold text-pink-400">
      {calcularIdadeFormatada(dataNacimento)}
    </p>
  );
}