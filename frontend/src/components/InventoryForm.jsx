import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function InventoryForm() {

    const [name, setName, stock, setStock, price, setPrice] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        // dispatch(createInventory)
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <h1>Create A New Inventory Item</h1>
                <div className="form-group">
                    <label htmlFor="name">Item Name:</label>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="stock">Item Stock:</label>
                    <input type="text" name="stock" id="stock" value={stock} onChange={(e) => setStock(e.target.value)}/>
                    <label htmlFor="price">Item Price:</label>
                    <input type="text" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="form-group">
                    <button className='btn btn-block' type='submit'>
                        Add Inventory Item
                    </button>
                </div>
            </form>
        </section>
    )
}

export default InventoryForm;