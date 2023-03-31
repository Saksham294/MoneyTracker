import axios from "axios";


export const newTransaction = (title, amount, category, isReceived) => async (dispatch) => {
  try {
    dispatch({
      type: "newTransactionRequest",
    });

    const { data } = await axios.post(
      `/api/newTransaction`,
      {
        title,
        amount,
        category,
        isReceived,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "newTransactionSuccess",
      payload: data.message,
    });
  } catch (error) {
    console.log(error)
    dispatch({
      type: "newTransactionFailure",
      payload: error.response.data.message,

    })

  }
}

export const getAllPosts = (name = "") => async (dispatch) => {
  try {

    dispatch({
      type: "allPostsRequest"
    })

    const { data } = await axios.get(`/api/allPosts?title=${name}`)

    dispatch({
      type: "allPostsSuccess",
      payload: data.posts,
    })

  } catch (error) {
    console.log(error)
    dispatch({
      type: "allPostsFailure",
      payload: error.response.data.message,
    })
  }
}

export const deleteTransaction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteTransactionRequest",
    });

    const { data } = await axios.delete(`/api/deleteTransaction/${id}`);
    dispatch({
      type: "deleteTransactionSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteTransactionFailure",
      payload: error.response.data.message,
    });
  }
};

export const getTransactionDetails = (id) => async (dispatch) => {
  try {

    dispatch({
      type: "getTransactionDetailsRequest"
    })

    const { data } = await axios.get(`/api/getTransaction/${id}`)

    dispatch({
      type: "getTransactionDetailsSuccess",
      payload: data.transaction,
    })

  } catch (error) {

    dispatch({
      type: "getTransactionDetailsFailure",
      payload: error.response.data.message,
    })
  }
}

export const remainingBudget = () => async (dispatch) => {
  try {

    dispatch({
      type: "remainingBudgetRequest"
    })

    const { data } = await axios.get(`/api/getRemainingBudget`)

    dispatch({
      type: "remainingBudgetSuccess",
      payload: data.remainingBudget,
    })

  } catch (error) {

    dispatch({
      type: "remainingBudgetFailure",
      payload: error.response.data.message,
    })
  }
}

export const updateTransaction = (id, title, amount, category) => async (dispatch) => {
  try {
    dispatch({
      type: "updateTransactionRequest",
    });

    const { data } = await axios.put(
      `/api/updateTransaction/${id}`,
      {
        title,
        amount,
        category,

      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "updateTransactionSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "updateTransactionFailure",
      payload: error.response.data.message,
    });
  }
}

export const groupTransaction = () => async (dispatch) => {
  try {

    dispatch({
      type: "groupTransactionRequest"
    })

    const { data } = await axios.get(`/api/groupTransactionCategories`)
    console.log(data.uniqueCategories)
    dispatch({
      type: "groupTransactionSuccess",
      payload: data.uniqueCategories,
    })

  } catch (error) {

    dispatch({
      type: "groupTransactionFailure",
      payload: error.response.data.message,
    })
  }
}

export const filterByCategory = (category) => async (dispatch) => {
  try {

    dispatch({
      type: "filterByCategoryRequest"
    })

    const { data } = await axios.get(`/api/filterTransactionsByCategory/${category}`)

    dispatch({
      type: "filterByCategorySuccess",
      payload: data.transactionsPerCategory,
    })

  } catch (error) {

    dispatch({
      type: "filterByCategoryFailure",
      payload: error.response.data.message,
    })
  }
}

export const filterByDate = (startDate, endDate) => async (dispatch) => {
  try {

    dispatch({
      type: "filterByDateRequest"
    })

    const { data } = await axios.get(`/api/filterTransactionsByDate/${startDate}/${endDate}`)
    console.log(data)
    dispatch({
      type: "filterByDateSuccess",
      payload: data.transactionsPerDate,
    })

  } catch (error) {

    dispatch({
      type: "filterByDateFailure",
      payload: error.response.data.message,
    })
  }
}

export const groupTransactionByDate = () => async (dispatch) => {
  try {

    dispatch({
      type: "groupTransactionByDateRequest"
    })

    const { data } = await axios.get(`/api/groupTransactionsByDate`)

    dispatch({
      type: "groupTransactionByDateSuccess",
      payload: data.uniqueDates,
    })

  } catch (error) {

    dispatch({
      type: "groupTransactionByDateFailure",
      payload: error.response.data.message,
    })
  }
}