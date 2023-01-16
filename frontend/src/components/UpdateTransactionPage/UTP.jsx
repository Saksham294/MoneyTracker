import React from 'react'
import { useParams } from 'react-router-dom'
import './UTP.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactionDetails } from '../../Actions/transactionActions'
import { updateTransaction } from '../../Actions/transactionActions'

const UTP = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    const [transaction, setTransaction] = useState({
        title: '',
        amount: 0,
        type: '',
        category: '',
    })
    
    const { title, amount, type, category } = transaction
    useEffect(() => {
        dispatch(getTransactionDetails(id))
    }, [dispatch, id])

    const { transactionDetails } = useSelector(state => state.getTransactionDetails)
  


    const onChange = (e) => {
        setTransaction({ ...transaction, [e.target.name]: e.target.value })
    }

    return (
        <div>
            {   /* Create update transaction form */}

            <form className='updateForm'
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(updateTransaction(id,title, amount, category))
                }}
            >
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        className='form-control'
                        id='title'
                        name='title'
                        value={title}

                        onChange={(e) => onChange(e)}
                    />

                    <label htmlFor='amount'>Amount</label>
                    <input
                        type='number'
                        className='form-control'
                        id='amount'
                        name='amount'
                        value={amount}
                        onChange={(e) => onChange(e)}
                    />

                    <label htmlFor='category'>Category</label>
                    <input
                        type='text'
                        className='form-control'
                        id='category'
                        name='category'
                        value={category}
                        onChange={(e) => onChange(e)}
                    />
                    

            
                    <button type='submit' className='btn'>
                        Update
                    </button>


                </div>
            </form>




        </div>
    )
}

export default UTP
