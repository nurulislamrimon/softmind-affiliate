import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useCollectExpenses from '../../CustomHooks/useCollectExpenses';
import useCollectPayments from '../../CustomHooks/useCollectPayments';
import SetTitle from '../../Utilities/SetTItle/SetTitle';

const Distribution = () => {
    const navigate = useNavigate();
    const { payments, setPayments, totalBdt } = useCollectPayments();
    const { expenses, setExpenses, totalExpenses } = useCollectExpenses();
    return (
        <div>
            <SetTitle title='Distribution'></SetTitle>

            <Card className='my-3 text-center'>
                <Card.Header>Abdul Karim Rasel</Card.Header>
                <Card.Body>
                    <Card.Title>Partnership 50%</Card.Title>
                    <Card.Text> <b>Owned : {(totalBdt - totalExpenses) / 100 * 50} out of {totalBdt - totalExpenses}</b> Taka
                    </Card.Text>
                    <Button onClick={() => navigate('/distribution')} variant="dark">Go to the Distribution page</Button>
                </Card.Body>
            </Card>
            <Card className='my-3 text-center'>
                <Card.Header>Naem Nizam</Card.Header>
                <Card.Body>
                    <Card.Title>Partnership 25%</Card.Title>
                    <Card.Text> <b>Owned : {(totalBdt - totalExpenses) / 100 * 25} out of {totalBdt - totalExpenses}</b> Taka
                    </Card.Text>
                    <Button onClick={() => navigate('/distribution')} variant="dark">Go to the Distribution page</Button>
                </Card.Body>
            </Card>
            <Card className='my-3 text-center'>
                <Card.Header>Nurul Islam Rimon</Card.Header>
                <Card.Body>
                    <Card.Title>Partnership 25%</Card.Title>
                    <Card.Text> <b>Owned : {(totalBdt - totalExpenses) / 100 * 25} out of {totalBdt - totalExpenses}</b> Taka
                    </Card.Text>
                    <Button onClick={() => navigate('/distribution')} variant="dark">Go to the Distribution page</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Distribution;