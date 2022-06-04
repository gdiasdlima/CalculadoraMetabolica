export interface GetAlimentosByIDUseCase {
    getByID(id: number): Promise<any>
}