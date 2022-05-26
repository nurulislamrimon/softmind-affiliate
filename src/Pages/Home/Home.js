import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SetTitle from '../../Utilities/SetTItle/SetTitle';

const Home = () => {
    const [bdt, setBdt] = useState('BDT');
    const dollar = useRef('$');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const platform = e.target.platform.value;
        const paymentDollar = e.target.paymentDollar.value;
        const exchangeRate = e.target.exchangeRate.value;
        const paymentBdt = e.target.paymentBdt.value;
        const newPayment = { date, platform, paymentDollar, exchangeRate, paymentBdt }
        console.log(newPayment);

    }

    const handleBdt = (e) => {
        const taka = dollar.current.value * e.target.value;
        setBdt(taka)

    }
    return (
        <div>
            <SetTitle title='Home'></SetTitle>

            <form onSubmit={handleFormSubmit} className='py-3 mx-auto'>
                <input type="date" name='date' className='mx-2' required />

                <select type="select" name='platform' className='mx-2' required>
                    <option value="Yajni">Yajni</option>
                    <option value="Yajni">Optimize</option>
                </select>
                <input type="text" ref={dollar} name='paymentDollar' className='mx-2' placeholder='$Amount' />

                <input type="text" name='exchangeRate' className='mx-2' placeholder='Exchange Rate' onChange={handleBdt} required />
                <input type="text" name='paymentBdt' className='mx-2' value={bdt} disabled />
                <button className='btn btn-dark'>Add this payment</button>
            </form>
        </div>
    );
};

export default Home;