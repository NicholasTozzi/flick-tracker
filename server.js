//imports
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");

const helpers = require("./utils/helpers");
const dotenv = require("dotenv").config();
const bcrypt = require("bcrypt");
const fns = require("date-fns"); //https://date-fns.org/v2.29.3/docs/Getting-Started

//configuring sequelize connection
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//Cookie session variable
// const cookieSession = require('cookie-session') //This was needed for npm cookie-session. That generates cookies

//creating instance of express application
const app = express();
const PORT = process.env.PORT || 3006;

//Creating a cookie session
// app.use(cookieSession({
//   name: 'session',
//   keys: ["THIS TOOK ME FOREVER TO FIGURE OUT"], //This created the session to generate said cookies

//   // Cookie Options
//   maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }))

//creating a session
const sess = {
  secret: "THIS TOOK ME FOREVER TO FIGURE OUT", //Still haven't figured this out
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    httpOnly: true,
    secure: false, //Read to change this to true. I changed it back to false so it was back to the way it was originally set.
    sameSite: "strict",
  },

  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

app.use(session(sess));

//handlebars and helpers
const hbs = exphbs.create({}); // here maybe??
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//enabling app routes
app.use(routes);

//starting sequelize server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("http://localhost:3006"));
});
