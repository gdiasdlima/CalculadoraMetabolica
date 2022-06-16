import { GetAllRefeicaoService } from "../../../data/services/getAllRefeicaoService"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { RefeicaoRepository } from "../../../infra/repositories/refeicaoRepository"
import { GetAllRefeicaoController } from "../../../presentation/controllers/getAllRefeicaoController"
import { makeGetAllRefeicaoValidator } from "../validations/getAllRefeicaoController"

export const MakeGetAllRefeicaoControllerFactory = (): GetAllRefeicaoController => {
    const pessoaRepository = new PessoaRepository()
    const refeicaoRepository = new RefeicaoRepository()
    const getAllRefeicaoService = new GetAllRefeicaoService(refeicaoRepository, pessoaRepository)
    return new GetAllRefeicaoController(makeGetAllRefeicaoValidator(), getAllRefeicaoService)
}