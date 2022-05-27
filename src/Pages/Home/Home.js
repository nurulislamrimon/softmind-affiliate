import React, { useRef, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useCollectExpenses from '../../CustomHooks/useCollectExpenses';
import useCollectPayments from '../../CustomHooks/useCollectPayments';
import SetTitle from '../../Utilities/SetTItle/SetTitle';
import Payments from '../Payments/Payments';

const Home = () => {
    const navigate = useNavigate();
    const { payments, setPayments, totalBdt } = useCollectPayments();
    const { expenses, setExpenses, totalExpenses } = useCollectExpenses();
    return (
        <div>
            <SetTitle title='Home'></SetTitle>
            <h1 className='text-center'>Welcome</h1>
            <div className="d-flex">
                <Card className='w-50 my-3 text-center'>
                    <Card.Header>Payments</Card.Header>
                    <Card.Body>
                        <Card.Title>This payments has done!</Card.Title>
                        <Card.Text>We received <b>{payments.length}</b> payments of total <b>{totalBdt}</b> Taka
                        </Card.Text>
                        <Button onClick={() => navigate('/payments')} variant="dark">Go to the Payment page</Button>
                    </Card.Body>
                </Card>
                <Card className='w-50 my-3 text-center'>
                    <Card.Header>Expenses</Card.Header>
                    <Card.Body>
                        <Card.Title>Our all expenses!</Card.Title>
                        <Card.Text>We made <b>{expenses.length}</b> expenses of total <b>{totalExpenses}</b> Taka
                        </Card.Text>
                        <Button onClick={() => navigate('/expenses')} variant="dark">Go to the Expense page</Button>
                    </Card.Body>
                </Card>
            </div>

            <Card className='my-3 text-center'>
                <Card.Header>Remaining balance</Card.Header>
                <Card.Body>
                    <Card.Title>Cash and savings!</Card.Title>
                    <Card.Text> <b>{totalBdt - totalExpenses}</b> Taka
                    </Card.Text>
                    <Button onClick={() => navigate('/distribution')} variant="dark">Go to the Distribution page</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Home;