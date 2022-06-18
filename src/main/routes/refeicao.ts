import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeCreateRefeicaoControllerFactory } from "../factories/controller/createRefeicaoControllerFactory";
import { MakeDeleteRefeicaoControllerFactory } from "../factories/controller/deleteRefeicaoControllerFactory";
import { MakeGetAllRefeicaoControllerFactory } from "../factories/controller/getAllRefeicaoControllerFactory";
import { makeGetRefeicaoControllerFactory } from "../factories/controller/getRefeicaoControllerFactory";
import { MakeUpdateRefeicaoControllerFactory } from "../factories/controller/updateRefeicaoControllerFactory";


export default (router: Router): void => {

    router.get('/refeicao/Get', adaptRouter(makeGetRefeicaoControllerFactory()))
    router.post('/refeicao/Create', adaptRouter(makeCreateRefeicaoControllerFactory()))
    router.get('/refeicao/GetAll', adaptRouter(MakeGetAllRefeicaoControllerFactory()))
    router.post('/refeicao/Delete', adaptRouter(MakeDeleteRefeicaoControllerFactory()))
    router.put('/refeicao/Update', adaptRouter(MakeUpdateRefeicaoControllerFactory()))

}