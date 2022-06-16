import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { UpdatePessoaController } from "../../../presentation/controllers/UpdatePessoaController"
import { UpdatePessoaService } from "../../../data/services/updatePessoaService"
import { makeUpdatePessoaValidator } from "../validations/updatePessoaValidatorFactory"

export const MakeUpdatePessoaController = (): UpdatePessoaController => {
    const pessoaRepository = new PessoaRepository()
    const updatePessoaService = new UpdatePessoaService(pessoaRepository)
    return new UpdatePessoaController(makeUpdatePessoaValidator(), updatePessoaService)
}