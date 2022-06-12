export interface GetRefeicaoUseCase {
    getByID(idPessoa: number, idTipoRefeicao: number, data: Date): Promise<any>
}