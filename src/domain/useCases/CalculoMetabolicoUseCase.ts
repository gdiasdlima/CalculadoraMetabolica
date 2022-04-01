export interface CalculoMetabolicoUseCase {
    calculate(idPessoa: number): Promise<any>
}