import { GetAllRefeicaoModel } from "../../domain/models/getAllRefeicaoModel";
import { GetAllRefeicaoUseCase } from "../../domain/useCases/getAllRefeicaoUseCase";
import { RefeicaoRepository } from "../../infra/repositories/refeicaoRepository";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { UnauthorizedError } from "../../presentation/errors/unauthorizedError";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
import { IRefeicaoRepository } from "../contracts/repositories/refeicao";
import { Pessoa } from "../entities/pessoa";
import { Refeicao } from "../entities/refeicao";

export class GetAllRefeicaoService implements GetAllRefeicaoUseCase {

    constructor(
        private readonly refeicaoRepository: IRefeicaoRepository,
        private readonly pessoaRepository: IPessoaRepository,

    ) { }

    async getAll(data: GetAllRefeicaoModel): Promise<any> {

        const pessoa = await this.pessoaRepository.findByID(data.idPessoa);
        if (!pessoa) {
            return new UnauthorizedError()
        }
   
        const refeicao = new Refeicao()
        refeicao.pessoa = new Pessoa()
        refeicao.pessoa.id = data.idPessoa
        refeicao.data_refeicao = new Date(data.dataRefeicao)
        const reponse = await this.refeicaoRepository.getAllRefeicao(refeicao)
        console.log(data)
        console.log(refeicao)
        console.log(reponse[0])
        return reponse

    }

}