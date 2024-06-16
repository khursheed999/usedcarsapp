import { getDatabase, ref, set } from "firebase/database";
import app from "../Firebase/Firebase-Config";
import React, {useContext, useEffect} from "react";
import ContextStore from "../DataStore/ContextStore";
import {v4} from 'uuid';
const UploadData=()=>{
const {formData,downloadedData,setDownloadedData,currentUser}=useContext(ContextStore);
function upload(){
  if(formData.get('name')!==null&&formData.get('model')!==null){
    const db = getDatabase(app);
    const key=`${downloadedData.length}-${v4()}`;
   let  data={
      name:formData.get('name'),
      model:formData.get('model'),
      price:formData.get('price'),
      itemNo:downloadedData.length,
    }
  set(ref(db, 'appData/posts/'+key), {
   data,
    createdBy:currentUser.email,
  });
//   set(ref(db, 'appData/chats/'+key), {
//      createdBy:currentUser.email,
//    }
  
// );

setDownloadedData(prev=>[...prev,{
  key,
  data,

}]);


console.log('uploaded data to firebase');
formData.delete('name','model','price');

  }
  
}
useEffect(()=>{upload();},[formData.get('name')]);
  



}
export default UploadData;