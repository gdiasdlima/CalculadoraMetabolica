export const FichaMetabolicaParamsSchema = {
    type: 'object',
    properties: {
      id: {
        type: 'integer'
      },
      idPessoa: {
        type: 'integer'
      },
      tmb: {
        type: 'integer'
      },
      imc: {
        type: 'number'
      },
      proteina: {
        type: 'integer'
      },
      carboidrato: {
        type: 'integer'
      },
      gordura: {
        type: 'integer'
      },
      gastoSemanal: {
        type: 'integer'
      },
      percentualGordura: {
        type: 'integer'
      },
      dataCalculo: {
        type: 'string',
        format: 'date'
      },
      diasObjetivo: {
        type: 'integer'
      }
    }
}
  