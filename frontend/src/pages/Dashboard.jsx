import {Fragment, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import JobForm from '../components/JobForm';
import InventoryForm from '../components/InventoryForm';


function Dashboard() {
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  useEffect(()=> {
    if(!user) {
      navigate('/login')
    }
  }, [user, navigate])
  return (
    <Fragment>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Dashboard</p>
      </section>
      <InventoryForm/>
    </Fragment>
  )
}

export default Dashboard;