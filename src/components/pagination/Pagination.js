import React from 'react'
import "./Pagination.css"

function Pagination({pagePerRepo, totalRepo, currentRepo, setCurrentRepo}) {
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalRepo/pagePerRepo); i++){
        pages.push(i)
    }
  return (
    <div className='page__container'>
        <button className='prev' disabled={currentRepo === 1} onClick={() =>setCurrentRepo(prevValue => prevValue - 1)}>Previous</button>

        {pages.map((page,index) => (
        <button className={page === currentRepo ? "active__page": "number"} onClick={() => setCurrentRepo(page)} key={index}>{page}</button>
    ))}
     <button className='prev' disabled={currentRepo === pages.length} onClick={() => setCurrentRepo(prevValue => prevValue + 1)}>Next</button>

    </div>
  )
}

export default Pagination