import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import ContextStore from '../../DataStore/ContextStore';
import Button from './Button';
const Card = ({item,img}) => {
    const navigate=useNavigate();
   const {setCardId}= useContext(ContextStore);
    function handleClick(id){
        console.log('clicked   '+id);
        setCardId(id);
        navigate('/buy');
    }

    return <div className="card">
        <div className="image">
            <img src={img} alt="vehicle-image" height={200}
            width={200}/>
        </div>
        <div className="details">
            <h1>{item.name}</h1>
            <div>
                <h4>Model: {item.model} </h4>
                <h4>Price: {item.price}</h4>

            </div>
        </div>
        <Button
        className={'Button'}
         onClick={()=>{handleClick(item.itemNo)}} 
        name={'message to Seller'}/>

    </div>
}
export default Card;