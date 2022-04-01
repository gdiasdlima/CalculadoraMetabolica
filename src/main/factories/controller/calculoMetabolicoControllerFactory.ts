import { CalculoMetabolicoService } from "../../../data/services/CalculoMetabolicoService"
import { FichaMetabolicaRepository } from "../../../infra/repositories/fichaMetabolica"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { CalculoMetabolicoController } from "../../../presentation/controllers/calculoMetabolicoController"
import { makeFichaMetabolicaValidator } from "../validations/fichaMetabolicaValidatorFactory"

export const calculoMetabolicoController = (): CalculoMetabolicoController => {
    const pessoaRepository = new PessoaRepository()
    const fichaMetabolicaRepository = new FichaMetabolicaRepository()
    const fichaMetabolicaService = new CalculoMetabolicoService(pessoaRepository, fichaMetabolicaRepository)
    return new CalculoMetabolicoController(makeFichaMetabolicaValidator(), fichaMetabolicaService)
}