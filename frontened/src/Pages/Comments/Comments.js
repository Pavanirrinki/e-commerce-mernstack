import React from 'react'
import "./Comments.css"
import Travel from "../../Images/aeroplane.jpg"
import { FaStar } from "react-icons/fa";
const Comments = () => {
  return (
    <><div style={{ marginBottom: "20px",border:"1px solid black" }}>
          <h6 style={{ marginLeft: "10px" }}>
              <span style={{ fontSize: "20px" }}>5</span><FaStar style={{ marginBottom: "8px", marginLeft: "10px" }} />Title</h6>
          <p style={{ textAlign: 'center' }}>Description Description Description
              Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription</p>
          <img src={Travel} style={{ height: "100px", width: "100px" }} />
          <img src={Travel} style={{ height: "100px", width: "100px" }} />
          <img src={Travel} style={{ height: "100px", width: "100px" }} />
      </div>
      <div style={{ marginBottom: "20px",border:"1px solid black" }}>
              <h6 style={{ marginLeft: "10px" }}>
                  <span style={{ fontSize: "20px" }}>5</span><FaStar style={{ marginBottom: "8px", marginLeft: "10px" }} />Title</h6>
              <p style={{ textAlign: 'center' }}>Description Description Description
                  Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription</p>
              <img src={Travel} style={{ height: "100px", width: "100px" }} />
              <img src={Travel} style={{ height: "100px", width: "100px" }} />
              <img src={Travel} style={{ height: "100px", width: "100px" }} />
          </div></>
  )
}

export default Comments
