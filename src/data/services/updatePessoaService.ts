import { UpdatePessoaModel } from "../../domain/models/UpdatePessoaModel";
import { UpdatePessoaUseCase } from "../../domain/useCases/updatePessoaUseCase";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
import { Objetivo } from "../entities/objetivo";
import { Pessoa } from "../entities/pessoa";

export class UpdatePessoaService implements UpdatePessoaUseCase {

    constructor(
        private readonly pessoaRepository: IPessoaRepository,
    ) { }

    async update(data: UpdatePessoaModel): Promise<any> {

        const Alreadypessoa = await this.pessoaRepository.findByID(data.idPessoa);

        if (Alreadypessoa) {
            return new NotFoundError('pessoa');
        }

        const pessoa = new Pessoa()
        pessoa.objetivo = new Objetivo()
        pessoa.nome = data.nome
        pessoa.data_nascimento = data.dataNascimento
        pessoa.peso_atual = data.pesoAtual
        pessoa.telefone = 'nao'
        pessoa.cpf = 'nao'
        pessoa.sexo = data.sexo
        pessoa.objetivo.id = data.objetivo
        pessoa.peso_objetivo = data.pesoObj
        const response = await this.pessoaRepository.update(pessoa)

        return response
    }
}