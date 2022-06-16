export const UpdatePessoaParamsSchema = {
    type: 'object',
    properties: {
        idPessoa: {
            type: 'string'
          },
      nome: {
        type: 'string'
      },
      dataNascimento: {
        type: 'string',
        format: 'date'
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
  