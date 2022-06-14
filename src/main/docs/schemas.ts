import {
  signInParamsSchema,
  signUpParamsSchema,
  FichaMetabolicaParamsSchema,
  GetRefeicaoParamsSchema,
  CreateRefeicaoParamsSchema
} from './schemas/'

export default {
  signUpParams: signUpParamsSchema,
  signInParams: signInParamsSchema,
  fichaMetabolicaParams: FichaMetabolicaParamsSchema,
  getRefeicaoParams: GetRefeicaoParamsSchema,
  createRefeicaoParams: CreateRefeicaoParamsSchema
}
