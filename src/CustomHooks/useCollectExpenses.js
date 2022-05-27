import React, { useEffect, useState } from 'react';

const useCollectExpenses = () => {
    const [expenses, setExpenses] = useState([]);
    let totalExpenses = 0;


    useEffect(() => {
        fetch('http://localhost:5000/expenses')
            .then(res => res.json())
            .then(data => setExpenses(data))
    }, [])

    expenses.forEach(expense => totalExpenses = parseFloat(totalExpenses) + parseFloat(expense.amount))

    return { expenses, setExpenses, totalExpenses }
};

export default useCollectExpenses;