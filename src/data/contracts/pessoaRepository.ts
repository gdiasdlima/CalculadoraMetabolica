import { PessoaModel } from "../models/pessoa";

export interface IPessoaRepository {
    create(user: PessoaModel): Promise<PessoaModel>
    update(user: PessoaModel): Promise<void>;
}