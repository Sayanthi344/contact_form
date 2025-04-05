import './App.css'
import { useState } from 'react';
export const ContactFrom = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handelSubmitFrom = (e) => {
        e.preventDefault();
        const contactData = {
            username,
            email,
            message
        }
        console.log(contactData);
    }
    return (
        <div className="container">
            <div className="card">
                <h1>Contact From</h1>
                <from onsubmit={handelSubmitFrom}> 
                    <label htmlFor="username">UserName</label>
                    <input type="text"  name="username"
                     required autoComplete="off" 
                     value={username} 
                     onChange={(e)=> setUsername(e.target.value)}/>
                    <label htmlFor="email">Email</label>
                    <input type="email"  name="email" 
                    required autoComplete="off"
                     value={email}
                      onChange={(e)=> setEmail(e.target.value)}/>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" 
                    required autoComplete="off" rows="6" 
                    value={message} 
                    onChange={(e)=> setMessage(e.target.value)}></textarea>
                    <button type="submit">Submit</button>
                </from>
            </div>
        </div>
    )
}