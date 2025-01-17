import { UpdatePessoaModel } from "../models/UpdatePessoaModel";

export interface UpdatePessoaUseCase {
    update(data: UpdatePessoaModel): Promise<any>
}