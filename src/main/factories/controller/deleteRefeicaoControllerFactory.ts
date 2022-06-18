import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { RefeicaoRepository } from "../../../infra/repositories/refeicaoRepository"
import { DeleteRefeicaoController } from "../../../presentation/controllers/deleteRefeicaoController"
import { DeleteRefeicaoService } from "../../../data/services/deleteRefeicaoService"
import { makeDeleteRefeicaoValidator } from "../validations/deleteRefeicaoControllerFactory"

export const MakeDeleteRefeicaoController = (): DeleteRefeicaoController => {
    const pessoaRepository = new PessoaRepository()
    const refeicaoRepository = new RefeicaoRepository()
    const deleteRefeicaoSerice = new DeleteRefeicaoService(refeicaoRepository, pessoaRepository)
    return new DeleteRefeicaoController(makeDeleteRefeicaoValidator(), deleteRefeicaoSerice)
}