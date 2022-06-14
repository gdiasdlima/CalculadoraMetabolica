import { GetRefeicaoService } from "../../../data/services/getRefeicaoService"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { RefeicaoRepository } from "../../../infra/repositories/refeicaoRepository"
import { GetRefeicaoController } from "../../../presentation/controllers/getRefeicaoController"
import { makeGetRefeicaoValidator } from "../validations/GetRefeicaoValidatorFactory"

export const makeGetRefeicaoControllerFactory = (): GetRefeicaoController => {
    const pessoaRepository = new PessoaRepository()
    const refeicaoRepository = new RefeicaoRepository()
    const getRefeicaoService = new GetRefeicaoService(refeicaoRepository, pessoaRepository)
    return new GetRefeicaoController(makeGetRefeicaoValidator(), getRefeicaoService)
}