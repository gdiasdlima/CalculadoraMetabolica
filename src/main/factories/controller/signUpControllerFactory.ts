import { SignUpService } from "../../../data/services/signUpService"
import { Bcrypt } from "../../../infra/cryptography/bcrypts"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { LoginRepository } from "../../../infra/repositories/LoginRepository"
import { SignUpController } from "../../../presentation/controllers/signUpController"
import { makeSignUpValidator } from "../validations/signUpValidatorFactory"
import { RetornarIdade } from "../../../infra/helpers/retornarIdade"
import { FichaMetabolicaRepository } from "../../../infra/repositories/fichaMetabolica"

export const MakeSignUpController = (): SignUpController => {
    const bcrypt = new Bcrypt()
    const loginRepository = new LoginRepository()
    const pessoaRepository = new PessoaRepository()
    const retornarIdade = new RetornarIdade()
    const fichaMetabolicaRepository = new FichaMetabolicaRepository()
    const signUpService = new SignUpService(bcrypt, loginRepository, pessoaRepository, fichaMetabolicaRepository, retornarIdade)
    
    return new SignUpController(makeSignUpValidator(), signUpService)
}