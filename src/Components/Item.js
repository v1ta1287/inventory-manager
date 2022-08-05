import React, {useState}from 'react'

export default function Item({item, inventory, setInventory, currentSearch}) {

    const [isEditable, setIsEditable] = useState(false);
    const [edit, setEdit] = useState(['','']);

    const handleDeleteClick = (itemId) =>{
        const newInventory = [...inventory];
        const index = inventory.findIndex((item) => item.id === itemId);
        newInventory.splice(index, 1);
        setInventory(newInventory); 
      }
    
    const handleEditClick = () => {
        setIsEditable(!isEditable)
        console.log("test")
    }

    const handleEditRow = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

    
        setEdit([fieldValue, fieldName])
    }

    const handleSaveEdit = (itemId) => {
        const newInventory = [...inventory];
        const index = inventory.findIndex((item) => item.id === itemId);
        if (edit[1] === 'name'){
            newInventory[index].name = edit[0];
        }
        else if (edit[1] === 'price'){
            newInventory[index].price = edit[0];
        }
        else if (edit[1] === 'description'){
            newInventory[index].description = edit[0];
        }
       
        setInventory(newInventory);
        handleEditClick();

    }
    
    if (item.name.toLowerCase().includes(currentSearch.toLowerCase())){
        if (!isEditable){
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td> 
                        <button type = "button" onClick={() => handleEditClick(item.id)}> Edit Item </button>
                        <button type = "button" onClick={() => handleDeleteClick(item.id)}> Delete Item </button>
                    </td>
                </tr>
            )
        }
        else {
            return (
                <tr>
                    <td>
                        <input
                        type = "text"
                        name = "name"
                        required = "required"
                        placeholder = "Name of item"
                        onChange={handleEditRow}
                        />
                    </td>
                    <td>
                        <input
                        type = "text"
                        name = "price"
                        required = "required"
                        placeholder = "Price of item"
                        onChange={handleEditRow}
                        />
                    </td>
                    <td>
                        <input
                        type = "text"
                        name = "description"
                        required = "required"
                        placeholder = "Description of item"
                        onChange={handleEditRow}
                        />
                    </td>
                    <td> 
                        <button type = "button" onClick={() => handleSaveEdit(item.id)}> Save Edit </button>
                        <button type = "button" onClick={() => handleEditClick(item.id)}> Cancel Edit </button>
                    </td>
                </tr>
            )
        }
    }
    
    
}
