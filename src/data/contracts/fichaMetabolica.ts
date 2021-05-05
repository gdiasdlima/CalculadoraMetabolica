import { FichaMetabolica } from "../entities/fichaMetabolica";

export interface IFichaMetabolica {
    create(data: FichaMetabolica): Promise<FichaMetabolica>
    findByIDPessoa(idPessoa: number) : Promise<FichaMetabolica>;
    update(data: FichaMetabolica): Promise<void>;
}