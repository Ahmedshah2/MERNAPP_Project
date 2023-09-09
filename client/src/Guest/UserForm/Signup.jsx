import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Signupform() {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const SignupUser = (e) => {
        e.preventDefault();
        const payload = { email, password, username }

        axios.post('/api/signup', payload)
            .then((json) => window.location.reload())
            .catch(err => alert(err.message))

    }

    return (
        <div className="container-center">
            <form className="form" onSubmit={SignupUser}>
                <p className="form-title">Sign Up/Register to account</p>
                <div className="input-container">
                    <input
                        type="name"
                        placeholder="Enter username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <span></span>
                </div>
                <div className="input-container">
                    <input
                        type="email"
                        placeholder="Enter email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span></span>
                </div>
                <div className="input-container">
                    <input
                        name="password"
                        required
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="submit">
                    Sign Up
                </button>
                <p className="signup-link">
                    Have an Account? <Link to="/login">Sign in</Link>
                </p>
            </form>
        </div>
    )
}