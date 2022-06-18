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
      dataRefeicao: {
        type: 'string',
        format: 'date' 
      }
    },
    required: ['idPessoa', 'idTipoRefeicao', 'dataRefeicao', 'kcal', 'carb', 'proteina', 'gordura', 'dataRefeicao']
  }
  