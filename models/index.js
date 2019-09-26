const Sequelize = require('sequelize');
// The PORT(5432) here seems to be establishing the connection to the database. The two ports can't match
const db = new Sequelize('postgres://localhost:5432/wikistack');

const page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    isUrl: true,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
  },
});

const user = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isUrl: true,
  },
});

module.exports = {
  db,
  page,
  user,
};
