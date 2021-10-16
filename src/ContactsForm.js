import React,{useState} from 'react'
import { v4 as uuid } from "uuid";
import {connect} from 'react-redux'
import { addContact } from './actions/contactActions';





function ContactsForm(props){
        const [name, setName]= useState("");
        const [phone, setPhone]= useState("");
        const [location, setLocation]= useState("");

        function handleSubmit(e){
            e.preventDefault();
            if(name && phone && location){
                let newcontact ={
                    name: name,
                    phone: phone,
                    location: location,
                    id: uuid(),
                };
            
            props.addNewContact(newcontact);
            
            setName("");
            setPhone("");
            setLocation("");
            }

        }

        return(
            <div className="form">
            <form onSubmit={(e) => handleSubmit(e)} >
                <label className="label">Name:</label>
                <input 
                name="name" 
                type="name" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                className="input" 
                />
            {/* phone    */}
            <br/>
                <label className="label">Phone:</label>
                <input 
                name="phone" 
                type="number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
                className="input" 
                />

            {/* location */}
            <br/>
                <label className="label">Location:</label>
                <input 
                name="location" 
                type="location" 
                value={location}
                onChange={(e) => setLocation(e.target.value)} 
                className="input" 
                />
            <br/>
                <input name="submit" type="submit" id="subBtn"/>

            </form>
            </div>
        );
}

const mapDispatchToProps = {
    addNewContact: addContact,
};

export default connect(null, mapDispatchToProps)  (ContactsForm);