import { Router } from "express";
import { adaptRouter } from "../adapters/express-controller-adapter";
import { MakeUpdatePessoaController } from "../factories/controller/UpdatePessoaControllerFactory";

export default (router: Router): void => {

    router.put('/pessoa/Update', adaptRouter(MakeUpdatePessoaController()))

}