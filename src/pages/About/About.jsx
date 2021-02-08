import React, { Component } from 'react'

//Router
import {Link} from 'react-router-dom'
export class About extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <h1>About</h1>
                <hr />
                <div>
                    <h2>

                        Project Description:

                    </h2>
                    <br/>
                    E-commerce website built using React, Redux, React Router, Firebase, Bootstrap

                    <hr/>

                    <h2>Functionalities:</h2>
                    <br/>
                        <ul>
                            <li>Dynamic routing - Clicking on every category lists coresponding products</li>
                            <li>The cart stores items, items can be removed from the cart, the cart updates and is synchronized across pages </li>
                            <li>Clicking the product takes you directly to the project page</li>
                            <li>Login with Google and Github</li>
                            
                        </ul>


                </div>
                <br/>
                <Link to='/'> ← Go Back</Link>
            </div>
        )
    }
}

export default About
