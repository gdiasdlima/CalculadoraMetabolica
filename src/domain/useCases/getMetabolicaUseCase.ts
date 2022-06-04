export interface GetFichaMetabolicaUseCase {
    getByID(idPessoa: number): Promise<any>
}