import { createContext, useReducer } from "react";


export const AuthContext = createContext();

export const authReducer = (state, action) => {

    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            }
        default:
            return state
    }

}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer,{
        user: null,
        loading: true,
        error: null
    
    })
    console.log("AuthContext state:", state)
    

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}


