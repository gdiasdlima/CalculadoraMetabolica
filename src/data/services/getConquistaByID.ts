import { GetAlimentosByIDUseCase } from "../../domain/useCases/getAlimentosByIDUseCase";
import { GetConquistaByIDUseCase } from "../../domain/useCases/getConquistaByIDUseCase";
import { AlimentoRepository } from "../../infra/repositories/alimentoRepository";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IConquistaRepository } from "../contracts/repositories/conquista";
import { IPessoaRepository } from "../contracts/repositories/pessoa";

export class GetConquistaByIDService implements GetConquistaByIDUseCase {

    constructor(
        private readonly conquistaRepository: IConquistaRepository,
        private readonly pessoaRepository: IPessoaRepository,
    ) { }

    async getByID(id: number): Promise<any> {

        const pessoa = await this.pessoaRepository.findByID(id);
        if (!pessoa) {
            return new NotFoundError('Pessoa não encontrada')
        }

        const conquista = await this.conquistaRepository.findByIDPessoa(pessoa.id);
        if (!conquista) {
            throw new NotFoundError('Conquista nao existe')
        }

        return conquista
    }

}