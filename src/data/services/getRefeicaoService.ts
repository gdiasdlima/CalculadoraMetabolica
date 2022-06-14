import { GetRefeicaoModel } from "../../domain/models/getRefeicaoModel";
import { GetRefeicaoUseCase } from "../../domain/useCases/getRefeicaoUseCase";
import { RefeicaoRepository } from "../../infra/repositories/refeicaoRepository";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
import { Pessoa } from "../entities/pessoa";
import { Refeicao } from "../entities/refeicao";
import { TipoRefeicao } from "../entities/tipoRefeicao";

export class GetRefeicaoService implements GetRefeicaoUseCase {

    constructor(
        private readonly refeicaoRepository: RefeicaoRepository,
        private readonly pessoaRepository: IPessoaRepository,

    ) { }

    async get(data: GetRefeicaoModel): Promise<any> {

        console.log(data)

        const pessoa = await this.pessoaRepository.findByID(data.idPessoa);
        if (!pessoa) {
            return new NotFoundError('pessoa')
        }
        console.log('abv]c')
        const refeicao = new Refeicao()
        refeicao.pessoa = new Pessoa()
        refeicao.tipoRefeicao = new TipoRefeicao()
        refeicao.pessoa.id = data.idPessoa
        refeicao.tipoRefeicao.id = data.idPessoa
        refeicao.data_refeicao = new Date(data.dataRefeicao)
        const reponse = await this.refeicaoRepository.findByRefeicao(data)

        console.log(reponse)
        return reponse
    }

}