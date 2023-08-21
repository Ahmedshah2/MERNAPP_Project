import Guest from './Guest';
import User from "./User";
import Admin from "./Admin";
import React, { useContext, useState } from 'react';
import { GlobalContext } from './Context/context';
import { decodeToken } from 'react-jwt';

export const apiroute = '/'

const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest,
}
const getUserRole = (param) => ComponentByRoles[param] || ComponentByRoles['guest'];

export default function App() {
  const { state, dispatch } = useContext(GlobalContext)
  // const [role, setRole] = useState(getUserRole);

  const decodeUser = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const res = decodeToken(token)
      return res?.role
    }
  }

  const currentToken = decodeUser(state.token)
  const CurrentUser = getUserRole(currentToken);
  return (<CurrentUser />
  )
}