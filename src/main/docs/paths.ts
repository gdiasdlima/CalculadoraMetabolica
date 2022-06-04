import {
  signInPath,
  signUpPath,
  fichaMetabolicaPath,
  getFichaMetabolicaPath,
  getAlimentosByIDPath
} from './paths/'

export default {
  '/login/signIn': signInPath,
  '/login/signUp': signUpPath,
  '/fichaMetabolica/Calcular': fichaMetabolicaPath,
  '/fichaMetabolica/Get': getFichaMetabolicaPath,
  '/alimentos/getByID': getAlimentosByIDPath
}
