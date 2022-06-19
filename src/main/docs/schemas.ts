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
  DeleteExerciciosParamsSchema,
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
  createExercicioParams: CreateExerciciosParamsSchema,
  deleteExercicioParams: DeleteExerciciosParamsSchema,
  
}
