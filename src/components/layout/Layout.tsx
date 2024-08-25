import {useState} from  'react';
import LocalStorageService from '../../config/LocalStorageService';
import PublicRoute from './public/PublicRoute';
import {Routes} from 'react-router-dom';
import Login from '../login/Login';

export default function Layout(){
    const isUserAuthenticated = LocalStorageService.getTokenByKey("access_token");
    return (
        <>
            <Routes>
                <PublicRoute 
                path= "/login" 
                isUserAuthenticated = {isUserAuthenticated} 
                exact 
                component ={Login} />
            </Routes>
        </>
    )
}