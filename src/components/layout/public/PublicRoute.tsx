import {Route} from 'react-router-dom';
import PublicLayout from './PublicLayout';
import React from 'react';

export default function PublicRoute({
    component : Component,
    ...props
} : any)
{
return <React.Fragment> 
    <Route>
        {...props}
        render = {(innerProps: any) => {
            <PublicLayout>
                <Component {...innerProps}></Component>
            </PublicLayout>
        }}
    </Route>
</React.Fragment>
}