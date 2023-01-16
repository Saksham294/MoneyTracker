import { Typography } from '@mui/material'
import React,{useEffect} from 'react'
import TransactionBox from '../TransactionBox/TransactionBox'
import {useDispatch, useSelector} from 'react-redux'
import { getMyTransactions } from '../../Actions/userActions'
import './MyTransactionPage.css'
import { filterByCategory, groupTransaction } from '../../Actions/transactionActions'

const MyTransactionPage = () => {

    const dispatch = useDispatch()
    const {loading,transactions} = useSelector(state => state.myTransactions)
    console.log(transactions)
useEffect(()=>{
    dispatch(getMyTransactions())
    dispatch(groupTransaction())
    dispatch(filterByCategory("Salary"))
},[dispatch])

    return (
        <div>
            <Typography variant='h2' sx={{margin:"1rem",textAlign:"center"}}>Your Transaction History</Typography>
            <div className="leftSide">
        <div className="categories">
            
        </div>
            </div>
            <div className="rightSide">
                <div  className='transactionsBox'>
            {loading===false && transactions!=undefined?
             transactions.map((transaction)=>(
                <TransactionBox key={transaction._id} id={transaction._id} title={transaction.title} amount={transaction.amount} date={transaction.date} category={transaction.category}
                isReceived={transaction.isReceived}
                />
            )):null}
            </div>
           </div>
        </div>
    )
}

export default MyTransactionPage
