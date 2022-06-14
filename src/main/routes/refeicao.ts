import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeCreateRefeicaoControllerFactory } from "../factories/controller/createRefeicaoControllerFactory";
import { makeGetRefeicaoControllerFactory } from "../factories/controller/getRefeicaoControllerFactory";


export default (router: Router): void => {

    router.get('/refeicao/Get', adaptRouter(makeGetRefeicaoControllerFactory()))
    router.post('/refeicao/Create', adaptRouter(makeCreateRefeicaoControllerFactory()))

}