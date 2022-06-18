export const UpdateRefeicaoParamsSchema = {
    type: 'object',
    properties: {
      idPessoa: {
        type: 'number'
      },
      idRefeicao: {
        type: 'number'
      },
      dataRefeicao: {
        type: 'string',
        format: 'date'
      },
      idTipoRefeicao: {
        type: 'number'
      },
      kcal: {
        type: 'number'
      },
      carb: {
        type: 'number'
      },
      gordura: {
        type: 'number'
      },
      proteina: {
        type: 'number'
      },
      gramas: {
        type: 'number'
      },
    },
    required: ['idPessoa', 'idTipoRefeicao', 'dataRefeicao', 'kcal', 'carb', 'proteina', 'gordura']
  }
  