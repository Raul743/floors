module.exports = {
  type: "postgresql",
  host: process.env.POSTGRESQL_HOST,
  port: process.env.POSTGRESQL_PORT,
  username: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  database: process.env.POSTGRESQL_DB,
  synchronize: false,
  logging: false,
  entities: ["**/models/*.ts"],
  migrations: ["src/database/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/models",
    migrationsDir: "src/database/migration",
    subscribersDir: "src/subscriber",
  },
};
