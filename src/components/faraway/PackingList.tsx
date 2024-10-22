import Item from '../../interfaces/Item';

function ItemComponent({ props, ondeleteItem, onCheckItem }: any) {
    return (
        <li>
            <input type='checkbox' value={props.packed} onChange={() => { onCheckItem(props.id) }} />
            <span style={props.packed ? { textDecoration: 'line-through' } : {}}>
                {props.quantity} {props.description}
            </span>
            <button onClick={() => ondeleteItem(props.id)}>❌</button>
        </li>
    );
}


export default function PackingList({ items, ondeleteItem, onCheckItem , onClear }: any) {
    return (
        <div className='list'>
            <ul>
                {
                    items.length === 0 ? (<p style={{ textAlign: 'center' }}>No Items Yet</p>) :
                        (items.map((item: Item) => (
                            <ItemComponent props={item} ondeleteItem={ondeleteItem} onCheckItem={onCheckItem} key={item.id} />
                        )
                        )
                        )
                }
            </ul>
            <button onClick={onClear}>Clear List</button>
        </div>
    )
}
