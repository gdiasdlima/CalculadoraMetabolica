import { CreateRefeicaoService } from "../../../data/services/createRefeicaoService"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { RefeicaoRepository } from "../../../infra/repositories/refeicaoRepository"
import { CreateRefeicaoController } from "../../../presentation/controllers/createRefeicaoController"

export const makeCreateRefeicaoControllerFactory = (): CreateRefeicaoController => {
    const pessoaRepository = new PessoaRepository()
    const refeicaoRepository = new RefeicaoRepository()
    const getRefeicaoService = new CreateRefeicaoService(refeicaoRepository, pessoaRepository)
    return new CreateRefeicaoController(null, getRefeicaoService)
}