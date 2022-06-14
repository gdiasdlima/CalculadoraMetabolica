import { CreateRefeicaoModel } from "../models/createRefeicaoModel";

export interface CreateRefeicaoUseCase {
    create(data: CreateRefeicaoModel): Promise<any>
}