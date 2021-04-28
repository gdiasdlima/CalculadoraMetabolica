import { CreateLoginService } from "../../../data/services/createLogin"
import { Bcrypt } from "../../../infra/cryptography/bcrypts"
import { LoginRepository } from "../../../infra/repositories/loginRepository"
import { CreateLoginController } from "../../../presentation/controllers/createLoginController"
import { makeCreateLoginValidator } from "../validations/createLoginValidatorFactory"

export const makeCreateLoginController = (): CreateLoginController => {
    const bcrypt = new Bcrypt()
    const loginRepository = new LoginRepository()
    const loginService = new CreateLoginService(bcrypt, loginRepository)
    return new CreateLoginController(makeCreateLoginValidator(), loginService)
}