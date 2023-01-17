import { Button, Typography } from '@mui/material'
import React,{useEffect} from 'react'
import TransactionBox from '../TransactionBox/TransactionBox'
import {useDispatch, useSelector} from 'react-redux'
import { getMyTransactions } from '../../Actions/userActions'
import './MyTransactionPage.css'
import { filterByCategory, groupTransaction,filterByDate, groupTransactionByDate } from '../../Actions/transactionActions'
import { Link } from 'react-router-dom'

const MyTransactionPage = () => {

    const dispatch = useDispatch()

   let {loading,transactions} = useSelector(state => state.myTransactions)
 
useEffect(()=>{
    dispatch(getMyTransactions())
    dispatch(groupTransaction())
    dispatch(filterByCategory("All"))
    dispatch(groupTransactionByDate())
dispatch(filterByDate("All"))

},[dispatch])

let {loading:loading3} = useSelector(state => state.filterByCategory)
let filteredTransactions = useSelector(state => state.filterByCategory.filterByCategory)

let {loading:loading4} = useSelector(state => state.filterByDate)
let filteredTransactionsByDate = useSelector(state => state.filterByDate.filterByDate)
const groupTransactionsByDate=useSelector(state => state.groupTransactionByDate.groupTransactionByDate)
console.log(groupTransactionsByDate)

const [filtered,setFiltered] = React.useState(false)


const changeTransactions = (category)=>{
    dispatch(filterByCategory(category))
    setFiltered(!filtered)
}
const [filteredByDate,setFilteredByDate] = React.useState(false)

const changeTransactionsByDate = (date)=>{
    dispatch(filterByDate(date))
    setFilteredByDate(!filteredByDate)
}

const {loading:loading2} = useSelector(state => state.groupCategories)
const groupCategories = useSelector(state => state.groupCategories.groupCategories)
return loading===false &&  loading2===false && loading3===false && loading4===false?
  (
    <div>
        <Typography variant='h2' sx={{margin:"1rem",textAlign:"center"}}>Your Transaction History</Typography>
        <div className="transactionsContainer">
        <div className="leftSide">
    <div className="categories">
        <div className="categoryContainer">
        <Typography variant='h3'>Filter by Category</Typography>
            {loading===false && transactions!=undefined? 

                groupCategories.map((category)=>(
                    <div className="categoryBox">

                        <div className="categoryName">
                           <Button
                             onClick={()=>{changeTransactions(category)}}
                           >
                           <Typography variant='h5'>{category}</Typography>
                           </Button>
                        </div>
</div>
                ))
                :null
                    
            }   

        </div>
    </div>
       <div className="date">
            <div className="dateContainer">
                <Typography variant='h3'>Filter by Date</Typography>
                {loading===false && transactions!=undefined?
                groupTransactionsByDate.map((date)=>(
                    <div className="dateBox">
                        <div className="dateName">
                            <Button
                            onClick={()=>{changeTransactionsByDate(date)}}
                            >
                                <Typography variant='h5'>{date}</Typography>
                                </Button>
                        </div>
                    </div>
                ))
                :null
            }
                            </div> 

       </div>
        </div>
        <div className="rightSide">
            <div  className='transactionsBox'>
        {
            loading4===false && filteredByDate===true&& filteredTransactionsByDate!=undefined?
            filteredTransactionsByDate.map((transaction)=>(
                <TransactionBox key={transaction._id} id={transaction._id} title={transaction.title} amount={transaction.amount} date={transaction.date} category={transaction.category}
                isReceived={transaction.isReceived}
                />
            ))
            
            :loading3===false && filtered===true&& filteredTransactions!=undefined?
            filteredTransactions.map((transaction)=>(
                <TransactionBox key={transaction._id} id={transaction._id} title={transaction.title} amount={transaction.amount} date={transaction.date} category={transaction.category}
                isReceived={transaction.isReceived}
                />
            ))
            :loading===false && transactions!=undefined?
                transactions.map((transaction)=>(
                   <TransactionBox key={transaction._id} id={transaction._id} title={transaction.title} amount={transaction.amount} date={transaction.date} category={transaction.category}
                   isReceived={transaction.isReceived}
                   />
               )):null

        }
        </div>
       </div>
        </div>
    </div>
):null
    
}


export default MyTransactionPage
