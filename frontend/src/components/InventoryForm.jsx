import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createInventory} from '../features/inventories/inventories.slice';

function InventoryForm() {
    
    
    const {user} = useSelector((state) => state.auth)
    const id = user._id
    console.log(id)
    const [allValues, setAllValues] = useState({
        name: '',
        stock: '',
        price: '',
        id: id,
     });

     const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
     }

    const dispatch = useDispatch()


    const onSubmit = e => {
        e.preventDefault()
        
        dispatch(createInventory(allValues))
        setAllValues()
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <h1>Create A New Inventory Item</h1>
                <div className="form-group">
                    <label htmlFor="user">User:</label>
                    <select value={user._id}>
                        <option value={user}>{user.name}</option>
                    </select>
                    <label htmlFor="name">Item Name:</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter a valid name" onChange={changeHandler}/>
                    <label htmlFor="stock">Item Stock:</label>
                    <input type="number" min={0} className="form-control" id="stock" name="stock" placeholder="Enter a valid stock number" onChange={changeHandler}/>
                    <label htmlFor="price">Item Price:</label>
                    <input type="number" min={0} className="form-control" id="price" name="price" placeholder="Enter a valid price" onChange={changeHandler}/>
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