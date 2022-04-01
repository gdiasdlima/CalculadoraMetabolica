import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { MakeSignUpController } from "../factories/controller/signUpControllerFactory";
import { makeSignInController } from "../factories/controller/signInControllerFactory";


export default (router: Router): void => {

    router.post('/login/signUp', adaptRouter(MakeSignUpController()))

    router.post('/login/signIn',adaptRouter(makeSignInController()))
}