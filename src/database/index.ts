import { createConnection } from 'typeorm';

export default createConnection()
  .then(() => console.log('Database connected successfull'))
  .catch((err) => console.log(err));
