import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext'

export const Navbar = () => {
    const {formState} = useContext(FormContext)
    return (
        <header className='navbar'>
            <h1>Hi <span>{formState ? formState:'Bob Smith'}</span></h1>
        </header>
    )
}
