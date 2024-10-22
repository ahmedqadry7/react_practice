import { useState } from 'react'
import Item from '../../interfaces/Item';

export default function Form({ onAddItems }: any) {
    //States for updates of data
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e: any): void {
        e.preventDefault();

        if (!description)
            return alert("Please enter description");

        //==========This newItem of "Item" type, this allow to create new item of exact same data=========== 
        //You don't have to pass data because of states
        const newItem: Item = { id: Date.now(), description, quantity, packed: false }

        console.log(newItem);
        onAddItems(newItem);
        setDescription('')
        setQuantity(1)
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip</h3>
            {/* this line to auto update value of quantity to add to list */}
            <select name="" id="" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map
                    ((num) => (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ))}
            </select>
            <input type="text" placeholder='Item...'
                // this line to auto update value of text field to add to list
                value={description} onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
        </form>
    );

}
