export default {
  put: {
    tags: ['Plates'],
    description: 'Update Plate',
    operationId: 'update',
    parameters: [
      {
        name: 'plateId',
        in: 'path',
        schema: {
          type: 'number',
          description: 'Plate id',
          example: '1',
        },
      },
      {
        name: 'designation',
        in: 'body',
        schema: {
          type: 'string',
          description: 'Designation of plate',
          example: 'My Plate',
          null: true,
        },
      },
      {
        name: 'description',
        in: 'body',
        schema: {
          type: 'string',
          description: 'Designation',
          example: 'Designation',
          null: true,
        },
      },
      {
        name: 'price',
        in: 'body',
        schema: {
          type: 'number',
          description: 'Price of plate',
          example: '10000',
          null: true,
        },
      },
      {
        name: 'plateTypeId',
        in: 'body',
        schema: {
          type: 'number',
          description: 'Plate type id',
          example: '1',
          null: true,
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
                  $ref: '#/components/schemas/Plate',
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
