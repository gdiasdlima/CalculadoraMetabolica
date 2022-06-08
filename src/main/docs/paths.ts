import {
  signInPath,
  signUpPath,
  fichaMetabolicaPath,
  getFichaMetabolicaPath,
  getAlimentosByIDPath,
  getAllAlimentosPath,
  getAllTipoConquistaPath
} from './paths/'

export default {
  '/login/signIn': signInPath,
  '/login/signUp': signUpPath,
  '/fichaMetabolica/Calcular': fichaMetabolicaPath,
  '/fichaMetabolica/Get': getFichaMetabolicaPath,
  '/alimentos/getByID': getAlimentosByIDPath,
  '/alimentos/getAll': getAllAlimentosPath,
  '/tipoConquista/GetAll': getAllTipoConquistaPath
}
