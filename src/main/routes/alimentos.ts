import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { MakeGetAlimentoByIDController } from "../factories/controller/getAlimentoByIDControllerFactory";
import { MakeGetAllAlimentosController } from "../factories/controller/getAllAlimentosControllerFactory";


export default (router: Router): void => {

    router.get('/alimentos/getByID', adaptRouter(MakeGetAlimentoByIDController()))
    router.get('/alimentos/getAll', adaptRouter(MakeGetAllAlimentosController()))

}