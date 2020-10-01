import { Router } from "express";
import routerExample from "./example";
const router = Router();

router.use("/api", routerExample);

export default router;
