import React,{useState} from 'react'
import { useEffect } from 'react'
import './SplitBill.css'

const SplitBill = () => {
    //Create logic for splitting bill

    const [bill, setBill] = useState({
        title: '',
        amount: 0,
        category: '',
    })

    const { title, amount, category } = bill
    
    const onChange = (e) => {
        setBill({ ...bill, [e.target.name]: e.target.value })
    }
  
    //Add logic to split bill
    // const splitBill = (e) => {
    //     e.preventDefault()
    //     const split = amount / people
    //     console.log(split)
    // }

    //Add logic to add people to bill
    const [enterNumber, setEnterNumber] = useState(0)




    let peopleArray=[]
    //Re render when peopleArray changes and add people to array



    function addPeople(e,name,amount){
e.preventDefault()



        peopleArray.push({name,amount})
        console.log(peopleArray)
    }


    const [name,setName] = useState('')
    const [amt,setAmt] = useState(0)



    return (
        <div>
{/*Create form to split bill */}
            <form className='splitForm'>
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
                    <label htmlFor='cat'>Category</label>
                    <input

                        type='text'
                        className='form-control'
                        id='cat'
                        name='cat'
                        value={category}
                        onChange={(e) => onChange(e)}
                    />

                    <label htmlFor='people'>Number of People</label>
                    <input
                        type='number'
                        className='form-control'
                        id='people'
                        name='people'
                        value={enterNumber}
                        onChange={(e) => setEnterNumber(e.target.value)}
                    />
        {enterNumber>0? 

        <div>
            {
                [...Array(enterNumber)].map((e,i)=>{
                    return(
                        <div key={i}>
                            <label htmlFor='name'>Name</label>
                            <input
                                type='text'
                                className='form-control'
                                id='name'
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor='amt'>Amount</label>
                            <input
                                type='number'
                                className='form-control'
                                id='amt'
                                name='amt'
                                value={amt}
                                onChange={(e) => setAmt(e.target.value)}
                            />
                            <button onClick={(e)=>addPeople(e,name,amt)}>Add</button>
                            {peopleArray.map((e,i)=>{
                                return(
                                    <div key={i}>
                                        <p>{e.name}</p>
                                        <p>{e.amount}</p>
                                    </div>
                                )   
                            })
                            }
                        </div>
                    )
                    })
            }
        </div>
        
        :null}



        </div>
        </form>
        </div>
    )
}

export default SplitBill
