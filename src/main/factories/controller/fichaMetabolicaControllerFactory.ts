import { FichaMetabolicaService } from "../../../data/services/FichaMetabolicaService"
import { RetornarIdade } from "../../../infra/helpers/retornarIdade"
import { FichaMetabolicaRepository } from "../../../infra/repositories/fichaMetabolica"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { FichaMetabolicaController } from "../../../presentation/controllers/fichaMetabolicaController"
import { makeFichaMetabolicaValidator } from "../validations/fichaMetabolicaValidatorFactory"

export const MakeFichaMetabolicaController = (): FichaMetabolicaController => {
    const pessoaRepository = new PessoaRepository()
    const retornarIdade = new RetornarIdade()
    const fichaMetabolicaRepository = new FichaMetabolicaRepository()
    const fichaMetabolicaService = new FichaMetabolicaService(pessoaRepository, retornarIdade, fichaMetabolicaRepository)
    return new FichaMetabolicaController(makeFichaMetabolicaValidator(), fichaMetabolicaService)
}