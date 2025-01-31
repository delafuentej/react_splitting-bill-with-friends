
import FriendItem from "./FriendItem";

const FriendsList = ({friends, onSelection, selectedFriend}) => {
    return(
        <ul>

            {friends.map((friend) => (
                <div
                key={friend.id}
               
                >
                    <FriendItem 
                        onSelection={onSelection} 
                        selectedFriend={selectedFriend} 
                        friend={friend}
                    />
                  
                </div>
            ))}

              
               
        </ul>
    )
}

export default FriendsList;