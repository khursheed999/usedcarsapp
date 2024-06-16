import { useContext, useEffect, useRef, useState } from "react";
import ContextStore from "../DataStore/ContextStore";
import Card2 from "../Components/UI/Card2";
import Button from "../Components/UI/Button";
import { HiArrowUp } from 'react-icons/hi';
import Messages from "../Components/Messages";
import { getDatabase, ref, serverTimestamp, set } from "firebase/database";
import app from "../Firebase/Firebase-Config";
import { v4 } from "uuid";

const Buy = () => {
    const { cardId, filteredData, currentUser } = useContext(ContextStore);
    const [newMessage, setNewMessage] = useState('');
  //  const messageRef=useRef('');
    console.log(cardId);
    let itm = filteredData[cardId];
    if(cardId!==null){
        console.log(filteredData[cardId].data);
       
       var data = itm.data;
       var  img = itm.img;
       }
    
    // console.log(itm.key);
    function uploadMessages() {
        const db = getDatabase(app);
        let key = itm.key;
        set(ref(db, "appData/chats/"+key+"/" +v4()), {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: currentUser.displayName,
            createdBy: currentUser.email,
        });
        setNewMessage('');
    }


    function handleSubmit(e) {
        e.preventDefault();
        //console.log(messageRef);
      //  setNewMessage(messageRef.current.value)
        if (newMessage === '') return;
        uploadMessages();

    }
   

    return <div className="buy">
        {cardId!==null ?
        <div>
            <Card2 img={img}
                item={data} />
                <Messages/>
            <div className="messages">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Type message here!   "
                       // ref={messageRef}
                       onChange={e=>{setNewMessage(e.target.value)}}
                        value={newMessage}
                    />
                    <Button
                        type="submit"
                        className={'btn'}
                        name={<HiArrowUp className="icon" />} />
                </form>
            </div>
        </div>:
        <h1> No data available!</h1> }
    </div>
}
export default Buy;