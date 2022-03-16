import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getInventoryItem, updateInventory} from '../features/inventories/inventories.slice';
import {useParams, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

function ItemUpdateForm({inventory}) {
// const Iid = props.match.params.id
// const inventories = props.inventories
// const inventory = inventories.find(I => I._id === Iid)
    
    const {user} = useSelector((state) => state.auth)
    // const id = user._id
    const {pid} = useParams();
    console.log(pid)
    

    
    const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
    }
    
    const dispatch = useDispatch()
    const item = dispatch(getInventoryItem(pid))
    const [allValues, setAllValues] = useState({
        name: '',
        stock: '',
        price: '',
        id: pid,
     });

    console.log(item)
    const {isError, isSuccess, message} = useSelector((state) => state.auth)
    const navigate = useNavigate()
    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess) {
            navigate('/')
        }
    })

    const onSubmit = e => {
        e.preventDefault()
        
        dispatch(updateInventory(allValues))
        setAllValues()
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <h1>Update</h1>
                <div className="form-group">
                    <label htmlFor="user">User:</label>
                    <select value={user._id}>
                        <option value={user}>{user.name}</option>
                    </select>
                    <label htmlFor="name">Item Name:</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder={item.name} value={item.name} onChange={changeHandler}/>
                    <label htmlFor="stock">Item Stock:</label>
                    <input type="number" min={0} className="form-control" id="stock" name="stock" placeholder={item.stock} onChange={changeHandler}/>
                    <label htmlFor="price">Item Price:</label>
                    <input type="number" min={0} className="form-control" id="price" name="price" placeholder={item.price} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <button className='btn btn-block' type='submit'>
                        Update Inventory Item
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ItemUpdateForm;