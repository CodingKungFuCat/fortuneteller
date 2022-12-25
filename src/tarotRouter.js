import express from "express"
import { tarot } from "../controllers/tarotController";


const tarotRouter = express.Router();

tarotRouter.get("/tarot", tarot)


export default tarotRouter