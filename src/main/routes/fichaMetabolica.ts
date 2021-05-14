import { Router } from "express";
import { adaptRouter } from "../expressAdapter/expressAdapter";
import { MakeFichaMetabolicaController } from "../factories/controller/fichaMetabolicaControllerFactory";


export default (router: Router): void => {

    router.post('/fichaMetabolica/Calcular', adaptRouter(MakeFichaMetabolicaController()))
}