import { TMBCalculatorModel } from "../models/tmbCalculatorModel";

export interface TMBCalculatorUseCase {
    calculate(idPessoa: number): Promise<any>
}