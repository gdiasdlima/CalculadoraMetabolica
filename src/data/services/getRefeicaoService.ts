import { GetRefeicaoModel } from "../../domain/models/getRefeicaoModel";
import { GetRefeicaoUseCase } from "../../domain/useCases/getRefeicaoUseCase";
import { RefeicaoRepository } from "../../infra/repositories/refeicaoRepository";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IPessoaRepository } from "../contracts/repositories/pessoa";

export class GetRefeicaoService implements GetRefeicaoUseCase {

    constructor(
        private readonly refeicaoRepository: RefeicaoRepository,
        private readonly pessoaRepository: IPessoaRepository,

    ) { }

    async get(data: GetRefeicaoModel): Promise<any> {


        const pessoa = await this.pessoaRepository.findByID(data.idPessoa);
        if (!pessoa) {
            return new NotFoundError('pessoa')
        }

        const refeicao = await this.refeicaoRepository.findByRefeicao(data)

        return refeicao
    }

}