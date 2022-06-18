import { DeleteRefeicalmodel } from '../../domain/models/deleteRefeicaoModel'
import { DeleteRefeicaoUseCase } from '../../domain/useCases/deleteRefeicaoUseCase'
import { PessoaRepository } from '../../infra/repositories/pessoaRepository'
import { NotFoundError } from '../../presentation/errors/notFoundError'
import { IRefeicaoRepository } from '../contracts/repositories/refeicao'
import { Pessoa } from '../entities/pessoa'
import { Refeicao } from '../entities/refeicao'
import { TipoRefeicao } from '../entities/tipoRefeicao'

export class DeleteRefeicaoService implements DeleteRefeicaoUseCase {
    constructor(private readonly refeicaoRepository: IRefeicaoRepository,
        private readonly pessoaRepository: PessoaRepository
    ) { }
    async delete(data: DeleteRefeicalmodel): Promise<void | Error> {
        const alreadyExist = await this.refeicaoRepository.findByID(data.idRefeicao)
        if (!alreadyExist) {
            return new NotFoundError('Refeicao')
        }
        const AlreadyPessoa = await this.pessoaRepository.findByID(data.idPessoa)
        if (!AlreadyPessoa) {
            return new NotFoundError('Pessoa')
        }
        const refeicao = new Refeicao()
        refeicao.pessoa = new Pessoa()
        refeicao.tipoRefeicao = new TipoRefeicao()
        refeicao.pessoa.id = data.idPessoa
        refeicao.tipoRefeicao.id = data.idTipoRefeicao
        refeicao.data_refeicao = data.dataRefeicao
        refeicao.id = data.idRefeicao
        await this.refeicaoRepository.delete(refeicao)
    }
}
