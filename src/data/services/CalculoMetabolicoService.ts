import { CalculoDiarioModel } from "../../domain/models/calculoDiarioModel";
import { CalculoMetabolicoUseCase } from "../../domain/useCases/CalculoMetabolicoUseCase";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IFichaMetabolicaRepository } from "../contracts/repositories/fichaMetabolica";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
export class CalculoMetabolicoService implements CalculoMetabolicoUseCase {

    constructor(
        private readonly pessoaRepository: IPessoaRepository,
        private readonly fichaMetabolicaRepository: IFichaMetabolicaRepository 
    ) { }

    async calculate(idPessoa: number): Promise<any> {

        const pessoa = await this.pessoaRepository.findByID(idPessoa);
        if (!pessoa) {
            return new NotFoundError('Pessoa não encontrada')
        }
        
        const ficha = await this.fichaMetabolicaRepository.findByIDPessoa(idPessoa)
        if (!ficha) {
            return new NotFoundError('Ficha não encontrada')
        }
        let calculoDiario: CalculoDiarioModel
        
        switch (pessoa.objetivo.id)
        {
            case 1 : calculoDiario.calorias_diaria =  ficha.ndc + ((pessoa.peso_objetivo - pessoa.peso_atual) * 7700) / ficha.dias_objetivo
            calculoDiario.carbo_diario = (4/pessoa.peso_atual)
            break;
            case 2 : calculoDiario.calorias_diaria =  ficha.ndc
            calculoDiario.carbo_diario = (2/pessoa.peso_atual)
            break;
            case 3 : calculoDiario.calorias_diaria =  ficha.ndc - ((pessoa.peso_objetivo - pessoa.peso_atual) * 7700) / ficha.dias_objetivo
            calculoDiario.carbo_diario = (2/pessoa.peso_atual)
            break;
        }

        calculoDiario.proteina_diaria = (2/pessoa.peso_atual)
        calculoDiario.gordura_diaria = (1/pessoa.peso_atual)

    }

}