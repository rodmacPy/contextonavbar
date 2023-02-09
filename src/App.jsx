import React from 'react'
import { FormWrapper } from './components/FormWrapper'
import { Navbar } from './components/Navbar'
import { Wrapper } from './context/Wrapper'

export const App = () => {
    return (
        <Wrapper>
			<Navbar />
			<FormWrapper />
		</Wrapper>
    )
}
