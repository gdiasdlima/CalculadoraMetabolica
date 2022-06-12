import { SignInService } from "../../../data/services/signInService"
import { Bcrypt } from "../../../infra/cryptography/bcrypts"
import { LoginRepository } from "../../../infra/repositories/LoginRepository"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { SignInController } from "../../../presentation/controllers/signInController"
import { makeSignInValidator } from "../validations/signInValidatorFactory"

export const makeSignInController = (): SignInController => {
    const loginRepository = new LoginRepository()
    const bcryptProvider = new Bcrypt()
    const pessoaRepository = new PessoaRepository()
    const signInService = new SignInService(loginRepository, bcryptProvider, pessoaRepository)
    return new SignInController(makeSignInValidator(), signInService)
}