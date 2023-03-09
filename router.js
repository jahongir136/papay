const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");
const productController = require("./controllers/productController");

//*******************************************
/*               REST API           *
/**************************************** */

//member releted router

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);
router.get(
  "/member/:id",
  memberController.retrieveAuthMember,
  memberController.getChosenMember
);

//product related router
router.post(
  "/products",
  memberController.retrieveAuthMember,
  productController.getAllProducts
);

module.exports = router;
