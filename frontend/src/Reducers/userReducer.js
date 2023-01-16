import { createReducer} from "@reduxjs/toolkit";

const initialState={}

export const userReducer=createReducer(initialState,{

    loginRequest:(state)=>{
        state.loading=true;
    },
    loginSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true

    },
    loginFailure:(state,action)=>{
        state.loading=false
        state.error=action.payload;
        state.isAuthenticated=false
    },

    registerRequest:(state)=>{
        state.loading=true;
    },
    registerSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true
    },
    registerFailure:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false
        state.error=action.payload;
    },

    loadUserRequest:(state)=>{
        state.loading=true;
    },
    loadUserSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true
    },
    loadUserFailure:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false
        state.error=action.payload;
    },

    logoutUserRequest: (state) => {
        state.loading = true;
      },
      logoutUserSuccess: (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      },
      logoutUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
      },
      updatePasswordRequest: (state) => {
        state.loading = true;
      },
      updatePasswordSuccess: (state) => {
        state.loading = false;
      },
      updatePasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },

})

// export const OtherUserReducer=createReducer(initialState,{
//   loadOtherProfileRequest:(state)=>{
//     state.loading=true;
// },
// loadOtherProfileSuccess:(state,action)=>{
//     state.loading=false;
//     state.user=action.payload;

// },
// loadOtherProfileFailure:(state,action)=>{
//     state.loading=false
//     state.error=action.payload;
// },
// })
export const myTransactionsReducer = createReducer(initialState, {
    myTransactionsRequest: (state) => {
      state.loading = true;
    },
    myTransactionsSuccess: (state, action) => {
      state.loading = false;
      state.transactions = action.payload;
    },
    myTransactionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  });
    
export const remainingBudgetReducer=createReducer(initialState,{
  remainingBudgetRequest: (state) => { 
    state.loading = true;
  },
  remainingBudgetSuccess: (state, action) => {
    state.loading = false;
    state.remainingBudget = action.payload;
  },
  remainingBudgetFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
})


  export const allUsersReducer=createReducer(initialState,{
    allUsersRequest:(state)=>{
      state.loading=true;
  },
  allUsersSuccess:(state,action)=>{
      state.loading=false;
      state.users=action.payload;
  
  },
  allUsersFailure:(state,action)=>{
      state.loading=false
      state.error=action.payload;
  },
  })
  export const allTransactionReducer=createReducer(initialState,{
    allTransactionRequest:(state)=>{
      state.loading=true;
  },
  allTransactionsSuccess:(state,action)=>{
      state.loading=false;
      state.posts=action.payload;
  
  },
  allTransactionsFailure:(state,action)=>{
      state.loading=false
      state.error=action.payload;
  },
  })


//   export const userFollowingPostsReducer=createReducer(initialState,{
//     getUserFollowingPostsRequest:(state)=>{
//       state.loading=true;
//   },
//   getUserFollowingPostsSuccess:(state,action)=>{
//       state.loading=false;
//       state.user=action.payload;
  
//   },
//   getUserFollowingPostsFailure:(state,action)=>{
//       state.loading=false
//       state.error=action.payload;
//   },
//   })

  