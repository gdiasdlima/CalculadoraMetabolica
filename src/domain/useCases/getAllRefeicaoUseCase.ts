import { GetAllRefeicaoModel } from "../models/getAllRefeicaoModel";

export interface GetAllRefeicaoUseCase {
    getAll(data: GetAllRefeicaoModel): Promise<any>
}