import {Fragment, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import InventoryForm from '../components/InventoryForm';
import InventoryItem from '../components/InventoryItem';
import Spinner from '../components/Spinner';
import { getInventory, reset } from '../features/inventories/inventories.slice';



function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {inventories, isLoading, isError, message} = useSelector((state) => state.inventories)

  useEffect(()=> {
    if(isError) {
      console.log(message);
    }

    if(!user) {
      navigate('/login')
    }

    dispatch(getInventory())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  
  if(isLoading) {
    return <Spinner/>
  }
  
  return (
    <Fragment>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Dashboard</p>
      </section>
      
      <section className='content'>
        {inventories.length > 0 ? (
          <div className='jobs'>
            {inventories.map((inventory) => (
              <InventoryItem key={inventory._id} inventory={inventory}/>
            ))}
          </div>
        ) : (
          <h3>You have not created any Inventory Items</h3>
        )}
      </section>
      <InventoryForm/>
    </Fragment>
  )
}

export default Dashboard;