import { GetRefeicaoModel } from "../models/getRefeicaoModel";

export interface GetRefeicaoUseCase {
    get(data : GetRefeicaoModel): Promise<any>
}