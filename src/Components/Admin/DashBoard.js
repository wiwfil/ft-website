/* eslint-disable no-unused-vars */
import React from "react";
import "./DashBoard.css";
import {useState} from "react";
import { projectStorage,projectFirestore,timestamp } from "../../firebase/config";



const DashBoard = (props) => {

  const { handleLogout } = props;
  const [progress,setProgress] = useState(0);
  const [error,setError] = useState(null);
  const [urls,setUrls] = useState([]);
  const[files,setFiles] = useState([]);
  const [uploadTasks,setUploadTasks] = useState([]);

 
  const types = ["image/png","image/jpeg","image/jpg"]

  const formHandler = async(e) =>{
    e.preventDefault();
    setFiles(Array.from(e.target.files));
  }

  const handleUpload = async(e) =>{
    e.preventDefault();
    const collectionRef = projectFirestore.collection("images");

    const promises = [];

    files.forEach((file) => {
      const uniqueId = Date.now().toString();
     console.log("working")
      const uploadTask = projectStorage.ref(`images/${uniqueId}`).put(file);
      promises.push(uploadTask);
      setUploadTasks((prevState)=>([...prevState,uploadTask]));
      uploadTask.on("state_changed",(snap) => {
        let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
        if(snap.state === projectStorage.RUNNING){
          console.log(percentage)
        }
        setProgress(percentage);
  
    },err => {
        setError(err);
    },
    async ()=>{
     const url = await projectStorage
       .ref("images")
       .child(uniqueId)
       .getDownloadURL()
       setUrls((prevState)=> ([...prevState,url]))
       const createdAt = timestamp();
       const colTask = collectionRef.add({url,createdAt});
      promises.push(colTask);
    });
    })
    Promise.all(promises).then(() =>{
      alert("All images uploaded")
    }).catch((error)=>{
      console.log(error)
    });


  }

  return (
    <div className="dashboard-container">
      <button className="logout" onClick={handleLogout}>Log Out</button>
      <div className="hero">
        <form className="hero-form" >
          <input type="file" onChange={formHandler} className="input" multiple/>
          <button onClick={handleUpload} className="btn-upload">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default DashBoard;
