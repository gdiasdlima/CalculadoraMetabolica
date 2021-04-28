import { CreateLoginService } from "../../../data/services/CreateLogin"
import { Bcrypt } from "../../../infra/cryptography/bcrypts"
import { LoginRepository } from "../../../infra/repositories/loginRepository"
import { CreateLoginController } from "../../../presentation/controllers/createLogin"

export const makeCreateLoginController = (): CreateLoginController => {
    const bcrypt = new Bcrypt(12)
    const loginRepository = new LoginRepository()
    const loginService = new CreateLoginService(bcrypt, loginRepository)
    return new CreateUserController(makeCreateUserValidator(), loginService)
}