import { Pessoa } from "../../data/entities/pessoa";

export interface UpdatePessoaUseCase {
    update(data: Pessoa): Promise<any>
}