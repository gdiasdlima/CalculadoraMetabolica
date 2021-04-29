import { PessoaModel } from "../entities/pessoa";

export interface IPessoaRepository {
    create(user: PessoaModel): Promise<PessoaModel>
    update(user: PessoaModel): Promise<void>;
    findByCPF(cpf : string) : Promise<PessoaModel>;

}