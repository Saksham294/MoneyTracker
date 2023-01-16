import { configureStore } from '@reduxjs/toolkit'
import { filterReducer, groupTransactionCategoriesReducer, manyOperationReducer } from './Reducers/transactionReducer'
import { userReducer, myTransactionsReducer, remainingBudgetReducer } from './Reducers/userReducer';


const initialState = {}
const store = configureStore(
    {
        reducer: {
            user: userReducer,
            myTransactions: myTransactionsReducer,
            getTransactionDetails: manyOperationReducer,
            remainingBudget: remainingBudgetReducer,
            groupCategories: groupTransactionCategoriesReducer,
            filterByCategory: filterReducer

        }

    })

export default store;