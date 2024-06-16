import { useContext, useEffect, useState } from "react";
import Card from "../Components/UI/Card";
import ContextStore from "../DataStore/ContextStore";


// import Cookies from "universal-cookie";
// const cookie=new Cookies();
const Home = () => {
   //const [isAuth,setIsAuth]= useState(cookie.get('auth-token'))
   const { filteredData} = useContext(ContextStore);
  

console.log(filteredData);

    return <div className="home">
        {filteredData.map(item => (
            <Card key={item.key}
                img={item.img}
                item={item.data}
            />
        ))}
    </div>
}
export default Home;