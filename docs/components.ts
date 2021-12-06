export default {
  components: {
    schemas: {
      AuthLogin: {
        type: 'object',
        properties: {
          auth: {
            type: 'object',
            properties: {
              type: { type: 'string' },
              token: { type: 'string' },
            },
          },
          user: {
            type: 'object',
            $ref: '#/components/schemas/User',
          },
        },
      },
      Category: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          designation: { type: 'string' },
          createdAt: { type: 'string' },
          updatedAt: { type: 'string' },
        },
      },
      Product: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
          designation: { type: 'string' },
          price: { type: 'number' },
          qqdUnityCurrent: { type: 'number' },
          qqdUnityRecommended: { type: 'number' },
          securityAmount: { type: 'number' },
          categoryId: { type: 'number' },
          unitMeasurement: { type: 'string' },
          dose: { type: 'number' },
          unitDose: { type: 'string' },
          measureValue: { type: 'number' },
          quantity: { type: 'number' },
          category: {
            type: 'object',
            $ref: '#/components/schemas/Category',
          },
          createdAt: { type: 'string' },
          updatedAt: { type: 'string' },
        },
      },
      Plate: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          designation: { type: 'string' },
          price: { type: 'number' },
          description: { type: 'string' },
          typePlateId: { type: 'number' },
          createdAt: { type: 'string' },
          updatedAt: { type: 'string' },
          typePlate: {
            type: 'object',
            $ref: '#/components/schemas/PlateType',
          },
        },
      },
      User: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
          createdAt: { type: 'string' },
          updatedAt: { type: 'string' },
        },
      },
      PlateType: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          designation: { type: 'string' },
          createdAt: { type: 'string' },
          updatedAt: { type: 'string' },
        },
      },
    },
  },
};
