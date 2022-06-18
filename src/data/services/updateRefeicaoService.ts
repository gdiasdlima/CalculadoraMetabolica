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

        const refeicao = new Refeicao
        refeicao.tipoRefeicao = new TipoRefeicao()
        refeicao.pessoa = new Pessoa()
        refeicao.pessoa.id = data.idPessoa
        refeicao.id = data.idRefeicao
        refeicao.carb = data.carb
        refeicao.proteina = data.proteina
        refeicao.gordura = data.gordura
        refeicao.gramas = data.gramas
        refeicao.data_refeicao = data.dataRefeicao
        console.log(refeicao)
        const response = await this.refeicaoRepository.update(refeicao)

        return response
    }
}