import { useContext, useEffect,useState } from "react";
import ContextStore from "../DataStore/ContextStore";
import { getDatabase, ref, onValue, orderByChild } from "firebase/database";
import app from "../Firebase/Firebase-Config";
import MessagesCard from "./UI/MessagesCard";
import { orderBy } from "firebase/firestore";

const Messages=()=>{
    const [messages,setMessages]=useState([]);
    const {filteredData}=useContext(ContextStore);
   // let msg=[];
    //let data2=[];
     console.log(filteredData[0].key);
//     const key=filteredData[0].key;
    const db = getDatabase(app);
    const dataRef = ref(db, 'appData/chats/'+filteredData[0].key+'/');

 function fetchMessages(){
  //  let records=[];
    onValue(dataRef, (snapshot) => {
        snapshot.forEach(childSnapshot=>{
         
            let keyName=childSnapshot.key;
        let data=childSnapshot.val();
        
            // records.push({
            //     data,
            //     key:keyName,
            //     });
            setMessages(prev=>[...prev,{
                data,
                key:keyName,
                }]
                
            )

        })
     
        },orderBy('timestamp','desc'));
     //   setMessages(records);
        
        
 }
     useEffect(()=>{
 fetchMessages();
    
 },[])
   console.log(messages);

   return <div className="chat-box">
       {
     messages.map((item)=>(
        <MessagesCard
        key={item.key}
        data={item.data}
     />
    
     ))
       }
   </div>
}
export default Messages;