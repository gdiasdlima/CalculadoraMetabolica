import { UpdateRefeicaoModel } from "../models/updateRefeicaoModel";

export interface UpdateRefeicaoUseCase {
    update(data: UpdateRefeicaoModel): Promise<any>
}