import React from 'react'
import './NTP.css'
import { Button, Grid, Link, Paper, Typography } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../Actions/userActions';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Snackbar } from '@mui/material';
import { useEffect } from 'react';
import { newTransaction } from '../../Actions/transactionActions';


const NTP = () => {

  const [open, setOpen] = React.useState(false);
  const { loading } = useSelector(state => state.user)

//   const { message } = useSelector(state => state.like)

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const dispatch = useDispatch()

  const vertical = 'top'
  const horizontal = 'center'
  const [amount, setAmount] = React.useState()
  const [title, setTitle] = React.useState("")
  const [category,setCategory]=React.useState("")
const [isReceived,setIsReceived]=React.useState(false)
  const submitHandler = async (e) => {

    e.preventDefault();
await dispatch(newTransaction(title,amount,category,isReceived))

    dispatch(loadUser());
    handleClick()

  };


  return (
    <div>
      <div className="newTransactionContainer">
        <form onSubmit={submitHandler}>
          <h1>New Transaction</h1>

          <div className="title">
            <input type="text" placeholder='Title'
              value={title} onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="amount">
            <input type="number" placeholder='Amount'
              value={amount} onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="category">
            <input type="text" placeholder='Category'
              value={category} onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="isReceived">
            <input type="checkbox" placeholder='Is Received'
              checked={isReceived} onChange={() => setIsReceived(!isReceived)}
            /> Is Received? 
          </div>
          <Button disabled={loading} type="submit" variant='contained' sx={{
            backgroundColor: "#35dea0", ':hover': {
              bgcolor: '#35dea0', 
              color: 'white',
            }
          }} >
            Add
          </Button>
        </form>
        {loading ? null : <Stack>
          <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
             "Good"
            </Alert>
          </Snackbar></Stack>}
      </div>
    </div>
  )
}

export default NTP
