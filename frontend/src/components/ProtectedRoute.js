import React, {useContext} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const currentUser = useContext(CurrentUserContext);

  return currentUser.isLoggedIn ?  children : <Navigate to='/sign-up'/>
}

export default ProtectedRoute;