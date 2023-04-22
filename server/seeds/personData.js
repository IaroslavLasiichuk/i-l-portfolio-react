import Person from '../models/Person.js'

const personData = [
    {
      first_name: "Iaroslav",
      last_name: "Lasiichuk",
      text: "Hi, everyone!I'm a young aspiring junior web developer with a passion for technology and a strong desire to make a difference in the world. I'm constantly seeking new challenges and opportunities to learn and grow as a developer",
      img: "/img/8L0A0474.jpg",
    },
  ];

const seedPersonData = () => Person.bulkCreate(personData);

export default seedPersonData;

