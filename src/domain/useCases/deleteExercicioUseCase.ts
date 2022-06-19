export interface DeleteExercicioUseCase {
    delete(id: number): Promise<any>
}