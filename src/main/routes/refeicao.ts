import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { makeGetRefeicaoControllerFactory } from "../factories/controller/getRefeicaoControllerFactory";


export default (router: Router): void => {

    router.post('/refeicao/Get', adaptRouter(makeGetRefeicaoControllerFactory()))

}