import express from "express"
import nodemon from "nodemon"
import morgan from "morgan"
import homeRouter from "./homeRouter";
import tarotRouter from "./tarotRouter";

const app = express();
const loggerMiddleWare = morgan("start")
const port = 5000

app.set("view engine", "pug")
app.set("views", process.cwd() + "/src/views")
app.use("/", homeRouter)
app.use("/tarot", tarotRouter)
app.listen(port, console.log(`서버가 개설되었습니다. http://localhost:${port}`))