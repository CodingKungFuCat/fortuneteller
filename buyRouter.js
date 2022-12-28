import express from "express"
const buyRouter = express.Router();
import { tarotBuyController, astrologyBuyController, ichingBuyController, tarotRequest, astrologyRequest, ichingRequest } from "./controllers/buyController";

buyRouter.route("/tarot").get(tarotBuyController).post(tarotRequest)
buyRouter.route("/astrology").get(astrologyBuyController).post(astrologyRequest)
buyRouter.route("/iching").get(ichingBuyController).post(ichingRequest)


export default buyRouter