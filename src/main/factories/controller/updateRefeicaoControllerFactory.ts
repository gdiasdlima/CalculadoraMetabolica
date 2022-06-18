import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { UpdateRefeicaoController } from "../../../presentation/controllers/updateRefeicaoController"
import { UpdateRefeicaoService } from "../../../data/services/updateRefeicaoService"
import { RefeicaoRepository } from "../../../infra/repositories/refeicaoRepository"
import { makeUpdateRefeicaoValidator } from "../validations/updateRefeicaoControllerFactory"

export const MakeUpdateRefeicaoController = (): UpdateRefeicaoController => {
    const pessoaRepository = new PessoaRepository()
    const refeicaoRepository = new RefeicaoRepository()
    const updateRefeicaoSerice = new UpdateRefeicaoService(pessoaRepository, refeicaoRepository)
    return new UpdateRefeicaoController(makeUpdateRefeicaoValidator(), updateRefeicaoSerice)
}