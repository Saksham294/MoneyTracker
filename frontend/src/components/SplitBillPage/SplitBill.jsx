import React,{useState} from 'react'
import { useEffect } from 'react'
import './SplitBill.css'

const SplitBill = () => {
    //Create logic for splitting bill

    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [category,setCategory] = useState('')
    const [enterNumber,setEnterNumber] = useState(0)
    const [people,setPeople] = useState([])

    const onChange = (e) => {
        const {name,value} = e.target
        if(name==='title'){
            setTitle(value)
        }
        if(name==='amount'){
            setAmount(value)
        }
        if(name==='cat'){
            setCategory(value)
        }
    }
    const [name,setName] = useState('')
    const [amt,setAmt] = useState(0)

    const addPeople = (e,name,amt) => {
        e.preventDefault()
        //add person to people array
        setPeople([...people,{name,amt}])

        //empty input fields after adding one person
        setName('')
        setAmt(0)   
    }
    console.log(people)

    useEffect(() => {
        //Calculate total amount to be paid by each person
        if(enterNumber === people.length){
            calculate()
        }
    
    },[people])

    //Calculate who owes who and how much
    const calculate = () => {
        //Calculate total amount to be paid by each person
        const total = amount/enterNumber
        console.log(total)
        //Loop through people array
        people.map((person) => {
            //Check if person paid more than the total amount
            if(person.amt > total){
                //If person paid more than the total amount, calculate how much they owe
                const owe = person.amt - total
                console.log(`${person.name} owes ${owe}`)
            }
            //Check if person paid less than the total amount
            if(person.amt < total){
                //If person paid less than the total amount, calculate how much they are owed
                const owed = total - person.amt
                console.log(`${person.name} is owed ${owed}`)
            }
        })
    }
    




 



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

                    <div className='people'>

                        {
                            //Loop through number of people and create input fields for each person 
//Auto submit form after creating input fields for each person

                            [...Array(enterNumber)].map((e,i) => (
                                <div className='person'>
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

                             {
                                enterNumber===people.length?
                                null:
                                <button disabled={enterNumber===people.length?true:false} className='btn btn-primary' onClick={(e) => addPeople(e,name,amt)}>Add Person</button>
                             }  
                                </div>
                            ))

            
                        }

                    </div>
        </div>
        </form>
        </div>
    )
}

export default SplitBill
