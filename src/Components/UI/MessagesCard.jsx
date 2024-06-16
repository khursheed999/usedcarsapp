import { useContext } from "react";
import ContextStore from "../../DataStore/ContextStore";

const MessagesCard=({data})=>{
    const {currentUser}=useContext(ContextStore);
    console.log(data);
    return <div className="chat">
       {data.createdBy===currentUser.email?
       <h6 className="user">me</h6>:
       <h6 className="user">you</h6>} 
       <span className="message">{data.text}</span>
    
    </div>
}
export default MessagesCard;