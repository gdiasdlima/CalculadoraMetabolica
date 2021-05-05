import { getRepository } from "typeorm";
import { IPessoaRepository } from "../../data/contracts/pessoaRepository";
import { PessoaModel } from "../../data/entities/pessoa";

export class PessoaRepository implements IPessoaRepository {


    async create(user: PessoaModel): Promise<PessoaModel> {
        const userRepository = getRepository(PessoaModel)

        return await userRepository.save(user)
    }

    async update(pessoa: PessoaModel): Promise<void> {
        const pessoaRepository = getRepository(PessoaModel);

        const { id } = pessoa

        await pessoaRepository.update({ id }, pessoa)
    }

    async findByCPF(cpf: string): Promise<PessoaModel> {
        const pessoaRepository = getRepository(PessoaModel);
        const pessoa = await pessoaRepository.findOne({ where: { cpf } });

        return pessoa;
    }

    async findByID(id: number): Promise<PessoaModel> {
        const pessoaRepository = getRepository(PessoaModel)
        const pessoa = await pessoaRepository.findOne({ where: { id } });
        return pessoa;
    }

}