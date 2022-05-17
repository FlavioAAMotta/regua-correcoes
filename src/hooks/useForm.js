import { useState } from 'react'

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const handleInputFormChange = (event) => {
        const { value, name } = event.target
        setForm({ ...form, [name]: value })
    }

    const clear = () => {
        setForm(initialState)
    }
    return [form, handleInputFormChange, clear]
}

export default useForm