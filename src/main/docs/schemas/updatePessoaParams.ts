export const UpdatePessoaParamsSchema = {
  type: 'object',
  properties: {
    idPessoa: {
      type: 'number'
    },
    nome: {
      type: 'string'
    },
    pesoAtual: {
      type: 'number'
    },
    sexo: {
      type: 'string'
    },
    objetivo: {
      type: 'integer'
    },
    pesoObj: {
      type: 'number'
    }
  },
  required: ['idPessoa']
}
