import { Button, Typography } from '@mui/material'
import React, { useEffect,useState } from 'react'
import TransactionBox from '../TransactionBox/TransactionBox'
import { useDispatch, useSelector } from 'react-redux'
import { getMyTransactions } from '../../Actions/userActions'
import './MyTransactionPage.css'
import { filterByCategory, groupTransaction, filterByDate, groupTransactionByDate } from '../../Actions/transactionActions'
import { Link } from 'react-router-dom'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DateRangeFilter from '../DateRangeFilter/DateRangeFilter'
import {TextField} from '@mui/material'


const MyTransactionPage = () => {

    const dispatch = useDispatch()

    let { loading, transactions } = useSelector(state => state.myTransactions)

    useEffect(() => {
        dispatch(getMyTransactions())
        dispatch(groupTransaction())
        dispatch(filterByCategory("All"))
        dispatch(groupTransactionByDate())

    }, [dispatch])


   
    let { loading: loading3 } = useSelector(state => state.filterByCategory)
    let filteredTransactions = useSelector(state => state.filterByCategory.filterByCategory)





    const [filtered, setFiltered] = React.useState(false)
   


    const changeTransactions = (category) => {
        dispatch(filterByCategory(category))
        setFiltered(!filtered)
    }
    const { loading: loading4,transactionsPerDate } = useSelector(state => state.filterByDate)
   
const [filteredByDate,setFilteredByDate]=useState(false)
// if(loading4===false && transactionsPerDate!=undefined && transactionsPerDate.length>0){
//     setFilteredByDate(true)
// }
// if(loading4===false && transactionsPerDate!=undefined && transactionsPerDate.length===0){
//     setFilteredByDate(false)
// }

  
    let allTransactions=[]


    const { loading: loading2 } = useSelector(state => state.groupCategories)
    const groupCategories = useSelector(state => state.groupCategories.groupCategories)

    return loading === false && loading2 === false && loading3 === false ?
        (
            <div>
                <Typography variant='h2' sx={{ margin: "1rem", textAlign: "center" }}>Your Transaction History</Typography>
                <div className="transactionsContainer">
                    <div className="leftSide">
                        <div className="categories">
                            <div className="categoryContainer">
                                <Typography variant='h3'>Filter by Category</Typography>
                                {loading === false && transactions != undefined ?

                                    groupCategories.map((category) => (
                                        <div className="categoryBox">

                                            <div className="categoryName">
                                                <Button
                                                    onClick={() => { changeTransactions(category) }}
                                                >
                                                    <Typography variant='h5'>{category}</Typography>
                                                </Button>
                                            </div>
                                        </div>
                                    ))
                                    : null

                                }

                            </div>

                        </div>
                        <div className="dateBox">
                            <div className="dateCont">
                                <Typography variant='h3'>Filter by Date</Typography>
                                <DateRangeFilter/>
                            </div>

                        </div>
                    </div>
                    <div className="rightSide">
                        <div className='transactionsBox'>
                            {
                                loading2 === false &&  allTransactions!= undefined && allTransactions.length>0 ?
                                    allTransactions.map((transaction) => (
                                        <TransactionBox key={transaction._id} id={transaction._id} title={transaction.title} amount={transaction.amount} date={transaction.date} category={transaction.category}
                                            isReceived={transaction.isReceived}
                                        />
                                    ))

                                    : loading3 === false && filtered === true && filteredTransactions != undefined ?
                                        filteredTransactions.map((transaction) => (
                                            <TransactionBox key={transaction._id} id={transaction._id} title={transaction.title} amount={transaction.amount} date={transaction.date} category={transaction.category}
                                                isReceived={transaction.isReceived}
                                            />
                                        ))
                                        : loading === false && transactions != undefined ?
                                            transactions.map((transaction) => (
                                                <TransactionBox key={transaction._id} id={transaction._id} title={transaction.title} amount={transaction.amount} date={transaction.date} category={transaction.category}
                                                    isReceived={transaction.isReceived}
                                                />
                                            )) 
                                            : 
                                            loading4 === false  && transactionsPerDate != undefined ?
                                            transactionsPerDate.map((transaction) => (
                                                <TransactionBox key={transaction._id} id={transaction._id} title={transaction.title} amount={transaction.amount} date={transaction.date} category={transaction.category}
                                                    isReceived={transaction.isReceived}
                                                />
                                            ))
                                            : null
                        

                            }
                        </div>
                    </div>
                </div>
            </div>
        ) : null

}

export default MyTransactionPage
