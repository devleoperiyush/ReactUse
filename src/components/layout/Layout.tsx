import LocalStorageService from '../../config/LocalStorageService';
import {Route, Routes} from 'react-router-dom';
import Login from '../login/Login';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackComponent from '../shared/FallbackComponent';
import PublicLayout from './public/PublicLayout';
import LandingPage from './dashboard/LandingPage';
import PrivateLayout from './private/PrivateLayout';

export default function Layout(){
    const isUserAuthenticated = LocalStorageService.getTokenByKey("access_token");
    console.log("Pare",isUserAuthenticated);
    return (
        <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onReset={() => {
        // Reset the state of your application
      }}
    >
         <Routes>
         <Route
            path= "/login"
            element = {
                    <PublicLayout 
                        isUserAuthenticated = {isUserAuthenticated}>
                        <Login></Login>
                    </PublicLayout>
            }
     />
      <Route
            path= "/"
            element = {
                    <PublicLayout 
                        isUserAuthenticated = {isUserAuthenticated}>
                        <Login></Login>
                    </PublicLayout>
            }
     />
     <Route
            path= "/landing"
            element = {
                    <PrivateLayout isUserAuthenticated = {isUserAuthenticated}>
                        <LandingPage></LandingPage>
                    </PrivateLayout>
            }
     />
        </Routes>
    </ErrorBoundary>
       
    )
}