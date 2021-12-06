import all from './getCategories';
import show from './getCategory';
import create from './createCategory';
import update from './updateCategory';
import del from './deleteCategory';

export default {
  '/categories': {
    ...all,
    ...create,
  },
  '/categories/{id}': {
    ...show,
    ...update,
    ...del,
  },
};
