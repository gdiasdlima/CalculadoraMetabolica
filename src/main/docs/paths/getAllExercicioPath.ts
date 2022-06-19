export const getAllExercicioPath = {
    get: {
      tags: ['Exercicio'],
      summary: 'API para controle de exercicios',
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
  