import { CreateRefeicaoModel } from "../../domain/models/createRefeicaoModel";
import { CreateRefeicaoUseCase } from "../../domain/useCases/createRefeicaoUseCase";
import { RefeicaoRepository } from "../../infra/repositories/refeicaoRepository";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
import { Pessoa } from "../entities/pessoa";
import { Refeicao } from "../entities/refeicao";
import { TipoRefeicao } from "../entities/tipoRefeicao";

export class CreateRefeicaoService implements CreateRefeicaoUseCase {

    constructor(
        private readonly refeicaoRepository: RefeicaoRepository,
        private readonly pessoaRepository: IPessoaRepository,

    ) { }

    async create(data: CreateRefeicaoModel): Promise<any> {
        
        console.log(data)
        const pessoa = await this.pessoaRepository.findByID(data.idPessoa);
        if (!pessoa) {
            return new NotFoundError('pessoa')
        }

        const refeicao = new Refeicao()
        refeicao.pessoa = new Pessoa()
        refeicao.tipoRefeicao = new TipoRefeicao()
        refeicao.pessoa.id = data.idPessoa
        refeicao.carb = data.carb
        refeicao.gordura = data.gordura
        refeicao.kcal = data.kcal
        refeicao.proteina = data.proteina
        refeicao.data_refeicao = new Date()
        refeicao.tipoRefeicao.id = data.idTipoRefeicao
        await this.refeicaoRepository.create(refeicao)

        return refeicao
    }

}