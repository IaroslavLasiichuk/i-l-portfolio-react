// Require express - routes - controllers - session - helpers and - handlebars
import path from 'path';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
// import routes from './server/controllers';

// Const sequelize store.
import sequelize from './server/config/connection.js';
import SequelizeStoreConstructor from 'connect-session-sequelize';
const SequelizeStore = SequelizeStoreConstructor(session.Store);
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Gets the express app and port.
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// Import sequelize connection
const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 900000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Sets up the session.
app.use(session(sess));
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './dist')));

// Use express static json and urlencoded.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Applies routes to the application.
// app.use(routes);



app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  console.log('Hello');
    app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
  });