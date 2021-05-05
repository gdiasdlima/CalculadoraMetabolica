import { FichaMetabolicaService } from "../../../data/services/FichaMetabolicaService"
import { RetornarIdade } from "../../../infra/helpers/retornarIdade"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { FichaMetabolicaController } from "../../../presentation/controllers/fichaMetabolica"
import { makeFichaMetabolicaValidator } from "../validations/fichaMetabolicaValidatorFactory"

export const MakeFichaMetabolicaController = (): FichaMetabolicaController => {
    const pessoaRepository = new PessoaRepository()
    const retornarIdade = new RetornarIdade()
    const fichaMetabolicaService = new FichaMetabolicaService(pessoaRepository, retornarIdade)
    return new FichaMetabolicaController(makeFichaMetabolicaValidator(), fichaMetabolicaService)
}