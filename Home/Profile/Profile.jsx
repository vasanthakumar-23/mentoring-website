import { useEffect, useContext, useState } from "react";
import Axios from "axios";
import { ConnectionProvider } from "../useContext/StoreProvider";
import { Link } from "react-router-dom";
import Post from "../Post/Post";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState("");
  const [connection, setConnection] = useState(0);
  const { userId } = useContext(ConnectionProvider);
  const [showTaskCreation, setShowTaskCreation] = useState(false);

  const toggleTaskCreation = () => {
     setShowTaskCreation(!showTaskCreation);
  };
  console.log(userId);

  useEffect(() => {
    Axios.get("http://http://localhost:3000/profile/" + userId ).then((res) => {
      console.log(res.data);
      setConnection(() => {
        return res.data.user.connections.length + 1;
      });
      console.log(userId);
    });
  }, []);

  return (
    <div className="body">
      <div className="cover-img">
        <img src="../../../images/coverImage.jpg"/>
      </div>

      <div className="profile-section">
        <div className="profile-section__img">
          <img src="../../../images/boy.png" />
        </div>
        <p>
          <Link to={"/connections"} style={{textDecoration : 'none', color : 'grey', marginTop: '1rem'}}> connections </Link>
          <span> {connection} </span>
        </p>
        {showTaskCreation && (
 <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    background: "linear-gradient(295deg,#d862bc,#e59be9,#e59be9)",
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    width: '80%', // Adjust the width as needed
    maxWidth: '500px', // Ensure the form doesn't get too wide
 }}>
    <div style={{ position: 'relative' }}>
      <button
        onClick={toggleTaskCreation}
        style={{
          position: 'absolute',
          top: '0',
          right: '-100px',
          background: 'white',
          color:'#e59be9',
          borderRadius:'50%',
          width:'32px',
          height:'32px',
          fontSize: '30px',
          cursor: 'pointer',
        }}
      >
        ×
      </button>
      <form>
        <h2>Create a New Task</h2>
        <label htmlFor="taskName"> Name:</label>
        <input className='input' type="text" id="taskName" name="taskName" />
        <label htmlFor='task'>Task:</label>
        <input className='input' type='text' id='task'/>
        <button type="submit" style={{backgroundColor:'transparent',border:'2px solid white',borderRadius:'20px'}}>Create Task</button>
      </form>
    </div>
 </div>
)}

        <div className="profile-section__details">
          <button> update bio </button>
          <button> edit profile </button>
        </div>
      </div>
      <div className="task">
        <button onClick={toggleTaskCreation} > create task </button>
        <button> assigned task </button>
        {/* to create a task components */}
      </div>
      <div className="profile-section__posts">
        <h1> recent posts</h1>
        <div className="post-section">
            <Post/>
            <Post/>
            <Post/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
  
