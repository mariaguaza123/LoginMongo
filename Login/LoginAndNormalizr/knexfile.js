module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'myeccomerce'
      },
      migrations: {
        directory: __dirname + '/config/db/migrations'
      },
      useNullAsDefault: true
    }
  };
  