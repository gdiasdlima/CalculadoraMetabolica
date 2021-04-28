import { Router } from "express";
import { adaptRouter } from "../expressAdapter/expressAdapter";
import { makeCreateLoginController } from "../factories/controller/createLoginControllerFactory";


export default (router: Router): void => {

    router.post('/createLogin', adaptRouter(makeCreateLoginController()))
}