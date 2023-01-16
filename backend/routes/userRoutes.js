const {registerUser, loginUser, logoutUser,getMyProfile,getMyTransactions} =require("../controllers/userController")
const express=require("express")
const router=express.Router();
const isAuthenticated=require("../auth")


router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)
router.route('/myTransactions').get(isAuthenticated,getMyTransactions)
router.route("/me").get(isAuthenticated,getMyProfile)

module.exports=router