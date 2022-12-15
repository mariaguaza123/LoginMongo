exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('products', function(table) {
        table.increments('productid').primary();
        table.string('name', 100);
        table.float('price', 4, 2);
        table.string('stock',100);
  
        table.timestamps(true, true);
      })
    ]);
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('products')
    ]);
  };