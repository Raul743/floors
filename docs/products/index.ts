import all from './getProducts';
import create from './createProduct';

export default {
  '/products': {
    ...all,
    ...create,
  },
};
