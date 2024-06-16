import { getDownloadURL, getStorage, ref ,uploadBytes} from "firebase/storage";
import {useContext, useEffect} from "react";
import ContextStore from "../DataStore/ContextStore";
import app from "../Firebase/Firebase-Config";
import {v4} from 'uuid';
const UploadImges=()=>{
 const {formData,setImageUrl,downloadedData}=useContext(ContextStore);
 //console.log(downloadedData.length);
  async function uploadImage(){
        // Get a reference to the storage service, which is used to create references in your storage bucket
     try{
        const storage = getStorage(app);
       
// Create a storage reference from our storage service
const imageRef = ref(storage,`images/${downloadedData.length}-${v4()}`);

// While the file names are the same, the references point to different files
imageRef.name === imageRef.name;           // true
imageRef.fullPath === imageRef.fullPath;   // false
      // 'file' comes from the Blob or File API
 if(formData.get('photo')!==null){
 const snapshot=await uploadBytes(imageRef, formData.get('photo'));
 console.log('uploaded image to firebase');
 snapshot.forEach(childSnapshot => {
  let name=getDownloadURL(childSnapshot.name);
  const url= getDownloadURL(childSnapshot.ref);
  setImageUrl(prev=>[...prev,
           {url,
        num:name,}]);
});
 }
 formData.remove('photo');
      }
     
     catch(err){
    console.log(err.message);
     }
     
  
  

}
useEffect(()=>{  uploadImage()},[formData.get('photo')]);

}
export default UploadImges;