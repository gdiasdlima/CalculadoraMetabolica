export const DeleteRefeicaoParamsSchema = {
    type: 'object',
    properties: {
      idPessoa: {
        type: 'number'
      },
      idTipoRefeicao: {
        type: 'number'
      },
      idRefeicao: {
        type: 'number'
      },
      dataRefeicao: {
        type: 'string',
        format: 'date'
      },

    },
    required: ['idPessoa', 'idTipoRefeicao', 'dataRefeicao']
  }
  