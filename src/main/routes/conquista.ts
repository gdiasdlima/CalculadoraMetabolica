import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { MakeGetConquistaByIDController } from "../factories/controller/getConquistaByIDControllerFactory";


export default (router: Router): void => {

    router.get('/conquista/GetbyID', adaptRouter(MakeGetConquistaByIDController()))

}