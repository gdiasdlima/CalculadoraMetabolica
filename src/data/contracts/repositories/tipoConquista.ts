import { TipoConquista } from "../../entities/tipoConquista";

export interface ITipoConquistaRepository {
    create(data: TipoConquista): Promise<TipoConquista>
    findByID(idPessoa: number) : Promise<TipoConquista>;
    update(data: TipoConquista): Promise<void>;
    getAll(): Promise<TipoConquista[]>

}