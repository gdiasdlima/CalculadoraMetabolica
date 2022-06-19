import {
  signInPath,
  signUpPath,
  fichaMetabolicaPath,
  getFichaMetabolicaPath,
  getAlimentosByIDPath,
  getAllAlimentosPath,
  getAllTipoConquistaPath,
  getConquistaByIDPath,
  getRefeicaoPath,
  createRefeicaoPath,
  getAllRefeicaoPath,
  updatePessoaPath,
  updateRefeicaoPath,
  deleteRefeicaoPath,
  getAllTipoExercicioPath,
  createExercicioPath, 
  deleteExercicioPath,
  getExercicioPath,
  getAllExercicioPath,
  updateExercicioPath

} from './paths/'

export default {
  '/login/signIn': signInPath,
  '/login/signUp': signUpPath,
  '/fichaMetabolica/Calcular': fichaMetabolicaPath,
  '/fichaMetabolica/Get': getFichaMetabolicaPath,
  '/alimentos/getByID': getAlimentosByIDPath,
  '/alimentos/getAll': getAllAlimentosPath,
  '/tipoConquista/GetAll': getAllTipoConquistaPath,
  '/conquista/GetByID': getConquistaByIDPath,
  '/refeicao/Get': getRefeicaoPath,
  '/refeicao/Create': createRefeicaoPath,
  '/refeicao/GetAll': getAllRefeicaoPath,
  '/pessoa/Update': updatePessoaPath,
  '/refeicao/delete': deleteRefeicaoPath,
  '/refeicao/update': updateRefeicaoPath,
  '/tipoExercicio/getAll': getAllTipoExercicioPath,
  '/exercicio/create': createExercicioPath,
  '/exercicio/delete': deleteExercicioPath,
  '/exercicio/get': getExercicioPath,
  '/exercicio/getall': getAllExercicioPath,
  '/exercicio/update': updateExercicioPath

}
