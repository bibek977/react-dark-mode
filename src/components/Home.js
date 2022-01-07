import React from 'react'
import './css/home.css'

export default function Home(props) {
    return (
        <div style={props.myStyle} className="home">
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li><button onClick={props.clickState}>{props.mode}</button></li>
            </ul>
        </div>
    )
}
