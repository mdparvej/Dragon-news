import { signOut } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../../Pages/AuthContex/AuthContex';

export const AuthContex = createContext();
const userSignOut = () => {
    return signOut(auth,)
}

const AuthProvider = ({children}) => {
    const user = {displayName : 'Batas Ali'};

    const AuthInfo = {user};
    return (
        <AuthContex.Provider value={AuthInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;