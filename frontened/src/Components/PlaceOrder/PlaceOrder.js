import Accordion from 'react-bootstrap/Accordion';
import { useSelector, useDispatch } from 'react-redux';
import { loggeduserAction } from '../../Redux/MiddlewareActions';
import { API } from '../../API/API';
import axios from "axios";
import { useEffect,useState } from 'react';
import "./PlaceOrder.css"

function PlaceOrder() {
    const dispatch = useDispatch();
    const [selectedAddress, setSelectedAddress] = useState(null);
    const userdetails = JSON.parse(localStorage.getItem("userdata"));
    const userstate = useSelector((state) => (state.UserDetailsReducer?.user?.user_details))
    useEffect(() => {
      if (userdetails) {
        dispatch(loggeduserAction(userdetails?.user?._id))
      }
    }, [])
 const shippingaddress=(e)=>{
 setSelectedAddress(JSON.parse(e.target.value));
 }
 console.log("set_addresses to the place order",selectedAddress,userstate)
  return (
    <div className='mb-4 d-md-flex'>
    <Accordion defaultActiveKey="0" className='col-md-8' style={{marginRight:"40px"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>LOGIN DETAILS</Accordion.Header>
        <Accordion.Body>
          Name : <span style={{fontWeight:"bold"}}>Pavan Irrinki</span><br />
          Name : <span style={{fontWeight:"bold"}}>Pavan Irrinki</span>
          <p style={{color:"blue",fontWeight:'bold'}}>Logout & Sign in to another account</p>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button style={{backgroundColor:"#fb641b",padding:"10px 30px",
            border:"none",borderRadius:"5px",fontWeight:"900",color:"white"}}>Continue CheckOut</button>
            </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>MANAGE ADDRESS</Accordion.Header>
        <Accordion.Body>
  {userstate?.Addresses && userstate?.Addresses?.map((address) => (
    <>
      <input
        type="radio"
        name="Address_type"
        value={JSON.stringify(address)}  
        checked={selectedAddress && JSON.stringify(selectedAddress) === JSON.stringify(address)}
        onChange={shippingaddress}
      />
      <p className='bg-secondary d-inline p-1'>{address?.Address_type}</p>
      <div style={{ display: "flex" }}>
        <h5 style={{ marginRight: "20px" }}>{address?.name},</h5>
        <h5>{address?.mobileNumber}</h5>
      </div>
      <div className='d-md-flex d-block'>
        <h5>{address?.Landmark},</h5>
        <h5>{address?.Locality},</h5>
        <h5>{address?.city},</h5>
        <h5>{address?.State} -</h5>
        <h5>{address?.zipcode}</h5>
      </div>
    </>
  ))}
</Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>ORDER SUMMARY</Accordion.Header>
        <Accordion.Body>
       {userstate?.cartproducts && userstate?.cartproducts?.map((order)=>(
        <><div style={{ display: "flex", justifyContent: "space-between" }}>
           <div className='order_summary_product_image_card'>
             <img src={order?.product?.images[0]} className='order_summary_product_image' />
             <button style={{ width: "30px", padding: "0 30px", margin: "0 auto", textAlign: "center", borderRadius: "30px" }}>{order?.Count}</button>
           </div>
           <div style={{ width: "30%" }}>
             <p style={{ fontWeight: "bold", color: "grey" }}>{order?.product?.name}</p>
             <h6 style={{ fontWeight: "bold" }}>${order?.product?.price}  <span style={{color:"green"}}> 5% off 2 offers applied</span></h6>
           </div>
           <div style={{ width: "30%" }}>
             <p style={{ fontWeight: "bold", color: "grey" }}>{order?.product?.name}</p>
             <h6 style={{ fontWeight: "bold" }}>${order?.product?.price} <span style={{color:"green"}}>5% off 2 offers applied5% off 2 offers applied5% off 2 offers applied5% off 2 offers applied</span></h6>
           </div>
         </div><hr style={{ border: "1px solid black" }} /></>
       ))}
          </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>PAYMENT DETAILS</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <div className='col-md-3 d-md-block d-none'>
    <div style={{ marginRight:"30px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <h4 style={{ textAlign: "center" }}>PRICE DETAILS</h4>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 10px 0px 10px" }}>
              <p >price</p>
              <p >$ {userstate?.cartprice}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 10px 0px 10px" }}>
              <p >Dicount</p>
              <p >deddd</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 10px 0px 10px" }}>
              <p >Delivery Charges</p>
              <p >deddd</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 10px 0px 10px" }}>
              <p >Secured Packaging Fee</p>
              <p >deddd</p>
            </div>
            <hr style={{ border: "1px solid black" }} />
            <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 10px 0px 10px" }}>
              <h5>Total Amount</h5>
              <h5>$ {userstate?.cartprice}</h5>
            </div>
            <hr style={{ border: "1px solid black",marginBottom:"2px"}} />
           
          </div>

    </div>
    </div>
  );
}

export default PlaceOrder;