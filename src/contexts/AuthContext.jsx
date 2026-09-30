import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [user, setUser] = useState()
    const [verifyEmail, setVerifyEmail] = useState(null);

    return (
        <AuthContext.Provider value={{ user, token, setToken, setUser, verifyEmail }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider };

export default function useAuth() {
    return useContext(AuthContext)
}