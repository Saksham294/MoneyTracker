const Transaction=require("../models/transactionModel")
const User=require("../models/userModel");
var moment=require("moment")


//Create a new transaction
exports.newTransaction=async(req,res)=>{
    try {

      const newTransactionData = {
        title: req.body.title,
        amount:req.body.amount,
        category: req.body.category,
        sender: req.user._id,
        isReceived: req.body.isReceived,

      };
      //Check if receiver exists

        const user=await User.findById(req.user.id)
        const createTransaction= await Transaction.create(newTransactionData)
       
        user.myTransactions.unshift(createTransaction._id);

        await user.save();
        res.status(200).json({
            user,
            success:true,
            message:"Added transaction successfully"
        })
        
    } catch (error) {
        console.log(error)
        res.status(404).json({
            
            success:false,
            message:error.message
        })
    }
}

//Delete a transaction
exports.deleteTransaction=async(req,res)=>{
    try {
        const transaction=await Transaction.findById(req.params.id)
        if(!transaction){
            res.status(404).json({
                success:false,
                message:"Transaction not found"
            })
        }
        await transaction.remove()
        const user = await User.findById(req.user._id);
  
      const index = user.myTransactions.indexOf(req.params.id);
      user.myTransactions.splice(index, 1);
  
      await user.save();
        res.status(200).json({
            success:true,
            message:"Transaction deleted successfully",
        })
        
    } catch (error) {
        res.status(404).json({
            
            success:false,
            message:error.message
        })
    }
}

//Update a transaction
exports.updateTransaction=async (req,res)=>{
    try {
        var transaction=await Transaction.findById(req.params.id)
        if(!transaction){
            res.status(404).json({
                success:false,
                message:"Transaction not found"
            })
        }
        transaction=await Transaction.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            success:true,
            transaction,
            message:"Transaction updated successfully",
        })
        
    } catch (error) {
        console.log(error)
        res.status(404).json({
            success:false,
            message:error.message,
        })
}}


//Get a particular transaction
exports.getTransaction=async(req,res)=>{
        try {
      
          const transaction = await Transaction.findById(req.params.id).populate("amount category sender receiver date")
            
      
          res.status(200).json({
            success: true,
            transaction
          });
          
        } catch (error) {
          res.status(500).json({
            success: false,
            message: error.message,
          });
        }
}

//Calculate remaining budget of the user
exports.remainingBudget=async(req,res)=>{
    try {
        const user=await User.findById(req.user._id)
        var remainingBudget=user.budget
        const transactions=await Transaction.find()
        transactions.forEach(transaction => {
            if(transaction.isReceived){
                remainingBudget+=transaction.amount
            }
            else{
                remainingBudget-=transaction.amount
            }
        });
        res.status(200).json({
            success:true,
            remainingBudget
        })
        
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}


//Group transactions by categories
exports.groupTransactionCategories=async(req,res)=>{
    try {
        const transactions=await Transaction.find()
        const categories=transactions.map(transaction=>transaction.category)
        const uniqueCategories=[...new Set(categories)]
        const transactionsPerCategory=uniqueCategories.map(category=>{
            const transactionsPerCategory=transactions.filter(transaction=>transaction.category===category)
            return transactionsPerCategory
        })
        res.status(200).json({
            success:true,
            uniqueCategories
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}

//Filter Transactions by category
exports.filterByCategory=async(req,res)=>{
    try {
        const transactions=await Transaction.find()
        const transactionsPerCategory=transactions.filter(transaction=>transaction.category===req.params.category)
        res.status(200).json({
            success:true,
            transactionsPerCategory
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}

//Group transactions by date
exports.groupTransactionByDate=async(req,res)=>{
    try {
        const transactions=await Transaction.find()
        const dates=transactions.map(transaction=>moment(transaction.date).format("DD-MM-YYYY"))
        const uniqueDates=[...new Set(dates)]
        const transactionsPerDate=uniqueDates.map(date=>{
            const transactionsPerDate=transactions.filter(transaction=>moment(transaction.date).format("DD-MM-YYYY")===date)
            return transactionsPerDate
        })
        res.status(200).json({
            success:true,
            uniqueDates
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}

//Filter transactions by date
exports.filterByDate=async(req,res)=>{
    try {
        
        //filter by date range 
        const transactions=await Transaction.find()
        const transactionsPerDate=transactions.filter(transaction=>moment(transaction.date).format("YYYY-MM-DD")>=req.params.startDate && moment(transaction.date).format("YYYY-MM-DD")<=req.params.endDate)

        


        res.status(200).json({
            success:true,
            transactionsPerDate
        })

    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}

//Split bill and who ows who and how much
