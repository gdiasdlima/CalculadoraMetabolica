import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { calculoMetabolicoController } from "../factories/controller/calculoMetabolicoControllerFactory";


export default (router: Router): void => {

    router.post('/CalculoMetabolico/Calcular', adaptRouter(calculoMetabolicoController()))
}