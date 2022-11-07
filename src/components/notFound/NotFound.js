import { Link } from "react-router-dom"
import React from "react"
function NotFound() {
  return (
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", background:"black", color:"whitesmoke", height:"100vh", gap:"1rem"}}>
       <h1> Page Not Found</h1>
       <h3>This Url is not correct</h3>
       <Link to="/">Go Back To Home</Link>
        </div>
  )
}

export default NotFound