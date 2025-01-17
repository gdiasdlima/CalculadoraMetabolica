import { GetRefeicaoModel } from "../../domain/models/getRefeicaoModel";
import { GetRefeicaoUseCase } from "../../domain/useCases/getRefeicaoUseCase";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
import { IRefeicaoRepository } from "../contracts/repositories/refeicao";
import { Pessoa } from "../entities/pessoa";
import { Refeicao } from "../entities/refeicao";
import { TipoRefeicao } from "../entities/tipoRefeicao";

export class GetRefeicaoService implements GetRefeicaoUseCase {

    constructor(
        private readonly refeicaoRepository: IRefeicaoRepository,
        private readonly pessoaRepository: IPessoaRepository,

    ) { }

    async get(data: GetRefeicaoModel): Promise<any> {


        const pessoa = await this.pessoaRepository.findByID(data.idPessoa);
        if (!pessoa) {
            return new NotFoundError('pessoa')
        }
        const refeicao = new Refeicao()
        refeicao.pessoa = new Pessoa()
        refeicao.tipoRefeicao = new TipoRefeicao()
        refeicao.pessoa.id = data.idPessoa
        refeicao.tipoRefeicao.id = data.idTipoRefeicao
        refeicao.data_refeicao = new Date(data.dataRefeicao)
        const reponse = await this.refeicaoRepository.findByRefeicao(refeicao)
        return reponse
    }

}