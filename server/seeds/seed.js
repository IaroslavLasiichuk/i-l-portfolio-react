import sequelize from '../config/connection.js';
import seedPersonData from './personData.js';


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedPersonData();

  process.exit(0);
};

seedDatabase();