import express from 'express'
import connectDB from "./db/connectdb.js"
import {join} from 'path'
import web from './routes/web.js'
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABSE_URL || "mongodb://localhost:27017";

//Database connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({extended:false}))

// Static files
app.use('/student',express.static(join(process.cwd(), "public")))
app.use('/student/edit',express.static(join(process.cwd(), "public")))

//Set template engine
app.set("view engine", 'ejs');

// Load routes
app.use("/student",web);

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})
