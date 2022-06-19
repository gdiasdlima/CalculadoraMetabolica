import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { MakeCreateExercicioControllerFactory } from "../factories/controller/createExercicioControllerFactory";
import { MakeDeleteExercicioControllerFactory } from "../factories/controller/deleteExercicioControllerFactory";
import { MakeGetAllExercicioControllerFactory } from "../factories/controller/getAllExercicioControllerFactory";
import { MakeGetExercicioControllerFactory } from "../factories/controller/getExercicioControllerFactory";
import { MakeUpdateExercicioControllerFactory } from "../factories/controller/updateExercicioControllerFactory";


export default (router: Router): void => {

    router.get('/exercicio/Get', adaptRouter(MakeGetExercicioControllerFactory()))
    router.post('/exercicio/Create', adaptRouter(MakeCreateExercicioControllerFactory()))
    router.get('/exercicio/GetAll', adaptRouter(MakeGetAllExercicioControllerFactory()))
    router.post('/exercicio/Delete', adaptRouter(MakeDeleteExercicioControllerFactory()))
    router.put('/exercicio/Update', adaptRouter(MakeUpdateExercicioControllerFactory()))

}