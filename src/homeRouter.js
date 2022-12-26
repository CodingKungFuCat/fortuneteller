import express from "express"
import { homeController, loginController, SearchController } from "../controllers/homeController.js"
import { Tarot, Astrology, Iching } from "../controllers/contentControllers.js";
const homeRouter = express.Router();

homeRouter.get("/", homeController)
homeRouter.get("/login", loginController)
homeRouter.get("/search", SearchController)
homeRouter.get("/tarot", Tarot)
homeRouter.get("/astrology", Astrology)
homeRouter.get("/iching", Iching)


export default homeRouter