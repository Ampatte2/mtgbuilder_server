const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.post("/login", controller.login);
router.post("/register", controller.register);
router.post("/getCard", controller.getCard);
router.post("/getDeck", controller.getDeck);
router.post("/saveDeck", controller.saveDeck);
router.post("/getUser", controller.getUser);
router.post("/saveCard", controller.saveCard);
router.post("/getData", controller.getData);
router.post("/deleteCard", controller.deleteCard);
router.post("/deleteDeck", controller.deleteDeck);

module.exports = router