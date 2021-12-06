export default {
  post: {
    tags: ['Products'],
    description: 'Create product',
    operationId: 'create',
    parameters: [
      {
        name: 'name',
        in: 'body',
        schema: {
          type: 'string',
          description: 'Designation of product',
          example: 'My Product',
        },
      },
      {
        name: 'designation',
        in: 'body',
        schema: {
          type: 'string',
          description: 'Designation of product',
          example: 'My Designation',
        },
      },
      {
        name: 'price',
        in: 'body',
        schema: {
          type: 'number',
          description: 'Price of product',
          example: '10000',
        },
      },
      {
        name: 'currentUnit',
        in: 'body',
        schema: {
          type: 'number',
          description: 'Current unit of product',
          example: '15',
        },
      },
      {
        name: 'recommendedUnit',
        in: 'body',
        schema: {
          type: 'number',
          description: 'Recommended quantity',
          example: '15',
        },
      },
      {
        name: 'securityAmount',
        in: 'body',
        schema: {
          type: 'number',
          description: 'Security amount',
          example: '15',
        },
      },
      {
        name: 'dose',
        in: 'body',
        schema: {
          type: 'number',
          description: 'Dose of product',
          example: '15',
        },
      },
      {
        name: 'unitDose',
        in: 'body',
        schema: {
          type: 'string',
          description: 'Unit of Dose',
          example: 'L',
        },
      },
      {
        name: 'measureValue',
        in: 'body',
        schema: {
          type: 'number',
          description: '0.12',
          example: '10',
        },
      },
      {
        name: 'quantity',
        in: 'body',
        schema: {
          type: 'number',
          description: 'Quantity of product',
          example: '10',
        },
      },
      {
        name: 'categoryId',
        in: 'body',
        schema: { type: 'number', description: 'Category id', example: '1' },
      },
      {
        name: 'measurementUnit',
        in: 'body',
        schema: {
          type: 'string',
          description: 'Measurement unit',
          example: 'kg',
        },
      },
    ],

    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                },
                data: {
                  type: 'object',
                  $ref: '#/components/schemas/Product',
                  null: true,
                },
                message: {
                  type: 'string',
                  null: true,
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Bad Request',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: false,
                },
                message: {
                  type: 'string',
                  null: true,
                },
              },
            },
          },
        },
      },
      500: {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: false,
                },
                message: {
                  type: 'string',
                  null: true,
                },
              },
            },
          },
        },
      },
    },
  },
};
