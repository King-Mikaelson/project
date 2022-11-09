import { useState } from 'react'
import {Helmet} from "react-helmet";


function ErrorPage() {
  const [error, setError] = useState(false)
  if (error) {
    throw new Error('Something went wrong')
  }
  return (
    <>
<Helmet>
<title>Error Boundary TestPage</title>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"></meta>
<meta name="description" content="A page to test error boundary" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
</Helmet>
    <main style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      <h1>Testing The Error Page</h1>
      <button style={{padding:"15px", marginTop:'2rem', border:"none"}} onClick={() => setError(true)}>Click To Throw Error</button>
    </main>
    </>
  )
}

export default ErrorPage
