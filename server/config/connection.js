import SequelizeConstructor from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new SequelizeConstructor(process.env.JAWSDB_URL);
} else {
  sequelize = new SequelizeConstructor(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

export default sequelize;