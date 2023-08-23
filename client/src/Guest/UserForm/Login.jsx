import React, { useContext, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { GlobalContext } from '../../Context/context'
import './style.css'
import { Link } from 'react-router-dom'


export default function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { state, dispatch } = useContext(GlobalContext)

    const loginUser = (e) => {
        e.preventDefault();

        const payload = { email, password }

        axios.post('/api/login', payload)
            .then((json) => {
                Cookies.set('token', json.data.token)
                dispatch({
                    type: "USER_LOGIN",
                    token: json.data.token
                })

            })
            .catch(err => alert("Please Check Username or Password"))

    }

    return (
        <div className="container-center">
            <form className="form" onSubmit={loginUser}>
                <p className="form-title">Sign in to your account</p>
                <div className="input-container">
                    <input
                        type="email"
                        name='email'
                        placeholder="Enter email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span></span>
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="submit">
                    Sign in
                </button>
                <p className="signup-link">
                    No account? <Link to='/signup' >Sign up</Link>
                </p>
            </form>
        </div>
    )
}