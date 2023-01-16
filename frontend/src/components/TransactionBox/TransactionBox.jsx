import { Button, Typography } from '@mui/material'
import React from 'react'
import './TransactionBox.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dateFormat from 'dateformat';
import randomcolor from 'randomcolor';
import {useDispatch} from 'react-redux'
import {deleteTransaction} from '../../Actions/transactionActions'
import {useParams} from 'react-router-dom'
import { loadUser,getMyTransactions } from '../../Actions/userActions';
import { Link } from 'react-router-dom'

const TransactionBox = ({id,title,amount,date,category,isReceived}) => {
    const dispatch = useDispatch()

    const deleteHandler = async () => {
       await dispatch(deleteTransaction(id))
       await dispatch(getMyTransactions())
      await  dispatch(loadUser())
    }


    var formattedDate=dateFormat(date,"dd/mm/yyyy")
    return (
        <div>
            <div className="transactionContainer" >
                <div className="transactionTitle">
                    <Typography variant='h4' sx={{fontFamily:"Lato"}}> {title}</Typography>
                    </div>
                    <div className="transactionAmount">
                        <Typography variant='h5' sx={{fontFamily:"Montserrat"}}>₹ {amount}</Typography>
                        </div>    
                        <div className="transactionDate">
                           <Typography variant='h6'>{formattedDate}</Typography>
                          <div className="statusAndBtns">
                                <div className="status" style={{backgroundColor
                                :isReceived?("#0BDA51"):("#fd5c63")}
                                }>
                                    <Typography variant='h6' sx={{fontFamily:"Montserrat"}}>{isReceived?"Received":"Spent"}</Typography>
                                    </div>
                          <div className="buttonsContainer">
                          <Link to={`/updateTransaction/${id}`}><Button className='editBtn' startIcon={<EditIcon/>}></Button></Link>
                           <Button onClick={deleteHandler} className='deleteBtn' startIcon={<DeleteIcon/>}></Button>
                          </div>
                          </div>
</div>
            </div>
        </div>
    )
}

export default TransactionBox
