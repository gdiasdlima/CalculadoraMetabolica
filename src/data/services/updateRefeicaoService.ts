import { UpdatePessoaModel } from "../../domain/models/UpdatePessoaModel";
import { UpdateRefeicaoModel } from "../../domain/models/updateRefeicaoModel";
import { UpdatePessoaUseCase } from "../../domain/useCases/updatePessoaUseCase";
import { UpdateRefeicaoUseCase } from "../../domain/useCases/updateRefeicaoUseCase";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
import { IRefeicaoRepository } from "../contracts/repositories/refeicao";
import { Objetivo } from "../entities/objetivo";
import { Pessoa } from "../entities/pessoa";
import { Refeicao } from "../entities/refeicao";
import { TipoRefeicao } from "../entities/tipoRefeicao";

export class UpdateRefeicaoService implements UpdateRefeicaoUseCase {

    constructor(
        private readonly pessoaRepository: IPessoaRepository,
        private readonly refeicaoRepository: IRefeicaoRepository
    ) { }

    async update(data: UpdateRefeicaoModel): Promise<any> {

        const AlreadyPessoa = await this.pessoaRepository.findByID(data.idPessoa);
        console.log(data)
        if (!AlreadyPessoa) {
            return new NotFoundError('pessoa');
        }

        const AlreadyRefeicao = await this.refeicaoRepository.findByID(data.idRefeicao);
        if (!AlreadyRefeicao) {
            return new NotFoundError('Refeicao');
        }
        
        const refeicao = new Refeicao
        refeicao.tipoRefeicao = new TipoRefeicao()
        refeicao.pessoa = new Pessoa()
        refeicao.pessoa.id = data.idPessoa
        refeicao.id = data.idRefeicao
        refeicao.kcal = data.kcal ? data.kcal : AlreadyRefeicao.kcal
        refeicao.tipoRefeicao.id = data.idTipoRefeicao ? data.idTipoRefeicao : AlreadyRefeicao.tipoRefeicao.id
        refeicao.carb = data.carb ? data.carb : AlreadyRefeicao.carb
        refeicao.proteina = data.proteina ? data.proteina : AlreadyRefeicao.proteina
        refeicao.gordura = data.gordura ? data.gordura : AlreadyRefeicao.gordura
        refeicao.gramas = data.gramas ? data.gramas : AlreadyRefeicao.gramas
        refeicao.data_refeicao = data.dataRefeicao ? data.dataRefeicao : AlreadyRefeicao.data_refeicao
        const response = await this.refeicaoRepository.update(refeicao)
        console.log(response)
        return response
    }
}