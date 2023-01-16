import React,{Fragment} from 'react'
import './AboutUs.css'


import Footer from '../Footer/Footer'

function AboutUs() {
    const image='https://img.freepik.com/free-vector/happy-young-couple-having-fun-girl-guy-dancing-party-celebrating-good-news-flat-illustration_74855-10820.jpg?w=2000'
    const bgimg="https://img.freepik.com/free-vector/happy-rich-banker-celebrating-income-growth_74855-5867.jpg?w=1480&t=st=1673721928~exp=1673722528~hmac=92a09b24d869a7d56aaa6848c623ba15f7a1ab72ee1d4e29fdb08557a3bc0bce"
    return (
        <div>
<Fragment>
<div className="headBox">
    <img src={bgimg}></img>
<div className="bigTitle">
Personal Finance Simplified!
</div>
</div>
<div className="contentBox">
We are Wallet Tracer!
<br />

</div>
<div className="cb">
<div className="image1">
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZGumr5RNs20o1BBnu6PZW9np-976y4DiRog&usqp=CAU'></img>
</div>
<div className="content1">
We are a team of passionate developers who are dedicated to help you manage your finances.
</div>
</div>
<div className="contentBox">
Easy,Simple and Fast
<br />

</div>
<div className="cb">

<div className="content2">
We provide you with a simple and easy to use platform to manage your finances.

</div>
<div className="image2">
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYvCcc7SYxisgCRc9dhCP-MjY5brPmEyf7jw&usqp=CAU'></img>
</div>
</div>

<div className="contentBox">
Manage your finances with ease
<br />

</div>
<div className="cb">
<div className="image3">
    <img src={image}></img>
</div>

<div className="content3">
Manage your finances with ease and get a clear picture of your finances.
</div>

</div>
</Fragment>
<Footer/>
        </div>
    )
}

export default AboutUs
//Creating Impact through words