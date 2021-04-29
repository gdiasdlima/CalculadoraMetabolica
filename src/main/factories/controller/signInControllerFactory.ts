import { SignInService } from "../../../data/services/signInService"
import { Bcrypt } from "../../../infra/cryptography/bcrypts"
import { LoginRepository } from "../../../infra/repositories/signUpRepository"
import { SignInController } from "../../../presentation/controllers/signInController"
import { makeSignInValidator } from "../validations/signInValidatorFactory"

export const makeSignInController = (): SignInController => {
    const loginRepository = new LoginRepository()
    const bcryptProvider = new Bcrypt()
    const signInService = new SignInService(loginRepository, bcryptProvider)
    return new SignInController(makeSignInValidator(), signInService)
}