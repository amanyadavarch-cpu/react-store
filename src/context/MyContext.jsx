import { useState } from "react";
import { MyStore } from "./Mystore";



export const ContextProvider = ({children})=>{

   const [productsData, setProducutsData] = useState([])
   console.log(productsData)

   return(
    <MyStore.Provider value={{productsData, setProducutsData}}>
        {children}
    </MyStore.Provider>
    )
};