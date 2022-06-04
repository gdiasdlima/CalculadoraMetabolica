import { GetFichaMetabolicaService } from "../../../data/services/getFichaMetabolicaService"
import { FichaMetabolicaRepository } from "../../../infra/repositories/fichaMetabolica"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { GetFichaMetabolicaController } from "../../../presentation/controllers/getFichaMetabolicaController"
import { makeGetFichaMetabolicaValidator } from "../validations/getFichaMetabolicaValidatorFactory"

export const MakeGetFichaMetabolicaController = (): GetFichaMetabolicaController => {
    const pessoaRepository = new PessoaRepository()
    const fichaMetabolicaRepository = new FichaMetabolicaRepository()
    const getFichaMetabolicaService = new GetFichaMetabolicaService(pessoaRepository, fichaMetabolicaRepository)
    return new GetFichaMetabolicaController(makeGetFichaMetabolicaValidator(), getFichaMetabolicaService)
}