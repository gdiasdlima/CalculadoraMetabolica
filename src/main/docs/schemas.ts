import {
  signInParamsSchema,
  signUpParamsSchema,
  FichaMetabolicaParamsSchema,
  GetRefeicaoParamsSchema,
  CreateRefeicaoParamsSchema,
  UpdatePessoaParamsSchema,
  UpdateRefeicaoParamsSchema,
  DeleteRefeicaoParamsSchema,
  CreateExerciciosParamsSchema,
} from './schemas/'

export default {
  signUpParams: signUpParamsSchema,
  signInParams: signInParamsSchema,
  fichaMetabolicaParams: FichaMetabolicaParamsSchema,
  getRefeicaoParams: GetRefeicaoParamsSchema,
  createRefeicaoParams: CreateRefeicaoParamsSchema,
  updatePessoaParams: UpdatePessoaParamsSchema,
  updateRefeicaoParams: UpdateRefeicaoParamsSchema,
  deleteRefeicaoParams: DeleteRefeicaoParamsSchema,
  createExercicioParams: CreateExerciciosParamsSchema
}
