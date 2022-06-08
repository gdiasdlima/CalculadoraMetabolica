import { GetConquistaByIDService } from "../../../data/services/getConquistaByID"
import { ConquistaRepository } from "../../../infra/repositories/conquistaRepository"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { GetConquistaByIDController } from "../../../presentation/controllers/getConquistaByIDController"
import { makeGetConquistaByIDValidator } from "../validations/getConquistaByIDValidatorFactory"

export const MakeGetConquistaByIDController = (): GetConquistaByIDController => {
    const conquistaRepository = new ConquistaRepository()
    const pessoaRepository = new PessoaRepository()
    const getConquistaByIDService = new GetConquistaByIDService(conquistaRepository, pessoaRepository)
    return new GetConquistaByIDController(makeGetConquistaByIDValidator(), getConquistaByIDService)
}