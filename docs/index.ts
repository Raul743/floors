import basicInfo from './basicInfo';
import servers from './servers';
import components from './components';
import tags from './tags';
import categories from './categories';
import auth from './auth';
import products from './products';
import plates from './plates';
import platesType from './platesType';
import purchaseList from './purchaseList';

export default {
  ...basicInfo,
  ...servers,
  ...tags,
  ...components,
  paths: {
    ...auth,
    ...categories,
    ...products,
    ...plates,
    ...platesType,
    ...purchaseList,
  },
};
