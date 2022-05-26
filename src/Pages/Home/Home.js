import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useCollectPayments from '../../CustomHooks/useCollectPayments';
import SetTitle from '../../Utilities/SetTItle/SetTitle';

const Home = () => {
    const [bdt, setBdt] = useState('BDT');
    const dollar = useRef('$');
    const { payments, setPayments } = useCollectPayments();


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const platform = e.target.platform.value;
        const paymentDollar = e.target.paymentDollar.value;
        const exchangeRate = e.target.exchangeRate.value;
        const paymentBdt = e.target.paymentBdt.value;
        const newPayment = { siNo: payments.length + 1, date, platform, paymentDollar, exchangeRate, paymentBdt }
        fetch(`http://localhost:5000/payments`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPayment)
        })
            .then(res => res.json())
            .then(data => data.acknowledged && alert('New payment added'));
        window.location.reload();
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
                    <option value="Optimize">Optimize</option>
                </select>
                <input type="text" ref={dollar} name='paymentDollar' className='mx-2' placeholder='$Amount' />

                <input type="text" name='exchangeRate' className='mx-2' placeholder='Exchange Rate' onChange={handleBdt} required />
                <input type="text" name='paymentBdt' className='mx-2' value={bdt} disabled />
                <button className='btn btn-dark'>Add this payment</button>
            </form>
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th className='text-center'>Si No.</th>
                        <th className='text-center'>Date</th>
                        <th className='text-center'>Platform</th>
                        <th className='text-center'>Amount</th>
                        <th className='text-center'>Rate</th>
                        <th className='text-center'>Taka(BDT)</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment =>
                        <tr key={payment._id}>
                            <td className='text-center'>{payment.siNo}</td>
                            <td className='text-center'>{payment.date}</td>
                            <td className='text-center'>{payment.platform}</td>
                            <td className='text-center'>{payment.paymentDollar}</td>
                            <td className='text-center'>{payment.exchangeRate}</td>
                            <td className='text-center'>{payment.paymentBdt}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Home;