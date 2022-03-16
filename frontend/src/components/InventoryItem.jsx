import {useDispatch} from 'react-redux';
import {deleteInventory} from '../features/inventories/inventories.slice';
import {Link} from 'react-router-dom';



function InventoryItem({inventory}) {
    const dispatch = useDispatch()
    return (
        <div className="job">
            <div>
                {new Date(inventory.createdAt).toLocaleString('en-US')}
            </div>
            <Link to={`/${inventory._id}`}>{inventory.name}</Link>
            <h2>Stock: {inventory.stock}</h2>
            <h2>Price: ${inventory.price}</h2>
            <button className="close" onClick={() => dispatch(deleteInventory(inventory._id))}>X</button>
        </div>
  )
}

export default InventoryItem;