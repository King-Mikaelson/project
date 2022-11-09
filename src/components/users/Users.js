import React, { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import { Outlet, useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import "./Users.css";
import { AiFillGithub } from "react-icons/ai";


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
        })
    );
  }, []);

  const lastRepo = currentRepo * pagePerRepo;
  const firstRepo= lastRepo- pagePerRepo;
  const currentUser = repo.slice(firstRepo, lastRepo);



  return (
    <>
    <Helmet>
        <title> A Github Repository List</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"></meta>
        <meta name="description" content="A list of King-Mikaelson github repository" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Helmet>
    <main style={{display:"flex", flexDirection:"column",height:"100vh", marginTop:"7rem"}}>
      <div>
        <h1 style={{textAlign:"center"}}>My Github Repository</h1>
        {loading ? <p>loading...</p> :  currentUser.map((repo) => (
        <div className="user__container" onClick={() => {navigate(`/repo/${repo.name}`);}} style={{margin:"0 auto", width:"50%", display:"flex", justifyContent:"center", gap:"0.5rem",flexDirection:"column", alignItems:"center", marginTop:"1rem", padding:'0.5rem', cursor:"pointer"}}>
        <div class="card-wrap">
  <div class="card-header one">
    <AiFillGithub size={60}/>
  </div>
  <div class="card-content">
    <h1 class="card-title">{repo.name}</h1>
    <p class="card-text">Language: {repo.language}</p>
    <button class="card-btn one">Click To Read More</button>
 </div>
</div>
        </div>
        ))}
      </div>
      <Pagination pagePerRepo={pagePerRepo} totalRepo={repo.length} currentRepo={currentRepo} setCurrentRepo={setCurrentRepo}/>
      <Outlet/>
      
    </main>    
  </>
  );
};

export default Users;
