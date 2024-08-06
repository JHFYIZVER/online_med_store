const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, basketController.create);
router.get("/", authMiddleware, basketController.getAll);
router.delete("/", authMiddleware, basketController.delete);
router.put("/", authMiddleware, basketController.update);

module.exports = router;
