import all from './getPlates';
import create from './createPlate';
import update from './updatePlate';
import prepare from './preparePlate';

export default {
  '/plates': {
    ...all,
    ...create,
  },
  '/plates/{id}': {
    ...update,
  },
  '/plates/{id}/prepare': {
    ...prepare,
  },
};
