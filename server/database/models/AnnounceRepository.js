const AbstractRepository = require("./AbstractRepository");

class AnnounceRepository extends AbstractRepository {
  constructor() {
    super({ table: "announce" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async create(announce) {
    const [result] = await this.database.query(
      `insert into ${this.table} (search_title,instrument, location, description, name) values (?, ?, ?, ?, ?)`,
      [
        announce.search_title,
        announce.instrument,
        announce.location,
        announce.description,
        announce.name,
      ]
    );
    return result.insertId;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }

  async update(announce) {
    const [result] = await this.database.query(
      `update ${this.table} set search_title = ?, instrument = ?, location = ?, description = ?, name = ? where id = ?`,
      [
        announce.search_title,
        announce.instrument,
        announce.location,
        announce.description,
        announce.name,
        announce.id,
      ]
    );
    return result.affectedRows;
  }
}
module.exports = AnnounceRepository;
