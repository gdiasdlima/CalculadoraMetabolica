import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { MakeFichaMetabolicaController } from "../factories/controller/fichaMetabolicaControllerFactory";


export default (router: Router): void => {

    router.post('/fichaMetabolica/Calcular', adaptRouter(MakeFichaMetabolicaController()))
}