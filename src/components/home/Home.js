import React from "react"
import {Helmet} from "react-helmet";

function Home() {
  return (
    <>
    <Helmet>
<title>My Homepage</title>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"></meta>
<meta name="description" content="Mr Alucard Homepage" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
</Helmet>
    <main style={{display:"flex", justifyContent:"center", alignItems:"center", background:"black", color:"whitesmoke", height:"100vh", textAlign:'center'}}>
        <h1>Welcome To Alucard GitHub Repo</h1>
    </main>
    </>
  )
}

export default Home