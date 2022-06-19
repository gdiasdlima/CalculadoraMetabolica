export const UpdateExerciciosParamsSchema = {
    type: 'object',
    properties: {
      id: {
        type: 'number'
      },
      idPessoa: {
        type: 'number'
      },
      idTipoExercicio: {
        type: 'number'
      },
      kcalGastas: {
        type: 'number'
      },
      tempo: {
        type: 'number'
      },
      dataExercicio: {
        type: 'number'
      }
    },
    required: ['id']
  }
  