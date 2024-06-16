import { getDatabase, ref, onValue } from "firebase/database";
import app from "../Firebase/Firebase-Config";
import React, {useContext, useEffect} from "react";
import ContextStore from "../DataStore/ContextStore";
const DownloadData=()=>{
const {setDownloadedData,downloadedData}=useContext(ContextStore);
const db = getDatabase(app);
const dataRef = ref(db, 'appData/posts/');
useEffect(()=>{
    let records=[];
    onValue(dataRef, (snapshot) => {
        snapshot.forEach(childSnapshot=>{
         
            let keyName=childSnapshot.key;
        let data=childSnapshot.val();
        
            records.push({
                'key':keyName,
                'data':data.data,
                'chats':data.chats,
                });
               

        })
        });
        setDownloadedData(records);
},[downloadedData.length])
console.log(downloadedData.length);
}
export default DownloadData;