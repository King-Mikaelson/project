import React, { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import { Outlet, useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";

const Users = () => {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentRepo, setCurrentRepo] = useState(1);
  const [pagePerRepo, setPagePerRepo] = useState(5);

  let navigate = useNavigate();

  useEffect(() => {
    // Loading State
    setLoading(true);
    fetch("https://api.github.com/users/King-Mikaelson/repos").then(
      (response) =>
        response.json().then((data) => {
          setLoading(false);
          setRepo(data);
          console.log(repo)
        })
    );
  }, []);

  const lastRepo = currentRepo * pagePerRepo;
  const firstRepo= lastRepo- pagePerRepo;
  const currentUser = repo.slice(firstRepo, lastRepo);

console.log(repo)


  return (
    <>
    <Helmet>
        <title>Github Repository</title>
        <meta name="description" content="A list of King-Mikaelson github repository" />
        </Helmet>
    <div style={{display:"flex", flexDirection:"column",height:"100vh", marginTop:"7rem"}}>
      <div>
        <h1 style={{textAlign:"center"}}>My Github Repository</h1>
        {loading ? <p>loading...</p> :  currentUser.map((repo) => (
        <div onClick={() => {navigate(`/repo/${repo.name}`);}} style={{border: "1px solid goldenrod", margin:"0 auto", width:"50%", display:"flex", justifyContent:"center", gap:"0.5rem",flexDirection:"column", alignItems:"center", marginTop:"1rem", padding:'0.5rem', cursor:"pointer"}}>
        <p>Repo Name : {repo.name}</p>
        <p>Click To Read More</p>
        </div>
        ))}
      </div>
      <Pagination pagePerRepo={pagePerRepo} totalRepo={repo.length} currentRepo={currentRepo} setCurrentRepo={setCurrentRepo}/>
      <Outlet/>
    </div>
  </>
  );
};

export default Users;
