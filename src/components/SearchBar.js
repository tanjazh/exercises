import React, { useState } from 'react'
import { Search as SearchIcon } from 'react-bootstrap-icons'

export default function SearchBar({ onSubmit }) {
    const [value, setValue] = useState('')
    function submit(e) {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            onSubmit(e.target.value)
            setValue('')
        }
    }
    function handleChange(e) {
        setValue(e.target.value)
    }
    return (
        <div>
            <SearchIcon size={27} className='icon' />
            <input
                onKeyUp={submit}
                onChange={handleChange}
                className='icon-input'
                type='text'
                value={value}
                placeholder='Search TV-Show you like' />
        </div>
    )
}
