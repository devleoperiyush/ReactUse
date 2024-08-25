import {Route} from 'react-router-dom';
import PublicLayout from './PublicLayout';

export default function PublicRoute({
    component : Component,
    ...props
} : any)
{
return (
    <Route
        {...props}
        element = {
            <PublicLayout>
                <Component></Component>
            </PublicLayout>
        }
     />
)
}