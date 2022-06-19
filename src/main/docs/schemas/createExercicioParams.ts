export const CreateExerciciosParamsSchema = {
    type: 'object',
    properties: {
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
    required: ['idPessoa']
  }
  