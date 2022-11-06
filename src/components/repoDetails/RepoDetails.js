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

  return (
    <div>
      {loading ? <p>loading...</p> :
      <div>
        <h1 style={{textAlign:"center"}}>{repo.name}</h1>
      <p>{JSON.stringify(repo)}</p>
      </div>}
    </div>
  )
}

export default RepoDetails
