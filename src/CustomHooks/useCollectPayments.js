import React, { useEffect, useState } from 'react';

const useCollectPayments = () => {
    const [payments, setPayments] = useState([]);
    let totalBdt = 0;


    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => setPayments(data))
    }, [])

    payments.forEach(payment => totalBdt = parseFloat(totalBdt) + parseFloat(payment.paymentBdt))
    return { payments, setPayments, totalBdt }
};

export default useCollectPayments;