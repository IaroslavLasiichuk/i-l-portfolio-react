import route from 'express';
const router = route.Router();
const { Person } = require('../models/Person');
const withAuth = require('../utilis/auth');

// Render the home page.
router.get('/person', async (req, res) => {
  try {
    const dbPersonData = await Person.findAll({
      
    });
    const person = dbPersonData.map((person) => person.get({ plain: true }));
    res.json({
      person,
    });
  } catch (err) {
 res.status(500).json(err);
  }
});


export default router;