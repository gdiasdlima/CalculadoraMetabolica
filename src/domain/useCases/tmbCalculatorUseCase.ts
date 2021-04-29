import { TMBCalculatorModel } from "../models/tmbCalculatorModel";

export interface TMBCalculatorUseCase {
    calcular(premissas: TMBCalculatorModel): Promise<any>
}