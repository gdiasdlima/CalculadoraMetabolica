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
        console.log(data)
        if (!Alreadypessoa) {
            return new NotFoundError('pessoa');
        }

        const pessoa = new Pessoa()
        pessoa.objetivo = new Objetivo()
        pessoa.id = data.idPessoa
        pessoa.nome = data.nome ? data.nome : Alreadypessoa.nome
        pessoa.data_nascimento = data.dataNascimento ? data.dataNascimento : Alreadypessoa.data_nascimento 
        pessoa.peso_atual = data.pesoAtual ? data.pesoAtual : Alreadypessoa.peso_atual
        pessoa.sexo = data.sexo ? data.sexo : Alreadypessoa.sexo
        pessoa.objetivo.id = data.objetivo ? data.objetivo : Alreadypessoa.objetivo.id
        pessoa.peso_objetivo = data.pesoObj ? data.pesoObj : Alreadypessoa.peso_objetivo
        console.log(pessoa)
        const response = await this.pessoaRepository.update(pessoa)

        return response
    }
}