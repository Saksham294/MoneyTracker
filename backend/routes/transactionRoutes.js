const {newTransaction,deleteTransaction,updateTransaction,getTransaction,remainingBudget, groupTransactionCategories,filterByCategory,filterByDate, groupTransactionByDate}=require('../controllers/transactionController')
const express=require("express");
const router=express.Router();
const isAuthenticated=require("../auth")

router.route('/newTransaction').post(isAuthenticated,newTransaction)
router.route('/deleteTransaction/:id').delete(isAuthenticated,deleteTransaction)
router.route('/updateTransaction/:id').put(isAuthenticated,updateTransaction)
router.route('/getTransaction/:id').get(isAuthenticated,getTransaction)
router.route('/getRemainingBudget').get(isAuthenticated,remainingBudget)
router.route('/groupTransactionCategories').get(isAuthenticated,groupTransactionCategories)
router.route('/filterTransactionsByCategory/:category').get(isAuthenticated,filterByCategory)
//get transactions by date
router.route('/filterTransactionsByDate/:date').get(isAuthenticated,filterByDate)
router.route('/groupTransactionsByDate').get(isAuthenticated,groupTransactionByDate)



module.exports=router
