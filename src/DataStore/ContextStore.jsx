import {getAuth} from 'firebase/auth';
import app from "../Firebase/Firebase-Config";
import React, {createContext,useEffect,useState} from "react";
const auth=getAuth(app);
 const ContextStore=createContext({
    vehicleData:{},
    formData:{},
    downloadedData:[],
    imageUrl:[],
    currentUser:null,
    cardId:null,
    filteredData:[],
    totalItems:Number,
 });


export const Store=({children})=>{
    const [vehicleData,setVehicleData]=useState({
        name:'',
        model:'',
        price:'',
        photo:null,
    });
    const [formData,setFormData]=useState(new FormData());
    const [downloadedData,setDownloadedData]=useState([]);
    const [imageUrl,setImageUrl]=useState([]);
    const [totalItems,setTotalItems]=useState(0);
    const [currentUser,setCurrentUser]=useState(null);
    const [cardId,setCardId]=useState(null);
    const [filteredData,setFilteredData]=useState([]);
    let totalRecords=[];
   let uniqueImages=[];
   let userData=[];


   function rmDuplicateImages(){
    imageUrl.forEach(item => {
      if (!uniqueImages.includes(item.url)) {
          uniqueImages.push(item);
      }
  });
   }
   console.log(uniqueImages);
function processedData(){
  downloadedData.map((item) => {
    let key = item.key;
    let id = key.split('-', 1);
    uniqueImages.map((im) => {
        let num = im.num;
        let id2 = num.split('-', 1);
        if (id2[0] === id[0]) { 
            if (!totalRecords.includes(id[0])) {
                 console.log(totalRecords);
                 totalRecords.push(id[0]);
                userData.push({key:item.key,
                    data:item.data,
                    chats:item.chats,
                     img:im.url, });
                
            }
        }
    })
});
}
rmDuplicateImages();
processedData();
useEffect(()=>{
  setFilteredData([...userData]);
},[userData.length])


   useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((user)=>{
     setCurrentUser(user);
    });
   return ()=>unsubscribe();
    },[]);


    const contextValue={
   vehicleData,
   setVehicleData,
   formData,
   setFormData,
   downloadedData,
   setDownloadedData,
   imageUrl,
   setImageUrl,
   totalItems,
   setTotalItems,
  currentUser,
  cardId,
  setCardId,
  filteredData,
  setFilteredData,
    }
return <ContextStore.Provider value={contextValue}>
  {children}
</ContextStore.Provider>
}
export default ContextStore;