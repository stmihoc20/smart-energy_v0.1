import {React, useEffect, useState} from 'react';
import {Outlet, Navigate } from "react-router";

export default function GuardedRoute({auth}){
    const [element, setElement] = useState(<Outlet />);

    useEffect(() => {
        console.log(auth);
        if(!auth){
            setElement(<Outlet />);
        }
        else {
            setElement(<Navigate to="/homepage" />);
        }
    }, [auth])

    return element;
}