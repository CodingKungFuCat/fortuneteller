import express from "express"
const buyRouter = express.Router();
import { tarotBuyController, astrologyBuyController, ichingBuyController } from "./controllers/buyController";

buyRouter.get("/tarot", tarotBuyController)
buyRouter.get("/astrology", astrologyBuyController)
buyRouter.get("/iching", ichingBuyController)


export default buyRouter