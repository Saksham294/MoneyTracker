import { configureStore } from '@reduxjs/toolkit'
import { filterByDateReducer, filterReducer, groupTransactionCategoriesReducer, groupTransactionByDateReducer,manyOperationReducer } from './Reducers/transactionReducer'
import { userReducer, myTransactionsReducer, remainingBudgetReducer } from './Reducers/userReducer';


const initialState = {}
const store = configureStore(
    {
        reducer: {
            user: userReducer,
            myTransactions: myTransactionsReducer,
            groupCategories: groupTransactionCategoriesReducer,
            groupTransactionByDate: groupTransactionByDateReducer,
            getTransactionDetails: manyOperationReducer,
            remainingBudget: remainingBudgetReducer,
           filterByDate:filterByDateReducer,
            filterByCategory: filterReducer

        }

    })

export default store;