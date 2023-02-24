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

//creating instance of express application
const app = express();
const PORT = process.env.PORT || 3001;

//creating a session
const sess = {
  Secret: "secret",
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

//handlebars and helpers
const hbs = exphbs.create({ helpers });
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
  app.listen(PORT, () => console.log("Now listening"));
});
