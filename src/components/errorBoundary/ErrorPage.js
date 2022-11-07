import { useState } from 'react'

function ErrorPage() {
  const [error, setError] = useState(false)
  if (error) {
    throw new Error('Something went wrong')
  }
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      <h1>Testing The Error Page</h1>
      <button style={{padding:"15px", marginTop:'2rem', border:"none"}} onClick={() => setError(true)}>Click To Throw Error</button>
    </div>
  )
}

export default ErrorPage
