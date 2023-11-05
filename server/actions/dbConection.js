const mariadb = require('mariadb/callback');
const { dbHost, dbUser, dbPass, dbName } = require('../Config.js');

// =================================================================
// połaczenie z baza danych za pomocą biblioteki mariadb z collback.
// =================================================================

const pool = mariadb.createPool({
    host: dbHost,
    user: dbUser,
    password: dbPass,
    database: dbName,
    connectionLimit: 5
});

pool.getConnection((err, connection) => {
  if(err){
      if (err.code === 'PROTOCOL_CONNECTION_LOST'){
          console.error('Database connection lost');
      }
      if (err.code === 'ER_CON_COUNT_ERROR'){
          console.error('Database has too many connection');
      }
      if (err.code === 'ECONNREFUSED'){
          console.error('Database connection was refused');
      }
  }
  if(connection) connection.release();

  return;
});
// exportuje połacznie
module.exports = pool;