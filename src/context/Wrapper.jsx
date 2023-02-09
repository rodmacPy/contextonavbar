import { useState } from "react"
import { FormContext } from "./FormContext"

export const Wrapper = ({ children }) => {

    const [formState, setFormState] = useState('')

    return (
        <FormContext.Provider value={{formState, setFormState}}>
            {children}
        </FormContext.Provider>
    )
}
