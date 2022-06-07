export interface GetConquistaByIDUseCase {
    getByID(id: number): Promise<any>
}