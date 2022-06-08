import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { MakeGetAllTipoConquistaController } from "../factories/controller/getAllTipoConquistaControllerFactory";


export default (router: Router): void => {

    router.get('/tipoConquista/GetAll', adaptRouter(MakeGetAllTipoConquistaController()))

}