import { SignUpService } from "../../../data/services/signUp"
import { Bcrypt } from "../../../infra/cryptography/bcrypts"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { LoginRepository } from "../../../infra/repositories/signUpRepository"
import { SignUpController } from "../../../presentation/controllers/signUpController"
import { makeSignUpValidator } from "../validations/signUpValidatorFactory"

export const makeCreateLoginController = (): SignUpController => {
    const bcrypt = new Bcrypt()
    const loginRepository = new LoginRepository()
    const pessoaRepository = new PessoaRepository()
    const signUpService = new SignUpService(bcrypt, loginRepository, pessoaRepository)
    return new SignUpController(makeSignUpValidator(), signUpService)
}