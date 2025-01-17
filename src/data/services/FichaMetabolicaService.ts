import { FichaMetabolicaUseCase } from "../../domain/useCases/fichaMetabolicaUseCase";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IFichaMetabolicaRepository } from "../contracts/repositories/fichaMetabolica";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
import { FichaMetabolica } from "../entities/fichaMetabolica";
import { Pessoa } from "../entities/pessoa";
import { IRetornarIdade } from "../helpers/IRetornarIdade";

export class FichaMetabolicaService implements FichaMetabolicaUseCase {

    constructor(
        private readonly pessoaRepository: IPessoaRepository,
        private retornarIdade: IRetornarIdade,
        private fichaMetabolicaRepository: IFichaMetabolicaRepository 

    ) { }

    async calculate(idPessoa: number): Promise<any> {

        const pessoa = await this.pessoaRepository.findByID(idPessoa);
        if (!pessoa) {
            return new NotFoundError('pessoa')
        }

        const idade = this.retornarIdade.retornar(new Date(pessoa.data_nascimento), new Date())

        let tmb, ndc, imc, percentual

        if (pessoa.sexo === "M") {
            tmb = (10 * pessoa.peso_atual) + (6.25 * pessoa.altura) - (5 * idade) + 5
            percentual = 64 - (20 * pessoa.altura / pessoa.circunferencia)

        } else if (pessoa.sexo === "F") {
            tmb = (10 * pessoa.peso_atual) + (6.25 * pessoa.altura) - (5 * idade) - 161
            percentual = 76 - (20 * pessoa.altura / pessoa.circunferencia)

        }

        switch (pessoa.atividadeFisica.id) {
            case 1:
                ndc = tmb * 1.2
                break;
            case 2:
                ndc = tmb * 1.375
                break;
            case 3:
                ndc = tmb * 1.55

                break;
            case 4:
                ndc = tmb * 1.725
                break;
            case 5:
                ndc = tmb * 1.9
                break;
        }

        imc = parseFloat(((pessoa.peso_atual / (pessoa.altura * pessoa.altura)) * 10000).toFixed(2))
        percentual = parseFloat(percentual.toFixed(2))

        const ficha = new FichaMetabolica()
        ficha.pessoa = new Pessoa()
        ficha.pessoa.id = pessoa.id
        ficha.tmb = tmb
        ficha.ndc = ndc
        ficha.imc = imc
        ficha.gasto_semanal = ndc * 7
        ficha.percentual_gordura = parseInt(percentual)
        ficha.data_calculo = new Date()
        
        

        await this.fichaMetabolicaRepository.create(ficha)
        return ficha 
    }

}