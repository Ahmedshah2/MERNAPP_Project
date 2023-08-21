import React, { useEffect, useContext } from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import { GlobalContext } from '../../Context/context'
import { decodeToken } from 'react-jwt'

export default function Sidebar() {



    const location = useLocation()
    const { state, dispatch } = useContext(GlobalContext)
    const currentUser = decodeToken(state.token)

    const NavItems = [
        {
            tab: "Orders",
            url: "/orders",
            icon: <BiCategoryAlt />
        },
        {
            tab: "Categories",
            url: "/category",
            icon: <BiCategoryAlt />
        },
        {
            tab: "Brands",
            url: "/brands",
            icon: <BiCategoryAlt />
        },
        {
            tab: "Products",
            url: "/products",
            icon: <BiCategoryAlt />
        },


    ]


    return (
        <>

            <div className="bg-secondry p-3 d-flex text-white justify-content-between align-items-center">
                <span>User : {currentUser.username}</span>
                <button className="btn btn-outline-light"
                    onClick={() => dispatch({ type: "USER_LOGOUT" })}>Logout</button>
            </div>


            <ul className="nav flex-column pt-3">
                {
                    NavItems.map((val, key) =>

                        <li key={key} className={`nav-item m-2  ${location.pathname == val.url ? 'bg-white rounded' : null}`}>
                            <Link className='nav-link d-flex align-items-center  gap-2' to={val.url}>
                                <span>{val.icon}</span>

                                <span>{val.tab}</span>
                            </Link>
                        </li>)
                }

            </ul>

        </>
    )
}