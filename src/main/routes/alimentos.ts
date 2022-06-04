import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { MakeGetAlimentoByIDController } from "../factories/controller/getAlimentoByIDControllerFactory";


export default (router: Router): void => {

    router.get('/alimentos/GetByID', adaptRouter(MakeGetAlimentoByIDController()))

}