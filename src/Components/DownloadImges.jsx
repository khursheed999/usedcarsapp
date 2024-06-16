import { getStorage, ref, getDownloadURL, listAll} from "firebase/storage";
import app from "../Firebase/Firebase-Config";
import { useContext, useEffect } from "react";
import ContextStore from "../DataStore/ContextStore";
const DownloadImges=()=>{
    const {setImageUrl, formData,imageUrl,downloadedData}=useContext(ContextStore);
    function download(){
        const storage = getStorage(app);
        const imageRef = ref(storage,`images`);
        //   getDownloadURL(imageRef);
        //   .then((url) => {
        //   setImageUrl((prev)=>[...prev,url])
        //   });
        listAll(imageRef).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    // console.log(item.name);
                 if(!imageUrl.includes(url)){
                            console.log('download images');
                            setImageUrl(prev=>[...prev,{url,
                            num:item.name,
                            }]);
                        }
                    
                    
                })
            })
        
        })
          .catch((error) => {
             console.log(error.message);
          });
    }
    useEffect(()=>{
        download();
    
    },[downloadedData.length]);
  //  console.log(imageUrl.length);
}
export default DownloadImges;