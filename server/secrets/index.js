require('dotenv').config({path: `./dotenv/.env.db`});

module.exports.secrets = {
  loadDbSecrets: () => {
    return {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      server: 'localhost',
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
      options: {
        encrypt: false,
        trustServerCertificate: false // change to true for local dev / self-signed certs
      }
    }
  }
}