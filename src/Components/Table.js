import React from 'react';
import Item from './Item';

export default function Table({inventory, setInventory, currentSearch}) {
  return (
    <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th> Actions </th>
        </tr>
        {inventory.map((item) => {
          return (
            <Item item = {item} inventory = {inventory} setInventory = {setInventory}
            currentSearch = {currentSearch}/>
          )
        })}
      </table>
  )
}
