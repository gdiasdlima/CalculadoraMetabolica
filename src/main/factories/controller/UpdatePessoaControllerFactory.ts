import { SignUpService } from "../../../data/services/signUpService"
import { Bcrypt } from "../../../infra/cryptography/bcrypts"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { LoginRepository } from "../../../infra/repositories/LoginRepository"
import { makeSignUpValidator } from "../validations/signUpValidatorFactory"
import { RetornarIdade } from "../../../infra/helpers/retornarIdade"
import { FichaMetabolicaRepository } from "../../../infra/repositories/fichaMetabolica"
import { UpdatePessoaController } from "../../../presentation/controllers/UpdatePessoaController"
import { UpdatePessoaService } from "../../../data/services/updatePessoaService"

export const MakeUpdatePessoaController = (): UpdatePessoaController => {
    const pessoaRepository = new PessoaRepository()
    const updatePessoaService = new UpdatePessoaService(pessoaRepository)
    return new UpdatePessoaController(null, updatePessoaService)
}