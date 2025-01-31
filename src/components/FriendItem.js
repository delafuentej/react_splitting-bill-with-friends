import CustomButton from "./CustomButton";


const FriendItem = ({friend, onSelection, selectedFriend}) => {

    

    const {id, image, name, balance} = friend;

    const isSelected = selectedFriend?.id === friend.id;
    console.log('id from frienditem.js', id)
    //console.log('selectedClient.id from frienditem.js', selectedFriend.id)

    

    console.log('friend', friend)
   
    if(image === ''){
       image = '/img/profile.png'
        
    };
    return(
        <li 
         className={(isSelected) ? 'selected' : ''}
        key={id}
        >
            <img src={image} />
            <div>
                <h3>{name}</h3>
                <p className={`${(balance < 0) ? 'red' : (balance > 0) ? 'green': '' }`}>
                    {
                        (balance > 0) ? `${name} owes you ${balance}€` :
                        (balance < 0) ? `You owe ${name} ${Math.abs(balance)}€` :
                        `You and ${name} are even`
                    }
                    
                </p>
            </div>
           <CustomButton
           handleClick={()=> onSelection(friend)}
              
           >
            {(isSelected) ? 'Close': 'Select'}
           </CustomButton>
        </li>
    )
};

export default FriendItem;