import {useState} from 'react';

import CustomButton from "./CustomButton";

const SplitBillForm = ({selectedFriend, onSplitBill}) => {


    const [bill, setBill] = useState({
        value:null,
        userExpense:null,
        friendExpense:null,
        payer:'user'

    })

console.log('payer', bill.payer)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBill((prev) => ({
            ...prev,
            [name]: (value),
        }))
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
            value: null,
            userExpense: null,
            friendExpense: null,
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