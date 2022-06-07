import { Conquista } from "../../entities/conquista";

export interface IConquistaRepository {
    create(data: Conquista): Promise<Conquista>
    findByIDPessoa(idPessoa: number) : Promise<Conquista>;
    update(data: Conquista): Promise<void>;
}