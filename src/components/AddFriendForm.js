import { useState } from "react";
import CustomButton from "./CustomButton";

const generateId = () => Math.floor(100000 + Math.random() * 900000);

const AddFriendForm = ({onAddFriend}) => {

        const id = generateId()

        const [ friend,  setFriend] = useState({
            name:'',
            image:''
        });


        const handleChange = (e) => {
            const { name, value } = e.target;
            setFriend((prev) => ({
                ...prev,
                [name]: value || '',
            }))
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if(!friend.name) return;

        
            const newFriend = {
                id: id,
                name: friend.name || '',
                image: `https://i.pravatar.cc/48?u=${id}` || '',
                balance: 0
            };


            console.log('newFriend', newFriend)
            onAddFriend(newFriend);

            console.log(newFriend)

            setFriend({
                 name:'',
                image:''
            })

          
 
        }

      
            
        return ( <form 
                    className={`form-add-friend`} 
                    onSubmit={handleSubmit}
                >
        <label>🧑‍🧒‍🧒Friend Name</label>
        <input 
            type="text" 
            placeholder="Enter name your friend"
            name='name'
            value={friend.name || ''}
            onChange={handleChange}
            
            />

        <label>🌅Image Url</label>
        <input 
            type="text" 
            placeholder="Enter url image"
            name='image'
            value={friend.image || ''}
            onChange={handleChange}
            />

        <CustomButton>
            Add
        </CustomButton>
    </form>)
        
    

    
}

export default AddFriendForm;