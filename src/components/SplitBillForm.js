import {useState} from 'react';

import CustomButton from "./CustomButton";

const SplitBillForm = ({selectedFriend, onSplitBill}) => {


    const [bill, setBill] = useState({
        value:0,
        userExpense:0,
        friendExpense:0,
        payer:'user'

    })

console.log('payer', bill.payer)
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue = name === "payer" ? value : Number(value);

        setBill((prev) => {
            if (name === "value") {
                // Si el valor de la cuenta es menor que userExpense o friendExpense, no actualizar
                if (newValue < prev.userExpense || newValue < prev.friendExpense) {
                    return prev;
                }
            } else if (name === "userExpense") {
                // Si el gasto del usuario es mayor que el total, no actualizar
                if (newValue > prev.value) {
                    return prev;
                }
            }
    
            return { ...prev, [name]: newValue };
        });
        // setBill((prev) => ({
        //     ...prev,
        //     [name]: name === "payer" ? value : Number(value),
        // }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!bill.value && !bill.userExpense)  return;
        
        // const newBill = {
        //     value: bill.value,
        //     userExpense:  bill.userExpense,
        //     friendExpense:  bill.friendExpense,
        //     payer: bill.payer
        // };

        onSplitBill((bill.payer === 'user') ? Number(bill.value- bill.userExpense) : Number(-bill.userExpense) )
        
        
         setBill({
            value: 0,
            userExpense: 0,
            friendExpense: 0,
            payer:'user'
        })

    }; 
    return(
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>

             <label>💶 Bill value</label>
             <input 
                type="number"
                placeholder="Bill value"
                name="value"
                value={(bill.value)}
                onChange={handleChange}
             
             />

             <label>😳Your expense</label>
             <input 
                type="number"
                placeholder="User Expense"
                name="userExpense"
                value={(bill.value > bill.userExpense) ? bill.userExpense: bill.value}
                onChange={handleChange}
                
            />

             <label>🫣{selectedFriend.name}'s expense</label>
             <input 
                type="number" 
                disabled
                name="friendExpense"
                value={(bill.value > bill.userExpense) ? bill.value- bill.userExpense:0}
                />

             <label>🤑Who is paying the bill?</label>
            <select
                name="payer"
                value={bill.payer}
                onChange={handleChange}
            >
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <CustomButton>Split Bill</CustomButton>


        
        </ form>
       
    )
}

export default SplitBillForm;