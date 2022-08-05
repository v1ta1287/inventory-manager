import React, {useState} from 'react';
import {nanoid} from 'nanoid';


export default function AddItem({inventory, setInventory}) {
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newDescription, setNewDescription] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        const myItem = {
            id: nanoid(),
            name: newName,
            price: newPrice,
            description: newDescription
        }

        const newInventory = [...inventory, myItem];
        setInventory(newInventory);
        setNewName("");
        setNewPrice("");
        setNewDescription("");
    }
    
    return (
        <>
            <div>Add an item</div>
            <form onSubmit={handleSubmit}>
                <input
                    type = "text"
                    name = "name"
                    required = "required"
                    placeholder = "Name of item"
                    value = {newName}
                    onChange={event => setNewName(event.target.value)}
                />
                <input
                    type = "text"
                    name = "price"
                    required = "required"
                    placeholder = "Price of item"
                    value = {newPrice}
                    onChange={event => setNewPrice(event.target.value)}
                />
                <input
                    type = "text"
                    name = "description"
                    required = "required"
                    placeholder = "Description of item"
                    value = {newDescription}
                    onChange={event => setNewDescription(event.target.value)}
                />
                <button type = "submit"> Add item</button>
            </form>
        
        </>    
        
    )
}
