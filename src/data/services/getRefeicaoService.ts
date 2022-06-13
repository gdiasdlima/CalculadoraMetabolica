import { GetRefeicaoUseCase } from "../../domain/useCases/getRefeicaoUseCase";
import { RefeicaoRepository } from "../../infra/repositories/refeicaoRepository";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
import { Pessoa } from "../entities/pessoa";
import { Refeicao } from "../entities/refeicao";

export class GetRefeicaoService implements GetRefeicaoUseCase {

    constructor(
        private readonly refeicaoRepository: RefeicaoRepository,
        private readonly pessoaRepository: IPessoaRepository,

    ) { }

    async get(data: Refeicao): Promise<any> {


        const pessoa = await this.pessoaRepository.findByID(data.pessoa.id);
        if (!pessoa) {
            return new NotFoundError('pessoa')
        }

        const refeicao = await this.refeicaoRepository.findByIDPessoa(data)

        return refeicao
    }

}