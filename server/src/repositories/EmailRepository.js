const knex = require('../database/knex');

class EmailRepository {
  async findEmail(email) {
    const emailExists = await knex('emails').where({ email }).first();
    return !!emailExists;
  }

  async save(email) {
    await knex('emails').insert({ email });
  }
}

module.exports = EmailRepository;
