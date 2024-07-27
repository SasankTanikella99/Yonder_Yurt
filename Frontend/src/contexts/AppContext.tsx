import React, { useContext, useState } from "react";
import Toast from "../Components/Toast";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";


type ToastMessage = {
    message: string,
    type: 'SUCCESS' | 'ERROR' | 'WARNING';
}

type AppContext = {
    showToast: (toastMessage: ToastMessage) => void;
    isLoggedIn: boolean;
}

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
    const {isError} = useQuery("validateToken", apiClient.validateToken, {
        retry: false,
    })
    
    const [toast, setToast] = useState<ToastMessage | undefined>(undefined)
    return (
        <AppContext.Provider value={{
            showToast: (toastMessage: ToastMessage) => {
                setToast(toastMessage)   
            },
            isLoggedIn:!isError, // true if token is valid, false otherwise. This is used to hide navigation links based on user authentication.
        }}>
            {toast && (<Toast message={toast.message} type={toast.type} onClose={() => {
                setToast(undefined)
            }} />)}
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContext;
}

export default AppContext