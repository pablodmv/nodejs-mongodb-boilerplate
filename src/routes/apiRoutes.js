const { Router } = require("express");
const { apiAlive, apiPing } = require("../controller/apiController");

const router = Router();

router.get("/api/alive", apiAlive);

router.post("/api/ping", apiPing);

module.exports = router;
