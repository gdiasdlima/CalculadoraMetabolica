import { getRepository } from "typeorm";
import { IPessoaRepository } from "../../data/contracts/repositories/pessoa";
import { Pessoa } from "../../data/entities/pessoa";

export class PessoaRepository implements IPessoaRepository {


    async create(user: Pessoa): Promise<Pessoa> {
        const userRepository = getRepository(Pessoa)

        return await userRepository.save(user)
    }

    async update(pessoa: Pessoa): Promise<void> {
        const pessoaRepository = getRepository(Pessoa);

        const { id } = pessoa

        await pessoaRepository.update({ id }, pessoa)
    }

    async findByCPF(cpf: string): Promise<Pessoa> {
        const pessoaRepository = getRepository(Pessoa);
        const pessoa = await pessoaRepository.findOne({ where: { cpf } });

        return pessoa;
    }

    async findByID(id: number): Promise<Pessoa> {
        const pessoaRepository = getRepository(Pessoa)
        const pessoa = await pessoaRepository.findOne({ where: { id }, relations: ['atividadeFisica'] });
        return pessoa;
    }

}