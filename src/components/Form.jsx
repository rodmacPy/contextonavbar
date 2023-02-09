import { useContext } from 'react'
import { FormContext } from '../context/FormContext'

export const Form = () => {
    const { formState, setFormState } = useContext(FormContext)
    console.log(formState)
    const onResetForm = () => {
        setFormState(initialForm)
    }

    const onInputChange = ({ target }) => {
        const { value } = target
        setFormState(value)
    }
    return (
        <form>
            <label htmlFor="name">Your Name</label>
            <input 
            type="text" 
            placeholder='Bob Smith'
            name='formState'
            value={formState}
            onChange={onInputChange}/>
        </form>
    )
}
