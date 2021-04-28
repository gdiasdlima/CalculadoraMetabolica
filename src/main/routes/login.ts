import { Router } from "express";
import { adaptRouter } from "../expressAdapter/expressAdapter";
import { makeCreateLoginController } from "../factories/controller/createLoginControllerFactory";
import { makeSignInController } from "../factories/controller/signInControllerFactory";


export default (router: Router): void => {

    router.post('/login/createLogin', adaptRouter(makeCreateLoginController()))

    router.post('/login/signIn',adaptRouter(makeSignInController()))
}