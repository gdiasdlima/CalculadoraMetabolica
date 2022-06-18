export const CreateRefeicaoParamsSchema = {
    type: 'object',
    properties: {
      idPessoa: {
        type: 'number'
      },
      idTipoRefeicao: {
        type: 'number'
      },
      idAlimento: {
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
  