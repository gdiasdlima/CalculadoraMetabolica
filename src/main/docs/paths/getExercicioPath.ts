export const getExercicioPath = {
    get: {
      tags: ['Exercicio'],
      summary: 'API para controle de Exercicios',
      parameters: [{
        in: 'query',
        name: 'idPessoa',
        description: 'ID Da Pessoa',
        required: true,
        schema: {
          type: 'integer'
        }
      },
      {
        in: 'query',
        name: 'idTipoExercicio',
        description: 'ID do tipo de exercicio',
        schema: {
          type: 'integer'
        }
      },
      {
        in: 'query',
        name: 'kcalGastas',
        description: 'quantidade kcal gastas',
        schema: {
          type: 'integer'
        }
      },
      {
        in: 'query',
        name: 'tempo',
        description: 'Tempo gasto no exercicio',
        schema: {
          type: 'integer'
        }
      },
      {
        in: 'query',
        name: 'dataExercicio',
        description: 'data do exercicio',
        schema: {
          type: 'string',
          format: 'date'
        }
      }]
      ,
      responses: {
        200: {
          description: 'sucesso'
        }
      }
    }
  }
  