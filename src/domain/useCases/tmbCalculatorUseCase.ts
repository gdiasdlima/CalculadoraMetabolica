export interface TMBCalculatorUseCase {
    calculate(idPessoa: number): Promise<any>
}