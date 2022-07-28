const pool = require('../utils/pool');

module.exports = class Chart {
  id;
  name;
  age;
  birthday;
  sun;
  moon;
  rising;
  venus;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.birthday = row.birthday;
    this.sun = row.sun;
    this.moon = row.moon;
    this.rising = row.rising;
    this.venus = row.venus;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM charts;');
    return rows.map((row) => new Chart(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM charts WHERE id=$1', [id]);
    if (!rows[0]) return null;

    return new Chart(rows[0]);
  }
};
