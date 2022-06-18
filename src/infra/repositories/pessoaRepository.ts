import { getRepository } from "typeorm";
import { IPessoaRepository } from "../../data/contracts/repositories/pessoa";
import { Pessoa } from "../../data/entities/pessoa";

export class PessoaRepository implements IPessoaRepository {


    async create(user: Pessoa): Promise<Pessoa> {
        const userRepository = getRepository(Pessoa)

        return await userRepository.save(user)
    }

    async update(pessoa: Pessoa): Promise<Pessoa> {
        console.log(pessoa)
        const pessoaRepository = getRepository(Pessoa);

        const { id } = pessoa
        delete pessoa.id
        await pessoaRepository.update({ id }, pessoa)
        const response = await pessoaRepository.findOne({ where: { id }, relations: ['atividadeFisica', 'objetivo'] });
        return response

    }

    async findByCPF(cpf: string): Promise<Pessoa> {
        const pessoaRepository = getRepository(Pessoa);
        const pessoa = await pessoaRepository.findOne({ where: { cpf } });

        return pessoa;
    }

    async findByID(id: number): Promise<Pessoa> {
        const pessoaRepository = getRepository(Pessoa)
        const pessoa = await pessoaRepository.findOne({ where: { id }, relations: ['atividadeFisica', 'objetivo'] });
        return pessoa;
    }

}