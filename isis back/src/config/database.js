module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'isis',
    port:'5433',
    define: {
      // The "createdAt" and "updatedAt" columns are added automatically
      timestamps: true,
      // Define the naming convention for tables and columns
      underscored: true,
      underscoredAll: true,
    },
  };