import React from 'react'

export default function Searchbar({setCurrentSearch}) {

    const handleCurrentSearch = (event) => {
        event.preventDefault();

        const fieldValue = event.target.value;
        setCurrentSearch(fieldValue)
      }

    return (
        <>
            <input
                        type = "text"
                        name = "search"
                        required = "required"
                        placeholder = "Search by name"
                        onChange={handleCurrentSearch}
            />
        </>
        
    )
}
