import { Router } from "express";
import { adaptRouter } from "../expressAdapter/expressAdapter";
import { calculoMetabolicoController } from "../factories/controller/calculoMetabolicoControllerFactory";


export default (router: Router): void => {

    router.post('/CalculoMetabolico/Calcular', adaptRouter(calculoMetabolicoController()))
}