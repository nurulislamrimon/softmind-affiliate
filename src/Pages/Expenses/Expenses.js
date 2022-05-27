import React from 'react';
import useCollectExpenses from '../../CustomHooks/useCollectExpenses';
import SetTitle from '../../Utilities/SetTItle/SetTitle';

const Expenses = () => {
    const { expenses, setExpenses, totalExpenses } = useCollectExpenses();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const method = 'expense';
        const date = e.target.date.value;
        const purpose = e.target.purpose.value;
        const amount = e.target.amount.value;
        const newExpense = { method, siNo: expenses.length + 1, date, purpose, amount }
        fetch(`http://localhost:5000/expenses`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newExpense)
        })
            .then(res => res.json())
            .then(data => data.acknowledged && alert('New payment added'));
        window.location.reload();
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/expenses/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = expenses.filter(expense => expense._id !== id);
                        setExpenses(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <SetTitle title="Expenses"></SetTitle>
            <form onSubmit={handleFormSubmit} className='py-3 mx-auto'>
                <input type="date" name='date' className='mx-2' required />

                <input type="text" name='purpose' className='mx-2' required />

                <input type="text" name='amount' className='mx-2' required />

                <button className='btn btn-dark'>Add this expense</button>
            </form>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th className='text-center'>Si No.</th>
                        <th className='text-center'>Date</th>
                        <th className='text-center'>Pursose</th>
                        <th className='text-center' colSpan={2}>Taka(BDT)</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map(expense =>
                        <tr key={expense._id}>
                            <td className='text-center'>{expense.siNo}</td>
                            <td className='text-center'>{expense.date}</td>
                            <td className='text-center'>{expense.purpose}</td>
                            <td className='text-center'>{expense.amount}</td>
                            <td><button onClick={() => handleDelete(expense._id)}>X</button></td>
                        </tr>
                    )}
                    <tr>
                        <td colSpan={1} className='text-end'><b>Expenses :{expenses.length}</b> </td>
                        <td colSpan={2} className='text-end'><b>Total :</b> </td>
                        <td colSpan={2} className='text-start'><b>{totalExpenses} Taka</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Expenses;