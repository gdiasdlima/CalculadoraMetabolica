import { IRetornarIdade } from "../../data/helpers/IRetornarIdade"

export class RetornarIdade implements IRetornarIdade {

    retornar(dataNascimento: Date, dataAtual: Date): Number {

        var idade = 0
        const anoAtual = dataAtual.getFullYear()
        const anoNascimento = dataNascimento.getFullYear()

        const mesAtual = dataAtual.getMonth()
        const mesNascimento = dataNascimento.getMonth()

        const diaAtual = dataAtual.getDate()
        const diaNascimento = dataNascimento.getDate()

        idade = anoAtual - anoNascimento

        if (mesAtual < mesNascimento || diaAtual < diaNascimento)
            idade--

        return idade

    }
}