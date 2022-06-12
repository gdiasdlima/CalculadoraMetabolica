export interface GetRefeicaoByIDUseCase {
    getByID(id: number): Promise<any>
}