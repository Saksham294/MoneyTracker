import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const manyOperationReducer=createReducer(initialState,{
   
    getTransactionDetailsRequest: (state, action) => {
        state.loading = true;
    },
    getTransactionDetailsSuccess: (state, action) => {
        state.loading = false;
        state.transactionDetails = action.payload;
    },
    getTransactionDetailsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
,
})

export const groupTransactionCategoriesReducer=createReducer(initialState,{
    groupTransactionRequest: (state, action) => {
        state.loading = true;
    },
    groupTransactionSuccess: (state, action) => {
        state.loading = false;
        state.groupCategories = action.payload;

    },
    groupTransactionFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
})

export const filterReducer=createReducer(initialState,{
    filterByCategoryRequest: (state, action) => {
        state.loading = true;
    },
    filterByCategorySuccess: (state, action) => {
        state.loading = false;
        state.filterByCategory = action.payload;
    },
    filterByCategoryFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
,
})