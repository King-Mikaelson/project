import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function RepoDetails() {
    const [repo, setRepo] = useState([]);
    const [loading, setLoading] = useState(false);

    let {reponame} = useParams();
    console.log(reponame.toString())

    useEffect(() => {
        fetch(`https://api.github.com/repos/King-Mikaelson/${reponame}`).then(
          (response) =>
            response.json().then((data) => {
              setLoading(false);
              setRepo(data);
              console.log(repo)
            })
        );
      }, [reponame]);


let array = []

    for(const key in repo){
      array.push(`${key} : ${repo[key]}`)
    }

  let items = array.map((item) => <li style={{fontSize:"1.5rem", marginTop:"2rem"}}>{JSON.stringify(item)}</li>);

  return (
    <>

<div>
      {loading ? <p>loading...</p> :
      <div>
        <h1 style={{textAlign:"center"}}>{repo.name}</h1>
  {/* <p>{JSON.stringify(repo)}</p> */}
      <ul>{items}</ul>
      </div>}

    </div>
    </>
    
  )
}

export default RepoDetails
