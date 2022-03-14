import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';


function JobForm() {
    const [customer, setCustomer, phone, setPhone, job_description, setJob_description] = useState('')
    const onSubmit = e => {
        e.preventDefault()
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <h1>Create A New Job</h1>
                <div className="form-group">
                    <label htmlFor="customer">Customer Name:</label>
                    <input type="text" name="customer" id="customer" value={customer} onChange={(e) => setCustomer(e.target.value)}/>
                    <label htmlFor="customer">Customer Phone Number:</label>
                    <input type="text" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <label htmlFor="customer">Job Description:</label>
                    <input type="text" name="job_description" id="job_description" value={job_description} onChange={(e) => setJob_description(e.target.value)}/>
                    <label htmlFor="parts">Parts:</label>
                    <select>
                        <option selected value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </div>
                <div className="form-group">
                    <button className='btn btn-block' type='submit'>
                        Add Job
                    </button>
                </div>
            </form>
        </section>
    )
}

export default JobForm;