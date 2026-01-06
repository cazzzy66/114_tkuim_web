const express = require("express");
const { asyncHandler } = require("../middlewares/async");
const controller = require("../controllers/task.controller");

const router = express.Router();

router.post("/", asyncHandler(controller.createTask));
router.get("/", asyncHandler(controller.getTasks));
router.get("/:id", asyncHandler(controller.getTaskById));
router.put("/:id", asyncHandler(controller.updateTask));
router.delete("/:id", asyncHandler(controller.deleteTask));

module.exports = router;
