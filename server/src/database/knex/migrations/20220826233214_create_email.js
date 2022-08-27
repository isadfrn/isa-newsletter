exports.up = (knex) =>
  knex.schema.createTable('emails', (table) => {
    table.increments('id');
    table.text('email');
    table.timestamp('created_at').default(knex.fn.now());
    table.timestamp('updated_at').default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.createTable('emails', (table) => {});
