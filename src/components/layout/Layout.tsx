import React, {useState} from  'react';
import LocalStorageService from '../../config/LocalStorageService';

function Layout(){
    const isUserAuthenticated = LocalStorageService.getTokenByKey("access_token");
    return (
        <>
            <Switch>
                <Public
            </Switch>
        </>
    )
}