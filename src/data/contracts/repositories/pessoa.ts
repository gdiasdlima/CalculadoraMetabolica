import { Pessoa } from "../../entities/pessoa";

export interface IPessoaRepository {
    create(user: Pessoa): Promise<Pessoa>
    update(user: Pessoa): Promise<Pessoa>;
    findByCPF(cpf : string) : Promise<Pessoa>;
    findByID(id : number) : Promise<Pessoa>;
}