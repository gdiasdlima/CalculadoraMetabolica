import { SignInService } from "../../../data/services/signIn"
import { Bcrypt } from "../../../infra/cryptography/bcrypts"
import { LoginRepository } from "../../../infra/repositories/loginRepository"

export const makeSignInController = (): SignInController => {
    const loginRepository = new LoginRepository()
    const bcryptProvider = new Bcrypt()
    const signInService = new SignInService(loginRepository, bcryptProvider)
    return new SignInController(makeSignInValidator(), signInService)
}