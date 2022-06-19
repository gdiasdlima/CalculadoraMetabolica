import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { MakeGetAllTipoExercicioController } from "../factories/controller/getAllTipoExercicioControllerFactory";


export default (router: Router): void => {

    router.get('/tipoExercicio/GetAll', adaptRouter(MakeGetAllTipoExercicioController()))

}