import React, {useState} from 'react'
import Searchbar from '../Components/Searchbar';
import Table from '../Components/Table';
import AddItem from '../Components/AddItem';

const data = [
    { name: "Computer", price: 500, description: "Dell Laptop", id:1 },
    { name: "Test", price: 19, description: "1000", id: 2 },
    { name: "Anom", price: 19, description: "Male" , id: 3},
  ]

export default function TablePage() {
    const [inventory, setInventory] = useState(data);
    const [currentSearch, setCurrentSearch] = useState("");
    return (
        <>
            <Searchbar setCurrentSearch = {setCurrentSearch}/>
            <Table inventory = {inventory} setInventory = {setInventory} currentSearch = {currentSearch}/>
            <AddItem inventory = {inventory} setInventory = {setInventory} />
        </>
        
    )
}
