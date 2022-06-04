import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { MakeFichaMetabolicaController } from "../factories/controller/fichaMetabolicaControllerFactory";
import { MakeGetFichaMetabolicaController } from "../factories/controller/getFichaMetabolicaControllerFactory";


export default (router: Router): void => {

    router.post('/fichaMetabolica/Calcular', adaptRouter(MakeFichaMetabolicaController()))
    router.get('/fichaMetabolica/Get', adaptRouter(MakeGetFichaMetabolicaController()))

}