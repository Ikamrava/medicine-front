import { useState } from 'react';

import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { DatePicker } from 'antd';
import "react-datepicker/dist/react-datepicker.css";

export default function Medicine() {
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const [unitPrice, setUnitPrice] = useState(0);

  const [discount, setDiscount] = useState(0);

  const [qauntity, setQauntity] = useState(0);

  const [image, setImage] = useState('');

  const [status, setStatus] = useState(0);

  const [type, setType] = useState('');

  const [expirydate, setExpirydate] = useState(new Date());

 

  async function addHandler(e) {
    e.preventDefault();
    await axios.post('http://localhost:5086/api/AdminApi/addupdatemedicine', {
      "name": name,
      "type": type,
      "manufacturer": manufacturer,
      "imageUrl": image,
      "unitPrice": parseInt(unitPrice, 10),
      "qty": parseInt(qauntity, 10),
      "expiryDate": "2023-06-27T20:06:20.564Z",
      "discount": parseInt(discount, 10),
      "status": parseInt(status, 10)
    }).then(res=>{
      console.log(res);
    })
    
  }

  return (
    <form className='mt-4 mx-4' >
      <h3>Add Medicine</h3>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='Medicine name' value={name}  onChange={e=>setName(e.target.value)}/>
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Manufacturer' value={manufacturer} onChange={e=>setManufacturer(e.target.value)}/>
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example3' label='Unit Price' value={unitPrice} onChange={e=>setUnitPrice(e.target.value)} />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example4' label='Discount' value={discount} onChange={e=>setDiscount(e.target.value)} />
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example5' label='Qauntity' value={qauntity} onChange={e=>setQauntity(e.target.value)} />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example6' label='Image' value={image} onChange={e=>setImage(e.target.value)} />
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example7' label='Status' value={status} onChange={e=>setStatus(e.target.value)}/>
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example8' label='Type' value={type} onChange={e=>setType(e.target.value)} />
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-4'>
      <DatePicker selected={expirydate} onChange={(date) => setExpirydate(date)} />
        {/* <MDBCol>
          <MDBInput id='form6Example7' label='Expirt Date' value={expirydate} onChange={e=>setExpirydate(e.target.value)}/>
        </MDBCol> */}
        
      </MDBRow>

      
      
      <MDBBtn className='mb-4' type='submit' block onClick={addHandler}>
        Add Medicine
      </MDBBtn>
    </form>
  );
}