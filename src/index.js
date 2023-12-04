import Express from "express";
import mongoose from "mongoose";
import { engine } from "express-handlebars"
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import flash from "connect-flash"
//CONFIG & UTILS
import __dirname from "./utils.js";
//import config from "./config/config.js"
import initializePassport from "./config/passport.config.js";
//ROUTERs
import userRouter from "./router/users.router.js"
import productRouter from "./router/product.router.js";
import cartRouter from "./router/cart.router.js";
import restoreRouter from './router/restorePass.router.js'


const app = Express()
const PORT = 8080
//const secret = config.secret

app.engine(
    "handlebars",
    engine({
        extname: "handlebars",
        defaultLayout: false,
        layoutsDir: "views/layouts/"
    })
);
app.set("view engine", "handlebars")
app.set("views", __dirname + '/views')
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))


mongoose.connect('mongodb+srv://jcmartinorozco:16080073@cluster0.hvxvolp.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('connected to DB')
    })
    .catch(error => {
        console.error('error connecting to DB', error)
    })

    app.listen(PORT, () => {
        console.log(`at port: ${PORT}`)
    })
    
app.use(session({
    store: MongoStore.create({
        mongoUrl: ('mongodb+srv://jcmartinorozco:16080073@cluster0.hvxvolp.mongodb.net/?retryWrites=true&w=majority'),
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 6000,
    }),
    secret: "",
    resave: false,
    saveUninitialized: false,
})) 

// PASSPORT
initializePassport()
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

//ROUTERS
app.use('/user', userRouter)
app.use('/products', productRouter)
app.use('/cart', cartRouter)
app.use('/restore', restoreRouter)