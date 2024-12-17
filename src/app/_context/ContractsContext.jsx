"use client"

import { createContext, useState } from "react";

export const ContractsContext = createContext();

export const ContractsContextProvider = ({children}) => {
    const [selectedContracts, setSelectedContracts] = useState([]);

    return (
        <ContractsContext.Provider value={{selectedContracts, setSelectedContracts}}>
            {children}
        </ContractsContext.Provider>
    )
}