import { SignUpService } from "../../../data/services/signUp"
import { Bcrypt } from "../../../infra/cryptography/bcrypts"
import { LoginRepository } from "../../../infra/repositories/signUpRepository"
import { CreateLoginController } from "../../../presentation/controllers/createLoginController"
import { makeSignUpValidator } from "../validations/signUpValidatorFactory"

export const makeCreateLoginController = (): CreateLoginController => {
    const bcrypt = new Bcrypt()
    const loginRepository = new LoginRepository()
    const signUpService = new SignUpService(bcrypt, loginRepository)
    return new CreateLoginController(makeSignUpValidator(), signUpService)
}