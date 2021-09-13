/* eslint-disable react-hooks/exhaustive-deps */
import {AdminContext} from "../contexts/AdminContext";
import {useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import axios from "axios";

function AdminWrapper({children}) {
    const [admin, setAdmin] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        axios.post(`${process.env.REACT_APP_LOCALHOST_API}/authentication/refresh-token`, {},{
            withCredentials: true
        })
            .then(
                result => success(result),
                result => failure(result));

        function success(result) {
            if (result.data && result.data.succeeded) {
                setAdmin(result.data.data.item1);
                setLoggedIn(true)
            }
        }

        function failure(result) {
            console.log(result);
        }

    }, []);


    return (
        <AdminContext.Provider value={{
            admin: admin,
            authenticated: loggedIn,
            setAdmin,
            setLoggedIn
        }}>
            <Router>{children}</Router>
        </AdminContext.Provider>
    )
}


export default AdminWrapper;