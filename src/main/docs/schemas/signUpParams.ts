export const signUpParamsSchema = {
  type: 'object',
  properties: {
    nome: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    telefone: {
      type: 'string'
    },
    cpf: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    dataNascimento: {
      type: 'string',
      format: 'date'
    },
    peso: {
      type: 'number'
    },
    altura: {
      type: 'integer'
    },
    sexo: {
      type: 'string'
    },
    atividadeFisica: {
      type: 'integer'
    },
    objetivo: {
      type: 'integer'
    },
    circunferencia: {
      type: 'integer'
    },
    pesoObjetivo: {
      type: 'number'
    }
  },
  required: ['nome', 'email', 'telefone', 'cpf', 'password', 'dataNascimento', 'peso', 'altura', 'sexo', 'atividadeFisica', 'objetivo', 'circunferencia', 'pesoObjetivo']
}
