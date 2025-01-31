import { useState } from 'react';
import * as db from './data/data.json';
import './App.css';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import CustomButton from './components/CustomButton';
import SplitBillForm from './components/SplitBillForm';
const {data} = db;




function App() {
  const [friends, setFriends] = useState(data);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null)


  console.log('selectedFriend', selectedFriend)
  const handleToggle = () => {
   setShowAddFriendForm(!showAddFriendForm)
  }


  const addNewFriend = (newFriend) => {
    setFriends((friends) => [...friends,  newFriend]);
    setShowAddFriendForm(false);
  };

  const handleSelectedFriend = (friend) => {
    //console.log('id',id) 
    //setSelectedFriend(friend);
    setSelectedFriend((currentSelected) => 
      currentSelected?.id === friend.id ? null : friend);
    setShowAddFriendForm(false);

  };

  const handleSplitBill = (value) => {
    console.log('value from  handleSplitBill', value)
    setFriends((friends) => friends.map((friend) => 
      friend.id === selectedFriend.id ? 
    {...friend, balance: friend.balance + value} : 
    friend)
  )

  setSelectedFriend(null)
  }


  return (
    <div className="app">
      <div className='sidebar'>
      <FriendsList 
        friends={friends} 
        selectedFriend={selectedFriend} 
        onSelection={handleSelectedFriend}
        />
     
      {showAddFriendForm && (
         <AddFriendForm 
          onAddFriend={addNewFriend}
          />
      )}
      <CustomButton 
        handleClick={handleToggle}
      
      >{showAddFriendForm ? 'Close': 'Add Friend'}</CustomButton>
      </div>
     {selectedFriend && <SplitBillForm 
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
      />}
      
    
    </div>
  );
}

export default App;
