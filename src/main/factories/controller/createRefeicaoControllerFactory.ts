import { CreateRefeicaoService } from "../../../data/services/createRefeicaoService"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { RefeicaoRepository } from "../../../infra/repositories/refeicaoRepository"
import { CreateRefeicaoController } from "../../../presentation/controllers/createRefeicaoController"
import { makeCreateRefeicaoValidator } from "../validations/createRefeicaoValidatorFactory"

export const makeCreateRefeicaoControllerFactory = (): CreateRefeicaoController => {
    const pessoaRepository = new PessoaRepository()
    const refeicaoRepository = new RefeicaoRepository()
    const createRefeicaoService = new CreateRefeicaoService(refeicaoRepository, pessoaRepository)
    return new CreateRefeicaoController(makeCreateRefeicaoValidator(), createRefeicaoService)
}