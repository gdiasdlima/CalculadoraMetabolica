export const GetRefeicaoParamsSchema = {
    type: 'object',
    properties: {
      idPessoa: {
        type: 'number'
      },
      idTipoRefeicao: {
        type: 'number'
      },
      dataRefeicao: {
        type: 'string',
        format: 'date'      }
    },
    required: ['idPessoa', 'idTipoRefeicao', 'dataRefeicao']
  }
  