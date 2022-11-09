import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Helmet} from "react-helmet";



function RepoDetails() {
    const [repo, setRepo] = useState([]);
    const [loading, setLoading] = useState(false);

    let {reponame} = useParams();

    useEffect(() => {
        fetch(`https://api.github.com/repos/King-Mikaelson/${reponame}`).then(
          (response) =>
            response.json().then((data) => {
              setLoading(false);
              setRepo(data);
            })
        );
      }, [reponame]);


let array = []

    for(const key in repo){
      array.push(`${key} : ${repo[key]}`)
    }

  let items = array.map((item) => <li style={{fontSize:"1.5rem", marginTop:"2rem"}}>{item}</li>);

  return (
    <>
<Helmet>
<title>Github Repository Details</title>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"></meta>
<meta name="description" content="Information on a github repository" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
</Helmet>
<main>
      {loading ? <p>loading...</p> :
      <div>
        <h1 style={{textAlign:"center"}}>{repo.name}</h1>
      <ul>{items}</ul>
      </div>}

    </main>
    </>
    
  )
}

export default RepoDetails
