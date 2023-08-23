import React from 'react'
import GuestNav from './components/GuestNav'
import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Home from './HomePage';
import LoginForm from './UserForm/Login'
import Signupform from './UserForm/Signup';


export default function Guest() {
    return (
        <>
            <GuestNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<Signupform />} />
                <Route path="*" element={<Navigate to='/login' replace={true} />} />
            </Routes>
        </>
    )
}