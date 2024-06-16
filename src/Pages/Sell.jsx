import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useContext, useState } from 'react';
import ContextStore from '../DataStore/ContextStore';
import { useNavigate } from 'react-router-dom';

const Sell = () => {
    const navigate = useNavigate();
    const { vehicleData, setVehicleData,formData,currentUser } = useContext(ContextStore);



    function onFormSubmitHandler(e) {
        e.preventDefault();
        // const newFormData=new FormData();
        formData.set('name', vehicleData.name);
        formData.set('model', vehicleData.model);
        formData.set('price', vehicleData.price);
        formData.set('photo', vehicleData.photo);
        formData.set('email',currentUser.email);
        // setStateFun(true);
        setVehicleData({
            name: '',
            model: '',
            price: '',
            photo: null,
        });

        navigate('/');
      //  window.location.reload();
    }
    //saving the input data to the vehicle data state;
    function handleChange(e) {

        const { name, value } = e.target;
        const newValue = name === 'photo' ? e.target.files[0] : value;
        setVehicleData(prevData => (
            {
                ...prevData,
                [name]: newValue
            }
        ))


    }
    return <div className="sell">
        <div>
            <h3>Upload Vehicle Details</h3>
        </div>
        <Form onSubmit={onFormSubmitHandler} >
            <Form.Group>
                <Form.Label htmlFor="vehicle-name">Vehicle Name</Form.Label>
                <Form.Control onChange={handleChange} type="text" required name="name" id="name" value={vehicleData.name} placeholder="Enter Vehicle Name" />
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="vehicle-model">Model Name</Form.Label>
                <Form.Control onChange={handleChange} type="text" required name="model" id="model" value={vehicleData.model} placeholder="Enter Model Name" />
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="vehicle-price">Vehicle Price</Form.Label>
                <Form.Control onChange={handleChange} type="number" required name="price" id="price" value={vehicleData.price} placeholder="Enter Vehicle Price" />
            </Form.Group>

            <Form.Group className="photo">
                <Form.Label htmlFor="vehicle-photo">upload photo</Form.Label>
                <Form.Control onChange={handleChange} type="file" required name="photo" id="photo" accept="image/*" placeholder="Upload photo" />
            </Form.Group>
            <div className='button'>
                <Button variant='primary' type="submit">Upload Details</Button>
            </div>
        </Form>
    </div>
}
export default Sell;