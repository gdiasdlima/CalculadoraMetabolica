import { GetAllTipoExercicioUseCase } from "../../domain/useCases/getAllTipoExercicioUseCase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { serverError, success, unauthorized  } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class GetAllTipoExercicioController implements Controller {
    constructor(private readonly getAllTipoExercicioUseCase: GetAllTipoExercicioUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const exercicios = await this.getAllTipoExercicioUseCase.getAll()

            if (exercicios instanceof NotFoundError || exercicios instanceof UnauthorizedError) {
                return unauthorized()
            }

            return success(exercicios)

        } catch (error) {
            return serverError()
        }
    }
}