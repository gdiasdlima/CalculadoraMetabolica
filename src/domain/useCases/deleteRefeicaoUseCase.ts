import { DeleteRefeicalmodel } from "../models/deleteRefeicaoModel";

export interface DeleteRefeicaoUseCase {
    delete(data: DeleteRefeicalmodel): Promise<any>
}