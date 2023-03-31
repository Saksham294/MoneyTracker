import React, { useState, useEffect } from 'react'
import './User.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Button, Dialog, Typography } from '@mui/material';

import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../Actions/userActions';
import UserIcon from '../UserIcon/UserIcon';
import { remainingBudget } from '../../Actions/transactionActions';


const User = () => {
    const { user, loading: userLoading } = useSelector((state) => state.user)

    const dispatch = useDispatch()

    let userImage = "";
    if (user.avatar != undefined) {
        userImage = user.avatar.url;
    }

    const { remainingBudget: remainingBudgetValue } = useSelector((state) => state.remainingBudget)

    useEffect(() => {
        dispatch(remainingBudget())
    }, [dispatch])


    return (
        <div className='containerBox'>
            <div className="card">
                {userImage != undefined ? <Avatar sx={{ width: 250, height: 250, marginLeft: "6rem", marginTop: "2rem" }} src={userImage} /> : <AccountCircleIcon sx={{ fontSize: 210, marginTop: "2rem", marginLeft: "8rem" }} className='account-icon' />}
                {/* <AccountCircleIcon sx={{fontSize:210,marginTop:"2rem",marginLeft:"8rem"}} className='account-icon'/> */}
                <Typography variant='h2' sx={{ marginTop: "1rem" }} className='name'>{user.name}</Typography>

                <div className="budget">
                    <div className="initialBudget">
                        <Typography variant='h4' sx={{ fontFamily: "Lato", }}>Initial Balance</Typography>
                        <Typography variant='h4' sx={{ fontFamily: "Lato", marginTop: "1rem" }}>₹ {user.budget}</Typography>
                    </div>
                    <div className="remainingBudget">
                        <Typography variant='h4' sx={{ fontFamily: "Lato" }}>Now Balance</Typography>
                        <Typography variant='h4' sx={{ fontFamily: "Lato", marginTop: "1rem" }}>₹ {remainingBudgetValue}</Typography>
                    </div>
                </div>


            </div>
            <div className="dues">
                <div className="amountYouOwe">
                    <Typography variant='h4' sx={{ fontFamily: "Lato" }}>Amount You Owe</Typography>
                    <Typography variant='h4' sx={{ fontFamily: "Lato" }}>₹ 0</Typography>

                </div>
                <div className="amountOthersOweYou">
                    <Typography variant='h4' sx={{ fontFamily: "Lato" }}>Amount Others Owe You</Typography>
                    <Typography variant='h4' sx={{ fontFamily: "Lato" }}>₹ 0</Typography>

                </div>
            </div>


        </div>
    )
}

export default User
