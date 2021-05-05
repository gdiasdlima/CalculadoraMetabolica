export interface FichaMetabolicaUseCase {
    calculate(idPessoa: number): Promise<any>
}