import express from "express"
import { homeController, loginController, SearchController } from "../controllers/homeController.js"

const homeRouter = express.Router();

homeRouter.get("/", homeController)
homeRouter.get("/login", loginController)
homeRouter.get("/search", SearchController)


export default homeRouter