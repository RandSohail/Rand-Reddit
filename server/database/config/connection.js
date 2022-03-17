require('env2')('.env');
const { Pool } = require('pg');

let URL = '';

if (process.env.NODE_ENV === 'dev') {
  URL = process.env.DB_URL;
} else if (process.env.NODE_ENV === 'test') {
  URL = process.env.DB_URL_TEST;
} else if (process.env.NODE_ENV === 'production') {
  URL = process.env.DATABASE_URL;
} else throw new Error('No Database Found !!!');

const connection = new Pool({
  connectionString: URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

module.exports = connection;
